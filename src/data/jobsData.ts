export interface JobOpportunity {
  id: string;
  companyName: string;
  jobRole: string;
  jobCategory: 'Core Software' | 'AI & Data Science' | 'Cloud & DevOps' | 'Consulting' | 'Product Engineering';
  eligibleBranches: string[]; // e.g. ['CSE', 'ISE', 'AIML', 'CSDS', 'ECE']
  minimumCgpa: number;
  requiredSkills: string[];
  salaryCtc: string;
  applicationDeadline: string;
  officialApplicationUrl: string;
  status: 'Active' | 'Upcoming' | 'Closed';
  isSampleDemo: boolean;
  location: string;
  jobType: 'Full-time' | 'Internship + Full-time';
  description: string;
  selectionProcess: string[];
}

export const JOB_BRANCHES = [
  'All Branches',
  'CSE',
  'ISE',
  'AIML',
  'CSDS',
  'ECE',
  'Mech/Civil',
] as const;

export const JOB_CATEGORIES = [
  'All Categories',
  'Core Software',
  'AI & Data Science',
  'Cloud & DevOps',
  'Consulting',
  'Product Engineering',
] as const;

export const JOB_STATUSES = ['All Statuses', 'Active', 'Upcoming', 'Closed'] as const;

export const INITIAL_JOB_OPPORTUNITIES: JobOpportunity[] = [
  {
    id: 'job-tcs-digital-2026',
    companyName: 'Tata Consultancy Services',
    jobRole: 'Digital Software Engineer (Prime / Digital)',
    jobCategory: 'Core Software',
    eligibleBranches: ['CSE', 'ISE', 'AIML', 'CSDS', 'ECE'],
    minimumCgpa: 7.0,
    requiredSkills: ['Data Structures & Algorithms', 'Java / Python / C++', 'SQL', 'Problem Solving'],
    salaryCtc: '7.0 LPA - 9.0 LPA (Standard Cadre)',
    applicationDeadline: 'November 28, 2026',
    officialApplicationUrl: 'https://www.tcs.com/careers',
    status: 'Active',
    isSampleDemo: true,
    location: 'Bengaluru / Pan India',
    jobType: 'Internship + Full-time',
    description: 'TCS National Qualifier Test drive for high-performing engineering students with strong algorithmic and software engineering fundamentals.',
    selectionProcess: ['TCS NQT Online Exam', 'Advanced Hands-on Coding Assessment', 'Combined Technical & HR Interview'],
  },
  {
    id: 'job-infosys-sp-2026',
    companyName: 'Infosys Limited',
    jobRole: 'Specialist Programmer (SP)',
    jobCategory: 'Product Engineering',
    eligibleBranches: ['CSE', 'ISE', 'AIML', 'CSDS'],
    minimumCgpa: 7.5,
    requiredSkills: ['Advanced Algorithms', 'Dynamic Programming', 'Graph Theory', 'C++ / Java'],
    salaryCtc: '9.5 LPA (Industry Cadre)',
    applicationDeadline: 'December 05, 2026',
    officialApplicationUrl: 'https://www.infosys.com/careers/',
    status: 'Active',
    isSampleDemo: true,
    location: 'Bengaluru / Mysuru / Hyderabad',
    jobType: 'Full-time',
    description: 'Premier developer role focusing on complex software architecture, low-latency algorithms, and distributed systems.',
    selectionProcess: ['HackWithInfy / Coding Round', 'Deep Technical Interview', 'HR Verification'],
  },
  {
    id: 'job-accenture-advanced-ase',
    companyName: 'Accenture India',
    jobRole: 'Advanced Associate Software Engineer (AASE)',
    jobCategory: 'Core Software',
    eligibleBranches: ['CSE', 'ISE', 'AIML', 'CSDS', 'ECE'],
    minimumCgpa: 6.5,
    requiredSkills: ['Object-Oriented Programming', 'Full Stack Basics', 'Cloud Fundamentals', 'Critical Thinking'],
    salaryCtc: '6.5 LPA',
    applicationDeadline: 'December 12, 2026',
    officialApplicationUrl: 'https://www.accenture.com/in-en/careers',
    status: 'Active',
    isSampleDemo: true,
    location: 'Bengaluru / Hyderabad / Chennai',
    jobType: 'Full-time',
    description: 'Focuses on building modern digital applications, microservices, and enterprise cloud solutions for global clients.',
    selectionProcess: ['Cognitive & Technical Assessment', 'Coding Assessment', 'Automated AI Communication Assessment', 'Panel Interview'],
  },
  {
    id: 'job-cognizant-genc-next',
    companyName: 'Cognizant (CTS)',
    jobRole: 'GenC Next Software Engineer',
    jobCategory: 'Cloud & DevOps',
    eligibleBranches: ['CSE', 'ISE', 'AIML', 'CSDS', 'ECE'],
    minimumCgpa: 6.75,
    requiredSkills: ['Java / C# / Python', 'DBMS & SQL', 'Web Technologies', 'Cloud Basics'],
    salaryCtc: '6.75 LPA',
    applicationDeadline: 'December 20, 2026',
    officialApplicationUrl: 'https://careers.cognizant.com',
    status: 'Upcoming',
    isSampleDemo: true,
    location: 'Bengaluru / Mangaluru / Chennai',
    jobType: 'Full-time',
    description: 'Specialized role working on cloud-native migrations, API development, and software lifecycle optimization.',
    selectionProcess: ['Skill-based Aptitude Test', 'Advanced Coding Challenge', 'Technical SME Interview'],
  },
  {
    id: 'job-wipro-turbo-2026',
    companyName: 'Wipro Limited',
    jobRole: 'Turbo Software Developer',
    jobCategory: 'Core Software',
    eligibleBranches: ['CSE', 'ISE', 'AIML', 'CSDS', 'ECE'],
    minimumCgpa: 6.5,
    requiredSkills: ['Core Java / Python', 'Data Structures', 'Analytical Reasoning', 'Communication'],
    salaryCtc: '6.5 LPA',
    applicationDeadline: 'January 10, 2027',
    officialApplicationUrl: 'https://careers.wipro.com/',
    status: 'Upcoming',
    isSampleDemo: true,
    location: 'Bengaluru / Pune / Hyderabad',
    jobType: 'Full-time',
    description: 'Elite technical stream for engineering graduates working on AI-infused customer experiences and next-gen platforms.',
    selectionProcess: ['National Talent Hunt Assessment', 'Coding Round', 'Technical Interview'],
  },
  {
    id: 'job-capgemini-exceller',
    companyName: 'Capgemini',
    jobRole: 'Senior Analyst & Software Engineer',
    jobCategory: 'Consulting',
    eligibleBranches: ['CSE', 'ISE', 'AIML', 'CSDS', 'ECE'],
    minimumCgpa: 6.0,
    requiredSkills: ['Pseudocode', 'Game-based Aptitude', 'Behavioral Competencies', 'Java / Python'],
    salaryCtc: '4.25 LPA - 7.5 LPA',
    applicationDeadline: 'October 30, 2026',
    officialApplicationUrl: 'https://www.capgemini.com/in-en/careers/',
    status: 'Closed',
    isSampleDemo: true,
    location: 'Bengaluru / Mumbai',
    jobType: 'Full-time',
    description: 'Campus placement drive for software consulting, digital customer experience, and cloud infrastructure.',
    selectionProcess: ['Pseudocode & English Test', 'Game-based Aptitude Assessment', 'Technical + HR Round'],
  },
];

