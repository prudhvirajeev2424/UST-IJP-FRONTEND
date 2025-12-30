export interface Candidate {
  id: string;
  name: string;
  position: string;
  phone: string;
  email: string;
  avatar: string;
  reportingManager: string;
  introduction: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
  isPresent?: boolean;
}

export interface Certification {
  id: string;
  title: string;
  icon?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  startYear: string;
  endYear: string;
}

export interface Skill {
  id: string;
  name: string;
}

export interface Accolade {
  id: string;
  title: string;
  
}

export interface Testimonial {
  id: string;
  content: string;
  author: string;
  position: string;
  avatar?: string;
}