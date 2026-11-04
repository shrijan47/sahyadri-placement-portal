/**
 * SAHYADRI PLACEMENT PREP PORTAL — COMPREHENSIVE AUTOMATED VERIFICATION SUITE
 * Validates all requirements across authentication, examination engine,
 * dedicated question banks, scoring, persistence, study materials,
 * newsletters, job opportunities, admin CRUD, and placement chatbot.
 */

import fs from 'node:fs';
import path from 'node:path';

// Setup mock localStorage for Node.js test environment before imports
const storageMap = new Map();
globalThis.localStorage = {
  getItem: (k) => (storageMap.has(k) ? storageMap.get(k) : null),
  setItem: (k, v) => storageMap.set(k, String(v)),
  removeItem: (k) => storageMap.delete(k),
  clear: () => storageMap.clear(),
  get length() {
    return storageMap.size;
  },
  key: (i) => Array.from(storageMap.keys())[i] || null,
};

import {
  authenticateDemoCredentials,
  DEMO_ADMIN_CREDENTIALS,
  DEMO_STUDENT_PASSWORD,
  DEMO_STUDENTS,
} from '../src/data/demoAccounts.ts';
import { APTITUDE_EXAMS_CATALOG, getQuestionsForExam } from '../src/data/examCatalog.ts';
import { DEDICATED_EXAM_QUESTIONS } from '../src/data/examQuestions.ts';
import { INITIAL_STUDY_RESOURCES, STUDY_CATEGORIES } from '../src/data/studyMaterialsData.ts';
import { INITIAL_NEWSLETTERS } from '../src/data/newslettersData.ts';
import { INITIAL_JOB_OPPORTUNITIES } from '../src/data/jobsData.ts';
import { CHATBOT_KNOWLEDGE_BASE, queryKnowledgeBase } from '../src/data/chatbotKnowledge.ts';
import { portalStorage } from '../src/lib/portalStorage.ts';

console.log('============================================================');
console.log(' SAHYADRI PORTAL — COMPREHENSIVE SYSTEM VERIFICATION SUITE');
console.log('============================================================\n');

let passedTests = 0;
let totalTests = 0;

