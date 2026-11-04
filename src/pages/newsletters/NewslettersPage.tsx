import React, { useState, useMemo } from 'react';
import {
  Newspaper,
  Calendar,
  Building2,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  UserCheck,
  Search,
  ChevronRight,
  AlertCircle,
  X,
  FileText,
} from 'lucide-react';
import { type NewsletterEdition } from '../../data/newslettersData';
import { portalStorage } from '../../lib/portalStorage';

export const NewslettersPage: React.FC = () => {
  const allNewsletters = useMemo(() => portalStorage.getNewsletters(), []);
  const [selectedEditionId, setSelectedEditionId] = useState<string>(
    allNewsletters[0]?.id || 'issue-04-nov-2026'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalEdition, setActiveModalEdition] = useState<NewsletterEdition | null>(null);

  // Filter editions
  const filteredEditions = useMemo(() => {
    return allNewsletters.filter((ed) => {
      if (!ed.isPublished) return false;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return true;
      return (
        ed.title.toLowerCase().includes(q) ||
        ed.summary.toLowerCase().includes(q) ||
        ed.spotlightCompany.name.toLowerCase().includes(q) ||
        ed.volume.toLowerCase().includes(q)
      );
    });
  }, [allNewsletters, searchQuery]);

  const currentEdition = useMemo(() => {
    return (
      allNewsletters.find((ed) => ed.id === selectedEditionId) ||
      filteredEditions[0] ||
      allNewsletters[0]
    );
  }, [selectedEditionId, filteredEditions, allNewsletters]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#174330] via-[#205A40] to-[#2D7354] rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none flex items-center justify-center">
          <Newspaper className="w-96 h-96 -mr-20 text-white" />
        </div>

        <div className="relative z-10 space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-emerald-200 text-xs font-bold uppercase tracking-wider border border-white/15">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Weekly Departmental Bulletin</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
            Placement Cell Weekly Newsletters
          </h1>

          <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
            Stay informed with company recruitment spotlights, national qualifier aptitude shortcuts,
            candidate interview experiences, and weekly career preparation strategies from the
            Sahyadri Placement & Training Cell.
          </p>
        </div>
      </div>

      {/* Demo Content Disclaimer Banner */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3 text-xs text-amber-900">
        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold">Notice & Disclosure: </span>
          The editions displayed here are curated demonstrative sample publications structured for placement training.
          Official verified statistical annual brochures are released by the Principal & Placement Director at cycle close.
        </div>
      </div>

      {/* Main Content Layout: Sidebar of Editions + Current Edition View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Edition Selector (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-black text-slate-900 uppercase tracking-wider">
                Newsletter Archive
              </h2>
              <span className="text-[11px] font-bold text-[#205A40] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                {filteredEditions.length} Editions
              </span>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search issues, companies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#205A40] placeholder-slate-400"
              />
            </div>

            {/* Editions List */}
            <div className="space-y-2 pt-1 max-h-[500px] overflow-y-auto">
              {filteredEditions.map((ed) => {
                const isSelected = ed.id === currentEdition?.id;
                return (
                  <button
                    key={ed.id}
                    onClick={() => setSelectedEditionId(ed.id)}
                    className={`w-full text-left p-3.5 rounded-2xl transition-all border ${
                      isSelected
                        ? 'bg-[#EBF7F0] border-[#C6ECD4] text-slate-900 shadow-xs'
                        : 'bg-white hover:bg-slate-50 border-slate-100 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                      <span className="font-semibold">{ed.volume}</span>
                      <span className="font-mono text-[10px]">{ed.publishDate}</span>
                    </div>

                    <h3
                      className={`text-xs font-bold line-clamp-2 ${
                        isSelected ? 'text-[#205A40]' : 'text-slate-800'
                      }`}
                    >
                      {ed.title}
                    </h3>

                    <div className="mt-2 flex items-center justify-between text-[11px]">
                      <span className="text-slate-500 font-medium truncate max-w-[150px]">
                        Spotlight: {ed.spotlightCompany.name}
                      </span>
                      <ChevronRight
                        className={`w-3.5 h-3.5 ${
                          isSelected ? 'text-[#205A40]' : 'text-slate-300'
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Featured Edition Full Display (8 cols) */}
        {currentEdition && (
          <div className="lg:col-span-8 space-y-6">
            {/* Header Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-[#205A40] text-xs font-bold border border-emerald-200">
                    {currentEdition.volume}
                  </span>
                  <span className="text-xs text-slate-400">&bull;</span>
                  <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {currentEdition.publishDate}
                  </span>
                </div>

                <button
                  onClick={() => setActiveModalEdition(currentEdition)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Reader View</span>
                </button>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {currentEdition.title}
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {currentEdition.summary}
              </p>
            </div>

            {/* Spotlight Company Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">
                    Recruiter Spotlight
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    {currentEdition.spotlightCompany.name}
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-400 block font-semibold text-[10px] uppercase">
                    Target Role
                  </span>
                  <span className="font-bold text-slate-800 text-xs">
                    {currentEdition.spotlightCompany.role}
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-400 block font-semibold text-[10px] uppercase">
                    Industry CTC Band
                  </span>
                  <span className="font-bold text-[#205A40] text-xs">
                    {currentEdition.spotlightCompany.ctcRange}
                  </span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Hiring Assessment Workflow
                </h4>
                <div className="space-y-2">
                  {currentEdition.spotlightCompany.hiringProcess.map((round, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#205A40] shrink-0 mt-0.5" />
                      <span>{round}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Preparation Tip & Interview Experience Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Preparation Tip */}
              <div className="bg-[#EBF7F0] border border-[#C6ECD4] rounded-3xl p-6 space-y-3 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold text-[#205A40] uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4 text-amber-500" />
                  <span>Aptitude Quick-Tip</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900">
                  {currentEdition.preparationTip.title}
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed font-normal">
                  {currentEdition.preparationTip.tip}
                </p>
              </div>

              {/* Interview Experience */}
              <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-3xl p-6 space-y-3 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider">
                  <UserCheck className="w-4 h-4 text-blue-600" />
                  <span>Interview Insights</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900">
                  {currentEdition.interviewExperience.company}
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed font-normal italic">
                  "{currentEdition.interviewExperience.roundsDescription}"
                </p>
                <div className="pt-2 border-t border-blue-200/60 text-[11px] font-semibold text-blue-900">
                  Key Takeaway: {currentEdition.interviewExperience.keyTakeaway}
                </div>
              </div>
            </div>

            {/* Additional Articles */}
            {currentEdition.articles.map((art, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xs space-y-3"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                  {art.category}
                </span>
                <h4 className="text-base font-bold text-slate-900">{art.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{art.content}</p>
                {art.authorOrSource && (
                  <span className="text-[11px] text-slate-400 block pt-1 font-medium">
                    Source: {art.authorOrSource}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Reader View Modal */}
      {activeModalEdition && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-100 animate-scaleUp overflow-hidden">
            <div className="p-6 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#205A40] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {activeModalEdition.volume} &bull; {activeModalEdition.publishDate}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">
                  {activeModalEdition.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalEdition(null)}
                className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700 leading-relaxed">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-1">
                  Edition Summary
                </h4>
                <p className="text-xs text-slate-700">{activeModalEdition.summary}</p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-2">
                  Company Spotlight: {activeModalEdition.spotlightCompany.name}
                </h4>
                <p className="text-xs text-slate-600 mb-2">
                  Role: <strong>{activeModalEdition.spotlightCompany.role}</strong> &bull; CTC Band: {activeModalEdition.spotlightCompany.ctcRange}
                </p>
                <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1">
                  {activeModalEdition.spotlightCompany.hiringProcess.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 space-y-1">
                <h4 className="text-xs font-bold text-[#205A40] uppercase tracking-wider">
                  Preparation Tip
                </h4>
                <p className="text-xs text-slate-800 font-semibold">{activeModalEdition.preparationTip.title}</p>
                <p className="text-xs text-slate-700">{activeModalEdition.preparationTip.tip}</p>
              </div>

              <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 space-y-1">
                <h4 className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                  Interview Experience
                </h4>
                <p className="text-xs text-slate-800 font-semibold">{activeModalEdition.interviewExperience.company}</p>
                <p className="text-xs text-slate-700 italic">"{activeModalEdition.interviewExperience.roundsDescription}"</p>
                <p className="text-xs text-blue-900 font-medium">Takeaway: {activeModalEdition.interviewExperience.keyTakeaway}</p>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">
                Sahyadri Placement & Training Department
              </span>
              <button
                onClick={() => setActiveModalEdition(null)}
                className="px-5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
