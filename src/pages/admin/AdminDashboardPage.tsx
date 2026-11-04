import React, { useState, useMemo } from 'react';
import {
  Users,
  BookOpen,
  Award,
  TrendingUp,
  Search,
  CheckCircle2,
  ShieldCheck,
  ChevronRight,
  Plus,
  Edit,
  Trash2,
  Briefcase,
  Newspaper,
  Layers,
  CheckSquare,
  AlertTriangle,
  X,
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { DEMO_ADMIN_STATS } from '../../data/demoAccounts';
import { portalStorage } from '../../lib/portalStorage';
import type { ExamConfig, ExamQuestion, QuestionDifficulty, AssessmentStatus } from '../../types';
import type { JobOpportunity } from '../../data/jobsData';
import type { NewsletterEdition } from '../../data/newslettersData';
import type { StudyResource } from '../../data/studyMaterialsData';

type AdminTab = 'overview' | 'students' | 'exams' | 'questions' | 'jobs' | 'newsletters' | 'materials';

export const AdminDashboardPage: React.FC = () => {
  const { profile } = useAuth();
  const [activeTab, setActiveTab] = useState<AdminTab>('overview');
  const [searchTerm, setSearchTerm] = useState('');

  // Local state for CRUD operations loaded from portalStorage
  const [students, setStudents] = useState(() => portalStorage.getStudentsList());
  const [exams, setExams] = useState<ExamConfig[]>(() => portalStorage.getExams());
  const [selectedExamIdForQuestions, setSelectedExamIdForQuestions] = useState<string>(
    exams[0]?.id || 'exam-dsa-midsem'
  );
  const [questions, setQuestions] = useState<ExamQuestion[]>(() =>
    portalStorage.getQuestionsForExam(exams[0]?.id || 'exam-dsa-midsem')
  );
  const [jobs, setJobs] = useState<JobOpportunity[]>(() => portalStorage.getJobs());
  const [newsletters, setNewsletters] = useState<NewsletterEdition[]>(() => portalStorage.getNewsletters());
  const [studyMaterials, setStudyMaterials] = useState<StudyResource[]>(() => portalStorage.getStudyMaterials());

  // Confirm delete modal state
  const [confirmDeleteModal, setConfirmDeleteModal] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    onConfirm: () => void;
  } | null>(null);

  // Active edit/add modals
  const [studentModal, setStudentModal] = useState<{ isOpen: boolean; data: any; isNew: boolean } | null>(null);
  const [examModal, setExamModal] = useState<{ isOpen: boolean; data: any; isNew: boolean } | null>(null);
  const [questionModal, setQuestionModal] = useState<{ isOpen: boolean; data: any; isNew: boolean } | null>(null);
  const [jobModal, setJobModal] = useState<{ isOpen: boolean; data: any; isNew: boolean } | null>(null);
  const [newsletterModal, setNewsletterModal] = useState<{ isOpen: boolean; data: any; isNew: boolean } | null>(null);
  const [materialModal, setMaterialModal] = useState<{ isOpen: boolean; data: any; isNew: boolean } | null>(null);

  // Switch questions when exam dropdown changes
  const handleExamChangeForQuestions = (examId: string) => {
    setSelectedExamIdForQuestions(examId);
    setQuestions(portalStorage.getQuestionsForExam(examId));
  };

  // Student CRUD
  const handleSaveStudent = (s: any) => {
    portalStorage.saveStudent(s);
    setStudents(portalStorage.getStudentsList());
    setStudentModal(null);
  };

  const handleDeleteStudent = (usn: string) => {
    setConfirmDeleteModal({
      isOpen: true,
      title: 'Delete Student Record',
      message: `Are you sure you want to delete student with USN ${usn}? All associated profile and progress records will be removed.`,
      onConfirm: () => {
        portalStorage.deleteStudent(usn);
        setStudents(portalStorage.getStudentsList());
        setConfirmDeleteModal(null);
      },
    });
  };

  const handleToggleStudentStatus = (s: any) => {
    const updated = { ...s, isActive: s.isActive === false ? true : false };
    portalStorage.saveStudent(updated);
    setStudents(portalStorage.getStudentsList());
  };

  // Exam CRUD
  const handleSaveExam = (exam: ExamConfig) => {
    portalStorage.saveExam(exam);
    setExams(portalStorage.getExams());
    setExamModal(null);
  };

  const handleDeleteExam = (examId: string) => {
    setConfirmDeleteModal({
      isOpen: true,
      title: 'Delete Examination Paper',
      message: `Are you sure you want to delete exam ID ${examId}? Students will no longer be able to take this assessment.`,
      onConfirm: () => {
        portalStorage.deleteExam(examId);
        const updated = portalStorage.getExams();
        setExams(updated);
        if (selectedExamIdForQuestions === examId && updated.length > 0) {
          handleExamChangeForQuestions(updated[0].id);
        }
        setConfirmDeleteModal(null);
      },
    });
  };

  const handleToggleExamStatus = (exam: ExamConfig) => {
    const nextStatus: AssessmentStatus =
      exam.status === 'ongoing' ? 'upcoming' : exam.status === 'upcoming' ? 'completed' : 'ongoing';
    const updated: ExamConfig = { ...exam, status: nextStatus, isLive: nextStatus === 'ongoing' };
    portalStorage.saveExam(updated);
    setExams(portalStorage.getExams());
  };

  // Question CRUD
  const handleSaveQuestion = (q: ExamQuestion) => {
    portalStorage.saveQuestion(selectedExamIdForQuestions, q);
    setQuestions(portalStorage.getQuestionsForExam(selectedExamIdForQuestions));
    setQuestionModal(null);
  };

  const handleDeleteQuestion = (qId: string) => {
    setConfirmDeleteModal({
      isOpen: true,
      title: 'Delete Question',
      message: `Are you sure you want to remove question ${qId} from ${selectedExamIdForQuestions}?`,
      onConfirm: () => {
        portalStorage.deleteQuestion(selectedExamIdForQuestions, qId);
        setQuestions(portalStorage.getQuestionsForExam(selectedExamIdForQuestions));
        setConfirmDeleteModal(null);
      },
    });
  };

  // Job CRUD
  const handleSaveJob = (job: JobOpportunity) => {
    portalStorage.saveJob(job);
    setJobs(portalStorage.getJobs());
    setJobModal(null);
  };

  const handleDeleteJob = (jobId: string) => {
    setConfirmDeleteModal({
      isOpen: true,
      title: 'Delete Job Posting',
      message: `Are you sure you want to remove this job opportunity?`,
      onConfirm: () => {
        portalStorage.deleteJob(jobId);
        setJobs(portalStorage.getJobs());
        setConfirmDeleteModal(null);
      },
    });
  };

  const handleToggleJobStatus = (job: JobOpportunity) => {
    const nextStatus: 'Active' | 'Upcoming' | 'Closed' =
      job.status === 'Active' ? 'Upcoming' : job.status === 'Upcoming' ? 'Closed' : 'Active';
    const updated = { ...job, status: nextStatus };
    portalStorage.saveJob(updated);
    setJobs(portalStorage.getJobs());
  };

  // Newsletter CRUD
  const handleSaveNewsletter = (n: NewsletterEdition) => {
    portalStorage.saveNewsletter(n);
    setNewsletters(portalStorage.getNewsletters());
    setNewsletterModal(null);
  };

  const handleDeleteNewsletter = (nId: string) => {
    setConfirmDeleteModal({
      isOpen: true,
      title: 'Delete Newsletter Edition',
      message: `Are you sure you want to delete this newsletter edition?`,
      onConfirm: () => {
        portalStorage.deleteNewsletter(nId);
        setNewsletters(portalStorage.getNewsletters());
        setConfirmDeleteModal(null);
      },
    });
  };

  const handleToggleNewsletterPublish = (n: NewsletterEdition) => {
    const updated = { ...n, isPublished: !n.isPublished };
    portalStorage.saveNewsletter(updated);
    setNewsletters(portalStorage.getNewsletters());
  };

  // Study Material CRUD
  const handleSaveMaterial = (m: StudyResource) => {
    portalStorage.saveStudyMaterial(m);
    setStudyMaterials(portalStorage.getStudyMaterials());
    setMaterialModal(null);
  };

  const handleDeleteMaterial = (mId: string) => {
    setConfirmDeleteModal({
      isOpen: true,
      title: 'Delete Study Material',
      message: `Are you sure you want to delete this study material resource?`,
      onConfirm: () => {
        portalStorage.deleteStudyMaterial(mId);
        setStudyMaterials(portalStorage.getStudyMaterials());
        setConfirmDeleteModal(null);
      },
    });
  };

  // Filtered lists for view
  const filteredStudents = useMemo(() => {
    return students.filter(
      (s) =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.usn.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [students, searchTerm]);

  const activeTests = useMemo(() => {
    return exams.filter((t) => t.status === 'ongoing' || t.status === 'upcoming').slice(0, 4);
  }, [exams]);

  const leaderboard = useMemo(() => portalStorage.getLeaderboard(), [students]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      {/* Banner & Welcome */}
      <div className="bg-gradient-to-r from-[#174330] via-[#205A40] to-[#2D7354] rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none flex items-center justify-center">
          <ShieldCheck className="w-96 h-96 -mr-20 text-white" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-slate-900 text-xs font-black uppercase tracking-wider shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-900 animate-pulse" />
              ADMINISTRATIVE CONTROLLER &bull; DEMO MODE
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              Placement Examination Controller Dashboard
            </h1>
            <p className="text-emerald-100/90 text-sm max-w-2xl leading-relaxed">
              Full administrative governance of students, CBT examinations, question banks,
              campus recruitment jobs, weekly newsletters, and academic preparation resources.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 text-center min-w-[140px]">
              <div className="text-xs text-emerald-200 font-semibold uppercase tracking-wider">Controller</div>
              <div className="text-sm font-bold text-white mt-0.5 truncate max-w-[180px]">
                {profile?.full_name || 'Administrator'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Navigation Tabs */}
      <div className="bg-white rounded-2xl p-2 border border-slate-100 shadow-xs flex items-center gap-1.5 overflow-x-auto scrollbar-thin">
        {[
          { id: 'overview', label: 'Overview & Stats', icon: TrendingUp },
          { id: 'students', label: `Students (${students.length})`, icon: Users },
          { id: 'exams', label: `Exams (${exams.length})`, icon: BookOpen },
          { id: 'questions', label: 'Question Banks', icon: CheckSquare },
          { id: 'jobs', label: `Jobs (${jobs.length})`, icon: Briefcase },
          { id: 'newsletters', label: `Newsletters (${newsletters.length})`, icon: Newspaper },
          { id: 'materials', label: `Study Materials (${studyMaterials.length})`, icon: Layers },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as AdminTab)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                isActive
                  ? 'bg-[#205A40] text-white shadow-xs'
                  : 'bg-transparent text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* =====================================================================
          TAB 1: OVERVIEW & STATS (Preserves original UI + dynamic metrics)
         ===================================================================== */}
      {activeTab === 'overview' && (
        <div className="space-y-8 animate-fadeIn">
          {/* 4 KPI Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-[#EBF7F0] border border-[#C6ECD4] rounded-2xl p-5 shadow-xs transition-transform hover:-translate-y-0.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#205A40] uppercase tracking-wider">Registered Demo Students</span>
                <div className="w-10 h-10 rounded-xl bg-white/80 flex items-center justify-center text-[#205A40] shadow-xs">
                  <Users className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-black text-slate-900">{students.length}</span>
                <span className="text-xs font-semibold text-emerald-700">Enrolled (CSE-AI)</span>
              </div>
              <div className="mt-2 text-xs text-slate-600">Active evaluation cohort</div>
            </div>

            <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-2xl p-5 shadow-xs transition-transform hover:-translate-y-0.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Aptitude Exam Catalog</span>
                <div className="w-10 h-10 rounded-xl bg-white/80 flex items-center justify-center text-blue-700 shadow-xs">
                  <BookOpen className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-black text-slate-900">{exams.length}</span>
                <span className="text-xs font-semibold text-blue-700">Total Exams</span>
              </div>
              <div className="mt-2 text-xs text-slate-600">Quant, Logic, Verbal, Tech</div>
            </div>

            <div className="bg-[#FEF3C7] border border-[#FDE68A] rounded-2xl p-5 shadow-xs transition-transform hover:-translate-y-0.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">Cohort Avg Score</span>
                <div className="w-10 h-10 rounded-xl bg-white/80 flex items-center justify-center text-amber-800 shadow-xs">
                  <Award className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-black text-slate-900">{DEMO_ADMIN_STATS.avgBatchScore}%</span>
                <span className="text-xs font-semibold text-amber-800">Pass Rate: {DEMO_ADMIN_STATS.passRate}%</span>
              </div>
              <div className="mt-2 text-xs text-slate-600">Aggregated across all tests</div>
            </div>

            <div className="bg-[#F5F3FF] border border-[#DDD6FE] rounded-2xl p-5 shadow-xs transition-transform hover:-translate-y-0.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-purple-700 uppercase tracking-wider">Dedicated Questions</span>
                <div className="w-10 h-10 rounded-xl bg-white/80 flex items-center justify-center text-purple-700 shadow-xs">
                  <CheckSquare className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-black text-slate-900">400</span>
                <span className="text-xs font-semibold text-purple-700">Unique MCQs</span>
              </div>
              <div className="mt-2 text-xs text-slate-600">20 per test &bull; 0 cycling</div>
            </div>
          </div>

          {/* Student Cohort Performance Table & Leaderboard */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-100 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Active Student Evaluation Cohort</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Registered students taking placement assessment drills.</p>
                </div>
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search by student name or USN..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#205A40] w-64 shadow-2xs"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-600">
                  <thead className="bg-slate-50 text-slate-400 font-semibold border-y border-slate-100 uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="py-3 px-3">Student</th>
                      <th className="py-3 px-3">USN</th>
                      <th className="py-3 px-3">CGPA</th>
                      <th className="py-3 px-3">Tests Done</th>
                      <th className="py-3 px-3">Avg Score</th>
                      <th className="py-3 px-3 text-right">Rank</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium">
                    {filteredStudents.map((s) => (
                      <tr key={s.usn} className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-3 px-3">
                          <div className="font-bold text-slate-900">{s.name}</div>
                          <div className="text-[11px] text-slate-400 font-normal">{s.email}</div>
                        </td>
                        <td className="py-3 px-3 font-mono font-bold text-slate-700">{s.usn}</td>
                        <td className="py-3 px-3 font-bold text-slate-800">{s.cgpa || 9.0}</td>
                        <td className="py-3 px-3 font-semibold text-slate-700">{s.kpi?.totalTests || 10}</td>
                        <td className="py-3 px-3 font-black text-[#205A40]">{s.kpi?.avgScorePercentage || 85}%</td>
                        <td className="py-3 px-3 text-right">
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 font-bold text-slate-700 text-xs">
                            {s.kpi?.rank || 1}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Leaderboard Card */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-100 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900">Current Leaderboard</h3>
                  <p className="text-xs text-slate-400">Rankings based on test performance</p>
                </div>
                <Award className="w-5 h-5 text-amber-500" />
              </div>

              <div className="space-y-2 pt-1">
                {leaderboard.map((item) => (
                  <div
                    key={item.rank}
                    className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs font-bold"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-[11px] font-black">
                        {item.rank}
                      </span>
                      <div>
                        <div className="text-slate-900">{item.name}</div>
                        <div className="text-[10px] text-slate-400 font-mono">{item.usn}</div>
                      </div>
                    </div>
                    <span className="text-[#205A40] text-xs font-black">Top Performer</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Active Examination Drives Quick View */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-100 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900">Active & Upcoming CBT Assessments</h2>
              <button
                onClick={() => setActiveTab('exams')}
                className="text-xs font-bold text-[#205A40] hover:underline flex items-center gap-1"
              >
                <span>Manage All {exams.length} Exams</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {activeTests.map((t) => (
                <div key={t.id} className="p-4 rounded-2xl border border-slate-100 bg-slate-50 space-y-2">
                  <div className="flex justify-between items-center text-[10px] font-bold">
                    <span className="bg-emerald-100 text-[#205A40] px-2 py-0.5 rounded">{t.category}</span>
                    <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded uppercase">{t.status}</span>
                  </div>
                  <h3 className="text-xs font-bold text-slate-900 line-clamp-1">{t.title}</h3>
                  <div className="text-[11px] text-slate-500 flex justify-between pt-1">
                    <span>{t.durationMinutes} mins</span>
                    <span>{t.totalQuestions} Qs</span>
                    <span>{t.totalMarks} Marks</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          TAB 2: STUDENTS MANAGEMENT
         ===================================================================== */}
      {activeTab === 'students' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xs space-y-6 animate-fadeIn">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-black text-slate-900">Student Account Management</h2>
              <p className="text-xs text-slate-500">Add, edit, activate/deactivate, and manage student evaluation credentials.</p>
            </div>
            <button
              onClick={() =>
                setStudentModal({
                  isOpen: true,
                  isNew: true,
                  data: {
                    usn: `4SF24CI${170 + students.length}`,
                    name: '',
                    email: '',
                    department: 'Computer Science & Engineering (AI)',
                    batch: '2024-2028',
                    semester: 6,
                    cgpa: 8.5,
                    isActive: true,
                    kpi: { rank: students.length + 1, avgScorePercentage: 80, totalTests: 10, attendancePercentage: 90 },
                    testHistory: [],
                    skillsSummary: [],
                    recentAttempts: [],
                  },
                })
              }
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#205A40] text-white text-xs font-bold hover:bg-[#174330] shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Enroll New Demo Student</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-600">
              <thead className="bg-slate-50 text-slate-500 font-semibold border-y border-slate-100 uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="py-3 px-3">USN</th>
                  <th className="py-3 px-3">Student Name</th>
                  <th className="py-3 px-3">Department & Batch</th>
                  <th className="py-3 px-3">CGPA</th>
                  <th className="py-3 px-3">Avg Score</th>
                  <th className="py-3 px-3">Status</th>
                  <th className="py-3 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {students.map((s) => (
                  <tr key={s.usn} className="hover:bg-slate-50/70">
                    <td className="py-3 px-3 font-mono font-bold text-slate-900">{s.usn}</td>
                    <td className="py-3 px-3">
                      <div className="font-bold text-slate-800">{s.name}</div>
                      <div className="text-[11px] text-slate-400">{s.email}</div>
                    </td>
                    <td className="py-3 px-3 text-slate-600">
                      <div>{s.department}</div>
                      <div className="text-[11px] text-slate-400">{s.batch} (Sem {s.semester})</div>
                    </td>
                    <td className="py-3 px-3 font-bold text-slate-800">{s.cgpa || 8.5}</td>
                    <td className="py-3 px-3 font-black text-[#205A40]">{s.kpi?.avgScorePercentage || 80}%</td>
                    <td className="py-3 px-3">
                      <button
                        onClick={() => handleToggleStudentStatus(s)}
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          s.isActive !== false
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-slate-100 text-slate-500 border border-slate-200'
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${s.isActive !== false ? 'bg-emerald-600' : 'bg-slate-400'}`} />
                        <span>{s.isActive !== false ? 'Active' : 'Inactive'}</span>
                      </button>
                    </td>
                    <td className="py-3 px-3 text-right space-x-2">
                      <button
                        onClick={() => setStudentModal({ isOpen: true, isNew: false, data: s })}
                        className="p-1.5 text-slate-600 hover:text-[#205A40] rounded hover:bg-slate-100"
                        title="Edit Student"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteStudent(s.usn)}
                        className="p-1.5 text-slate-400 hover:text-rose-600 rounded hover:bg-slate-100"
                        title="Delete Student"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* =====================================================================
          TAB 3: EXAMS MANAGEMENT
         ===================================================================== */}
      {activeTab === 'exams' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xs space-y-6 animate-fadeIn">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-black text-slate-900">Aptitude & Technical Exam Catalog</h2>
              <p className="text-xs text-slate-500">Manage 20 computer-based aptitude tests, durations, marking schemes, and schedules.</p>
            </div>
            <button
              onClick={() =>
                setExamModal({
                  isOpen: true,
                  isNew: true,
                  data: {
                    id: `exam-custom-${Date.now()}`,
                    title: '',
                    description: '',
                    category: 'Core Technical',
                    type: 'mcq',
                    durationMinutes: 45,
                    totalQuestions: 20,
                    totalMarks: 20,
                    passPercentage: 50,
                    negativeMarking: true,
                    negativeMarkValue: 0.25,
                    batch: 'All Batches',
                    status: 'ongoing',
                    scheduledDate: 'Live Now',
                    isLive: true,
                    companyTag: 'Custom Mock',
                  },
                })
              }
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#205A40] text-white text-xs font-bold hover:bg-[#174330] shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Create New Assessment</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-600">
              <thead className="bg-slate-50 text-slate-500 font-semibold border-y border-slate-100 uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="py-3 px-3">Exam ID & Title</th>
                  <th className="py-3 px-3">Category</th>
                  <th className="py-3 px-3">Duration & Marks</th>
                  <th className="py-3 px-3">Questions</th>
                  <th className="py-3 px-3">Status</th>
                  <th className="py-3 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {exams.map((e) => (
                  <tr key={e.id} className="hover:bg-slate-50/70">
                    <td className="py-3 px-3">
                      <div className="font-bold text-slate-900">{e.title}</div>
                      <div className="text-[11px] text-slate-400 font-mono">{e.id}</div>
                    </td>
                    <td className="py-3 px-3 font-bold text-slate-700">{e.category}</td>
                    <td className="py-3 px-3">
                      <div>{e.durationMinutes} mins &bull; {e.totalMarks} Marks</div>
                      <div className="text-[10px] text-slate-400">
                        {e.negativeMarking ? `-${e.negativeMarkValue} Neg` : 'No Neg'}
                      </div>
                    </td>
                    <td className="py-3 px-3 font-semibold text-slate-800">{e.totalQuestions} Qs</td>
                    <td className="py-3 px-3">
                      <button
                        onClick={() => handleToggleExamStatus(e)}
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                          e.status === 'ongoing'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : e.status === 'upcoming'
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : 'bg-slate-100 text-slate-500 border border-slate-200'
                        }`}
                        title="Click to toggle status (ongoing -> upcoming -> completed)"
                      >
                        {e.status}
                      </button>
                    </td>
                    <td className="py-3 px-3 text-right space-x-2">
                      <button
                        onClick={() => {
                          setSelectedExamIdForQuestions(e.id);
                          setQuestions(portalStorage.getQuestionsForExam(e.id));
                          setActiveTab('questions');
                        }}
                        className="p-1.5 text-blue-600 hover:text-blue-800 rounded hover:bg-slate-100"
                        title="View & Edit Questions"
                      >
                        <CheckSquare className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setExamModal({ isOpen: true, isNew: false, data: e })}
                        className="p-1.5 text-slate-600 hover:text-[#205A40] rounded hover:bg-slate-100"
                        title="Edit Exam"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteExam(e.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-600 rounded hover:bg-slate-100"
                        title="Delete Exam"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* =====================================================================
          TAB 4: QUESTION BANKS MANAGEMENT
         ===================================================================== */}
      {activeTab === 'questions' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xs space-y-6 animate-fadeIn">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-black text-slate-900">Question Bank Editor</h2>
              <p className="text-xs text-slate-500">Inspect, edit, and add dedicated MCQs with options, correct answers, and explanations.</p>
            </div>

            <div className="flex items-center gap-3">
              <select
                value={selectedExamIdForQuestions}
                onChange={(e) => handleExamChangeForQuestions(e.target.value)}
                className="px-3 py-2 text-xs font-bold rounded-xl border border-slate-200 bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#205A40]"
              >
                {exams.map((ex) => (
                  <option key={ex.id} value={ex.id}>
                    {ex.title} ({ex.id})
                  </option>
                ))}
              </select>

              <button
                onClick={() =>
                  setQuestionModal({
                    isOpen: true,
                    isNew: true,
                    data: {
                      id: `${selectedExamIdForQuestions}-q-${questions.length + 1}`,
                      questionText: '',
                      options: ['', '', '', ''],
                      correctAnswer: 0,
                      marks: 1,
                      negativeMarks: 0.25,
                      explanation: '',
                      category: 'Core Technical',
                      difficulty: 'Medium',
                    },
                  })
                }
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#205A40] text-white text-xs font-bold hover:bg-[#174330] shadow-sm"
              >
                <Plus className="w-4 h-4" />
                <span>Add Question</span>
              </button>
            </div>
          </div>

          <div className="text-xs font-semibold text-slate-500 bg-emerald-50 text-[#205A40] p-3 rounded-2xl border border-emerald-200">
            Currently viewing <strong>{questions.length}</strong> dedicated questions for exam: <strong>{selectedExamIdForQuestions}</strong>.
            All correct answers are shown below for administrative verification.
          </div>

          <div className="space-y-4">
            {questions.map((q, idx) => (
              <div key={q.id} className="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#205A40] text-white flex items-center justify-center text-xs font-bold">
                      {idx + 1}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">{q.id}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200">
                      {q.difficulty}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setQuestionModal({ isOpen: true, isNew: false, data: q })}
                      className="p-1.5 text-slate-600 hover:text-[#205A40] rounded hover:bg-slate-200"
                      title="Edit Question"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteQuestion(q.id)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 rounded hover:bg-slate-200"
                      title="Delete Question"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <p className="text-xs font-bold text-slate-900 whitespace-pre-wrap">{q.questionText}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {q.options.map((opt, optIdx) => {
                    const isCorrect = optIdx === q.correctAnswer;
                    return (
                      <div
                        key={optIdx}
                        className={`p-2.5 rounded-xl border flex items-center gap-2 ${
                          isCorrect
                            ? 'bg-emerald-100/80 border-emerald-300 font-bold text-[#205A40]'
                            : 'bg-white border-slate-200 text-slate-700'
                        }`}
                      >
                        <span className="w-4 h-4 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span className="flex-1">{opt}</span>
                        {isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                      </div>
                    );
                  })}
                </div>

                {q.explanation && (
                  <div className="text-[11px] text-slate-600 bg-white p-2.5 rounded-xl border border-slate-200/60 leading-relaxed font-sans">
                    <strong className="text-slate-800">Explanation: </strong> {q.explanation}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =====================================================================
          TAB 5: JOB OPPORTUNITIES MANAGEMENT
         ===================================================================== */}
      {activeTab === 'jobs' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xs space-y-6 animate-fadeIn">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-black text-slate-900">Job Opportunities Management</h2>
              <p className="text-xs text-slate-500">Post campus recruitment drives, verify criteria, deadlines, and official career links.</p>
            </div>
            <button
              onClick={() =>
                setJobModal({
                  isOpen: true,
                  isNew: true,
                  data: {
                    id: `job-custom-${Date.now()}`,
                    companyName: '',
                    jobRole: '',
                    jobCategory: 'Core Software',
                    eligibleBranches: ['CSE', 'ISE', 'AIML'],
                    minimumCgpa: 6.5,
                    requiredSkills: ['Problem Solving', 'Data Structures'],
                    salaryCtc: '6.0 LPA',
                    applicationDeadline: 'December 31, 2026',
                    officialApplicationUrl: 'https://www.tcs.com/careers',
                    status: 'Active',
                    isSampleDemo: true,
                    location: 'Bengaluru',
                    jobType: 'Full-time',
                    description: '',
                    selectionProcess: ['Online Test', 'Technical Round', 'HR Interview'],
                  },
                })
              }
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#205A40] text-white text-xs font-bold hover:bg-[#174330] shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Post New Campus Drive</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-600">
              <thead className="bg-slate-50 text-slate-500 font-semibold border-y border-slate-100 uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="py-3 px-3">Company & Role</th>
                  <th className="py-3 px-3">Category</th>
                  <th className="py-3 px-3">Package / CTC</th>
                  <th className="py-3 px-3">Min CGPA</th>
                  <th className="py-3 px-3">Deadline</th>
                  <th className="py-3 px-3">Status</th>
                  <th className="py-3 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {jobs.map((j) => (
                  <tr key={j.id} className="hover:bg-slate-50/70">
                    <td className="py-3 px-3">
                      <div className="font-bold text-slate-900">{j.companyName}</div>
                      <div className="text-[11px] text-slate-500">{j.jobRole}</div>
                    </td>
                    <td className="py-3 px-3 font-semibold text-slate-700">{j.jobCategory}</td>
                    <td className="py-3 px-3 font-black text-[#205A40]">{j.salaryCtc}</td>
                    <td className="py-3 px-3 font-mono font-bold text-slate-800">{j.minimumCgpa}+</td>
                    <td className="py-3 px-3 text-slate-600">{j.applicationDeadline}</td>
                    <td className="py-3 px-3">
                      <button
                        onClick={() => handleToggleJobStatus(j)}
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          j.status === 'Active'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : j.status === 'Upcoming'
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : 'bg-slate-100 text-slate-500 border border-slate-200'
                        }`}
                      >
                        {j.status}
                      </button>
                    </td>
                    <td className="py-3 px-3 text-right space-x-2">
                      <button
                        onClick={() => setJobModal({ isOpen: true, isNew: false, data: j })}
                        className="p-1.5 text-slate-600 hover:text-[#205A40] rounded hover:bg-slate-100"
                        title="Edit Job"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteJob(j.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-600 rounded hover:bg-slate-100"
                        title="Delete Job"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* =====================================================================
          TAB 6: NEWSLETTERS MANAGEMENT
         ===================================================================== */}
      {activeTab === 'newsletters' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xs space-y-6 animate-fadeIn">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-black text-slate-900">Placement Cell Newsletters</h2>
              <p className="text-xs text-slate-500">Publish weekly bulletins, recruiter spotlights, and preparation advisories.</p>
            </div>
            <button
              onClick={() =>
                setNewsletterModal({
                  isOpen: true,
                  isNew: true,
                  data: {
                    id: `issue-${Date.now()}`,
                    issueNumber: newsletters.length + 1,
                    title: '',
                    publishDate: 'November 2026',
                    volume: `Vol. IV - Issue ${newsletters.length + 1}`,
                    summary: '',
                    isPublished: true,
                    isSampleDemo: true,
                    spotlightCompany: {
                      name: 'Tech Recruiter',
                      role: 'Software Engineer',
                      ctcRange: '6.0 LPA',
                      hiringProcess: ['Online Test', 'Interview'],
                    },
                    preparationTip: { title: 'Preparation Tip', tip: 'Practice daily aptitude questions.' },
                    interviewExperience: {
                      candidateRole: 'Candidate',
                      company: 'Company',
                      roundsDescription: 'Standard technical interview rounds.',
                      keyTakeaway: 'Focus on fundamentals.',
                    },
                    articles: [],
                  },
                })
              }
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#205A40] text-white text-xs font-bold hover:bg-[#174330] shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Create New Edition</span>
            </button>
          </div>

          <div className="space-y-4">
            {newsletters.map((n) => (
              <div key={n.id} className="p-5 rounded-2xl border border-slate-200 bg-slate-50 flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200">
                      {n.volume}
                    </span>
                    <span className="text-xs text-slate-400">&bull;</span>
                    <span className="text-xs text-slate-500 font-medium">{n.publishDate}</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">{n.title}</h3>
                  <p className="text-xs text-slate-600 line-clamp-1">{n.summary}</p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleToggleNewsletterPublish(n)}
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      n.isPublished
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-amber-50 text-amber-800 border border-amber-200'
                    }`}
                  >
                    {n.isPublished ? 'Published' : 'Draft'}
                  </button>
                  <button
                    onClick={() => setNewsletterModal({ isOpen: true, isNew: false, data: n })}
                    className="p-1.5 text-slate-600 hover:text-[#205A40] rounded hover:bg-slate-200"
                    title="Edit Edition"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteNewsletter(n.id)}
                    className="p-1.5 text-slate-400 hover:text-rose-600 rounded hover:bg-slate-200"
                    title="Delete Edition"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =====================================================================
          TAB 7: STUDY MATERIALS MANAGEMENT
         ===================================================================== */}
      {activeTab === 'materials' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xs space-y-6 animate-fadeIn">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-black text-slate-900">Study Materials Repository</h2>
              <p className="text-xs text-slate-500">Manage technical cheat sheets, formula handbooks, and official company assessment papers.</p>
            </div>
            <button
              onClick={() =>
                setMaterialModal({
                  isOpen: true,
                  isNew: true,
                  data: {
                    id: `mat-custom-${Date.now()}`,
                    title: '',
                    category: 'Quantitative Aptitude',
                    description: '',
                    format: 'Cheat Sheet',
                    fileSize: '350 KB',
                    pagesOrDuration: '10 Pages',
                    isSampleResource: true,
                    tags: ['Practice', 'Revision'],
                    contentSnippet: '### Core Study Notes\nKey concepts and formulas...',
                  },
                })
              }
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#205A40] text-white text-xs font-bold hover:bg-[#174330] shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Add Study Resource</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-600">
              <thead className="bg-slate-50 text-slate-500 font-semibold border-y border-slate-100 uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="py-3 px-3">Resource Title</th>
                  <th className="py-3 px-3">Category</th>
                  <th className="py-3 px-3">Format</th>
                  <th className="py-3 px-3">Size / Pages</th>
                  <th className="py-3 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {studyMaterials.map((m) => (
                  <tr key={m.id} className="hover:bg-slate-50/70">
                    <td className="py-3 px-3">
                      <div className="font-bold text-slate-900">{m.title}</div>
                      <div className="text-[11px] text-slate-400 line-clamp-1">{m.description}</div>
                    </td>
                    <td className="py-3 px-3 font-bold text-slate-700">{m.category}</td>
                    <td className="py-3 px-3 font-semibold text-slate-600">{m.format}</td>
                    <td className="py-3 px-3 text-slate-500">{m.pagesOrDuration || m.fileSize}</td>
                    <td className="py-3 px-3 text-right space-x-2">
                      <button
                        onClick={() => setMaterialModal({ isOpen: true, isNew: false, data: m })}
                        className="p-1.5 text-slate-600 hover:text-[#205A40] rounded hover:bg-slate-100"
                        title="Edit Material"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteMaterial(m.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-600 rounded hover:bg-slate-100"
                        title="Delete Material"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* =====================================================================
          CONFIRMATION DIALOG FOR DESTRUCTIVE ACTIONS
         ===================================================================== */}
      {confirmDeleteModal && confirmDeleteModal.isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 space-y-4 animate-scaleUp">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-black text-slate-900">{confirmDeleteModal.title}</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">{confirmDeleteModal.message}</p>
            </div>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setConfirmDeleteModal(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200"
              >
                Cancel
              </button>
              <button
                onClick={confirmDeleteModal.onConfirm}
                className="px-4 py-2 rounded-xl bg-rose-600 text-white text-xs font-bold hover:bg-rose-700 shadow-sm"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          STUDENT EDIT/ADD MODAL
         ===================================================================== */}
      {studentModal && studentModal.isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 space-y-4 animate-scaleUp">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-base font-bold text-slate-900">
                {studentModal.isNew ? 'Enroll Student' : 'Edit Student Record'}
              </h3>
              <button onClick={() => setStudentModal(null)}><X className="w-5 h-5 text-slate-400" /></button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const updated = {
                  ...studentModal.data,
                  name: form.studentName.value,
                  usn: form.studentUsn.value.toUpperCase().trim(),
                  email: form.studentEmail.value,
                  department: form.studentDept.value,
                  cgpa: parseFloat(form.studentCgpa.value) || 8.5,
                };
                handleSaveStudent(updated);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="font-bold text-slate-700 block mb-1">Full Name</label>
                <input
                  name="studentName"
                  defaultValue={studentModal.data.name}
                  required
                  className="w-full p-2.5 border rounded-xl"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">USN</label>
                <input
                  name="studentUsn"
                  defaultValue={studentModal.data.usn}
                  required
                  disabled={!studentModal.isNew}
                  className="w-full p-2.5 border rounded-xl font-mono uppercase bg-slate-50"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Institutional Email</label>
                <input
                  name="studentEmail"
                  defaultValue={studentModal.data.email}
                  required
                  type="email"
                  className="w-full p-2.5 border rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Department</label>
                  <input
                    name="studentDept"
                    defaultValue={studentModal.data.department}
                    required
                    className="w-full p-2.5 border rounded-xl"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">CGPA</label>
                  <input
                    name="studentCgpa"
                    defaultValue={studentModal.data.cgpa}
                    required
                    type="number"
                    step="0.01"
                    className="w-full p-2.5 border rounded-xl"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setStudentModal(null)}
                  className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#205A40] text-white font-bold hover:bg-[#174330]"
                >
                  Save Student
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =====================================================================
          EXAM EDIT/ADD MODAL
         ===================================================================== */}
      {examModal && examModal.isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 space-y-4 animate-scaleUp">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-base font-bold text-slate-900">
                {examModal.isNew ? 'Create New Examination' : 'Edit Exam Details'}
              </h3>
              <button onClick={() => setExamModal(null)}><X className="w-5 h-5 text-slate-400" /></button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const updated: ExamConfig = {
                  ...examModal.data,
                  title: form.examTitle.value,
                  description: form.examDesc.value,
                  category: form.examCat.value,
                  durationMinutes: parseInt(form.examDuration.value, 10),
                  totalQuestions: parseInt(form.examTotalQ.value, 10),
                  totalMarks: parseInt(form.examTotalMarks.value, 10),
                  status: form.examStatus.value,
                };
                handleSaveExam(updated);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="font-bold text-slate-700 block mb-1">Exam Title</label>
                <input
                  name="examTitle"
                  defaultValue={examModal.data.title}
                  required
                  className="w-full p-2.5 border rounded-xl"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Description</label>
                <textarea
                  name="examDesc"
                  defaultValue={examModal.data.description}
                  required
                  rows={2}
                  className="w-full p-2.5 border rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Category</label>
                  <select name="examCat" defaultValue={examModal.data.category} className="w-full p-2.5 border rounded-xl">
                    <option value="Quantitative">Quantitative</option>
                    <option value="Logical">Logical</option>
                    <option value="Verbal">Verbal</option>
                    <option value="Core Technical">Core Technical</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Status</label>
                  <select name="examStatus" defaultValue={examModal.data.status} className="w-full p-2.5 border rounded-xl">
                    <option value="ongoing">Ongoing</option>
                    <option value="upcoming">Upcoming</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Duration (mins)</label>
                  <input
                    name="examDuration"
                    defaultValue={examModal.data.durationMinutes}
                    type="number"
                    required
                    className="w-full p-2.5 border rounded-xl"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Total Questions</label>
                  <input
                    name="examTotalQ"
                    defaultValue={examModal.data.totalQuestions}
                    type="number"
                    required
                    className="w-full p-2.5 border rounded-xl"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Total Marks</label>
                  <input
                    name="examTotalMarks"
                    defaultValue={examModal.data.totalMarks}
                    type="number"
                    required
                    className="w-full p-2.5 border rounded-xl"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setExamModal(null)}
                  className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#205A40] text-white font-bold hover:bg-[#174330]"
                >
                  Save Exam
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =====================================================================
          QUESTION EDIT/ADD MODAL
         ===================================================================== */}
      {questionModal && questionModal.isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl border border-slate-100 space-y-4 animate-scaleUp max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-base font-bold text-slate-900">
                {questionModal.isNew ? 'Add Question' : 'Edit Question'}
              </h3>
              <button onClick={() => setQuestionModal(null)}><X className="w-5 h-5 text-slate-400" /></button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const updated: ExamQuestion = {
                  ...questionModal.data,
                  questionText: form.qText.value,
                  options: [form.optA.value, form.optB.value, form.optC.value, form.optD.value],
                  correctAnswer: parseInt(form.qCorrect.value, 10),
                  explanation: form.qExpl.value,
                  difficulty: form.qDiff.value as QuestionDifficulty,
                };
                handleSaveQuestion(updated);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="font-bold text-slate-700 block mb-1">Question Text</label>
                <textarea
                  name="qText"
                  defaultValue={questionModal.data.questionText}
                  required
                  rows={3}
                  className="w-full p-2.5 border rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <label className="font-bold text-slate-700 block">Four MCQ Options</label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    name="optA"
                    placeholder="Option A"
                    defaultValue={questionModal.data.options[0]}
                    required
                    className="p-2 border rounded-xl"
                  />
                  <input
                    name="optB"
                    placeholder="Option B"
                    defaultValue={questionModal.data.options[1]}
                    required
                    className="p-2 border rounded-xl"
                  />
                  <input
                    name="optC"
                    placeholder="Option C"
                    defaultValue={questionModal.data.options[2]}
                    required
                    className="p-2 border rounded-xl"
                  />
                  <input
                    name="optD"
                    placeholder="Option D"
                    defaultValue={questionModal.data.options[3]}
                    required
                    className="p-2 border rounded-xl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Correct Answer</label>
                  <select name="qCorrect" defaultValue={questionModal.data.correctAnswer} className="w-full p-2.5 border rounded-xl">
                    <option value={0}>Option A (Index 0)</option>
                    <option value={1}>Option B (Index 1)</option>
                    <option value={2}>Option C (Index 2)</option>
                    <option value={3}>Option D (Index 3)</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Difficulty</label>
                  <select name="qDiff" defaultValue={questionModal.data.difficulty} className="w-full p-2.5 border rounded-xl">
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Detailed Explanation</label>
                <textarea
                  name="qExpl"
                  defaultValue={questionModal.data.explanation}
                  required
                  rows={2}
                  className="w-full p-2.5 border rounded-xl"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setQuestionModal(null)}
                  className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#205A40] text-white font-bold hover:bg-[#174330]"
                >
                  Save Question
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =====================================================================
          JOB EDIT/ADD MODAL
         ===================================================================== */}
      {jobModal && jobModal.isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 space-y-4 animate-scaleUp">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-base font-bold text-slate-900">
                {jobModal.isNew ? 'Post Campus Recruitment Drive' : 'Edit Job Posting'}
              </h3>
              <button onClick={() => setJobModal(null)}><X className="w-5 h-5 text-slate-400" /></button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const updated: JobOpportunity = {
                  ...jobModal.data,
                  companyName: form.jComp.value,
                  jobRole: form.jRole.value,
                  jobCategory: form.jCat.value,
                  salaryCtc: form.jCtc.value,
                  minimumCgpa: parseFloat(form.jCgpa.value) || 6.5,
                  applicationDeadline: form.jDeadline.value,
                  officialApplicationUrl: form.jUrl.value,
                  status: form.jStatus.value,
                };
                handleSaveJob(updated);
              }}
              className="space-y-3 text-xs"
            >
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Company Name</label>
                  <input name="jComp" defaultValue={jobModal.data.companyName} required className="w-full p-2 border rounded-xl" />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Role Title</label>
                  <input name="jRole" defaultValue={jobModal.data.jobRole} required className="w-full p-2 border rounded-xl" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Compensation / CTC</label>
                  <input name="jCtc" defaultValue={jobModal.data.salaryCtc} required className="w-full p-2 border rounded-xl" />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Min CGPA</label>
                  <input name="jCgpa" defaultValue={jobModal.data.minimumCgpa} step="0.1" type="number" required className="w-full p-2 border rounded-xl" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Category</label>
                  <select name="jCat" defaultValue={jobModal.data.jobCategory} className="w-full p-2 border rounded-xl">
                    <option value="Core Software">Core Software</option>
                    <option value="Product Engineering">Product Engineering</option>
                    <option value="Cloud & DevOps">Cloud & DevOps</option>
                    <option value="Consulting">Consulting</option>
                    <option value="AI & Data Science">AI & Data Science</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Status</label>
                  <select name="jStatus" defaultValue={jobModal.data.status} className="w-full p-2 border rounded-xl">
                    <option value="Active">Active</option>
                    <option value="Upcoming">Upcoming</option>
                    <option value="Closed">Closed</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Application Deadline</label>
                <input name="jDeadline" defaultValue={jobModal.data.applicationDeadline} required className="w-full p-2 border rounded-xl" />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Official Career Application URL</label>
                <input name="jUrl" defaultValue={jobModal.data.officialApplicationUrl} required className="w-full p-2 border rounded-xl" />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t">
                <button type="button" onClick={() => setJobModal(null)} className="px-4 py-2 rounded-xl bg-slate-100 font-bold">
                  Cancel
                </button>
                <button type="submit" className="px-5 py-2 rounded-xl bg-[#205A40] text-white font-bold hover:bg-[#174330]">
                  Save Job
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =====================================================================
          NEWSLETTER EDIT/ADD MODAL
         ===================================================================== */}
      {newsletterModal && newsletterModal.isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 space-y-4 animate-scaleUp">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-base font-bold text-slate-900">
                {newsletterModal.isNew ? 'Create Newsletter Issue' : 'Edit Newsletter Edition'}
              </h3>
              <button onClick={() => setNewsletterModal(null)}><X className="w-5 h-5 text-slate-400" /></button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const updated: NewsletterEdition = {
                  ...newsletterModal.data,
                  title: form.nTitle.value,
                  volume: form.nVol.value,
                  publishDate: form.nDate.value,
                  summary: form.nSum.value,
                };
                handleSaveNewsletter(updated);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="font-bold text-slate-700 block mb-1">Title</label>
                <input name="nTitle" defaultValue={newsletterModal.data.title} required className="w-full p-2 border rounded-xl" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Volume Tag</label>
                  <input name="nVol" defaultValue={newsletterModal.data.volume} required className="w-full p-2 border rounded-xl" />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Publish Date</label>
                  <input name="nDate" defaultValue={newsletterModal.data.publishDate} required className="w-full p-2 border rounded-xl" />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Summary</label>
                <textarea name="nSum" defaultValue={newsletterModal.data.summary} required rows={3} className="w-full p-2 border rounded-xl" />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t">
                <button type="button" onClick={() => setNewsletterModal(null)} className="px-4 py-2 rounded-xl bg-slate-100 font-bold">
                  Cancel
                </button>
                <button type="submit" className="px-5 py-2 rounded-xl bg-[#205A40] text-white font-bold hover:bg-[#174330]">
                  Save Edition
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =====================================================================
          STUDY MATERIAL EDIT/ADD MODAL
         ===================================================================== */}
      {materialModal && materialModal.isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 space-y-4 animate-scaleUp">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-base font-bold text-slate-900">
                {materialModal.isNew ? 'Add Study Resource' : 'Edit Study Material'}
              </h3>
              <button onClick={() => setMaterialModal(null)}><X className="w-5 h-5 text-slate-400" /></button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const updated: StudyResource = {
                  ...materialModal.data,
                  title: form.mTitle.value,
                  category: form.mCat.value,
                  description: form.mDesc.value,
                  format: form.mFormat.value,
                };
                handleSaveMaterial(updated);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="font-bold text-slate-700 block mb-1">Title</label>
                <input name="mTitle" defaultValue={materialModal.data.title} required className="w-full p-2 border rounded-xl" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Category</label>
                  <select name="mCat" defaultValue={materialModal.data.category} className="w-full p-2 border rounded-xl">
                    <option value="Quantitative Aptitude">Quantitative Aptitude</option>
                    <option value="Logical Reasoning">Logical Reasoning</option>
                    <option value="Verbal Ability">Verbal Ability</option>
                    <option value="Data Structures and Algorithms">Data Structures and Algorithms</option>
                    <option value="DBMS and SQL">DBMS and SQL</option>
                    <option value="Operating Systems">Operating Systems</option>
                    <option value="Computer Networks">Computer Networks</option>
                    <option value="Object-Oriented Programming">Object-Oriented Programming</option>
                    <option value="HR Interview Preparation">HR Interview Preparation</option>
                    <option value="Technical Interview Preparation">Technical Interview Preparation</option>
                    <option value="Company Assessment Papers">Company Assessment Papers</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Format</label>
                  <select name="mFormat" defaultValue={materialModal.data.format} className="w-full p-2 border rounded-xl">
                    <option value="PDF Guide">PDF Guide</option>
                    <option value="Cheat Sheet">Cheat Sheet</option>
                    <option value="Formula Sheet">Formula Sheet</option>
                    <option value="Interview Matrix">Interview Matrix</option>
                    <option value="Company Paper">Company Paper</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Description</label>
                <textarea name="mDesc" defaultValue={materialModal.data.description} required rows={3} className="w-full p-2 border rounded-xl" />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t">
                <button type="button" onClick={() => setMaterialModal(null)} className="px-4 py-2 rounded-xl bg-slate-100 font-bold">
                  Cancel
                </button>
                <button type="submit" className="px-5 py-2 rounded-xl bg-[#205A40] text-white font-bold hover:bg-[#174330]">
                  Save Resource
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