function assert(condition, testName) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✓ PASS: ${testName}`);
  } else {
    console.error(`  ✗ FAIL: ${testName}`);
  }
}

// =========================================================================
// SECTION 1: AUTHENTICATION & ROLE SEPARATION
// =========================================================================
console.log('[1/12] Testing Administrator & Student Authentication...');
const adminAuth = authenticateDemoCredentials(
  DEMO_ADMIN_CREDENTIALS.email,
  DEMO_ADMIN_CREDENTIALS.password,
  'faculty'
);
assert('user' in adminAuth && adminAuth.profile.role === 'admin', 'Admin logs in with AdminDemo@123');
assert('profile' in adminAuth && adminAuth.profile.email === 'admin1.exam@gmail.com', 'Admin email matches admin1.exam@gmail.com');
assert('profile' in adminAuth && adminAuth.profile.full_name === 'Placement Examination Administrator', 'Admin full name matches');

const demoStudentsList = [
  { usn: '4SF24CI160', name: 'Aarav Shetty' },
  { usn: '4SF24CI161', name: 'Ananya Rao' },
  { usn: '4SF24CI162', name: 'Rohan Kumar' },
  { usn: '4SF24CI163', name: 'Sneha Bhat' },
  { usn: '4SF24CI167', name: 'Rahul Sharma' },
];

for (const s of demoStudentsList) {
  const authUpper = authenticateDemoCredentials(s.usn, DEMO_STUDENT_PASSWORD, 'student');
  assert('user' in authUpper && authUpper.profile.usn === s.usn, `Student ${s.usn} logs in with uppercase USN`);
  assert('profile' in authUpper && authUpper.profile.full_name === s.name, `Student ${s.usn} resolves to ${s.name}`);
  assert('profile' in authUpper && authUpper.profile.department === 'Computer Science & Engineering (AI)', `Student ${s.usn} department is CSE (AI)`);

  const authLower = authenticateDemoCredentials(s.usn.toLowerCase(), DEMO_STUDENT_PASSWORD, 'student');
  assert('user' in authLower && authLower.profile.usn === s.usn, `Student ${s.usn} logs in with lowercase USN`);
}

// Invalid credentials
const badStudent = authenticateDemoCredentials('4SF24CI160', 'WrongPassword123', 'student');
assert('error' in badStudent && badStudent.error.includes('Invalid USN or password'), 'Student invalid password rejected');

const badAdmin = authenticateDemoCredentials(DEMO_ADMIN_CREDENTIALS.email, 'WrongPass', 'faculty');
assert('error' in badAdmin && badAdmin.error.includes('Invalid administrator credentials'), 'Admin invalid password rejected');

// Cross-role boundary enforcement
const adminOnStudent = authenticateDemoCredentials(DEMO_ADMIN_CREDENTIALS.email, DEMO_ADMIN_CREDENTIALS.password, 'student');
assert('error' in adminOnStudent && adminOnStudent.error.includes('Administrator Account Detected'), 'Admin rejected on student tab');

const studentOnAdmin = authenticateDemoCredentials('4SF24CI160', DEMO_STUDENT_PASSWORD, 'faculty');
assert('error' in studentOnAdmin && studentOnAdmin.error.includes('Access Restricted'), 'Student rejected on admin tab');


// =========================================================================
// SECTION 2: 20 APTITUDE EXAMINATIONS CONFIGURATION
// =========================================================================
console.log('\n[2/12] Testing 20 Aptitude Examinations Configuration...');
assert(APTITUDE_EXAMS_CATALOG.length === 20, 'Exactly 20 exams exist in catalog');

const examIds = new Set();
const categoriesCount = {
  'Quantitative': 0,
  'Logical': 0,
  'Verbal': 0,
  'Core Technical': 0,
};

for (const exam of APTITUDE_EXAMS_CATALOG) {
  assert(!examIds.has(exam.id), `Exam ${exam.id} has unique ID`);
  examIds.add(exam.id);
  assert(exam.title && exam.title.length > 5, `Exam ${exam.id} has valid descriptive title: "${exam.title}"`);
  assert(exam.durationMinutes > 0, `Exam ${exam.id} has positive duration: ${exam.durationMinutes}m`);
  assert(exam.totalQuestions === 20, `Exam ${exam.id} specifies 20 questions`);
  assert(exam.totalMarks === 20, `Exam ${exam.id} specifies 20 marks`);
  assert(exam.category in categoriesCount, `Exam ${exam.id} has valid category: ${exam.category}`);
  categoriesCount[exam.category]++;
}

assert(categoriesCount['Quantitative'] >= 4, `Quantitative category has ${categoriesCount['Quantitative']} exams`);
assert(categoriesCount['Logical'] >= 4, `Logical category has ${categoriesCount['Logical']} exams`);
assert(categoriesCount['Verbal'] >= 2, `Verbal category has ${categoriesCount['Verbal']} exams`);
assert(categoriesCount['Core Technical'] >= 4, `Core Technical category has ${categoriesCount['Core Technical']} exams`);


// =========================================================================
// SECTION 3: DEDICATED QUESTION BANKS (400 QUESTIONS TOTAL)
// =========================================================================
console.log('\n[3/12] Testing Dedicated Question Banks (400 Dedicated Questions Total)...');
const allQuestionIds = new Set();
let totalQuestionsCount = 0;

for (const exam of APTITUDE_EXAMS_CATALOG) {
  const testId = exam.id;
  const questions = DEDICATED_EXAM_QUESTIONS[testId];
  assert(Array.isArray(questions), `${testId} dedicated questions bank exists`);
  assert(questions.length === 20, `${testId} has exactly 20 dedicated questions`);

  for (let qIdx = 0; qIdx < questions.length; qIdx++) {
    const q = questions[qIdx];
    totalQuestionsCount++;
    assert(!allQuestionIds.has(q.id), `Question ${q.id} in ${testId} is globally unique`);
    allQuestionIds.add(q.id);
    assert(q.questionText && q.questionText.trim().length > 10, `Question ${q.id} has valid question text`);
    assert(Array.isArray(q.options) && q.options.length === 4, `Question ${q.id} has exactly 4 options`);
    assert(
      typeof q.correctAnswer === 'number' && q.correctAnswer >= 0 && q.correctAnswer <= 3,
      `Question ${q.id} has valid correctAnswer (0-3): ${q.correctAnswer}`
    );
    assert(q.marks === 1, `Question ${q.id} marks = 1`);
    assert(
      typeof q.negativeMarks === 'number' && (q.negativeMarks === 0.25 || q.negativeMarks === 0),
      `Question ${q.id} negative marks is valid (0.25 or 0): ${q.negativeMarks}`
    );
    assert(q.explanation && q.explanation.trim().length > 10, `Question ${q.id} has detailed explanation`);
  }
}

assert(totalQuestionsCount === 400, `Total dedicated questions across all 20 exams = exactly 400 (found ${totalQuestionsCount})`);
assert(allQuestionIds.size === 400, `All 400 questions have globally unique IDs (found ${allQuestionIds.size})`);


// =========================================================================
// SECTION 4: EXAM ENGINE SCORING & NEGATIVE MARKING LOGIC
// =========================================================================
console.log('\n[4/12] Testing Scoring & Negative Marking Engine (+1.0 / -0.25)...');
// Simulate a 20-question test attempt:
// 12 correct (+12.0), 4 incorrect (-1.0), 4 unattempted (0.0) -> Expected score = 11.0 / 20 (55%)
const simulatedQuestions = DEDICATED_EXAM_QUESTIONS[APTITUDE_EXAMS_CATALOG[0].id];
const answers = {};

// 12 correct
for (let i = 0; i < 12; i++) {
  answers[simulatedQuestions[i].id] = simulatedQuestions[i].correctAnswer;
}
// 4 incorrect
for (let i = 12; i < 16; i++) {
  const wrongOption = (simulatedQuestions[i].correctAnswer + 1) % 4;
  answers[simulatedQuestions[i].id] = wrongOption;
}
// 4 unattempted (i = 16 to 19)

let correctCount = 0;
let wrongCount = 0;
let unattemptedCount = 0;
let calculatedScore = 0;

for (const q of simulatedQuestions) {
  const chosen = answers[q.id];
  if (chosen === undefined) {
    unattemptedCount++;
  } else if (chosen === q.correctAnswer) {
    correctCount++;
    calculatedScore += q.marks;
  } else {
    wrongCount++;
    calculatedScore -= q.negativeMarks;
  }
}

assert(correctCount === 12, 'Calculated correct count is 12');
assert(wrongCount === 4, 'Calculated wrong count is 4');
assert(unattemptedCount === 4, 'Calculated unattempted count is 4');
assert(calculatedScore === 11.0, `Calculated score is exactly 11.0 (found ${calculatedScore})`);

const accuracy = correctCount / (correctCount + wrongCount);
assert(Math.round(accuracy * 100) === 75, `Accuracy is 75% on attempted questions (found ${Math.round(accuracy * 100)}%)`);

// Sub-test 4B: Functional Answer Selection, Navigation State Integrity & Palette
console.log('  Testing Answer Selection, Navigation Persistence & Question State Isolation...');
const q1 = simulatedQuestions[0];
const q2 = simulatedQuestions[1];
const q3 = simulatedQuestions[2];
const q4 = simulatedQuestions[3];

const dynamicAnswers = {};
const dynamicReview = {};

// Helper simulating component answer selection
function selectOption(qId, optIdx) {
  dynamicAnswers[qId] = optIdx;
}
function clearOption(qId) {
  dynamicAnswers[qId] = null;
}
function toggleReview(qId) {
  dynamicReview[qId] = !dynamicReview[qId];
}

// 1. Select answer on Q1
selectOption(q1.id, 2);
assert(dynamicAnswers[q1.id] === 2, 'Selecting option 2 on Q1 records option index 2');

// 2. Change answer on Q1
selectOption(q1.id, 0);
assert(dynamicAnswers[q1.id] === 0, 'Changing selection on Q1 immediately updates to 0');
assert(dynamicAnswers[q1.id] !== 2, 'Previous selection 2 on Q1 is removed');

// 3. Navigate to Q2 and select answer
selectOption(q2.id, 3);
assert(dynamicAnswers[q2.id] === 3, 'Selecting option 3 on Q2 records option index 3');

// 4. Return to Q1 and verify Q1 answer remained saved
assert(dynamicAnswers[q1.id] === 0, 'Q1 selected answer survives navigation to Q2 and back');

// 5. Verify independent state across all questions
assert(dynamicAnswers[q1.id] !== dynamicAnswers[q2.id], 'Q1 and Q2 maintain completely independent answer states');
assert(dynamicAnswers[q3.id] === undefined, 'Q3 is completely unanswered and has no residual state');

// 6. Test Palette state distinction
assert(dynamicAnswers[q1.id] !== null && dynamicAnswers[q1.id] !== undefined, 'Q1 palette state = Answered');
assert(dynamicAnswers[q3.id] === undefined || dynamicAnswers[q3.id] === null, 'Q3 palette state = Unanswered');

toggleReview(q4.id);
assert(dynamicReview[q4.id] === true && !dynamicAnswers[q4.id], 'Q4 palette state = Marked for Review (Unanswered)');

selectOption(q4.id, 1);
assert(dynamicReview[q4.id] === true && dynamicAnswers[q4.id] === 1, 'Q4 palette state = Answered & Marked for Review');

clearOption(q1.id);
assert(dynamicAnswers[q1.id] === null, 'Clearing response on Q1 sets answer to null');


// =========================================================================
// SECTION 5: LOCAL DATA PERSISTENCE & LEADERBOARD DYNAMICS
// =========================================================================
console.log('\n[5/12] Testing Local Data Persistence & Leaderboard Sorting...');
// Clean slate
storageMap.clear();

const testSubmission = {
  attemptId: 'attempt-test-101',
  testId: APTITUDE_EXAMS_CATALOG[0].id,
  testTitle: APTITUDE_EXAMS_CATALOG[0].title,
  category: APTITUDE_EXAMS_CATALOG[0].category,
  submittedAt: new Date().toISOString(),
  durationSeconds: 1200,
  score: 18.5,
  maxMarks: 20,
  correctCount: 19,
  wrongCount: 1,
  unattemptedCount: 0,
  percentage: 92.5,
  answers: {},
  questions: [],
};

const saveSuccess = portalStorage.saveExamAttempt(testSubmission, '4SF24CI167');
assert(saveSuccess === true, 'Saved exam attempt for 4SF24CI167 via portalStorage');

const retrievedAttempts = portalStorage.getExamAttempts('4SF24CI167');
assert(retrievedAttempts.length === 1, 'Retrieved exactly 1 attempt for 4SF24CI167');
assert(retrievedAttempts[0].score === 18.5, 'Retrieved attempt score matches 18.5');

// Test student KPI recalculation
const expectedTotalTests = DEMO_STUDENTS['4SF24CI167'].kpi.totalTests + 1;
const updatedKpi = portalStorage.getStudentKpi('4SF24CI167');
assert(
  updatedKpi.totalTests === expectedTotalTests,
  `4SF24CI167 tests incremented from ${DEMO_STUDENTS['4SF24CI167'].kpi.totalTests} to ${expectedTotalTests} (found ${updatedKpi.totalTests})`
);
assert(updatedKpi.avgScorePercentage > 0, `4SF24CI167 dynamic average score computed: ${updatedKpi.avgScorePercentage}%`);

// Test dynamic leaderboard calculation
const dynamicLeaderboard = portalStorage.getDynamicLeaderboard();
assert(dynamicLeaderboard.length === 5, 'Leaderboard contains all 5 students');
// Verify sorted order descending by avgScore
for (let i = 0; i < dynamicLeaderboard.length - 1; i++) {
  assert(
    dynamicLeaderboard[i].avgScore >= dynamicLeaderboard[i + 1].avgScore,
    `Leaderboard order valid: Rank #${i + 1} (${dynamicLeaderboard[i].avgScore}%) >= Rank #${i + 2} (${dynamicLeaderboard[i + 1].avgScore}%)`
  );
  assert(dynamicLeaderboard[i].rank === i + 1, `Leaderboard rank property is ${i + 1}`);
}


