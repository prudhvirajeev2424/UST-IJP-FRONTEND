import React from "react";
import type { Employee } from "../../../types/employee";
import { mockMatchingJobs } from "../../../data/mockMatchingJobs";

// Rest of the file stays the same
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
          borderRadius: "4px",
          padding: "4px 12px",
          fontWeight: 500,
          fontSize: "12px",
          lineHeight: "15px",
        };
      case "Actioned":
        return {
          backgroundColor: "rgba(255, 191, 0, 0.1)",
          color: "#FFBF00",
          borderRadius: "4px",
          padding: "4px 12px",
          fontWeight: 500,
          fontSize: "12px",
          lineHeight: "15px",
        };
      case "Rejected":
        return {
          backgroundColor: "rgba(252, 106, 89, 0.1)",
          color: "#FC6A59",
          borderRadius: "4px",
          padding: "4px 12px",
          fontWeight: 500,
          fontSize: "12px",
          lineHeight: "15px",
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
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3
          className="font-rubik font-semibold"
          style={{
            color: "#231F20",
            fontSize: "16px",
            lineHeight: "19px",
          }}
        >
          Matching opportunities
        </h3>

        {/* Bigger Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            width: "40px", // ⬅️ bigger container
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#7A7480"
            strokeWidth="3.2" // ⬅️ thicker X
            style={{
              width: "22px", // ⬅️ visually bigger X
              height: "22px",
            }}
          >
            <line x1="19" y1="5" x2="5" y2="19" />
            <line x1="5" y1="5" x2="19" y2="19" />
          </svg>
        </button>
      </div>

      {/* White Table Card with more spacing */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "10px",
          padding: "16px", // ⬅️ space between table and outer layout
        }}
      >
        <table className="w-full border-collapse">
          <thead>
            <tr
              style={{
                backgroundColor: "rgba(215, 224, 227, 0.15)",
                height: "60px",
              }}
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
                  className="px-4 text-left font-rubik font-medium"
                  style={{
                    color: "#7A7480",
                    fontSize: "14px",
                    lineHeight: "17px",
                    borderBottom: "1px solid rgba(215,224,227,0.3)",
                    borderTopLeftRadius: idx === 0 ? "10px" : undefined,
                    borderTopRightRadius: idx === 5 ? "10px" : undefined,
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
                style={{
                  borderBottom:
                    index === matchingJobs.length - 1
                      ? "none"
                      : "1px solid rgba(215,224,227,0.6)",
                  height: "64px",
                }}
              >
                <td className="px-4">
                  <span
                    className="font-rubik"
                    style={{
                      color: "#0097AC",
                      fontSize: "14px",
                      lineHeight: "17px",
                    }}
                  >
                    {job.so}
                  </span>
                </td>

                <td className="px-4">
                  <span
                    className="font-rubik"
                    style={{ color: "#0097AC", fontSize: "14px" }}
                  >
                    {job.role}
                  </span>
                </td>

                <td className="px-4">
                  <span
                    className="font-rubik"
                    style={{ color: "#231F20", fontSize: "14px" }}
                  >
                    {job.band}
                  </span>
                </td>

                <td className="px-4">
                  <span
                    className="font-rubik"
                    style={{ color: "#231F20", fontSize: "14px" }}
                  >
                    {job.location}
                  </span>
                </td>

                <td className="px-4">
                  <span
                    className="font-rubik"
                    style={{ color: "#231F20", fontSize: "14px" }}
                  >
                    {formatSkills(job.skills)}
                  </span>
                </td>

                <td className="px-4">
                  {job.actionTaken && (
                    <span style={getActionBadgeStyle(job.actionTaken)}>
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
  );
};

export default MatchingJobsModal;
