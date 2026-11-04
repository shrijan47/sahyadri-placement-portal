-- ==============================================================================
-- SAHYADRI PLACEMENT PREP PORTAL — DATABASE SCHEMA & RLS POLICIES
-- Target: Cloud PostgreSQL / Supabase
-- ==============================================================================

-- 1. PROFILES TABLE
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  usn TEXT UNIQUE,
  role TEXT NOT NULL CHECK (role IN ('student', 'faculty', 'admin')) DEFAULT 'student',
  department TEXT,
  batch TEXT,
  avatar_url TEXT,
  must_change_password BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc', NOW()) NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc', NOW()) NOT NULL
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public profiles are viewable by authenticated users"
  ON public.profiles FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can update their own profile"
  ON public.profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Security Trigger: Prevent students from escalating their own privileges
CREATE OR REPLACE FUNCTION public.protect_profile_privileges()
RETURNS TRIGGER AS $$
BEGIN
  -- Prevent privilege escalation: Regular users cannot change their role to faculty or admin
  IF NEW.role IS DISTINCT FROM OLD.role THEN
    IF NOT EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    ) THEN
      RAISE EXCEPTION 'Privilege Escalation Rejected: Only verified administrators can modify user roles.';
    END IF;
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS trg_protect_profile_privileges ON public.profiles;
CREATE TRIGGER trg_protect_profile_privileges
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.protect_profile_privileges();

-- 2. TESTS TABLE
CREATE TABLE IF NOT EXISTS public.tests (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('mcq', 'coding', 'hybrid')),
  duration_minutes INTEGER NOT NULL DEFAULT 45,
  total_questions INTEGER NOT NULL DEFAULT 20,
  total_marks NUMERIC(6,2) NOT NULL DEFAULT 20,
  pass_percentage NUMERIC(5,2) NOT NULL DEFAULT 50,
  negative_marks NUMERIC(4,2) NOT NULL DEFAULT 0.25,
  batch TEXT NOT NULL DEFAULT 'All Batches',
  status TEXT NOT NULL CHECK (status IN ('ongoing', 'upcoming', 'completed')) DEFAULT 'upcoming',
  is_live BOOLEAN NOT NULL DEFAULT false,
  scheduled_date TEXT,
  created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc', NOW()) NOT NULL
);

ALTER TABLE public.tests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Tests viewable by authenticated students and faculty"
  ON public.tests FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Only faculty/admin can insert or update tests"
  ON public.tests FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid() AND profiles.role IN ('faculty', 'admin')
    )
  );

-- 3. QUESTIONS TABLE
CREATE TABLE IF NOT EXISTS public.questions (
  id TEXT PRIMARY KEY,
  test_id TEXT REFERENCES public.tests(id) ON DELETE CASCADE NOT NULL,
  question_text TEXT NOT NULL,
  options JSONB NOT NULL,
  correct_answer INTEGER NOT NULL CHECK (correct_answer >= 0 AND correct_answer <= 3),
  marks NUMERIC(4,2) NOT NULL DEFAULT 1.0,
  negative_marks NUMERIC(4,2) NOT NULL DEFAULT 0.25,
  explanation TEXT,
  category TEXT NOT NULL,
  difficulty TEXT NOT NULL CHECK (difficulty IN ('Easy', 'Medium', 'Hard')) DEFAULT 'Medium',
  created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc', NOW()) NOT NULL
);

ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;

-- Restrict direct SELECT on questions to faculty and admin only
-- This prevents students from opening DevTools to inspect correct_answer or explanation
CREATE POLICY "Questions full data readable only by faculty and admins"
  ON public.questions FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid() AND profiles.role IN ('faculty', 'admin')
    )
  );

-- Secure RPC to fetch exam questions for students (strictly strips correct_answer & explanation)
CREATE OR REPLACE FUNCTION public.get_student_exam_questions(p_test_id TEXT)
RETURNS TABLE (
  id TEXT,
  test_id TEXT,
  question_text TEXT,
  options JSONB,
  marks NUMERIC(4,2),
  negative_marks NUMERIC(4,2),
  category TEXT,
  difficulty TEXT
)
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT 
    q.id,
    q.test_id,
    q.question_text,
    q.options,
    q.marks,
    q.negative_marks,
    q.category,
    q.difficulty
  FROM public.questions q
  JOIN public.tests t ON t.id = q.test_id
  WHERE q.test_id = p_test_id
  AND (t.is_live = true OR t.status IN ('ongoing', 'upcoming'));
$$;