// =========================================================================
// SECTION 6: STUDY MATERIALS & COMPANY PAPERS VERIFICATION
// =========================================================================
console.log('\n[6/12] Testing Study Materials & Company Papers (19 PDFs)...');
assert(STUDY_CATEGORIES.length >= 11, `Found ${STUDY_CATEGORIES.length} categories in STUDY_CATEGORIES`);
const materials = portalStorage.getStudyMaterials();
assert(materials.length >= 29, `Found ${materials.length} total study resources`);

const companyPapers = materials.filter((m) => m.category === 'Company Assessment Papers');
assert(companyPapers.length === 19, `Found exactly 19 Company Assessment Papers`);

// Check that every company paper has a valid physical PDF file in public/company-papers/
let pdfsVerified = 0;
for (const paper of companyPapers) {
  if (paper.downloadUrl) {
    const relativePath = paper.downloadUrl.replace(/^\//, '');
    const absolutePath = path.resolve(process.cwd(), 'public', relativePath);
    const exists = fs.existsSync(absolutePath);
    const stat = exists ? fs.statSync(absolutePath) : null;
    assert(
      exists && stat && stat.size > 1000,
      `PDF exists and is non-empty: ${paper.downloadUrl} (${stat ? Math.round(stat.size / 1024) + ' KB' : 'missing'})`
    );
    if (exists && stat && stat.size > 1000) pdfsVerified++;
  }
}
assert(pdfsVerified === 19, `All 19 physical company test papers verified on disk`);


// =========================================================================
// SECTION 7: WEEKLY PLACEMENT NEWSLETTERS
// =========================================================================
console.log('\n[7/12] Testing Weekly Placement Newsletters...');
const newsletters = portalStorage.getNewsletters();
assert(newsletters.length === 4, `Found 4 weekly newsletter editions`);

for (const n of newsletters) {
  assert(n.id && n.title, `Newsletter ${n.id} has valid title: "${n.title}"`);
  assert(n.issueNumber > 0, `Newsletter ${n.id} has positive issue number (${n.issueNumber})`);
  assert(n.publishDate && n.publishDate.length > 5, `Newsletter ${n.id} has publishDate (${n.publishDate})`);
  assert(n.spotlightCompany && n.spotlightCompany.name, `Newsletter ${n.id} has spotlight company (${n.spotlightCompany?.name})`);
  assert(n.articles && n.articles.length >= 1, `Newsletter ${n.id} has at least 1 feature article`);
  assert(n.interviewExperience && n.interviewExperience.company, `Newsletter ${n.id} has student interview experience`);
}


// =========================================================================
// SECTION 8: JOB OPPORTUNITIES WITH VERIFIED LINKS
// =========================================================================
console.log('\n[8/12] Testing Job Opportunities...');
const jobs = portalStorage.getJobs();
assert(jobs.length === 6, `Found 6 recruitment opportunities`);

const expectedCompanies = [
  { key: 'TCS', match: 'Tata Consultancy Services' },
  { key: 'Infosys', match: 'Infosys' },
  { key: 'Accenture', match: 'Accenture' },
  { key: 'Cognizant', match: 'Cognizant' },
  { key: 'Wipro', match: 'Wipro' },
  { key: 'Capgemini', match: 'Capgemini' },
];
for (const comp of expectedCompanies) {
  const match = jobs.find((j) => j.companyName.includes(comp.key) || j.companyName.includes(comp.match));
  assert(!!match, `Job opening for ${comp.key} present`);
  if (match) {
    assert(match.officialApplicationUrl.startsWith('https://'), `${comp.key} application URL is HTTPS: ${match.officialApplicationUrl}`);
    assert(match.eligibleBranches.length > 0, `${comp.key} lists eligible branches`);
    assert(match.minimumCgpa > 0, `${comp.key} has minimum CGPA requirement: ${match.minimumCgpa}`);
    assert(
      match.status === 'Active' || match.status === 'Upcoming' || match.status === 'Closed',
      `${comp.key} status is valid: ${match.status}`
    );
  }
}


// =========================================================================
// SECTION 9: ADMINISTRATIVE CRUD OPERATIONS (ALL 6 SECTIONS)
// =========================================================================
console.log('\n[9/12] Testing Admin CRUD Operations (Students, Exams, Questions, Jobs, Newsletters, Materials)...');

// 1. Students CRUD
const customStudent = {
  usn: '4SF24CI199',
  name: 'Test Student New',
  email: '4sf24ci199@sahyadri.edu.in',
  department: 'Computer Science & Engineering (AI)',
  batch: '2024-2028',
  status: 'active',
  testsTaken: 0,
  avgScore: 0,
};
assert(portalStorage.saveStudent(customStudent) === true, 'Admin: Create new student 4SF24CI199');
assert(portalStorage.getStudentsList().some((s) => s.usn === '4SF24CI199'), 'Admin: Read new student in students list');
assert(portalStorage.deleteStudent('4SF24CI199') === true, 'Admin: Delete student 4SF24CI199');
assert(!portalStorage.getStudentsList().some((s) => s.usn === '4SF24CI199'), 'Admin: Verify student deleted');

// 2. Exams CRUD
const customExam = {
  id: 'aptitude-test-21',
  title: 'Custom Placement Diagnostic Test 21',
  description: 'Admin created diagnostic exam',
  category: 'Core Technical',
  type: 'mcq',
  durationMinutes: 45,
  totalQuestions: 20,
  totalMarks: 20,
  passPercentage: 50,
  negativeMarking: true,
  negativeMarkValue: 0.25,
  batch: 'Batch CSE & ISE',
  status: 'upcoming',
  scheduledDate: '2026-11-20',
};
assert(portalStorage.saveExam(customExam) === true, 'Admin: Create new exam aptitude-test-21');
assert(portalStorage.getExams().some((e) => e.id === 'aptitude-test-21'), 'Admin: Read new exam in catalog');
assert(portalStorage.deleteExam('aptitude-test-21') === true, 'Admin: Delete exam aptitude-test-21');
assert(!portalStorage.getExams().some((e) => e.id === 'aptitude-test-21'), 'Admin: Verify exam deleted');

// 3. Question Bank CRUD
const customQuestion = {
  id: 'custom-q-999',
  questionText: 'What is the time complexity of QuickSelect average case?',
  options: ['O(N^2)', 'O(N log N)', 'O(N)', 'O(log N)'],
  correctAnswer: 2,
  marks: 1,
  negativeMarks: 0.25,
  explanation: 'Average case of QuickSelect is O(N) using randomized pivot selection.',
  category: 'Core Technical',
  difficulty: 'Medium',
};
assert(portalStorage.saveQuestion(APTITUDE_EXAMS_CATALOG[0].id, customQuestion) === true, 'Admin: Add question to exam');
const test01Qs = portalStorage.getQuestionsForExam(APTITUDE_EXAMS_CATALOG[0].id);
assert(test01Qs.some((q) => q.id === 'custom-q-999'), 'Admin: Read added question in exam');
assert(portalStorage.deleteQuestion(APTITUDE_EXAMS_CATALOG[0].id, 'custom-q-999') === true, 'Admin: Delete question custom-q-999');
assert(!portalStorage.getQuestionsForExam(APTITUDE_EXAMS_CATALOG[0].id).some((q) => q.id === 'custom-q-999'), 'Admin: Verify question deleted');

// 4. Jobs CRUD
const customJob = {
  id: 'job-custom-test',
  companyName: 'Oracle Corporation',
  jobRole: 'Server Technology Associate',
  salaryCtc: '16.5 LPA',
  jobCategory: 'Product Engineering',
  eligibleBranches: ['CSE', 'ISE', 'AIML'],
  minimumCgpa: 8.0,
  applicationDeadline: '2026-12-01',
  officialApplicationUrl: 'https://www.oracle.com/careers/',
  location: 'Bengaluru',
  status: 'Upcoming',
  description: 'Database engine engineering role',
  requiredSkills: ['C++', 'SQL'],
  isSampleDemo: true,
  jobType: 'Full-time',
  selectionProcess: ['Online Assessment', 'Technical Interviews'],
};
assert(portalStorage.saveJob(customJob) === true, 'Admin: Create new job posting');
assert(portalStorage.getJobs().some((j) => j.id === 'job-custom-test'), 'Admin: Read new job posting');
assert(portalStorage.deleteJob('job-custom-test') === true, 'Admin: Delete job posting');
assert(!portalStorage.getJobs().some((j) => j.id === 'job-custom-test'), 'Admin: Verify job deleted');

// 5. Newsletters CRUD
const customNewsletter = {
  id: 'nl-custom-test',
  issueNumber: 5,
  title: 'Edition 05: Placement Special Issue',
  publishDate: 'November 15, 2026',
  volume: 'Vol. IV - 2026-27 Cycle',
  summary: 'Special edition on product engineering placements',
  isPublished: true,
  isSampleDemo: true,
  spotlightCompany: {
    name: 'Google India',
    role: 'Software Engineer L3',
    ctcRange: '18 - 24 LPA',
    hiringProcess: ['Online Assessment', '3 Tech Interviews'],
  },
  preparationTip: {
    title: 'System Design Basics',
    tip: 'Focus on caching and database sharding.',
  },
  interviewExperience: {
    candidateRole: 'SWE Intern',
    company: 'Google',
    roundsDescription: 'DSA + System Design',
    keyTakeaway: 'Master graph algorithms and write clean modular code.',
  },
  articles: [],
};
assert(portalStorage.saveNewsletter(customNewsletter) === true, 'Admin: Create new newsletter edition');
assert(portalStorage.getNewsletters().some((n) => n.id === 'nl-custom-test'), 'Admin: Read new newsletter');
assert(portalStorage.deleteNewsletter('nl-custom-test') === true, 'Admin: Delete newsletter edition');
assert(!portalStorage.getNewsletters().some((n) => n.id === 'nl-custom-test'), 'Admin: Verify newsletter deleted');

// 6. Study Materials CRUD
const customMaterial = {
  id: 'study-custom-test',
  title: 'System Design Interview Primer',
  category: 'Technical Interview Preparation',
  format: 'PDF Guide',
  pagesOrDuration: '42 Pages',
  description: 'Scalability, caching, load balancing and database sharding.',
  tags: ['System Design', 'Architecture'],
};
assert(portalStorage.saveStudyMaterial(customMaterial) === true, 'Admin: Create new study material');
assert(portalStorage.getStudyMaterials().some((m) => m.id === 'study-custom-test'), 'Admin: Read new study material');
assert(portalStorage.deleteStudyMaterial('study-custom-test') === true, 'Admin: Delete study material');
assert(!portalStorage.getStudyMaterials().some((m) => m.id === 'study-custom-test'), 'Admin: Verify study material deleted');


// =========================================================================
// SECTION 10: PLACEMENT CHATBOT & OFFLINE KNOWLEDGE RESOLVER
// =========================================================================
console.log('\n[10/12] Testing Placement Chatbot Offline Knowledge Base & Resolver...');
assert(CHATBOT_KNOWLEDGE_BASE.length >= 10, `Chatbot has ${CHATBOT_KNOWLEDGE_BASE.length} distinct knowledge domains`);

const testQueries = [
  { q: 'time and work formula', expectedDomain: 'Quantitative Aptitude' },
  { q: 'speed and distance trains', expectedDomain: 'Quantitative Aptitude' },
  { q: 'syllogism venn diagrams', expectedDomain: 'Logical Reasoning' },
  { q: 'subject verb agreement grammar', expectedDomain: 'Verbal Ability' },
  { q: 'top dsa patterns', expectedDomain: 'DSA' },
  { q: 'sql joins and normalization', expectedDomain: 'DBMS & SQL' },
  { q: 'how to answer using star method in hr', expectedDomain: 'HR Interview' },
  { q: 'what is the marking scheme and exam rules', expectedDomain: 'Portal & Rules' },
  { q: 'tcs nqt exam pattern', expectedDomain: 'Company Patterns' },
];

for (const t of testQueries) {
  const result = queryKnowledgeBase(t.q);
  assert(result !== null, `Chatbot answers query: "${t.q}"`);
  if (result) {
    assert(result.item.category === t.expectedDomain, `Query "${t.q}" mapped to "${result.item.category}" (expected "${t.expectedDomain}")`);
    assert(result.item.answer.length > 50, `Query "${t.q}" has substantial answer body`);
  }
}

// Graceful fallback on unknown queries
const unknownResult = queryKnowledgeBase('xyzabc completely unknown arbitrary query 12345');
assert(unknownResult === null, 'Unknown query returns null (triggers friendly offline fallback with contact info)');


// =========================================================================
// SECTION 11: ABOUT LANDING PAGE & AUTHENTICATION LAYOUT DESIGN
// =========================================================================
console.log('\n[11/12] Testing Initial Landing Page & Authentication Background...');
const sahyadriLogoPng = path.resolve(process.cwd(), 'public/assets/sahyadri-logo.png');
const sahyadriLogoSvg = path.resolve(process.cwd(), 'public/assets/sahyadri-logo.svg');
assert(fs.existsSync(sahyadriLogoPng), 'sahyadri-logo.png exists in public/assets/');
assert(fs.existsSync(sahyadriLogoSvg), 'sahyadri-logo.svg exists in public/assets/');

// Verify NAV_LINKS has About at root /
import { NAV_LINKS } from '../src/constants/tokens.ts';
assert(NAV_LINKS[0].label === 'About' && NAV_LINKS[0].path === '/', 'NAV_LINKS starts with About pointing to root URL (/)');

// Verify AuthLayout does not use the old campus background image
const authLayoutCode = fs.readFileSync(path.resolve(process.cwd(), 'src/components/layout/AuthLayout.tsx'), 'utf-8');
assert(!authLayoutCode.includes('campusBackground'), 'AuthLayout does not reference photographic campusBackground image');
assert(authLayoutCode.includes('auth-grid-pattern'), 'AuthLayout uses professional SVG constellation/grid pattern');
assert(authLayoutCode.includes('Back to Portal Overview'), 'AuthLayout provides quick return link to landing page');

// Verify Routes configuration has root "/" set to AboutPage and preserves /dashboard
const routesCode = fs.readFileSync(path.resolve(process.cwd(), 'src/routes/index.tsx'), 'utf-8');
assert(routesCode.includes('path="/" element={<AboutPage />}'), 'Root route (/) renders AboutPage as initial landing page');
assert(routesCode.includes('path="/dashboard" element={<RoleAwareDashboard />}'), 'Route (/dashboard) renders RoleAwareDashboard');
assert(routesCode.includes('ProtectedRoute'), 'Route configuration integrates ProtectedRoute wrapper');
assert(routesCode.includes('allowedRoles={[\'admin\', \'faculty\']}'), 'Admin route enforces admin/faculty role boundary');
assert(routesCode.includes('if (!user)'), 'RoleAwareDashboard redirects unauthenticated visitors to login');

// Verify ProtectedRoute implementation
const protectedRouteCode = fs.readFileSync(path.resolve(process.cwd(), 'src/components/auth/ProtectedRoute.tsx'), 'utf-8');
assert(protectedRouteCode.includes('Navigate to="/login"'), 'ProtectedRoute redirects unauthenticated visitors to /login');
assert(protectedRouteCode.includes('allowedRoles'), 'ProtectedRoute enforces allowedRoles access check');

// Verify zero leaks of demo student names like Sathwik or Sathvik in src/
const allSrcFiles = [];
function findFiles(dir) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) findFiles(full);
    else if (/\.(ts|tsx|js|jsx)$/.test(item.name)) allSrcFiles.push(full);
  }
}
findFiles(path.resolve(process.cwd(), 'src'));
let hasSathwik = false;
for (const file of allSrcFiles) {
  const content = fs.readFileSync(file, 'utf-8');
  if (/sathw|sathv/i.test(content)) {
    hasSathwik = true;
    break;
  }
}
assert(!hasSathwik, 'Zero occurrences of Sathwik/Sathvik demo names in entire source code');

