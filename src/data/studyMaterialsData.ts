export interface StudyResource {
  id: string;
  title: string;
  category:
    | 'Quantitative Aptitude'
    | 'Logical Reasoning'
    | 'Verbal Ability'
    | 'Data Structures and Algorithms'
    | 'DBMS and SQL'
    | 'Operating Systems'
    | 'Computer Networks'
    | 'Object-Oriented Programming'
    | 'HR Interview Preparation'
    | 'Technical Interview Preparation'
    | 'Company Assessment Papers';
  description: string;
  format: 'PDF Guide' | 'Cheat Sheet' | 'Formula Sheet' | 'Interview Matrix' | 'Company Paper';
  fileSize?: string;
  pagesOrDuration?: string;
  downloadUrl?: string; // e.g. /company-papers/TCS_Test_1.pdf
  isOfficialPdf?: boolean;
  isSampleResource?: boolean;
  contentSnippet?: string;
  tags: string[];
}

export const STUDY_CATEGORIES = [
  'All Resources',
  'Quantitative Aptitude',
  'Logical Reasoning',
  'Verbal Ability',
  'Data Structures and Algorithms',
  'DBMS and SQL',
  'Operating Systems',
  'Computer Networks',
  'Object-Oriented Programming',
  'HR Interview Preparation',
  'Technical Interview Preparation',
  'Company Assessment Papers',
] as const;

