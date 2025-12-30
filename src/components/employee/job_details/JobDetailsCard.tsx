import { Card, CardContent, CardHeader, CardTitle } from "../../ui";

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
    <Card
      className="bg-card border border-border animate-fade-in"
      style={{
        width: "100%",
        height: "100%",
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        borderRadius: "10px",
        boxSizing: "border-box",
      }}
    >
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

      <CardContent className="space-y-6" style={{ padding: "0 40px 40px" }}>
        {/* Must Have Skills */}
        <div>
          <h4 className="text[20]-sm font-semibold text-foreground mb-3 mt-3">
            Must Have Skills
          </h4>

          <div className="space-y-3">
            {/* Primary */}
            <div>
              <p className="text-sm font-semibold text-foreground mb-2">
                Primary
              </p>
              <div className="skill-grid">
                {mustHaveSkills.primary.map((skill) => (
                  <div key={skill} className="skill-chip" title={skill}>
                    <span className="skill-text">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Others */}
            <div>
              <p className="text-sm font-semibold text-foreground mb-2">
                Others
              </p>
              <div className="skill-grid">
                {[
                  ...mustHaveSkills.others,
                  "Presentation",
                  "MS PowerPoint",
                  "MS Excel",
                ].map((skill) => (
                  <div key={skill} className="skill-chip" title={skill}>
                    <span className="skill-text">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Good to Have Skills */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-2">
            Good to Have Skills
          </h4>
          <div className="skill-grid">
            {goodToHaveSkills.map((skill) => (
              <div key={skill} className="skill-chip" title={skill}>
                <span className="skill-text">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Job Summary */}
        <div>
          <h4 className="text[20]-sm font-semibold text-foreground mb-2">
            Job Summary
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {jobSummary}
          </p>
        </div>

        {/* Responsibilities */}
        <div>
          <h4 className="text[20]-sm font-semibold text-foreground mb-2">
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
