import { Card, CardContent } from "../../ui";
import { SkillBadge } from "../home_components/SkillBadge";

interface SimilarJobCardProps {
  soNumber: string;
  title: string;
  skills: string[];
  matchScore: number;
}

export function SimilarJobCard({
  soNumber,
  title,
  skills,
  matchScore,
}: SimilarJobCardProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "bg-success text-success-foreground";
    if (score >= 60) return "bg-warning text-warning-foreground";
    return "bg-destructive text-destructive-foreground";
  };

  return (
    <Card className="bg-card border border-border hover:border-primary/30 transition-all cursor-pointer group">
      <CardContent className="p-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <p className="text-xs text-primary font-medium">SO: {soNumber}</p>
            <p className="text-sm font-medium text-foreground mt-1 truncate group-hover:text-primary transition-colors">
              {title}
            </p>
            <div className="flex flex-wrap gap-1 mt-2">
              {skills.slice(0, 3).map((skill) => (
                <SkillBadge key={skill} skill={skill} variant="secondary" />
              ))}
              {skills.length > 3 && (
                <span className="inline-flex items-center px-2 py-1 text-xs text-muted-foreground">
                  +{skills.length - 3}
                </span>
              )}
            </div>
          </div>
          <span
            className={`shrink-0 px-2 py-1 rounded text-xs font-medium ${getScoreColor(
              matchScore
            )}`}
          >
            {matchScore}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
