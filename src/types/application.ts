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