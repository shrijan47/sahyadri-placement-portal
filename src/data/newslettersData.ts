export interface NewsletterArticle {
  title: string;
  category: 'Company Spotlight' | 'Preparation Strategy' | 'Interview Experience' | 'Aptitude Tip';
  content: string;
  authorOrSource?: string;
}

export interface NewsletterEdition {
  id: string;
  issueNumber: number;
  title: string;
  publishDate: string;
  volume: string;
  summary: string;
  isPublished: boolean;
  isSampleDemo: boolean;
  imageUrl?: string;
  imageCaption?: string;
  spotlightCompany: {
    name: string;
    role: string;
    ctcRange: string;
    hiringProcess: string[];
  };
  preparationTip: {
    title: string;
    tip: string;
  };
  interviewExperience: {
    candidateRole: string;
    company: string;
    roundsDescription: string;
    keyTakeaway: string;
  };
  placementStatisticsNotes?: string;
  articles: NewsletterArticle[];
}

export const INITIAL_NEWSLETTERS: NewsletterEdition[] = [
  {
    id: 'issue-04-nov-2026',
    issueNumber: 4,
    title: 'Volume 4, Issue 1: Conquering Tier-1 IT Assessments & Speed Math',
    publishDate: 'November 02, 2026',
    volume: 'Vol. IV - 2026-27 Cycle',
    summary: 'Focus edition on TCS NQT and Cognizant GenC aptitude patterns, mental arithmetic strategies, and system design basics.',
    isPublished: true,
    isSampleDemo: true,
    imageUrl: '/assets/sahyadri-placement-drive.webp',
    imageCaption: 'Sahyadri engineering candidates felicitated in the SCEM Boardroom following successful campus recruitment drives.',
    spotlightCompany: {
      name: 'Tata Consultancy Services (TCS)',
      role: 'Prime / Digital / Ninja Software Engineer',
      ctcRange: '3.6 LPA - 9.0 LPA (Standard Industry Bands)',
      hiringProcess: [
        'Round 1: National Qualifier Test (NQT) - Numerical, Verbal, Reasoning',
        'Round 2: Advanced Coding (2 problems in C/C++/Java/Python)',
        'Round 3: Technical Interview + MR + HR (Combined Panel)',
      ],
    },
    preparationTip: {
      title: 'Speed Math: Remainder Theorems in Under 45 Seconds',
      tip: 'When dealing with large powers like (34^31^301) mod 9, reduce the base first: 34 mod 9 = -2 (or 7). Then use cyclicity of powers of 2 modulo 9: 2^1=2, 2^2=4, 2^3=8, 2^4=7, 2^5=5, 2^6=1. Since 2^6 ≡ 1 mod 9, evaluate the exponent modulo 6.',
    },
    interviewExperience: {
      candidateRole: 'Associate Software Engineer Candidate',
      company: 'TCS Digital Drive (Demo Reference)',
      roundsDescription:
        'The technical panel focused deeply on OOP concepts, relational database indexing vs hashing, and solving the "Two Sum" and "Valid Parentheses" problems on a whiteboard/screen-share.',
      keyTakeaway:
        'Always communicate your thought process aloud before typing code. Interviewers prioritize clean variable names and edge-case handling over instant brute-force code.',
    },
    placementStatisticsNotes:
      'Official verified placement statistics for the current ongoing academic year are compiled by the Placement Cell at the conclusion of annual recruitment cycles.',
    articles: [
      {
        title: 'Mastering the 14 Top Coding Patterns',
        category: 'Preparation Strategy',
        content:
          'Instead of memorizing hundreds of disconnected LeetCode problems, categorize challenges into Two Pointers, Sliding Window, Monotonic Stack, and Tree BFS/DFS. Mastering these 14 templates solves over 80% of placement coding questions.',
        authorOrSource: 'SCEM Placement Technical Mentor Team',
      },
      {
        title: 'How to Structurally Answer HR Behavioral Questions',
        category: 'Preparation Strategy',
        content:
          'Use the Situation-Task-Action-Result (STAR) technique. Keep your situation brief (20 seconds), your task clear (15 seconds), spend 60% of your time on the concrete actions you executed, and conclude with measurable impact.',
        authorOrSource: 'Placement Training Cell',
      },
    ],
  },
  {
    id: 'issue-03-oct-2026',
    issueNumber: 3,
    title: 'Volume 3, Issue 4: Mastering Dynamic Programming & Infosys Puzzles',
    publishDate: 'October 26, 2026',
    volume: 'Vol. III - 2026-27 Cycle',
    summary: 'A deep dive into cryptarithmetic puzzles, state-transition memoization in dynamic programming, and effective resume formatting.',
    isPublished: true,
    isSampleDemo: true,
    imageUrl: '/assets/sahyadri-computer-lab.webp',
    imageCaption: 'SCEM Central Computing Center during an online proctored aptitude & technical coding assessment session.',
    spotlightCompany: {
      name: 'Infosys Limited',
      role: 'Specialist Programmer (SP) & Digital Specialist Engineer (DSE)',
      ctcRange: '6.25 LPA - 9.5 LPA (Industry Benchmark)',
      hiringProcess: [
        'Round 1: Infosys Online Test (Aptitude + Cryptarithmetic + Data Sufficiency)',
        'Round 2: HackWithInfy / Technical Coding Assessment',
        'Round 3: In-depth Technical + Behavioral Interview',
      ],
    },
    preparationTip: {
      title: 'Cracking Cryptarithmetic Puzzles Step-by-Step',
      tip: 'In additions like SEND + MORE = MONEY, remember: The leading carry digit in a sum of two numbers can only be 1 (so M = 1). Since S + 1 >= 10, S must be 8 or 9.',
    },
    interviewExperience: {
      candidateRole: 'Specialist Programmer Interviewee',
      company: 'Infosys SP Track (Demo Reference)',
      roundsDescription:
        'Asked to implement Dijkstra\'s shortest path algorithm using a min-heap priority queue and explain how time complexity improves from O(V^2) to O((V + E) log V).',
      keyTakeaway:
        'Be prepared to justify why you selected a particular data structure over another with concrete Big-O trade-offs.',
    },
    placementStatisticsNotes:
      'Notice: Sample demo newsletter edition compiled for portal demonstration. Official verified figures are issued via annual departmental brochures.',
    articles: [
      {
        title: 'Building a 1-Page ATS-Compliant Technical Resume',
        category: 'Preparation Strategy',
        content:
          'Use standard headings (Education, Technical Skills, Projects, Experience, Certifications). Avoid multi-column layouts, graphics, or tables that confuse automated resume parsers. Quantify impact (e.g. "reduced latency by 35%").',
        authorOrSource: 'Career Readiness Cell',
      },
    ],
  },
  {
    id: 'issue-02-oct-2026',
    issueNumber: 2,
    title: 'Volume 2, Issue 3: Core CS Essentials & Operating Systems Deadlocks',
    publishDate: 'October 19, 2026',
    volume: 'Vol. II - 2026-27 Cycle',
    summary: 'Essential concepts in Operating Systems, Banker\'s Algorithm for deadlock avoidance, and SQL window functions.',
    isPublished: true,
    isSampleDemo: true,
    imageUrl: '/assets/sahyadri-mock-interview.webp',
    imageCaption: 'Technical and HR Mock Interview session conducted by faculty and corporate mentors to refine candidate readiness.',
    spotlightCompany: {
      name: 'Cognizant (CTS)',
      role: 'GenC Next / GenC Elevate Software Engineer',
      ctcRange: '4.0 LPA - 6.75 LPA',
      hiringProcess: [
        'Round 1: Skill-based Assessment (Analytical, Verbal, Core CS)',
        'Round 2: Advanced Technical Coding',
        'Round 3: SME Technical Discussion',
      ],
    },
    preparationTip: {
      title: 'Deadlock Necessary Conditions: The "COHM" Rule',
      tip: 'Remember the 4 Coffman conditions: Mutual Exclusion, Hold & Wait, No Preemption, and Circular Wait. If you invalidate any single condition, deadlock is theoretically impossible.',
    },
    interviewExperience: {
      candidateRole: 'GenC Elevate Candidate',
      company: 'Cognizant Placement (Demo Reference)',
      roundsDescription:
        'Focused on relational normalization (specifically 3NF vs BCNF), indexing trade-offs on high-write databases, and threading in Java.',
      keyTakeaway:
        'Revise fundamental DBMS concepts; interviewers will ask you to write raw SQL joins rather than relying on ORMs.',
    },
    articles: [
      {
        title: 'Why Mock Tests Are Essential for Placement Readiness',
        category: 'Preparation Strategy',
        content:
          'Statistical analysis of past placement cohorts indicates that students who complete at least 10 computer-based aptitude mocks score 40% higher on national qualifier tests compared to non-practicing peers.',
        authorOrSource: 'Department of Training',
      },
    ],
  },
  {
    id: 'issue-01-oct-2026',
    issueNumber: 1,
    title: 'Volume 1, Issue 2: Orientation to Sahyadri Placement Prep Portal',
    publishDate: 'October 12, 2026',
    volume: 'Vol. I - 2026-27 Cycle',
    summary: 'Inaugural edition introducing the portal features, CBT examination engine rules, and semester-wise milestones.',
    isPublished: true,
    isSampleDemo: true,
    imageUrl: '/assets/sahyadri-seminar-hackathon.webp',
    imageCaption: 'Auditorium project evaluation and hackathon mentoring session with industry leads and student development teams.',
    spotlightCompany: {
      name: 'Accenture',
      role: 'Associate Software Engineer (ASE) & Advanced ASE',
      ctcRange: '4.5 LPA - 6.5 LPA',
      hiringProcess: [
        'Round 1: Cognitive & Technical Assessment (English, Critical Thinking, Abstract Reasoning, MS Office, Cloud)',
        'Round 2: Coding Assessment (2 questions)',
        'Round 3: Communication Assessment (Automated AI Speech & Grammar)',
        'Round 4: Technical & HR Interview',
      ],
    },
    preparationTip: {
      title: 'Time Management Strategy for Cognitive Rounds',
      tip: 'Never spend more than 90 seconds on a single reasoning or aptitude question. If stuck, eliminate 2 obviously wrong options, mark for review, and proceed.',
    },
    interviewExperience: {
      candidateRole: 'Advanced ASE Candidate',
      company: 'Accenture Assessment (Demo Reference)',
      roundsDescription:
        'The communication round requires a quiet room and clear enunciation. In the interview, asked about final-year project architecture and how cloud microservices were deployed.',
      keyTakeaway:
        'Know every line of code in your resume projects. You will be asked about challenges faced during integration.',
    },
    articles: [
      {
        title: 'Roadmap for 2024-2028 Engineering Batches',
        category: 'Preparation Strategy',
        content:
          'Semesters 3 & 4: Master DSA and OOPs. Semester 5: Core CS (DBMS, OS, CN) + Quantitative Aptitude drills. Semester 6: Full-stack projects + Mock Interviews. Semester 7: Campus Recruitment Drives.',
        authorOrSource: 'Placement Steering Committee',
      },
    ],
  },
];

