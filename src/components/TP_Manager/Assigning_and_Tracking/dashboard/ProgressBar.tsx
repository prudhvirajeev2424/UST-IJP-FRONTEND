import React from "react";
import type { ProgressBarProps } from "../../../../types/AssigningandTrackingTypes";

export const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  label = "Overall Progress",
  showPercentage = true,
}) => {
  const barColor =
    percentage < 50
      ? "bg-danger"
      : percentage === 50
      ? "bg-warning"
      : "bg-primary";

  const textColor =
    percentage < 50
      ? "text-danger"
      : percentage === 50
      ? "text-warning"
      : "text-primary";

  return (
    /* Reduce vertical footprint: slightly smaller label row and tighter gap to the bar. */
    <div className="w-full h-[32px] flex flex-col justify-center min-h-0">
      {/* LABEL ROW (slightly smaller) */}
      <div className="flex justify-between items-center h-[16px] min-h-0">
        <span className="text-sm text-[#7A7480] truncate min-w-0 block">
          {label}
        </span>

        {showPercentage && (
          <span
            className={`text-sm font-medium whitespace-nowrap leading-none ${textColor}`}
          >
            {percentage}%
          </span>
        )}
      </div>

      {/* BAR (keep slim and closer to label) */}
      <div className="w-full h-[3px] bg-[#D7E0E3] rounded-full overflow-hidden mt-1">
        <div
          className={`h-full ${barColor} rounded-full transition-all duration-300`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
