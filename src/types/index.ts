/**
 * Centralized type definitions.
 * Merged `Profile` and `Application` interfaces for simpler imports.
 * Keep this file as the single source of truth for these shared types.
 */
export interface Profile {
  id: string;
  name: string;
  position: string;
  uid: string;
  soId: string;
  status: string;
  fitment: number;
  skills: string[];
  additionalSkills: number;
  description: string;
  /** Optional URL to the profile image/avatar */
  imageUrl?: string;
}

export interface Application {
  id: number;
  sid: string;
  uid: string;
  name: string;
  role: string;
  location: string;
  date: string;
  score: string;
  action: string;
  hasIcon: boolean;
}

export type { Profile as ProfileType, Application as ApplicationType };
