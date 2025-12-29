import React from "react";
import type { Opportunity } from "../../../types/opportunity";

interface Props {
  opportunity: Opportunity;
}

export const OpportunityCard: React.FC<Props> = ({ opportunity }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-semibold text-text-primary">
            {opportunity.role}
          </h3>
          <div className="text-xs text-text-muted">
            {opportunity.band} • {opportunity.location}
          </div>
        </div>
        <div>
          <span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700">
            {opportunity.status}
          </span>
        </div>
      </div>

      <p className="text-sm text-text-muted mt-3 line-clamp-3">
        {opportunity.description}
      </p>

      {opportunity.skills && opportunity.skills.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {opportunity.skills.slice(0, 5).map((s) => (
            <span key={s} className="text-xs bg-muted px-2 py-1 rounded">
              {s}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
