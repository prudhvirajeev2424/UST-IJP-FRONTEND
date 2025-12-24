import React from "react";

interface StatsSummaryProps {
  completedCount: number;
  inProgressCount: number;
  notStartedCount: number;
  compact?: boolean;
}

const colorMap = {
  completed: "text-green-600",
  inProgress: "text-yellow-500",
  notStarted: "text-red-500",
} as const;

const StatsSummary: React.FC<StatsSummaryProps> = ({
  completedCount,
  inProgressCount,
  notStartedCount,
  compact = false,
}) => {
  const items = [
    { key: "completed", count: completedCount, label: "Completed" },
    { key: "inProgress", count: inProgressCount, label: "In progress" },
    { key: "notStarted", count: notStartedCount, label: "Yet to start" },
  ];

  return (
    <aside
      className={`
        shrink-0
        self-start
        ${compact ? "w-[300px]" : "w-[360px]"}
      `}
    >
      <div
        className={`
          bg-white
          rounded-[10px]
          opacity-100
          flex
          items-center
          justify-between
          ${compact ? "h-[90px] px-4 py-3" : "h-[110px] px-6 py-4"}
        `}
      >
        {items.map((it) => (
          <div
            key={it.key}
            className="flex flex-col items-center justify-center"
          >
            <span
              className={`
                font-semibold
                ${compact ? "text-xl" : "text-2xl"}
                ${colorMap[it.key as keyof typeof colorMap]}
              `}
            >
              {it.count}
            </span>

            <span
              className={`
                text-[#7A7480]
                ${compact ? "text-xs mt-0.5" : "text-sm mt-1"}
                whitespace-nowrap
              `}
            >
              {it.label}
            </span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default StatsSummary;
