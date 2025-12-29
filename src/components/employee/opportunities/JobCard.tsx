import { useState } from "react";
import { MapPin } from "lucide-react";
import type { Job } from "../../../types/application";

interface JobCardProps {
  job: Job;
  onViewDetails?: (jobId: string) => void;
}

export const JobCard = ({ job, onViewDetails }: JobCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails(job.id); // 🔥 FIXED: Correct reference
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative w-full h-[230px] rounded-[10px] overflow-hidden font-rubik flex flex-col cursor-pointer border border-transparent transition-all duration-500 ease-in-out ${
        isHovered ? "shadow-xl" : "bg-white shadow-sm"
      }`}
    >
      {/* 🔹 HEADER */}
      <div
        className={`px-[18px] pt-[18px] pb-[10px] transition-colors duration-500 ${
          isHovered ? "bg-[#555555]" : "bg-white"
        }`}
      >
        <span
          className={`text-[14px] leading-[22px] font-normal uppercase transition-colors duration-500 block ${
            isHovered ? "text-white" : "text-[#006E74]"
          }`}
        >
          {job.id}
        </span>
      </div>

      {/* 🔹 BODY */}
      <div className="flex-1 relative bg-white">
        {/* -------- DEFAULT VIEW -------- */}
        <div
          className={`absolute inset-0 px-[18px] pb-[18px] transition-opacity duration-500 ease-in-out ${
            isHovered ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <h3 className="text-[14px] leading-tight font-bold text-[#231F20] mb-[3px] truncate">
            {job.role}
          </h3>
          <p className="text-[12px] text-[#7A7480] mb-[5px]">{job.band}</p>

          <div className="flex items-center gap-1 text-[12px] text-[#7A7480] mb-[10px]">
            <MapPin size={11} strokeWidth={2.5} className="text-[#7A7480]" />
            <span>{job.location}</span>
          </div>

          {job.status && (
            <span
              className={`px-2 py-0.5 rounded-[4px] text-[10px] font-bold capitalize inline-block ${
                job.status === "Shortlisted"
                  ? "bg-[#E6F9F3] text-[#01B27C]"
                  : job.status === "Actioned"
                  ? "bg-[#FFF9E6] text-[#FFBF00]"
                  : "bg-[#FFEBEB] text-[#FC6A59]"
              }`}
            >
              {job.status}
            </span>
          )}

          {/* 🔹 SKILLS */}
          <div className="absolute bottom-[18px] left-[18px] right-[18px] flex items-center gap-2">
            <span className="bg-[#ECECE1] px-2.5 py-1 rounded-full text-[11px] text-[#231F20] font-medium whitespace-nowrap leading-none">
              JavaScript
            </span>
            <span className="bg-[#ECECE1] px-2.5 py-1 rounded-full text-[11px] text-[#231F20] font-medium whitespace-nowrap leading-none">
              Python
            </span>
            <span className="bg-white border border-[#D7E0E3] w-7 h-7 flex items-center justify-center rounded-full text-[11px] text-[#7A7480] font-medium shrink-0">
              +2
            </span>
          </div>
        </div>

        {/* -------- HOVER VIEW -------- */}
        <div
          className={`absolute inset-0 px-[18px] pb-[18px] pt-[8px] bg-white transition-opacity duration-500 ease-in-out ${
            isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <p className="text-[11.5px] leading-[17px] text-[#231F20] font-normal line-clamp-6">
            {job.description}
          </p>

          <button
            onClick={handleViewDetails}
            className="absolute bottom-[18px] left-[18px] text-[#0097AC] font-bold text-[12px] flex items-center gap-1 hover:text-black"
          >
            View in Detail →
          </button>
        </div>
      </div>
    </div>
  );
};
