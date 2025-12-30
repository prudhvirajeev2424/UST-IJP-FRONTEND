import { Card, CardContent } from "../../ui";
// SVGs will be added later
import { MapPin} from "lucide-react";
// added import for the new asset
import accountLogoImg from "../../../assets/account_logo.png";
// added import for Emily Stephen DP
import emilyStephenImg from "../../../assets/emily_stephen.png";

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
    <Card className="bg-white border border-border rounded-lg h-full">
      <CardContent className="px-5 py-4 space-y-5">
        {/* Summary */}
        <div>
          <p className="text-[12px] text-muted-foreground mb-5 mt-5">
            Summary
          </p>
          <p className="text-[13px] text-foreground leading-[20px] mt-3 mb-3">
            {summary}
          </p>
        </div>

        {/* Divider */}
        <div >
          {/* SO */}
          <div>
            <p className="text-[12px] text-muted-foreground mb-1  ">SO#</p>
            <p className="text-[13px] text-foreground font-medium mb-5">
              {soNumber}
            </p>
          </div>

          {/* Role & Band */}
          <div>
            <p className="text-[12px] text-muted-foreground mt-3,mb-2">Role & Band</p>
            <p className="text-[13px] text-foreground font-medium mb-5">
              {role} / {band}
            </p>
          </div>

          {/* Account */}
          <div>
            <p className="text-[12px] text-muted-foreground">Account</p>
            <div className="flex items-center gap-2 mt-2 mb-5">
              {accountLogo ? (
                <img
                  src={accountLogo}
                  alt={account}
                  style={{ width: 92, height: 32 }}
                />
              ) : (
                // use the imported accountLogo.png when no accountLogo prop supplied
                <img
                  src={accountLogoImg}
                  alt={account}
                  style={{ width: 92, height: 32 }}
                />
              )}
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-muted-foreground mb-5 ">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <span className="text-[13px]">{location}</span>
          </div>

          {/* Hiring Manager */}
          <div>
            <p className="text-[12px] text-muted-foreground mb-2">
              Hiring Manager
            </p>
            <div className="flex items-center gap-2" style={{ position: 'relative' }}>
              {/* rounded box DP with exact UI properties (absolute positioning & background) */}
              <div
                style={{
                  position: "absolute",
                  top: 762,
                  left: 90,
                  width: 40,
                  height: 40,
                  background: `transparent url(${emilyStephenImg}) 0% 0% no-repeat padding-box`,
                  opacity: 1,
                  borderRadius: 6, // rounded box
                  overflow: "hidden",
                  boxSizing: "border-box",
                }}
                aria-hidden={true}
              />

              {/* visible avatar inside flow (fills same 40x40 area) */}
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 6,
                  overflow: "hidden",
                  boxSizing: "border-box",
                  background: "transparent",
                }}
              >
                {hiringManager.avatar ? (
                  <img
                    src={hiringManager.avatar}
                    alt={hiringManager.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                ) : (
                  <img
                    src={emilyStephenImg}
                    alt={hiringManager.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                )}
              </div>

              <span className="text-[13px] text-foreground">{hiringManager.name}</span>
              
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
