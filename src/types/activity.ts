export interface Activity {
  id: string;
  title: string;
  soId: string;
  status: string;
  timestamp: string;
}
export interface Stats {
  applied: number;
  shortlisted: number;
  rejected: number;
}