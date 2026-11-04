import type { ExamConfig, ExamQuestion } from '../types';
import { DEDICATED_EXAM_QUESTIONS } from './examQuestions';

/**
 * Standard Preview Question Bank
 * Note: These questions are preview/benchmark demonstration questions for placement training.
 * They are not official unreleased examination papers.
 */
export const PREVIEW_QUESTION_BANK: ExamQuestion[] = [
  // --- QUANTITATIVE APTITUDE ---
  {
    id: 'q-quant-1',
    questionText:
      'A train running at a speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train in metres?',
    options: ['120 metres', '150 metres', '180 metres', '324 metres'],
    correctAnswer: 1, // 150 metres
    marks: 1,
    negativeMarks: 0.25,
    category: 'Quantitative',
    difficulty: 'Easy',
    explanation:
      'Speed = 60 * (5/18) m/s = 50/3 m/s. Length of train = Speed * Time = (50/3) * 9 = 150 metres.',
  },
  {
    id: 'q-quant-2',
    questionText:
      'A sum of money at simple interest amounts to Rs. 815 in 3 years and to Rs. 854 in 4 years. What is the principal sum?',
    options: ['Rs. 650', 'Rs. 690', 'Rs. 698', 'Rs. 700'],
    correctAnswer: 2, // Rs. 698
    marks: 1,
    negativeMarks: 0.25,
    category: 'Quantitative',
    difficulty: 'Medium',
    explanation:
      'S.I. for 1 year = 854 - 815 = Rs. 39. S.I. for 3 years = 39 * 3 = Rs. 117. Principal = 815 - 117 = Rs. 698.',
  },
  {
    id: 'q-quant-3',
    questionText:
      'Two pipes A and B can fill a cistern in 20 and 30 minutes respectively, while pipe C can empty the full cistern in 15 minutes. If all three are opened together, how long will it take to fill the cistern?',
    options: ['40 minutes', '50 minutes', '60 minutes', '75 minutes'],
    correctAnswer: 2, // 60 minutes
    marks: 1,
    negativeMarks: 0.25,
    category: 'Quantitative',
    difficulty: 'Medium',
    explanation:
      'Net part filled in 1 minute = (1/20 + 1/30 - 1/15) = (3 + 2 - 4)/60 = 1/60. Hence the cistern fills in 60 minutes.',
  },
  {
    id: 'q-quant-4',
    questionText:
      'In how many different ways can the letters of the word "LEADING" be arranged in such a way that the vowels always come together?',
    options: ['360', '480', '720', '5040'],
    correctAnswer: 2, // 720
    marks: 1,
    negativeMarks: 0.25,
    category: 'Quantitative',
    difficulty: 'Hard',
    explanation:
      'Vowels are E, A, I (3 vowels treated as 1 group). Remaining consonants: L, D, N, G (4). Total units = 5! = 120. Vowels internally = 3! = 6. Total = 120 * 6 = 720 ways.',
  },
  {
    id: 'q-quant-5',
    questionText:
      'A shopkeeper sells two tables for Rs. 1200 each. On one he gains 20% and on the other he loses 20%. What is his overall gain or loss percentage?',
    options: ['No gain no loss', '4% gain', '4% loss', '2% loss'],
    correctAnswer: 2, // 4% loss
    marks: 1,
    negativeMarks: 0.25,
    category: 'Quantitative',
    difficulty: 'Medium',
    explanation:
      'When selling price is same with equal gain% and loss% of x%, there is always a loss of (x/10)^2 %. Here (20/10)^2 = 4% loss.',
  },

  // --- LOGICAL REASONING ---
  {
    id: 'q-logic-1',
    questionText:
      'Find the missing number in the series: 4, 9, 25, 49, 121, 169, ?',
    options: ['225', '256', '289', '361'],
    correctAnswer: 2, // 289
    marks: 1,
    negativeMarks: 0.25,
    category: 'Logical',
    difficulty: 'Easy',
    explanation:
      'The series consists of squares of consecutive prime numbers: 2^2=4, 3^2=9, 5^2=25, 7^2=49, 11^2=121, 13^2=169, 17^2=289.',
  },
  {
    id: 'q-logic-2',
    questionText:
      'Pointing to a photograph of a boy, Suresh said, "He is the son of the only son of my mother." How is Suresh related to that boy?',
    options: ['Brother', 'Uncle', 'Cousin', 'Father'],
    correctAnswer: 3, // Father
    marks: 1,
    negativeMarks: 0.25,
    category: 'Logical',
    difficulty: 'Easy',
    explanation:
      'The only son of Suresh\'s mother is Suresh himself. Therefore, the boy in the photo is Suresh\'s son, making Suresh the Father.',
  },
  {
    id: 'q-logic-3',
    questionText:
      'Statements: All flowers are trees. No tree is a fruit.\nConclusions:\nI. No flower is a fruit.\nII. Some trees are flowers.',
    options: [
      'Only conclusion I follows',
      'Only conclusion II follows',
      'Neither I nor II follows',
      'Both conclusion I and II follow',
    ],
    correctAnswer: 3, // Both follow
    marks: 1,
    negativeMarks: 0.25,
    category: 'Logical',
    difficulty: 'Medium',
    explanation:
      'Since all flowers are inside trees and trees are disjoint from fruits, no flower can be a fruit (I follows). Since flowers exist within trees, some trees are flowers (II follows).',
  },
  {
    id: 'q-logic-4',
    questionText:
      'If in a certain code language, "ROSE" is written as "6821", "CHAIR" is written as "73456", and "PREACH" is written as "961473", what is the code for "SEARCH"?',
    options: ['214673', '214763', '241673', '216473'],
    correctAnswer: 0, // 214673
    marks: 1,
    negativeMarks: 0.25,
    category: 'Logical',
    difficulty: 'Medium',
    explanation:
      'Direct substitution: S=2, E=1, A=4, R=6, C=7, H=3. Hence SEARCH = 214673.',
  },
  {
    id: 'q-logic-5',
    questionText:
      'Six persons A, B, C, D, E and F are sitting around a circular table facing the centre. B is between A and C. E is opposite to B. D is to the immediate right of A. Who is sitting to the immediate left of C?',
    options: ['E', 'D', 'F', 'B'],
    correctAnswer: 0, // E
    marks: 1,
    negativeMarks: 0.25,
    category: 'Logical',
    difficulty: 'Hard',
    explanation:
      'Arranging clockwise: A, D, F, E, C, B. Looking from C to the center, the immediate left position is occupied by E.',
  },

  // --- VERBAL ABILITY ---
  {
    id: 'q-verb-1',
    questionText:
      'Choose the word that is most nearly opposite in meaning (Antonym) to "BENEVOLENT":',
    options: ['Malevolent', 'Generous', 'Ambiguous', 'Docile'],
    correctAnswer: 0, // Malevolent
    marks: 1,
    negativeMarks: 0.25,
    category: 'Verbal',
    difficulty: 'Easy',
    explanation:
      'Benevolent means well-meaning and kindly. Its direct antonym is Malevolent (wishing or appearing to wish evil to others).',
  },
  {
    id: 'q-verb-2',
    questionText:
      'Select the sentence that is grammatically correct with respect to subject-verb agreement:',
    options: [
      'Each of the candidates have submitted their resume.',
      'Each of the candidates has submitted his or her resume.',
      'Each of the candidates were submitting their resumes.',
      'Each of the candidates are submitting his resume.',
    ],
    correctAnswer: 1, // has submitted his or her resume
    marks: 1,
    negativeMarks: 0.25,
    category: 'Verbal',
    difficulty: 'Medium',
    explanation:
      '"Each" is a singular indefinite pronoun and strictly takes a singular verb ("has submitted").',
  },
  {
    id: 'q-verb-3',
    questionText:
      'Fill in the blank with the appropriate preposition: "The college dean congratulated the placement team ______ their outstanding achievements."',
    options: ['for', 'on', 'with', 'about'],
    correctAnswer: 1, // on
    marks: 1,
    negativeMarks: 0.25,
    category: 'Verbal',
    difficulty: 'Easy',
    explanation:
      'The verb "congratulate" conventionally collocates with the preposition "on" (e.g., congratulate someone on something).',
  },
  {
    id: 'q-verb-4',
    questionText:
      'Identify the correct meaning of the idiom: "A blessing in disguise":',
    options: [
      'Something that appears good at first, but ends up having a bad result.',
      'An apparent misfortune that eventually has good results.',
      'A prayer recited in hidden secrecy.',
      'A person who deceives friends by pretending to be kind.',
    ],
    correctAnswer: 1,
    marks: 1,
    negativeMarks: 0.25,
    category: 'Verbal',
    difficulty: 'Easy',
    explanation:
      'A blessing in disguise is an unfortunate event or situation that ultimately leads to a positive outcome.',
  },
  {
    id: 'q-verb-5',
    questionText:
      'Rearrange the following parts to form a coherent sentence:\n(P) for engineers in modern industries\n(Q) problem solving skills\n(R) are regarded as paramount\n(Q) and algorithmic thinking',
    options: ['Q-S-R-P', 'R-P-Q-S', 'P-R-Q-S', 'S-Q-P-R'],
    correctAnswer: 0, // Q-S-R-P
    marks: 1,
    negativeMarks: 0.25,
    category: 'Verbal',
    difficulty: 'Medium',
    explanation:
      'Combining: "Problem solving skills (Q) and algorithmic thinking (S) are regarded as paramount (R) for engineers in modern industries (P)."',
  },

  // --- CORE TECHNICAL ---
  {
    id: 'q-tech-1',
    questionText:
      'What is the worst-case time complexity of searching an element in a balanced Binary Search Tree (AVL Tree) with n nodes?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
    correctAnswer: 1, // O(log n)
    marks: 1,
    negativeMarks: 0.25,
    category: 'Core Technical',
    difficulty: 'Easy',
    explanation:
      'In an AVL Tree, the height is strictly bounded by 1.44 log n. Therefore, search, insertion, and deletion all execute in worst-case O(log n) time.',
  },
  {
    id: 'q-tech-2',
    questionText:
      'In relational database design, which normal form eliminates transitive dependency of non-prime attributes on candidate keys?',
    options: ['1NF', '2NF', '3NF', 'BCNF'],
    correctAnswer: 2, // 3NF
    marks: 1,
    negativeMarks: 0.25,
    category: 'Core Technical',
    difficulty: 'Medium',
    explanation:
      '2NF eliminates partial dependencies, whereas 3NF eliminates transitive dependencies (X -> Y where Y is non-prime and X is not a superkey).',
  },
  {
    id: 'q-tech-3',
    questionText:
      'Which scheduling algorithm is non-preemptive and may cause starvation for processes with larger burst times?',
    options: ['Round Robin', 'Shortest Job First (SJF Non-preemptive)', 'Priority Preemptive', 'Multilevel Feedback Queue'],
    correctAnswer: 1, // SJF
    marks: 1,
    negativeMarks: 0.25,
    category: 'Core Technical',
    difficulty: 'Medium',
    explanation:
      'In Non-preemptive SJF, shorter jobs take priority. If short processes arrive continuously, longer processes suffer from indefinite waiting (starvation).',
  },
  {
    id: 'q-tech-4',
    questionText:
      'In computer networking, which layer of the OSI model is responsible for end-to-end flow control, error recovery, and port addressing?',
    options: ['Network Layer', 'Data Link Layer', 'Transport Layer', 'Session Layer'],
    correctAnswer: 2, // Transport Layer
    marks: 1,
    negativeMarks: 0.25,
    category: 'Core Technical',
    difficulty: 'Easy',
    explanation:
      'The Transport Layer (Layer 4, protocols like TCP/UDP) manages end-to-end message transmission, segmentation, port numbers, and flow control.',
  },
  {
    id: 'q-tech-5',
    questionText:
      'In Object-Oriented Programming, when a subclass provides a specific implementation of a method that is already provided by its superclass, this is known as:',
    options: ['Method Overloading', 'Method Overriding', 'Operator Overloading', 'Encapsulation'],
    correctAnswer: 1, // Method Overriding
    marks: 1,
    negativeMarks: 0.25,
    category: 'Core Technical',
    difficulty: 'Easy',
    explanation:
      'Method Overriding occurs at runtime (dynamic polymorphism) when a derived class redefines a virtual/base method with the exact same signature.',
  },
];

