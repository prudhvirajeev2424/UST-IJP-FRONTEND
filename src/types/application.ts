export type ApplicationStatus = 
  | 'Interviewing' 
  | 'Allocated' 
  | 'Selected' 
  | 'Rejected' 
  | 'Pending';

export interface Application {
  id: string;
  soId: string;
  role: string;
  account: string;
  appliedDate: string;
  hiringManager: string;
  hasManagerInfo: boolean;
  requiredSkills: string[];
  status: ApplicationStatus;
}

// THIS INTERFACE IS FOR MOCK DATA PURPOSES FOR OPPORTUNITIES (TEAM 6)
export interface Job {
  id: string;
  role: string;
  band: string;
  location: string;
  skills: string[];
  status?: 'Shortlisted' | 'Actioned' | 'Rejected';
  description: string;
}

export interface Notification {
  user: string;
  action: string;
  target: string;
  time: string;
  avatar: string;
}