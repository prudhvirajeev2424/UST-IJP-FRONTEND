import React from "react";
import ProfileCard from "../components/tp_manager/home/ProfileCard";
import type { Profile } from "../types";
import { profiles } from "../data/profiles";

const sampleProfiles: Profile[] = profiles;
const Home: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 pt-6 pb-8">
      <div className="max-w-7xl mx-auto w-full px-4">
        <h2 className="mb-4 text-lg font-semibold">TP Manager — Home</h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {sampleProfiles.map((p) => (
            <ProfileCard key={p.id} profile={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