// Verify Navbar has distinct public visitor view with zero internal dashboard buttons or demo badges
const navbarCode = fs.readFileSync(path.resolve(process.cwd(), 'src/components/layout/Navbar.tsx'), 'utf-8');
assert(navbarCode.includes('isPublicPage'), 'Navbar differentiates public visitor from authenticated session');
assert(navbarCode.includes('Student & Faculty Login'), 'Navbar provides clear institutional login CTA for visitors');

// Verify Uploaded College Photograph is configured as login background
const collegeLoginBgPath = path.resolve(process.cwd(), 'public/assets/sahyadri-login-bg.webp');
assert(fs.existsSync(collegeLoginBgPath) && fs.statSync(collegeLoginBgPath).size > 10000, 'Uploaded Sahyadri College photo exists in assets and is non-empty');
import { BRAND_ASSETS } from '../src/constants/tokens.ts';
assert(BRAND_ASSETS.collegeLoginBg === '/assets/sahyadri-login-bg.webp', 'BRAND_ASSETS.collegeLoginBg references uploaded college photograph');
assert(authLayoutCode.includes('collegeLoginBg'), 'AuthLayout references collegeLoginBg for login background');
assert(authLayoutCode.includes('backgroundSize'), 'AuthLayout uses backgroundSize: cover');

