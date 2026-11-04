import type { UserProfile, KpiMetrics, TestScorePoint, TopPerformer } from '../types';

export interface DemoStudentAccount {
  usn: string;
  name: string;
  email: string;
  department: string;
  batch: string;
  semester: number;
  cgpa: number;
  kpi: KpiMetrics;
  testHistory: TestScorePoint[];
  skillsSummary: {
    category: string;
    percentage: number;
    testsTaken: number;
    color: string;
  }[];
  recentAttempts: {
    testId: string;
    testTitle: string;
    date: string;
    score: number;
    maxScore: number;
    percentage: number;
    status: 'PASSED' | 'FAILED';
  }[];
}

export const DEMO_ADMIN_CREDENTIALS = {
  email: 'admin1.exam@gmail.com',
  password: 'AdminDemo@123',
  role: 'admin' as const,
  profile: {
    id: 'demo-admin-01',
    email: 'admin1.exam@gmail.com',
    full_name: 'Placement Examination Administrator',
    role: 'admin' as const,
    department: 'Placement & Examination Cell',
    batch: 'Placement Cell 2026-27',
    avatar_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    must_change_password: false,
    is_demo: true,
    created_at: new Date('2026-01-01').toISOString(),
    updated_at: new Date().toISOString(),
  } as UserProfile & { is_demo: boolean },
};

export const DEMO_STUDENT_PASSWORD = 'StudentDemo@123';

