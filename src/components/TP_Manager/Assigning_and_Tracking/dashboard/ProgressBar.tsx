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
  const getProgressColor = (percent: number) => {
    if (percent < 50) return "bg-danger";
    if (percent === 50) return "bg-warning";
    return "bg-primary";
  };

  const getTextColor = (percent: number) => {
    if (percent < 50) return "text-danger";
    if (percent === 50) return "text-warning";
    return "text-primary";
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-[#7A7480]">{label}</span>
        {showPercentage && (
          <span className={`text-sm font-medium ${getTextColor(percentage)}`}>
            {percentage}%
          </span>
        )}
      </div>

      <div className="w-full h-[3px] bg-[#D7E0E3] rounded-full">
        <div
          className={`h-full ${getProgressColor(
            percentage
          )} rounded-full transition-all`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