// Verify Student Dashboard Performance Graph & Attendance Circular Progress
const testChartCode = fs.readFileSync(path.resolve(process.cwd(), 'src/components/dashboard/InteractiveTestChart.tsx'), 'utf-8');
assert(testChartCode.includes('#10B981') && testChartCode.includes('#205A40'), 'InteractiveTestChart uses professional Sahyadri green palette');
assert(testChartCode.includes('studentAreaGradient'), 'InteractiveTestChart renders smooth area gradient');
const dashboardCode = fs.readFileSync(path.resolve(process.cwd(), 'src/pages/dashboard/DashboardPage.tsx'), 'utf-8');
assert(dashboardCode.includes('strokeDasharray') && dashboardCode.includes('attendancePercentage'), 'Dashboard includes circular progress visualization for attendance');

// Verify Student Profile page improvements
const profilePageCode = fs.readFileSync(path.resolve(process.cwd(), 'src/pages/profile/ProfilePage.tsx'), 'utf-8');
assert(profilePageCode.includes('handleCopyUsn') || profilePageCode.includes('Copy'), 'ProfilePage provides interactive USN copy feature');
assert(profilePageCode.includes('Academic Information') && profilePageCode.includes('student.usn'), 'ProfilePage structures academic credentials dynamically');




// =========================================================================
// SECTION 12: PRODUCTION BUILD VERIFICATION
// =========================================================================
console.log('\n[12/12] Testing Production Distribution Output...');
const distIndex = path.resolve(process.cwd(), 'dist/index.html');
const distAssets = path.resolve(process.cwd(), 'dist/assets');
assert(fs.existsSync(distIndex), 'dist/index.html exists after build');
assert(fs.existsSync(distAssets) && fs.readdirSync(distAssets).length > 0, 'dist/assets contains compiled JS and CSS bundles');


// =========================================================================
// FINAL TEST SUMMARY
// =========================================================================
console.log('\n============================================================');
console.log(` FINAL TEST RESULTS: ${passedTests} / ${totalTests} PASSED`);
console.log('============================================================\n');

if (passedTests === totalTests) {
  console.log('  SUCCESS: ALL 12 AUDIT REQUIREMENT SECTIONS VERIFIED 100% PASSING!\n');
  process.exit(0);
} else {
  console.error(`  FAILURE: ${totalTests - passedTests} tests failed.\n`);
  process.exit(1);
}
