import React, { useState, useEffect, useRef } from "react";
import FilterTab from "../../components/ui/FilterTab";
import StatusTabs from "../../components/ui/StatusTabs";
import { ApplicationsTable } from "../../components/ApplicationsTable";
import { ProfileCard } from "../../components/Wfm/Home/ProfileCard";
import { wfmProfiles } from "../../data/wfmProfiles";
import { mockApplications } from "../../data/profiles";

/**
 * WfmApplications
 * Renders the applications view for WFM with a 3-column layout:
 * - Left: FilterTab (fixed width card)
 * - Center: StatusTabs + either table or kanban (ProfileCard grid)
 * - Right: RecentActivities
 */
const WfmApplications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [view, setView] = useState<"table" | "kanban">("kanban");
  const [isCompact, setIsCompact] = useState<boolean>(false);
  const initialHeightRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!initialHeightRef.current)
      initialHeightRef.current = window.innerHeight;

    const checkCompact = () => {
      const initial = initialHeightRef.current || window.innerHeight;
      setIsCompact(window.innerHeight < initial * 0.75);
    };

    checkCompact();
    window.addEventListener("resize", checkCompact);
    window.addEventListener("orientationchange", checkCompact);
    return () => {
      window.removeEventListener("resize", checkCompact);
      window.removeEventListener("orientationchange", checkCompact);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F2F7F8]">
      <main className="max-w-[1800px] mx-auto p-6">
        <div className="grid grid-cols-12 gap-6">
          
          <div className="col-span-12 min-w-0">
            <div className="mb-6">
              <StatusTabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                onViewChange={setView}
                view={view}
              />
            </div>
            <div className="col-span-3">
            <FilterTab />
          </div>

            <div className="bg-white rounded-lg shadow-sm w-full overflow-x-visible p-4">
              {view === "table" ? (
                <div
                  className={`w-full ${
                    isCompact ? "max-h-[calc(100vh-220px)] overflow-y-auto" : ""
                  }`}
                >
                  <ApplicationsTable applications={mockApplications} />
                </div>
              ) : (
                <div className="pb-8 px-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-start auto-rows-[340px]">
                    {wfmProfiles.map((p) => (
                      <div key={p.id} className="w-[320px]">
                        <ProfileCard profile={p} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WfmApplications;
