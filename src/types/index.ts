export type UserRole = 'student' | 'faculty' | 'admin';

export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  usn?: string; // e.g. 4SF24CI149 for students
  role: UserRole;
  department?: string;
  batch?: string; // e.g. 2024-2028
  avatar_url?: string;
  must_change_password?: boolean;
  is_demo?: boolean;
  created_at: string;
  updated_at: string;
}

export interface KpiMetrics {
  rank: number;
  avgScorePercentage: number;
  totalTests: number;
  attendancePercentage: number;
}

export type AssessmentType = 'mcq' | 'coding' | 'hybrid';
export type AssessmentStatus = 'ongoing' | 'upcoming' | 'completed';

export interface AssessmentItem {
  id: string;
  title: string;
  type: AssessmentType;
  durationMinutes: number;
  totalQuestions: number;
  batch: string;
  status: AssessmentStatus;
  isLive?: boolean;
  startTime?: string;
  endTime?: string;
}

export type QuestionCategory = 'Quantitative' | 'Logical' | 'Verbal' | 'Core Technical';
export type QuestionDifficulty = 'Easy' | 'Medium' | 'Hard';

export interface ExamQuestion {
  id: string;
  questionText: string;
  options: [string, string, string, string];
  correctAnswer: number; // 0, 1, 2, or 3
  marks: number;
  negativeMarks: number;
  explanation?: string;
  category: QuestionCategory;
  difficulty: QuestionDifficulty;
  codeSnippet?: string;
}

export interface ExamConfig {
  id: string;
  title: string;
  description: string;
  category: string;
  type: AssessmentType;
  durationMinutes: number;
  totalQuestions: number;
  totalMarks: number;
  passPercentage: number;
  negativeMarking: boolean;
  negativeMarkValue: number;
  batch: string;
  status: AssessmentStatus;
  scheduledDate: string;
  isLive: boolean;
  companyTag?: string;
  questions?: ExamQuestion[];
}

export interface StudentAnswerRecord {
  questionId: string;
  selectedOption: number | null;
  isMarkedForReview: boolean;
  timeSpentSeconds: number;
}

export interface ExamSubmissionResult {
  attemptId: string;
  testId: string;
  testTitle: string;
  studentId: string;
  studentName: string;
  totalScore: number;
  maxScore: number;
  percentage: number;
  passed: boolean;
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;
  markedForReviewCount: number;
  timeTakenSeconds: number;
  submittedAt: string;
  categoryBreakdown: Record<
    QuestionCategory,
    { correct: number; total: number; score: number; maxScore: number }
  >;
  questionReviews: Array<{
    question: ExamQuestion;
    selectedOption: number | null;
    isCorrect: boolean;
    scoreAwarded: number;
  }>;
}

export interface TestScorePoint {
  testCode: string;
  testName: string;
  studentScore: number;
  topperScore: number;
  maxScore: number;
  date: string;
}

export interface TopPerformer {
  rank: number;
  name: string;
  usn?: string;
  isLeader?: boolean;
}

// Supabase Database Type Definitions
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: UserProfile;
        Insert: Omit<UserProfile, 'created_at' | 'updated_at'>;
        Update: Partial<Omit<UserProfile, 'id'>>;
      };
      tests: {
        Row: AssessmentItem & {
          description?: string;
          total_marks: number;
          pass_percentage: number;
          negative_marks: number;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['tests']['Row'], 'created_at'>;
        Update: Partial<Database['public']['Tables']['tests']['Row']>;
      };
      questions: {
        Row: {
          id: string;
          test_id: string;
          question_text: string;
          options: Json;
          correct_answer: number;
          marks: number;
          negative_marks: number;
          explanation?: string;
          category: string;
          difficulty: string;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['questions']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['questions']['Row']>;
      };
      test_attempts: {
        Row: {
          id: string;
          test_id: string;
          user_id: string;
          score: number;
          max_score: number;
          time_taken_seconds: number;
          status: 'in_progress' | 'submitted' | 'evaluated';
          submitted_at?: string;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['test_attempts']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['test_attempts']['Row']>;
      };
      student_answers: {
        Row: {
          id: string;
          attempt_id: string;
          question_id: string;
          selected_option: number | null;
          is_marked_for_review: boolean;
          time_spent_seconds: number;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['student_answers']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['student_answers']['Row']>;
      };
    };
  };
}
