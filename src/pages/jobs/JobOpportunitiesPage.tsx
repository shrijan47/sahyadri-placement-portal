import React, { useState, useMemo } from 'react';
import {
  Briefcase,
  Search,
  ExternalLink,
  GraduationCap,
  MapPin,
  Sparkles,
  AlertCircle,
  X,
  ChevronRight,
  Clock,
} from 'lucide-react';
import {
  JOB_BRANCHES,
  JOB_CATEGORIES,
  JOB_STATUSES,
  type JobOpportunity,
} from '../../data/jobsData';
import { portalStorage } from '../../lib/portalStorage';

export const JobOpportunitiesPage: React.FC = () => {
  const allJobs = useMemo(() => portalStorage.getJobs(), []);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBranch, setSelectedBranch] = useState<string>('All Branches');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');
  const [selectedStatus, setSelectedStatus] = useState<string>('All Statuses');
  const [minCgpaFilter, setMinCgpaFilter] = useState<number>(0);
  const [selectedJobModal, setSelectedJobModal] = useState<JobOpportunity | null>(null);

  // Filtered jobs
  const filteredJobs = useMemo(() => {
    return allJobs.filter((job) => {
      // Branch filter
      if (
        selectedBranch !== 'All Branches' &&
        !job.eligibleBranches.includes(selectedBranch)
      ) {
        return false;
      }

      // Category filter
      if (
        selectedCategory !== 'All Categories' &&
        job.jobCategory !== selectedCategory
      ) {
        return false;
      }

      // Status filter
      if (selectedStatus !== 'All Statuses' && job.status !== selectedStatus) {
        return false;
      }

      // CGPA filter
      if (minCgpaFilter > 0 && job.minimumCgpa > minCgpaFilter) {
        return false;
      }

      // Search query
      const q = searchQuery.toLowerCase().trim();
      if (!q) return true;
      return (
        job.companyName.toLowerCase().includes(q) ||
        job.jobRole.toLowerCase().includes(q) ||
        job.requiredSkills.some((s) => s.toLowerCase().includes(q)) ||
        job.location.toLowerCase().includes(q)
      );
    });
  }, [searchQuery, selectedBranch, selectedCategory, selectedStatus, minCgpaFilter]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#174330] via-[#205A40] to-[#2D7354] rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none flex items-center justify-center">
          <Briefcase className="w-96 h-96 -mr-20 text-white" />
        </div>

        <div className="relative z-10 space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-emerald-200 text-xs font-bold uppercase tracking-wider border border-white/15">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Campus Recruitment Central</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
            Job Opportunities & Campus Drives
          </h1>

          <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
            Explore verified recruitment opportunities, eligibility criteria, CTC packages, and
            direct application pathways for Sahyadri engineering graduates.
          </p>
        </div>
      </div>

      {/* Demo Notice Banner */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3 text-xs text-amber-900">
        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold">Institutional Notice: </span>
          The opportunities below represent typical campus recruitment drives with verified official corporate
          career links. Always verify your eligibility criteria and internal registration status with the
          Sahyadri Placement Office.
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs space-y-5">
        {/* Search Input & CGPA Quick Filter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by company, role, skills (e.g., 'TCS', 'Python', 'Algorithms')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 text-xs sm:text-sm rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#205A40] text-slate-800 placeholder-slate-400 shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick CGPA Filter */}
          <div className="flex items-center gap-3 px-4 py-2 bg-slate-50 rounded-2xl border border-slate-200">
            <GraduationCap className="w-5 h-5 text-[#205A40] shrink-0" />
            <div className="flex-1">
              <div className="flex justify-between text-[11px] font-bold text-slate-700">
                <span>My CGPA Filter</span>
                <span className="text-[#205A40] font-mono">
                  {minCgpaFilter === 0 ? 'All' : `>= ${minCgpaFilter}`}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="9"
                step="0.5"
                value={minCgpaFilter}
                onChange={(e) => setMinCgpaFilter(parseFloat(e.target.value))}
                className="w-full accent-[#205A40] h-1.5 cursor-pointer mt-1"
              />
            </div>
          </div>
        </div>

        {/* Filter Badges Row 1: Branches */}
        <div className="space-y-1.5">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
            Eligible Branch
          </span>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
            {JOB_BRANCHES.map((b) => {
              const isSelected = selectedBranch === b;
              return (
                <button
                  key={b}
                  onClick={() => setSelectedBranch(b)}
                  className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-[#205A40] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {b}
                </button>
              );
            })}
          </div>
        </div>

        {/* Filter Badges Row 2: Status & Category */}
        <div className="flex flex-wrap items-center gap-4 pt-1">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Status:
            </span>
            <div className="flex items-center gap-1.5">
              {JOB_STATUSES.map((st) => (
                <button
                  key={st}
                  onClick={() => setSelectedStatus(st)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    selectedStatus === st
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Category:
            </span>
            <div className="flex items-center gap-1.5 overflow-x-auto">
              {JOB_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-emerald-100 text-[#205A40] border border-emerald-300'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-2 font-medium">
        <span>
          Showing <strong className="text-slate-900">{filteredJobs.length}</strong> opportunities
        </span>
        <button
          onClick={() => {
            setSearchQuery('');
            setSelectedBranch('All Branches');
            setSelectedCategory('All Categories');
            setSelectedStatus('All Statuses');
            setMinCgpaFilter(0);
          }}
          className="text-[#205A40] hover:underline font-semibold"
        >
          Reset All Filters
        </button>
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredJobs.map((job) => {
          const isActive = job.status === 'Active';
          const isUpcoming = job.status === 'Upcoming';

          return (
            <div
              key={job.id}
              className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                {/* Header: Company, Location, Status */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#205A40] font-black text-lg shadow-xs">
                      {job.companyName.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 leading-snug">
                        {job.jobRole}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                        <span className="font-semibold text-slate-700">{job.companyName}</span>
                        <span>&bull;</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          {job.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider shrink-0 ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        : isUpcoming
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'bg-slate-100 text-slate-500 border border-slate-200'
                    }`}
                  >
                    {job.status}
                  </span>
                </div>

                {/* Salary CTC & Deadline Highlight */}
                <div className="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Compensation / CTC
                    </span>
                    <span className="text-sm font-black text-[#205A40]">
                      {job.salaryCtc}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Deadline
                    </span>
                    <span className="text-xs font-bold text-slate-800 flex items-center gap-1 mt-0.5">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      {job.applicationDeadline}
                    </span>
                  </div>
                </div>

                {/* Eligibility Criteria */}
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center justify-between text-slate-600">
                    <span className="font-semibold">Eligible Branches:</span>
                    <div className="flex flex-wrap gap-1 justify-end">
                      {job.eligibleBranches.map((br) => (
                        <span
                          key={br}
                          className="px-2 py-0.5 rounded-md bg-emerald-50 text-[#205A40] text-[10px] font-bold border border-emerald-200"
                        >
                          {br}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-slate-600 pt-1">
                    <span className="font-semibold">Minimum CGPA Required:</span>
                    <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded text-[11px]">
                      {job.minimumCgpa.toFixed(1)}+
                    </span>
                  </div>
                </div>

                {/* Required Skills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {job.requiredSkills.map((sk) => (
                    <span
                      key={sk}
                      className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-medium"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedJobModal(job)}
                  className="text-xs font-bold text-slate-700 hover:text-[#205A40] flex items-center gap-1"
                >
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={job.officialApplicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs ${
                    isActive
                      ? 'bg-[#205A40] hover:bg-[#174330] text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <span>Official Career Link</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {filteredJobs.length === 0 && (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 space-y-3">
          <Briefcase className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">No job openings found</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            No active campus drives match your current filter combination. Try clearing your filters or selecting "All Branches".
          </p>
        </div>
      )}

      {/* Job Details Modal */}
      {selectedJobModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-100 animate-scaleUp overflow-hidden">
            <div className="p-6 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#205A40] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {selectedJobModal.companyName}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">
                  {selectedJobModal.jobRole}
                </h3>
              </div>
              <button
                onClick={() => setSelectedJobModal(null)}
                className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-5 text-xs text-slate-700 leading-relaxed">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                <h4 className="font-bold text-slate-800 uppercase tracking-wider text-[11px]">
                  Drive Overview
                </h4>
                <p className="text-slate-600">{selectedJobModal.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                  <span className="text-slate-500 block text-[10px] uppercase font-bold">Package / CTC</span>
                  <span className="font-black text-slate-900 text-sm">{selectedJobModal.salaryCtc}</span>
                </div>
                <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
                  <span className="text-slate-500 block text-[10px] uppercase font-bold">Deadline</span>
                  <span className="font-bold text-blue-900 text-xs">{selectedJobModal.applicationDeadline}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-800 uppercase tracking-wider text-[11px]">
                  Recruitment Evaluation Workflow
                </h4>
                <div className="space-y-2">
                  {selectedJobModal.selectionProcess.map((proc, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 font-medium"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#205A40] text-white flex items-center justify-center text-[10px] font-bold">
                        {i + 1}
                      </span>
                      <span>{proc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => setSelectedJobModal(null)}
                className="px-4 py-2 rounded-xl bg-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-300"
              >
                Close
              </button>

              <a
                href={selectedJobModal.officialApplicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#205A40] text-white text-xs font-bold hover:bg-[#174330] shadow-sm"
              >
                <span>Proceed to Official Career Page</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
