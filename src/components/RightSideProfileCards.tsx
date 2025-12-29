import React from "react";
import ProfileCard from "./ProfileCard";
import { mockProfiles } from "../data/profiles";

/**
 * RightSideProfileCards
 * The kanban-style grid of profile cards. Now uses pure CSS responsive design
 * with container-based breakpoints that work at all zoom levels.
 *
 * Grid automatically adjusts from 1 to 4 columns based on available space.
 */
const RightSideProfileCards: React.FC = () => {
  return (
    <main className="flex-1 bg-[#F2F7F8] w-full">
      <div className="pb-8 px-0 w-full">
        {/* 
          Responsive grid using auto-fit and minmax
          - Automatically adjusts columns based on container width
          - Cards resize between 280px and 320px
          - Works at all zoom levels
          - No JavaScript needed
        */}
        <div 
          className="grid gap-4 sm:gap-5 w-full"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
            justifyItems: 'center',
          }}
        >
          {mockProfiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default RightSideProfileCards;