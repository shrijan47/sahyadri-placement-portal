/**
 * Global Design Tokens & Brand Constants for Sahyadri Placement Prep Portal
 * Brand Identity: Sahyadri College of Engineering & Management
 * Tagline: Learn • Practice • Prepare • Get Placed
 */

export const BRAND_ASSETS = {
  sahyadriLogoPng: '/assets/sahyadri-logo.png',
  sahyadriLogoSvg: '/assets/sahyadri-logo.svg',
  campusBackground: '/assets/sahyadri-campus-bg.jpg',
  collegeLoginBg: '/assets/sahyadri-login-bg.webp',
  profileDoodleBanner: '/assets/profile-doodle-banner.png',
  campusHero: '/assets/sahyadri-campus-hero.webp',
  mockInterview: '/assets/sahyadri-mock-interview.webp',
  placementDrive: '/assets/sahyadri-placement-drive.webp',
  computerLab: '/assets/sahyadri-computer-lab.webp',
  seminarHackathon: '/assets/sahyadri-seminar-hackathon.webp',
} as const;

export const BRAND_COLORS = {
  // Primary College Brand Identity
  sahyadri: {
    green: '#205A40',
    greenDark: '#174B36',
    greenLight: '#2D7354',
    bg: '#F7F9F7',
    gold: '#C59B27',
  },
  // Role Authentication Themes
  login: {
    facultyGradient: 'linear-gradient(135deg, #174B36 0%, #205A40 100%)',
    studentGradient: 'linear-gradient(135deg, #174B36 0%, #205A40 100%)',
    facultyBtn: '#205A40',
    studentBtn: '#205A40',
  },
  // Dashboard Performance KPIs
  kpi: {
    rank: { bg: '#9EAAEC', text: '#1E3A8A' },
    avgScore: { bg: '#A8DFB5', text: '#166534' },
    totalTests: { bg: '#E6A89B', text: '#7C2D12' },
    attendance: { bg: '#E3B6DC', text: '#701A75' },
  },
  // Sidebar Widgets
  sidebar: {
    calendarBg: 'linear-gradient(135deg, #5B4EB5 0%, #6C5CE7 100%)',
    calendarHighlight: '#FF6584',
    upcomingBg: 'linear-gradient(135deg, #A4E5BB 0%, #74C69D 100%)',
    toppersBg: 'linear-gradient(135deg, #FCD5B5 0%, #F7B267 100%)',
  },
} as const;

export const COLLEGE_INFO = {
  name: 'Sahyadri College of Engineering & Management',
  shortName: 'SCEM',
  portalName: 'SAHYADRI PLACEMENT PREP PORTAL',
  tagline: 'Learn • Practice • Prepare • Get Placed',
  supportEmail: 'digitalcampus@sahyadri.edu.in',
  portalUrl: 'placement.sahyadri.edu.in',
  address: 'Sahyadri Campus, Adyar, Mangaluru, Karnataka 575007',
} as const;

export const NAV_LINKS = [
  { label: 'About', path: '/' },
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Aptitude Tests', path: '/test-board' },
  { label: 'Study Materials', path: '/study-materials' },
  { label: 'Newsletters', path: '/newsletters' },
  { label: 'Job Opportunities', path: '/jobs' },
  { label: 'Profile', path: '/profile' },
] as const;

/**
 * Reference benchmark dataset from the original designs.
 * Used exclusively when the authenticated database has no historical records or in preview mode.
 */
export const PREVIEW_BENCHMARK_DATA = {
  kpi: {
    rank: 3,
    avgScorePercentage: 58.46,
    totalTests: 7,
    attendancePercentage: 50,
  },
  studentProfile: {
    name: 'Student',
    email: 'student@sahyadri.edu.in',
    usn: '4SF24CI000',
    department: 'Computer Science & Engineering',
    semester: '5th Semester',
    batch: '2024-2028',
  },
  testsOverview: [
    { code: 'SCEM Wed', name: 'General Aptitude Wed', topper: 70, student: 35 },
    { code: 'SCEM C30 05', name: 'Logical Reasoning C30', topper: 90, student: 27 },
    { code: 'SCEM DSA 5(3)', name: 'Data Structures & Algo', topper: 100, student: 40 },
    { code: 'SCEM COD 5(3)', name: 'Coding Evaluation 5', topper: 100, student: 38 },
    { code: 'SCEM COD 5 wed', name: 'Coding Lab Wednesday', topper: 0, student: 0 },
  ],
  skillsSummary: {
    any: [
      { code: 'SCEM Wed', score: 35 },
      { code: 'SCEM C30 05', score: 27 },
      { code: 'SCEM DSA 5(3)', score: 40 },
    ],
    quantitative: [
      { code: 'SCEM Wed', score: 42 },
      { code: 'SCEM C30 05', score: 31 },
      { code: 'SCEM DSA 5(3)', score: 45 },
    ],
    logical: [
      { code: 'SCEM Wed', score: 38 },
      { code: 'SCEM C30 05', score: 35 },
      { code: 'SCEM DSA 5(3)', score: 44 },
    ],
    verbal: [
      { code: 'SCEM Wed', score: 45 },
      { code: 'SCEM C30 05', score: 40 },
      { code: 'SCEM DSA 5(3)', score: 48 },
    ],
    technical: [
      { code: 'SCEM Wed', score: 30 },
      { code: 'SCEM C30 05', score: 22 },
      { code: 'SCEM DSA 5(3)', score: 40 },
    ],
  },
  toppers: [
    { rank: 1, name: 'Aarav Shetty', badge: '👑' },
    { rank: 2, name: 'Ananya Rao', badge: '' },
    { rank: 3, name: 'Rohan Kumar', badge: '' },
  ],
  upcomingTests: [
    {
      id: 'test-dsa-midsem',
      title: 'Data Structures - Mid Sem MCQ',
      category: 'Technical Core',
      date: 'Nov 05, 2026',
      time: '10:00 AM - 10:45 AM',
      durationMinutes: 45,
      questionsCount: 60,
      batch: 'Batch CSE-A',
      status: 'upcoming' as const,
    },
    {
      id: 'test-python-lab',
      title: 'Python Lab Evaluation',
      category: 'Coding Assessment',
      date: 'Nov 12, 2026',
      time: '02:00 PM - 03:30 PM',
      durationMinutes: 90,
      questionsCount: 4,
      batch: 'Batch CSE-All',
      status: 'upcoming' as const,
    },
  ],
  recentActivity: [
    {
      id: 'attempt-1',
      testTitle: 'SCEM DSA 5(3) - Mid Assessment',
      date: 'Oct 30, 2026',
      score: 40,
      maxScore: 50,
      percentage: 80,
      status: 'Evaluated',
    },
    {
      id: 'attempt-2',
      testTitle: 'SCEM C30 05 - Logical Reasoning',
      date: 'Oct 25, 2026',
      score: 27,
      maxScore: 50,
      percentage: 54,
      status: 'Evaluated',
    },
    {
      id: 'attempt-3',
      testTitle: 'SCEM Wed - Quantitative Drill',
      date: 'Oct 18, 2026',
      score: 35,
      maxScore: 50,
      percentage: 70,
      status: 'Evaluated',
    },
  ],
} as const;
