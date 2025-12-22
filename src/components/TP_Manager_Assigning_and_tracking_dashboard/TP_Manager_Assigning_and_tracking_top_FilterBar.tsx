import React from "react";
import FilterPill from "../ui/TP_Manager_Assigning_and_tracking_FilterPill";
import SearchInput from "../ui/TP_Manager_Assigning_and_tracking_SearchInput";
import Button from "../ui/TP_Manager_Assigning_and_tracking_Button";
import type {
  FilterType,
  FilterOption,
} from "../../types/TP_Manager_Assigning_and_tracking_activity";

interface FilterBarProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

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
      {/* Filter Pills */}
      {filterOptions.map((option) => (
        <FilterPill
          key={option.id}
          label={option.label}
          active={activeFilter === option.id}
          onClick={() => onFilterChange(option.id)}
        />
      ))}

      {/* Search Input */}
      <SearchInput value={searchQuery} onChange={onSearchChange} />

      {/* Excel Export Icon */}
      <button
        className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
        aria-label="Export to Excel"
      >
        <ExcelIcon />
      </button>

      {/* Assign Task Button */}
      <Button variant="primary">Assign a task</Button>
    </div>
  );
};

export default FilterBar;
