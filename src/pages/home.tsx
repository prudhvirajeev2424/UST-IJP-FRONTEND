import React from "react";
import { useActiveRole } from "../context/ActiveRoleContext";

import ProfileCard from "../components/TP_Manager/home/ProfileCard";
import ApplicationStatus from "../components/TP_Manager/home/ApplicationStatus";
import RecentActivities from "../components/TP_Manager/home/RecentActivities";
import type { Profile } from "../types";
import { profiles } from "../data/TPManagerProfileCardandListViewMockData";
import ProfilesReceived from "../components/TP_Manager/home/ProfilesReceived";

const sampleProfiles: Profile[] = profiles;

const TpManagerHome: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 pt-6 pb-8 scrollbar-hide overflow-auto">
      <div className="max-w-7xl mx-auto w-full px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left: Application status */}
          <aside className="lg:col-span-1 order-2 lg:order-1">
            <ApplicationStatus />
          </aside>

          {/* Center: profile cards / profiles received */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <ProfilesReceived />
          </div>

          {/* Right: recent activities */}
          <aside className="lg:col-span-1 order-3 lg:order-3">
            <RecentActivities />
          </aside>
        </div>
      </div>
    </div>
  );
};

const home: React.FC = () => {
  const { activeRole } = useActiveRole();
  // default to TP Manager view
  return <TpManagerHome />;
};

export default home;
