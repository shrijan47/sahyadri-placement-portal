import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Target,
  Award,
  BookOpen,
  Briefcase,
  Users,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Building2,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  TrendingUp,
  Sparkles,
  HelpCircle,
  LogIn,
  Compass,
} from 'lucide-react';
import { BRAND_ASSETS, COLLEGE_INFO } from '../../constants/tokens';
import { useAuth } from '../../hooks/useAuth';

export const AboutPage: React.FC = () => {
  const { user, profile } = useAuth();
  const isAdmin = profile?.role === 'admin' || profile?.role === 'faculty';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 animate-fadeIn">
      {/* Hero Header Section */}
      <div className="bg-gradient-to-r from-[#174330] via-[#205A40] to-[#2D7354] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
        {/* Subtle decorative background watermark */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none flex items-center justify-center">
          <GraduationCap className="w-96 h-96 -mr-20 text-white" />
        </div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-emerald-200 text-xs font-bold uppercase tracking-wider border border-white/15">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Department of Placement & Training &bull; SCEM</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Empowering Sahyadri Engineers for Global Careers
          </h1>

          <p className="text-emerald-100/90 text-base sm:text-lg leading-relaxed font-normal">
            The Sahyadri Placement Preparation Portal is the official institutional assessment,
            continuous aptitude training, and career enablement platform designed specifically for students
            of Sahyadri College of Engineering & Management (SCEM), Mangaluru.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            {user ? (
              // Authenticated quick links
              <>
                <Link
                  to={isAdmin ? '/admin' : '/dashboard'}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-400 text-slate-900 font-black text-sm hover:bg-amber-300 transition-all shadow-md hover:shadow-lg"
                >
                  <span>Go to {isAdmin ? 'Admin Console' : 'Student Dashboard'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to={isAdmin ? '/admin' : '/test-board'}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-colors"
                >
                  <Clock className="w-4 h-4" />
                  <span>{isAdmin ? 'Manage Examinations' : 'View Aptitude Tests'}</span>
                </Link>
              </>
            ) : (
              // Public visitor CTAs
              <>
                <Link
                  to="/login"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-400 text-slate-900 font-black text-sm hover:bg-amber-300 transition-all shadow-md hover:shadow-lg"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Student & Faculty Login</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#facilities"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-colors"
                >
                  <Compass className="w-4 h-4" />
                  <span>Explore Portal Facilities</span>
                </a>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Institutional Overview & Mission */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-slate-100 shadow-xs space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#EBF7F0] flex items-center justify-center text-[#205A40]">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900">About Sahyadri Placement & Training</h2>
              <p className="text-xs text-slate-500 font-medium">
                Sahyadri College of Engineering & Management, Adyar, Mangaluru
              </p>
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            The Department of Placement & Training at Sahyadri acts as an agile bridge between academia and industry.
            With a proven track record of placing engineering students in Fortune 500 corporations, Tier-1 technology services,
            and high-growth product startups, our mission is to ensure every student attains career excellence through
            rigorous, continuous, and data-driven preparation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-[#205A40]">
                <Target className="w-4 h-4" />
                <span>Our Vision</span>
              </div>
              <p className="text-xs text-slate-600 leading-normal">
                To cultivate industry-ready engineering professionals equipped with strong analytical faculties, ethical leadership, and superior technical problem-solving capabilities.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-600">
                <Award className="w-4 h-4" />
                <span>Excellence Benchmark</span>
              </div>
              <p className="text-xs text-slate-600 leading-normal">
                Continuous competency benchmarking via computer-based aptitude tests matching national qualifier standards and leading technology recruiter assessment formats.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Facts / Stats */}
        <div className="bg-[#EBF7F0] rounded-3xl p-8 border border-[#C6ECD4] shadow-xs flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-black text-[#205A40]">Placement Portal Highlights</h3>
            <ul className="space-y-3 text-xs text-slate-700">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#205A40] shrink-0" />
                <span><strong>20 Reusable CBT Aptitude Exams</strong> with timed proctoring</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#205A40] shrink-0" />
                <span><strong>Real-time negative marking</strong> (-0.25) simulation</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#205A40] shrink-0" />
                <span><strong>Comprehensive question review</strong> with step-by-step solutions</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#205A40] shrink-0" />
                <span><strong>Company-specific mock patterns</strong> (TCS, Infosys, Wipro, Accenture)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#205A40] shrink-0" />
                <span><strong>Centralized study repository</strong> across 10 specialized categories</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-[#C6ECD4] text-center">
            <span className="text-[11px] font-bold text-[#205A40] uppercase tracking-wider">
              Accredited by NAAC with &apos;A&apos; Grade &bull; Approved by AICTE
            </span>
          </div>
        </div>
      </div>

      {/* Portal Core Facilities & Capabilities */}
      <div id="facilities" className="space-y-6 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Portal Capabilities & Student Facilities
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Everything an engineering student needs to prepare for campus recruitment rounds
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#205A40] flex items-center justify-center font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Aptitude Examination Engine</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Experience authentic test environments with live countdown timers, question status palettes (Answered,
              Marked for Review, Unvisited), and automatic submission upon timer expiry.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Curated Study Materials</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Access comprehensive revision notes, mathematical formula cheat sheets, logic puzzles, and core CS
              concepts (DSA, DBMS, OS, Networks, OOPs) along with official company papers.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Campus Placement Drives</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Stay informed about active recruitment notices, CTC packages, eligibility criteria, and direct links
              to verified official corporate career registration portals.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Interview Preparation</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Master both Technical and HR rounds with standard frameworks like the STAR method, common behavioral
              questions, system design fundamentals, and mock interview guidelines.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Progress & Performance Analytics</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Track individual progress over time with category-wise breakdowns across Quantitative, Logical, Verbal,
              and Technical topics to systematically reinforce knowledge areas.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Secure USN Authentication</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Role-based access protects sensitive administrative controls while granting students dedicated portals
              with brute-force rate-limiting, session protection, and temporary credential enforcement.
            </p>
          </div>
        </div>
      </div>

      {/* Instructions for Students on Using the Portal */}
      <div id="guidelines" className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xs space-y-6 scroll-mt-24">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-black text-slate-900">Operating Instructions for Students</h2>
            <p className="text-xs text-slate-500 font-medium">Standard operating guidelines for assessment sessions</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="w-6 h-6 rounded-full bg-[#205A40] text-white flex items-center justify-center text-xs font-bold shrink-0">1</span>
            <div className="space-y-0.5">
              <h4 className="text-sm font-bold text-slate-900">Login with Institutional Credentials</h4>
              <p className="text-xs text-slate-600">
                Log in using your official VTU USN (e.g. <code>4SF24CI160</code>) and assigned password. Ensure you are on the Student tab.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="w-6 h-6 rounded-full bg-[#205A40] text-white flex items-center justify-center text-xs font-bold shrink-0">2</span>
            <div className="space-y-0.5">
              <h4 className="text-sm font-bold text-slate-900">Check Test Instructions Before Launching</h4>
              <p className="text-xs text-slate-600">
                Read the duration, marks, and negative marking scheme on the instructions screen. Check the declaration box to start.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="w-6 h-6 rounded-full bg-[#205A40] text-white flex items-center justify-center text-xs font-bold shrink-0">3</span>
            <div className="space-y-0.5">
              <h4 className="text-sm font-bold text-slate-900">Manage Examination Time</h4>
              <p className="text-xs text-slate-600">
                Monitor the real-time countdown timer. The exam auto-submits when the timer reaches 00:00. Unanswered questions do not incur negative marks.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="w-6 h-6 rounded-full bg-[#205A40] text-white flex items-center justify-center text-xs font-bold shrink-0">4</span>
            <div className="space-y-0.5">
              <h4 className="text-sm font-bold text-slate-900">Review Solutions and Explanations</h4>
              <p className="text-xs text-slate-600">
                Upon submission, review the comprehensive scorecard and click &quot;Review Solutions&quot; to study detailed derivations and answers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Official Institutional Contact Footer Card */}
      <div id="contact" className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl space-y-6 scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <img
                src={BRAND_ASSETS.sahyadriLogoPng}
                alt="Sahyadri Logo"
                className="h-10 w-auto bg-white p-1 rounded-lg"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = BRAND_ASSETS.sahyadriLogoSvg;
                }}
              />
              <div>
                <h3 className="text-lg font-black tracking-tight">{COLLEGE_INFO.name}</h3>
                <p className="text-xs text-slate-400 font-medium">Department of Placement & Training</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{COLLEGE_INFO.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>placement@sahyadri.edu.in</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>+91 824 2277222</span>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <span>&copy; {new Date().getFullYear()} Sahyadri Placement Preparation Portal. All rights reserved.</span>
          <span className="text-emerald-400 font-semibold">Autonomous Institution &bull; Affiliated to VTU, Belagavi</span>
        </div>
      </div>
    </div>
  );
};
