/**
 * TableRow Component
 * 
 * A single row component for the employee table that displays employee information
 * with an action button to view matching job opportunities.
 * 
 * Design Features:
 * - Subtle hover effect with color transition (gray to light green)
 * - Consistent spacing with white borders between rows
 * - Text-based action button with underline on hover
 * - Uniform typography using Rubik font family

 * 
 * @component
 * @example
 * ```tsx
 * <table>
 *   <tbody>
 *     <TableRow 
 *       employee={employeeData}
 *       onViewMatchingJobs={(emp) => openJobModal(emp)}
 *     />
 *   </tbody>
 * </table>
 * ```
 * 
 * @see {@link Employee} for the employee data structure
 * @see {@link EmployeeTable} for parent table component usage
 */

import type React from "react";
import type { Employee } from "../../../types/TPManagerReportsTypes";

/**
 * Props for the TableRow component
 * 
 * @interface TableRowProps
 * @property {Employee} employee - Employee data object containing all fields to display
 * @property {(employee: Employee) => void} onViewMatchingJobs - Callback invoked when "View matching jobs" is clicked
 *                                                                Receives the employee object for context
 */
interface TableRowProps {
  employee: Employee;
  onViewMatchingJobs: (employee: Employee) => void;
}

/**
 * TableRow Component
  
 * Implementation Notes:
 * - Each cell uses consistent padding (px-3 py-3) for uniform spacing
 * - White 2px borders create visual row separation without harsh lines
 * - Hover state provides visual feedback without overwhelming the interface
 * - Action button uses text-only design for minimal visual weight
 * - All text wrapped in <span> for consistent styling control
 * 

 * @param {TableRowProps} props - Component props
 * @returns {JSX.Element} Rendered table row with employee data
 */
const TableRow: React.FC<TableRowProps> = ({
  employee,
  onViewMatchingJobs,
}) => {
  return (
    <tr 
      className="bg-[#F2F7F8] hover:bg-[#e8f3e9] transition-colors duration-250 ease-out"
    >
      {/* 
        Employee UID Column
        - Unique identifier for the employee
        - whitespace-nowrap prevents ID wrapping which could cause confusion
      */}
      <td className="px-3 py-3 border-b-2 border-white whitespace-nowrap">
        <span className="font-rubik font-normal text-[11px] leading-[1.4] text-[#231F20]">
          {employee.uid}
        </span>
      </td>
      
      {/* 
        Name Column
        - Employee's full name
      */}
      <td className="px-3 py-3 border-b-2 border-white whitespace-nowrap">
        <span className="font-rubik font-normal text-[11px] leading-[1.4] text-[#231F20]">
          {employee.name}
        </span>
      </td>
      
      {/* 
        Role Column
        - Current job title or position
      */}
      <td className="px-3 py-3 border-b-2 border-white whitespace-nowrap">
        <span className="font-rubik font-normal text-[11px] leading-[1.4] text-[#231F20]">
          {employee.role}
        </span>
      </td>
      
      {/* 
        Project ID Column
        - Current project assignment identifier
      */}
      <td className="px-3 py-3 border-b-2 border-white whitespace-nowrap">
        <span className="font-rubik font-normal text-[11px] leading-[1.4] text-[#231F20]">
          {employee.projectId}
        </span>
      </td>
      
      {/* 
        TP Ageing Column
        - Time Period ageing: Duration since employee became available
      */}
      <td className="px-3 py-3 border-b-2 border-white whitespace-nowrap">
        <span className="font-rubik font-normal text-[11px] leading-[1.4] text-[#231F20]">
          {employee.tpAgeing}
        </span>
      </td>
      
      {/* 
        Resume Update Date Column
        - Last modification date of employee's resume
      */}
      <td className="px-3 py-3 border-b-2 border-white whitespace-nowrap">
        <span className="font-rubik font-normal text-[11px] leading-[1.4] text-[#231F20]">
          {employee.resumeUpdateDate}
        </span>
      </td>
      
      {/* 
        Actions Column
        - Right-aligned for consistent action placement
      */}
      <td className="px-3 py-3 border-b-2 border-white text-right whitespace-nowrap">
        <button
          onClick={() => onViewMatchingJobs(employee)}
          className="hover:underline font-rubik font-normal text-[11px] leading-[1.4] text-[#006E74] bg-transparent border-none cursor-pointer p-0"
          aria-label={`View matching jobs for ${employee.name}`}
          type="button"
        >
          View matching jobs
        </button>
      </td>
    </tr>
  );
};

export default TableRow;

