import React, { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import FilterTab from "./components/ui/FilterTab";
import { ApplicationsTable } from "./components/ApplicationsTable";
import TopControls from "./components/TopControls";
import { mockApplications } from "./data/profiles";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="min-h-screen bg-[#F2F7F8]">
      {/* Top Navigation Bar */}
      <NavigationBar />

      {/* Main Content Layout */}
      {/* Top controls row (Profiles heading on the left, tabs centered, actions right) */}
      <TopControls activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex px-8 items-stretch">
        {/* Left Sidebar - Filters (add left padding via wrapper) */}
        <div className="pr-8 pl-6 self-stretch">
          <FilterTab />
        </div>

        {/* Main Content Area - keep top padding parallel to FilterTab */}
        <div className="flex-1 pt-0 self-stretch">
          {/* (Status tabs are rendered in the top controls so all header items sit on one line) */}

          {/* Applications Table */}
          <div className="bg-white rounded-lg shadow-sm">
            <ApplicationsTable applications={mockApplications} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
