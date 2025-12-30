import type React from "react";
import type { Employee } from "../../../types/TPManagerReportsTypes";
 
interface TableRowProps {
  employee: Employee;
  onViewMatchingJobs: (employee: Employee) => void;
}
 
const TableRow: React.FC<TableRowProps> = ({
  employee,
  onViewMatchingJobs,
}) => {
  return (
    <tr
      className="bg-[#F2F7F8] hover:bg-[#e8f3e9] transition-colors duration-250 ease-out"
    >
      {/* Employee UID - INCREASED PADDING FOR BETTER SPACING */}
      <td className="px-4 py-5 border-b-[6px] border-white whitespace-nowrap">
        <span className="font-rubik font-normal text-[15px] leading-[1.4] text-[#231F20]">
          {employee.uid}
        </span>
      </td>
     
      {/* Name */}
      <td className="px-3 py-5 border-b-[6px] border-white whitespace-nowrap">
        <span className="font-rubik font-normal text-[15px] leading-[1.4] text-[#231F20]">
          {employee.name}
        </span>
      </td>
     
      {/* Role */}
      <td className="px-3 py-5 border-b-[6px] border-white whitespace-nowrap">
        <span className="font-rubik font-normal text-[15px] leading-[1.4] text-[#231F20]">
          {employee.role}
        </span>
      </td>
     
      {/* Project ID */}
      <td className="px-3 py-5 border-b-[6px] border-white whitespace-nowrap">
        <span className="font-rubik font-normal text-[15px] leading-[1.4] text-[#231F20]">
          {employee.projectId}
        </span>
      </td>
     
      {/* TP Ageing */}
      <td className="px-3 py-5 border-b-[6px] border-white whitespace-nowrap">
        <span className="font-rubik font-normal text-[15px] leading-[1.4] text-[#231F20]">
          {employee.tpAgeing}
        </span>
      </td>
     
      {/* Resume Update Date - Negative margin to pull closer */}
      <td className="pl-3 pr-0 py-5 border-b-[6px] border-white whitespace-nowrap -mr-2">
        <span className="font-rubik font-normal text-[15px] leading-[1.4] text-[#231F20]">
          {employee.resumeUpdateDate}
        </span>
      </td>
     
      {/* Actions - View matching jobs button - Negative margin for tighter spacing */}
      <td className="pl-0 pr-4 py-5 border-b-[6px] border-white text-right whitespace-nowrap -ml-2">
        <button
          onClick={() => onViewMatchingJobs(employee)}
          className="hover:underline font-rubik font-normal text-[15px] leading-[1.4] text-[#006E74] bg-transparent border-none cursor-pointer p-0"
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
 