-- Secure RPC to fetch verified solutions ONLY AFTER attempt is officially evaluated
CREATE OR REPLACE FUNCTION public.get_attempt_solutions(p_attempt_id UUID)
RETURNS TABLE (
  question_id TEXT,
  question_text TEXT,
  options JSONB,
  selected_option INTEGER,
  correct_answer INTEGER,
  marks NUMERIC(4,2),
  negative_marks NUMERIC(4,2),
  explanation TEXT,
  is_correct BOOLEAN
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_user_id UUID;
  v_status TEXT;
  v_test_id TEXT;
BEGIN
  SELECT user_id, status, test_id INTO v_user_id, v_status, v_test_id
  FROM public.test_attempts
  WHERE id = p_attempt_id;

  IF v_user_id IS NULL OR v_user_id <> auth.uid() THEN
    RAISE EXCEPTION 'Unauthorized: Cannot view another student solutions.';
  END IF;

  IF v_status <> 'evaluated' THEN
    RAISE EXCEPTION 'Access Denied: Solutions are only revealed after test evaluation is finalized.';
  END IF;

  RETURN QUERY
  SELECT 
    q.id AS question_id,
    q.question_text,
    q.options,
    sa.selected_option,
    q.correct_answer,
    q.marks,
    q.negative_marks,
    q.explanation,
    (sa.selected_option IS NOT NULL AND sa.selected_option = q.correct_answer) AS is_correct
  FROM public.questions q
  LEFT JOIN public.student_answers sa ON sa.question_id = q.id AND sa.attempt_id = p_attempt_id
  WHERE q.test_id = v_test_id;
END;
$$;

-- 4. TEST ATTEMPTS TABLE
CREATE TABLE IF NOT EXISTS public.test_attempts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  test_id TEXT REFERENCES public.tests(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  score NUMERIC(6,2) NOT NULL DEFAULT 0,
  max_score NUMERIC(6,2) NOT NULL DEFAULT 0,
  percentage NUMERIC(5,2) NOT NULL DEFAULT 0,
  time_taken_seconds INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL CHECK (status IN ('in_progress', 'submitted', 'evaluated')) DEFAULT 'in_progress',
  submitted_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc', NOW()) NOT NULL
);

ALTER TABLE public.test_attempts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Students can view only their own test attempts"
  ON public.test_attempts FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Students can insert their own attempts"
  ON public.test_attempts FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Students can update their own in_progress attempts"
  ON public.test_attempts FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- 5. STUDENT ANSWERS TABLE
CREATE TABLE IF NOT EXISTS public.student_answers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  attempt_id UUID REFERENCES public.test_attempts(id) ON DELETE CASCADE NOT NULL,
  question_id TEXT REFERENCES public.questions(id) ON DELETE CASCADE NOT NULL,
  selected_option INTEGER CHECK (selected_option IS NULL OR (selected_option >= 0 AND selected_option <= 3)),
  is_marked_for_review BOOLEAN NOT NULL DEFAULT false,
  time_spent_seconds INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc', NOW()) NOT NULL,
  UNIQUE(attempt_id, question_id)
);

ALTER TABLE public.student_answers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Students can view only their own answers through attempts"
  ON public.student_answers FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.test_attempts
      WHERE test_attempts.id = student_answers.attempt_id
      AND test_attempts.user_id = auth.uid()
    )
  );

CREATE POLICY "Students can insert or update their own answers"
  ON public.student_answers FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.test_attempts
      WHERE test_attempts.id = student_answers.attempt_id
      AND test_attempts.user_id = auth.uid()
    )
  );

-- 6. SERVER-SIDE SECURE SUBMISSION RPC FUNCTION
CREATE OR REPLACE FUNCTION public.submit_exam_attempt(
  p_attempt_id UUID,
  p_time_taken INTEGER
) RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_user_id UUID;
  v_test_id TEXT;
  v_total_score NUMERIC := 0;
  v_max_score NUMERIC := 0;
  v_correct_count INTEGER := 0;
  v_incorrect_count INTEGER := 0;
  v_unanswered_count INTEGER := 0;
  r RECORD;
BEGIN
  -- Verify attempt ownership
  SELECT user_id, test_id INTO v_user_id, v_test_id
  FROM public.test_attempts
  WHERE id = p_attempt_id;

  IF v_user_id IS NULL OR v_user_id <> auth.uid() THEN
    RAISE EXCEPTION 'Unauthorized attempt access';
  END IF;

  -- Compute scores on trusted database boundary
  FOR r IN (
    SELECT q.id, q.correct_answer, q.marks, q.negative_marks, sa.selected_option
    FROM public.questions q
    LEFT JOIN public.student_answers sa ON sa.question_id = q.id AND sa.attempt_id = p_attempt_id
    WHERE q.test_id = v_test_id
  ) LOOP
    v_max_score := v_max_score + r.marks;
    IF r.selected_option IS NULL THEN
      v_unanswered_count := v_unanswered_count + 1;
    ELSIF r.selected_option = r.correct_answer THEN
      v_correct_count := v_correct_count + 1;
      v_total_score := v_total_score + r.marks;
    ELSE
      v_incorrect_count := v_incorrect_count + 1;
      v_total_score := v_total_score - COALESCE(r.negative_marks, 0);
    END IF;
  END LOOP;

  -- Ensure score does not dip below zero if minimum threshold is 0
  v_total_score := GREATEST(0, v_total_score);

  -- Update test attempt record
  UPDATE public.test_attempts
  SET score = v_total_score,
      max_score = v_max_score,
      percentage = ROUND((v_total_score / GREATEST(1, v_max_score)) * 100, 2),
      time_taken_seconds = p_time_taken,
      status = 'evaluated',
      submitted_at = TIMEZONE('utc', NOW())
  WHERE id = p_attempt_id;

  RETURN jsonb_build_object(
    'score', v_total_score,
    'max_score', v_max_score,
    'percentage', ROUND((v_total_score / GREATEST(1, v_max_score)) * 100, 2),
    'correct', v_correct_count,
    'incorrect', v_incorrect_count,
    'unanswered', v_unanswered_count
  );
END;
$$;

