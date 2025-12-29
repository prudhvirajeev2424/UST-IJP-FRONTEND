import React from "react";
import { ProgressBar } from "./ProgressBar";
import type { Task } from "../../../../types/AssigningandTrackingTypes";
import ProfilePhoto from "/src/assets/ProfilePhoto.png";

/* ============================
   ICONS
============================ */

const LocationIcon: React.FC = () => (
  <svg
    width="13.09"
    height="16"
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

const textBase =
  "text-[14px] leading-[17px] font-normal tracking-[0px] text-[#7A7480] opacity-100 font-[Rubik] truncate";

const UserInfo: React.FC<UserInfoProps> = ({ name, uid, location }) => (
  <div className="flex items-start gap-3">
    {/* DP */}
    <div
      className="flex-shrink-0 opacity-100"
      style={{
        width: "40px",
        height: "40px",
        background: `transparent url(${ProfilePhoto}) 0% 0% no-repeat padding-box`,
      }}
    />

    <div className="flex-1 min-w-0">
      {/* Name */}
      <p className="text-[14px] text-[#231F20] truncate font-[Rubik]">{name}</p>

      {/* UID + Location */}
      <div className="flex items-center gap-2 mt-1">
        {/* UID */}
        <span className={`${textBase} w-[85px] h-[17px]`}>UID - {uid}</span>

        {/* Divider */}
        <span className="text-[#7A7480] leading-[17px] opacity-100">|</span>

        {/* Location */}
        <div className="flex items-center gap-1">
          <LocationIcon />
          <span className={`${textBase} w-[66px] h-[17px]`}>{location}</span>
        </div>
      </div>
    </div>
  </div>
);

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
