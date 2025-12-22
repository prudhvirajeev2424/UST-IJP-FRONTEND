export interface User {
  id: string;
  name: string;
  uid: string;
  location: string;
  avatarUrl: string;
}

export interface Task {
  id: string;
  user: User;
  title: string;
  progress: number;
  updatedDaysAgo: number;
}

export interface ProgressInfo {
  percentage: number;
  label?: string;
}

export type FilterType = "all" | "below50" | "above50";

export interface FilterOption {
  id: FilterType;
  label: string;
}
