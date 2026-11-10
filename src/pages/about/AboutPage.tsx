import React, { useState, useEffect, useCallback } from 'react';
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
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  Layers,
  Monitor,
} from 'lucide-react';
import { BRAND_ASSETS, COLLEGE_INFO } from '../../constants/tokens';
import { useAuth } from '../../hooks/useAuth';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { CountUp } from '../../components/common/CountUp';

interface GalleryPhotoItem {
  id: string;
  title: string;
  category: 'Campus' | 'Labs' | 'Training' | 'Drives' | 'Events';
  image: string;
  tag: string;
  description: string;
  location: string;
  aspectRatio: string;
}

const GALLERY_PHOTOS: GalleryPhotoItem[] = [
  {
    id: 'campus-aerial',
    title: 'Sahyadri Riverside Campus Panoramic',
    category: 'Campus',
    image: BRAND_ASSETS.campusHero,
    tag: 'Campus Architecture',
    description:
      'Aerial panoramic perspective of Sahyadri College of Engineering & Management nestled along the banks of the scenic Netravati River, showcasing modern academic blocks, rooftop signage, and lush riverside grounds.',
    location: 'Sahyadri Campus, Adyar, Mangaluru',
    aspectRatio: 'aspect-[16/7]',
  },
  {
    id: 'cbt-labs',
    title: 'Computer-Based Aptitude & Assessment Labs',
    category: 'Labs',
    image: BRAND_ASSETS.computerLab,
    tag: 'Digital Infrastructure',
    description:
      'High-density, fully air-conditioned computer testing center configured with networked workstations, gigabit fiber backbone, and live proctoring for campus-wide aptitude exams and coding drives.',
    location: 'Central Computing Complex, SCEM',
    aspectRatio: 'aspect-[16/10]',
  },
  {
    id: 'mock-interviews',
    title: 'Technical & HR Mock Interview Suites',
    category: 'Training',
    image: BRAND_ASSETS.mockInterview,
    tag: 'Placement Training',
    description:
      'Dedicated mock interview rooms where senior faculty mentors and corporate recruitment veterans conduct rigorous 1-on-1 and panel simulation sessions focusing on technical depth and STAR communication.',
    location: 'Placement Training Center, SCEM',
    aspectRatio: 'aspect-[16/10]',
  },
  {
    id: 'placement-drives',
    title: 'Corporate Placement Drive & Boardroom',
    category: 'Drives',
    image: BRAND_ASSETS.placementDrive,
    tag: 'Recruitment Drives',
    description:
      'The institutional executive boardroom hosting Tier-1 recruiter panels, placement drive orientation talks, and corporate memento presentations honoring placed engineering candidates.',
    location: 'SCEM Executive Boardroom',
    aspectRatio: 'aspect-[16/10]',
  },
  {
    id: 'seminar-hackathons',
    title: 'Technical Seminars & Hackathon Arena',
    category: 'Events',
    image: BRAND_ASSETS.seminarHackathon,
    tag: 'Innovation & Seminars',
    description:
      'Campus auditorium and innovation hall hosting 24-hour hackathons (OSDHACK, Google DSC), technical symposiums, and project reviews with industry jury panels.',
    location: 'Sahyadri Campus Auditorium',
    aspectRatio: 'aspect-[16/10]',
  },
];

