import React from "react";
import type { Employee } from "../../../types/employee";
import TableRow from "./TableRow";

interface EmployeeTableProps {
  employees: Employee[];
  onViewMatchingJobs: (employee: Employee) => void;
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({
  employees,
  onViewMatchingJobs,
}) => {
  return (
    <div className="w-full">
      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto rounded-lg">
        <div className="min-w-[700px]">
          <table 
            className="w-full" 
            style={{ borderCollapse: "separate", borderSpacing: "0" }}
          >
            <thead>
              <tr 
                className="h-10"
                style={{ backgroundColor: "#D7E0E3" }}
              >
                <th
                  className="font-rubik font-medium text-[11px] text-left pl-3 pr-2 whitespace-nowrap"
                  style={{
                    color: "#7A7480",
                    borderRadius: "8px 0 0 0"
                  }}
                >
                  Uid
                </th>
                <th
                  className="font-rubik font-medium text-[11px] text-left px-2 whitespace-nowrap"
                  style={{ color: "#7A7480" }}
                >
                  Name
                </th>
                <th
                  className="font-rubik font-medium text-[11px] text-left px-2 whitespace-nowrap"
                  style={{ color: "#7A7480" }}
                >
                  Role
                </th>
                <th
                  className="font-rubik font-medium text-[11px] text-left px-2 whitespace-nowrap"
                  style={{ color: "#7A7480" }}
                >
                  Project ID
                </th>
                <th
                  className="font-rubik font-medium text-[11px] text-left px-2 whitespace-nowrap"
                  style={{ color: "#7A7480" }}
                >
                  TP ageing
                </th>
                <th
                  className="font-rubik font-medium text-[11px] text-left px-2 whitespace-nowrap"
                  style={{ color: "#7A7480" }}
                >
                  Resume updation date
                </th>
                <th
                  className="font-rubik font-medium text-[11px] text-right pl-2 pr-3"
                  style={{
                    color: "#7A7480",
                    borderRadius: "0 8px 0 0"
                  }}
                >
                </th>
              </tr>
            </thead>
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

      {/* Mobile Card View */}
      <div className="md:hidden space-y-3">
        {employees.map((employee, index) => (
          <div
            key={`${employee.uid}-${index}`}
            className="bg-white rounded-lg border shadow-sm p-4 space-y-3"
            style={{ borderColor: "#D7E0E3" }}
          >
            {/* Card Header */}
            <div 
              className="flex justify-between items-start pb-3 border-b" 
              style={{ borderColor: "#F2F7F8" }}
            >
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
              <button
                onClick={() => onViewMatchingJobs(employee)}
                className="text-xs font-medium px-3 py-1.5 rounded text-white"
                style={{ backgroundColor: "#006E74" }}
              >
                View Jobs
              </button>
            </div>

            {/* Card Details */}
            <div className="space-y-2.5">
              <div>
                <div 
                  className="text-xs font-medium mb-0.5" 
                  style={{ color: "#7A7480" }}
                >
                  Name
                </div>
                <div 
                  className="text-sm" 
                  style={{ color: "#231F20" }}
                >
                  {employee.name}
                </div>
              </div>
              
              <div>
                <div 
                  className="text-xs font-medium mb-0.5" 
                  style={{ color: "#7A7480" }}
                >
                  Role
                </div>
                <div 
                  className="text-sm" 
                  style={{ color: "#231F20" }}
                >
                  {employee.role}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div 
                    className="text-xs font-medium mb-0.5" 
                    style={{ color: "#7A7480" }}
                  >
                    Project ID
                  </div>
                  <div 
                    className="text-xs" 
                    style={{ color: "#231F20" }}
                  >
                    {employee.projectId}
                  </div>
                </div>
                <div>
                  <div 
                    className="text-xs font-medium mb-0.5" 
                    style={{ color: "#7A7480" }}
                  >
                    TP Ageing
                  </div>
                  <div 
                    className="text-xs" 
                    style={{ color: "#231F20" }}
                  >
                    {employee.tpAgeing}
                  </div>
                </div>
              </div>
              
              <div>
                <div 
                  className="text-xs font-medium mb-0.5" 
                  style={{ color: "#7A7480" }}
                >
                  Resume Updated
                </div>
                <div 
                  className="text-xs" 
                  style={{ color: "#231F20" }}
                >
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