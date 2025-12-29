// components/LeftSidebar.tsx
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * FilterTab
 * Left-side filter panel used on the Applications page. It contains a date
 * selector, location dropdown placeholder, a fitment slider, and other
 * collapsible filter buttons. Currently these are visual controls; hook them
 * into state/queries as needed for filtering behavior.
 */
const FilterTab: React.FC = () => {
  const [fitment, setFitment] = useState<number>(76);

  return (
    <aside className="w-full md:w-[420px] bg-white border border-[#D7E0E3] flex-shrink-0 rounded-xl shadow-sm px-6 md:px-10 py-6 h-full">
      <div className="py-4 px-2 md:px-4">
        {/* Filter Header */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-[16px] font-medium text-[#231F20]">Filter</h3>
          <button className="text-[14px] font-medium text-[#0097AC] hover:opacity-80">
            Clear All
          </button>
        </div>

        {/* Date Picker */}
        <div className="mb-8">
          <div className="flex items-center justify-between px-6 py-4 border border-[#D7E0E3] rounded-md bg-white cursor-pointer hover:border-[#7A7480] transition-colors">
            <span className="text-[14px] text-[#231F20]">
              12 - January - 2024
            </span>
            <svg
              className="w-4 h-4 text-[#7A7480]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="9" y1="1" x2="9" y2="4"></line>
              <line x1="15" y1="1" x2="15" y2="4"></line>
            </svg>
          </div>
        </div>

        {/* Location Dropdown */}
        <div className="mb-8">
          <button className="w-full flex items-center justify-between px-6 py-4 border border-[#D7E0E3] rounded-md bg-white cursor-pointer hover:border-[#7A7480] transition-colors">
            <span className="text-[14px] text-[#231F20]">Location</span>
            <ChevronDown className="w-4 h-4 text-[#7A7480]" />
          </button>
        </div>

        {/* My Fitment Slider */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[14px] text-[#231F20]">My Fitment</span>
            <span className="px-4 py-1 bg-[#0097AC] text-white text-[12px] font-medium rounded-sm">
              {fitment}%
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={fitment}
            onChange={(e) => setFitment(Number(e.target.value))}
            className="w-full h-1 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #0097AC 0%, #0097AC ${fitment}%, #D7E0E3 ${fitment}%, #D7E0E3 100%)`,
            }}
          />
        </div>

        {/* Other Filters */}
        <div className="space-y-6">
          {["Matching Role", "Primary Skills", "Domains", "Status"].map(
            (filter) => (
              <button
                key={filter}
                className="w-full flex items-center justify-between px-6 py-4 border border-[#D7E0E3] rounded-md bg-white cursor-pointer hover:border-[#7A7480] transition-colors"
              >
                <span className="text-[14px] text-[#231F20]">{filter}</span>
                <ChevronDown className="w-4 h-4 text-[#7A7480]" />
              </button>
            )
          )}
        </div>
      </div>
    </aside>
  );
};

export default FilterTab;
