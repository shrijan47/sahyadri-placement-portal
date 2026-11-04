import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  RotateCcw,
  Sparkles,
  BookOpen,
  ChevronDown,
  ChevronUp,
  BarChart2,
  ShieldCheck,
} from 'lucide-react';
import { getExamConfigById } from '../../data/examCatalog';
import type { ExamSubmissionResult, QuestionCategory } from '../../types';
import { portalStorage } from '../../lib/portalStorage';
import { Button } from '../../components/common/Button';
import { COLLEGE_INFO } from '../../constants/tokens';

export const ExamResultsPage: React.FC = () => {
  const { testId } = useParams<{ testId: string }>();
  const [result, setResult] = useState<ExamSubmissionResult | null>(null);
  const [showFullReview, setShowFullReview] = useState(false);
  const [filterReviewCategory, setFilterReviewCategory] = useState<string>('all');

  const exam = getExamConfigById(testId || 'exam-dsa-midsem');

  useEffect(() => {
    if (!testId) return;

    // Load from sessionStorage
    const stored = sessionStorage.getItem(`sahyadri_exam_result_${testId}`);
    if (stored) {
      try {
        setResult(JSON.parse(stored));
        return;
      } catch (e) {
        console.error('Error parsing stored exam result:', e);
      }
    }

    // Fallback to centralized persistent local storage
    const persistentAttempts = portalStorage.getExamAttempts();
    const match = persistentAttempts.find((a) => a.testId === testId);
    if (match) {
      setResult(match);
    }
  }, [testId]);

  if (!result || !exam) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-500 mx-auto flex items-center justify-center">
          <BarChart2 className="w-6 h-6" />
        </div>
        <h2 className="text-xl font-bold text-slate-800">Scorecard Not Available</h2>
        <p className="text-xs text-slate-500">
          No submission record found for this session. Please take the assessment to generate verified score results.
        </p>
        <div className="pt-2">
          <Link to={`/exam/${testId || 'exam-dsa-midsem'}`}>
            <Button variant="primary-blue" size="sm">
              Launch Assessment
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const formatDuration = (totalSeconds: number): string => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}m ${secs}s`;
  };

  const filteredReviews = result.questionReviews.filter((qr) => {
    if (filterReviewCategory === 'all') return true;
    return qr.question.category.toLowerCase() === filterReviewCategory.toLowerCase();
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Top Completion Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-slate-100 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-[#205A40]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Assessment Completed &bull; {COLLEGE_INFO.shortName}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {result.testTitle}
            </h1>
            <p className="text-xs text-slate-500 font-medium">
              Candidate: <strong>{result.studentName}</strong> &bull; Submitted on{' '}
              {new Date(result.submittedAt).toLocaleDateString()} at{' '}
              {new Date(result.submittedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>

          {/* Pass/Fail Verdict Pill */}
          <div
            className={`px-4 py-2 rounded-2xl border text-center self-start sm:self-center font-bold text-xs ${
              result.passed
                ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                : 'bg-rose-50 text-rose-800 border-rose-200'
            }`}
          >
            <div className="text-base font-extrabold">{result.percentage}%</div>
            <div>{result.passed ? 'PASSED &bull; ELIGIBLE' : 'NEEDS PRACTICE'}</div>
          </div>
        </div>

        {/* 4 Metric Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 text-center">
            <div className="text-[11px] font-bold text-blue-700 uppercase tracking-wider mb-1">
              Total Score
            </div>
            <div className="text-2xl font-black text-blue-900">
              {result.totalScore} / {result.maxScore}
            </div>
            <div className="text-[10px] text-blue-600 font-medium">Marks Secured</div>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 text-center">
            <div className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider mb-1">
              Correct
            </div>
            <div className="text-2xl font-black text-emerald-900">
              {result.correctCount}
            </div>
            <div className="text-[10px] text-emerald-600 font-medium">
              +{(result.correctCount * 1.0).toFixed(1)} marks
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-rose-50 border border-rose-100 text-center">
            <div className="text-[11px] font-bold text-rose-700 uppercase tracking-wider mb-1">
              Incorrect
            </div>
            <div className="text-2xl font-black text-rose-900">
              {result.incorrectCount}
            </div>
            <div className="text-[10px] text-rose-600 font-medium">
              {exam.negativeMarking ? `-${(result.incorrectCount * exam.negativeMarkValue).toFixed(2)} negative` : 'No negative'}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <div className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
              Time Taken
            </div>
            <div className="text-2xl font-black text-slate-800">
              {formatDuration(result.timeTakenSeconds)}
            </div>
            <div className="text-[10px] text-slate-500 font-medium">
              of {exam.durationMinutes}m allotted
            </div>
          </div>
        </div>

        {/* Category Breakdown Table */}
        <div className="pt-2 space-y-3">
          <h3 className="text-sm font-extrabold text-slate-900">Category-Wise Performance Breakdown</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {(Object.keys(result.categoryBreakdown) as QuestionCategory[]).map((cat) => {
              const data = result.categoryBreakdown[cat];
              if (data.total === 0) return null;
              const catPercent = Math.round((data.correct / data.total) * 100);

              return (
                <div
                  key={cat}
                  className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5"
                >
                  <div className="flex justify-between items-center text-xs font-bold text-slate-800">
                    <span>{cat}</span>
                    <span className="text-[#205A40]">
                      {data.correct}/{data.total} ({catPercent}%)
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-[#205A40] h-full rounded-full transition-all"
                      style={{ width: `${catPercent}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Controls */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <Link to="/test-board">
            <Button variant="outline" size="sm">
              <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
              <span>Back to Test Board</span>
            </Button>
          </Link>

          <div className="flex items-center gap-2">
            <Button
              variant="primary-blue"
              size="sm"
              onClick={() => setShowFullReview(!showFullReview)}
            >
              <BookOpen className="w-3.5 h-3.5 mr-1.5" />
              <span>{showFullReview ? 'Hide Solutions Review' : 'Review Solutions & Explanations'}</span>
              {showFullReview ? (
                <ChevronUp className="w-3.5 h-3.5 ml-1" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5 ml-1" />
              )}
            </Button>

            <Link to="/dashboard">
              <Button variant="navy" size="sm">
                <span>Go to Dashboard</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Detailed Question Review Accordion */}
      {showFullReview && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-100 space-y-6 animate-fadeIn">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <h3 className="text-base font-extrabold text-slate-900">
                Detailed Solutions & Answer Explanations
              </h3>
              <p className="text-xs text-slate-500">
                Verified answer key and step-by-step mathematical & technical rationales
              </p>
            </div>

            {/* Category Filter */}
            <select
              value={filterReviewCategory}
              onChange={(e) => setFilterReviewCategory(e.target.value)}
              className="text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-slate-700"
            >
              <option value="all">All Domains</option>
              <option value="quantitative">Quantitative</option>
              <option value="logical">Logical</option>
              <option value="verbal">Verbal</option>
              <option value="core technical">Core Technical</option>
            </select>
          </div>

          {/* Question List */}
          <div className="space-y-6 divide-y divide-slate-100">
            {filteredReviews.map((review, qIdx) => {
              const q = review.question;
              const optionLetters = ['A', 'B', 'C', 'D'];

              return (
                <div key={q.id} className="pt-6 space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-800">
                          Q{qIdx + 1}.
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                          {q.category}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-900 whitespace-pre-line leading-relaxed">
                        {q.questionText}
                      </p>
                    </div>

                    {/* Question Status Badge */}
                    <div className="shrink-0 text-right">
                      {review.selectedOption === null ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                          <HelpCircle className="w-3.5 h-3.5" />
                          Unattempted (0.0)
                        </span>
                      ) : review.isCorrect ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          +{q.marks}.0
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">
                          <XCircle className="w-3.5 h-3.5" />
                          {exam.negativeMarking ? `-${exam.negativeMarkValue}` : '0.0'}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Options List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {q.options.map((opt, optIdx) => {
                      const isCorrectAnswer = optIdx === q.correctAnswer;
                      const isStudentSelected = optIdx === review.selectedOption;

                      let optClass = 'bg-white border-slate-200 text-slate-700';

                      if (isCorrectAnswer) {
                        optClass = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold';
                      } else if (isStudentSelected && !isCorrectAnswer) {
                        optClass = 'bg-rose-50 border-rose-400 text-rose-950 line-through';
                      }

                      return (
                        <div
                          key={optIdx}
                          className={`p-2.5 rounded-xl border flex items-center gap-2 ${optClass}`}
                        >
                          <span className="w-5 h-5 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center font-bold text-[10px] shrink-0">
                            {optionLetters[optIdx]}
                          </span>
                          <span className="flex-1">{opt}</span>
                          {isCorrectAnswer && (
                            <span className="text-[10px] font-extrabold text-emerald-700">
                              ✓ Correct
                            </span>
                          )}
                          {isStudentSelected && !isCorrectAnswer && (
                            <span className="text-[10px] font-extrabold text-rose-700">
                              ✕ Your Answer
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation box */}
                  {q.explanation && (
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs text-slate-600 space-y-1">
                      <div className="font-bold text-[#205A40] text-[11px] flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Rationale & Solution:</span>
                      </div>
                      <p className="text-[11px] leading-relaxed">{q.explanation}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
