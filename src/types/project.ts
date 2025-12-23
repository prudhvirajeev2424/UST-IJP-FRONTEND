// src/types/Project.ts

export interface Project {
  id: string;          // Unique identifier for the project (e.g. SO#)
  projectId: string;   // External project ID (e.g. ADB-2024-001)
  name: string;        // Project name or role title (e.g. Developer III - B3)
  type: string;        // Project type (e.g. Legacy Modernisation)
  company: string;     // Company or location (e.g. Bangalore)
  coverLetter: string; // Job description or cover letter text
}