export const DEMO_STUDENTS: Record<string, DemoStudentAccount> = {
  '4SF24CI160': {
    usn: '4SF24CI160',
    name: 'Aarav Shetty',
    email: '4sf24ci160@sahyadri.edu.in',
    department: 'Computer Science & Engineering (AI)',
    batch: '2024-2028',
    semester: 6,
    cgpa: 9.32,
    kpi: {
      rank: 1,
      avgScorePercentage: 88.5,
      totalTests: 14,
      attendancePercentage: 96,
    },
    testHistory: [
      { testCode: 'T1', testName: 'Number Theory & LCM/HCF', studentScore: 18, topperScore: 19, maxScore: 20, date: '10 Nov' },
      { testCode: 'T2', testName: 'Percentages & Profit/Loss', studentScore: 17, topperScore: 18, maxScore: 20, date: '12 Nov' },
      { testCode: 'T3', testName: 'Coding-Decoding Logic', studentScore: 19, topperScore: 19, maxScore: 20, date: '15 Nov' },
      { testCode: 'T4', testName: 'Data Structures MCQ', studentScore: 18, topperScore: 20, maxScore: 20, date: '18 Nov' },
      { testCode: 'T5', testName: 'DBMS & SQL Mastery', studentScore: 19, topperScore: 19, maxScore: 20, date: '21 Nov' },
    ],
    skillsSummary: [
      { category: 'Quantitative Aptitude', percentage: 89, testsTaken: 5, color: '#205A40' },
      { category: 'Logical Reasoning', percentage: 92, testsTaken: 4, color: '#3B82F6' },
      { category: 'Verbal Ability', percentage: 84, testsTaken: 2, color: '#8B5CF6' },
      { category: 'Core Technical', percentage: 91, testsTaken: 3, color: '#F59E0B' },
    ],
    recentAttempts: [
      { testId: 'tech-01', testTitle: 'Data Structures & Algorithms MCQ', date: 'Yesterday, 04:30 PM', score: 18, maxScore: 20, percentage: 90, status: 'PASSED' },
      { testId: 'quant-02', testTitle: 'Percentages & Commercial Math', date: '02 Nov, 11:00 AM', score: 17, maxScore: 20, percentage: 85, status: 'PASSED' },
      { testId: 'logic-01', testTitle: 'Coding-Decoding & Series', date: '28 Oct, 02:15 PM', score: 19, maxScore: 20, percentage: 95, status: 'PASSED' },
    ],
  },
  '4SF24CI161': {
    usn: '4SF24CI161',
    name: 'Ananya Rao',
    email: '4sf24ci161@sahyadri.edu.in',
    department: 'Computer Science & Engineering (AI)',
    batch: '2024-2028',
    semester: 6,
    cgpa: 9.15,
    kpi: {
      rank: 2,
      avgScorePercentage: 84.0,
      totalTests: 12,
      attendancePercentage: 92,
    },
    testHistory: [
      { testCode: 'T1', testName: 'Number Theory & LCM/HCF', studentScore: 16, topperScore: 19, maxScore: 20, date: '10 Nov' },
      { testCode: 'T2', testName: 'Percentages & Profit/Loss', studentScore: 17, topperScore: 18, maxScore: 20, date: '12 Nov' },
      { testCode: 'T3', testName: 'Coding-Decoding Logic', studentScore: 18, topperScore: 19, maxScore: 20, date: '15 Nov' },
      { testCode: 'T4', testName: 'Data Structures MCQ', studentScore: 17, topperScore: 20, maxScore: 20, date: '18 Nov' },
      { testCode: 'T5', testName: 'DBMS & SQL Mastery', studentScore: 17, topperScore: 19, maxScore: 20, date: '21 Nov' },
    ],
    skillsSummary: [
      { category: 'Quantitative Aptitude', percentage: 82, testsTaken: 4, color: '#205A40' },
      { category: 'Logical Reasoning', percentage: 88, testsTaken: 3, color: '#3B82F6' },
      { category: 'Verbal Ability', percentage: 86, testsTaken: 2, color: '#8B5CF6' },
      { category: 'Core Technical', percentage: 83, testsTaken: 3, color: '#F59E0B' },
    ],
    recentAttempts: [
      { testId: 'tech-02', testTitle: 'Database Management & SQL Engine', date: '01 Nov, 03:00 PM', score: 17, maxScore: 20, percentage: 85, status: 'PASSED' },
      { testId: 'logic-03', testTitle: 'Syllogisms & Venn Deductions', date: '27 Oct, 10:30 AM', score: 18, maxScore: 20, percentage: 90, status: 'PASSED' },
    ],
  },
  '4SF24CI162': {
    usn: '4SF24CI162',
    name: 'Rohan Kumar',
    email: '4sf24ci162@sahyadri.edu.in',
    department: 'Computer Science & Engineering (AI)',
    batch: '2024-2028',
    semester: 6,
    cgpa: 8.78,
    kpi: {
      rank: 4,
      avgScorePercentage: 79.2,
      totalTests: 10,
      attendancePercentage: 88,
    },
    testHistory: [
      { testCode: 'T1', testName: 'Number Theory & LCM/HCF', studentScore: 15, topperScore: 19, maxScore: 20, date: '10 Nov' },
      { testCode: 'T2', testName: 'Percentages & Profit/Loss', studentScore: 16, topperScore: 18, maxScore: 20, date: '12 Nov' },
      { testCode: 'T3', testName: 'Coding-Decoding Logic', studentScore: 16, topperScore: 19, maxScore: 20, date: '15 Nov' },
      { testCode: 'T4', testName: 'Data Structures MCQ', studentScore: 16, topperScore: 20, maxScore: 20, date: '18 Nov' },
      { testCode: 'T5', testName: 'DBMS & SQL Mastery', studentScore: 16, topperScore: 19, maxScore: 20, date: '21 Nov' },
    ],
    skillsSummary: [
      { category: 'Quantitative Aptitude', percentage: 78, testsTaken: 3, color: '#205A40' },
      { category: 'Logical Reasoning', percentage: 81, testsTaken: 3, color: '#3B82F6' },
      { category: 'Verbal Ability', percentage: 76, testsTaken: 2, color: '#8B5CF6' },
      { category: 'Core Technical', percentage: 82, testsTaken: 2, color: '#F59E0B' },
    ],
    recentAttempts: [
      { testId: 'quant-01', testTitle: 'Number Systems & Arithmetic Basics', date: '30 Oct, 04:00 PM', score: 16, maxScore: 20, percentage: 80, status: 'PASSED' },
    ],
  },
  '4SF24CI163': {
    usn: '4SF24CI163',
    name: 'Sneha Bhat',
    email: '4sf24ci163@sahyadri.edu.in',
    department: 'Computer Science & Engineering (AI)',
    batch: '2024-2028',
    semester: 6,
    cgpa: 9.02,
    kpi: {
      rank: 3,
      avgScorePercentage: 82.5,
      totalTests: 11,
      attendancePercentage: 94,
    },
    testHistory: [
      { testCode: 'T1', testName: 'Number Theory & LCM/HCF', studentScore: 16, topperScore: 19, maxScore: 20, date: '10 Nov' },
      { testCode: 'T2', testName: 'Percentages & Profit/Loss', studentScore: 17, topperScore: 18, maxScore: 20, date: '12 Nov' },
      { testCode: 'T3', testName: 'Coding-Decoding Logic', studentScore: 17, topperScore: 19, maxScore: 20, date: '15 Nov' },
      { testCode: 'T4', testName: 'Data Structures MCQ', studentScore: 17, topperScore: 20, maxScore: 20, date: '18 Nov' },
      { testCode: 'T5', testName: 'DBMS & SQL Mastery', studentScore: 16, topperScore: 19, maxScore: 20, date: '21 Nov' },
    ],
    skillsSummary: [
      { category: 'Quantitative Aptitude', percentage: 84, testsTaken: 4, color: '#205A40' },
      { category: 'Logical Reasoning', percentage: 83, testsTaken: 3, color: '#3B82F6' },
      { category: 'Verbal Ability', percentage: 85, testsTaken: 2, color: '#8B5CF6' },
      { category: 'Core Technical', percentage: 80, testsTaken: 2, color: '#F59E0B' },
    ],
    recentAttempts: [
      { testId: 'verbal-01', testTitle: 'Reading Comprehension & Critical Analysis', date: '29 Oct, 11:30 AM', score: 17, maxScore: 20, percentage: 85, status: 'PASSED' },
    ],
  },
  '4SF24CI167': {
    usn: '4SF24CI167',
    name: 'Rahul Sharma',
    email: '4sf24ci167@sahyadri.edu.in',
    department: 'Computer Science & Engineering (AI)',
    batch: '2024-2028',
    semester: 6,
    cgpa: 8.45,
    kpi: {
      rank: 5,
      avgScorePercentage: 74.0,
      totalTests: 8,
      attendancePercentage: 85,
    },
    testHistory: [
      { testCode: 'T1', testName: 'Number Theory & LCM/HCF', studentScore: 14, topperScore: 19, maxScore: 20, date: '10 Nov' },
      { testCode: 'T2', testName: 'Percentages & Profit/Loss', studentScore: 15, topperScore: 18, maxScore: 20, date: '12 Nov' },
      { testCode: 'T3', testName: 'Coding-Decoding Logic', studentScore: 15, topperScore: 19, maxScore: 20, date: '15 Nov' },
      { testCode: 'T4', testName: 'Data Structures MCQ', studentScore: 15, topperScore: 20, maxScore: 20, date: '18 Nov' },
      { testCode: 'T5', testName: 'DBMS & SQL Mastery', studentScore: 14, topperScore: 19, maxScore: 20, date: '21 Nov' },
    ],
    skillsSummary: [
      { category: 'Quantitative Aptitude', percentage: 72, testsTaken: 3, color: '#205A40' },
      { category: 'Logical Reasoning', percentage: 75, testsTaken: 2, color: '#3B82F6' },
      { category: 'Verbal Ability', percentage: 71, testsTaken: 1, color: '#8B5CF6' },
      { category: 'Core Technical', percentage: 77, testsTaken: 2, color: '#F59E0B' },
    ],
    recentAttempts: [
      { testId: 'logic-02', testTitle: 'Blood Relations & Family Trees', date: '25 Oct, 03:00 PM', score: 15, maxScore: 20, percentage: 75, status: 'PASSED' },
    ],
  },
};

