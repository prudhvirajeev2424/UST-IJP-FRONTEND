import { Card, CardContent, CardHeader, CardTitle } from "../../ui";
import { SkillBadge } from "../home_components/SkillBadge";

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
  // Add any missing responsibility lines shown in the design if not already present
  const extraResponsibilities = [
    "Write clean, maintainable, and well-documented code following best practices.",
    "Conduct code reviews, provide constructive feedback, and mentor junior engineers.",
  ];
  const allResponsibilities =
    responsibilities.length >= 5
      ? responsibilities
      : [...responsibilities, ...extraResponsibilities].slice(0, 6);

  return (
    <Card
      className="bg-card border border-border animate-fade-in"
      style={{
        // fill the parent grid cell (parent controls exact dimensions)
        width: "100%",
        height: "100%",
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        borderRadius: "10px",
        opacity: 1,
        boxSizing: "border-box",
      }}
    >
      {/* Header: give 40px padding so title and posted date have space from the card border */}
      <CardHeader style={{ padding: 40, paddingBottom: 0 }}>
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-semibold text-foreground">
            {title}
          </CardTitle>
          <span
            className="text-xs text-muted-foreground whitespace-nowrap"
            style={{ marginTop: 4 }}
          >
            Posted in {postedDate}
          </span>
        </div>
      </CardHeader>

      {/* CardContent: keep 40px horizontal and bottom padding, remove top padding to avoid doubling with header */}
      <CardContent className="space-y-6" style={{ padding: "0 40px 40px" }}>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">
            Must Have Skills
          </h4>
          <div className="space-y-3">
            <div>
              <p className="text-xs text-muted-foreground mb-2">Primary</p>

              {/* Use the skill-grid and skill-chip styles so pills match SkillBadge visuals */}
              <div className="skill-grid">
                {mustHaveSkills.primary.map((skill) => (
                  <div key={skill} className="skill-chip" title={skill}>
                    {/* SkillBadge provides any behavior; wrapper enforces pill visuals */}
                    <SkillBadge skill={skill} variant="primary" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs text-muted-foreground mb-2">Others</p>
              <div className="skill-grid">
                {mustHaveSkills.others.map((skill) => (
                  <div key={skill} className="skill-chip" title={skill}>
                    <SkillBadge skill={skill} variant="secondary" />
                  </div>
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
              <div key={skill} className="skill-chip" title={skill}>
                <SkillBadge skill={skill} variant="secondary" />
              </div>
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
            {allResponsibilities.map((item, index) => (
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
