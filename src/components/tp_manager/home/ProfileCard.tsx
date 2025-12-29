import React from "react";
import ScoreBadge from "../../common/ScoreBadge/ScoreBadge";
import type { Profile } from "../../../types/ApplicationProfile";

const ProfileCard: React.FC<{ profile: Profile }> = ({ profile }) => {
  return (
    <div className="relative w-full cursor-pointer rounded-xl border border-gray-200 bg-white p-4">
      {/* ---------- HEADER ---------- */}
      <div className="mb-2 flex items-start justify-between">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-300 to-orange-400 text-sm font-semibold text-white">
            {profile.avatar}
          </div>

          {/* Info */}
          <div>
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
          <ScoreBadge score={profile.score} />
        </div>
      </div>

      {/* ---------- ID ---------- */}
      <div className="mb-2 mt-1 text-[14px] font-semibold text-teal-500">
        {profile.id}
      </div>

      {/* ---------- STATUS ---------- */}
      <div className="mb-3 inline-flex items-center rounded bg-[#F2F7F8] px-3 py-1 text-[11px] font-medium text-[#0097AC]">
        {profile.status}
      </div>

      {/* ---------- SKILLS ---------- */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {profile.skills.map((skill, i) => {
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
  );
};

export default ProfileCard;
