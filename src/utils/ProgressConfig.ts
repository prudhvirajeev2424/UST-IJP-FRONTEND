import type { CandidateStatus } from "../types/CandidateStatus";

export const STEPS = [
  {
    key: "PENDING_WFM",
    label: "",
    tooltip: "Submitted for approval",
  },
  {
    key: "WFM_APPROVED",
    label: "Pending WFM approval",
    tooltip: "WFM approved",
  },
  {
    key: "SELECTED",
    label: "Select for Interview",
    tooltip: "Selected for interview",
  },
  {
    key: "ALLOCATED",
    label: "Allocation",
    tooltip: "Allocated",
  },
] as const;

export const statusIndexMap: Record<CandidateStatus, number> = {
  PENDING_WFM: 1,
  WFM_APPROVED: 2,
  SELECTED: 3,
  ALLOCATED: 4,
  REJECTED: 1, 
};
