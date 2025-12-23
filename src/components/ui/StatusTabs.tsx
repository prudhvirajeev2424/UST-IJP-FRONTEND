import React from "react";

interface StatusTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const StatusTabs: React.FC<StatusTabsProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const tabs = ["All", "Pending Action", "Accepted", "Rejected"];

  return (
    <div className="flex items-center gap-6">
      {tabs.map((tab) => {
        const isAll = tab === "All";
        // Use #D7E0E3 for Pending Action, Accepted, Rejected when inactive
        const inactiveBg = isAll ? "#E8EDEF" : "#D7E0E3";
        const bgColor = activeTab === tab ? "#003C51" : inactiveBg;

        return (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`transition-all text-[14px] font-semibold ${
              isAll
                ? "w-10 h-10 flex items-center justify-center rounded-full"
                : "px-8 py-3 rounded-full"
            } ${activeTab === tab ? "text-white shadow-sm" : "text-[#7A7480]"}`}
            style={{
              backgroundColor: bgColor,
            }}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};
