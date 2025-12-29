import React, { useState } from "react";
import DP from "../assets/DP.png";
import type { Profile } from "../types";

/**
 * ProfileCard
 * Small, focused card used in the Kanban/grid view. It implements a hover
 * reveal layer which shows additional details and a "View in Detail" CTA.
 *
 * Now fully responsive with relative units and flexible sizing.
 */
interface ProfileCardProps {
  profile: Profile;
  // optional handler invoked when "View in Detail" is clicked
  onViewDetail?: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile, onViewDetail }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className={`relative w-full max-w-[320px] min-w-[280px] aspect-[320/294] rounded-[10px] overflow-hidden font-rubik flex flex-col cursor-pointer transition-all duration-300 ease-out ${
        isHovered ? "bg-[#6B6B6B]" : "bg-white"
      } focus:outline-none`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* HEADER SECTION - Always visible with smooth transition */}
      <div
        className={`px-[7%] pt-[8%] pb-[5%] transition-colors duration-300 ease-out ${
          isHovered ? "bg-[#6B6B6B]" : "bg-white"
        }`}
      >
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div
              className={`w-12 h-12 min-w-[48px] rounded-md flex-shrink-0 overflow-hidden bg-transparent ${
                isHovered ? "opacity-40 pointer-events-none" : "opacity-100"
              } transition-opacity duration-300 ease-out`}
            >
              <img
                src={DP}
                alt={`${profile.name} profile photo`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="text-[14px] font-normal text-[#231F20] mb-1 truncate">
                {profile.name}
              </h4>
              <p className="text-[12px] text-[#7A7480] leading-tight truncate">
                {profile.position}
              </p>
              <p className="text-[11px] leading-[13px] text-[#7A7480] font-normal mt-1 truncate">
                {profile.uid}
              </p>
            </div>
          </div>
          <div className="flex-shrink-0">
            {/* Fitment pill: responsive sizing */}
            {(() => {
              const fit = profile.fitment;
              let color = "#FC6A59"; // default red
              if (fit > 75) color = "#01B27C"; // green
              else if (fit >= 50) color = "#D97706"; // amber

              return (
                <div
                  style={{
                    minWidth: "52px",
                    height: "29px",
                    border: `1px solid ${color}`,
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: color,
                    backgroundColor: "transparent",
                    transition: "all 0.3s ease-out",
                    padding: "0 8px",
                  }}
                >
                  <span className="text-[12px] font-normal whitespace-nowrap">
                    {profile.fitment}%
                  </span>
                </div>
              );
            })()}
          </div>
        </div>
      </div>

      {/* BODY SECTION - Relative container for two layers */}
      <div className="flex-1 relative">
        {/* DEFAULT VIEW CONTENT (LAYER 1) - Fades out on hover */}
        <div
          className={`absolute inset-0 px-[7%] pb-[8%] transition-opacity duration-300 ease-out ${
            isHovered ? "opacity-20 pointer-events-none" : "opacity-100"
          }`}
        >
          {/* SO ID */}
          <p className="text-[14px] font-normal text-[#006E74] mb-1 truncate">
            {profile.soId}
          </p>

          {/* Status - shown inside a pill per design */}
          <div className="pt-2 mb-4">
            <div
              className="inline-flex items-center justify-center text-[14px] font-normal px-3"
              style={{
                minWidth: "73px",
                height: "29px",
                backgroundColor: "rgba(0,151,172,0.1)",
                borderRadius: "4px",
                color: "#0097AC",
              }}
            >
              <span className="whitespace-nowrap">{profile.status}</span>
            </div>
          </div>

          {/* Skills - placed directly after status (not absolute) */}
          <div className="mt-2 flex items-center gap-2 flex-wrap">
            {profile.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-[#F6F3E8] px-[12px] py-[4px] rounded-full text-[14px] text-[#231F20] whitespace-nowrap"
              >
                {skill}
              </span>
            ))}
            {profile.additionalSkills > 0 && (
              <span className="border border-[#7A7480] px-[8px] py-[3px] rounded-full text-[14px] text-[#7A7480] bg-transparent whitespace-nowrap">
                +{profile.additionalSkills}
              </span>
            )}
          </div>
        </div>

        {/* HOVER VIEW CONTENT (LAYER 2) - Fades in on hover */}
        <div
          className={`absolute inset-x-0 px-[7%] pb-[8%] pt-[15px] rounded-t-md transition-opacity duration-300 ease-out ${
            isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{
            top: "-45px",
            bottom: "0",
            backgroundColor: "rgba(255,255,255,0.98)",
          }}
        >
          {/* Description */}
          <p className="text-[14px] leading-[22px] text-[#231F20] font-normal line-clamp-6 w-full pr-2">
            {profile.description}
          </p>

          {/* View Detail Button */}
          <button
            className="absolute bottom-[8%] left-[7%] text-[#0097AC] font-medium text-[16px] flex items-center gap-2 transition-all duration-300 ease-out focus:outline-none hover:gap-3"
            onClick={(e) => {
              // prevent click from bubbling to the card's container
              e.stopPropagation();
              onViewDetail?.();
            }}
            type="button"
          >
            <span className="whitespace-nowrap">View in Detail</span>
            <span className="text-[18px] leading-none">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
