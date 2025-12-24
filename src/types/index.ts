export type OpportunityStatus = 'Shortlisted' | 'Initiated' | 'Rejected' | null;
 
export interface Opportunity {
  id: string;
  role: string;
  band: string;
  location: string;
  skills: string;
  status: OpportunityStatus;
}
 
export interface Activity {
  id: string;
  jobTitle: string;
  jobId: string;
  status: 'Shortlisted' | 'Initiated' | 'Rejected';
  date: string;
}
 
export interface UserProfile {
  name: string;
  title: string;
  summary: string;
  skills: string[];
  resumeUpdated: string;
}
 
export interface DashboardStats {
  applied: number;
  shortlisted: number;
  rejected: number;
}
 
export interface Job {
  id: string;
  soNumber: string;
  role: string;
  title: string;
  band: string;
  account: string;
  location: string;
  hiringManager: {
    name: string;
    avatar?: string;
  };
  summary: string;
  postedDate: string;
  mustHaveSkills: {
    primary: string[];
    others: string[];
  };
  goodToHaveSkills: string[];
  jobSummary: string;
  responsibilities: string[];
  matchScore: number;
}
 