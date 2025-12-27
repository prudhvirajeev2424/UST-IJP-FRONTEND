import React from "react";
import type { Employee } from "../../../types/employee";
import { mockMatchingJobs } from "../../../data/mockMatchingJobs";

interface MatchingJobsModalProps {
  employee: Employee;
  onClose: () => void;
}

const MatchingJobsModal: React.FC<MatchingJobsModalProps> = ({
  employee,
  onClose,
}) => {
  const matchingJobs = mockMatchingJobs.filter(
    (job) => job.employeeUid === employee.uid
  );

  const getActionBadgeStyle = (action: string | null): React.CSSProperties => {
    switch (action) {
      case "Shortlisted":
        return {
          backgroundColor: "rgba(1, 178, 124, 0.1)",
          color: "#01B27C",
        };
      case "Actioned":
        return {
          backgroundColor: "rgba(255, 191, 0, 0.1)",
          color: "#FFBF00",
        };
      case "Rejected":
        return {
          backgroundColor: "rgba(252, 106, 89, 0.1)",
          color: "#FC6A59",
        };
      default:
        return {};
    }
  };

  const formatSkills = (skills: string[]) => {
    if (skills.length <= 2) return skills.join(", ");
    return `${skills.slice(0, 2).join(", ")} +${skills.length - 2}`;
  };

  return (
    <div className="w-full">
      {/* Header - Responsive */}
      <div className="flex items-center justify-between mb-4 sm:mb-5 md:mb-6 px-1">
        <h3
          className="font-rubik font-semibold text-sm sm:text-base md:text-lg leading-[1.3]"
          style={{ color: "#231F20" }}
        >
          Matching opportunities
        </h3>
        {/* Close Button - Touch Friendly */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="flex items-center justify-center w-9 h-9 min-w-[36px] rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#7A7480"
            strokeWidth="2.5"
            className="w-5 h-5 sm:w-6 sm:h-6"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block">
        <div className="bg-white rounded-lg overflow-hidden p-3">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[650px]">
              <thead>
                <tr
                  className="h-[50px]"
                  style={{ backgroundColor: "rgba(215, 224, 227, 0.15)" }}
                >
                  {[
                    "SO#",
                    "Role",
                    "Band",
                    "Location",
                    "Skills",
                    "Action Taken",
                  ].map((header, idx) => (
                    <th
                      key={header}
                      className="px-3 lg:px-4 text-left font-rubik font-medium text-xs leading-[15px] whitespace-nowrap"
                      style={{
                        color: "#7A7480",
                        borderBottom: "1px solid rgba(215,224,227,0.3)",
                        borderTopLeftRadius: idx === 0 ? "8px" : undefined,
                        borderTopRightRadius: idx === 5 ? "8px" : undefined,
                      }}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {matchingJobs.map((job, index) => (
                  <tr
                    key={`${job.so}-${index}`}
                    className="h-14"
                    style={{
                      borderBottom:
                        index === matchingJobs.length - 1
                          ? "none"
                          : "1px solid rgba(215,224,227,0.6)",
                    }}
                  >
                    <td className="px-3 lg:px-4">
                      <span
                        className="font-rubik font-normal text-[13px] leading-4"
                        style={{ color: "#0097AC" }}
                      >
                        {job.so}
                      </span>
                    </td>
                    <td className="px-3 lg:px-4">
                      <span
                        className="font-rubik font-normal text-[13px]"
                        style={{ color: "#0097AC" }}
                      >
                        {job.role}
                      </span>
                    </td>
                    <td className="px-3 lg:px-4">
                      <span
                        className="font-rubik font-normal text-[13px]"
                        style={{ color: "#231F20" }}
                      >
                        {job.band}
                      </span>
                    </td>
                    <td className="px-3 lg:px-4">
                      <span
                        className="font-rubik font-normal text-[13px]"
                        style={{ color: "#231F20" }}
                      >
                        {job.location}
                      </span>
                    </td>
                    <td className="px-3 lg:px-4">
                      <span
                        className="font-rubik font-normal text-[13px]"
                        style={{ color: "#231F20" }}
                      >
                        {formatSkills(job.skills)}
                      </span>
                    </td>
                    <td className="px-3 lg:px-4">
                      {job.actionTaken && (
                        <span
                          className="inline-block rounded px-3 py-1 font-medium text-xs leading-[15px]"
                          style={getActionBadgeStyle(job.actionTaken)}
                        >
                          {job.actionTaken}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Card View */}
      <div className="md:hidden space-y-3">
        {matchingJobs.map((job, index) => (
          <div
            key={`${job.so}-${index}`}
            className="bg-white rounded-lg border shadow-sm p-4 space-y-3"
            style={{ borderColor: "#D7E0E3" }}
          >
            {/* Card Header */}
            <div 
              className="flex justify-between items-start pb-3 border-b" 
              style={{ borderColor: "#F2F7F8" }}
            >
              <div className="flex-1 min-w-0">
                <div 
                  className="text-xs font-medium mb-1" 
                  style={{ color: "#7A7480" }}
                >
                  SO#
                </div>
                <div 
                  className="text-base font-semibold" 
                  style={{ color: "#0097AC" }}
                >
                  {job.so}
                </div>
              </div>
              {job.actionTaken && (
                <span
                  className="inline-block text-xs font-medium px-2.5 py-1 rounded flex-shrink-0 ml-2"
                  style={getActionBadgeStyle(job.actionTaken)}
                >
                  {job.actionTaken}
                </span>
              )}
            </div>
            {/* Card Details */}
            <div className="space-y-2.5">
              {/* Role */}
              <div>
                <div 
                  className="text-xs font-medium mb-0.5" 
                  style={{ color: "#7A7480" }}
                >
                  Role
                </div>
                <div 
                  className="text-sm font-medium" 
                  style={{ color: "#0097AC" }}
                >
                  {job.role}
                </div>
              </div>
              {/* Band & Location Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div 
                    className="text-xs font-medium mb-0.5" 
                    style={{ color: "#7A7480" }}
                  >
                    Band
                  </div>
                  <div 
                    className="text-sm" 
                    style={{ color: "#231F20" }}
                  >
                    {job.band}
                  </div>
                </div>
                <div>
                  <div 
                    className="text-xs font-medium mb-0.5" 
                    style={{ color: "#7A7480" }}
                  >
                    Location
                  </div>
                  <div 
                    className="text-sm" 
                    style={{ color: "#231F20" }}
                  >
                    {job.location}
                  </div>
                </div>
              </div>
              {/* Skills */}
              <div>
                <div 
                  className="text-xs font-medium mb-1" 
                  style={{ color: "#7A7480" }}
                >
                  Skills
                </div>
                <div 
                  className="text-sm font-normal" 
                  style={{ color: "#231F20" }}
                >
                  {formatSkills(job.skills)}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Empty State for Mobile */}
        {matchingJobs.length === 0 && (
          <div
            className="text-center py-12 rounded-lg bg-white"
            style={{ borderColor: "#D7E0E3" }}
          >
            <svg
              className="w-16 h-16 mx-auto mb-4 opacity-30"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <p 
              className="text-base font-medium mb-1" 
              style={{ color: "#231F20" }}
            >
              No Matching Jobs
            </p>
            <p 
              className="text-sm" 
              style={{ color: "#7A7480" }}
            >
              No opportunities found for this employee
            </p>
          </div>
        )}
      </div>

      {/* Empty State for Desktop */}
      {matchingJobs.length === 0 && (
        <div className="hidden md:block">
          <div
            className="text-center py-16 rounded-lg bg-white"
            style={{ borderColor: "#D7E0E3" }}
          >
            <svg
              className="w-20 h-20 mx-auto mb-4 opacity-30"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <p 
              className="text-lg font-medium mb-2" 
              style={{ color: "#231F20" }}
            >
              No Matching Jobs Found
            </p>
            <p 
              className="text-sm" 
              style={{ color: "#7A7480" }}
            >
              There are currently no job openings matching this employee's profile.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MatchingJobsModal;