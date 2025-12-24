import React from "react";

interface ProgressBarProps {
  percentage: number;
  label?: string;
  showPercentage?: boolean;
}

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
    /* Use fixed heights and prevent wrapping so the component never grows vertically.
       Ensure label row truncates and percentage uses whitespace-nowrap. */
    <div className="w-full h-[40px] flex flex-col justify-center min-h-0">
      {/* LABEL ROW (fixed height, prevents wrapping) */}
      <div className="flex justify-between items-center h-[18px] min-h-0">
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

      {/* BAR (fixed height) */}
      <div className="w-full h-[3px] bg-[#D7E0E3] rounded-full overflow-hidden mt-2">
        <div
          className={`h-full ${barColor} rounded-full transition-all duration-300`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
