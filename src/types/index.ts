// Shared types

export type Profile = {
  id: string;
  name: string;
  developer?: string;
  uid?: string;
  score: number;
  status?: string;
  skills: string[];
  avatar?: string;
};

export type CandidateStatus =
  | "PENDING_WFM"
  | "WFM_APPROVED"
  | "SELECTED"
  | "ALLOCATED"
  | "REJECTED";

export default {} as unknown as {};
