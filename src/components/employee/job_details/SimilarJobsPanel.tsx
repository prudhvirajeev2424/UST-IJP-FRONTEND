import { Card, CardContent, CardHeader, CardTitle, Button } from "../../ui";
import { SimilarJobCard } from "./SimilarJobCard";

interface SimilarJob {
  soNumber: string;
  title: string;
  skills: string[];
  matchScore: number;
}

interface SimilarJobsPanelProps {
  jobs: SimilarJob[];
}

export function SimilarJobsPanel({ jobs }: SimilarJobsPanelProps) {
  return (
    <div className="similar-jobs" style={{ width: "100%", height: "100%", boxSizing: "border-box", overflowY: "auto" }}>
      <Card className="bg-card border border-border animate-fade-in">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-semibold text-foreground">
              Similar Jobs
            </CardTitle>
            <Button variant="link" className="text-primary text-xs p-0 h-auto">
              View More
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          {jobs.map((job) => (
            <SimilarJobCard key={job.soNumber} {...job} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
