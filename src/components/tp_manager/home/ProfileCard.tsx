import React from "react";
import ScoreBadge from "../../common/ScoreBadge/ScoreBadge";
import type { Profile } from "../../../types";
import avatarImg from "../../../assets/DP_2@2x.jpg";

const ProfileCard: React.FC<{ profile: Profile }> = ({ profile }) => {
  return (
    <div className="relative w-full cursor-pointer rounded-xl border border-gray-200 bg-white overflow-hidden box-border h-64">
      <div className="p-3 flex flex-col justify-between h-full box-border">
        {/* ---------- HEADER ---------- */}
        <div className="mb-2 flex items-start justify-between">
          <div className="flex items-center gap-3 min-w-0">
            {/* Avatar image: square with rounded corners */}
            <div className="flex items-center justify-center">
              <img
                src={avatarImg}
                alt={`${profile.name} avatar`}
                className="h-12 w-12 rounded-lg object-cover"
              />
            </div>

            {/* Info */}
            <div className="min-w-0">
              <div className="mb-[2px] text-[14px] font-semibold text-gray-900">
                {profile.name}
              </div>
              <div className="mb-[1px] text-[12px] text-gray-500">
                {profile.developer}
              </div>
              <div className="text-[11px] text-gray-400">{profile.uid}</div>
            </div>
          </div>

          {/* Score */}
          <div className="shrink-0 ml-2">
            <ScoreBadge score={profile.score ?? 0} />
          </div>
        </div>

        {/* ---------- ID ---------- */}
        <div className="mb-2 mt-1 text-[14px] font-semibold text-teal-500">
          {profile.id}
        </div>

        {/* ---------- STATUS (badge) ---------- */}
        <div className="mb-3">
          <span
            className={
              `inline-flex items-center rounded-lg px-3 py-1 text-[11px] font-medium ` +
              (profile.status === "Allocated"
                ? "bg-teal-50 text-teal-600"
                : profile.status === "Rejected"
                ? "bg-red-50 text-red-600"
                : "bg-gray-50 text-gray-600")
            }
          >
            {profile.status}
          </span>
        </div>

        {/* ---------- SKILLS ---------- */}
        <div className="mt-3 flex flex-wrap items-center gap-2 max-w-full">
          {(profile.skills ?? []).map((skill, i) => {
            const isCount = skill.startsWith("+");

            return isCount ? (
              // +2 → outlined pill (no background)
              <span
                key={i}
                className="rounded-xl border border-gray-300 px-3 py-1 text-[11px] font-medium text-gray-500 bg-transparent"
              >
                {skill}
              </span>
            ) : (
              // Normal skill → filled pill
              <span
                key={i}
                className="rounded-xl bg-gray-100 px-3 py-1 text-[11px] text-gray-700"
              >
                {skill}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
