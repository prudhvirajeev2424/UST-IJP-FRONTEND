import { Card, CardContent, CardHeader, CardTitle } from "../../ui";

interface SimilarJob {
  soNumber: string;
  title: string;
  skills: string[];
  band: string;
}

interface SimilarJobsProps {
  jobs: SimilarJob[];
}

export function SimilarJobs({ jobs }: SimilarJobsProps) {
  return (
    <Card className="bg-white border border-border rounded-2xl w-full">
      {/* Header */}
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-semibold text-foreground">
            Similar Jobs
          </CardTitle>
          <button
            className="text-[#006E74] text-xs font-medium p-0 h-auto"
          >
            View More
          </button>
        </div>
      </CardHeader>

      {/* List */}
      <CardContent className="p-0">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="flex items-start justify-between px-1 py-3 border-t border-border"
          >
            {/* Left content */}
            <div className="min-w-0">
              <p className="text-xs text-primary font-medium">
                SO: {job.soNumber}
              </p>

              <p className="text-sm font-medium text-foreground mt-0.5">
                {job.title}
              </p>

              <div className="flex items-center gap-2 mt-2">
                {job.skills.slice(0, 2).map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full bg-[#ECECE1] text-foreground"
                  >
                    {skill}
                  </span>
                ))}

                {job.skills.length > 0 && (
                  <span className="px-1 py-1 text-xs rounded-full text-foreground border border-[#231F20">
                    +2
                  </span>
                )}
              </div>
            </div>

            {/* Right badge */}
            <span className="shrink-0 mt-9 ml-3 px-3 py-3 text-xs font-medium rounded-md bg-[#0097AC]/20 text-[#0097AC]">
              B3
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
