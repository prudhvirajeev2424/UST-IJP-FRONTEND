import React from "react";
import { ArrowLeft, Grid, List } from "lucide-react";

interface StatusTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onViewChange?: (view: "table" | "kanban") => void;
  view?: "table" | "kanban";
}

const StatusTabs: React.FC<StatusTabsProps> = ({
  activeTab,
  setActiveTab,
  onViewChange,
  view = "table",
}) => {
  const tabs = ["All", "Pending Action", "Accepted", "Rejected"];

  return (
    <div className="px-4 md:px-8 py-2 mb-4">
      <div className="grid grid-cols-1 md:[grid-template-columns:420px_1fr_auto] items-center gap-6 mb-0">
        {/* Left: Profiles heading (aligned above the FilterTab) */}
        <div className="flex items-center gap-3">
          <ArrowLeft className="w-5 h-5 text-[#7A7480]" />
          <span className="text-[16px] font-medium text-[#231F20]">
            Profiles
          </span>
        </div>

        {/* Center: Status Filter Tabs (aligned to table start) */}
        <div className="flex items-center justify-start md:pl-4">
          <div className="flex items-center gap-3">
            {tabs.map((tab) => {
              const isAll = tab === "All";
              const inactiveBg = isAll ? "#E8EDEF" : "#D7E0E3";
              const bgColor = activeTab === tab ? "#003C51" : inactiveBg;

              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`transition-all text-[14px] font-semibold ${
                    isAll
                      ? "w-12 h-12 flex items-center justify-center rounded-full"
                      : "px-4 py-2 rounded-full"
                  } ${
                    activeTab === tab
                      ? "text-white shadow-sm"
                      : "text-[#7A7480]"
                  }`}
                  style={{ backgroundColor: bgColor }}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-4 justify-end">
          {/* Search Input */}
          <div>
            <input
              type="text"
              placeholder="Search"
              className="w-[320px] h-[50px] pl-4 pr-4 border border-[#D7E0E3] rounded-lg text-[14px] text-[#231F20] placeholder-[#C2BCBE] focus:outline-none focus:border-[#0097AC] transition-colors bg-white"
            />
          </div>

          {/* Assets icon (left of Kanban/Grid icon) */}
          <div className="inline-flex items-center">
            {/* Sort button: smaller container (40x40) and smaller icon (24x24). Dulls on hover */}
            <button
              className="w-[40px] h-[40px] flex items-center justify-center border border-[#D7E0E3] rounded-lg bg-white p-0 transition-colors hover:bg-[#F1F5F6]"
              aria-hidden
            >
              <img
                src={"src/assets/sortamountdown_120336.svg"}
                alt="sort"
                className="w-6 h-6 object-contain filter transition duration-150 hover:brightness-75"
              />
            </button>

            {/* Icons.svg inlined so we can target the download glyph and darken it on hover. Sized larger (40px). */}
            <button
              className="w-[48px] h-[48px] flex items-center justify-center border border-[#D7E0E3] rounded-lg bg-white p-0 transition-colors hover:bg-[#F1F5F6] text-[#7A7480] hover:text-[#3b3b3b] ml-2"
              aria-hidden
            >
              {/* inlined SVG from src/assets/Icons.svg but adjusted to use currentColor for the download glyph */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="w-10 h-10 transition-all duration-150"
                aria-hidden
              >
                <g transform="translate(9.375 6.271)">
                  <g transform="translate(-2.262 4.32)">
                    <path
                      d="M25,3.389H16.466V4.968h2.516v2.5H16.466v.8h2.516v2.5H16.466v.818h2.516v2.366H16.466V14.9h2.516v2.371H16.466v.948h2.516V20.6H16.466v1.74H25c.135-.04.247-.2.338-.476a2.327,2.327,0,0,0,.137-.675V3.677c0-.136-.047-.218-.137-.246A1.168,1.168,0,0,0,25,3.389ZM23.893,20.6H19.8V18.216h4.094V20.6Zm0-3.331H19.8V14.9h4.094Zm0-3.32H19.8V11.593h4.094v2.355Zm0-3.184H19.8v-2.5h4.094v2.5h0Zm0-3.311H19.8V4.969h4.094V7.453ZM0,2.995V22.739l15.03,2.6V.329L0,3ZM8.909,17.93q-.086-.232-.8-1.977c-.477-1.163-.764-1.841-.848-2.034H7.229L5.617,17.756l-2.155-.145,2.556-4.776L3.678,8.058l2.2-.116L7.327,11.68h.029L9,7.772l2.27-.143L8.563,12.8l2.786,5.273-2.44-.143Z"
                      fill="#01b27c"
                    />

                    {/* Download icon group: use currentColor so button hover text color darkens it */}
                    <g transform="translate(8.249 12.442)" fill="currentColor">
                      <path
                        d="M 15.00585746765137 19.37760925292969 L 14.66614723205566 19.06306076049805 L 6.410287380218506 11.4185905456543 L 5.474077701568604 10.55171012878418 L 6.749997615814209 10.55171012878418 L 10.96615791320801 10.55171012878418 L 10.96615791320801 4.5 L 10.96615791320801 4 L 11.46615791320801 4 L 18.54555702209473 4 L 19.04555702209473 4 L 19.04555702209473 4.5 L 19.04555702209473 10.55171012878418 L 23.26171684265137 10.55171012878418 L 24.53763771057129 10.55171012878418 L 23.60142707824707 11.4185905456543 L 15.34556770324707 19.06306076049805 L 15.00585746765137 19.37760925292969 Z"
                        stroke="none"
                      />
                      <path
                        d="M 11.46615791320801 4.5 L 11.46615791320801 11.05171012878418 L 6.749998092651367 11.05171012878418 L 15.00585842132568 18.69618034362793 L 23.26171875 11.05171012878418 L 18.54555892944336 11.05171012878418 L 18.54555892944336 4.5 L 11.46615791320801 4.5 M 10.46615791320801 3.5 L 19.54555892944336 3.5 L 19.54555892944336 10.05171012878418 L 25.81354904174805 10.05171012878418 L 15.00585842132568 20.05903053283691 L 4.19816780090332 10.05171012878418 L 10.46615791320801 10.05171012878418 L 10.46615791320801 3.5 Z"
                        stroke="none"
                        fill="#fff"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </button>
          </div>

          {/* Attached View Toggle: Kanban (Grid) + List */}
          <div className="inline-flex items-center ml-3">
            {/* Kanban/List icons: reduce visual weight with lighter color and smaller size */}
            <button
              aria-label="Kanban View"
              className={`p-0 ${
                view === "kanban" ? "opacity-100" : "opacity-50"
              } transition-opacity duration-150`}
              onClick={() => onViewChange?.("kanban")}
            >
              <Grid className="w-5 h-5 text-[#7A7480]" />
            </button>
            <button
              aria-label="List View"
              className={`p-0 ml-2 ${
                view === "table" ? "opacity-100" : "opacity-50"
              } transition-opacity duration-150`}
              onClick={() => onViewChange?.("table")}
            >
              <List className="w-5 h-5 text-[#7A7480]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusTabs;
