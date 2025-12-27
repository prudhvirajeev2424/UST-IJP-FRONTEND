import React, { useState, useEffect, useRef } from "react";
import NavigationBar from "../components/navbar";
import FilterTab from "../components/ui/FilterTab";
import StatusTabs from "../components/ui/StatusTabs";
import { ApplicationsTable } from "../components/ApplicationsTable";
import RightSideProfileCards from "../components/RightSideProfileCards";
import { mockApplications } from "../data/profiles";

const ApplicationsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [view, setView] = useState<"table" | "kanban">("table");
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
    <div className="min-h-screen bg-[#F2F7F8]">
      <NavigationBar />

      <StatusTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onViewChange={setView}
        view={view}
      />

      <div className="flex flex-col md:flex-row px-4 md:px-8 items-start md:items-stretch gap-12">
        <div className="w-full md:w-[420px] pr-0 md:pr-8 pl-0 md:pl-6">
          <FilterTab />
        </div>

        <div className="flex-1 pt-0 self-stretch w-full">
          <div className="bg-white rounded-lg shadow-sm w-full overflow-x-visible">
            {view === "table" ? (
              // Only enable the constrained scrollable area when the viewport height
              // drops below 75% of the initial mount height (user zoomed in / small viewport).
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
      </div>
    </div>
  );
};

export default ApplicationsPage;
