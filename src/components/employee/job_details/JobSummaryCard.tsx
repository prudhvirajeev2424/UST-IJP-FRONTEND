import { MapPin, User } from "lucide-react";
import { Card, CardContent } from "../../ui";

interface JobSummaryCardProps {
  soNumber: string;
  role: string;
  band: string;
  account: string;
  accountLogo?: string;
  location: string;
  hiringManager: {
    name: string;
    avatar?: string;
  };
  summary: string;
}

export function JobSummaryCard({
  soNumber,
  role,
  band,
  account,
  accountLogo,
  location,
  hiringManager,
  summary,
}: JobSummaryCardProps) {
  return (
    <Card className="bg-card border border-border animate-fade-in h-full">
      <CardContent className="p-5 space-y-4">
        <div>
          <p className="text-xs text-muted-foreground mb-1">Summary</p>
          <p className="text-sm text-foreground leading-relaxed">{summary}</p>
        </div>

        <div className="space-y-3 pt-2 border-t border-border">
          <div>
            <p className="text-xs text-muted-foreground">SO#</p>
            <p className="text-sm font-medium text-foreground">{soNumber}</p>
          </div>

          <div>
            <p className="text-xs text-muted-foreground">Role & Band</p>
            <p className="text-sm font-medium text-foreground">
              {role} / {band}
            </p>
          </div>

          <div>
            <p className="text-xs text-muted-foreground">Account</p>
            <div className="flex items-center gap-2 mt-1">
              {accountLogo ? (
                <img src={accountLogo} alt={account} className="h-5" />
              ) : (
                <span className="text-sm font-medium text-primary">
                  {account}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{location}</span>
          </div>

          <div>
            <p className="text-xs text-muted-foreground mb-2">Hiring Manager</p>
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                {hiringManager.avatar ? (
                  <img
                    src={hiringManager.avatar}
                    alt={hiringManager.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <User className="h-4 w-4 text-muted-foreground" />
                )}
              </div>
              <span className="text-sm text-foreground">
                {hiringManager.name}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
