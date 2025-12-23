import React from "react";
// StatusTabs moved to the main content area so tabs align with the table start
import { ArrowLeft } from "lucide-react";
import { FunnelIcon, GridIcon, Bars3Icon } from "./Icons";
import { StatusTabs } from "./ui/StatusTabs";
import IconsSvg from "../assets/Icons.svg";

interface TopControlsProps {
  activeTab: string;
  setActiveTab: (t: string) => void;
}

export const TopControls: React.FC<TopControlsProps> = ({
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className="px-8 py-2">
      <div className="grid grid-cols-[360px_1fr_auto] items-center gap-6 mb-0">
        {/* Left: Profiles heading (aligned above the FilterTab) */}
        <div className="flex items-center gap-3">
          <ArrowLeft className="w-5 h-5 text-[#7A7480]" />
          <span className="text-[16px] font-medium text-[#231F20]">
            Profiles
          </span>
        </div>

        {/* Center: Status Filter Tabs (aligned to table start) */}
        <div className="flex items-center justify-start pl-10">
          <StatusTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-4 justify-end">
          {/* Search Input */}
          <div>
            <input
              type="text"
              placeholder="Search"
              className="w-[320px] h-[40px] pl-4 pr-4 border border-[#D7E0E3] rounded-lg text-[14px] text-[#231F20] placeholder-[#C2BCBE] focus:outline-none focus:border-[#0097AC] transition-colors bg-white"
            />
          </div>

          {/* Filter Button */}
          <button
            className="w-[40px] h-[40px] flex items-center justify-center border border-[#D7E0E3] rounded-lg hover:border-[#0097AC] transition-colors text-[#7A7480] bg-white"
            aria-label="Filter"
          >
            <FunnelIcon />
          </button>

          {/* Excel Export Button (slightly larger) */}

          {/* Assets icon (left of Kanban/Grid icon) */}
          <div className="inline-flex items-center">
            <button className="w-[48px] h-[48px] flex items-center justify-center">
              <img
                src={"src/assets/arrow.png"}
                alt="export"
                className="w-[48px] h-[48px] object-contain"
              />
            </button>
            <button className="w-[48px] h-[48px] flex items-center justify-center">
              <img
                src={"src/assets/Icons.svg"}
                alt="export"
                className="w-[48px] h-[48px] object-contain"
              />
            </button>
          </div>

          {/* Attached View Toggle: Kanban (Grid) + List */}
          <div className="inline-flex items-center ml-3">
            <button
              className="inline-flex items-center justify-center w-[40px] h-[40px] border border-[#D7E0E3] rounded-l-lg bg-white text-[#7A7480] hover:border-[#0097AC] transition-colors"
              aria-label="Kanban View"
            >
              <GridIcon />
            </button>
            <button
              className="inline-flex items-center justify-center w-[40px] h-[40px] border border-[#D7E0E3] border-l-0 rounded-r-lg bg-white text-[#7A7480] hover:border-[#0097AC] transition-colors -ml-px"
              aria-label="List View"
            >
              <Bars3Icon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopControls;
