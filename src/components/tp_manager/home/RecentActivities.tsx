import React from "react";
import { activities } from "../../../data/activities";

const RecentActivities: React.FC = () => {
  return (
    // use w-full and a flexible min-height so the sidebar fits its grid column without forcing extra width
    <div className="flex w-full flex-col rounded-lg bg-white p-[20px_20px_30px_20px] shadow-sm min-h-[420px]">
      {/* ---------- LOCAL SCROLLBAR HIDE ---------- */}
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            width: 0px;
            height: 0px;
          }
          .hide-scrollbar {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
        `}
      </style>

      {/* ---------- HEADER ---------- */}
      <div className="mb-4 flex items-center justify-between border-b border-gray-200 pb-[5px]">
        <h2 className="text-[16px] font-medium text-[#231F20]">
          Recent Activities
        </h2>

        <a href="#" className="text-[14px] text-[#0097AC] hover:underline">
          View All
        </a>
      </div>

      {/* ---------- LIST ---------- */}
      <div className="hide-scrollbar flex flex-1 flex-col overflow-y-auto">
        {activities.map((a, i) => (
          <div
            key={a.id}
            className={`relative pb-6 pl-6 ${
              i === activities.length - 1
                ? "border-l-0"
                : "border-l-2 border-gray-200"
            }`}
          >
            {/* DOT */}
            <div className="absolute left-[-5.5px] top-1 h-[10px] w-[10px] rounded-full border-2 border-white bg-[#0097AC] shadow-[0_0_0_1px_#e5e7eb]" />

            {/* TEXT */}
            <p className="mb-1 text-[14px] leading-[22px] text-[#231F20]">
              Application for{" "}
              <span className="font-semibold">"{a.candidate}"</span>
            </p>

            <p className="mb-[6px] text-[14px] text-[#231F20]">{a.position}</p>

            {/* FOOTER */}
            <div className="flex items-center justify-between">
              <span
                className={`rounded px-[10px] py-[3px] text-[12px] font-medium ${
                  a.status === "Allocated"
                    ? "bg-teal-100 text-[#0097AC]"
                    : "bg-red-100 text-red-500"
                }`}
              >
                {a.status}
              </span>

              <span className="text-[12px] text-gray-400">{a.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivities;
