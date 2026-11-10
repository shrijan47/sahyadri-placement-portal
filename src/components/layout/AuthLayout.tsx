import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ArrowLeft, GraduationCap } from 'lucide-react';
import { COLLEGE_INFO, BRAND_ASSETS } from '../../constants/tokens';

export const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-between p-4 sm:p-6 lg:p-8 bg-slate-950 text-white relative overflow-hidden select-none">
      {/* Uploaded Sahyadri College Campus Background Image with Subtle Cinematic Float */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-no-repeat pointer-events-none animate-hero-drift"
        style={{
          backgroundImage: `url(${BRAND_ASSETS.collegeLoginBg})`,
          backgroundPosition: 'center 40%',
          backgroundSize: 'cover',
        }}
      />

      {/* Subtle Institutional Dark Forest Green / Slate Overlay for High Contrast & Form Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#071911]/85 via-[#0B251A]/80 to-[#071911]/90 backdrop-blur-[1px] pointer-events-none" />

      {/* Subtle Geometric Constellation & Micro-Grid Overlay */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.08]"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern id="auth-grid-pattern" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-emerald-200" />
            <circle cx="0" cy="0" r="1.5" fill="currentColor" className="text-emerald-300" />
            <circle cx="48" cy="0" r="1.5" fill="currentColor" className="text-emerald-300" />
            <circle cx="0" cy="48" r="1.5" fill="currentColor" className="text-emerald-300" />
            <circle cx="48" cy="48" r="1.5" fill="currentColor" className="text-emerald-300" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#auth-grid-pattern)" />
      </svg>

      {/* Subtle Ambient Vignette */}
      <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/60 pointer-events-none" />

      {/* Top Header Navigation: Link to Public Overview */}
      <div className="w-full max-w-5xl flex items-center justify-between relative z-10 py-2">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/15 text-emerald-100 hover:text-white text-xs font-semibold backdrop-blur-md border border-white/15 transition-all shadow-xs"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Portal Overview</span>
        </Link>

        <div className="hidden sm:flex items-center gap-2 text-xs text-emerald-200/90 font-medium">
          <GraduationCap className="w-4 h-4 text-emerald-300" />
          <span>{COLLEGE_INFO.shortName} Placement & Training Cell</span>
        </div>
      </div>

      {/* Centered Auth Card Container */}
      <div className="w-full max-w-md my-auto relative z-10 py-4">
        <Outlet />
      </div>

      {/* Bottom Footer Info */}
      <div className="w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-emerald-200/70 relative z-10 py-2 border-t border-white/10">
        <span>&copy; {new Date().getFullYear()} {COLLEGE_INFO.name}</span>
        <div className="flex items-center gap-4">
          <Link to="/" className="hover:text-white transition-colors">Portal Home</Link>
          <span>&bull;</span>
          <span className="text-emerald-400 font-medium">Autonomous Institution &bull; Affiliated to VTU</span>
        </div>
      </div>
    </div>
  );
};
