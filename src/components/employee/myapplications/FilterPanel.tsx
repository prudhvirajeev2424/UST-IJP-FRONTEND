import React from "react";
import { Calendar, ChevronDown } from "lucide-react";

const FilterPanel: React.FC = () => {
  return (
    <div className="w-[320px] h-[562px] flex-shrink-0">
      <div className="rounded-lg bg-white px-6 py-5 shadow-sm border border-gray-100">
        {/* Header */}
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-[15px] font-medium text-[#231F20] leading-tight">
            Filter
          </h2>
          <button className="text-[14px] font-normal text-[#0097AC] hover:text-[#0097AC]-dark transition-colors leading-tight">
            Clear All
          </button>
        </div>

        {/* Filter Controls */}
        <div className="space-y-[18px]">
          {/* Date Picker */}
          <div>
            <div className="relative">
              <input
                type="text"
                value="06 - January - 2025"
                readOnly
                className="w-full rounded-md border border-[#D7E0E3] bg-white px-3.5 py-[9px] pr-10 text-[14px] text-[#231F20] leading-tight focus:border-[#0097AC] focus:outline-none focus:ring-1 focus:ring-[#0097AC]"
              />
              <Calendar
                size={16}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7A7480] pointer-events-none"
                strokeWidth={2}
              />
            </div>
          </div>

          {/* Role Dropdown */}
          <div>
            <div className="relative">
              <select
                className="w-full appearance-none rounded-md border border-[#D7E0E3] bg-white px-3.5 py-[9px] pr-10 text-[14px] text-[#7A7480] leading-tight focus:border-[#0097AC] focus:outline-none focus:ring-1 focus:ring-[#0097AC] cursor-pointer"
                defaultValue=""
              >
                <option value="" disabled>
                  Role
                </option>
                <option value="lead-ii">Lead II - Software Developer</option>
                <option value="senior">Senior Software Developer</option>
                <option value="junior">Junior Software Developer</option>
              </select>
              <ChevronDown
                size={16}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7A7480] pointer-events-none"
                strokeWidth={2}
              />
            </div>
          </div>

          {/* Account Dropdown */}
          <div>
            <div className="relative">
              <select
                className="w-full appearance-none rounded-md border border-[#D7E0E3] bg-white px-3.5 py-[9px] pr-10 text-[14px] text-[#7A7480] leading-tight focus:border-[#0097AC] focus:outline-none focus:ring-1 focus:ring-[#0097AC] cursor-pointer"
                defaultValue=""
              >
                <option value="" disabled>
                  Account
                </option>
                <option value="t-mobile">T Mobile</option>
                <option value="att">AT&T</option>
                <option value="verizon">Verizon</option>
              </select>
              <ChevronDown
                size={16}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7A7480] pointer-events-none"
                strokeWidth={2}
              />
            </div>
          </div>

          {/* Status Dropdown */}
          <div>
            <div className="relative">
              <select
                className="w-full appearance-none rounded-md border border-[#D7E0E3] bg-white px-3.5 py-[9px] pr-10 text-[14px] text-[#7A7480] leading-tight focus:border-[#0097AC] focus:outline-none focus:ring-1 focus:ring-[#0097AC] cursor-pointer"
                defaultValue=""
              >
                <option value="" disabled>
                  Status
                </option>
                <option value="interviewing">Interviewing</option>
                <option value="allocated">Allocated</option>
                <option value="selected">Selected</option>
                <option value="rejected">Rejected</option>
                <option value="pending">Pending</option>
              </select>
              <ChevronDown
                size={16}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7A7480] pointer-events-none"
                strokeWidth={2}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
