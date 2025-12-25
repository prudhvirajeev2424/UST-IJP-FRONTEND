// import { useState } from "react";
// import { MapPin } from "lucide-react";
// import type { Job } from "../../../types/application";

// export const JobCard = ({ job }: { job: Job }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className={`relative w-[320px] h-[260px] rounded-[10px] overflow-hidden font-rubik flex flex-col cursor-pointer border border-transparent transition-all duration-500 ease-in-out ${
//   isHovered ? ' bg-[#555555] shadow-xl' : 'bg-white shadow-sm'
// }`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* 1. HEADER (SO#) - Smooth background and text color transition */}
//       <div
//         className={`px-[25px] pt-[25px] pb-[15px] transition-colors duration-500 ease-in-out ${
//           isHovered ? "bg-[#555555]" : "bg-white"
//         }`}
//       >
//         <span
//           className={`text-[18px] leading-[22px] font-normal uppercase transition-colors duration-500 ease-in-out block ${
//             "text-[#006E74]"
//           }`}
//         >
//           {job.id}
//         </span>
//       </div>

//       {/* 2. BODY SECTION - We use a relative container to layer the two views */}
//       <div className="flex-1  relative">
//         {/* --- DEFAULT VIEW CONTENT (LAYER 1) --- */}
//         <div
//           className={`absolute inset-0 px-[25px] pb-[25px] transition-opacity duration-500 ease-in-out ${
//             isHovered ? "opacity-0 pointer-events-none" : "opacity-100"
//           }`}
//         >
//           <h3 className="text-[16px] leading-[19px] font-medium text-[#231F20] mb-[5px]">
//             {job.role}
//           </h3>
//           <p className="text-[14px] leading-[17px] text-[#7A7480] mb-[10px]">
//             {job.band}
//           </p>
//           <div className="flex items-center gap-1 text-[14px] leading-[17px] text-[#7A7480] mb-[15px]">
//             <MapPin size={14} className="text-[#7A7480]" strokeWidth={2.5} />
//             <span>{job.location}</span>
//           </div>

//           {job.status && (
//             <div className="mb-[15px]">
//               <span
//                 className={`inline-block px-[10px] py-[3px] rounded-[4px] text-[14px] leading-[17px] font-normal capitalize
//                 ${
//                   job.status === "Shortlisted"
//                     ? "bg-[#E6F9F3] text-[#01B27C]"
//                     : job.status === "Actioned"
//                     ? "bg-[#FFF9E6] text-[#FFBF00]"
//                     : "bg-[#FFEBEB] text-[#FC6A59]"
//                 }`}
//               >
//                 {job.status}
//               </span>
//             </div>
//           )}

//           <div className="absolute bottom-[28px] left-[25px] right-[25px] flex items-center gap-[8px]">
//             <span className="bg-[#F2F7F8] px-[12px] py-[4px] rounded-full text-[14px] leading-[17px] text-[#231F20]">
//               Java Script
//             </span>
//             <span className="bg-[#F2F7F8] px-[12px] py-[4px] rounded-full text-[14px] leading-[17px] text-[#231F20]">
//               Python
//             </span>
//             <span className="border border-[#7A7480] px-[8px] py-[3px] rounded-[30px] text-[14px] leading-[17px] text-[#7A7480]">
//               +2
//             </span>
//           </div>
//         </div>

//         {/* --- HOVER VIEW CONTENT (LAYER 2) --- */}
//         <div
//           className={`  absolute inset-0 px-[25px] pb-[25px] pt-[10px] bg-white rounded-md transition-opacity duration-500 ease-in-out ${
//             isHovered ? "opacity-100 " : "opacity-0 pointer-events-none"
//           }`}
//         >
//           <p className="text-[14px] leading-[22px] text-[#231F20] font-normal line-clamp-6 w-[260px]">
//             {job.description}
//           </p>

//           <button className="absolute bottom-[28px] left-[25px] text-[#0097AC] font text-[14px] flex items-center gap-2 hover:text-[#000000]">
//             View in Detail
//             <span className="text-[18px] leading-none mb-0.5">→</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };


import { useState } from "react";
import { MapPin } from "lucide-react";
import type { Job } from "../../../types/application";

export const JobCard = ({ job }: { job: Job }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative w-full h-[215px] rounded-[8px] overflow-hidden font-rubik flex flex-col cursor-pointer border border-transparent transition-all duration-500 ease-in-out ${
        isHovered ? "shadow-xl" : "bg-white shadow-sm"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. HEADER (SO#) */}
      <div className={`px-[15px] pt-[20px] pb-[12px] transition-colors duration-500 ease-in-out ${isHovered ? "bg-[#555555]" : "bg-white"}`}>
        <span className={`text-[13px] leading-tight font-normal uppercase transition-colors duration-500 ease-in-out block ${isHovered ? "text-white" : "text-[#006E74]"}`}>
          {job.id}
        </span>
      </div>

      <div className="flex-1 relative bg-white">
        {/* --- DEFAULT VIEW --- */}
        <div className={`absolute inset-0 px-[15px] pb-[20px] transition-opacity duration-500 ease-in-out ${isHovered ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
          <h3 className="text-[13px] leading-tight font-medium text-[#231F20] mb-[4px]">{job.role}</h3>
          <p className="text-[12px] text-[#7A7480] mb-[6px]">{job.band}</p>
          <div className="flex items-center gap-1 text-[12px] text-[#7A7480] mb-[10px]">
            <MapPin size={11} strokeWidth={2.5} />
            <span>{job.location}</span>
          </div>

          {job.status && (
            <span className={`px-2 py-0.5 rounded-[3px] text-[10px] font-bold capitalize inline-block ${
              job.status === "Shortlisted" ? "bg-[#E6F9F3] text-[#01B27C]" : 
              job.status === "Actioned" ? "bg-[#FFF9E6] text-[#FFBF00]" : "bg-[#FFEBEB] text-[#FC6A59]"
            }`}>
              {job.status}
            </span>
          )}

          <div className="absolute bottom-[12px] left-[20px] right-[20px] flex items-center gap-2">
            <span className="bg-[#F2F7F8] px-2.5 py-1 rounded-full text-[11px] text-[#231F20]">JavaScript</span>
            <span className="bg-[#F2F7F8] px-2.5 py-1 rounded-full text-[11px] text-[#231F20]">Python</span>
            <span className="border border-[#7A7480] px-1.5 py-0.5 rounded-full text-[11px] text-[#7A7480] font-medium">+2</span>
          </div>
        </div>

        {/* --- HOVER VIEW --- */}
        <div className={`absolute inset-0 px-[15px] pb-[20px] pt-[8px] bg-white transition-opacity duration-500 ease-in-out ${isHovered ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <p className="text-[12px] leading-[18px] text-[#231F20] font-normal line-clamp-6">
            {job.description}
          </p>
          <button className="absolute bottom-[20px] left-[20px] text-[#0097AC] font-bold text-[12px] flex items-center gap-1 hover:text-black">
            View in Detail <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};