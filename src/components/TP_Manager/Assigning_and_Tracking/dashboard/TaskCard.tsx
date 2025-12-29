import React from "react";
import { ProgressBar } from "./ProgressBar";
import type { Task } from "../../../../types/AssigningandTrackingTypes";
import UserInfo from "../../../TP_Manager/Assigning_and_Tracking/dashboard/UserInfo";

/* ============================
   TASK CARD
============================ */

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const { user, title, progress, updatedDaysAgo } = task;

  return (
    <div
      className="
        w-[320px]
        h-[294px]
        bg-[#FFFFFF]
        rounded-[10px]
        p-6
        opacity-100
        flex
        flex-col
        overflow-hidden
      "
    >
      <div className="mb-5">
        <UserInfo {...user} />
      </div>

      <div className="mb-4">
        <p className="text-sm text-[#7A7480] mb-1">Task Assigned :</p>
        <p className="text-sm font-semibold text-[#231F20] break-words">
          {title}
        </p>
      </div>

      <div className="mb-2">
        <ProgressBar percentage={progress} />

        {/* Updated days should sit immediately below the progress bar with small spacing */}
        <p
          className="
    text-[12px]
    leading-[14px]
    font-normal
    text-[#7A7480]
    tracking-[0px]
    text-left
    opacity-100
    w-[111px]
    h-[14px]
    font-[Rubik]
    mt-1
  "
        >
          Updated {updatedDaysAgo} {updatedDaysAgo === 1 ? "day" : "days"} ago
        </p>
      </div>
    </div>
  );
};

export default TaskCard;
