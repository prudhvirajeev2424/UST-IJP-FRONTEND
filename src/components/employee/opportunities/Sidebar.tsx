import { ChevronDown } from "lucide-react";
import calendarImg from "../../../assets/calendar.jpg";

interface SidebarProps {
  activeTab: string;
}

export const Sidebar = ({ activeTab }: SidebarProps) => {
  // Logic: Change 'Category' to 'Domains' if Applied tab is active
  const accordionSections = [
    "Matching Role",
    "Primary Skills",
    activeTab === "Applied" ? "Domains" : "Category",
  ];

  return (
    <div className="w-[420px] bg-white rounded-[10px] p-[30px] shadow-sm border border-[#D7E0E3] flex flex-col h-[850px]">
      <div className="w-[360px] mx-auto">
        <div className="flex justify-between items-center mb-[30px]">
          <span className="font-semibold text-[16px] text-[#231F20]">
            Filter
          </span>
          <button className="text-[#0097AC] text-[14px] font-bold">
            Clear All
          </button>
        </div>

        <div className="space-y-[20px]">
          <div className="flex justify-start gap-[25px] mb-[5px]">
            <label className="flex items-center cursor-pointer text-[14px] text-[#231F20] font-normal gap-2 whitespace-nowrap leading-none">
              <input
                type="radio"
                name="avail"
                className="accent-[#006E74] w-[18px] h-[18px]"
              />
              Currently Available
            </label>
            <label className="flex items-center cursor-pointer text-[14px] text-[#231F20] font-normal gap-2 whitespace-nowrap leading-none">
              <input
                type="radio"
                name="avail"
                defaultChecked
                className="accent-[#006E74] w-[18px] h-[18px]"
              />
              Available After Date
            </label>
          </div>

          <div className="relative w-full">
            <input
              type="text"
              className="w-full h-[49px] px-[15px] border border-[#D7E0E3] rounded-[5px] text-[14px] text-[#231F20] outline-none bg-white"
              defaultValue="12 - January - 2024"
              readOnly
            />
            <img
              src={calendarImg}
              alt="calendar"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-[20px] h-[20px]"
            />
          </div>

          <div className="w-full h-[49px] px-[15px] border border-[#D7E0E3] rounded-[5px] flex items-center justify-between cursor-pointer bg-white">
            <span className="text-[#7A7480] text-[14px]">Location</span>
            <ChevronDown size={18} className="text-[#7A7480]" />
          </div>
        </div>

        <hr className="my-[30px] border-[#F2F7F8]" />

        <div className="w-full">
          <h4 className="text-[15px] mb-[45px] text-[#231F20] font-medium">
            My Fitment
          </h4>
          <div className="relative px-2">
            <div className="absolute -top-[35px] left-[75%] -translate-x-1/2 bg-[#006E74] text-white px-2 py-0.5 rounded-[2px] text-[12px] font-bold whitespace-nowrap">
              75%
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-[#006E74]"></div>
            </div>
            <div className="h-[2px] w-full bg-[#D7E0E3] relative">
              <div className="absolute h-full bg-[#006E74] w-[75%]"></div>
              <div className="absolute -top-[6px] left-[75%] -translate-x-1/2 w-3.5 h-3.5 bg-[#006E74] rounded-full border-2 border-white shadow-md"></div>
            </div>
          </div>
        </div>

        <hr className="my-[40px] border-[#F2F7F8]" />

        {/* Dynamic Accordions */}
        <div className="space-y-[15px]">
          {accordionSections.map((item) => (
            <div
              key={item}
              className="w-full h-[49px] px-[15px] border border-[#D7E0E3] rounded-[5px] flex items-center justify-between cursor-pointer text-[#7A7480] text-[14px] bg-white"
            >
              <span>{item}</span>
              <ChevronDown size={18} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
