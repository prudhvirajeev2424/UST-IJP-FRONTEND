import React from "react";
import ProfileCard from "../components/tp_manager/home/ProfileCard";
import ApplicationStatus from "../components/tp_manager/home/ApplicationStatus";
import type { Profile } from "../types";
import { profiles } from "../data/profiles";

const sampleProfiles: Profile[] = profiles;
const Home: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 pt-6 pb-8 scrollbar-hide overflow-auto">
      <div className="max-w-7xl mx-auto w-full px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Application status on the left for large screens; on small screens it appears after profiles */}
          <aside className="lg:col-span-1 order-2 lg:order-1">
            <ApplicationStatus />
          </aside>

          <div className="lg:col-span-3 order-1 lg:order-2 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {sampleProfiles.map((p) => (
              <ProfileCard key={p.id} profile={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
