<<<<<<< HEAD
import React from "react";
import ScoreBadge from "../../common/ScoreBadge/ScoreBadge";
import type { Profile } from "../../../types/ApplicationProfile";
=======
import { useState } from "react";
import type { Profile } from "../../../types";
import ScoreBadge from "../../common/ScoreBadge/ScoreBadge";
import ProfilePic from "../../../assets/DP_2@2x.jpg";

const ProfileCard = ({ profile }: { profile: Profile }) => {
  const [hovered, setHovered] = useState(false);
>>>>>>> 21c8a8c8503f8470c2998185674060585c247ffd

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative h-[240px] w-[260px] cursor-pointer rounded-xl border border-gray-200 bg-white p-4"
    >
      {/* ---------- HEADER ---------- */}
      <div className="mb-2 flex items-start justify-between">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="h-10 w-10 rounded-lg overflow-hidden bg-gray-200">
            <img
              src={ProfilePic}
              alt="Profile"
              className="h-full w-full object-cover rounded-lg"
            />
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
        <ScoreBadge score={profile.score} />
      </div>

      {/* ---------- ID ---------- */}
      <div className="mb-2 mt-1 text-[14px] font-semibold text-teal-500">
        {profile.id}
      </div>

      {/* ---------- STATUS ---------- */}
      <div className="mb-3 inline-block rounded bg-[#F2F7F8] px-3 py-1 text-[11px] font-medium text-[#0097AC]">
        {profile.status}
      </div>

      {/* ---------- SKILLS ---------- */}
      <div className="flex flex-wrap items-center gap-2">
        {profile.skills.map((skill, i) => {
          const isCount = skill.startsWith("+");

          return isCount ? (
            // +2 → outlined pill (no background)
            <span
              key={i}
              className="
                rounded-xl
                border border-gray-300
                px-3 py-1
                text-[11px]
                font-medium
                text-gray-500
                bg-transparent
              "
            >
              {skill}
            </span>
          ) : (
            // Normal skill → filled pill
            <span
              key={i}
              className="
                rounded-xl
                bg-gray-100
                px-3 py-1
                text-[11px]
                text-gray-700
              "
            >
              {skill}
            </span>
          );
        })}
      </div>

      {/* Hover visuals: overlay (top) and bottom panel */}
      <div
        className={`absolute inset-x-0 top-0 h-1/2 rounded-t-xl bg-gray-600/60 pointer-events-none transition-all duration-300 ease-out ${
          hovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
      />

      <div
        className={`absolute left-0 right-0 bottom-0 mx-0 w-full bg-white p-4 rounded-b-xl shadow-lg transition-all duration-300 ease-out ${
          hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
        style={{ height: "140px" }}
      >
        {profile.description ? (
          <p className="mb-3 text-sm text-gray-700">{profile.description}</p>
        ) : null}
        <p className="mb-2 text-sm text-gray-700">
          Highly skilled Java Developer with expertise in designing, developing,
          and maintaining robust Java applications.
        </p>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.dispatchEvent(
              new CustomEvent("navigate", {
                detail: {
                  view: "Applications",
                  source: "card",
                  profileId: profile.id,
                },
              })
            );
          }}
          className="inline-flex items-center text-sm font-medium text-teal-600"
        >
          View in Detail →
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
