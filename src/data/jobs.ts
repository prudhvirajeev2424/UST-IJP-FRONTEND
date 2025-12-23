import { Job } from '@/types';

export type { Job };

export const jobsData: Job[] = [
  {
    id: '1',
    soNumber: '32443388',
    role: 'Lead 2 - Software Engineer',
    title: 'Lead 2 - Software Engineer',
    band: 'B2',
    account: 'T-Mobile',
    location: 'Bangalore',
    hiringManager: {
      name: 'Emily Stephen',
    },
    summary: 'Join our team as a Software Development Lead, where you will oversee and guide the development of software solutions from concept to deployment. This leadership role involves managing a team of developers, collaborating with stakeholders, and ensuring projects meet quality standards and timelines.',
    postedDate: '26 December 2024',
    mustHaveSkills: {
      primary: ['Java', 'Node.js', '.NET', 'Python'],
      others: ['Presentation', 'MS Powerpoint', 'MS Excel'],
    },
    goodToHaveSkills: ['NextJs', 'Miro'],
    jobSummary: 'We are seeking a highly skilled and experienced Senior Backend Software Engineer to join our dynamic technology team. The ideal candidate will be responsible for designing, developing, and maintaining scalable, robust, and secure backend services and APIs. This role requires strong problem-solving skills, architectural thinking, and the ability to mentor junior engineers while collaborating with cross-functional teams to deliver high-quality software solutions.',
    responsibilities: [
      'Design, develop, and maintain high-performance, scalable, and secure backend services and APIs.',
      'Collaborate with front-end developers, product managers, and other stakeholders to define and implement technical solutions.',
      'Optimize applications for maximum speed, scalability, and reliability.',
      'Write clean, maintainable, and well-documented code following best practices.',
      'Conduct code reviews, provide constructive feedback, and mentor junior engineers.',
    ],
    matchScore: 90,
  },
  {
    id: '2',
    soNumber: '32443389',
    role: 'Specialist 1 - Software Engineer',
    title: 'Specialist 1 - Software Engineer',
    band: 'B3',
    account: 'Verizon',
    location: 'Hyderabad',
    hiringManager: {
      name: 'John Davis',
    },
    summary: 'Join our engineering team as a Software Engineer Specialist. Work on cutting-edge technologies to deliver high-quality software solutions.',
    postedDate: '25 December 2024',
    mustHaveSkills: {
      primary: ['JavaScript', 'React', 'TypeScript'],
      others: ['Agile', 'Git', 'CI/CD'],
    },
    goodToHaveSkills: ['GraphQL', 'Docker'],
    jobSummary: 'We are looking for a talented Software Engineer to join our frontend development team. You will work on building modern web applications using React and TypeScript.',
    responsibilities: [
      'Develop and maintain web applications using React and TypeScript.',
      'Collaborate with designers and backend engineers.',
      'Write unit and integration tests.',
      'Participate in code reviews and technical discussions.',
      'Stay up-to-date with industry trends and best practices.',
    ],
    matchScore: 85,
  },
  {
    id: '3',
    soNumber: '32443390',
    role: 'Senior Developer - Full Stack',
    title: 'Senior Developer - Full Stack',
    band: 'B2',
    account: 'AT&T',
    location: 'Chennai',
    hiringManager: {
      name: 'Michael Chen',
    },
    summary: 'Lead full-stack development initiatives and mentor junior developers. Build scalable applications using modern technologies.',
    postedDate: '24 December 2024',
    mustHaveSkills: {
      primary: ['Python', 'Django', 'PostgreSQL'],
      others: ['AWS', 'Docker', 'Kubernetes'],
    },
    goodToHaveSkills: ['Redis', 'Elasticsearch'],
    jobSummary: 'We need a senior full-stack developer to lead our development team and build enterprise-grade applications.',
    responsibilities: [
      'Lead full-stack development projects from concept to deployment.',
      'Design and implement scalable architecture solutions.',
      'Mentor and guide junior developers.',
      'Collaborate with product and design teams.',
      'Ensure code quality and best practices.',
    ],
    matchScore: 78,
  },
  {
    id: '4',
    soNumber: '32443391',
    role: 'Java Developer I - A1',
    title: 'Java Developer I - A1',
    band: 'A1',
    account: 'Sprint',
    location: 'Bangalore',
    hiringManager: {
      name: 'Lisa Wang',
    },
    summary: 'Entry-level Java developer position focused on building enterprise applications.',
    postedDate: '23 December 2024',
    mustHaveSkills: {
      primary: ['Java', '.NET', 'SQL'],
      others: ['Spring Boot', 'Hibernate'],
    },
    goodToHaveSkills: ['Microservices', 'JUnit'],
    jobSummary: 'Looking for a Java developer to join our enterprise applications team.',
    responsibilities: [
      'Develop Java-based enterprise applications.',
      'Write and maintain SQL queries and stored procedures.',
      'Participate in agile development processes.',
      'Debug and troubleshoot application issues.',
      'Document technical specifications.',
    ],
    matchScore: 82,
  },
  {
    id: '5',
    soNumber: '32443392',
    role: 'Frontend Developer - React',
    title: 'Frontend Developer - React',
    band: 'B1',
    account: 'Comcast',
    location: 'Pune',
    hiringManager: {
      name: 'David Brown',
    },
    summary: 'Build modern, responsive web interfaces using React and related technologies.',
    postedDate: '22 December 2024',
    mustHaveSkills: {
      primary: ['React', 'TypeScript', 'CSS'],
      others: ['Tailwind CSS', 'Redux'],
    },
    goodToHaveSkills: ['Next.js', 'Testing Library'],
    jobSummary: 'We need a React developer to build beautiful and performant user interfaces.',
    responsibilities: [
      'Build responsive web applications using React.',
      'Implement pixel-perfect designs.',
      'Optimize frontend performance.',
      'Write clean, reusable components.',
      'Collaborate with UX designers.',
    ],
    matchScore: 88,
  },
  {
    id: '6',
    soNumber: '32443393',
    role: 'Backend Engineer - Node.js',
    title: 'Backend Engineer - Node.js',
    band: 'B2',
    account: 'Charter',
    location: 'Mumbai',
    hiringManager: {
      name: 'Sarah Miller',
    },
    summary: 'Design and implement backend services and APIs using Node.js and cloud technologies.',
    postedDate: '21 December 2024',
    mustHaveSkills: {
      primary: ['Node.js', 'MongoDB', 'AWS'],
      others: ['Express.js', 'REST APIs'],
    },
    goodToHaveSkills: ['GraphQL', 'Serverless'],
    jobSummary: 'Looking for a backend engineer to build scalable APIs and microservices.',
    responsibilities: [
      'Design and build RESTful APIs.',
      'Implement database schemas and queries.',
      'Deploy and manage cloud infrastructure.',
      'Monitor and optimize system performance.',
      'Write comprehensive documentation.',
    ],
    matchScore: 75,
  },
];

export const getJobById = (id: string): Job | undefined => {
  return jobsData.find(job => job.id === id);
};

export const getSimilarJobs = (currentId: string, limit: number = 3) => {
  return jobsData
    .filter(job => job.id !== currentId)
    .slice(0, limit)
    .map(job => ({
      soNumber: job.soNumber,
      title: job.title,
      skills: job.mustHaveSkills.primary.slice(0, 2),
      matchScore: job.matchScore,
    }));
};