const TRAINING_FACILITIES = [
  {
    id: 'mock-interview',
    title: 'Mock Interview & HR Assessment Suites',
    tag: 'Placement Training',
    image: BRAND_ASSETS.mockInterview,
    icon: Users,
    description:
      'Dedicated mock interview rooms equipped for 1-on-1 and panel interviews. Industry experts and faculty assess technical depth, analytical problem solving, and behavioral readiness using the STAR framework.',
    highlights: [
      '1-on-1 & panel simulation formats',
      'Behavioral depth & STAR method coaching',
      'Individualized verbal feedback and scorecard',
    ],
  },
  {
    id: 'cbt-labs',
    title: 'Central CBT Online Testing Center',
    tag: 'Digital Infrastructure',
    image: BRAND_ASSETS.computerLab,
    icon: Monitor,
    description:
      'High-performance computer labs with over 500 networked terminals configured for campus-wide computer-based tests, TCS NQT / Infosys qualifier mocks, and proctored coding assessments.',
    highlights: [
      'Gigabit LAN with uninterrupted power backup',
      'Real-time timer & negative marking simulation',
      'High-density simultaneous testing capacity',
    ],
  },
  {
    id: 'placement-boardroom',
    title: 'Corporate Placement & Selection Boardroom',
    tag: 'Recruitment Drives',
    image: BRAND_ASSETS.placementDrive,
    icon: Briefcase,
    description:
      'The institutional boardroom hosts executive recruitment panels, company orientation drives, HR negotiations, and memento presentations honoring placed engineering candidates.',
    highlights: [
      'Executive corporate panel hospitality',
      'Pre-placement talks and recruiter forums',
      'Formal candidate felicitation & offers',
    ],
  },
  {
    id: 'hackathon-seminars',
    title: 'Sahyadri Auditorium & Innovation Arena',
    tag: 'Technical Excellence',
    image: BRAND_ASSETS.seminarHackathon,
    icon: Award,
    description:
      'A multi-thousand capacity auditorium hosting 24-hour hackathons (such as OSDHACK and Google Developer Student Club contests), guest lectures by industry leaders, and technical conventions.',
    highlights: [
      'OSDHACK & Google DSC hackathons',
      'Industry expert masterclasses & keynotes',
      'Hands-on technical showcase and jury review',
    ],
  },
];

