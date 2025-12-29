export interface JobDetails {
  id: string;
  soNumber: string;
  title: string;
  roleBand: string;
  account: string;
  location: string;
  hiringManager: {
    name: string;
    avatar?: string;
  };
  summary: string;
  jobSummary: string;
  responsibilities: string[];
  skills: {
    primary: string[];
    others: string[];
    goodToHave: string[];
  };
  postedDate: string;
}

export interface Job_Detail {
  id: string;
  soNumber: string;
  role: string;
  title: string;
  band: string;
  account: string;
  location: string;
  hiringManager: {
    name: string;
    avatar?: string;
  };
  summary: string;
  postedDate: string;
  mustHaveSkills: {
    primary: string[];
    others: string[];
  };
  goodToHaveSkills: string[];
  jobSummary: string;
  responsibilities: string[];
  matchScore: number;
}
 
 