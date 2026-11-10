import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Search,
  Download,
  Eye,
  FileText,
  CheckCircle2,
  Sparkles,
  X,
  Building,
  Layers,
} from 'lucide-react';
import {
  STUDY_CATEGORIES,
  type StudyResource,
} from '../../data/studyMaterialsData';
import { portalStorage } from '../../lib/portalStorage';

export const StudyMaterialsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Resources');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [previewResource, setPreviewResource] = useState<StudyResource | null>(null);

  const allResources = useMemo(() => portalStorage.getStudyMaterials(), []);

  // Filtered resources
  const filteredResources = useMemo(() => {
    return allResources.filter((res) => {
      const matchesCategory =
        selectedCategory === 'All Resources' || res.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        res.title.toLowerCase().includes(q) ||
        res.description.toLowerCase().includes(q) ||
        res.category.toLowerCase().includes(q) ||
        res.tags.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#174330] via-[#205A40] to-[#2D7354] rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none flex items-center justify-center animate-hero-drift">
          <BookOpen className="w-96 h-96 -mr-20 text-white" />
        </div>

        <div className="relative z-10 space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-emerald-200 text-xs font-bold uppercase tracking-wider border border-white/15 animate-hero-sub">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Placement Preparation Repository</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight animate-hero-title">
            Study Materials & Technical Cheatsheets
          </h1>

          <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed animate-hero-sub">
            Curated preparation guides, aptitude shortcuts, core computer science concept summaries,
            and 19 actual company placement question papers (TCS, Infosys, CTS, Wipro, Accenture)
            with step-by-step solutions.
          </p>
        </div>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs space-y-4">
        {/* Search Input */}
        <div className="relative max-w-2xl">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search by topic, keyword, or company (e.g., 'TCS', 'Normalization', 'Syllogisms', 'Two Pointers')..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#205A40] text-sm text-slate-800 placeholder-slate-400 transition-all shadow-xs"
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

        {/* Category Horizontal Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
          {STUDY_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#205A40] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span>{cat}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Status Bar */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-2 font-medium">
        <span>
          Showing <strong className="text-slate-800">{filteredResources.length}</strong> resources in{' '}
          <strong className="text-[#205A40]">{selectedCategory}</strong>
        </span>
        <span className="flex items-center gap-1 text-[11px] text-slate-400">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          Includes 19 verified official company PDFs
        </span>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((res, index) => {
          const isCompanyPaper = res.category === 'Company Assessment Papers';

          return (
            <div
              key={res.id}
              className={`bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs card-hover-lift transition-all flex flex-col justify-between group space-y-4 animate-fade-up stagger-${Math.min(8, (index % 6) + 1)}`}
            >
              <div className="space-y-3">
                {/* Header Tag & Format */}
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                      isCompanyPaper
                        ? 'bg-emerald-50 text-[#205A40] border border-emerald-200'
                        : 'bg-blue-50 text-blue-700 border border-blue-200'
                    }`}
                  >
                    {isCompanyPaper ? <Building className="w-3 h-3" /> : <Layers className="w-3 h-3" />}
                    <span>{res.category}</span>
                  </span>

                  <span className="text-[11px] font-semibold text-slate-400 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">
                    {res.format}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#205A40] transition-colors leading-snug">
                  {res.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {res.description}
                </p>

                {/* Metadata Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {res.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <div className="text-[11px] text-slate-400">
                  <span>{res.pagesOrDuration || 'Reference Document'}</span>
                  {res.fileSize && <span> &bull; {res.fileSize}</span>}
                </div>

                <div className="flex items-center gap-2">
                  {res.contentSnippet && (
                    <button
                      onClick={() => setPreviewResource(res)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                      title="Quick Preview"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Study</span>
                    </button>
                  )}

                  {res.downloadUrl ? (
                    <a
                      href={res.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#205A40] hover:bg-[#174330] text-white text-xs font-bold transition-colors shadow-xs"
                      title="Download PDF"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>PDF</span>
                    </a>
                  ) : (
                    <button
                      onClick={() => setPreviewResource(res)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#205A40] hover:bg-[#174330] text-white text-xs font-bold transition-colors shadow-xs"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredResources.length === 0 && (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 space-y-3">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">No resources matched your search</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Try adjusting your search query or selecting "All Resources" to browse all categories.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All Resources');
            }}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl text-xs font-bold text-slate-700"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Quick Study Modal */}
      {previewResource && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-100 animate-scaleUp overflow-hidden">
            {/* Modal Header */}
            <div className="p-6 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#205A40] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {previewResource.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">
                  {previewResource.title}
                </h3>
              </div>
              <button
                onClick={() => setPreviewResource(null)}
                className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-4 text-sm text-slate-700 leading-relaxed font-sans">
              <p className="text-slate-600 text-xs italic">
                {previewResource.description}
              </p>

              {previewResource.contentSnippet ? (
                <div className="p-4 bg-slate-900 text-slate-100 rounded-2xl font-mono text-xs overflow-x-auto whitespace-pre-wrap leading-relaxed">
                  {previewResource.contentSnippet}
                </div>
              ) : (
                <div className="p-8 text-center bg-slate-50 rounded-2xl space-y-3">
                  <FileText className="w-10 h-10 text-[#205A40] mx-auto" />
                  <p className="text-xs text-slate-600 font-medium">
                    This document is available for immediate study or PDF download.
                  </p>
                  {previewResource.downloadUrl && (
                    <a
                      href={previewResource.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#205A40] text-white text-xs font-bold hover:bg-[#174330] shadow-sm"
                    >
                      <Download className="w-4 h-4" />
                      <span>Open Full PDF Document</span>
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">
                {previewResource.isOfficialPdf ? 'Verified Placement Paper' : 'Preparatory Reference Resource'}
              </span>
              <button
                onClick={() => setPreviewResource(null)}
                className="px-5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
