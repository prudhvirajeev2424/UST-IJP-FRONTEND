/**
 * EmployeeTable Component
 * 
 * A responsive table component that displays employee information with support for
 * both desktop (table layout) and mobile (card layout) views. Provides functionality
 * to view matching jobs for each employee.
 * 
 * @component
 * @example
 * ```tsx
 * <EmployeeTable 
 *   employees={employeeList}
 *   onViewMatchingJobs={(employee) => console.log(employee)}
 * />
 * ```
 */

import React from "react";
import type { Employee } from "../../../types/TPManagerReportsTypes";
import TableRow from "./TableRow";

/**
 * Props for the EmployeeTable component
 * 
 * @interface EmployeeTableProps
 * @property {Employee[]} employees - Array of employee objects to display in the table
 * @property {(employee: Employee) => void} onViewMatchingJobs - Callback function triggered when "View Jobs" is clicked
 */
interface EmployeeTableProps {
  employees: Employee[];
  onViewMatchingJobs: (employee: Employee) => void;
}

/**
 * EmployeeTable Component
 * 
 * Features:
 * - Responsive design with breakpoint at 'md' (768px)
 * - Desktop: Traditional table layout with horizontal scrolling
 * - Mobile: Card-based layout for better touch interaction
 * - Consistent styling using inline styles for precise color matching
 * - Minimum width constraint (700px) for desktop table to prevent cramping
 * 
 * @param {EmployeeTableProps} props - Component props
 * @returns {JSX.Element} Rendered employee table or card list
 */
const EmployeeTable: React.FC<EmployeeTableProps> = ({
  employees,
  onViewMatchingJobs,
}) => {
  return (
    <div className="w-full">
      {/* 
        Desktop Table View
        - Hidden on mobile (< 768px) using Tailwind's 'hidden md:block'
        - Uses CSS table with separate borders for rounded corners
        - Horizontal scroll enabled for narrow desktop viewports
      */}
      <div className="hidden md:block overflow-x-auto rounded-lg">
        <div className="min-w-[700px]">
          <table
            className="w-full"
            // Separate border spacing allows for rounded corners on first/last cells
            style={{ borderCollapse: "separate", borderSpacing: "0" }}
          >
            {/* Table Header */}
            <thead>
              <tr className="h-10" style={{ backgroundColor: "#D7E0E3" }}>
                {/* Employee ID Column */}
                <th
                  className="font-rubik font-medium text-[11px] text-left pl-3 pr-2 whitespace-nowrap"
                  style={{
                    color: "#7A7480",
                    borderRadius: "8px 0 0 0", // Top-left rounded corner
                  }}
                >
                  Uid
                </th>
                
                {/* Name Column */}
                <th
                  className="font-rubik font-medium text-[11px] text-left px-2 whitespace-nowrap"
                  style={{ color: "#7A7480" }}
                >
                  Name
                </th>
                
                {/* Role Column */}
                <th
                  className="font-rubik font-medium text-[11px] text-left px-2 whitespace-nowrap"
                  style={{ color: "#7A7480" }}
                >
                  Role
                </th>
                
                {/* Project ID Column */}
                <th
                  className="font-rubik font-medium text-[11px] text-left px-2 whitespace-nowrap"
                  style={{ color: "#7A7480" }}
                >
                  Project ID
                </th>
                
                {/* TP Ageing Column - Time Period since employee became available */}
                <th
                  className="font-rubik font-medium text-[11px] text-left px-2 whitespace-nowrap"
                  style={{ color: "#7A7480" }}
                >
                  TP ageing
                </th>
                
                {/* Resume Update Date Column */}
                <th
                  className="font-rubik font-medium text-[11px] text-left px-2 whitespace-nowrap"
                  style={{ color: "#7A7480" }}
                >
                  Resume updation date
                </th>
                
                {/* Actions Column - Empty header for action buttons */}
                <th
                  className="font-rubik font-medium text-[11px] text-right pl-2 pr-3"
                  style={{
                    color: "#7A7480",
                    borderRadius: "0 8px 0 0", // Top-right rounded corner
                  }}
                ></th>
              </tr>
            </thead>
            
            {/* Table Body */}
            <tbody>
              {employees.map((employee, index) => (
                <TableRow
                  key={`${employee.uid}-${index}`}
                  employee={employee}
                  onViewMatchingJobs={onViewMatchingJobs}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 
        Mobile Card View
        - Visible only on mobile (< 768px) using Tailwind's 'md:hidden'
        - Card-based layout optimized for touch interactions
        - Vertical spacing between cards for visual separation
      */}
      <div className="md:hidden space-y-3">
        {employees.map((employee, index) => (
          <div
            key={`${employee.uid}-${index}`}
            className="bg-white rounded-lg border shadow-sm p-4 space-y-3"
            style={{ borderColor: "#D7E0E3" }}
          >
            {/* Card Header - Employee ID and Action Button */}
            <div
              className="flex justify-between items-start pb-3 border-b"
              style={{ borderColor: "#F2F7F8" }}
            >
              {/* Employee ID Section */}
              <div>
                <div
                  className="text-xs font-medium mb-1"
                  style={{ color: "#7A7480" }}
                >
                  Employee ID
                </div>
                <div
                  className="text-sm font-semibold"
                  style={{ color: "#231F20" }}
                >
                  {employee.uid}
                </div>
              </div>
              
              {/* View Jobs Button - Primary action for mobile */}
              <button
                onClick={() => onViewMatchingJobs(employee)}
                className="text-xs font-medium px-3 py-1.5 rounded text-white"
                style={{ backgroundColor: "#006E74" }}
                aria-label={`View matching jobs for ${employee.name}`}
              >
                View Jobs
              </button>
            </div>

            {/* Card Details - Employee Information Grid */}
            <div className="space-y-2.5">
              {/* Name Field */}
              <div>
                <div
                  className="text-xs font-medium mb-0.5"
                  style={{ color: "#7A7480" }}
                >
                  Name
                </div>
                <div className="text-sm" style={{ color: "#231F20" }}>
                  {employee.name}
                </div>
              </div>

              {/* Role Field */}
              <div>
                <div
                  className="text-xs font-medium mb-0.5"
                  style={{ color: "#7A7480" }}
                >
                  Role
                </div>
                <div className="text-sm" style={{ color: "#231F20" }}>
                  {employee.role}
                </div>
              </div>

              {/* Two-column Grid for Project ID and TP Ageing */}
              <div className="grid grid-cols-2 gap-3">
                {/* Project ID Field */}
                <div>
                  <div
                    className="text-xs font-medium mb-0.5"
                    style={{ color: "#7A7480" }}
                  >
                    Project ID
                  </div>
                  <div className="text-xs" style={{ color: "#231F20" }}>
                    {employee.projectId}
                  </div>
                </div>
                
                {/* TP Ageing Field */}
                <div>
                  <div
                    className="text-xs font-medium mb-0.5"
                    style={{ color: "#7A7480" }}
                  >
                    TP Ageing
                  </div>
                  <div className="text-xs" style={{ color: "#231F20" }}>
                    {employee.tpAgeing}
                  </div>
                </div>
              </div>

              {/* Resume Update Date Field */}
              <div>
                <div
                  className="text-xs font-medium mb-0.5"
                  style={{ color: "#7A7480" }}
                >
                  Resume Updated
                </div>
                <div className="text-xs" style={{ color: "#231F20" }}>
                  {employee.resumeUpdateDate}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeTable;