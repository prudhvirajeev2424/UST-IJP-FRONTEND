import type { Candidate, Job, Certification, Education, Skill, Accolade, Testimonial  } from '../types/candidate';
import type { Job_Detail } from '../types/job';
import type { Activity,Stats } from '../types/activity';
import type { Opportunity } from '../types/opportunity';
import  type {Project} from '../types/project';

export const candidateData: Candidate = {
  id: '1',
  name: 'Zamira Peterson',
  position: 'Developer  - B3',
  phone: '+91 9876543210',
  email: 'zamira.peterson@ust.com',
  avatar: '',
  reportingManager: 'Andreas Stephen',
  introduction: 'A highly skilled and results-driven Java Developer with 10 years of experience in designing, developing, and deploying scalable software solutions.Adept a leveraging modern frameworks,microservices architecture,and cloud technologies to build high-performance applications.Passionate about clean coding,Agile methodologies,and mentoring junior developers.',
};

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Senior Java Developer',
    company: 'UST',
    startDate: 'JAN 2020',
    endDate: 'Present',
    description: 'Architected microservices-based solutions using Spring Boot,Hibernate,and RESTful APIs.Led a team of 5 developers, conductiong  ',
    skills: ['Spring Boot', 'Hibernate', 'RESTful APIs']
  },
  {
    id: '2',
    title: 'Java Developer',
    company: 'ABC Solutions',
    startDate: 'JAN-2020',
    endDate: 'Present',
    description: 'Developed enterprise applications using Java EE and Spring MVC and MySQL.Designed RESTful web services for seamless integration with front-end applications.',
    skills: ['Java EE', 'Spring MVC', 'MySQL']
  },
  {
    id: '3',
    title: 'Junior Java Developer',
    company: 'DEF Software Pvt Ltd',
    startDate: 'JAN 2020',
    endDate: 'Present',
    description: 'Assisted in developing and testing Java-based applications. Wrote reusable code modules and optimized legacy systems. Conducted unit testing using JUnit and ensured code adherence to best practices.',
    skills: ['Java EE'],
    isPresent: true
  },

];

export const certifications: Certification[] = [
  {
    id: '1',
    title: 'Oracle Certified Professional Java SE 11 Developer'
  },
  {
    id: '2',
    title: 'AWS Certified Solutions Architect - Associate'
  },
  {
    id: '3',
    title: 'Scrum Master Certified (SMC)'
  }
];

export const education: Education[] = [
  {
    id: '1',
    degree: 'Master of Computer Engineering (MCA)',
    institution: 'University of XYZ',
    startYear: '2012',
    endYear: '2014'
  },
  {
    id: '2',
    degree: 'Bachelor of Computer Engineering (MCA)',
    institution: 'ABC University',
    startYear: '2008',
    endYear: '2012'
  }
];

export const skills: Skill[] = [
  { id: '1', name: 'Java' },
  { id: '2', name: 'JavaScript' },
  { id: '3', name: 'SQL' },
  { id: '4', name: 'Spring Boot' },
  { id: '5', name: 'MySQL' },
  { id: '6', name: 'MongoDB' },
  { id: '7', name: 'GitHub' },
  { id: '8', name: 'Java EE' }
];

export const accolades: Accolade[] = [
  {
    id: '1',
    title: 'Received "Best Developer of the Year" at XYZ Technologies',
    
  },
  {
    id: '2',
    title: 'Achieved 98% on-time project delivery rate for mission-critical applications.',
  },
  {
    id: '3',
    title: 'Received "Best Developer of the Year" at XYZ Technologies',
    
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    content: 'An exceptional Java developer who consistently delivers high-quality code. His ability to troubleshoot complex issues is outstanding',
    author: 'James Albert',
    position: 'CTO,XYZ Techologies'
  },
  {
    id: '2',
    content: 'A fantastic mentor and leader. His technical expertise and problem-solving skills have greatly contrbutted to our teams success. ',
    author: 'Peter Hayne',
    position: 'Team Lead, ABC Solutions'
  }
];

export const projectData: Project = {
  id: '1',
  projectId: '37288238',
  name: 'Legacy Modernization',
  type: 'Legacy Modernization',
  company: 'Adobe',
  coverLetter: 'I am interested in joining the project team and contributing my expertise in Java and system design.'
};
export const stats: Stats = {
  applied: 4,
  shortlisted: 3,
  rejected: 1,
};

export const recentActivities: Activity[] = [
  {
    id: '1',
    title: 'Java Developer I - A1',
    soId: 'SO#292567',
    status: 'Shortlisted',
    timestamp: '12 hrs ago',
  },
  {
    id: '2',
    title: 'Java Developer I - A1',
    soId: 'SO#292567',
    status: 'Actioned',
    timestamp: 'Yesterday',
  },
  {
    id: '3',
    title: 'Java Developer I - A1',
    soId: 'SO#292567',
    status: 'Rejected',
    timestamp: '3 days ago',
  },
];
export const opportunities: Opportunity[] = [
  { id: '83924853', role: 'Level 2 - Software Engineer', band: 'B3', location: 'Bangalore', skills: ['Java', 'Script', 'Python', 'c#'], status: 'Shortlisted',description: 'Highly skilled Java Developer with expertise in designing, developing, and maintaining robust Java applications. Proficient in working with modern frameworks, APIs, and databases to deliver scalable software solutions.', },
  { id: '83924858', role: 'Level 2 - Software Engineer', band: 'B3', location: 'Bangalore', skills: ['Java Script', 'Python', 'c#'], status: 'Actioned',description: 'Highly skilled Java Developer with expertise in designing, developing, and maintaining robust Java applications. Proficient in working with modern frameworks, APIs, and databases to deliver scalable software solutions.', },
  { id: '83924854', role: 'Level 2 - Software Engineer', band: 'B3', location: 'Bangalore', skills: ['Java Script', 'Python', 'c#' ,'React', 'Node.js'], status: 'Shortlisted',description: 'Highly skilled Java Developer with expertise in designing, developing, and maintaining robust Java applications. Proficient in working with modern frameworks, APIs, and databases to deliver scalable software solutions.', },
  { id: '83924855', role: 'Level 2 - Software Engineer', band: 'B3', location: 'Bangalore', skills: ['Java Script', 'Python'], status: 'Shortlisted',description: 'Highly skilled Java Developer with expertise in designing, developing, and maintaining robust Java applications. Proficient in working with modern frameworks, APIs, and databases to deliver scalable software solutions.', },
  { id: '83924859', role: 'Level 2 - Software Engineer', band: 'B3', location: 'Bangalore', skills: ['Java Script', 'Python', 'c#', 'Kubernetes', 'AWS', 'Azure', 'Git'], status: null as any,description: 'Highly skilled Java Developer with expertise in designing, developing, and maintaining robust Java applications. Proficient in working with modern frameworks, APIs, and databases to deliver scalable software solutions.', },
  { id: '83924856', role: 'Level 2 - Software Engineer', band: 'B3', location: 'Bangalore', skills: ['Java Script', 'Python', 'c#', 'TypeScript', 'Angular', 'Vue.js'], status: 'Rejected',description: 'Highly skilled Java Developer with expertise in designing, developing, and maintaining robust Java applications. Proficient in working with modern frameworks, APIs, and databases to deliver scalable software solutions.', },
  { id: '83924857', role: 'Level 2 - Software Engineer', band: 'B3', location: 'Bangalore', skills: ['Java Script', 'Python', 'c#', 'Docker'], status: 'Shortlisted',description: 'Highly skilled Java Developer with expertise in designing, developing, and maintaining robust Java applications. Proficient in working with modern frameworks, APIs, and databases to deliver scalable software solutions.', },
  { id: '83924860', role: 'Level 2 - Software Engineer', band: 'B3', location: 'Bangalore', skills: ['Java'], status: 'Shortlisted',description: 'Highly skilled Java Developer with expertise in designing, developing, and maintaining robust Java applications. Proficient in working with modern frameworks, APIs, and databases to deliver scalable software solutions.', },
  { id: '83924861', role: 'Level 2 - Software Engineer', band: 'B3', location: 'Bangalore', skills: ['Java Script', 'Python', 'c#', 'MongoDB', 'PostgreSQL'], status: 'Rejected',description: 'Highly skilled Java Developer with expertise in designing, developing, and maintaining robust Java applications. Proficient in working with modern frameworks, APIs, and databases to deliver scalable software solutions.', },
];


export const getJobById = (id: string): Opportunity | undefined => {
  return opportunities.find((job) => job.id === id);
};

export const getSimilarJobs = (currentId: string, limit: number = 3) => {
  return opportunities
    .filter((job) => job.id !== currentId)
    .slice(0, limit)
    .map((job) => ({
      id: job.id,
      role: job.role,
      skills: job.skills.slice(0, 2),
      band: job.band,
      location: job.location,
    }));
};
 