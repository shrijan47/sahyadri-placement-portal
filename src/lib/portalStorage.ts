/**
 * Sahyadri Placement Prep Portal - Centralized Local Persistence Service
 * Manages localStorage persistence for student exam attempts, dynamic leaderboard calculations,
 * and administrative CRUD state while preserving seed data and resilience against corruption.
 */

import type {
  ExamSubmissionResult,
  KpiMetrics,
  TopPerformer,
  ExamConfig,
  ExamQuestion,
} from '../types';
import { DEMO_STUDENTS, DEMO_LEADERBOARD } from '../data/demoAccounts';
import { APTITUDE_EXAMS_CATALOG } from '../data/examCatalog';
import { DEDICATED_EXAM_QUESTIONS } from '../data/examQuestions';
import { INITIAL_JOB_OPPORTUNITIES, type JobOpportunity } from '../data/jobsData';
import { INITIAL_NEWSLETTERS, type NewsletterEdition } from '../data/newslettersData';
import { INITIAL_STUDY_RESOURCES, type StudyResource } from '../data/studyMaterialsData';

const ATTEMPTS_KEY = 'sahyadri_demo_attempts';
const CUSTOM_EXAMS_KEY = 'sahyadri_custom_exams';
const CUSTOM_QUESTIONS_KEY = 'sahyadri_custom_questions';
const CUSTOM_JOBS_KEY = 'sahyadri_custom_jobs';
const CUSTOM_NEWSLETTERS_KEY = 'sahyadri_custom_newsletters';
const CUSTOM_STUDY_KEY = 'sahyadri_custom_study_materials';
const CUSTOM_STUDENTS_KEY = 'sahyadri_custom_students';

// Safe Storage helpers for browser / Node / SSR resilience
function getItem(key: string): string | null {
  try {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(key);
    }
  } catch {}
  return null;
}

function setItem(key: string, val: string): void {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(key, val);
    }
  } catch {}
}

// Safe JSON parser helper
function safeJsonParse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch (err) {
    console.warn('[PortalStorage] Error parsing stored JSON, using fallback:', err);
    return fallback;
  }
}

export interface StoredAttempt extends ExamSubmissionResult {
  studentUsn: string;
}

