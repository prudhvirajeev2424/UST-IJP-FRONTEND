import { useState } from "react";
import { List } from "lucide-react";
import type { Opportunity } from "../../../types/opportunity";
import excelIcon from "../../../assets/Icon awesome-file-pdf.svg";
import { OpportunityCard } from "./OpportunityCard";
import EmpHomeList from "../EmpHomeList";

interface OpportunityGridProps {
  opportunities: Opportunity[];
}

export function EmpHomeGrid({ opportunities }: OpportunityGridProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [hideApplied, setHideApplied] = useState(false);

  return (
    <div className="flex-1 ">
      {/* Header */}
      <div className="px-5">
        <div className="flex items-center justify-between mb-6 mt-6 mr-3 ml-2">
          <h2 className="text-lg font-medium text-text-primary">
            Recommended Opportunities
          </h2>

          <div className="flex items-center gap-4">
            {/* Hide Applied Toggle */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-text-muted whitespace-nowrap">
                Hide Applied Jobs
              </span>
              <button
                onClick={() => setHideApplied(!hideApplied)}
                className={`relative w-16 h-6 rounded-full border-2 transition-colors flex items-center justify-center
                ${
                  hideApplied
                    ? "bg-primary border-gray-800"
                    : "bg-white border-gray-400"
                }`}
              >
                <span
                  className={`absolute left-1 top-0.3 w-4 h-4 rounded-full bg-gray-400 transition-transform
                  ${hideApplied ? "translate-x-9" : "translate-x-0"}`}
                />
                <span
                  className={`text-xs font-semibold transition-colors
                  ${hideApplied ? "text-white" : "text-gray-400"}`}
                >
                  {hideApplied ? "Yes" : "No"}
                </span>
              </button>
            </div>

            {/* Export Excel */}
            <button className="p-2 hover:bg-muted rounded transition-colors">
              <img src={excelIcon} alt="Export to Excel" className="w-5 h-5" />
            </button>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 border border-border-light rounded">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 transition-colors ${
                  viewMode === "grid" ? "bg-muted" : "hover:bg-muted"
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={viewMode === "grid" ? "#0f0f10ff" : "currentColor"}
                  strokeWidth="1.5"
                  className={`w-4 h-4 ${
                    viewMode === "grid" ? "text-primary" : "text-text-muted"
                  }`}
                >
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
              </button>
              <div className="w-px h-[35px] bg-gray-300" />
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 transition-colors ${
                  viewMode === "list" ? "bg-muted" : "hover:bg-muted"
                }`}
              >
                <List
                  className={`w-4 h-4 transition-colors ${
                    viewMode === "list" ? "text-primary" : "text-text-muted"
                  }`}
                  stroke={viewMode === "list" ? "#111113ff" : "currentColor"}
                  strokeWidth={1.5}
                />
              </button>
            </div>
          </div>
        </div>
        {viewMode === "grid" ? (
          <div className="grid grid-cols-[repeat(3,1fr)]  gap-5">
            {opportunities.slice(0, 6).map((opportunity) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} />
            ))}
          </div>
        ) : (
          // render only the table component when list view is active
          <div>
            <EmpHomeList opportunities={opportunities} />
          </div>
        )}
      </div>
    </div>
  );
}
