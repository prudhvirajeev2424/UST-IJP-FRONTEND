import React from "react";

interface StatsSummaryProps {
  completedCount: number;
  inProgressCount: number;
  notStartedCount: number;
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
}) => {
  const items = [
    { key: "completed", count: completedCount, label: "Completed" },
    { key: "inProgress", count: inProgressCount, label: "In progress" },
    { key: "notStarted", count: notStartedCount, label: "Yet to start" },
  ];

  return (
    <aside className="w-fit">
      <div className="bg-white rounded-xl shadow-card px-6 py-4">
        <div className="flex items-center justify-between gap-10">
          {items.map((it) => (
            <div key={it.key} className="flex flex-col items-center">
              <span
                className={`text-2xl font-semibold ${
                  colorMap[it.key as keyof typeof colorMap]
                }`}
              >
                {it.count}
              </span>
              <span className="text-sm text-[#7A7480] mt-1">{it.label}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default StatsSummary;
