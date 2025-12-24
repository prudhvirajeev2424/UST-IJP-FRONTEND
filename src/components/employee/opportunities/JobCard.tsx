import { useState } from "react";
import { MapPin } from "lucide-react";
import type { Job } from "../../../types/application";

export const JobCard = ({ job }: { job: Job }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative w-[320px] h-[260px] rounded-[10px] overflow-hidden font-rubik flex flex-col cursor-pointer border border-transparent transition-all duration-500 ease-in-out ${
  isHovered ? ' bg-[#555555] shadow-xl' : 'bg-white shadow-sm'
}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. HEADER (SO#) - Smooth background and text color transition */}
      <div
        className={`px-[25px] pt-[25px] pb-[15px] transition-colors duration-500 ease-in-out ${
          isHovered ? "bg-[#555555]" : "bg-white"
        }`}
      >
        <span
          className={`text-[18px] leading-[22px] font-normal uppercase transition-colors duration-500 ease-in-out block ${
            "text-[#006E74]"
          }`}
        >
          {job.id}
        </span>
      </div>

      {/* 2. BODY SECTION - We use a relative container to layer the two views */}
      <div className="flex-1  relative">
        {/* --- DEFAULT VIEW CONTENT (LAYER 1) --- */}
        <div
          className={`absolute inset-0 px-[25px] pb-[25px] transition-opacity duration-500 ease-in-out ${
            isHovered ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <h3 className="text-[16px] leading-[19px] font-medium text-[#231F20] mb-[5px]">
            {job.role}
          </h3>
          <p className="text-[14px] leading-[17px] text-[#7A7480] mb-[10px]">
            {job.band}
          </p>
          <div className="flex items-center gap-1 text-[14px] leading-[17px] text-[#7A7480] mb-[15px]">
            <MapPin size={14} className="text-[#7A7480]" strokeWidth={2.5} />
            <span>{job.location}</span>
          </div>

          {job.status && (
            <div className="mb-[15px]">
              <span
                className={`inline-block px-[10px] py-[3px] rounded-[4px] text-[14px] leading-[17px] font-normal capitalize
                ${
                  job.status === "Shortlisted"
                    ? "bg-[#E6F9F3] text-[#01B27C]"
                    : job.status === "Actioned"
                    ? "bg-[#FFF9E6] text-[#FFBF00]"
                    : "bg-[#FFEBEB] text-[#FC6A59]"
                }`}
              >
                {job.status}
              </span>
            </div>
          )}

          <div className="absolute bottom-[28px] left-[25px] right-[25px] flex items-center gap-[8px]">
            <span className="bg-[#F2F7F8] px-[12px] py-[4px] rounded-full text-[14px] leading-[17px] text-[#231F20]">
              Java Script
            </span>
            <span className="bg-[#F2F7F8] px-[12px] py-[4px] rounded-full text-[14px] leading-[17px] text-[#231F20]">
              Python
            </span>
            <span className="border border-[#7A7480] px-[8px] py-[3px] rounded-[30px] text-[14px] leading-[17px] text-[#7A7480]">
              +2
            </span>
          </div>
        </div>

        {/* --- HOVER VIEW CONTENT (LAYER 2) --- */}
        <div
          className={`  absolute inset-0 px-[25px] pb-[25px] pt-[10px] bg-white rounded-md transition-opacity duration-500 ease-in-out ${
            isHovered ? "opacity-100 " : "opacity-0 pointer-events-none"
          }`}
        >
          <p className="text-[14px] leading-[22px] text-[#231F20] font-normal line-clamp-6 w-[260px]">
            {job.description}
          </p>

          <button className="absolute bottom-[28px] left-[25px] text-[#0097AC] font text-[14px] flex items-center gap-2 hover:text-[#000000]">
            View in Detail
            <span className="text-[18px] leading-none mb-0.5">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};
