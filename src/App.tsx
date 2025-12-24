import React, { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import FilterTab from "./components/ui/FilterTab";
import { ApplicationsTable } from "./components/ApplicationsTable";
import StatusTabs from "./components/ui/StatusTabs";
import { mockApplications } from "./data/profiles";
import RightSideProfileCards from "./components/RightSideProfileCards";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [view, setView] = useState<"table" | "kanban">("table");

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
        {/* Left Sidebar - Filters (stack on small screens) */}
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

export default App;
