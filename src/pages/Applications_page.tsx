import React, { useState } from "react";

import NavigationBar from "../components/navbar";

import FilterTab from "../components/ui/FilterTab";

import StatusTabs from "../components/ui/StatusTabs";

import { ApplicationsTable } from "../components/ApplicationsTable";

import RightSideProfileCards from "../components/RightSideProfileCards";

import { mockApplications } from "../data/TPManagerProfileCardandListViewMockData";

// ApplicationsPage: composes Navbar, StatusTabs, FilterTab and table/kanban content

const ApplicationsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("All");

  // default to kanban so clicking Applications shows Kanban view first

  const [view, setView] = useState<"table" | "kanban">("kanban");

  return (
    <div className="min-h-screen bg-[#F2F7F8]">
      {/* Page content assumes the top-level Navbar is rendered separately */}

      <StatusTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onViewChange={setView}
        view={view}
      />

      {/* Match the exact same layout structure as StatusTabs */}
      <div className="flex flex-col md:flex-row px-4 md:px-8 items-start gap-6 lg:gap-12">
        {/* Left Filter Panel - Exact same width as StatusTabs left column */}
        <div className="w-full md:w-[380px] xl:w-[420px] flex-shrink-0">
          <FilterTab />
        </div>

        {/* Right Content Area - Exact same flex behavior as StatusTabs right column */}
        <div className="flex-1 w-full min-w-0">
          <div className="bg-white rounded-lg shadow-sm w-full overflow-hidden">
            {view === "table" ? (
              // Table view: constrain scrolling only on small viewports.

              // At wider viewports (md and up) show full table without internal scroll
              <div className="w-full max-h-[calc(100vh-220px)] overflow-auto md:max-h-none md:overflow-visible">
                <ApplicationsTable applications={mockApplications} />
              </div>
            ) : (
              // Kanban view - fully responsive grid
              <RightSideProfileCards />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationsPage;
