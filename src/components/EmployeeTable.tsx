import React from "react";
import type { Employee } from "../types/employee";
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
    <div className="overflow-hidden" style={{ borderRadius: "10px" }}>
      <table
        className="w-full"
        style={{ borderCollapse: "separate", borderSpacing: "0" }}
      >
        <thead>
          <tr style={{ backgroundColor: "#D7E0E3" }}>
            <th
              className="px-6 py-4 text-left text-sm font-medium"
              style={{
                color: "var(--7a7480)",
                borderRadius: "10px 0 0 0",
              }}
            >
              Uid
            </th>
            <th
              className="px-8 py-4 text-left text-sm font-medium"
              style={{ color: "var(--7a7480)" }}
            >
              Name
            </th>
            <th
              className="px-8 py-4 text-left text-sm font-medium"
              style={{ color: "var(--7a7480)" }}
            >
              Role
            </th>
            <th
              className="px-8 py-4 text-left text-sm font-medium"
              style={{ color: "var(--7a7480)" }}
            >
              Project ID
            </th>
            <th
              className="px-8 py-4 text-left text-sm font-medium"
              style={{ color: "var(--7a7480)" }}
            >
              TP ageing
            </th>
            <th
              className="px-8 py-4 text-left text-sm font-medium"
              style={{ color: "var(--7a7480)" }}
            >
              Resume updation date
            </th>
            <th
              className="px-6 py-4 text-right text-sm font-medium"
              style={{
                color: "var(--7a7480)",
                borderRadius: "0 10px 0 0",
              }}
            >
              {/* Action column - no header text */}
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
  );
};

export default EmployeeTable;