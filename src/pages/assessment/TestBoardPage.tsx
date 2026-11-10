import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckSquare,
  Clock,
  Calendar,
  Award,
  Search,
  Filter,
  ArrowRight,
  ShieldAlert,
  GraduationCap,
  BarChart3,
  AlertCircle,
} from 'lucide-react';
import { Button } from '../../components/common/Button';
import type { AssessmentStatus } from '../../types';
import { portalStorage } from '../../lib/portalStorage';
import { useAuth } from '../../hooks/useAuth';

export const TestBoardPage: React.FC = () => {
  const { profile } = useAuth();
  const [activeTab, setActiveTab] = useState<AssessmentStatus>('ongoing');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const allExams = portalStorage.getExams();
  const studentUsn = profile?.usn || '';

  // Filter exams by tab, category, and search query
  const filteredExams = allExams.filter((exam) => {
    const matchesTab = exam.status === activeTab;
    const matchesCategory =
      selectedCategory === 'all' ||
      exam.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      searchQuery.trim() === '' ||
      exam.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exam.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (exam.companyTag && exam.companyTag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesTab && matchesCategory && matchesSearch;
  });

  const ongoingCount = allExams.filter((e) => e.status === 'ongoing').length;
  const upcomingCount = allExams.filter((e) => e.status === 'upcoming').length;
  const completedCount = allExams.filter((e) => e.status === 'completed').length;

  const categories: { label: string; value: string }[] = [
    { label: 'All Categories', value: 'all' },
    { label: 'Core Technical', value: 'core technical' },
    { label: 'Quantitative', value: 'quantitative' },
    { label: 'Logical', value: 'logical' },
    { label: 'Verbal', value: 'verbal' },
  ];

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'Quantitative':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Logical':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Verbal':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Core Technical':
      default:
        return 'bg-emerald-50 text-[#205A40] border-emerald-200';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#205A40] uppercase tracking-wider mb-1">
            <GraduationCap className="w-4 h-4" />
            <span>Placement Assessment Engine</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Aptitude Examination Board
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mt-1 leading-relaxed">
            Timed, proctored examinations across Quantitative Aptitude, Logical Reasoning, Verbal Ability, and Core Technical disciplines.
          </p>
        </div>

        {/* Live Metrics Summary */}
        <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-200/80 text-xs text-slate-600">
          <div className="text-center px-3 border-r border-slate-200">
            <div className="text-base font-black text-[#205A40]">{ongoingCount}</div>
            <div className="text-[10px] uppercase font-bold text-slate-400">Live Active</div>
          </div>
          <div className="text-center px-3 border-r border-slate-200">
            <div className="text-base font-black text-blue-600">{upcomingCount}</div>
            <div className="text-[10px] uppercase font-bold text-slate-400">Scheduled</div>
          </div>
          <div className="text-center px-3">
            <div className="text-base font-black text-purple-600">{completedCount}</div>
            <div className="text-[10px] uppercase font-bold text-slate-400">Archive</div>
          </div>
        </div>
      </div>

      {/* Tab Controls & Filters */}
      <div className="bg-white rounded-2xl p-4 shadow-xs border border-slate-100 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Main Tabs (Ongoing, Upcoming, Completed) */}
          <div className="inline-flex items-center p-1 bg-slate-100 rounded-full text-xs font-bold select-none">
            <button
              type="button"
              onClick={() => setActiveTab('ongoing')}
              className={`px-4 py-2 rounded-full transition-all flex items-center gap-1.5 ${
                activeTab === 'ongoing'
                  ? 'bg-[#205A40] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Ongoing</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  activeTab === 'ongoing' ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                }`}
              >
                {ongoingCount}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('upcoming')}
              className={`px-4 py-2 rounded-full transition-all flex items-center gap-1.5 ${
                activeTab === 'upcoming'
                  ? 'bg-[#205A40] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Upcoming</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  activeTab === 'upcoming' ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                }`}
              >
                {upcomingCount}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('completed')}
              className={`px-4 py-2 rounded-full transition-all flex items-center gap-1.5 ${
                activeTab === 'completed'
                  ? 'bg-[#205A40] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Completed</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  activeTab === 'completed' ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                }`}
              >
                {completedCount}
              </span>
            </button>
          </div>

          {/* Search Input & Category Filter */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search assessments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#205A40] w-full sm:w-48 text-slate-800"
              />
            </div>

            <div className="flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="text-xs bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#205A40] cursor-pointer"
              >
                {categories.map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Tests Grid */}
      {filteredExams.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExams.map((exam, index) => (
            <div
              key={exam.id}
              className={`bg-white rounded-3xl p-6 shadow-xs border border-slate-200/80 card-hover-lift transition-all flex flex-col justify-between space-y-4 group animate-fade-up stagger-${Math.min(8, (index % 6) + 1)}`}
            >
              <div className="space-y-3">
                {/* Card Top Meta */}
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${getCategoryBadgeClass(
                      exam.category
                    )}`}
                  >
                    {exam.category}
                  </span>

                  {exam.isLive ? (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                      Live Now
                    </span>
                  ) : (
                    <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {exam.scheduledDate}
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#205A40] transition-colors leading-snug">
                    {exam.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {exam.description}
                  </p>
                </div>

                {/* Exam Details Badges */}
                <div className="grid grid-cols-2 gap-2 pt-1 text-[11px] text-slate-600">
                  <div className="flex items-center gap-1.5 bg-slate-50 p-2 rounded-xl border border-slate-100">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exam.durationMinutes} mins</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-50 p-2 rounded-xl border border-slate-100">
                    <CheckSquare className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exam.totalQuestions} Questions</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-50 p-2 rounded-xl border border-slate-100">
                    <Award className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exam.totalMarks} Marks</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-50 p-2 rounded-xl border border-slate-100">
                    <ShieldAlert className="w-3.5 h-3.5 text-slate-400" />
                    <span>
                      {exam.negativeMarking ? `-${exam.negativeMarkValue} Neg` : 'No Neg'}
                    </span>
                  </div>
                </div>

                {exam.companyTag && (
                  <div className="text-[10px] font-semibold text-slate-400 flex items-center gap-1">
                    <span>Pattern:</span>
                    <span className="text-slate-600 font-bold">{exam.companyTag}</span>
                    <span>&bull;</span>
                    <span>{exam.batch}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons based on Status */}
              <div className="pt-2 border-t border-slate-100">
                {exam.status === 'ongoing' && (
                  portalStorage.isTestCompletedByStudent(exam.id, studentUsn) ? (
                    <div className="flex items-center gap-2">
                      <Link to={`/exam/${exam.id}/results`} className="flex-1">
                        <Button variant="navy" fullWidth={true} size="sm">
                          <BarChart3 className="w-3.5 h-3.5 mr-1" />
                          <span>View Scorecard</span>
                        </Button>
                      </Link>
                      <Link to={`/exam/${exam.id}`} className="flex-1">
                        <Button variant="outline" fullWidth={true} size="sm">
                          <span>Retake</span>
                        </Button>
                      </Link>
                    </div>
                  ) : (
                    <Link to={`/exam/${exam.id}`} className="block">
                      <Button variant="primary-blue" fullWidth={true} size="sm">
                        <span>Start Assessment</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Button>
                    </Link>
                  )
                )}

                {exam.status === 'upcoming' && (
                  <Link to={`/exam/${exam.id}/instructions`} className="block">
                    <Button variant="outline" fullWidth={true} size="sm">
                      <span>View Instructions</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  </Link>
                )}

                {exam.status === 'completed' && (
                  <Link to={`/exam/${exam.id}/results`} className="block">
                    <Button variant="navy" fullWidth={true} size="sm">
                      <BarChart3 className="w-3.5 h-3.5 mr-1" />
                      <span>Review Scorecard</span>
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 space-y-3">
          <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
            <AlertCircle className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-800">No Assessments Found</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            No examinations match the current tab and filter criteria. Try resetting the category or search keyword.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
};
