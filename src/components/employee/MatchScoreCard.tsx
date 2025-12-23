import { Card, CardContent } from "../ui";

interface MatchScoreCardProps {
  percentage: number;
}

export function MatchScoreCard({ percentage }: MatchScoreCardProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-success";
    if (score >= 60) return "text-warning";
    return "text-destructive";
  };

  const getTrackColor = (score: number) => {
    if (score >= 80) return "stroke-success";
    if (score >= 60) return "stroke-warning";
    return "stroke-destructive";
  };

  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <Card className="bg-card border border-border animate-fade-in">
      <CardContent className="p-5 flex items-center gap-4">
        <div className="relative h-20 w-20">
          <svg className="h-20 w-20 -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              className="text-secondary"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              strokeWidth="8"
              strokeLinecap="round"
              className={`transition-all duration-1000 ease-out ${getTrackColor(
                percentage
              )}`}
              style={{
                strokeDasharray: circumference,
                strokeDashoffset,
              }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`text-xl font-bold ${getScoreColor(percentage)}`}>
              {percentage}%
            </span>
          </div>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">My Fitment</p>
        </div>
      </CardContent>
    </Card>
  );
}
