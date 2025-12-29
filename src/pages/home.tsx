import React from "react";
import { useActiveRole } from "../context/ActiveRoleContext";
// import EmpHome from "./layout/EmpHome";
// import WfmHome from "./layout/WfmHome";
import ApplicationStatus from "../components/TP_Manager/home/ApplicationStatus";
import RecentActivities from "../components/TP_Manager/home/RecentActivities";
import ProfilesReceived from "../components/TP_Manager/home/ProfilesReceived";

const TpManagerHome: React.FC = () => {
  return (
    <div className="w-[1920px] h-[1080px] bg-[#F2F7F8] mx-auto overflow-auto">
      {/* Full-width pale dashboard band (inside the fixed-size home) */}
      <div className="w-full px-6 py-6 h-full">
        <div className="bg-[#f3f8f8] rounded-2xl p-8 w-full relative h-full">
          {/* Center the inner content to a comfortable max width while letting the pale band span the home container */}
          <div className="max-w-[1920px] mx-auto relative h-full">
            {/* ApplicationStatus positioned slightly left of the centered container (adjacent to logo) */}
            <div className="hidden lg:block absolute -left-6 top-8 z-10">
              <ApplicationStatus />
            </div>

            {/* RecentActivities positioned slightly right of the centered container (adjacent to profile) */}
            <div className="hidden lg:block absolute -right-6 top-8 z-10">
              <RecentActivities />
            </div>

            <div className="grid grid-cols-1 gap-y-6 items-start lg:ml-[320px] lg:mr-[320px] h-full">
              {/* Center: profile cards / profiles received (full width) */}
              <div className="order-1 lg:order-1">
                <ProfilesReceived />
              </div>
            </div>
          </div>
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
