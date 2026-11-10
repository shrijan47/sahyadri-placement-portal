import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  ArrowLeftRight,
  FileText,
  Percent,
  User,
  Sparkles,
  Clock,
  ArrowRight,
  CheckCircle2,
  Calendar as CalendarIcon,
  Loader2,
  TrendingUp,
  Target,
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { supabase } from '../../lib/supabase';
import { BRAND_ASSETS, COLLEGE_INFO, PREVIEW_BENCHMARK_DATA } from '../../constants/tokens';
import { DEMO_STUDENTS } from '../../data/demoAccounts';
import { portalStorage } from '../../lib/portalStorage';
import { InteractiveTestChart } from '../../components/dashboard/InteractiveTestChart';
import { InteractiveSkillsChart } from '../../components/dashboard/InteractiveSkillsChart';
import { CalendarWidget } from '../../components/dashboard/CalendarWidget';
import { Button } from '../../components/common/Button';
import { CountUp } from '../../components/common/CountUp';
import { ScrollReveal } from '../../components/common/ScrollReveal';

export const DashboardPage: React.FC = () => {
  const { user, profile, isConfigured } = useAuth();

  // State
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<
    'any' | 'quantitative' | 'logical' | 'verbal' | 'technical'
  >('any');
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [realAttempts, setRealAttempts] = useState<any[] | null>(null);

  const isRealAuth = Boolean(user && profile && isConfigured);
  const demoStudent = profile?.usn ? DEMO_STUDENTS[profile.usn.toUpperCase()] : null;

  // Determine student display values
  const student = demoStudent
    ? {
        name: demoStudent.name,
        email: demoStudent.email,
        usn: demoStudent.usn,
        department: demoStudent.department,
        semester: `Semester ${demoStudent.semester}`,
        batch: demoStudent.batch,
      }
    : profile
    ? {
        name: profile.full_name || user?.email?.split('@')[0] || 'Student',
        email: profile.email || user?.email || '',
        usn: profile.usn || '4SF-PENDING',
        department: profile.department || 'Computer Science & Engineering',
        semester: 'Semester 5',
        batch: profile.batch || '2024-2028',
      }
    : {
        name: 'Student',
        email: 'student@sahyadri.edu.in',
        usn: '4SF24CI000',
        department: 'Computer Science & Engineering',
        semester: 'Semester 5',
        batch: '2024-2028',
      };

  // Fetch real student attempts if authenticated and configured
  useEffect(() => {
    if (!isRealAuth || !user) {
      return;
    }

    const fetchStudentData = async () => {
      setIsLoadingData(true);
      try {
        const { data, error } = await supabase
          .from('test_attempts')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });

        if (!error && data && data.length > 0) {
          setRealAttempts(data);
        }
      } catch (err) {
        console.warn('[Dashboard] Could not fetch real attempts, falling back to baseline:', err);
      } finally {
        setIsLoadingData(false);
      }
    };

    fetchStudentData();
  }, [isRealAuth, user]);

  // Determine dynamic persistent KPI metrics
  const persistentAttempts = portalStorage.getExamAttempts(student.usn);
  const baseKpi = demoStudent
    ? demoStudent.kpi
    : realAttempts && realAttempts.length > 0
    ? {
        rank: 1,
        avgScorePercentage: Math.round(
          realAttempts.reduce((acc, curr) => acc + (curr.score / curr.max_score) * 100, 0) /
            realAttempts.length
        ),
        totalTests: realAttempts.length,
        attendancePercentage: 100,
      }
    : PREVIEW_BENCHMARK_DATA.kpi;

  const kpiData = portalStorage.getStudentKpi(student.usn, baseKpi);
  const dynamicLeaderboard = portalStorage.getLeaderboard();

  // Tests Overview chart data (including any newly completed exam attempts)
  const baseTestsData = demoStudent
    ? demoStudent.testHistory.map((t) => ({
        code: t.testCode,
        name: t.testName,
        topper: t.topperScore,
        student: t.studentScore,
      }))
    : PREVIEW_BENCHMARK_DATA.testsOverview;

  const extraTestsData = persistentAttempts.map((att, i) => ({
    code: `T${baseTestsData.length + i + 1}`,
    name: att.testTitle,
    topper: att.maxScore,
    student: att.totalScore,
  }));

  const testsData = [...baseTestsData, ...extraTestsData].slice(-6);

  // Skills Summary chart data based on selected category
  const skillsData = PREVIEW_BENCHMARK_DATA.skillsSummary[selectedSkillCategory];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Top Banner / Welcome Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-100 border-t-4 border-t-[#205A40] flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-bold text-[#205A40] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{COLLEGE_INFO.portalName}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Welcome back, <span className="text-[#205A40]">{student.name}</span>!
          </h1>

          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-500 font-medium">
            <span className="inline-flex items-center gap-1 font-mono font-bold text-[#205A40] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
              USN: {student.usn}
            </span>
            <span>&bull;</span>
            <span className="text-slate-700 font-medium">{student.department}</span>
            <span>&bull;</span>
            <span className="text-slate-600">{student.semester} ({student.batch})</span>
          </div>
        </div>

        {/* Status / Session Badge & Quick Actions */}
        <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#EBF3EF] text-[#205A40] border border-[#205A40]/20 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#205A40]" />
            ACADEMIC YEAR 2024–28 &bull; {student.usn}
          </div>

          <div className="flex items-center gap-3 pt-1">
            <Link
              to="/test-board"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#205A40] hover:bg-[#174B36] px-4 py-2 rounded-xl transition-colors shadow-xs"
            >
              <span>Launch Test</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/study-materials"
              className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-[#205A40] transition-colors"
            >
              <span>Study Hub</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (~65-70% on desktop) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Section B & C: Refined 4 KPI Metric Cards with Circular Attendance Indicator */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {/* 1. Rank Card */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs card-hover-lift flex flex-col justify-between h-32 animate-fade-up stagger-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Batch Rank</span>
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shadow-2xs">
                  <Award className="w-4 h-4" />
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  <CountUp end={kpiData.rank} prefix="#" duration={1000} />
                </div>
                <p className="text-[11px] text-slate-400 font-medium mt-0.5">Cohort Standing</p>
              </div>
            </div>

            {/* 2. Avg Score % Card */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs card-hover-lift flex flex-col justify-between h-32 animate-fade-up stagger-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Avg Score</span>
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-[#205A40] flex items-center justify-center shadow-2xs">
                  <ArrowLeftRight className="w-4 h-4" />
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  <CountUp end={kpiData.avgScorePercentage} suffix="%" duration={1200} />
                </div>
                <p className="text-[11px] text-emerald-600 font-semibold mt-0.5">Evaluation Aggregate</p>
              </div>
            </div>

            {/* 3. Total Tests Card */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs card-hover-lift flex flex-col justify-between h-32 animate-fade-up stagger-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Evaluations</span>
                <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shadow-2xs">
                  <FileText className="w-4 h-4" />
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  <CountUp end={kpiData.totalTests} duration={1000} />
                </div>
                <p className="text-[11px] text-slate-400 font-medium mt-0.5">Tests Completed</p>
              </div>
            </div>

            {/* 4. % Attendance Card with Circular Ring Progress Indicator */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs card-hover-lift flex flex-col justify-between h-32 animate-fade-up stagger-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Attendance</span>
                <span className="text-[10px] font-bold text-[#205A40] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                  {kpiData.attendancePercentage >= 75 ? 'Qualified' : 'Regular'}
                </span>
              </div>
              <div className="flex items-center justify-between gap-3 pt-1">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    <CountUp end={kpiData.attendancePercentage} suffix="%" duration={1200} />
                  </div>
                  <p className="text-[11px] text-slate-400 font-medium mt-0.5">Session Verified</p>
                </div>

                {/* Circular Donut Ring Progress */}
                <div className="relative w-12 h-12 shrink-0">
                  <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                    {/* Background track */}
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#EEF2F6"
                      strokeWidth="3.4"
                    />
                    {/* Progress arc */}
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="3.4"
                      strokeDasharray={`${Math.min(100, Math.max(0, kpiData.attendancePercentage))}, 100`}
                      strokeLinecap="round"
                      style={{ transition: 'stroke-dasharray 1.2s cubic-bezier(0.16, 1, 0.3, 1)' }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Percent className="w-3.5 h-3.5 text-[#205A40]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section D1: Your Tests Overview Line Chart Card (Refined Sahyadri Green Spline Area) */}
          <ScrollReveal direction="up">
            <div className="bg-white p-6 sm:p-7 rounded-3xl shadow-xs border border-slate-200/80 space-y-4 card-hover-lift">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 text-[#205A40] flex items-center justify-center font-bold">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <h2 className="text-lg font-black text-slate-900 animate-reveal-left">Aptitude Assessment Trajectory</h2>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Performance trajectory compared against cohort topper benchmark
                  </p>
                </div>

                {/* Chart Legend */}
                <div className="flex items-center gap-3 text-xs font-bold text-slate-700 bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-200/80">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] inline-block shadow-xs" />
                    <span className="text-slate-800">Your Score (%)</span>
                  </div>
                  <span className="text-slate-300">&bull;</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] inline-block shadow-xs" />
                    <span className="text-slate-600">Cohort Topper (%)</span>
                  </div>
                </div>
              </div>

              {/* Chart Body */}
              <div className="p-2 sm:p-4 rounded-2xl bg-slate-50/50 border border-slate-100">
                <InteractiveTestChart data={testsData} />
              </div>
            </div>
          </ScrollReveal>

          {/* Section D2: Your Skills Summary Line Chart Card (Emerald Category Breakdown) */}
          <ScrollReveal direction="up">
            <div className="bg-white p-6 sm:p-7 rounded-3xl shadow-xs border border-slate-200/80 space-y-4 card-hover-lift">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 text-[#205A40] flex items-center justify-center font-bold">
                      <Target className="w-4 h-4" />
                    </div>
                    <h2 className="text-lg font-black text-slate-900 animate-reveal-left">Competency Skills Summary</h2>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">Domain category breakdown & score progression</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200/80">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] inline-block shadow-xs" />
                    <span>Category Score</span>
                  </div>

                  {/* Filter Dropdown */}
                  <select
                    value={selectedSkillCategory}
                    onChange={(e) =>
                      setSelectedSkillCategory(
                        e.target.value as 'any' | 'quantitative' | 'logical' | 'verbal' | 'technical'
                      )
                    }
                    className="text-xs font-semibold bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-2xs cursor-pointer hover:border-slate-300"
                  >
                    <option value="any">Composite (All Topics)</option>
                    <option value="quantitative">Quantitative Aptitude</option>
                    <option value="logical">Logical Reasoning</option>
                    <option value="verbal">Verbal Ability</option>
                    <option value="technical">Core Technical</option>
                  </select>
                </div>
              </div>

              {/* Skills Chart Body */}
              <div className="p-2 sm:p-4 rounded-2xl bg-slate-50/50 border border-slate-100">
                <InteractiveSkillsChart data={skillsData} />
              </div>
            </div>
          </ScrollReveal>

          {/* Section G: Recent Assessment Activity */}
          <div className="bg-white p-6 rounded-3xl shadow-xs border border-slate-200/80 space-y-4 card-hover-lift">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900 animate-reveal-left">Recent Assessment Activity</h3>
                <p className="text-xs text-slate-500">Completed evaluation attempts and verified scorecards</p>
              </div>
              <div className="flex items-center gap-2">
                {isLoadingData && (
                  <span className="flex items-center gap-1 text-[11px] text-slate-400">
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-[#205A40]" />
                    <span>Syncing...</span>
                  </span>
                )}
                <Link to="/test-board">
                  <Button variant="ghost" size="sm" className="text-xs text-[#205A40]">
                    View All Tests
                  </Button>
                </Link>
              </div>
            </div>

            <div className="divide-y divide-slate-100">
              {PREVIEW_BENCHMARK_DATA.recentActivity.map((attempt) => (
                <div key={attempt.id} className="py-3 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#205A40] flex items-center justify-center font-bold text-xs">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800">{attempt.testTitle}</h4>
                      <p className="text-[11px] text-slate-400">{attempt.date}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-right">
                    <div>
                      <span className="text-xs font-bold text-slate-900">
                        {attempt.score}/{attempt.maxScore}
                      </span>
                      <span className="text-[11px] text-emerald-600 block font-semibold">
                        {attempt.percentage}%
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700">
                      {attempt.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (~30-35% on desktop) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Section C: Student Profile Card */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xs border border-slate-200/80 card-hover-lift">
            {/* 3-Panel Doodle Sketch Banner */}
            <div
              className="h-28 w-full bg-cover bg-center relative transition-transform duration-700 hover:scale-105"
              style={{ backgroundImage: `url(${BRAND_ASSETS.profileDoodleBanner})` }}
            >
              <div className="absolute inset-0 bg-slate-900/10" />
            </div>

            <div className="px-6 pb-6 pt-0 relative text-center">
              {/* Silhouette Avatar */}
              <div className="-mt-10 mb-2 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-[#1F2937] text-white flex items-center justify-center border-4 border-white shadow-md">
                  <User className="w-10 h-10" />
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-xs text-slate-400 font-medium">Hello!</p>
                <h3 className="text-lg font-bold text-slate-900">{student.name}</h3>
                <p className="text-xs text-slate-500 break-all">{student.email}</p>

                <div className="pt-2">
                  <span className="inline-block px-3 py-1 bg-emerald-50 text-[#205A40] text-xs font-mono font-bold rounded-full border border-emerald-100">
                    {student.usn}
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-4 text-center">
                <Link
                  to="/profile"
                  className="text-xs font-semibold text-[#205A40] hover:underline inline-flex items-center gap-1"
                >
                  <span>View Full Profile</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Section E: Interactive Calendar Widget */}
          <CalendarWidget scheduledTestDates={[5, 12]} />

          {/* Section F: Upcoming Tests Card */}
          <div className="bg-gradient-upcoming p-5 sm:p-6 rounded-3xl shadow-xs border border-emerald-200/60">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-bold text-emerald-950 uppercase tracking-wider">
                Upcoming Tests
              </h4>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/80 text-emerald-800">
                2 Scheduled
              </span>
            </div>

            <div className="space-y-3">
              {PREVIEW_BENCHMARK_DATA.upcomingTests.map((test) => (
                <div
                  key={test.id}
                  className="bg-white/90 backdrop-blur-xs p-3.5 rounded-2xl border border-emerald-100 shadow-2xs space-y-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h5 className="text-xs font-bold text-slate-900 leading-snug">{test.title}</h5>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 shrink-0">
                      {test.category}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1">
                      <CalendarIcon className="w-3 h-3 text-emerald-600" />
                      {test.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-emerald-600" />
                      {test.durationMinutes} mins
                    </span>
                  </div>

                  <Link to="/test-board" className="block pt-1">
                    <Button
                      variant="primary-blue"
                      size="sm"
                      fullWidth={true}
                      className="text-[11px] py-1.5"
                    >
                      View on Test Board
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Section H: Last Test Toppers Leaderboard Card */}
          <div className="bg-gradient-toppers p-5 sm:p-6 rounded-3xl shadow-xs border border-amber-200/60">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-bold text-amber-950">Batch Leaderboard</h4>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/80 text-amber-900">
                CSE (AI) 2024-28
              </span>
            </div>

            <div className="space-y-2">
              {(demoStudent ? dynamicLeaderboard : PREVIEW_BENCHMARK_DATA.toppers).map((topper) => {
                const isCurrentStudent = Boolean(
                  demoStudent &&
                    'usn' in topper &&
                    (topper as any).usn?.toUpperCase() === demoStudent.usn.toUpperCase()
                );
                return (
                  <div
                    key={topper.rank}
                    className={`px-3.5 py-2.5 rounded-xl text-xs font-bold flex items-center justify-between shadow-2xs border transition-all ${
                      isCurrentStudent
                        ? 'bg-amber-300/80 text-amber-950 border-amber-400 font-black ring-2 ring-amber-400/50'
                        : 'bg-white/85 backdrop-blur-xs text-amber-950 border-amber-100/60 hover:scale-[1.01]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-[10px] font-extrabold">
                        {topper.rank}
                      </span>
                      <span>{topper.name}</span>
                      {isCurrentStudent && (
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-600 text-white uppercase tracking-wider">
                          You
                        </span>
                      )}
                    </div>
                    {topper.rank === 1 ? (
                      <span className="text-sm">🥇</span>
                    ) : topper.rank === 2 ? (
                      <span className="text-sm">🥈</span>
                    ) : topper.rank === 3 ? (
                      <span className="text-sm">🥉</span>
                    ) : null}
                  </div>
                );
              })}
            </div>

            <p className="text-[10px] text-amber-900/70 text-center mt-3 font-medium">
              Rankings updated following each proctored evaluation cycle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
