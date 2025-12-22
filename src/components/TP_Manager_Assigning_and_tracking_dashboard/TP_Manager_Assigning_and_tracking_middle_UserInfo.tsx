import React from "react";

interface UserInfoProps {
  name: string;
  uid: string;
  location: string;
  avatarUrl: string;
}

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

const UserInfo: React.FC<UserInfoProps> = ({
  name,
  uid,
  location,
  avatarUrl,
}) => {
  return (
    <div className="flex items-start gap-3">
      {/* Avatar */}
      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
        <img
          src={avatarUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text section */}
      <div className="flex-1 min-w-0">
        {/* NAME */}
        <div className="text-[14px] leading-[17px] font-normal text-[#231F20] mb-1 truncate">
          {name}
        </div>

        {/* UID + Location */}
        <div className="flex items-center gap-2 text-[14px] leading-[17px] font-normal text-[#7A7480]">
          <div className="flex items-center gap-1">
            <IDIcon />
            <span className="text-[14px] leading-[17px] font-normal text-[#7A7480]">
              UID - {uid}
            </span>
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

export default UserInfo;
