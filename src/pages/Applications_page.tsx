import React, { useState } from "react";
// NavigationBar is provided by the top-level Navbar wrapper when pages are rendered via the navbar
import FilterTab from "../components/ui/FilterTab";
import StatusTabs from "../components/ui/StatusTabs";
import { ApplicationsTable } from "../components/ApplicationsTable";
import RightSideProfileCards from "../components/RightSideProfileCards";
import { mockApplications } from "../data/ApplicationsMockdata";

const ApplicationsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [view, setView] = useState<"table" | "kanban">("table");

  return (
    <div className="min-h-screen bg-[#F2F7F8]">
      {/* Page content assumes the top-level Navbar is rendered separately */}

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
              <ApplicationsTable applications={mockApplications} />
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
