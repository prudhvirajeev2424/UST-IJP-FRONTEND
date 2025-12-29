import React, { useState, useEffect, useRef } from "react";
import FilterTab from "../components/ui/FilterTab";
import StatusTabs from "../components/ui/StatusTabs";
import { ApplicationsTable } from "../components/ApplicationsTable";
import RightSideProfileCards from "../components/Wfm/RightSideProfileCards";
import RecentActivities from "../components/Wfm/Home/RecentActivities";
import { mockApplications } from "../data/profiles";

/**
 * ApplicationsPage
 * Parent page that composes NavigationBar, StatusTabs, the left FilterTab,
 * and the right content area which can be either a List (table) or Kanban
 * (profile cards). The view toggle is lifted here and passed into
 * StatusTabs via onViewChange.
 */
const ApplicationsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("All");
  // default to kanban so clicking Applications shows Kanban view first
  const [view, setView] = useState<"table" | "kanban">("kanban");
  const [isCompact, setIsCompact] = useState<boolean>(false);
  const initialHeightRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // store the initial viewport height on first mount
    if (!initialHeightRef.current)
      initialHeightRef.current = window.innerHeight;

    const checkCompact = () => {
      const initial = initialHeightRef.current || window.innerHeight;
      // compact when current height is less than 75% of initial
      setIsCompact(window.innerHeight < initial * 0.75);
    };

    // run once and on resize/orientation change
    checkCompact();
    window.addEventListener("resize", checkCompact);
    window.addEventListener("orientationchange", checkCompact);

    return () => {
      window.removeEventListener("resize", checkCompact);
      window.removeEventListener("orientationchange", checkCompact);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-[1800px] mx-auto p-6">
        <div className="grid grid-cols-12">
          {/* Left: Filter */}
          <div className="col-span-1">
            <div className="flex flex-col">
              <div className="bg-white rounded-lg shadow-sm p-4">
                <FilterTab />
              </div>
            </div>
          </div>

          {/* Middle: Applications content */}
          <div className="col-span-10 min-w-0">
            <div className="mb-6">
              <StatusTabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                onViewChange={setView}
                view={view}
              />
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
                <RightSideProfileCards />
              )}
            </div>
          </div>

          {/* Right: Recent activities / cards */}
          <div className="col-span-1">
            <div className="flex flex-col">
              <div className="bg-white rounded-lg shadow-sm p-4">
                <RecentActivities />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ApplicationsPage;
