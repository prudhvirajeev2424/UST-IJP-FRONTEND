import React from "react";

interface IconButtonProps {
  icon: React.ReactNode;
  badge?: number;
  ariaLabel?: string;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, badge, ariaLabel }) => {
  return (
    <button
      className="relative p-2 hover:bg-gray-50 rounded-lg transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      aria-label={ariaLabel}
    >
      {icon}
      {badge !== undefined && badge > 0 && (
        <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-danger rounded-full animate-pulse">
          {badge > 9 ? "9+" : badge}
        </span>
      )}
    </button>
  );
};

export default IconButton;
