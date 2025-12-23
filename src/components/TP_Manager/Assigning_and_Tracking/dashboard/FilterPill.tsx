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
  /* ---------------- WIDTH BASED ON LABEL ---------------- */
  const widthClass = label === "All" ? "w-[56px]" : "w-[151px]";

  return (
    <button
      onClick={onClick}
      className={`
        ${widthClass}
        h-[49px]
        rounded-[50px]
        text-sm
        font-medium
        whitespace-nowrap
        transition-colors
        ${active ? "bg-[#003C51] text-white" : "bg-[#D7E0E3] text-[#003C51]"}
      `}
    >
      {label}
    </button>
  );
};

export default FilterPill;
