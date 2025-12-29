// Shared types

export type Profile = {
  id: string;
  name: string;
  // legacy/variant fields used by mock data
  developer?: string;
  uid?: string;
  soId?: string;
  position?: string;
  score?: number;
  status?: string;
  skills?: string[];
  avatar?: string;
  imageUrl?: string;
  fitment?: number;
  additionalSkills?: number;
  description?: string;
};

export type CandidateStatus =
  | "PENDING_WFM"
  | "WFM_APPROVED"
  | "SELECTED"
  | "ALLOCATED"
  | "REJECTED";

// Re-export common types for simpler imports
export type { Application } from "./application";

// no default export required for types module
