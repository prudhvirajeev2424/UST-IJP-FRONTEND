import React from "react";

interface Props {
  status: string;
}

const StatusBadge: React.FC<Props> = ({ status }) => {
  const color =
    status.toLowerCase() === "applied"
      ? "bg-yellow-100 text-yellow-800"
      : status.toLowerCase() === "open"
      ? "bg-green-100 text-green-800"
      : "bg-gray-100 text-gray-800";

  return (
    <span className={`px-2 py-1 rounded text-xs font-medium ${color}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
