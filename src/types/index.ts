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
  // additional optional fields used by mock data and cards
  imageUrl?: string;
  additionalSkills?: number;
  description?: string;
};

export type CandidateStatus =
  | "PENDING_WFM"
  | "WFM_APPROVED"
  | "SELECTED"
  | "ALLOCATED"
  | "REJECTED";

export default {} as unknown as {};

// Application type used in the list/table views
export type Application = {
  id: number;
  sid: string;
  uid: string;
  name: string;
  role: string;
  location: string;
  date: string;
  score: string;
  action: string;
  hasIcon?: boolean;
};
