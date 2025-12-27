// components/RightSideProfileCards.tsx
import React from "react";
import ProfileCard from "./ProfileCard";
import { mockProfiles } from "../data/ApplicationsMockdata";

const RightSideProfileCards: React.FC = () => {
  return (
    <main className="flex-1 bg-[#F2F7F8] overflow-y-auto">
      <div className="pb-8">
        {/* Profile Cards Grid - with proper spacing to prevent overlap */}
        <div className="grid grid-cols-[repeat(4,1fr)] gap-2">
          {mockProfiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default RightSideProfileCards;