/**
 * Retrieves the dedicated question bank for an exam.
 * Each of the 20 exams has its own unique 20-question bank (400 total questions).
 * Zero question cycling or reuse across exams.
 */
export const getQuestionsForExam = (examId: string, totalQuestions?: number): ExamQuestion[] => {
  const dedicated = DEDICATED_EXAM_QUESTIONS[examId];
  if (dedicated && dedicated.length > 0) {
    return totalQuestions ? dedicated.slice(0, totalQuestions) : dedicated;
  }

  // Graceful fallback if dynamic exam is created without a pre-configured bank
  const count = totalQuestions || 20;
  return PREVIEW_QUESTION_BANK.slice(0, count);
};

/**
 * 20 Aptitude & Technical Exams Catalog
 * Organized across Quantitative, Logical, Verbal, Core Technical, and Company Patterns.
 */
export const APTITUDE_EXAMS_CATALOG: ExamConfig[] = [
  // --- ONGOING EXAMS (5) ---
  {
    id: 'exam-dsa-midsem',
    title: 'Data Structures - Mid Sem MCQ',
    description: 'Comprehensive evaluation on trees, graphs, heaps, dynamic programming, and complexity analysis.',
    category: 'Core Technical',
    type: 'mcq',
    durationMinutes: 45,
    totalQuestions: 20,
    totalMarks: 20,
    passPercentage: 50,
    negativeMarking: true,
    negativeMarkValue: 0.25,
    batch: 'Batch CSE-A',
    status: 'ongoing',
    scheduledDate: 'Live Now',
    isLive: true,
    companyTag: 'Campus Core',
  },
  {
    id: 'exam-quant-drill-1',
    title: 'Quantitative Aptitude Drill - Speed Math & Percentages',
    description: 'Time-pressured drill assessing percentages, ratios, averages, profit & loss, and speed calculation.',
    category: 'Quantitative',
    type: 'mcq',
    durationMinutes: 30,
    totalQuestions: 20,
    totalMarks: 20,
    passPercentage: 60,
    negativeMarking: true,
    negativeMarkValue: 0.25,
    batch: 'Batch CSE & ISE',
    status: 'ongoing',
    scheduledDate: 'Live Now',
    isLive: true,
    companyTag: 'General Aptitude',
  },
  {
    id: 'exam-logical-syllogism',
    title: 'Logical Reasoning - Syllogisms & Seating Arrangements',
    description: 'Analytical reasoning test covering circular permutations, blood relations, and conditional logic.',
    category: 'Logical',
    type: 'mcq',
    durationMinutes: 35,
    totalQuestions: 20,
    totalMarks: 20,
    passPercentage: 55,
    negativeMarking: true,
    negativeMarkValue: 0.25,
    batch: 'All Engineering Batches',
    status: 'ongoing',
    scheduledDate: 'Live Now',
    isLive: true,
    companyTag: 'Analytical Round',
  },
  {
    id: 'exam-verbal-vocab-grammar',
    title: 'Verbal Ability - Grammar & Sentence Correction',
    description: 'Standard campus recruitment verbal assessment on error detection, prepositions, and idioms.',
    category: 'Verbal',
    type: 'mcq',
    durationMinutes: 25,
    totalQuestions: 20,
    totalMarks: 20,
    passPercentage: 50,
    negativeMarking: false,
    negativeMarkValue: 0,
    batch: 'All Engineering Batches',
    status: 'ongoing',
    scheduledDate: 'Live Now',
    isLive: true,
    companyTag: 'Verbal Round',
  },
  {
    id: 'exam-python-oops-eval',
    title: 'Python & OOPs Lab Evaluation',
    description: 'Practical concepts in Python data structures, decorators, generators, polymorphism, and memory model.',
    category: 'Core Technical',
    type: 'mcq',
    durationMinutes: 40,
    totalQuestions: 20,
    totalMarks: 20,
    passPercentage: 60,
    negativeMarking: true,
    negativeMarkValue: 0.25,
    batch: 'Batch AIML & CSDS',
    status: 'ongoing',
    scheduledDate: 'Live Now',
    isLive: true,
    companyTag: 'Technical MCQ',
  },

  // --- UPCOMING EXAMS (11) ---
  {
    id: 'exam-dbms-sql-query',
    title: 'DBMS & SQL Query Diagnostic Test',
    description: 'Relational algebra, normal forms (1NF-BCNF), ACID properties, indexing, and complex joins.',
    category: 'Core Technical',
    type: 'mcq',
    durationMinutes: 45,
    totalQuestions: 20,
    totalMarks: 20,
    passPercentage: 55,
    negativeMarking: true,
    negativeMarkValue: 0.25,
    batch: 'Batch CSE & ISE',
    status: 'upcoming',
    scheduledDate: 'Nov 05, 2026 &bull; 10:00 AM',
    isLive: false,
    companyTag: 'Database Engineering',
  },
  {
    id: 'exam-os-process-threads',
    title: 'Operating Systems & Concurrency',
    description: 'Process scheduling, deadlocks, semaphores, virtual memory, and page replacement algorithms.',
    category: 'Core Technical',
    type: 'mcq',
    durationMinutes: 45,
    totalQuestions: 20,
    totalMarks: 20,
    passPercentage: 50,
    negativeMarking: true,
    negativeMarkValue: 0.25,
    batch: 'Batch CSE-B',
    status: 'upcoming',
    scheduledDate: 'Nov 07, 2026 &bull; 02:00 PM',
    isLive: false,
    companyTag: 'Systems Engineering',
  },
  {
    id: 'exam-cn-tcp-ip',
    title: 'Computer Networks & TCP/IP Protocols',
    description: 'Subnetting, routing algorithms (OSPF/BGP), TCP handshake, flow control, and HTTP/HTTPS security.',
    category: 'Core Technical',
    type: 'mcq',
    durationMinutes: 40,
    totalQuestions: 20,
    totalMarks: 20,
    passPercentage: 50,
    negativeMarking: true,
    negativeMarkValue: 0.25,
    batch: 'Batch CSE & ECE',
    status: 'upcoming',
    scheduledDate: 'Nov 09, 2026 &bull; 11:30 AM',
    isLive: false,
    companyTag: 'Network Infrastructure',
  },
  {
    id: 'exam-quant-tsd-work',
    title: 'Quantitative - Time, Speed, Distance & Work',
    description: 'Advanced problems on relative speeds, trains, pipes & cisterns, work-efficiency equivalence.',
    category: 'Quantitative',
    type: 'mcq',
    durationMinutes: 30,
    totalQuestions: 20,
    totalMarks: 20,
    passPercentage: 60,
    negativeMarking: true,
    negativeMarkValue: 0.25,
    batch: 'All 7th Sem Batches',
    status: 'upcoming',
    scheduledDate: 'Nov 11, 2026 &bull; 09:00 AM',
    isLive: false,
    companyTag: 'Campus Drive Prep',
  },
  {
    id: 'exam-logical-blood-directions',
    title: 'Logical - Directions & Complex Family Trees',
    description: 'Multi-step directional navigation, coded blood relations, and binary logic riddles.',
    category: 'Logical',
    type: 'mcq',
    durationMinutes: 30,
    totalQuestions: 20,
    totalMarks: 20,
    passPercentage: 55,
    negativeMarking: false,
    negativeMarkValue: 0,
    batch: 'All Engineering Batches',
    status: 'upcoming',
    scheduledDate: 'Nov 13, 2026 &bull; 03:00 PM',
    isLive: false,
    companyTag: 'Aptitude Round',
  },
  {
    id: 'exam-verbal-para-jumbles',
    title: 'Verbal - Reading Comprehension & Para Jumbles',
    description: 'Long passage inferences, tone identification, critical sentence rearrangement, and context matching.',
    category: 'Verbal',
    type: 'mcq',
    durationMinutes: 35,
    totalQuestions: 20,
    totalMarks: 20,
    passPercentage: 55,
    negativeMarking: true,
    negativeMarkValue: 0.25,
    batch: 'All Batches',
    status: 'upcoming',
    scheduledDate: 'Nov 15, 2026 &bull; 10:00 AM',
    isLive: false,
    companyTag: 'Communication Round',
  },
  {
    id: 'exam-web-fullstack-mcq',
    title: 'Full Stack Web Development MCQ Assessment',
    description: 'HTML5/CSS3 layout models, JavaScript event loop, Promises/Async, React lifecycle, and REST APIs.',
    category: 'Core Technical',
    type: 'mcq',
    durationMinutes: 45,
    totalQuestions: 20,
    totalMarks: 20,
    passPercentage: 60,
    negativeMarking: true,
    negativeMarkValue: 0.25,
    batch: 'Web Specialization Batch',
    status: 'upcoming',
    scheduledDate: 'Nov 17, 2026 &bull; 02:00 PM',
    isLive: false,
    companyTag: 'Full Stack Engineering',
  },
  {
    id: 'exam-tcs-nqt-mock',
    title: 'TCS NQT Pattern Comprehensive Mock Test',
    description: 'Full simulation patterned after TCS National Qualifier Test: Numerical, Verbal, and Reasoning.',
    category: 'Quantitative',
    type: 'mcq',
    durationMinutes: 60,
    totalQuestions: 20,
    totalMarks: 20,
    passPercentage: 65,
    negativeMarking: true,
    negativeMarkValue: 0.25,
    batch: 'Placement Registered',
    status: 'upcoming',
    scheduledDate: 'Nov 19, 2026 &bull; 09:30 AM',
    isLive: false,
    companyTag: 'TCS NQT Pattern',
  },
  {
    id: 'exam-infosys-springboard-mock',
    title: 'Infosys Springboard Reasoning Simulation',
    description: 'Cryptarithmetic, puzzle-based reasoning, data sufficiency, and critical thinking.',
    category: 'Logical',
    type: 'mcq',
    durationMinutes: 50,
    totalQuestions: 20,
    totalMarks: 20,
    passPercentage: 60,
    negativeMarking: false,
    negativeMarkValue: 0,
    batch: 'Placement Registered',
    status: 'upcoming',
    scheduledDate: 'Nov 21, 2026 &bull; 11:00 AM',
    isLive: false,
    companyTag: 'Infosys Pattern',
  },
  {
    id: 'exam-wipro-elite-mock',
    title: 'Wipro Elite National Talent Hunt Mock',
    description: 'Aptitude, basic coding logic questions, technical essentials, and written communication evaluation.',
    category: 'Core Technical',
    type: 'mcq',
    durationMinutes: 55,
    totalQuestions: 20,
    totalMarks: 20,
    passPercentage: 60,
    negativeMarking: true,
    negativeMarkValue: 0.25,
    batch: 'Placement Registered',
    status: 'upcoming',
    scheduledDate: 'Nov 24, 2026 &bull; 02:30 PM',
    isLive: false,
    companyTag: 'Wipro Elite',
  },
  {
    id: 'exam-accenture-cognitive',
    title: 'Accenture Cognitive & Technical Assessment',
    description: 'Abstract reasoning, spatial ability, pseudocode interpretation, and MS Office / cloud basics.',
    category: 'Logical',
    type: 'mcq',
    durationMinutes: 50,
    totalQuestions: 20,
    totalMarks: 20,
    passPercentage: 65,
    negativeMarking: false,
    negativeMarkValue: 0,
    batch: 'Placement Registered',
    status: 'upcoming',
    scheduledDate: 'Nov 27, 2026 &bull; 10:00 AM',
    isLive: false,
    companyTag: 'Accenture Pattern',
  },

  // --- COMPLETED EXAMS (4) ---
  {
    id: 'exam-scem-dsa-oct',
    title: 'SCEM DSA 5(3) - Mid Assessment',
    description: 'Arrays, Stacks, Queues, Recursion, and Binary Tree traversals diagnostic exam.',
    category: 'Core Technical',
    type: 'mcq',
    durationMinutes: 45,
    totalQuestions: 20,
    totalMarks: 20,
    passPercentage: 50,
    negativeMarking: true,
    negativeMarkValue: 0.25,
    batch: 'Batch CSE-A',
    status: 'completed',
    scheduledDate: 'Oct 30, 2026',
    isLive: false,
    companyTag: 'Department Exam',
  },
  {
    id: 'exam-scem-c30-oct',
    title: 'SCEM C30 05 - Logical Reasoning Diagnostic',
    description: 'Analytical puzzle patterns, conditional truth tables, and seating logic.',
    category: 'Logical',
    type: 'mcq',
    durationMinutes: 30,
    totalQuestions: 20,
    totalMarks: 20,
    passPercentage: 55,
    negativeMarking: true,
    negativeMarkValue: 0.25,
    batch: 'Batch CSE & ISE',
    status: 'completed',
    scheduledDate: 'Oct 25, 2026',
    isLive: false,
    companyTag: 'Diagnostic Round',
  },
  {
    id: 'exam-scem-wed-oct',
    title: 'SCEM Wed - Quantitative Drill',
    description: 'Fundamental arithmetic, averages, ratios, and percentages assessment.',
    category: 'Quantitative',
    type: 'mcq',
    durationMinutes: 25,
    totalQuestions: 20,
    totalMarks: 20,
    passPercentage: 50,
    negativeMarking: true,
    negativeMarkValue: 0.25,
    batch: 'All Batches',
    status: 'completed',
    scheduledDate: 'Oct 18, 2026',
    isLive: false,
    companyTag: 'Weekly Drill',
  },
  {
    id: 'exam-scem-cod-oct',
    title: 'SCEM COD 5(3) - Core CS Fundamentals',
    description: 'Fundamental principles of computer organization, digital logic, and memory hierarchy.',
    category: 'Core Technical',
    type: 'mcq',
    durationMinutes: 40,
    totalQuestions: 20,
    totalMarks: 20,
    passPercentage: 50,
    negativeMarking: true,
    negativeMarkValue: 0.25,
    batch: 'Batch CSE-B',
    status: 'completed',
    scheduledDate: 'Oct 12, 2026',
    isLive: false,
    companyTag: 'Mid Semester Evaluation',
  },
];

/**
 * Retrieves an exam by its unique ID and attaches its complete question set.
 */
export const getExamConfigById = (examId: string): ExamConfig | undefined => {
  const config = APTITUDE_EXAMS_CATALOG.find((e) => e.id === examId);
  if (!config) return undefined;

  return {
    ...config,
    questions: getQuestionsForExam(config.id, config.totalQuestions),
  };
};
