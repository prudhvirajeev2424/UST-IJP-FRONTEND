export interface MatchingJob {
  so: string;
  role: string;
  band: string;
  location: string;
  skills: string[];
  actionTaken: 'Shortlisted' | 'Actioned' | 'Rejected' | null;
  updateDate: string;
  employeeUid: string;
}