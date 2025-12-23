import React from "react";
import { ProgressBar } from "./FilterBar";
import type { Task } from "../../../../types/AssigningandTrackingTypes";
import ProfilePhoto from "/src/assets/ProfilePhoto.png"; // make sure this path is correct

/* ============================
   ICONS
============================ */

const IDIcon: React.FC = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#7A7480]"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const LocationIcon: React.FC = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#7A7480]"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

/* ============================
   USER INFO
============================ */

interface UserInfoProps {
  name: string;
  uid: string;
  location: string;
}

export const UserInfo: React.FC<UserInfoProps> = ({ name, uid, location }) => {
  return (
    <div className="flex items-start gap-3">
      {/* Profile photo: using provided design CSS as a background image.
          Note: the original spec included absolute top/left values (top:214px; left:450px;) —
          applying those would break card layout, so we apply size, background, and opacity only.
      */}
      <div
        className="rounded-lg overflow-hidden flex-shrink-0"
        style={{
          width: "40px",
          height: "40px",
          backgroundImage: `url(${ProfilePhoto})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "0% 0%",
          backgroundSize: "100%",
          backgroundColor: "transparent",
          opacity: 1,
        }}
      />

      <div className="flex-1 min-w-0">
        <div className="text-[14px] text-[#231F20] mb-1 truncate">{name}</div>

        <div className="flex items-center gap-2 text-[14px] text-[#7A7480]">
          <div className="flex items-center gap-1">
            <IDIcon />
            <span>UID - {uid}</span>
          </div>
          <span>|</span>
          <div className="flex items-center gap-1">
            <LocationIcon />
            <span>{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============================
   TASK CARD
============================ */

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const { user, title, progress, updatedDaysAgo } = task;

  return (
    <div className="bg-white rounded-xl shadow-card p-6 hover:shadow-card-hover transition-shadow">
      <div className="mb-5">
        <UserInfo {...user} />
      </div>

      <div className="mb-4">
        <p className="text-sm text-[#7A7480] mb-1">Task Assigned :</p>
        <p className="text-sm font-semibold text-[#231F20]">{title}</p>
      </div>

      <div className="mb-3">
        <ProgressBar percentage={progress} />
      </div>

      <p className="text-xs text-[#C2BCBE]">
        Updated {updatedDaysAgo} {updatedDaysAgo === 1 ? "day" : "days"} ago
      </p>
    </div>
  );
};

/* ============================
   TASK GRID
============================ */

interface TaskGridProps {
  tasks: Task[];
}

export const TaskGrid: React.FC<TaskGridProps> = ({ tasks }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskCard;
