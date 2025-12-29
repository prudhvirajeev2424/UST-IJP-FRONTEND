import { useState } from "react";
import { LayoutGrid, List } from "lucide-react";
import ProfileCard from "../ProfileCard";
import { ProfileListView } from "./ProfileListView";
import { wfmProfiles } from "../../../data/wfmProfiles";
import excelIcon from "../../../assets/excelicon.png";

export default function ProfilesReceivedSection() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");

  return (
    <section className="w-1000px">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">Profiles Received</h2>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text-[12px] font-semibold text-gray-500 whitespace-nowrap">
              Show profiles which need action
            </span>
            <div className="relative inline-flex items-center cursor-pointer bg-[#00b894] rounded-full w-14 h-[24px] px-1.5 shadow-sm">
              <span className="text-[11px] font-bold text-white text-center w-[22px] h-[14px] font-['Rubik',sans-serif]">
                YES
              </span>
              <div className="absolute right-1 top-[2.5px] w-[19px] h-[19px] bg-white rounded-full shadow-md"></div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-white p-1 rounded-md shadow-sm border border-gray-100 flex items-center justify-center w-[44px] h-[44px]">
              <button className="hover:bg-gray-50 rounded-md transition-colors border-none bg-transparent flex items-center justify-center">
                <img
                  src={excelIcon}
                  alt="Export to Excel"
                  className="h-9 w-9"
                />
              </button>
            </div>

            <div className="flex items-center bg-white rounded-md shadow-sm border border-gray-100 divide-x divide-gray-100">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2.5 transition-colors ${
                  viewMode === "grid"
                    ? "text-gray-800 bg-gray-50/50"
                    : "text-gray-300 hover:text-gray-500"
                }`}
              >
                <LayoutGrid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2.5 transition-colors ${
                  viewMode === "list"
                    ? "text-gray-800 bg-gray-50/50"
                    : "text-gray-300 hover:text-gray-500"
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content View with Transition */}
      <div key={viewMode} className="animate-view-change">
        {viewMode === "list" ? (
          <ProfileListView profiles={wfmProfiles} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wfmProfiles.map((profile) => (
              <ProfileCard key={profile.id} profile={profile} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
