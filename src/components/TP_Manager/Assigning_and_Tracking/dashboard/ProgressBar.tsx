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
    /* Compact variant: reduce vertical footprint so progress bar + label take less space */
    <div className="w-full h-[28px] flex flex-col justify-center min-h-0">
      {/* LABEL ROW (slightly smaller) */}
      <div className="flex justify-between items-center h-[16px] min-h-0">
        <span
          className="
    text-[14px]
    leading-[17px]
    font-normal
    text-[#7A7480]
    tracking-[0px]
    text-left
    opacity-100
    w-[106px]
    h-[17px]
    font-[Rubik]
    truncate
    block
  "
        >
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

      {/* BAR (compact spacing) */}
      <div className="w-full h-[3px] bg-[#D7E0E3] rounded-full overflow-hidden mt-1">
        <div
          className={`h-full ${barColor} rounded-full transition-all duration-300`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
