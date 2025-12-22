import React from "react";

interface UserProfileProps {
  name: string;
  role: string;
  avatarUrl?: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, role, avatarUrl }) => {
  return (
    <div className="flex items-center space-x-3">
      <div className="text-right">
        <div className="text-sm font-medium text-dark">{name}</div>
        <div className="text-xs text-gray-primary">{role}</div>
      </div>
      <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-primary-dark text-white font-medium text-sm">
            {name.charAt(0)}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
