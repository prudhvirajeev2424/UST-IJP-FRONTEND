import type { Status } from "./status";
export interface Opportunity {
  id: string;
  role: string;
  band: string;
  location: string;
  status: string;
  skills: Status;
  description: string;
}