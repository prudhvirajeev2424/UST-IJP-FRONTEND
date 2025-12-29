import React, { useMemo } from "react";
import type { Task } from "../../../data/taskTrackingData";

interface LeftSideTaskTrackerProps {
  tasks: Task[];
  isAnyTaskExpanded: boolean; // Added to handle label change
}

const Left_Side_Task_Tracker: React.FC<LeftSideTaskTrackerProps> = ({
  tasks,
  isAnyTaskExpanded,
}) => {
  const stats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter((t) => t.progress === 100).length;
    const inProgress = tasks.filter(
      (t) => t.progress > 0 && t.progress < 100
    ).length;
    const yetToStart = tasks.filter((t) => t.progress === 0).length;
    const circumference = 440;
    return { total, completed, inProgress, yetToStart, circumference };
  }, [tasks]);

  return (
    /* Compact tracker: match 80% visual density at 100% zoom */
    <div className="w-[310px] h-[360px] bg-white rounded-[10px] relative shadow-sm shrink-0">
      <div className="absolute top-[28px] w-full text-center">
        <h3 className="text-[15px] font-medium leading-[18px] text-[#231F20]">
          Daily Update Tracker
        </h3>
      </div>

      <div className="absolute top-[94px] left-[50%] transform -translate-x-[50%] w-[152px] h-[152px]">

        <svg
          className="w-full h-full -rotate-90"
          viewBox="0 0 152 152"
          preserveAspectRatio="xMidYMid meet"
        >
          <circle
            cx="76"
            cy="76"
            r="70"
            stroke="#F1F5F9"
            strokeWidth="10"
            fill="none"
          />
          <circle
            cx="76"
            cy="76"
            r="70"
            stroke="#01B27C"
            strokeWidth="10"
            fill="none"
            strokeDasharray={stats.circumference}
            strokeDashoffset={
              stats.circumference -
              stats.circumference * (stats.completed / stats.total)
            }
          />
          <circle
            cx="76"
            cy="76"
            r="70"
            stroke="#FFBF00"
            strokeWidth="10"
            fill="none"
            strokeDasharray={stats.circumference}
            strokeDashoffset={
              stats.circumference -
              stats.circumference * (stats.inProgress / stats.total)
            }
            style={{
              transform: `rotate(${(stats.completed / stats.total) * 360}deg)`,
              transformOrigin: "center",
            }}
          />
          <circle
            cx="76"
            cy="76"
            r="70"
            stroke="#FC6A59"
            strokeWidth="10"
            fill="none"
            strokeDasharray={stats.circumference}
            strokeDashoffset={
              stats.circumference -
              stats.circumference * (stats.yetToStart / stats.total)
            }
            style={{
              transform: `rotate(${
                ((stats.completed + stats.inProgress) / stats.total) * 360
              }deg)`,
              transformOrigin: "center",
            }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
          <span className="text-[28px] leading-[32px] text-[#231F20]">
            {stats.total}
          </span>
          <span className="text-[13px] text-[#231F20]">Total tasks</span>
        </div>
      </div>

      <div className="absolute bottom-[20px] w-full flex justify-between px-[20px]">
        <div className="text-center">
          <div className="text-[28px] text-[#01B27C] leading-[32px]">
            {stats.completed}
          </div>
          <div className="text-[15px] text-[#231F20]">Completed</div>
        </div>
        <div className="text-center">
          <div className="text-[28px] text-[#FFBF00] leading-[32px]">
            {stats.inProgress}
          </div>
          <div className="text-[15px] text-[#231F20]">In Progress</div>
        </div>
        <div className="text-center">
          <div className="text-[28px] text-[#FC6A59] leading-[32px]">
            {stats.yetToStart}
          </div>
          <div className="text-[15px] text-[#231F20]">
            {isAnyTaskExpanded ? "Started" : "Yet to start"}
          </div>
        </div>
      </div>
    </div>
  );
};

// export default Left_Side_Task_Tracker;
export default Left_Side_Task_Tracker;
