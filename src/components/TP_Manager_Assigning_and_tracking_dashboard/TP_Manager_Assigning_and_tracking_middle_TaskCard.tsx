import React from "react";
import UserInfo from "./TP_Manager_Assigning_and_tracking_middle_UserInfo";
import ProgressBar from "./TP_Manager_Assigning_and_tracking_middle_ProgressBar";
import type { Task } from "../../types/TP_Manager_Assigning_and_tracking_activity";

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const { user, title, progress, updatedDaysAgo } = task;

  return (
    <div className="bg-white rounded-xl shadow-card p-6 hover:shadow-card-hover transition-shadow">
      {/* User Info */}
      <div className="mb-5">
        <UserInfo
          name={user.name}
          uid={user.uid}
          location={user.location}
          avatarUrl={user.avatarUrl}
        />
      </div>

      {/* Task Assigned */}
      <div className="mb-4">
        <p className="text-sm text-[#7A7480] mb-1">Task Assigned :</p>
        <p className="text-sm font-semibold text-[#231F20]">{title}</p>
      </div>

      {/* Progress */}
      <div className="mb-3">
        <ProgressBar percentage={progress} />
      </div>

      {/* Updated */}
      <p className="text-xs text-[#C2BCBE]">
        Updated {updatedDaysAgo} {updatedDaysAgo === 1 ? "day" : "days"} ago
      </p>
    </div>
  );
};

export default TaskCard;
