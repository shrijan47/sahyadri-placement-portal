import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Clock,
  CheckSquare,
  Award,
  ShieldAlert,
  AlertTriangle,
  BookOpen,
  ArrowRight,
} from 'lucide-react';
import { getExamConfigById } from '../../data/examCatalog';
import { Button } from '../../components/common/Button';

export const ExamInstructionsPage: React.FC = () => {
  const { testId } = useParams<{ testId: string }>();
  const navigate = useNavigate();
  const [hasAgreed, setHasAgreed] = useState(false);

  const exam = getExamConfigById(testId || 'exam-dsa-midsem');

  if (!exam) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-800">Assessment Not Found</h2>
        <p className="text-xs text-slate-500">The requested examination identifier does not exist.</p>
        <Link to="/test-board">
          <Button variant="primary-blue" size="sm">
            Back to Test Board
          </Button>
        </Link>
      </div>
    );
  }

  const handleStartExam = () => {
    if (!hasAgreed) return;
    navigate(`/exam/${exam.id}/session`);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      {/* Back button */}
      <div>
        <Link
          to="/test-board"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#205A40] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Test Board</span>
        </Link>
      </div>

      {/* Main Container */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-8">
        {/* Header */}
        <div className="border-b border-slate-100 pb-6 space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#205A40] border border-emerald-200">
              {exam.category}
            </span>
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
              {exam.batch}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {exam.title}
          </h1>

          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-2xl">
            {exam.description}
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-center">
              <div className="flex items-center justify-center gap-1 text-slate-400 text-xs mb-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Duration</span>
              </div>
              <div className="text-lg font-black text-slate-900">{exam.durationMinutes} mins</div>
            </div>

            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-center">
              <div className="flex items-center justify-center gap-1 text-slate-400 text-xs mb-1">
                <CheckSquare className="w-3.5 h-3.5" />
                <span>Questions</span>
              </div>
              <div className="text-lg font-black text-slate-900">{exam.totalQuestions}</div>
            </div>

            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-center">
              <div className="flex items-center justify-center gap-1 text-slate-400 text-xs mb-1">
                <Award className="w-3.5 h-3.5" />
                <span>Total Marks</span>
              </div>
              <div className="text-lg font-black text-slate-900">{exam.totalMarks}</div>
            </div>

            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-center">
              <div className="flex items-center justify-center gap-1 text-slate-400 text-xs mb-1">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Marking</span>
              </div>
              <div className="text-xs font-black text-slate-900 pt-1">
                {exam.negativeMarking ? `+1.0 / -${exam.negativeMarkValue}` : '+1.0 / 0.0'}
              </div>
            </div>
          </div>
        </div>

        {/* Instructions Body */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
            <BookOpen className="w-4 h-4 text-[#205A40]" />
            <span>General Examination Instructions & Rules</span>
          </div>

          <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <h4 className="font-bold text-slate-800 text-xs">1. Question Navigation & Palette:</h4>
              <p>
                Use the <strong>Next</strong> and <strong>Previous</strong> controls or click any question number on the right-hand Question Palette to jump directly to any question. You may change your response at any point before submitting.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <h4 className="font-bold text-slate-800 text-xs">2. Palette Status Color Legend:</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-[10px]">
                    ✓
                  </span>
                  <span>Answered</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-[10px]">
                    ?
                  </span>
                  <span>Unanswered</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-[10px]">
                    ★
                  </span>
                  <span>Marked for Review</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[10px]">
                    ●
                  </span>
                  <span>Current Question</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <h4 className="font-bold text-slate-800 text-xs">3. Timer & Auto-Submission:</h4>
              <p>
                The countdown timer in the top banner will begin immediately when you start. When the time reaches <strong>00:00</strong>, the examination will automatically record and submit your current responses.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold">
                <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Notice on Evaluation Rules & Integrity:</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Browser evaluations utilize state logging and server-side submission checks. Please avoid closing this tab or disconnecting during your assessment session. Duplicate submissions are strictly prevented.
              </p>
            </div>
          </div>
        </div>

        {/* Start Confirmation Form */}
        <div className="pt-6 border-t border-slate-100 space-y-4">
          <label className="flex items-start gap-3 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={hasAgreed}
              onChange={(e) => setHasAgreed(e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded text-[#205A40] focus:ring-[#205A40] border-slate-300"
            />
            <span className="text-xs text-slate-700 font-medium leading-snug">
              I have read, understood and agree to all the examination rules and marking criteria outlined above. I am ready to begin my placement evaluation.
            </span>
          </label>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <Link to="/test-board">
              <Button variant="outline" size="md">
                Cancel & Exit
              </Button>
            </Link>

            <Button
              variant="primary-blue"
              size="md"
              disabled={!hasAgreed}
              onClick={handleStartExam}
              className="w-full sm:w-auto"
            >
              <span>Begin Assessment Now</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
