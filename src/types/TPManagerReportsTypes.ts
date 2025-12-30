export interface Employee {
  uid: string;
  name: string;
  role: string;
  projectId: string;
  tpAgeing: string;
  resumeUpdateDate: string;
}

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