export const DEMO_LEADERBOARD: TopPerformer[] = [
  { rank: 1, name: 'Aarav Shetty', usn: '4SF24CI160', isLeader: true },
  { rank: 2, name: 'Ananya Rao', usn: '4SF24CI161' },
  { rank: 3, name: 'Sneha Bhat', usn: '4SF24CI163' },
  { rank: 4, name: 'Rohan Kumar', usn: '4SF24CI162' },
  { rank: 5, name: 'Rahul Sharma', usn: '4SF24CI167' },
];

export const DEMO_ADMIN_STATS = {
  totalStudents: 5,
  totalTests: 20,
  activeTests: 2,
  completedSubmissions: 55,
  avgBatchScore: 81.6,
  passRate: 94.5,
  department: 'Computer Science & Engineering (AI)',
  batch: '2024-2028',
};

/**
 * Validates credentials against demo dataset.
 * Returns UserProfile & User if valid, or null.
 */
export function authenticateDemoCredentials(
  identifier: string,
  passwordInput: string,
  requiredRole: 'student' | 'faculty'
): { user: any; profile: UserProfile } | { error: string } {
  const cleanId = identifier.trim().toUpperCase().replace(/\s+/g, '');
  const rawId = identifier.trim().toLowerCase();

  // 1. Admin Verification
  if (rawId === DEMO_ADMIN_CREDENTIALS.email.toLowerCase()) {
    if (requiredRole === 'student') {
      return {
        error:
          'Administrator Account Detected: Please switch to the Faculty / Administrator Login tab to access the administrative portal.',
      };
    }
    if (passwordInput !== DEMO_ADMIN_CREDENTIALS.password) {
      return { error: 'Invalid administrator credentials or password.' };
    }
    return {
      user: {
        id: DEMO_ADMIN_CREDENTIALS.profile.id,
        email: DEMO_ADMIN_CREDENTIALS.profile.email,
        app_metadata: { role: 'admin' },
        user_metadata: { role: 'admin', full_name: DEMO_ADMIN_CREDENTIALS.profile.full_name },
      },
      profile: DEMO_ADMIN_CREDENTIALS.profile,
    };
  }

  // 2. Student Verification
  // Check if identifier matches USN or email
  let matchedStudent: DemoStudentAccount | null = null;
  for (const s of Object.values(DEMO_STUDENTS)) {
    if (cleanId === s.usn || rawId === s.email.toLowerCase()) {
      matchedStudent = s;
      break;
    }
  }

  if (matchedStudent) {
    if (requiredRole === 'faculty') {
      return {
        error:
          'Access Restricted: Student credentials detected. Please switch to the Student Login tab to access your dashboard.',
      };
    }
    if (passwordInput !== DEMO_STUDENT_PASSWORD) {
      return { error: 'Invalid USN or password. Please double-check your credentials.' };
    }

    const studentProfile: UserProfile = {
      id: `demo-${matchedStudent.usn.toLowerCase()}`,
      email: matchedStudent.email,
      full_name: matchedStudent.name,
      usn: matchedStudent.usn,
      role: 'student',
      department: matchedStudent.department,
      batch: matchedStudent.batch,
      avatar_url: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(matchedStudent.name)}&backgroundColor=205a40&textColor=ffffff`,
      must_change_password: false,
      created_at: new Date('2026-01-01').toISOString(),
      updated_at: new Date().toISOString(),
    };

    return {
      user: {
        id: studentProfile.id,
        email: studentProfile.email,
        app_metadata: { role: 'student' },
        user_metadata: { role: 'student', full_name: studentProfile.full_name, usn: studentProfile.usn },
      },
      profile: studentProfile,
    };
  }

  return {
    error:
      requiredRole === 'student'
        ? 'Invalid USN or password. Please double-check your credentials.'
        : 'Invalid administrator credentials or password.',
  };
}

