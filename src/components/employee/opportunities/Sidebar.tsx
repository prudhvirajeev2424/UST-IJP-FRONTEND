import { useState } from "react";
import { ChevronDown, Calendar } from "lucide-react";

interface SidebarProps {
  activeTab: string;
}

export const Sidebar = ({ activeTab }: SidebarProps) => {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

  const sections = ["Matching Role", "Primary Skills", activeTab === "Applied" ? "Domains" : "Category"];
  const locations = ["Bangalore", "Chennai", "Kochi"];

  const toggleLocation = (loc: string) => {
    setSelectedLocations(prev => 
      prev.includes(loc) ? prev.filter(l => l !== loc) : [...prev, loc]
    );
  };

  return (
    <div className="w-[330px] flex flex-col font-rubik shrink-0">
      {/* 1. Opportunities Title (Alignment matching Toolbar) */}
      {/* <h2 className="text-[18px] font-bold text-[#231F20] mb-5 px-1 uppercase tracking-tight">Opportunities</h2> */}

      {/* Main Filter Card */}
      <div className="bg-white rounded-xl border border-[#D7E0E3] shadow-sm flex flex-col overflow-hidden">
        
        {/* SECTION 1: TOP FILTERS */}
        <div className="p-6 pb-8">
          <div className="flex justify-between items-center mb-6">
            <span className="font-bold text-[15px] text-[#231F20]">Filter</span>
            <button className="text-[#0097AC] text-[12px] font-bold hover:underline">Clear All</button>
          </div>

          <div className="space-y-5">
            {/* Horizontal Radio Buttons */}
            <div className="flex flex-row items-center gap-5">
              <label className="flex items-center cursor-pointer text-[11px] text-[#7A7480] gap-2 whitespace-nowrap group">
                <div className="w-4 h-4 border border-[#D7E0E3] rounded-full flex items-center justify-center bg-white group-hover:border-[#006E74]">
                   <input type="radio" name="availability" className="sr-only peer" />
                   <div className="w-2 h-2 rounded-full bg-transparent peer-checked:bg-[#006E74]"></div>
                </div>
                Currently Available
              </label>
              <label className="flex items-center cursor-pointer text-[11px] text-[#7A7480] gap-2 whitespace-nowrap group">
                <div className="w-4 h-4 border border-[#D7E0E3] rounded-full flex items-center justify-center bg-white group-hover:border-[#006E74]">
                   <input type="radio" name="availability" defaultChecked className="sr-only peer" />
                   <div className="w-2 h-2 rounded-full bg-transparent peer-checked:bg-[#006E74]"></div>
                </div>
                Available After Date
              </label>
            </div>

            {/* Date Input */}
            <div className="relative w-full">
              <div className="w-full h-[40px] px-3 border border-[#D7E0E3] rounded-md flex items-center justify-between bg-white cursor-text">
                <span className="text-[12px] text-[#231F20]">12 - January - 2024</span>
                <Calendar size={16} className="text-[#7A7480]" />
              </div>
            </div>

            {/* LOCATION DROPDOWN (Fieldset Style) */}
            <div className="relative pt-1">
              <div className={`border rounded-md relative transition-all duration-300 ${isLocationOpen ? 'border-[#006E74]' : 'border-[#D7E0E3]'}`}>
                {/* Label sitting on the border line */}
                <span className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-[#7A7480] z-10">Location</span>
                
                <div 
                  className="flex items-center justify-between px-3 h-[40px] cursor-pointer"
                  onClick={() => setIsLocationOpen(!isLocationOpen)}
                >
                  <span className="text-[12px] text-[#231F20] truncate pr-4">
                    {selectedLocations.length > 0 ? selectedLocations.join(", ") : ""}
                  </span>
                  <ChevronDown size={14} className={`text-[#7A7480] transition-transform duration-300 ${isLocationOpen ? 'rotate-180' : ''}`} />
                </div>

                {/* Dropdown Content */}
                {isLocationOpen && (
                  <div className="bg-white border-t border-[#F2F7F8] py-1 animate-in fade-in slide-in-from-top-1 duration-200">
                    {locations.map((loc) => (
                      <label key={loc} className="flex items-center gap-3 px-3 py-2.5 hover:bg-[#F2F7F8] cursor-pointer group">
                        <input 
                          type="checkbox" 
                          className="w-3.5 h-3.5 accent-[#006E74] rounded border-[#D7E0E3]" 
                          checked={selectedLocations.includes(loc)}
                          onChange={() => toggleLocation(loc)}
                        />
                        <span className="text-[12px] text-[#231F20] font-normal group-hover:text-[#006E74] transition-colors">{loc}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Divider Line 1 */}
        <div className="h-[1px] bg-[#d6d5d5] w-full"></div>

        {/* SECTION 2: MY FITMENT */}
        <div className="p-6 py-8">
          <h4 className="text-[13px] mb-10 text-[#231F20] font-medium">My Fitment</h4>
          <div className="relative px-1">
            {/* Tooltip Bubble */}
            <div className="absolute -top-[32px] left-[75%] -translate-x-1/2 bg-[#005F6B] text-white px-2.5 py-1 rounded-[2px] text-[10px] font-bold">
              75%
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-[4px] border-transparent border-t-[#005F6B]"></div>
            </div>
            {/* Slider Track */}
            <div className="h-[1.5px] w-full bg-[#D7E0E3] relative rounded-full">
              <div className="absolute h-full bg-[#006E74] w-[75%] rounded-full"></div>
              {/* Thumb with Glow */}
              <div className="absolute -top-[5px] left-[75%] -translate-x-1/2 w-3 h-3 bg-[#006E74] rounded-full border border-white shadow-[0_0_0_6px_rgba(0,110,116,0.05)] cursor-pointer"></div>
            </div>
          </div>
        </div>

        {/* Divider Line 2 */}
        <div className="h-[1px] bg-[#d6d5d5] w-full"></div>

        {/* SECTION 3: BOTTOM ACCORDIONS */}
        <div className="p-6 space-y-[12px]">
          {sections.map((item) => (
            <div 
              key={item} 
              className="w-full h-[40px] px-3 border border-[#D7E0E3] rounded-md flex items-center justify-between cursor-pointer text-[#231F20] text-[12.5px] bg-white hover:border-[#006E74] transition-colors"
            >
              <span>{item}</span>
              <ChevronDown size={16} className="text-[#7A7480]" />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

