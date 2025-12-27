import type React from "react"
import type { Employee } from "../../../types/employee"

interface TableRowProps {
  employee: Employee
  onViewMatchingJobs: (employee: Employee) => void
}

const TableRow: React.FC<TableRowProps> = ({ employee, onViewMatchingJobs }) => {
  return (
    <tr className="bg-[#F2F7F8] hover:bg-[#e8f3e9] transition-colors duration-200 ease-out">
      <td className="px-3 py-3 border-b-2 border-white whitespace-nowrap">
        <span className="font-rubik font-normal text-[11px] leading-[1.4] text-[#231F20]">{employee.uid}</span>
      </td>
      <td className="px-3 py-3 border-b-2 border-white whitespace-nowrap">
        <span className="font-rubik font-normal text-[11px] leading-[1.4] text-[#231F20]">{employee.name}</span>
      </td>
      <td className="px-3 py-3 border-b-2 border-white whitespace-nowrap">
        <span className="font-rubik font-normal text-[11px] leading-[1.4] text-[#231F20]">{employee.role}</span>
      </td>
      <td className="px-3 py-3 border-b-2 border-white whitespace-nowrap">
        <span className="font-rubik font-normal text-[11px] leading-[1.4] text-[#231F20]">{employee.projectId}</span>
      </td>
      <td className="px-3 py-3 border-b-2 border-white whitespace-nowrap">
        <span className="font-rubik font-normal text-[11px] leading-[1.4] text-[#231F20]">{employee.tpAgeing}</span>
      </td>
      <td className="px-3 py-3 border-b-2 border-white whitespace-nowrap">
        <span className="font-rubik font-normal text-[11px] leading-[1.4] text-[#231F20]">
          {employee.resumeUpdateDate}
        </span>
      </td>
      <td className="px-3 py-3 border-b-2 border-white text-right whitespace-nowrap">
        <button
          onClick={() => onViewMatchingJobs(employee)}
          className="hover:underline font-rubik font-normal text-[11px] leading-[1.4] text-[#006E74] bg-transparent border-none cursor-pointer p-0"
        >
          View matching jobs
        </button>
      </td>
    </tr>
  )
}

export default TableRow
