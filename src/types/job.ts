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