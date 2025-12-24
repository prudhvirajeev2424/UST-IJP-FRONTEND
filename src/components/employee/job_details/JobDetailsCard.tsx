import { Card, CardContent, CardHeader, CardTitle } from "../ui";
import { SkillBadge } from "./home_components/SkillBadge";

interface JobDetailsCardProps {
  title: string;
  postedDate: string;
  mustHaveSkills: {
    primary: string[];
    others: string[];
  };
  goodToHaveSkills: string[];
  jobSummary: string;
  responsibilities: string[];
}

export function JobDetailsCard({
  title,
  postedDate,
  mustHaveSkills,
  goodToHaveSkills,
  jobSummary,
  responsibilities,
}: JobDetailsCardProps) {
  return (
    <Card className="bg-card border border-border animate-fade-in h-full">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-semibold text-foreground">
            {title}
          </CardTitle>
          <span className="text-xs text-muted-foreground whitespace-nowrap">
            Posted in {postedDate}
          </span>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">
            Must Have Skills
          </h4>
          <div className="space-y-3">
            <div>
              <p className="text-xs text-muted-foreground mb-2">Primary</p>
              <div className="flex flex-wrap gap-2">
                {mustHaveSkills.primary.map((skill) => (
                  <SkillBadge key={skill} skill={skill} variant="primary" />
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2">Others</p>
              <div className="flex flex-wrap gap-2">
                {mustHaveSkills.others.map((skill) => (
                  <SkillBadge key={skill} skill={skill} variant="secondary" />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-2">
            Good to Have Skills
          </h4>
          <div className="flex flex-wrap gap-2">
            {goodToHaveSkills.map((skill) => (
              <SkillBadge key={skill} skill={skill} variant="secondary" />
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-2">
            Job Summary
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {jobSummary}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-2">
            Key Responsibilities
          </h4>
          <ul className="space-y-2">
            {responsibilities.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
