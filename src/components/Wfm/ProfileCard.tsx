q
// components/ProfileCard.tsx
import React, { useState } from "react";
import { useActiveRole } from "../../context/ActiveRoleContext";
import { MapPin, ArrowRight } from "lucide-react";
import DP from "../../assets/DP.png";
import type { Profile } from "../../types";
import type { WfmProfile } from "../../data/wfmProfiles";

/**
 * ProfileCard
 * Small, focused card used in the Kanban/grid view. It implements a hover
 * reveal layer which shows additional details and a "View in Detail" CTA.
 *
 * Keep this component self-contained to ease reuse in other list/grid views.
 */
type CardProfile = Profile | WfmProfile;

interface ProfileCardProps {
  profile: CardProfile;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { activeRole } = useActiveRole();

  // No per-profile avatar: we always show project DP.png — if avatars are
  // introduced later, replace DP import with profile.avatar.

  return (
    <div
      className={`group relative w-[320px] h-[294px] rounded-[10px] overflow-hidden font-rubik flex flex-col cursor-pointer transition-all duration-300 ease-out ${
        isHovered ? "bg-[#6B6B6B]" : "bg-white"
      } focus:outline-none`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        if (activeRole === "WFM") {
          // dispatch navigation event for navbar to pick up
          const detail = { page: "Applications", variant: "TP" };
          window.dispatchEvent(new CustomEvent("navigate", { detail }));
          // also set a hash for direct linking
          window.location.hash = "#Applications:TP";
        }
      }}
    >
      {/* HEADER SECTION - Always visible with smooth transition */}
      <div
        className={`px-[25px] pt-[25px] pb-[15px] transition-colors duration-300 ease-out ${
          isHovered ? "bg-[#6B6B6B]" : "bg-white"
        }`}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div
              className={`w-12 h-12 rounded-md flex-shrink-0 overflow-hidden bg-transparent ${
                isHovered ? "opacity-40 pointer-events-none" : "opacity-100"
              } transition-opacity duration-300 ease-out`}
            >
              {/* Always use DP.png from assets for all profile images */}
              <img
                src={
                  (profile as Profile).imageUrl ??
                  (profile as WfmProfile).avatar ??
                  DP
                }
                alt={`${profile.name} profile photo`}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-[14px] font-normal text-[#231F20] mb-1">
                {profile.name}
              </h4>
              <p className="text-[12px] text-[#7A7480] leading-tight">
                {/* support both `position` (Profile) and `role` (WfmProfile) */}
                {(profile as Profile).position ?? (profile as WfmProfile).role}
              </p>
              <p className="text-[11px] leading-[13px] text-[#7A7480] font-normal mt-1">
                {profile.uid}
              </p>
            </div>
          </div>
          <div className="flex-shrink-0">
            {/* Fitment pill: 52x29, 20px radius, 1px border, color varies by fitment */}
            {(() => {
              const fit =
                (profile as Profile).fitment ??
                (profile as WfmProfile).matchScore ??
                0;
              let color = "#FC6A59"; // default red
              if (fit > 75) color = "#01B27C"; // green
              else if (fit >= 50) color = "#D97706"; // amber

              return (
                <div
                  style={{
                    width: "52px",
                    height: "29px",
                    border: `1px solid ${color}`,
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: color,
                    backgroundColor: "transparent",
                    transition: "all 0.3s ease-out",
                  }}
                >
                  <span className="text-[12px] font-normal">{fit}%</span>
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
          className={`absolute inset-0 px-[25px] pb-[25px] transition-opacity duration-300 ease-out ${
            isHovered ? "opacity-20 pointer-events-none" : "opacity-100"
          }`}
        >
          {/* SO ID */}
          <p className="text-[14px] font-normal text-[#006E74] mb-1">
            {/* support soId (Profile) and soNumber (WfmProfile) */}
            {(profile as Profile).soId ?? (profile as WfmProfile).soNumber}
          </p>

          {/* Status - shown inside a pill per design (color varies by status) */}
          <div className="pt-2 mb-4">
            {(() => {
              const raw =
                (profile as Profile).status ??
                (profile as WfmProfile).status ??
                "";

              const getStatusClasses = (status: string) => {
                switch (status) {
                  case "Pending":
                    return "bg-purple-100 text-purple-600 border-none px-3 py-1";
                  case "Rejected":
                    return "bg-red-100 text-red-500 border-none px-3 py-1";
                  case "Allocated":
                    return "bg-cyan-50 text-cyan-500 border-none px-3 py-1";
                  case "Interviewing":
                    return "bg-yellow-100 text-yellow-600 border-none px-3 py-1";
                  default:
                    return "bg-gray-100 text-gray-600 border-none px-3 py-1";
                }
              };

              const classes = getStatusClasses(String(raw));

              return (
                <div
                  className={`flex items-center justify-center text-[14px] font-normal ${classes}`}
                  style={{ width: "73px", height: "29px", borderRadius: "4px" }}
                >
                  {raw}
                </div>
              );
            })()}
          </div>

          {/* map / location - placed below status */}
          <div className="flex items-center gap-2 text-gray-400 mt-2">
            <MapPin className="h-4 w-4" />
            <span className="text-xs font-semibold">
              {(profile as WfmProfile).location ?? ""}
            </span>
          </div>

          {/* Skills - placed directly after status (not absolute) */}
          <div className="mt-2 flex items-center gap-2 flex-wrap">
            {(profile as Profile).skills?.map((skill: string) => (
              <span
                key={skill}
                className="bg-[#F6F3E8] px-[12px] py-[4px] rounded-full text-[14px] text-[#231F20]"
              >
                {skill}
              </span>
            ))}
            {((profile as Profile).additionalSkills ?? 0) > 0 && (
              <span className="border border-[#7A7480] px-[8px] py-[3px] rounded-full text-[14px] text-[#7A7480] bg-transparent">
                +{(profile as Profile).additionalSkills}
              </span>
            )}
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-[#231f20]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end z-10">
          <div className="bg-white p-6 rounded-t-[10px] shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-[11px] leading-relaxed text-gray-600 mb-4">
              {(profile as Profile).description ??
                (profile as WfmProfile).summary}
            </p>
            <button className="flex items-center justify-between text-[11px] font-semibold text-cyan-500 hover:text-cyan-600 transition-colors py-2 border-t border-gray-100 w-full text-left">
              <span>Choose what to do with this profile</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      <div className="px-5 py-4 border-t border-gray-100 bg-white">
        <p className="text-[11px] text-red-400 font-bold italic">
          Last updated: {(profile as WfmProfile).lastUpdated ?? ""}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