export const portalStorage = {
  // ==========================================
  // 1. EXAM ATTEMPTS & STUDENT PERSISTENCE
  // ==========================================

  saveExamAttempt(result: ExamSubmissionResult, usn: string): boolean {
    if (!result || !usn) return false;
    try {
      const existing = portalStorage.getExamAttempts();
      const cleanUsn = usn.toUpperCase().trim();

      // Check if exact same attempt already saved (prevent double write)
      const isDuplicate = existing.some(
        (a) => a.testId === result.testId && a.attemptId === result.attemptId
      );
      if (isDuplicate) return true;

      const record: StoredAttempt = {
        ...result,
        studentUsn: cleanUsn,
      };

      const updated = [record, ...existing];
      setItem(ATTEMPTS_KEY, JSON.stringify(updated));
      return true;
    } catch (e) {
      console.error('[PortalStorage] Failed to save exam attempt:', e);
      return false;
    }
  },

  getExamAttempts(usn?: string): StoredAttempt[] {
    try {
      const raw = getItem(ATTEMPTS_KEY);
      const all = safeJsonParse<StoredAttempt[]>(raw, []);
      if (!Array.isArray(all)) return [];
      if (!usn) return all;
      const cleanUsn = usn.toUpperCase().trim();
      return all.filter((a) => a.studentUsn === cleanUsn);
    } catch (e) {
      return [];
    }
  },

  isTestCompletedByStudent(testId: string, usn: string): boolean {
    const attempts = portalStorage.getExamAttempts(usn);
    return attempts.some((a) => a.testId === testId);
  },

  getStudentKpi(usn: string, baseKpi?: KpiMetrics): KpiMetrics {
    const cleanUsn = usn.toUpperCase().trim();
    const attempts = portalStorage.getExamAttempts(cleanUsn);
    const fallbackKpi: KpiMetrics = DEMO_STUDENTS[cleanUsn]?.kpi || {
      rank: 5,
      avgScorePercentage: 70,
      totalTests: 6,
      attendancePercentage: 85,
    };
    const effectiveBase = baseKpi || fallbackKpi;

    if (attempts.length === 0) {
      return effectiveBase;
    }

    // Compute updated total tests and average score
    const newTestsCount = attempts.length;
    const totalTests = effectiveBase.totalTests + newTestsCount;

    const baseSum = effectiveBase.avgScorePercentage * effectiveBase.totalTests;
    const newSum = attempts.reduce((acc, curr) => acc + curr.percentage, 0);
    const avgScorePercentage = Math.round(((baseSum + newSum) / totalTests) * 10) / 10;

    return {
      rank: effectiveBase.rank, // Rank is dynamically computed in getLeaderboard
      avgScorePercentage,
      totalTests,
      attendancePercentage: Math.min(100, effectiveBase.attendancePercentage + 1),
    };
  },

  getLeaderboard(): (TopPerformer & { avgScore?: number })[] {
    try {
      const students = portalStorage.getStudentsList();
      const allAttempts = portalStorage.getExamAttempts();

      // Compute composite scores for each student
      const studentScores = students.map((s: any) => {
        const studentAttempts = allAttempts.filter(
          (a) => a.studentUsn === s.usn.toUpperCase()
        );
        const baseScore = s.kpi?.avgScorePercentage ?? s.avgScore ?? 75;
        const baseCount = s.kpi?.totalTests ?? s.testsTaken ?? 6;

        const attemptSum = studentAttempts.reduce((acc, curr) => acc + curr.percentage, 0);
        const totalCount = baseCount + studentAttempts.length;
        const currentAvg =
          totalCount > 0
            ? (baseScore * baseCount + attemptSum) / totalCount
            : baseScore;

        return {
          usn: s.usn,
          name: s.name,
          avgScore: Math.round(currentAvg * 10) / 10,
        };
      });

      // Sort descending by avgScore
      studentScores.sort((a, b) => b.avgScore - a.avgScore);

      return studentScores.map((item, idx) => ({
        rank: idx + 1,
        name: item.name,
        usn: item.usn,
        isLeader: idx === 0,
        avgScore: item.avgScore,
      }));
    } catch {
      return DEMO_LEADERBOARD;
    }
  },

  getDynamicLeaderboard() {
    return portalStorage.getLeaderboard();
  },

  // ==========================================
  // 2. STUDENTS MANAGEMENT (ADMIN CRUD)
  // ==========================================

  getStudentsList() {
    try {
      const raw = getItem(CUSTOM_STUDENTS_KEY);
      const custom = safeJsonParse<any[]>(raw, []);
      const base = Object.values(DEMO_STUDENTS);

      if (custom.length === 0) {
        return base;
      }
      return custom;
    } catch {
      return Object.values(DEMO_STUDENTS);
    }
  },

  saveStudent(student: any): boolean {
    try {
      const current = portalStorage.getStudentsList();
      const idx = current.findIndex((s) => s.usn === student.usn);
      let updated: any[];
      if (idx >= 0) {
        updated = [...current];
        updated[idx] = { ...updated[idx], ...student };
      } else {
        updated = [student, ...current];
      }
      setItem(CUSTOM_STUDENTS_KEY, JSON.stringify(updated));
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  },

  deleteStudent(usn: string): boolean {
    try {
      const current = portalStorage.getStudentsList();
      const updated = current.filter((s) => s.usn !== usn);
      setItem(CUSTOM_STUDENTS_KEY, JSON.stringify(updated));
      return true;
    } catch {
      return false;
    }
  },

  // ==========================================
  // 3. EXAMS MANAGEMENT (ADMIN CRUD)
  // ==========================================

  getExams(): ExamConfig[] {
    try {
      const raw = getItem(CUSTOM_EXAMS_KEY);
      const custom = safeJsonParse<ExamConfig[]>(raw, []);
      if (custom.length > 0) return custom;
      return APTITUDE_EXAMS_CATALOG;
    } catch {
      return APTITUDE_EXAMS_CATALOG;
    }
  },

  saveExam(exam: ExamConfig): boolean {
    try {
      const current = portalStorage.getExams();
      const idx = current.findIndex((e) => e.id === exam.id);
      let updated: ExamConfig[];
      if (idx >= 0) {
        updated = [...current];
        updated[idx] = exam;
      } else {
        updated = [exam, ...current];
      }
      setItem(CUSTOM_EXAMS_KEY, JSON.stringify(updated));
      return true;
    } catch {
      return false;
    }
  },

  deleteExam(examId: string): boolean {
    try {
      const current = portalStorage.getExams();
      const updated = current.filter((e) => e.id !== examId);
      setItem(CUSTOM_EXAMS_KEY, JSON.stringify(updated));
      return true;
    } catch {
      return false;
    }
  },

  // ==========================================
  // 4. QUESTIONS MANAGEMENT (ADMIN CRUD)
  // ==========================================

  getQuestionsForExam(examId: string): ExamQuestion[] {
    try {
      const raw = getItem(CUSTOM_QUESTIONS_KEY);
      const customDict = safeJsonParse<Record<string, ExamQuestion[]>>(raw, {});
      if (customDict[examId] && customDict[examId].length > 0) {
        return customDict[examId];
      }
      return DEDICATED_EXAM_QUESTIONS[examId] || [];
    } catch {
      return DEDICATED_EXAM_QUESTIONS[examId] || [];
    }
  },

  saveQuestion(examId: string, question: ExamQuestion): boolean {
    try {
      const raw = getItem(CUSTOM_QUESTIONS_KEY);
      const customDict = safeJsonParse<Record<string, ExamQuestion[]>>(raw, {});
      const existing = customDict[examId] || DEDICATED_EXAM_QUESTIONS[examId] || [];

      const idx = existing.findIndex((q) => q.id === question.id);
      let updatedList: ExamQuestion[];
      if (idx >= 0) {
        updatedList = [...existing];
        updatedList[idx] = question;
      } else {
        updatedList = [...existing, question];
      }

      customDict[examId] = updatedList;
      setItem(CUSTOM_QUESTIONS_KEY, JSON.stringify(customDict));
      return true;
    } catch {
      return false;
    }
  },

  deleteQuestion(examId: string, questionId: string): boolean {
    try {
      const raw = getItem(CUSTOM_QUESTIONS_KEY);
      const customDict = safeJsonParse<Record<string, ExamQuestion[]>>(raw, {});
      const existing = customDict[examId] || DEDICATED_EXAM_QUESTIONS[examId] || [];

      customDict[examId] = existing.filter((q) => q.id !== questionId);
      setItem(CUSTOM_QUESTIONS_KEY, JSON.stringify(customDict));
      return true;
    } catch {
      return false;
    }
  },

  // ==========================================
  // 5. JOBS MANAGEMENT (ADMIN CRUD)
  // ==========================================

  getJobs(): JobOpportunity[] {
    try {
      const raw = getItem(CUSTOM_JOBS_KEY);
      const custom = safeJsonParse<JobOpportunity[]>(raw, []);
      if (custom.length > 0) return custom;
      return INITIAL_JOB_OPPORTUNITIES;
    } catch {
      return INITIAL_JOB_OPPORTUNITIES;
    }
  },

  saveJob(job: JobOpportunity): boolean {
    try {
      const current = portalStorage.getJobs();
      const idx = current.findIndex((j) => j.id === job.id);
      let updated: JobOpportunity[];
      if (idx >= 0) {
        updated = [...current];
        updated[idx] = job;
      } else {
        updated = [job, ...current];
      }
      setItem(CUSTOM_JOBS_KEY, JSON.stringify(updated));
      return true;
    } catch {
      return false;
    }
  },

  deleteJob(jobId: string): boolean {
    try {
      const current = portalStorage.getJobs();
      const updated = current.filter((j) => j.id !== jobId);
      setItem(CUSTOM_JOBS_KEY, JSON.stringify(updated));
      return true;
    } catch {
      return false;
    }
  },

  // ==========================================
  // 6. NEWSLETTERS MANAGEMENT (ADMIN CRUD)
  // ==========================================

  getNewsletters(): NewsletterEdition[] {
    try {
      const raw = getItem(CUSTOM_NEWSLETTERS_KEY);
      const custom = safeJsonParse<NewsletterEdition[]>(raw, []);
      if (custom.length > 0) return custom;
      return INITIAL_NEWSLETTERS;
    } catch {
      return INITIAL_NEWSLETTERS;
    }
  },

  saveNewsletter(edition: NewsletterEdition): boolean {
    try {
      const current = portalStorage.getNewsletters();
      const idx = current.findIndex((n) => n.id === edition.id);
      let updated: NewsletterEdition[];
      if (idx >= 0) {
        updated = [...current];
        updated[idx] = edition;
      } else {
        updated = [edition, ...current];
      }
      setItem(CUSTOM_NEWSLETTERS_KEY, JSON.stringify(updated));
      return true;
    } catch {
      return false;
    }
  },

  deleteNewsletter(editionId: string): boolean {
    try {
      const current = portalStorage.getNewsletters();
      const updated = current.filter((n) => n.id !== editionId);
      setItem(CUSTOM_NEWSLETTERS_KEY, JSON.stringify(updated));
      return true;
    } catch {
      return false;
    }
  },

  // ==========================================
  // 7. STUDY MATERIALS MANAGEMENT (ADMIN CRUD)
  // ==========================================

  getStudyMaterials(): StudyResource[] {
    try {
      const raw = getItem(CUSTOM_STUDY_KEY);
      const custom = safeJsonParse<StudyResource[]>(raw, []);
      if (custom.length > 0) return custom;
      return INITIAL_STUDY_RESOURCES;
    } catch {
      return INITIAL_STUDY_RESOURCES;
    }
  },

  saveStudyMaterial(mat: StudyResource): boolean {
    try {
      const current = portalStorage.getStudyMaterials();
      const idx = current.findIndex((m) => m.id === mat.id);
      let updated: StudyResource[];
      if (idx >= 0) {
        updated = [...current];
        updated[idx] = mat;
      } else {
        updated = [mat, ...current];
      }
      setItem(CUSTOM_STUDY_KEY, JSON.stringify(updated));
      return true;
    } catch {
      return false;
    }
  },

  deleteStudyMaterial(materialId: string): boolean {
    try {
      const current = portalStorage.getStudyMaterials();
      const updated = current.filter((m) => m.id !== materialId);
      setItem(CUSTOM_STUDY_KEY, JSON.stringify(updated));
      return true;
    } catch {
      return false;
    }
  },
};
