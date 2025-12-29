// import React, { useMemo } from "react";

// // Import the actual data (value)
// // import { tasksData } from "../../../data/taskTrackingData";

// // Import only the type
// import type { Task } from "../../../data/taskTrackingData";

// interface LeftSideTaskTrackerProps {
//   tasks: Task[];
// }

// const Left_Side_Task_Tracker: React.FC<LeftSideTaskTrackerProps> = ({ tasks }) => {
//   const stats = useMemo(() => {
//     const total = tasks.length;
//     const completed = tasks.filter((t) => t.progress === 100).length;
//     const inProgress = tasks.filter((t) => t.progress > 0 && t.progress < 100).length;
//     const yetToStart = tasks.filter((t) => t.progress === 0).length;
//     const circumference = 440;
//     return { total, completed, inProgress, yetToStart, circumference };
//   }, [tasks]);

//   return (
//     <div className="w-[360px] h-[360px] bg-white rounded-[10px] relative shadow-sm shrink-0">
//       <div className="absolute top-[28px] w-full text-center">
//         <h3 className="text-[16px] font-medium">Daily Update Tracker</h3>
//       </div>

//       <div className="absolute top-[96px] left-[104px] w-[152px] h-[152px]">
//         <svg className="w-full h-full -rotate-90" viewBox="0 0 152 152">
//           <circle cx="76" cy="76" r="70" stroke="#F1F5F9" strokeWidth="12" fill="none" />
//           <circle
//             cx="76"
//             cy="76"
//             r="70"
//             stroke="#01B27C"
//             strokeWidth="12"
//             fill="none"
//             strokeDasharray={stats.circumference}
//             strokeDashoffset={
//               stats.circumference - stats.circumference * (stats.completed / stats.total)
//             }
//           />
//           <circle
//             cx="76"
//             cy="76"
//             r="70"
//             stroke="#FFBF00"
//             strokeWidth="12"
//             fill="none"
//             strokeDasharray={stats.circumference}
//             strokeDashoffset={
//               stats.circumference - stats.circumference * (stats.inProgress / stats.total)
//             }
//             style={{
//               transform: `rotate(${(stats.completed / stats.total) * 360}deg)`,
//               transformOrigin: "center",
//             }}
//           />
//           <circle
//             cx="76"
//             cy="76"
//             r="70"
//             stroke="#FC6A59"
//             strokeWidth="12"
//             fill="none"
//             strokeDasharray={stats.circumference}
//             strokeDashoffset={
//               stats.circumference - stats.circumference * (stats.yetToStart / stats.total)
//             }
//             style={{
//               transform: `rotate(${((stats.completed + stats.inProgress) / stats.total) * 360}deg)`,
//               transformOrigin: "center",
//             }}
//           />
//         </svg>

//         <div className="absolute inset-0 flex flex-col items-center justify-center">
//           <span className="text-[32px]">0{stats.total}</span>
//           <span className="text-[14px]">Total tasks</span>
//         </div>
//       </div>

//       <div className="absolute bottom-[24px] w-full flex justify-between px-[30px]">
//         <div className="text-center">
//           <div className="text-[32px] text-[#01B27C]">0{stats.completed}</div>
//           <div className="text-[16px]">Completed</div>
//         </div>
//         <div className="text-center">
//           <div className="text-[32px] text-[#FFBF00]">0{stats.inProgress}</div>
//           <div className="text-[16px]">In Progress</div>
//         </div>
//         <div className="text-center">
//           <div className="text-[32px] text-[#FC6A59]">0{stats.yetToStart}</div>
//           <div className="text-[16px]">Yet to start</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Left_Side_Task_Tracker;

import React, { useMemo } from "react";
import type { Task } from "../../../data/taskTrackingData";

interface LeftSideTaskTrackerProps {
  tasks: Task[];
  isAnyTaskExpanded: boolean; // Added to handle label change
}

const Left_Side_Task_Tracker: React.FC<LeftSideTaskTrackerProps> = ({ tasks, isAnyTaskExpanded }) => {
  const stats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter((t) => t.progress === 100).length;
    const inProgress = tasks.filter((t) => t.progress > 0 && t.progress < 100).length;
    const yetToStart = tasks.filter((t) => t.progress === 0).length;
    const circumference = 440;
    return { total, completed, inProgress, yetToStart, circumference };
  }, [tasks]);

  return (
    /* Verified Size: 360px x 424px */
    <div className="w-[360px] h-[424px] bg-white rounded-[10px] relative shadow-sm shrink-0">
      <div className="absolute top-[30px] w-full text-center">
        <h3 className="text-[16px] font-medium leading-[19px] text-[#231F20]">Daily Update Tracker</h3>
      </div>

      <div className="absolute top-[104px] left-[104px] w-[152px] h-[152px]">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 152 152">
          <circle cx="76" cy="76" r="70" stroke="#F1F5F9" strokeWidth="12" fill="none" />
          <circle cx="76" cy="76" r="70" stroke="#01B27C" strokeWidth="12" fill="none"
            strokeDasharray={stats.circumference}
            strokeDashoffset={stats.circumference - stats.circumference * (stats.completed / stats.total)}
          />
          <circle cx="76" cy="76" r="70" stroke="#FFBF00" strokeWidth="12" fill="none"
            strokeDasharray={stats.circumference}
            strokeDashoffset={stats.circumference - stats.circumference * (stats.inProgress / stats.total)}
            style={{ transform: `rotate(${(stats.completed / stats.total) * 360}deg)`, transformOrigin: "center" }}
          />
          <circle cx="76" cy="76" r="70" stroke="#FC6A59" strokeWidth="12" fill="none"
            strokeDasharray={stats.circumference}
            strokeDashoffset={stats.circumference - stats.circumference * (stats.yetToStart / stats.total)}
            style={{ transform: `rotate(${((stats.completed + stats.inProgress) / stats.total) * 360}deg)`, transformOrigin: "center" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[32px] leading-[38px] text-[#231F20]">0{stats.total}</span>
          <span className="text-[14px] text-[#231F20]">Total tasks</span>
        </div>
      </div>

      <div className="absolute bottom-[40px] w-full flex justify-between px-[30px]">
        <div className="text-center">
          <div className="text-[32px] text-[#01B27C] leading-[38px]">0{stats.completed}</div>
          <div className="text-[16px] text-[#231F20]">Completed</div>
        </div>
        <div className="text-center">
          <div className="text-[32px] text-[#FFBF00] leading-[38px]">0{stats.inProgress}</div>
          <div className="text-[16px] text-[#231F20]">In Progress</div>
        </div>
        <div className="text-center">
          <div className="text-[32px] text-[#FC6A59] leading-[38px]">0{stats.yetToStart}</div>
          <div className="text-[16px] text-[#231F20]">{isAnyTaskExpanded ? "Started" : "Yet to start"}</div>
        </div>
      </div>
    </div>
  );
};

// export default Left_Side_Task_Tracker;
export default Left_Side_Task_Tracker;