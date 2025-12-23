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
