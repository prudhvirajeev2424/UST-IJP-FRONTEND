import React from "react";
import { useActiveRole } from "../context/ActiveRoleContext";
import EmpHome from "./layout/EmpHome";
import WfmHome from "./layout/WfmHome";
import ApplicationStatus from "../components/tp_manager/home/ApplicationStatus";
import RecentActivities from "../components/tp_manager/home/RecentActivities";
import ProfilesReceived from "../components/tp_manager/home/ProfilesReceived";

const TpManagerHome: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 pt-6 pb-8 scrollbar-hide overflow-auto">
      {/* Full-width pale dashboard band */}
      <div className="w-full px-6">
        <div className="bg-[#f3f8f8] rounded-2xl p-8 w-full relative">
          {/* Center the inner content to a comfortable max width while letting the pale band span the viewport */}
          <div className="max-w-8xl mx-auto relative">
            {/* ApplicationStatus positioned slightly left of the centered container (adjacent to logo) */}
            <div className="hidden lg:block absolute -left-6 top-8 z-10">
              <ApplicationStatus />
            </div>

            {/* RecentActivities positioned slightly right of the centered container (adjacent to profile) */}
            <div className="hidden lg:block absolute -right-6 top-8 z-10">
              <RecentActivities />
            </div>

            <div className="grid grid-cols-1 gap-y-6 items-start lg:ml-[320px] lg:mr-[320px]">
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

  if (activeRole === "Employee") return <EmpHome />;
  if (activeRole === "WFM") return <WfmHome />;
  // default to TP Manager view
  return <TpManagerHome />;
};

export default home;
