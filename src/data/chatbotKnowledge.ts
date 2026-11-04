/**
 * Sahyadri Placement Prep Portal - Offline Chatbot Knowledge Base
 * 
 * Contains verified placement guidance, formulas, interview tips,
 * company patterns, and portal documentation for instant offline answering.
 * Structured with modular intent matching for easy future integration
 * with backend LLM / AI API endpoints.
 */

export interface KnowledgeItem {
  id: string;
  category: 
    | 'Quantitative Aptitude'
    | 'Logical Reasoning'
    | 'Verbal Ability'
    | 'DSA'
    | 'DBMS & SQL'
    | 'Technical Interview'
    | 'HR Interview'
    | 'Strategy & Roadmap'
    | 'Portal & Rules'
    | 'Company Patterns';
  title: string;
  keywords: string[];
  suggestedPrompt: string;
  answer: string;
  references?: { label: string; path: string }[];
}

export const CHATBOT_KNOWLEDGE_BASE: KnowledgeItem[] = [
  // --- QUANTITATIVE APTITUDE ---
  {
    id: 'quant-time-work',
    category: 'Quantitative Aptitude',
    title: 'Time & Work Formulas and Shortcuts',
    keywords: ['time and work', 'pipes and cistern', 'efficiency', 'work formula', 'man days', 'wages'],
    suggestedPrompt: 'Time and Work formulas and shortcuts',
    answer: `**Time & Work Core Concepts & Formulas:**

1. **Reciprocal Rule**: If a person can complete a piece of work in $n$ days, their 1-day work is $1/n$.
2. **Total Work (LCM Method)**: Assume total work = LCM of individual times.
   - Example: A takes 12 days, B takes 18 days. LCM(12, 18) = 36 units.
   - Efficiency of A = 36/12 = 3 units/day; B = 36/18 = 2 units/day.
   - Together = 3 + 2 = 5 units/day $\\implies$ Total Time = $36 / 5 = 7.2$ days.
3. **Man-Days Formula**:
   $$\\frac{M_1 \\times D_1 \\times H_1}{W_1} = \\frac{M_2 \\times D_2 \\times H_2}{W_2}$$
   - $M$ = Men, $D$ = Days, $H$ = Hours/day, $W$ = Work done.
4. **Pipes & Cisterns**: Inlet pipe adds $(+1/A)$ units/hour; Leak/Outlet pipe drains $(-1/B)$ units/hour.
5. **Efficiency & Wages**: Wages are distributed strictly proportional to work completed (or efficiency if working together for the same duration).`,
    references: [
      { label: 'Quantitative Aptitude Modules', path: '/study-materials' },
      { label: 'Aptitude Test 01 (Quantitative Aptitude I)', path: '/test-board' }
    ]
  },
  {
    id: 'quant-speed-time-distance',
    category: 'Quantitative Aptitude',
    title: 'Speed, Time & Distance / Trains / Boats',
    keywords: ['speed', 'distance', 'trains', 'boats and streams', 'relative speed', 'average speed'],
    suggestedPrompt: 'Speed, Time & Distance formulas and train shortcuts',
    answer: `**Speed, Time, Distance & Trains Shortcuts:**

1. **Conversion**:
   - $\\text{km/h} \\to \\text{m/s}$: Multiply by $5/18$
   - $\\text{m/s} \\to \\text{km/h}$: Multiply by $18/5$
2. **Average Speed**:
   - If distance $D$ is constant with speeds $x$ and $y$: $\\text{Avg Speed} = \\frac{2xy}{x+y}$
   - If time $T$ is constant: $\\text{Avg Speed} = \\frac{x+y}{2}$
3. **Relative Speed**:
   - Opposite directions (towards each other): $S_{\\text{rel}} = S_1 + S_2$
   - Same direction: $S_{\\text{rel}} = |S_1 - S_2|$
4. **Trains Passing Objects**:
   - Passing pole/person (point object): $\\text{Distance} = L_{\\text{train}}$
   - Passing platform/bridge: $\\text{Distance} = L_{\\text{train}} + L_{\\text{platform}}$
5. **Boats & Streams**:
   - Downstream speed $u = B + S$; Upstream speed $v = B - S$
   - Boat speed in still water $B = (u + v) / 2$
   - Stream speed $S = (u - v) / 2$`,
    references: [
      { label: 'Speed & Distance Module', path: '/study-materials' }
    ]
  },
  {
    id: 'quant-percentage-profit',
    category: 'Quantitative Aptitude',
    title: 'Percentages, Profit & Loss, Simple/Compound Interest',
    keywords: ['percentage', 'profit and loss', 'discount', 'simple interest', 'compound interest', 'cagr', 'ci', 'si'],
    suggestedPrompt: 'Profit & Loss and Percentage formulas',
    answer: `**Percentages and Profit & Loss Essentials:**

1. **Fraction to Percentage Conversion**:
   - $1/2 = 50\\%$, $1/3 = 33.33\\%$, $1/4 = 25\\%$, $1/5 = 20\\%$, $1/6 = 16.67\\%$, $1/7 = 14.28\\%$, $1/8 = 12.5\\%$, $1/9 = 11.11\\%$
2. **Successive Percentage Change**:
   $$\\text{Net Change} = \\left(a + b + \\frac{ab}{100}\\right)\\%$$
3. **Profit & Loss**:
   - $\\text{Profit } \\% = \\frac{\\text{SP} - \\text{CP}}{\\text{CP}} \\times 100$
   - $\\text{Discount } \\% = \\frac{\\text{Marked Price} - \\text{SP}}{\\text{Marked Price}} \\times 100$
   - Faulty weights: $\\text{Gain } \\% = \\frac{\\text{Error}}{\\text{True Value} - \\text{Error}} \\times 100$
4. **Simple vs Compound Interest**:
   - $\\text{SI} = \\frac{P \\times R \\times T}{100}$
   - $\\text{CI} = P \\left(1 + \\frac{R}{100}\\right)^T - P$
   - Difference for 2 years: $\\text{Diff} = P\\left(\\frac{R}{100}\\right)^2$`,
    references: [
      { label: 'Quantitative Study Materials', path: '/study-materials' }
    ]
  },
  {
    id: 'quant-permutations-probability',
    category: 'Quantitative Aptitude',
    title: 'Permutations, Combinations & Probability',
    keywords: ['permutation', 'combination', 'probability', 'arrangements', 'cards', 'dice', 'balls in urn'],
    suggestedPrompt: 'Permutation, Combination and Probability shortcuts',
    answer: `**Permutations, Combinations & Probability:**

1. **Definitions**:
   - Permutation (Order matters): $^n P_r = \\frac{n!}{(n-r)!}$
   - Combination (Selection only): $^n C_r = \\frac{n!}{r!(n-r)!}$
2. **Circular Permutation**:
   - Circular arrangement of $n$ distinct items = $(n-1)!$
   - For necklaces/garlands (clockwise = anticlockwise) = $\\frac{(n-1)!}{2}$
3. **Probability Fundamentals**:
   - $P(E) = \\frac{\\text{Favourable Outcomes}}{\\text{Total Outcomes}}$
   - $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$
   - Complement: $P(\\text{At least one}) = 1 - P(\\text{None})$
4. **Standard Setups**:
   - Deck of 52 cards: 4 suits (13 cards each), 26 Red, 26 Black, 12 face cards (J, Q, K).
   - Rolling 2 dice: Total outcomes = 36. Most frequent sum = 7 (probability 6/36 = 1/6).`,
    references: [
      { label: 'Probability & Combinatorics Notes', path: '/study-materials' }
    ]
  },

  // --- LOGICAL REASONING ---
  {
    id: 'logic-syllogisms',
    category: 'Logical Reasoning',
    title: 'Syllogisms and Deductive Reasoning',
    keywords: ['syllogism', 'venn diagram', 'statements and conclusions', 'deductive reasoning', 'logic'],
    suggestedPrompt: 'How to solve Syllogisms using Venn Diagrams',
    answer: `**Solving Syllogisms Fast & Accurately:**

1. **Standard Quantifiers**:
   - **All A are B**: Circle A is completely inside circle B ($A \\subseteq B$).
   - **Some A are B**: Circle A and B overlap ($A \\cap B \\neq \\emptyset$).
   - **No A are B**: Circles A and B are totally disjoint ($A \\cap B = \\emptyset$).
   - **Some A are not B**: At least one part of A remains outside B.
2. **Either-Or Conditions (Complementary Pairs)**:
   - Both individual conclusions must be doubtful/uncertain.
   - Subjects and predicates must be identical in both statements.
   - Pairs must be: (Some + No) OR (All + Some Not).
3. **Possibility Cases**:
   - If a conclusion says "is a possibility", check if *at least one valid Venn diagram* satisfies it without violating any given statements. If yes, the conclusion is valid.
4. **Golden Rule**: Never assume anything outside the stated premises. "Some" never strictly implies "All" or "Some are not".`,
    references: [
      { label: 'Logical Reasoning Test 03', path: '/test-board' },
      { label: 'Reasoning Study Materials', path: '/study-materials' }
    ]
  },
  {
    id: 'logic-blood-relations-seating',
    category: 'Logical Reasoning',
    title: 'Blood Relations & Seating Arrangement Patterns',
    keywords: ['blood relation', 'seating arrangement', 'circular seating', 'linear arrangement', 'family tree'],
    suggestedPrompt: 'Tips for Seating Arrangements and Blood Relations',
    answer: `**Blood Relations & Seating Arrangements Strategy:**

**Blood Relations:**
1. Draw a standardized family tree:
   - Use $+$ for Male, $-$ for Female.
   - Horizontal line for siblings: $A - B$.
   - Double horizontal line for married couples: $A = B$.
   - Vertical line for parent-child: $A \\downarrow B$.
2. Work backwards in statement questions:
   - "Pointing to a man, woman says: He is the son of the only daughter of my father."
   - "Only daughter of my father" = the woman herself $\\implies$ "Son of the woman" = her son.

**Seating Arrangements:**
1. **Circular facing center**: Right is anti-clockwise, Left is clockwise.
2. **Circular facing outward**: Right is clockwise, Left is anti-clockwise.
3. **Linear north-facing**: Left is towards your left hand; Right is towards your right hand.
4. Always fix definite positional clues first (e.g., "X sits 3rd to the left of Y"), and use branch diagrams for ambiguous possibilities.`,
    references: [
      { label: 'Logical Reasoning Modules', path: '/study-materials' }
    ]
  },

  // --- VERBAL ABILITY ---
  {
    id: 'verbal-grammar-rules',
    category: 'Verbal Ability',
    title: 'Top 10 Verbal Grammar Rules & Error Spotting',
    keywords: ['verbal ability', 'grammar', 'subject verb agreement', 'tenses', 'prepositions', 'error spotting', 'reading comprehension'],
    suggestedPrompt: 'Essential Verbal Ability and Subject-Verb Agreement rules',
    answer: `**Top 10 High-Yield Verbal Grammar Rules:**

1. **Subject-Verb Agreement with 'As well as', 'Along with'**:
   - Verb agrees with the *first subject*. Example: *The captain, as well as the players, was (not were) honored.*
2. **Neither... Nor / Either... Or**:
   - Verb agrees with the *nearest subject*. Example: *Neither the manager nor the employees were present.*
3. **Each, Every, Either, Neither, Someone, Nobody**:
   - Always take a *singular verb*. Example: *Each of the participants was awarded a certificate.*
4. **Conditional Sentences (Type 3)**:
   - *If + had + V3, would have + V3*. Example: *If she had studied, she would have cleared the test.*
5. **Parallelism**:
   - Items in a list must have identical grammatical form: *She likes hiking, swimming, and reading (not to read).*
6. **Fewer vs Less**:
   - *Fewer* is for countable nouns (*fewer students*); *Less* is for uncountable (*less water*).
7. **Reading Comprehension Strategy**:
   - Read question stems first (10 seconds) to identify keywords, then skim the passage for targeted information.`,
    references: [
      { label: 'Verbal Ability Modules', path: '/study-materials' },
      { label: 'Verbal Ability Test 05', path: '/test-board' }
    ]
  },

  // --- DATA STRUCTURES & ALGORITHMS ---
  {
    id: 'dsa-patterns',
    category: 'DSA',
    title: 'Top 10 DSA Patterns for Campus Placements',
    keywords: ['dsa', 'data structures', 'algorithms', 'two pointers', 'sliding window', 'dynamic programming', 'binary search', 'trees', 'graphs'],
    suggestedPrompt: 'What are the top DSA patterns asked in placements?',
    answer: `**Top 10 Essential DSA Patterns for Product & Tech Companies:**

1. **Two Pointers**: Used in sorted arrays, pair sum, palindromes, removing duplicates ($O(N)$ time, $O(1)$ space).
2. **Sliding Window**: Subarray with target sum, longest substring without repeating characters ($O(N)$ time).
3. **Fast & Slow Pointers (Floyd's Cycle)**: Linked list cycle detection, finding middle of linked list, duplicate number.
4. **Binary Search & Search on Answer**: Rotated sorted array, finding square root, capacity allocation problems ($O(\\log N)$).
5. **Top 'K' Elements (Heaps)**: Find K largest/smallest elements using Min/Max Heap in $O(N \\log K)$ time.
6. **BFS / DFS on Trees & Graphs**: Level-order traversal, connected components, shortest path in unweighted graph.
7. **Topological Sort (Kahn's / DFS)**: Task scheduling, course prerequisites, build order dependencies.
8. **Monotonic Stack**: Next Greater Element, Daily Temperatures, Largest Rectangle in Histogram ($O(N)$).
9. **Dynamic Programming Fundamentals**:
   - 0/1 Knapsack, Longest Common Subsequence (LCS), Longest Increasing Subsequence (LIS), Coin Change.
10. **Trie (Prefix Tree)**: Autocomplete, dictionary search, prefix matching in $O(L)$ where $L$ is word length.`,
    references: [
      { label: 'Data Structures Modules', path: '/study-materials' },
      { label: 'Core Technical Assessment Test 07', path: '/test-board' }
    ]
  },

  // --- DBMS & SQL ---
  {
    id: 'dbms-sql-fundamentals',
    category: 'DBMS & SQL',
    title: 'DBMS Normalization, Joins & SQL Interview Questions',
    keywords: ['dbms', 'sql', 'joins', 'normalization', 'acid properties', 'indexing', 'group by', 'having'],
    suggestedPrompt: 'Explain SQL Joins and DBMS Normalization',
    answer: `**DBMS Core Concepts for Technical Rounds:**

**1. SQL Joins Explained:**
- **INNER JOIN**: Returns records that have matching values in both tables.
- **LEFT JOIN**: Returns all records from the left table and matched records from the right table (NULL if no match).
- **RIGHT JOIN**: Returns all records from the right table and matched records from the left table.
- **FULL OUTER JOIN**: Returns records when there is a match in either left or right table.
- **CROSS JOIN**: Cartesian product of both tables ($M \\times N$ rows).

**2. GROUP BY vs HAVING:**
- \`WHERE\` filters individual rows *before* grouping.
- \`HAVING\` filters aggregated groups *after* grouping (\`HAVING COUNT(*) > 5\`).

**3. ACID Properties:**
- **Atomicity**: All or nothing transaction.
- **Consistency**: Preserves database invariants before and after commit.
- **Isolation**: Concurrent transactions do not interfere (isolation levels: Read Uncommitted, Read Committed, Repeatable Read, Serializable).
- **Durability**: Committed changes persist even in hardware crashes.

**4. Normalization:**
- **1NF**: Atomic values, no repeating groups.
- **2NF**: In 1NF + no partial dependency on candidate key.
- **3NF**: In 2NF + no transitive dependency (non-prime attributes depend only on superkey).
- **BCNF**: For every functional dependency $X \\to Y$, $X$ must be a superkey.`,
    references: [
      { label: 'DBMS & SQL Study Material', path: '/study-materials' },
      { label: 'Core Technical Assessment Test 08', path: '/test-board' }
    ]
  },

  // --- TECHNICAL INTERVIEWS ---
  {
    id: 'tech-interview-prep',
    category: 'Technical Interview',
    title: 'Technical Interview Strategy & Project Walkthrough',
    keywords: ['technical interview', 'projects', 'coding interview', 'resume projects', 'cs fundamentals', 'whiteboard'],
    suggestedPrompt: 'How to prepare and present projects in a technical interview?',
    answer: `**Mastering the Technical Interview:**

1. **How to Explain Your College Projects (The 4-Step Framework)**:
   - **Context & Problem**: "Our project addressed inefficient placement tracking for 1000+ students..."
   - **Your Exact Role & Tech Stack**: "I designed the PostgreSQL schema and built the authentication module in React + TypeScript..."
   - **Key Engineering Challenges**: "One major hurdle was optimistic concurrency in online test submissions, which I solved by..."
   - **Metrics & Impact**: "This reduced submission latency by 40% and supported concurrent exam sessions without timeouts."

2. **When Solving Coding Questions Live**:
   - **Clarify Constraints**: Ask about input range, negatives, duplicates, memory limits.
   - **Verbalize Your Thought Process**: Never stay silent for > 30 seconds. State brute force first ($O(N^2)$), then optimize to $O(N)$ or $O(N \\log N)$.
   - **Dry Run with Edge Cases**: Empty array, single element, negative numbers, all duplicates.

3. **Core CS Checklist**:
   - OOP Concepts (Encapsulation, Abstraction, Polymorphism, Inheritance).
   - Operating Systems (Processes vs Threads, Deadlock, Virtual Memory, Paging).
   - Computer Networks (OSI 7 Layers, TCP vs UDP, DNS lookup, HTTP vs HTTPS).`,
    references: [
      { label: 'Technical Interview Prep Guides', path: '/study-materials' }
    ]
  },

  // --- HR INTERVIEWS ---
  {
    id: 'hr-star-method',
    category: 'HR Interview',
    title: 'HR Interview & The STAR Method Framework',
    keywords: ['hr interview', 'star method', 'tell me about yourself', 'strengths weaknesses', 'why hire you', 'culture fit'],
    suggestedPrompt: 'How to answer HR questions using the STAR method?',
    answer: `**The STAR Method for HR & Behavioral Rounds:**

Use STAR for behavioral questions (*"Tell me about a time you handled conflict / failure / deadline"*):
- **S (Situation)**: Set the scene briefly (10-15% of your answer). *"During our 6th-semester capstone hackathon..."*
- **T (Task)**: The specific objective or challenge you faced (10-15%). *"Our team needed to deploy a full-stack demo in 24 hours when our database schema broke..."*
- **A (Action)**: The concrete actions **YOU** personally took (50-60%). *"I stepped up, re-architected the migration scripts, coordinated with the backend lead, and worked through the night..."*
- **R (Result)**: Measurable outcome and what you learned (15-20%). *"We delivered 1 hour before the cutoff and won 2nd place among 45 teams."*

**Classic Question: 'Tell Me About Yourself'**:
- Keep to 90 seconds. Structure:
  1. *Present*: Current branch, college (Sahyadri College of Engineering & Management), core domain interests.
  2. *Past*: Key project, academic milestone, internship or hackathon experience.
  3. *Future*: Why this specific company and role aligns with your career trajectory.`,
    references: [
      { label: 'HR & Behavioral Interview Guide', path: '/study-materials' }
    ]
  },

  // --- STRATEGY & ROADMAP ---
  {
    id: 'prep-60day-roadmap',
    category: 'Strategy & Roadmap',
    title: '60-Day Campus Placement Preparation Roadmap',
    keywords: ['roadmap', 'strategy', 'preparation plan', 'timetable', '60 days', 'schedule', 'daily routine'],
    suggestedPrompt: 'What is the recommended 60-day placement preparation plan?',
    answer: `**Sahyadri 60-Day Placement Preparation Roadmap:**

- **Days 1–20: Quantitative & Logical Foundation**
  - Solve 30 aptitude problems daily (Percentages, Ratio, Time & Work, Speed & Distance).
  - Practice Syllogisms, Blood Relations, and Data Interpretation.
  - Take Practice Tests 01–06 on the portal.

- **Days 21–40: Core Technical & DSA Acceleration**
  - Master Arrays, Strings, HashMaps, Trees, and Two-Pointer / Sliding Window patterns.
  - Review DBMS (SQL queries, Joins, Normalization), OS (Paging, Semaphores), and OOP.
  - Attempt Core Technical Assessment Tests 07–12 on the portal.

- **Days 41–50: Company Assessment Papers**
  - Download official company mock papers (TCS, Infosys, CTS, Wipro, Accenture) from the portal's Study Materials page.
  - Take timed mock tests under strict exam conditions.

- **Days 51–60: Mock Interviews & Polish**
  - Practice project presentation and STAR method behavioral questions.
  - Refine your single-page ATS-compliant resume.
  - Target remaining Mock Tests 13–20 on the Test Board.`,
    references: [
      { label: 'Download Company Papers', path: '/study-materials' },
      { label: 'Test Board Exam Catalog', path: '/test-board' }
    ]
  },

  // --- PORTAL & RULES ---
  {
    id: 'portal-exam-rules',
    category: 'Portal & Rules',
    title: 'Examination Rules, Timer, Scoring & Navigation',
    keywords: ['exam rules', 'timer', 'marking scheme', 'negative marking', 'scorecard', 'test board', 'retake', 'navigation'],
    suggestedPrompt: 'What are the examination rules and marking scheme?',
    answer: `**Sahyadri Placement Portal Examination Rules:**

1. **Marking Scheme**:
   - Correct Answer: **+1.0 Mark**
   - Incorrect Answer: **-0.25 Negative Mark** (promotes precision and reduces blind guessing).
   - Unanswered: **0 Marks** (no penalty).
2. **Timer & Auto-Submission**:
   - Every examination has a strictly enforced countdown timer (typically 30–60 minutes).
   - If time expires, the engine automatically calculates your scorecard and submits your attempt.
3. **Question Palette States**:
   - **Green**: Answered
   - **Yellow/Orange**: Marked for Review
   - **Purple**: Answered & Marked for Review
   - **Gray**: Not yet answered
4. **Local Persistence**:
   - All completed attempts are saved directly in your browser's persistent storage.
   - You can review full question-by-question explanations anytime from your Scorecard or Test Board.
5. **Retake Policy**:
   - Tests can be retaken for practice. Your highest and latest scores are preserved in the system.`,
    references: [
      { label: 'Visit Test Board', path: '/test-board' },
      { label: 'Student Dashboard', path: '/dashboard' }
    ]
  },

  // --- COMPANY PATTERNS ---
  {
    id: 'company-patterns-overview',
    category: 'Company Patterns',
    title: 'Top Recruiter Assessment Patterns (TCS, Infosys, Accenture, CTS, Wipro)',
    keywords: ['tcs', 'infosys', 'accenture', 'cognizant', 'wipro', 'company patterns', 'nqt', 'rounds'],
    suggestedPrompt: 'What are the test patterns for TCS, Infosys and Accenture?',
    answer: `**Top Recruiter Assessment Patterns:**

1. **TCS NQT (Ninja / Digital / Prime)**:
   - *Foundation Section*: Numerical Ability (20 Qs), Verbal Ability (25 Qs), Reasoning Ability (20 Qs).
   - *Advanced Section (for Digital/Prime)*: Advanced Quantitative (15 Qs), Advanced Reasoning (10 Qs), 2 Hands-on Coding questions (C, C++, Java, or Python).
2. **Infosys (Specialist Programmer / SE)**:
   - Reasoning Ability (15 Qs, 25 mins) - heavy on Cryptarithmetic and Puzzles.
   - Mathematical Ability (10 Qs, 35 mins) - advanced Permutation, Probability, Geometry.
   - Verbal Ability (20 Qs, 20 mins) - Sentence Correction, Critical Reading.
   - Pseudocode & Technical (5 Qs, 10 mins).
3. **Accenture**:
   - *Cognitive Assessment*: English (17 Qs), Critical Thinking & Reasoning (18 Qs), Abstract Reasoning (15 Qs).
   - *Technical Assessment*: Common Applications & MS Office (12 Qs), Pseudocode (18 Qs), Networking & Cloud fundamentals (10 Qs).
   - Coding: 2 problems (medium difficulty).
4. **Cognizant (GenC / GenC Next)**:
   - Quantitative, Logical, Verbal, and Automata Fix / Debugging questions.`,
    references: [
      { label: 'View Real Company Test Papers', path: '/study-materials' },
      { label: 'Check Job Openings', path: '/jobs' }
    ]
  }
];

