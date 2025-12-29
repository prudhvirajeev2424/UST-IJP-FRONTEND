// Shared types

export type Profile = {
  id: string;
  name: string;
  position: string;
  uid: string;
  soId: string;
  status: string;
  fitment: number;
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
