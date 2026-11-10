import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  Clock,
  Bookmark,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Send,
  X,
  Check,
} from 'lucide-react';
import { getExamConfigById } from '../../data/examCatalog';
import type { ExamConfig, ExamSubmissionResult, QuestionCategory } from '../../types';
import { useAuth } from '../../hooks/useAuth';
import { supabase } from '../../lib/supabase';
import { portalStorage } from '../../lib/portalStorage';
import { Button } from '../../components/common/Button';

export const ExamInterfacePage: React.FC = () => {
  const { testId } = useParams<{ testId: string }>();
  const navigate = useNavigate();
  const { user, profile, isConfigured } = useAuth();

  // Stable memoized exam configuration
  const exam: ExamConfig | undefined = useMemo(() => {
    return getExamConfigById(testId || 'exam-dsa-midsem');
  }, [testId]);

  // Question navigation
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Student answer state: Record<questionId, selectedOption (0-3 or null)>
  // Initialized directly from sessionStorage to prevent empty object flashes
  const [answers, setAnswers] = useState<Record<string, number | null>>(() => {
    const currentExam = getExamConfigById(testId || 'exam-dsa-midsem');
    if (!currentExam) return {};
    try {
      const saved = sessionStorage.getItem(`sahyadri_answers_${currentExam.id}`);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Marked for review state: Record<questionId, boolean>
  const [markedForReview, setMarkedForReview] = useState<Record<string, boolean>>(() => {
    const currentExam = getExamConfigById(testId || 'exam-dsa-midsem');
    if (!currentExam) return {};
    try {
      const saved = sessionStorage.getItem(`sahyadri_review_${currentExam.id}`);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Time remaining in seconds
  const [secondsRemaining, setSecondsRemaining] = useState<number>(() => {
    if (!exam) return 45 * 60;
    const savedTime = sessionStorage.getItem(`sahyadri_timer_${exam.id}`);
    return savedTime ? parseInt(savedTime, 10) : exam.durationMinutes * 60;
  });

  // Modals & submission state
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Guard: Mandatory password change takes absolute priority
  useEffect(() => {
    if (profile?.must_change_password) {
      navigate('/dashboard');
    }
  }, [profile, navigate]);

  // Persist state to sessionStorage on answer or review change
  useEffect(() => {
    if (!exam) return;
    try {
      sessionStorage.setItem(`sahyadri_answers_${exam.id}`, JSON.stringify(answers));
      sessionStorage.setItem(`sahyadri_review_${exam.id}`, JSON.stringify(markedForReview));
    } catch {}
  }, [answers, markedForReview, exam]);

  // Submit assessment logic
  const handleFinalSubmit = useCallback(async () => {
    if (!exam || isSubmitting) return;

    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      const questions = exam.questions || [];
      const timeTaken = exam.durationMinutes * 60 - secondsRemaining;

      let totalScore = 0;
      let correctCount = 0;
      let incorrectCount = 0;
      let unansweredCount = 0;

      const categoryBreakdown: Record<
        QuestionCategory,
        { correct: number; total: number; score: number; maxScore: number }
      > = {
        Quantitative: { correct: 0, total: 0, score: 0, maxScore: 0 },
        Logical: { correct: 0, total: 0, score: 0, maxScore: 0 },
        Verbal: { correct: 0, total: 0, score: 0, maxScore: 0 },
        'Core Technical': { correct: 0, total: 0, score: 0, maxScore: 0 },
      };

      const questionReviews = questions.map((q) => {
        const selected = answers[q.id] ?? null;
        const isAnswered = selected !== null;
        const isCorrect = isAnswered && selected === q.correctAnswer;

        // Update category stats
        const cat = q.category in categoryBreakdown ? q.category : 'Core Technical';
        categoryBreakdown[cat].total += 1;
        categoryBreakdown[cat].maxScore += q.marks;

        let awardedScore = 0;

        if (!isAnswered) {
          unansweredCount += 1;
        } else if (isCorrect) {
          correctCount += 1;
          awardedScore = q.marks;
          totalScore += q.marks;
          categoryBreakdown[cat].correct += 1;
          categoryBreakdown[cat].score += q.marks;
        } else {
          incorrectCount += 1;
          const penalty = exam.negativeMarking ? exam.negativeMarkValue : 0;
          awardedScore = -penalty;
          totalScore -= penalty;
          categoryBreakdown[cat].score -= penalty;
        }

        return {
          question: q,
          selectedOption: selected,
          isCorrect,
          scoreAwarded: awardedScore,
        };
      });

      // Keep minimum score bounded at 0
      totalScore = Math.max(0, Math.round(totalScore * 100) / 100);
      const percentage = Math.round((totalScore / exam.totalMarks) * 1000) / 10;
      const passed = percentage >= exam.passPercentage;

      const result: ExamSubmissionResult = {
        attemptId: `attempt-${Date.now()}`,
        testId: exam.id,
        testTitle: exam.title,
        studentId: user?.id || 'preview-student',
        studentName: profile?.full_name || 'Student',
        totalScore,
        maxScore: exam.totalMarks,
        percentage,
        passed,
        correctCount,
        incorrectCount,
        unansweredCount,
        markedForReviewCount: Object.values(markedForReview).filter(Boolean).length,
        timeTakenSeconds: timeTaken,
        submittedAt: new Date().toISOString(),
        categoryBreakdown,
        questionReviews,
      };

      // Save to Supabase ONLY if configured, authenticated, and NOT in Demo Mode
      if (isConfigured && user && !profile?.is_demo) {
        try {
          await supabase.from('test_attempts').insert({
            test_id: exam.id,
            user_id: user.id,
            score: totalScore,
            max_score: exam.totalMarks,
            percentage,
            time_taken_seconds: timeTaken,
            status: 'evaluated',
            submitted_at: new Date().toISOString(),
          } as any);
        } catch (dbErr) {
          console.warn('[Exam] Supabase attempt write failed, continuing with local scorecard:', dbErr);
        }
      }

      // Save to Centralized Local Persistence (survives tab closure, logout & browser restart)
      const studentUsn = profile?.usn || user?.user_metadata?.usn || '4SF24CI160';
      portalStorage.saveExamAttempt(result, studentUsn);

      // Persist results for immediate scorecard view
      sessionStorage.setItem(`sahyadri_exam_result_${exam.id}`, JSON.stringify(result));
      sessionStorage.removeItem(`sahyadri_timer_${exam.id}`);
      sessionStorage.removeItem(`sahyadri_answers_${exam.id}`);
      sessionStorage.removeItem(`sahyadri_review_${exam.id}`);

      // Navigate to results page
      navigate(`/exam/${exam.id}/results`);
    } catch (err) {
      setSubmissionError(err instanceof Error ? err.message : 'An error occurred during submission.');
      setIsSubmitting(false);
    }
  }, [exam, isSubmitting, secondsRemaining, answers, markedForReview, user, profile, isConfigured, navigate]);

  // Countdown timer effect
  useEffect(() => {
    if (!exam) return;

    timerRef.current = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          handleFinalSubmit();
          return 0;
        }
        const updated = prev - 1;
        sessionStorage.setItem(`sahyadri_timer_${exam.id}`, updated.toString());
        return updated;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [exam, handleFinalSubmit]);

  if (!exam || !exam.questions || exam.questions.length === 0) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-800">Assessment Error</h2>
        <p className="text-xs text-slate-500">No questions available for this assessment.</p>
        <Link to="/test-board">
          <Button variant="primary-blue" size="sm">
            Back to Test Board
          </Button>
        </Link>
      </div>
    );
  }

  const questions = exam.questions;
  const currentQ = questions[currentQuestionIndex];

  // Option selection - immediately updates local React state and synchronizes sessionStorage
  const handleSelectOption = (optionIndex: number) => {
    if (!currentQ) return;
    setAnswers((prev) => {
      const updated = {
        ...prev,
        [currentQ.id]: optionIndex,
      };
      if (exam) {
        try {
          sessionStorage.setItem(`sahyadri_answers_${exam.id}`, JSON.stringify(updated));
        } catch {}
      }
      return updated;
    });
  };

  // Clear answer
  const handleClearAnswer = () => {
    if (!currentQ) return;
    setAnswers((prev) => {
      const updated = {
        ...prev,
        [currentQ.id]: null,
      };
      if (exam) {
        try {
          sessionStorage.setItem(`sahyadri_answers_${exam.id}`, JSON.stringify(updated));
        } catch {}
      }
      return updated;
    });
  };

  // Toggle mark for review
  const handleToggleReview = () => {
    if (!currentQ) return;
    setMarkedForReview((prev) => {
      const updated = {
        ...prev,
        [currentQ.id]: !prev[currentQ.id],
      };
      if (exam) {
        try {
          sessionStorage.setItem(`sahyadri_review_${exam.id}`, JSON.stringify(updated));
        } catch {}
      }
      return updated;
    });
  };

  // Format time remaining MM:SS
  const formatTime = (totalSeconds: number): string => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const isLowTime = secondsRemaining <= 300; // < 5 mins

  // Counters for question palette
  const answeredCount = Object.values(answers).filter((a) => a !== null && a !== undefined).length;
  const reviewCount = Object.values(markedForReview).filter(Boolean).length;
  const unansweredCount = questions.length - answeredCount;

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col select-none">
      {/* Top Test Header Bar */}
      <header className="sticky top-0 z-30 bg-white border-b border-slate-200 px-4 sm:px-6 py-3 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Exam Title & Category */}
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <div>
              <h1 className="text-sm sm:text-base font-extrabold text-slate-900 truncate max-w-xs sm:max-w-md">
                {exam.title}
              </h1>
              <p className="text-[11px] text-slate-500 font-medium">
                {exam.category} &bull; Marks: {exam.totalMarks} &bull; Negative: {exam.negativeMarking ? `-${exam.negativeMarkValue}` : 'None'}
              </p>
            </div>
          </div>

          {/* Right Controls: Timer & Submit Button */}
          <div className="flex items-center gap-3">
            {/* Live Countdown Timer */}
            <div
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold transition-colors ${
                isLowTime
                  ? 'bg-rose-100 text-rose-800 border border-rose-300 animate-pulse'
                  : 'bg-slate-100 text-slate-800 border border-slate-200'
              }`}
            >
              <Clock className={`w-4 h-4 ${isLowTime ? 'text-rose-600' : 'text-slate-500'}`} />
              <span>{formatTime(secondsRemaining)}</span>
            </div>

            {/* Submit Exam Button */}
            <Button
              variant="primary-coral"
              size="sm"
              onClick={() => setShowSubmitModal(true)}
              className="text-xs px-4 py-1.5"
            >
              <Send className="w-3.5 h-3.5 mr-1" />
              <span>Submit</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Examination Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Current Question & Options Area (8 cols) */}
        <div className="lg:col-span-8 flex flex-col justify-between space-y-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-200 space-y-6">
            {/* Question Header Meta */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-900 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </span>
                <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  {currentQ.category}
                </span>
                <span className="text-[11px] font-medium text-slate-500">
                  {currentQ.difficulty}
                </span>
              </div>

              <div className="text-xs font-bold text-slate-700">
                Marking: <span className="text-emerald-700">+{currentQ.marks}</span> /{' '}
                <span className="text-rose-600">
                  {exam.negativeMarking ? `-${exam.negativeMarkValue}` : '0'}
                </span>
              </div>
            </div>

            {/* Question Text */}
            <div className="text-base sm:text-lg font-semibold text-slate-900 leading-relaxed whitespace-pre-line">
              {currentQ.questionText}
            </div>

            {/* Four MCQ Options */}
            <div className="space-y-3 pt-2">
              {currentQ.options.map((opt, optIndex) => {
                const isSelected = answers[currentQ.id] === optIndex;
                const optionLetters = ['A', 'B', 'C', 'D'];

                return (
                  <button
                    key={optIndex}
                    type="button"
                    onClick={() => handleSelectOption(optIndex)}
                    className={`w-full text-left p-4 sm:p-4.5 rounded-xl border-2 transition-all flex items-center justify-between gap-3.5 group cursor-pointer ${
                      isSelected
                        ? 'border-[#205A40] bg-[#EBF3EF] text-slate-900 font-semibold shadow-xs ring-2 ring-[#205A40]/25'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/80 text-slate-800'
                    }`}
                  >
                    <div className="flex items-start gap-3.5 flex-1 min-w-0">
                      <span
                        className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black shrink-0 transition-colors ${
                          isSelected
                            ? 'bg-[#205A40] text-white shadow-xs'
                            : 'bg-slate-100 text-slate-600 border border-slate-200 group-hover:bg-slate-200/80'
                        }`}
                      >
                        {optionLetters[optIndex]}
                      </span>
                      <span className="text-xs sm:text-sm pt-0.5 leading-relaxed text-slate-900 break-words font-medium">
                        {opt}
                      </span>
                    </div>

                    {/* Distinct Visual Radio & Checkmark Indicator */}
                    <div className="shrink-0 flex items-center justify-center pl-2">
                      {isSelected ? (
                        <div className="w-5 h-5 rounded-full bg-[#205A40] text-white flex items-center justify-center shadow-xs">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-slate-300 group-hover:border-slate-400 bg-white" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question Action Controls */}
          <div className="bg-white rounded-2xl p-4 shadow-xs border border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {/* Mark for Review Button */}
              <button
                type="button"
                onClick={handleToggleReview}
                className={`px-3.5 py-2 text-xs font-semibold rounded-full border transition-all flex items-center gap-1.5 ${
                  markedForReview[currentQ.id]
                    ? 'bg-purple-50 text-purple-700 border-purple-300 shadow-xs'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span>
                  {markedForReview[currentQ.id] ? 'Marked for Review' : 'Mark for Review'}
                </span>
              </button>

              {/* Clear Response Button */}
              {answers[currentQ.id] !== null && answers[currentQ.id] !== undefined && (
                <button
                  type="button"
                  onClick={handleClearAnswer}
                  className="px-3 py-2 text-xs font-semibold text-rose-600 hover:text-rose-800 hover:bg-rose-50 rounded-full transition-colors flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Clear Response</span>
                </button>
              )}
            </div>

            {/* Previous & Next Navigation */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                disabled={currentQuestionIndex === 0}
                onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                <span>Previous</span>
              </Button>

              {currentQuestionIndex < questions.length - 1 ? (
                <Button
                  variant="primary-blue"
                  size="sm"
                  onClick={() => setCurrentQuestionIndex((prev) => Math.min(questions.length - 1, prev + 1))}
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              ) : (
                <Button
                  variant="primary-coral"
                  size="sm"
                  onClick={() => setShowSubmitModal(true)}
                >
                  <span>Submit Exam</span>
                  <Send className="w-3.5 h-3.5 ml-1" />
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Question Palette & Status Summary (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-xs border border-slate-200 space-y-4">
            <h3 className="text-sm font-extrabold text-slate-900 border-b border-slate-100 pb-2">
              Question Palette
            </h3>

            {/* Counters */}
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2 bg-emerald-50 rounded-xl border border-emerald-100">
                <div className="text-base font-black text-emerald-700">{answeredCount}</div>
                <div className="text-[10px] text-emerald-800 font-bold">Answered</div>
              </div>
              <div className="p-2 bg-slate-50 rounded-xl border border-slate-100">
                <div className="text-base font-black text-slate-700">{unansweredCount}</div>
                <div className="text-[10px] text-slate-500 font-bold">Unanswered</div>
              </div>
              <div className="p-2 bg-purple-50 rounded-xl border border-purple-100">
                <div className="text-base font-black text-purple-700">{reviewCount}</div>
                <div className="text-[10px] text-purple-800 font-bold">Review</div>
              </div>
            </div>

            {/* Grid of Numbered Question Buttons */}
            <div className="grid grid-cols-5 gap-2 max-h-72 overflow-y-auto p-1">
              {questions.map((q, idx) => {
                const isCurrent = idx === currentQuestionIndex;
                const isAnswered = answers[q.id] !== null && answers[q.id] !== undefined;
                const isReview = Boolean(markedForReview[q.id]);

                let buttonClass = 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200';

                if (isReview && isAnswered) {
                  buttonClass = 'bg-purple-600 text-white border-purple-700 font-bold shadow-xs';
                } else if (isReview) {
                  buttonClass = 'bg-purple-100 text-purple-800 border-purple-300 font-bold';
                } else if (isAnswered) {
                  buttonClass = 'bg-emerald-600 text-white border-emerald-700 font-bold shadow-xs';
                }

                if (isCurrent) {
                  buttonClass += ' ring-2 ring-[#205A40] ring-offset-2 font-black scale-105';
                }

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setCurrentQuestionIndex(idx)}
                    className={`h-9 rounded-xl border text-xs font-semibold flex items-center justify-center transition-all ${buttonClass}`}
                  >
                    <span>{idx + 1}</span>
                  </button>
                );
              })}
            </div>

            {/* Color Status Legend */}
            <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded bg-emerald-600 inline-block" />
                <span>Answered</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded bg-slate-100 border border-slate-300 inline-block" />
                <span>Unanswered</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded bg-purple-100 border border-purple-300 inline-block" />
                <span>Marked for Review</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded bg-white border-2 border-[#205A40] inline-block" />
                <span>Current Question</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Submission Confirmation Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-100 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-bold text-slate-900">Confirm Exam Submission</h3>
              <button
                type="button"
                onClick={() => setShowSubmitModal(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Summary Statistics */}
            <div className="space-y-3 text-xs text-slate-600">
              <p>Are you sure you want to finish and submit your examination?</p>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                <div className="flex justify-between font-medium">
                  <span>Total Questions:</span>
                  <strong className="text-slate-900">{questions.length}</strong>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Answered:</span>
                  <strong className="text-emerald-700">{answeredCount}</strong>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Unanswered:</span>
                  <strong className="text-rose-600">{unansweredCount}</strong>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Marked for Review:</span>
                  <strong className="text-purple-700">{reviewCount}</strong>
                </div>
              </div>

              {unansweredCount > 0 && (
                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-[11px] leading-snug">
                    You have <strong>{unansweredCount}</strong> unanswered questions remaining. You cannot edit your answers once submitted.
                  </span>
                </div>
              )}

              {submissionError && (
                <div className="p-2.5 bg-red-50 text-red-800 rounded-xl text-xs">
                  {submissionError}
                </div>
              )}
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowSubmitModal(false)}
                disabled={isSubmitting}
              >
                Return to Exam
              </Button>
              <Button
                variant="primary-coral"
                size="sm"
                onClick={handleFinalSubmit}
                isLoading={isSubmitting}
              >
                Yes, Final Submit
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