export const AboutPage: React.FC = () => {
  const { user, profile } = useAuth();
  const isAdmin = profile?.role === 'admin' || profile?.role === 'faculty';

  // Gallery interactive states
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos = selectedCategory === 'All'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === selectedCategory);

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (lightboxIndex === null) return;
    if (e.key === 'Escape') {
      setLightboxIndex(null);
    } else if (e.key === 'ArrowRight') {
      setLightboxIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_PHOTOS.length : null));
    } else if (e.key === 'ArrowLeft') {
      setLightboxIndex((prev) => (prev !== null ? (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length : null));
    }
  }, [lightboxIndex]);

  useEffect(() => {
    if (lightboxIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [lightboxIndex, handleKeyDown]);

  const activeLightboxPhoto = lightboxIndex !== null ? GALLERY_PHOTOS[lightboxIndex] : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-14">
      {/* Hero Header Section with Authentic Campus Panoramic & High-Contrast Gradient */}
      <div className="relative rounded-3xl p-8 sm:p-12 lg:p-14 text-white shadow-2xl overflow-hidden min-h-[460px] flex items-center bg-[#071F15]">
        {/* Authentic Sahyadri Campus Panoramic Background */}
        <img
          src={BRAND_ASSETS.campusHero}
          alt="Sahyadri College of Engineering & Management Campus overlooking Netravati River"
          className="absolute inset-0 w-full h-full object-cover object-center transform scale-105 hover:scale-100 transition-transform duration-1000 ease-out"
          loading="eager"
          width={1024}
          height={446}
        />

        {/* Cinematic Institutional Forest-Green Gradient Overlay for Guaranteed Contrast & Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071F15]/95 via-[#0F3524]/90 to-[#174B36]/80 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071F15]/80 via-transparent to-black/25 pointer-events-none" />

        {/* Cinematic drifting decorative background watermark */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none flex items-center justify-center animate-hero-drift">
          <GraduationCap className="w-96 h-96 -mr-20 text-white" />
        </div>

        {/* Ambient subtle lighting glow */}
        <div className="absolute -left-20 -top-20 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-emerald-200 text-xs font-bold uppercase tracking-wider border border-white/15 animate-hero-sub">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Department of Placement & Training &bull; SCEM</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight animate-hero-title">
            Empowering Sahyadri Engineers for Global Careers
          </h1>

          <p className="text-emerald-100/90 text-base sm:text-lg leading-relaxed font-normal animate-hero-sub">
            The Sahyadri Placement Preparation Portal is the official institutional assessment,
            continuous aptitude training, and career enablement platform designed specifically for students
            of Sahyadri College of Engineering & Management (SCEM), Mangaluru.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 animate-hero-cta">
            {user ? (
              // Authenticated quick links
              <>
                <Link
                  to={isAdmin ? '/admin' : '/dashboard'}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-400 text-slate-900 font-black text-sm hover:bg-amber-300 transition-all shadow-md hover:shadow-lg active:scale-95"
                >
                  <span>Go to {isAdmin ? 'Admin Console' : 'Student Dashboard'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to={isAdmin ? '/admin' : '/test-board'}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all active:scale-95"
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
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-400 text-slate-900 font-black text-sm hover:bg-amber-300 transition-all shadow-md hover:shadow-lg active:scale-95"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Student & Faculty Login</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#facilities"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all active:scale-95"
                >
                  <Compass className="w-4 h-4" />
                  <span>Explore Portal Facilities</span>
                </a>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Cinematic Statistical Counter Ribbon */}
      <ScrollReveal direction="up">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs card-hover-lift text-center">
            <div className="text-2xl sm:text-3xl font-black text-[#205A40]">
              <CountUp end={20} duration={1200} />
            </div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">CBT Aptitude Exams</p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs card-hover-lift text-center">
            <div className="text-2xl sm:text-3xl font-black text-[#205A40]">
              <CountUp end={400} duration={1400} suffix="+" />
            </div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Verified MCQs</p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs card-hover-lift text-center">
            <div className="text-2xl sm:text-3xl font-black text-[#205A40]">
              <CountUp end={19} duration={1200} />
            </div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Company Mock Papers</p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs card-hover-lift text-center">
            <div className="text-2xl sm:text-3xl font-black text-amber-600">
              <CountUp end={42} duration={1600} prefix="₹" suffix=" LPA" />
            </div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Highest Package</p>
          </div>
        </div>
      </ScrollReveal>

      {/* Section 1: Authentic Placement Training & Assessment Facilities Showcase */}
      <div id="training-facilities" className="space-y-6 scroll-mt-24">
        <ScrollReveal direction="up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#205A40] text-xs font-bold uppercase tracking-wider border border-emerald-200">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>On-Campus Infrastructure</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Placement Training & Assessment Facilities
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Dedicated training halls, interview suites, and computer testing centers at Sahyadri College of Engineering & Management
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TRAINING_FACILITIES.map((facility, idx) => {
            const IconComp = facility.icon;
            return (
              <ScrollReveal key={facility.id} direction="up" delay={idx * 60}>
                <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs card-hover-lift flex flex-col h-full group">
                  {/* Photo Container with Responsive Aspect Ratio */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      width={1024}
                      height={640}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

                    {/* Tag badge overlay */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#205A40] text-xs font-bold border border-white/40 shadow-xs">
                        <IconComp className="w-3.5 h-3.5 text-[#205A40]" />
                        <span>{facility.tag}</span>
                      </span>
                    </div>

                    {/* Image Caption overlay on bottom */}
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <h3 className="text-base sm:text-lg font-black tracking-tight text-white drop-shadow-sm">
                        {facility.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body description and key highlights */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {facility.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                        Facility Highlights
                      </span>
                      <ul className="space-y-1.5">
                        {facility.highlights.map((item, hIdx) => (
                          <li key={hIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#205A40] shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Institutional Overview & Mission */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <ScrollReveal direction="left" className="lg:col-span-2">
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs card-hover-lift space-y-6">
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
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#205A40]">
                  <Target className="w-4 h-4" />
                  <span>Our Vision</span>
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  To cultivate industry-ready engineering professionals equipped with strong analytical faculties, ethical leadership, and superior technical problem-solving capabilities.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#205A40]">
                  <Award className="w-4 h-4" />
                  <span>Excellence Benchmark</span>
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  Continuous competency benchmarking via computer-based aptitude tests matching national qualifier standards and leading technology recruiter assessment formats.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Quick Facts / Stats */}
        <ScrollReveal direction="right">
          <div className="bg-[#EBF7F0] rounded-3xl p-8 border border-[#C6ECD4] shadow-xs card-hover-lift flex flex-col justify-between space-y-6 h-full">
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
        </ScrollReveal>
      </div>

      {/* Section 2: Sahyadri Campus & Facilities Interactive Gallery */}
      <div id="gallery" className="space-y-6 scroll-mt-24">
        <ScrollReveal direction="up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#205A40] text-xs font-bold uppercase tracking-wider border border-emerald-200">
                <Layers className="w-3.5 h-3.5 text-[#205A40]" />
                <span>Visual Tour</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Sahyadri Campus & Infrastructure Gallery
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Explore authentic photographs of our college campus, computer testing center, interview suites, and auditoriums
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-2xl border border-slate-200/80">
              {['All', 'Campus', 'Labs', 'Training', 'Drives', 'Events'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#205A40] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  {cat === 'All' ? 'All Views' : cat}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, pIdx) => {
            const originalIndex = GALLERY_PHOTOS.findIndex((item) => item.id === photo.id);
            return (
              <ScrollReveal key={photo.id} direction="up" delay={pIdx * 60}>
                <div
                  onClick={() => setLightboxIndex(originalIndex >= 0 ? originalIndex : 0)}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs card-hover-lift cursor-pointer group flex flex-col h-full"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                    <img
                      src={photo.image}
                      alt={photo.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      width={1024}
                      height={640}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    {/* Category pill */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-emerald-300 text-[10px] font-bold border border-slate-700">
                        {photo.tag}
                      </span>
                    </div>

                    {/* Inspect button overlay */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-900 shadow-md">
                        <Maximize2 className="w-4 h-4" />
                      </span>
                    </div>

                    {/* Bottom Location */}
                    <div className="absolute bottom-2.5 left-3 right-3 text-white">
                      <span className="text-[11px] font-medium text-emerald-200 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-emerald-300 shrink-0" />
                        <span className="truncate">{photo.location}</span>
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#205A40] transition-colors">
                        {photo.title}
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-2 mt-1 leading-relaxed">
                        {photo.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#205A40] font-bold">
                      <span>Click to enlarge view</span>
                      <Maximize2 className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal for Fullscreen Photo Inspection */}
      {activeLightboxPhoto && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[92vh] animate-scaleUp text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/80">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold border border-emerald-500/30 uppercase tracking-wider">
                  {activeLightboxPhoto.tag}
                </span>
                <span className="text-xs text-slate-400">
                  {lightboxIndex + 1} of {GALLERY_PHOTOS.length}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setLightboxIndex((lightboxIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length)}
                  className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                  title="Previous Photo (Left Arrow)"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setLightboxIndex((lightboxIndex + 1) % GALLERY_PHOTOS.length)}
                  className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                  title="Next Photo (Right Arrow)"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="p-1.5 rounded-xl bg-slate-800 hover:bg-rose-900/50 text-slate-300 hover:text-rose-200 transition-colors ml-2"
                  title="Close (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Area */}
            <div className="relative bg-black flex items-center justify-center overflow-hidden max-h-[60vh]">
              <img
                src={activeLightboxPhoto.image}
                alt={activeLightboxPhoto.title}
                className="w-full h-auto max-h-[60vh] object-contain"
                width={1024}
                height={600}
              />
            </div>

            {/* Modal Footer / Description */}
            <div className="p-6 bg-slate-900 space-y-2 border-t border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {activeLightboxPhoto.title}
                </h3>
                <span className="text-xs text-emerald-400 flex items-center gap-1.5 shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{activeLightboxPhoto.location}</span>
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {activeLightboxPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Portal Core Facilities & Capabilities */}
      <div id="facilities" className="space-y-6 scroll-mt-24">
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Portal Capabilities & Student Facilities
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Everything an engineering student needs to prepare for campus recruitment rounds
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Clock,
              iconColor: 'bg-emerald-50 text-[#205A40]',
              title: 'Aptitude Examination Engine',
              desc: 'Experience authentic test environments with live countdown timers, question status palettes (Answered, Marked for Review, Unvisited), and automatic submission upon timer expiry.',
            },
            {
              icon: BookOpen,
              iconColor: 'bg-emerald-50 text-[#205A40]',
              title: 'Curated Study Materials',
              desc: 'Access comprehensive revision notes, mathematical formula cheat sheets, logic puzzles, and core CS concepts (DSA, DBMS, OS, Networks, OOPs) along with official company papers.',
            },
            {
              icon: Briefcase,
              iconColor: 'bg-emerald-50 text-[#205A40]',
              title: 'Campus Placement Drives',
              desc: 'Stay informed about active recruitment notices, CTC packages, eligibility criteria, and direct links to verified official corporate career registration portals.',
            },
            {
              icon: Users,
              iconColor: 'bg-amber-50 text-amber-700',
              title: 'Interview Preparation',
              desc: 'Master both Technical and HR rounds with standard frameworks like the STAR method, common behavioral questions, system design fundamentals, and mock interview guidelines.',
            },
            {
              icon: TrendingUp,
              iconColor: 'bg-emerald-50 text-[#205A40]',
              title: 'Progress & Performance Analytics',
              desc: 'Track individual progress over time with category-wise breakdowns across Quantitative, Logical, Verbal, and Technical topics to systematically reinforce knowledge areas.',
            },
            {
              icon: ShieldCheck,
              iconColor: 'bg-emerald-50 text-[#205A40]',
              title: 'Secure USN Authentication',
              desc: 'Role-based access protects sensitive administrative controls while granting students dedicated portals with brute-force rate-limiting, session protection, and temporary credential enforcement.',
            },
          ].map((facility, index) => {
            const IconComponent = facility.icon;
            return (
              <ScrollReveal key={facility.title} direction="up" delay={index * 60}>
                <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs card-hover-lift space-y-3 h-full">
                  <div className={`w-10 h-10 rounded-xl ${facility.iconColor} flex items-center justify-center font-bold`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{facility.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{facility.desc}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Instructions for Students on Using the Portal */}
      <ScrollReveal direction="up">
        <div id="guidelines" className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs card-hover-lift space-y-6 scroll-mt-24">
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
            {[
              {
                num: 1,
                title: 'Login with Institutional Credentials',
                desc: 'Log in using your official VTU USN (e.g. 4SF24CI160) and assigned password. Ensure you are on the Student tab.',
              },
              {
                num: 2,
                title: 'Check Test Instructions Before Launching',
                desc: 'Read the duration, marks, and negative marking scheme on the instructions screen. Check the declaration box to start.',
              },
              {
                num: 3,
                title: 'Manage Examination Time',
                desc: 'Monitor the real-time countdown timer. The exam auto-submits when the timer reaches 00:00. Unanswered questions do not incur negative marks.',
              },
              {
                num: 4,
                title: 'Review Solutions and Explanations',
                desc: 'Upon submission, review the comprehensive scorecard and click "Review Solutions" to study detailed derivations and answers.',
              },
            ].map((step, idx) => (
              <ScrollReveal key={step.num} direction="up" delay={idx * 60}>
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 card-hover-lift h-full">
                  <span className="w-6 h-6 rounded-full bg-[#205A40] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    {step.num}
                  </span>
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-bold text-slate-900">{step.title}</h4>
                    <p className="text-xs text-slate-600">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Official Institutional Contact Footer Card */}
      <ScrollReveal direction="up">
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
      </ScrollReveal>
    </div>
  );
};
