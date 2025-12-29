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



export interface ProgressBarProps {
  percentage: number;
  label?: string;
  showPercentage?: boolean;
}


export interface StatsSummaryProps {
  completedCount: number;
  inProgressCount: number;
  notStartedCount: number;
  compact?: boolean;
}

export interface UserInfoProps {
  name: string;
  uid: string;
  location: string;
}


export interface FilterPillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}