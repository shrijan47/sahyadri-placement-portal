import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, BookOpen, Newspaper, Briefcase, UserCheck } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { COLLEGE_INFO } from '../../constants/tokens';

interface ComingSoonPageProps {
  title: string;
  description: string;
  category: 'study' | 'news' | 'jobs' | 'profile';
  estimatedRelease?: string;
}

export const ComingSoonPage: React.FC<ComingSoonPageProps> = ({
  title,
  description,
  category,
  estimatedRelease = 'Upcoming Placement Cycle Release',
}) => {
  const iconMap = {
    study: <BookOpen className="w-8 h-8 text-[#205A40]" />,
    news: <Newspaper className="w-8 h-8 text-blue-600" />,
    jobs: <Briefcase className="w-8 h-8 text-amber-600" />,
    profile: <UserCheck className="w-8 h-8 text-purple-600" />,
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-center">
      <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 max-w-2xl mx-auto space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto shadow-xs">
          {iconMap[category]}
        </div>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-[#205A40]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{COLLEGE_INFO.portalName}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h1>
          <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 text-xs text-slate-600 max-w-md mx-auto">
          <p className="font-semibold text-slate-800 mb-1">Status: Under Active Development</p>
          <p className="text-slate-500">{estimatedRelease}</p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link to="/dashboard">
            <Button variant="primary-blue" size="md">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Return to Dashboard
            </Button>
          </Link>
          <Link to="/test-board">
            <Button variant="outline" size="md">
              View Aptitude Tests
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

