import React from "react";
import type { Employee } from "../../../types/TPManagerReportsTypes";
import TableRow from "./TableRow";
 
// Interface defining the props for the EmployeeTable component
interface EmployeeTableProps {
  employees: Employee[]; // List of employees to display
  onViewMatchingJobs: (employee: Employee) => void; // Function to handle job view for a specific employee
}
 
const EmployeeTable: React.FC<EmployeeTableProps> = ({
  employees,
  onViewMatchingJobs,
}) => {
  return (
    <div className="w-full">
      {/* Desktop Table View - This section is hidden on mobile */}
      <div className="hidden md:block overflow-x-auto rounded-lg">
        <div className="min-w-[700px]">
          <table
            className="w-full"
            style={{ borderCollapse: "separate", borderSpacing: "0" }}
          >
            {/* Table Header - Column titles for employee details */}
            <thead>
              <tr className="h-14" style={{ backgroundColor: "#D7E0E3" }}>
                <th
                  className="font-rubik font-medium text-[15px] text-left pl-4 pr-3 whitespace-nowrap"
                  style={{
                    color: "#7A7480",
                    borderRadius: "8px 0 0 0",
                  }}
                >
                  Uid
                </th>
                <th
                  className="font-rubik font-medium text-[15px] text-left px-3 whitespace-nowrap"
                  style={{ color: "#7A7480" }}
                >
                  Name
                </th>
                <th
                  className="font-rubik font-medium text-[15px] text-left px-3 whitespace-nowrap"
                  style={{ color: "#7A7480" }}
                >
                  Role
                </th>
                <th
                  className="font-rubik font-medium text-[15px] text-left px-3 whitespace-nowrap"
                  style={{ color: "#7A7480" }}
                >
                  Project ID
                </th>
                <th
                  className="font-rubik font-medium text-[15px] text-left px-3 whitespace-nowrap"
                  style={{ color: "#7A7480" }}
                >
                  TP ageing
                </th>
                <th
                  className="font-rubik font-medium text-[15px] text-left pl-3 pr-0 whitespace-nowrap -mr-2"
                  style={{ color: "#7A7480" }}
                >
                  Resume updation date
                </th>
                <th
                  className="font-rubik font-medium text-[15px] text-right pl-0 pr-4 -ml-2"
                  style={{
                    color: "#7A7480",
                    borderRadius: "0 8px 0 0",
                  }}
                ></th>
              </tr>
            </thead>
 
            {/* Table Body - Employee data rows */}
            <tbody>
              {employees.map((employee, index) => (
                <TableRow
                  key={`${employee.uid}-${index}`} // Unique key for each row
                  employee={employee} // Passing employee data to TableRow component
                  onViewMatchingJobs={onViewMatchingJobs} // Handler function for matching jobs
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
 
      {/* Mobile Card View - This section is visible on mobile devices */}
      <div className="md:hidden space-y-4">
        {employees.map((employee, index) => (
          <div
            key={`${employee.uid}-${index}`} // Unique key for each card
            className="bg-white rounded-lg border shadow-sm p-5 space-y-4"
            style={{ borderColor: "#D7E0E3" }}
          >
            <div
              className="flex justify-between items-start pb-4 border-b"
              style={{ borderColor: "#F2F7F8" }}
            >
              <div>
                <div
                  className="text-sm font-medium mb-1.5"
                  style={{ color: "#7A7480" }}
                >
                  Employee ID
                </div>
                <div
                  className="text-base font-semibold"
                  style={{ color: "#231F20" }}
                >
                  {employee.uid}
                </div>
              </div>
             
              {/* View Jobs button - Opens the jobs matching modal for the employee */}
              <button
                onClick={() => onViewMatchingJobs(employee)} // Trigger onViewMatchingJobs when clicked
                className="text-sm font-medium px-4 py-2 rounded text-white"
                style={{ backgroundColor: "#006E74" }}
                aria-label={`View matching jobs for ${employee.name}`} // Accessibility label
              >
                View Jobs
              </button>
            </div>
 
            {/* Employee details for mobile view */}
            <div className="space-y-3">
              <div>
                <div
                  className="text-sm font-medium mb-1"
                  style={{ color: "#7A7480" }}
                >
                  Name
                </div>
                <div className="text-base" style={{ color: "#231F20" }}>
                  {employee.name}
                </div>
              </div>
 
              <div>
                <div
                  className="text-sm font-medium mb-1"
                  style={{ color: "#7A7480" }}
                >
                  Role
                </div>
                <div className="text-base" style={{ color: "#231F20" }}>
                  {employee.role}
                </div>
              </div>
 
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div
                    className="text-sm font-medium mb-1"
                    style={{ color: "#7A7480" }}
                  >
                    Project ID
                  </div>
                  <div className="text-sm" style={{ color: "#231F20" }}>
                    {employee.projectId}
                  </div>
                </div>
               
                <div>
                  <div
                    className="text-sm font-medium mb-1"
                    style={{ color: "#7A7480" }}
                  >
                    TP Ageing
                  </div>
                  <div className="text-sm" style={{ color: "#231F20" }}>
                    {employee.tpAgeing}
                  </div>
                </div>
              </div>
 
              <div>
                <div
                  className="text-sm font-medium mb-1"
                  style={{ color: "#7A7480" }}
                >
                  Resume Updated
                </div>
                <div className="text-sm" style={{ color: "#231F20" }}>
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