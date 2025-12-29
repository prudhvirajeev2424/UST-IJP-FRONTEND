import React, { useState } from "react";
import { List } from "lucide-react";
import ProfileCard from "./ProfileCard";
import Toggle from "../../common/Toggle/Toggle";
import { mockProfiles } from "../../../data/profiles";
import type { Profile } from "../../../types";

/* ---------- Feather Grid Icon ---------- */
const FeatherGridIcon = ({ active }: { active: boolean }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke={active ? "#0097AC" : "#6b7280"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
  </svg>
);

const ProfilesReceived: React.FC = () => {
  const [showActionNeeded, setShowActionNeeded] = useState(true);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="flex-1 rounded-2xl bg-white/10 backdrop-blur-sm border border-gray-200/10 p-6">
      {/* ---------- HEADER ---------- */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">
          Profiles Received
        </h2>

        <div className="flex items-center gap-4">
          <p className="text-sm">Show profiles which need action</p>

          {/* Toggle (shared component) */}
          <Toggle
            value={showActionNeeded}
            onToggle={() => setShowActionNeeded(!showActionNeeded)}
          />

          {/* GRID / LIST TOGGLE */}
          <div className="flex overflow-hidden rounded-lg border border-gray-200">
            <button
              onClick={() => setViewMode("grid")}
              className={`px-3 py-1.5 transition ${
                viewMode === "grid" ? "bg-[#e6f7fa]" : "bg-white"
              }`}
              aria-pressed={viewMode === "grid"}
            >
              <FeatherGridIcon active={viewMode === "grid"} />
            </button>

            <button
              onClick={() => setViewMode("list")}
              className={`px-3 py-1.5 transition ${
                viewMode === "list" ? "bg-[#e6f7fa]" : "bg-white"
              }`}
              aria-pressed={viewMode === "list"}
            >
              <List
                size={20}
                className={
                  viewMode === "list" ? "text-[#0097AC]" : "text-gray-500"
                }
              />
            </button>
          </div>
        </div>
      </div>

      {/* ---------- CONTENT ---------- */}
      {viewMode === "grid" ? (
        // 1 column mobile, 2 columns small screens, 3 columns on large screens to ensure three cards per row
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProfiles.map((profile: Profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {mockProfiles.map((profile: Profile) => (
            <div key={profile.id} className="rounded-lg bg-white p-4 shadow-sm">
              <strong className="text-gray-900">{profile.name}</strong>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfilesReceived;
