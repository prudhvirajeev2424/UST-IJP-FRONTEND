import { Badge } from "../../ui/Badge";
import type { WfmProfile } from "../../../data/wfmProfiles";

interface ProfileListViewProps {
  profiles: WfmProfile[];
}

export function ProfileListView({ profiles }: ProfileListViewProps) {
  const getStatusStyles = (status: WfmProfile["status"]) => {
    switch (status) {
      case "Pending":
        return "bg-purple-100 text-purple-600 border-none px-3 py-1";
      case "Rejected":
        return "bg-red-100 text-red-500 border-none px-3 py-1";
      case "Allocated":
        return "bg-cyan-50 text-cyan-500 border-none px-3 py-1";
      case "Interviewing":
        return "bg-yellow-100 text-yellow-600 border-none px-3 py-1";
      case "Selected":
        return "bg-green-100 text-green-600 border-none px-3 py-1";
      default:
        return "bg-gray-100 text-gray-600 border-none px-3 py-1";
    }
  };

  return (
    <div className="w-full overflow-x-auto">
      {/* Table-like Structure */}
      <div className="min-w-[1000px]">
        {/* Header */}
        <div
          className="flex items-center px-8 rounded-t-[10px]"
          style={{
            backgroundColor: "rgba(215, 224, 227, 0.1)",
            height: "60px",
          }}
        >
          <div className="w-[15%] text-[13px] font-bold text-gray-400 font-['Rubik',sans-serif]">
            SO#
          </div>
          <div className="w-[20%] text-[13px] font-bold text-gray-400 font-['Rubik',sans-serif]">
            Role
          </div>
          <div className="w-[10%] text-[13px] font-bold text-gray-400 font-['Rubik',sans-serif]">
            Band
          </div>
          <div className="w-[15%] text-[13px] font-bold text-gray-400 font-['Rubik',sans-serif]">
            Location
          </div>
          <div className="w-[20%] text-[13px] font-bold text-gray-400 font-['Rubik',sans-serif]">
            Account
          </div>
          <div className="w-[20%] text-right text-[13px] font-bold text-gray-400 font-['Rubik',sans-serif]">
            Action Taken
          </div>
        </div>

        {/* Rows */}
        <div className="flex flex-col border-x border-b border-gray-100/50 rounded-b-[10px] overflow-hidden">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className={`flex items-center px-8 border-b border-gray-50 last:border-0 bg-white hover:bg-gray-50/50 transition-colors`}
              style={{ height: "65px" }}
            >
              <div className="w-[15%] text-[14px] font-normal text-teal-600 font-['Rubik',sans-serif]">
                {profile.soNumber}
              </div>
              <div className="w-[20%] text-[14px] font-normal text-teal-600 font-['Rubik',sans-serif]">
                {profile.role}
              </div>
              <div className="w-[10%] text-[14px] font-normal text-gray-600 font-['Rubik',sans-serif]">
                {profile.band}
              </div>
              <div className="w-[15%] text-[14px] font-normal text-gray-600 font-['Rubik',sans-serif]">
                {profile.location}
              </div>
              <div className="w-[20%] text-[14px] font-normal text-gray-600 font-['Rubik',sans-serif]">
                {profile.account}
              </div>
              <div className="w-[20%] flex justify-end">
                <Badge
                  className={`text-[11px] font-bold rounded-[4px] border-none px-3 py-1 ${getStatusStyles(
                    profile.status
                  )}`}
                >
                  {profile.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