/**
 * Searches the knowledge base using keyword weighting and phrase similarity.
 */
export function queryKnowledgeBase(query: string): { item: KnowledgeItem; confidence: number } | null {
  const normalized = query.toLowerCase().trim();
  if (!normalized) return null;

  const words = normalized
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 2);

  let bestMatch: KnowledgeItem | null = null;
  let highestScore = 0;

  for (const item of CHATBOT_KNOWLEDGE_BASE) {
    let score = 0;

    // Exact title or suggested prompt match
    if (normalized === item.title.toLowerCase() || normalized === item.suggestedPrompt.toLowerCase()) {
      score += 100;
    } else if (item.title.toLowerCase().includes(normalized) || item.suggestedPrompt.toLowerCase().includes(normalized)) {
      score += 50;
    }

    // Keyword matching
    for (const kw of item.keywords) {
      const kwLower = kw.toLowerCase();
      if (normalized === kwLower) {
        score += 40;
      } else if (normalized.includes(kwLower)) {
        score += 25;
      } else {
        // Individual keyword word matches
        const kwWords = kwLower.split(/\s+/);
        for (const kwWord of kwWords) {
          if (words.includes(kwWord)) {
            score += 10;
          }
        }
      }
    }

    // Answer body keyword overlap
    for (const w of words) {
      if (item.category.toLowerCase().includes(w)) {
        score += 8;
      }
      if (item.answer.toLowerCase().includes(w)) {
        score += 2;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = item;
    }
  }

  // Minimum threshold to prevent spurious matching
  if (bestMatch && highestScore >= 12) {
    return { item: bestMatch, confidence: highestScore };
  }

  return null;
}

