import React from "react";

interface FilterPillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const FilterPill: React.FC<FilterPillProps> = ({
  label,
  active = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`h-9 px-5 rounded-md text-sm font-normal transition-colors whitespace-nowrap ${
        active
          ? "bg-primary-dark text-white"
          : "bg-gray-light text-dark hover:bg-gray-200"
      }`}
    >
      {label}
    </button>
  );
};

export default FilterPill;