export const INITIAL_STUDY_RESOURCES: StudyResource[] = [
  // 1. Quantitative Aptitude
  {
    id: 'mat-quant-formulas',
    title: 'Essential Quantitative Aptitude Formulas & Short-Cuts',
    category: 'Quantitative Aptitude',
    description: 'Comprehensive mathematical handbook covering Speed Math, Percentages, Profit & Loss, Simple/Compound Interest, Time & Work, Time Speed Distance, and Permutations & Combinations.',
    format: 'Formula Sheet',
    fileSize: '420 KB',
    pagesOrDuration: '14 Pages',
    isSampleResource: true,
    tags: ['Formulas', 'Speed Math', 'Arithmetic', 'Shortcuts'],
    contentSnippet: `### Quantitative Aptitude Core Formula Reference

1. **Percentages & Profit/Loss**:
   - Gain% = (Gain × 100) / CP
   - Loss% = (Loss × 100) / CP
   - If two items are sold at same price, one at x% gain and other at x% loss, overall is always a loss of (x/10)^2 %.

2. **Time, Speed and Distance**:
   - Speed = Distance / Time
   - km/hr to m/s: Multiply by 5/18
   - m/s to km/hr: Multiply by 18/5
   - Average Speed for two equal distances at speeds u and v = 2uv / (u + v)

3. **Time and Work**:
   - If A can do a work in 'n' days, work done in 1 day = 1/n
   - If pipe fills cistern in 'x' hours and empties in 'y' hours (y > x), net fill in 1 hour = (1/x - 1/y)

4. **Permutations & Combinations**:
   - nPr = n! / (n - r)!
   - nCr = n! / [r! * (n - r)!]`,
  },
  {
    id: 'mat-quant-number-theory',
    title: 'Number Theory, Divisibility Rules & Remainder Theorems',
    category: 'Quantitative Aptitude',
    description: 'Deep dive into Euler totient theorem, Wilson theorem, cyclicity of unit digits, and trailing zeros in large factorials.',
    format: 'Cheat Sheet',
    fileSize: '310 KB',
    pagesOrDuration: '8 Pages',
    isSampleResource: true,
    tags: ['Number Theory', 'Remainders', 'Unit Digit', 'LCM-HCF'],
    contentSnippet: `### Number Theory & Remainder Rules
- **Trailing Zeros in n!**: Z = floor(n/5) + floor(n/25) + floor(n/125) + ...
- **Wilson's Theorem**: If p is a prime number, (p - 1)! ≡ -1 (mod p).
- **Unit Digit Cyclicity**:
  - Powers of 2, 3, 7, 8 have cyclicity of 4.
  - Powers of 4, 9 have cyclicity of 2.
  - Powers of 0, 1, 5, 6 have cyclicity of 1.`,
  },

  // 2. Logical Reasoning
  {
    id: 'mat-logic-syllogisms',
    title: 'Syllogisms, Venn Diagrams & Seating Arrangements Guide',
    category: 'Logical Reasoning',
    description: 'Systematic deduction techniques for 3-statement and 4-statement syllogisms, circular tables with inward/outward facing, and linear arrangements.',
    format: 'Cheat Sheet',
    fileSize: '380 KB',
    pagesOrDuration: '10 Pages',
    isSampleResource: true,
    tags: ['Syllogisms', 'Seating Arrangement', 'Deductive Logic'],
    contentSnippet: `### Logical Reasoning Frameworks
1. **Syllogisms Rules**:
   - All A are B + All B are C => All A are C.
   - Some A are B + All B are C => Some A are C.
   - No A is B + All C are B => No C is A.
   - From two particular statements (Some + Some), no definite conclusion follows.

2. **Circular Seating**:
   - Facing Centre: Right is Anti-Clockwise, Left is Clockwise.
   - Facing Outwards: Right is Clockwise, Left is Anti-Clockwise.`,
  },
  {
    id: 'mat-logic-blood-directions',
    title: 'Coded Blood Relations & Direction Vector Cheat Sheet',
    category: 'Logical Reasoning',
    description: 'Symbols decoding (A + B means Father, A * B means Sister) and 2D vector coordinate mapping for multi-turn path tracking.',
    format: 'Cheat Sheet',
    fileSize: '290 KB',
    pagesOrDuration: '6 Pages',
    isSampleResource: true,
    tags: ['Blood Relations', 'Directions', 'Puzzles'],
    contentSnippet: `### Direction Sense & Blood Relations
- **Cardinal Coordinates**: North (+y), South (-y), East (+x), West (-x).
- **Pythagorean Theorem**: Distance = sqrt(dx^2 + dy^2).
- **Family Tree Standard Notations**:
  - Male: [+], Female: [-]
  - Married Couple: <=> (double arrow)
  - Siblings: --- (horizontal single line)
  - Generational Shift: | (vertical line downwards)`,
  },

  // 3. Verbal Ability
  {
    id: 'mat-verbal-grammar',
    title: 'Grammar Master Handbook: 100 Golden Rules of Error Detection',
    category: 'Verbal Ability',
    description: 'Master subject-verb agreement, pronoun antecedent rules, misplaced modifiers, parallelism, conditional tenses, and high-frequency prepositions.',
    format: 'PDF Guide',
    fileSize: '540 KB',
    pagesOrDuration: '18 Pages',
    isSampleResource: true,
    tags: ['Grammar', 'Error Spotting', 'Sentence Correction'],
    contentSnippet: `### 10 Golden Rules of Grammar
1. **Subject-Verb Agreement**: Words joined by "with", "as well as", "along with" take verb according to first subject.
2. **Neither / Nor & Either / Or**: Verb agrees with the nearest subject.
3. **Indefinite Pronouns**: "Each", "Everyone", "Neither", "Either" are singular.
4. **Collocations**: "Congratulate ON", "Prevent FROM", "Prefer TO", "Abide BY".`,
  },
  {
    id: 'mat-verbal-vocabulary',
    title: 'Placement High-Frequency Wordlist & Contextual Idioms',
    category: 'Verbal Ability',
    description: 'Etymology, root words, mnemonics, synonyms, antonyms, and idioms frequently asked in IT company verbal assessment rounds.',
    format: 'Cheat Sheet',
    fileSize: '410 KB',
    pagesOrDuration: '12 Pages',
    isSampleResource: true,
    tags: ['Vocabulary', 'Idioms', 'Etymology', 'Mnemonics'],
  },

  // 4. Data Structures and Algorithms
  {
    id: 'mat-dsa-patterns',
    title: '14 Essential Coding Patterns for Technical Interviews',
    category: 'Data Structures and Algorithms',
    description: 'Algorithmic paradigms including Two Pointers, Sliding Window, Fast & Slow Pointers, Merge Intervals, Cyclic Sort, Top K Elements, and DP Memoization.',
    format: 'PDF Guide',
    fileSize: '750 KB',
    pagesOrDuration: '24 Pages',
    isSampleResource: true,
    tags: ['DSA', 'Two Pointers', 'Sliding Window', 'Dynamic Programming', 'Trees'],
    contentSnippet: `### Top Interview DSA Patterns
1. **Sliding Window**: Subarray/substring problems with length or target sum constraints.
2. **Two Pointers**: Sorted arrays, pair sums, palindrome checking in O(n) time and O(1) space.
3. **Fast & Slow Pointers**: Detecting cycles in linked lists (Floyd's algorithm) or finding middle node.
4. **Monotonic Stack**: Next Greater Element, Stock Span problem in O(n) linear time.`,
  },
  {
    id: 'mat-dsa-complexities',
    title: 'Data Structure Time & Space Complexity Master Sheet',
    category: 'Data Structures and Algorithms',
    description: 'Quick lookup table for average and worst-case complexities of Arrays, Linked Lists, BST, AVL Trees, Heaps, Hash Tables, and Sorting algorithms.',
    format: 'Cheat Sheet',
    fileSize: '210 KB',
    pagesOrDuration: '4 Pages',
    isSampleResource: true,
    tags: ['Complexity', 'Big-O', 'Sorting', 'Searching'],
  },

  // 5. DBMS and SQL
  {
    id: 'mat-dbms-sql',
    title: 'SQL Query & Database Design Handbook',
    category: 'DBMS and SQL',
    description: 'Comprehensive guide covering Normalization (1NF, 2NF, 3NF, BCNF), ACID transactions, isolation levels, indexing (B-Tree/Hash), and complex SQL joins.',
    format: 'PDF Guide',
    fileSize: '580 KB',
    pagesOrDuration: '16 Pages',
    isSampleResource: true,
    tags: ['SQL', 'DBMS', 'Normalization', 'ACID', 'Indexing'],
    contentSnippet: `### Core Database Principles
- **ACID**: Atomicity (all or none), Consistency (integrity constraints), Isolation (concurrency control), Durability (committed changes persist).
- **Normalization**:
  - 1NF: Atomic column values.
  - 2NF: 1NF + No partial dependencies on composite keys.
  - 3NF: 2NF + No transitive dependencies (X -> Y where Y is non-prime).
  - BCNF: For every functional dependency X -> Y, X must be a super key.`,
  },

  // 6. Operating Systems
  {
    id: 'mat-os-concepts',
    title: 'Operating Systems & Concurrency Architecture',
    category: 'Operating Systems',
    description: 'Process life-cycles, CPU scheduling algorithms (FCFS, SJF, RR), Deadlock handling (Banker\'s algorithm), Semaphores & Mutex, Virtual Memory, and Page Replacement (FIFO, LRU).',
    format: 'PDF Guide',
    fileSize: '620 KB',
    pagesOrDuration: '20 Pages',
    isSampleResource: true,
    tags: ['Operating Systems', 'Processes', 'Threads', 'Deadlocks', 'Paging'],
  },

  // 7. Computer Networks
  {
    id: 'mat-cn-protocols',
    title: 'Computer Networks & TCP/IP Protocol Stack Reference',
    category: 'Computer Networks',
    description: 'OSI vs TCP/IP layer mapping, IPv4 CIDR subnetting calculations, TCP 3-way handshake & connection termination, UDP vs TCP, DNS, HTTP/1.1 vs HTTP/2/3, and SSL/TLS handshake.',
    format: 'PDF Guide',
    fileSize: '490 KB',
    pagesOrDuration: '15 Pages',
    isSampleResource: true,
    tags: ['Computer Networks', 'TCP/IP', 'Subnetting', 'HTTP', 'Security'],
  },

  // 8. Object-Oriented Programming
  {
    id: 'mat-oops-principles',
    title: 'OOPs Architecture: Principles, SOLID & Design Patterns',
    category: 'Object-Oriented Programming',
    description: 'Encapsulation, Abstraction, Inheritance, Polymorphism (static vs dynamic), SOLID design principles, and Singleton/Factory/Observer patterns with code snippets.',
    format: 'PDF Guide',
    fileSize: '440 KB',
    pagesOrDuration: '12 Pages',
    isSampleResource: true,
    tags: ['OOPs', 'SOLID', 'Polymorphism', 'Design Patterns'],
  },

  // 9. HR Interview Preparation
  {
    id: 'mat-hr-prep',
    title: 'HR Interview Mastery: STAR Technique & Behavioral Question Bank',
    category: 'HR Interview Preparation',
    description: 'Structured strategies for "Tell me about yourself", handling strengths and weaknesses, workplace conflict scenarios, leadership examples, and company alignment questions.',
    format: 'Interview Matrix',
    fileSize: '360 KB',
    pagesOrDuration: '11 Pages',
    isSampleResource: true,
    tags: ['HR Interview', 'STAR Method', 'Behavioral', 'Soft Skills'],
    contentSnippet: `### The STAR Method for Behavioral Interviews
- **S - Situation**: Set the context for your story (challenge faced in a project or hackathon).
- **T - Task**: Explain your exact role and objective in that situation.
- **A - Action**: Describe the specific actions and skills you employed to tackle the obstacle.
- **R - Result**: Quantify the positive outcome, metrics improved, and key learnings.`,
  },

  // 10. Technical Interview Preparation
  {
    id: 'mat-tech-interview-handbook',
    title: 'Senior Engineering Interview Question Bank & System Design Basics',
    category: 'Technical Interview Preparation',
    description: 'Crucial technical interview questions spanning memory management, pointer arithmetic, REST API design, rate limiting, and database caching strategies.',
    format: 'Interview Matrix',
    fileSize: '510 KB',
    pagesOrDuration: '16 Pages',
    isSampleResource: true,
    tags: ['Technical Interview', 'System Design', 'APIs', 'Coding Rounds'],
  },

  // 11. Real Company Assessment Papers (Using the 19 actual extracted PDFs!)
  {
    id: 'mat-company-tcs-1',
    title: 'TCS Placement Aptitude Test Paper 1 (Questions 1–25)',
    category: 'Company Assessment Papers',
    description: 'Actual placement assessment paper covering mathematical puzzles, remainder theorems, time & cisterns, and algebraic speed equations with complete step-by-step solutions.',
    format: 'Company Paper',
    fileSize: '15 KB',
    pagesOrDuration: '11 Pages',
    downloadUrl: '/company-papers/TCS_Test_1.pdf',
    isOfficialPdf: true,
    tags: ['TCS', 'NQT', 'Aptitude', 'Official PDF'],
  },
  {
    id: 'mat-company-tcs-2',
    title: 'TCS Placement Aptitude Test Paper 2 (Questions 26–50)',
    category: 'Company Assessment Papers',
    description: 'Official TCS placement aptitude series covering commercial arithmetic, ratios, permutations, and geometric reasoning with detailed solutions.',
    format: 'Company Paper',
    fileSize: '17 KB',
    pagesOrDuration: '12 Pages',
    downloadUrl: '/company-papers/TCS_Test_2.pdf',
    isOfficialPdf: true,
    tags: ['TCS', 'NQT', 'Quantitative', 'Official PDF'],
  },
  {
    id: 'mat-company-tcs-3',
    title: 'TCS Placement Aptitude Test Paper 3 (Questions 51–75)',
    category: 'Company Assessment Papers',
    description: 'Part 3 of TCS NQT series featuring speed distance challenges, modular arithmetic, and logical number series.',
    format: 'Company Paper',
    fileSize: '19 KB',
    pagesOrDuration: '14 Pages',
    downloadUrl: '/company-papers/TCS_Test_3.pdf',
    isOfficialPdf: true,
    tags: ['TCS', 'Aptitude', 'Official PDF'],
  },
  {
    id: 'mat-company-tcs-4',
    title: 'TCS Placement Aptitude Test Paper 4 (Questions 76–100)',
    category: 'Company Assessment Papers',
    description: 'Final part of TCS placement paper set with high-difficulty quantitative and reasoning problem solutions.',
    format: 'Company Paper',
    fileSize: '16 KB',
    pagesOrDuration: '11 Pages',
    downloadUrl: '/company-papers/TCS_Test_4.pdf',
    isOfficialPdf: true,
    tags: ['TCS', 'Advanced Quant', 'Official PDF'],
  },
  {
    id: 'mat-company-infosys-1',
    title: 'Infosys Reasoning & Aptitude Test Paper 1 (Questions 1–25)',
    category: 'Company Assessment Papers',
    description: 'Infosys Springboard pattern diagnostic exam covering cryptarithmetic puzzles, logical deduction, and analytical math with verified solutions.',
    format: 'Company Paper',
    fileSize: '16 KB',
    pagesOrDuration: '11 Pages',
    downloadUrl: '/company-papers/Infosys_Test_1.pdf',
    isOfficialPdf: true,
    tags: ['Infosys', 'Springboard', 'Reasoning', 'Official PDF'],
  },
  {
    id: 'mat-company-infosys-2',
    title: 'Infosys Reasoning & Aptitude Test Paper 2 (Questions 26–50)',
    category: 'Company Assessment Papers',
    description: 'Infosys campus drive assessment series covering data sufficiency, seating arrangements, and syllogisms.',
    format: 'Company Paper',
    fileSize: '14 KB',
    pagesOrDuration: '10 Pages',
    downloadUrl: '/company-papers/Infosys_Test_2.pdf',
    isOfficialPdf: true,
    tags: ['Infosys', 'Puzzles', 'Official PDF'],
  },
  {
    id: 'mat-company-infosys-3',
    title: 'Infosys Reasoning & Aptitude Test Paper 3 (Questions 51–75)',
    category: 'Company Assessment Papers',
    description: 'Infosys quantitative problem solving and mathematical series paper with full explanations.',
    format: 'Company Paper',
    fileSize: '16 KB',
    pagesOrDuration: '11 Pages',
    downloadUrl: '/company-papers/Infosys_Test_3.pdf',
    isOfficialPdf: true,
    tags: ['Infosys', 'Aptitude', 'Official PDF'],
  },
  {
    id: 'mat-company-infosys-4',
    title: 'Infosys Reasoning & Aptitude Test Paper 4 (Questions 76–100)',
    category: 'Company Assessment Papers',
    description: 'Comprehensive Infosys final evaluation paper covering advanced logic, series, and cryptarithmetic.',
    format: 'Company Paper',
    fileSize: '24 KB',
    pagesOrDuration: '16 Pages',
    downloadUrl: '/company-papers/Infosys_Test_4.pdf',
    isOfficialPdf: true,
    tags: ['Infosys', 'Cryptarithmetic', 'Official PDF'],
  },
  {
    id: 'mat-company-cts-1',
    title: 'Cognizant (CTS) Placement Test Paper 1 (Questions 1–25)',
    category: 'Company Assessment Papers',
    description: 'Cognizant GenC recruitment assessment paper covering numerical ability, grammar error detection, and logical patterns with answers.',
    format: 'Company Paper',
    fileSize: '11 KB',
    pagesOrDuration: '8 Pages',
    downloadUrl: '/company-papers/CTS_Test_1.pdf',
    isOfficialPdf: true,
    tags: ['Cognizant', 'CTS', 'GenC', 'Official PDF'],
  },
  {
    id: 'mat-company-cts-2',
    title: 'Cognizant (CTS) Placement Test Paper 2 (Questions 26–50)',
    category: 'Company Assessment Papers',
    description: 'Cognizant assessment series covering analytical reasoning, coding decoding, and percentages.',
    format: 'Company Paper',
    fileSize: '13 KB',
    pagesOrDuration: '9 Pages',
    downloadUrl: '/company-papers/CTS_Test_2.pdf',
    isOfficialPdf: true,
    tags: ['Cognizant', 'CTS', 'Analytical', 'Official PDF'],
  },
  {
    id: 'mat-company-cts-3',
    title: 'Cognizant (CTS) Placement Test Paper 3 (Questions 51–75)',
    category: 'Company Assessment Papers',
    description: 'Cognizant numerical and verbal diagnostic test with detailed step-by-step solutions.',
    format: 'Company Paper',
    fileSize: '17 KB',
    pagesOrDuration: '12 Pages',
    downloadUrl: '/company-papers/CTS_Test_3.pdf',
    isOfficialPdf: true,
    tags: ['Cognizant', 'CTS', 'Verbal', 'Official PDF'],
  },
  {
    id: 'mat-company-cts-4',
    title: 'Cognizant (CTS) Placement Test Paper 4 (Questions 76–100)',
    category: 'Company Assessment Papers',
    description: 'Cognizant advanced evaluation paper covering logical deductions and quantitative word problems.',
    format: 'Company Paper',
    fileSize: '15 KB',
    pagesOrDuration: '11 Pages',
    downloadUrl: '/company-papers/CTS_Test_4.pdf',
    isOfficialPdf: true,
    tags: ['Cognizant', 'CTS', 'Official PDF'],
  },
  {
    id: 'mat-company-accenture-1',
    title: 'Accenture Cognitive & Technical Test Paper 1 (Questions 1–25)',
    category: 'Company Assessment Papers',
    description: 'Accenture recruitment evaluation paper featuring critical reasoning, abstract logic, and pseudocode concepts with answers.',
    format: 'Company Paper',
    fileSize: '14 KB',
    pagesOrDuration: '10 Pages',
    downloadUrl: '/company-papers/Accenture_Test_1.pdf',
    isOfficialPdf: true,
    tags: ['Accenture', 'Cognitive', 'Official PDF'],
  },
  {
    id: 'mat-company-accenture-2',
    title: 'Accenture Cognitive & Technical Test Paper 2 (Questions 26–50)',
    category: 'Company Assessment Papers',
    description: 'Accenture campus assessment series covering spatial logic, algebra, and verbal ability.',
    format: 'Company Paper',
    fileSize: '15 KB',
    pagesOrDuration: '10 Pages',
    downloadUrl: '/company-papers/Accenture_Test_2.pdf',
    isOfficialPdf: true,
    tags: ['Accenture', 'Technical', 'Official PDF'],
  },
  {
    id: 'mat-company-accenture-3',
    title: 'Accenture Cognitive & Technical Test Paper 3 (Questions 51–75)',
    category: 'Company Assessment Papers',
    description: 'Accenture analytical and quantitative problem solving test paper with complete explanations.',
    format: 'Company Paper',
    fileSize: '15 KB',
    pagesOrDuration: '10 Pages',
    downloadUrl: '/company-papers/Accenture_Test_3.pdf',
    isOfficialPdf: true,
    tags: ['Accenture', 'Quantitative', 'Official PDF'],
  },
  {
    id: 'mat-company-accenture-4',
    title: 'Accenture Cognitive & Technical Test Paper 4 (Questions 76–100)',
    category: 'Company Assessment Papers',
    description: 'Accenture final section paper covering advanced critical reasoning and mathematical speed techniques.',
    format: 'Company Paper',
    fileSize: '14 KB',
    pagesOrDuration: '10 Pages',
    downloadUrl: '/company-papers/Accenture_Test_4.pdf',
    isOfficialPdf: true,
    tags: ['Accenture', 'Critical Reasoning', 'Official PDF'],
  },
  {
    id: 'mat-company-wipro-2',
    title: 'Wipro Elite NTH Assessment Paper 2 (Questions 26–50)',
    category: 'Company Assessment Papers',
    description: 'Wipro Elite National Talent Hunt paper covering quantitative speed, verbal grammar, and logical arrangements with answers.',
    format: 'Company Paper',
    fileSize: '17 KB',
    pagesOrDuration: '12 Pages',
    downloadUrl: '/company-papers/Wipro_Test_2.pdf',
    isOfficialPdf: true,
    tags: ['Wipro', 'Elite NTH', 'Aptitude', 'Official PDF'],
  },
  {
    id: 'mat-company-wipro-3',
    title: 'Wipro Elite NTH Assessment Paper 3 (Questions 51–75)',
    category: 'Company Assessment Papers',
    description: 'Wipro Elite series covering commercial mathematics, ratios, and basic algorithmic deduction.',
    format: 'Company Paper',
    fileSize: '16 KB',
    pagesOrDuration: '11 Pages',
    downloadUrl: '/company-papers/Wipro_Test_3.pdf',
    isOfficialPdf: true,
    tags: ['Wipro', 'Elite', 'Official PDF'],
  },
  {
    id: 'mat-company-wipro-4',
    title: 'Wipro Elite NTH Assessment Paper 4 (Questions 76–100)',
    category: 'Company Assessment Papers',
    description: 'Wipro Elite test paper with full step-by-step mathematical solutions and explanations.',
    format: 'Company Paper',
    fileSize: '16 KB',
    pagesOrDuration: '11 Pages',
    downloadUrl: '/company-papers/Wipro_Test_4.pdf',
    isOfficialPdf: true,
    tags: ['Wipro', 'Solutions', 'Official PDF'],
  },
];

