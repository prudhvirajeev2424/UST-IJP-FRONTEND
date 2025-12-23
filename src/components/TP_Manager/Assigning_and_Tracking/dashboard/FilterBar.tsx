import React from "react";
import FilterPill from "../../../ui/Shared/TP_Manager/Assigning_and_Tracking/FilterPill";
import SearchInput from "../../../ui/Shared/TP_Manager/Assigning_and_Tracking/SearchInput";
import Button from "../../../ui/Shared/TP_Manager/Assigning_and_Tracking/Button";
import type {
  FilterType,
  FilterOption,
} from "../../../../types/AssigningandTrackingTypes";

/* ============================
   ICON
============================ */

const ExcelIcon: React.FC = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-primary-bright"
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="9" y1="15" x2="15" y2="15" />
    <line x1="9" y1="18" x2="15" y2="18" />
    <line x1="9" y1="12" x2="15" y2="12" />
  </svg>
);

/* ============================
   FILTER BAR
============================ */

interface FilterBarProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const filterOptions: FilterOption[] = [
  { id: "all", label: "All" },
  { id: "below50", label: "< 50% completed" },
  { id: "above50", label: "> 50% completed" },
];

const FilterBar: React.FC<FilterBarProps> = ({
  activeFilter,
  onFilterChange,
  searchQuery,
  onSearchChange,
}) => {
  return (
    <div className="flex items-center gap-3">
      {filterOptions.map((option) => (
        <FilterPill
          key={option.id}
          label={option.label}
          active={activeFilter === option.id}
          onClick={() => onFilterChange(option.id)}
        />
      ))}

      <SearchInput value={searchQuery} onChange={onSearchChange} />

      <button
        className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
        aria-label="Export to Excel"
      >
        <ExcelIcon />
      </button>

      <Button variant="primary">Assign a task</Button>
    </div>
  );
};

export default FilterBar;

/* ============================
   PROGRESS BAR
============================ */

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
