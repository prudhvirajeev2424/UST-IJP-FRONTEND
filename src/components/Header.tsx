import React, { useState } from "react";
import { ArrowLeft, Search } from "lucide-react";

export default function Header() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const tabs = [
    { id: "all", label: "All" },
    { id: "pending", label: "Pending Action" },
    { id: "accepted", label: "Accepted" },
    { id: "rejected", label: "Rejected" },
  ];

  return (
    <div className="px-8 py-4">
      <div className="grid grid-cols-[360px_1fr_auto] items-center gap-4">
        <div className="flex items-center gap-3">
          <ArrowLeft className="w-5 h-5 text-[#7A7480]" />
          <span className="text-[16px] font-medium text-[#231F20]">
            Profiles
          </span>
        </div>

        <div className="flex items-center justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-[14px] font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-[#003C51] text-white"
                  : "bg-[#ECECE1] text-[#7A7480] hover:bg-[#D7E0E3]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4 justify-end">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-96 pl-4 pr-10 py-2 border border-[#D7E0E3] rounded-lg text-[14px] focus:outline-none focus:border-[#0097AC]"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A7480]" />
          </div>

          <button className="p-2 border border-[#D7E0E3] rounded-lg hover:bg-white transition-colors">
            <svg
              className="w-5 h-5 text-[#01B27C]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3"
              />
            </svg>
          </button>

          <div className="inline-flex items-center border border-[#D7E0E3] rounded-lg overflow-hidden">
            <button className="p-2 bg-white hover:bg-white transition-colors">
              <svg
                className="w-5 h-5 text-[#7A7480]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </button>
            <button className="p-2 bg-white hover:bg-white transition-colors border-l border-[#D7E0E3]">
              <svg
                className="w-5 h-5 text-[#7A7480]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
