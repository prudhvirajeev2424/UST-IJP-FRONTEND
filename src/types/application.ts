export type ApplicationStatus =
  | "Interviewing"
  | "Allocated"
  | "Selected"
  | "Rejected"
  | "Pending";

export interface Application {
  // Core identifier (string in real API, numeric in mocks)
  id: string | number;

  // Compatibility fields for multiple mock shapes used across the repo
  soId?: string;
  sid?: string;
  uid?: string;
  name?: string;
  role?: string;
  account?: string;
  location?: string;
  appliedDate?: string;
  date?: string;
  hiringManager?: string;
  hasManagerInfo?: boolean;
  requiredSkills?: string[];
  score?: string | number;
  action?: string;
  hasIcon?: boolean;

  // canonical status when available
  status?: ApplicationStatus;
}
