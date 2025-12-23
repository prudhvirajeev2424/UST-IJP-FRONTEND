import React from 'react';
import type { Employee } from "../types/employee";


interface TableRowProps {
  employee: Employee;
  onViewMatchingJobs: (employee: Employee) => void;
}

const TableRow: React.FC<TableRowProps> = ({ employee, onViewMatchingJobs }) => {
  return (
    <tr 
      className="table-row-hover"
      style={{ backgroundColor: '#F2F7F8' }}
    >
      <style>{`
        .table-row-hover {
          transition: background-color 0.2s ease-out;
        }
        
        .table-row-hover:hover {
          background-color: #e8f3e9ff !important;
        }
      `}</style>
      
      <td className="px-6 py-5" style={{ borderBottom: '2px solid #FFFFFF' }}>
        <span className="font-rubik font-normal text-[14px] leading-[17px] tracking-[0px]" style={{ color: '#231F20' }}>
          {employee.uid}
        </span>
      </td>
      <td className="px-8 py-5" style={{ borderBottom: '2px solid #FFFFFF' }}>
        <span className="font-rubik font-normal text-[14px] leading-[17px] tracking-[0px]" style={{ color: '#231F20' }}>
          {employee.name}
        </span>
      </td>
      <td className="px-8 py-5" style={{ borderBottom: '2px solid #FFFFFF' }}>
        <span className="font-rubik font-normal text-[14px] leading-[17px] tracking-[0px]" style={{ color: '#231F20' }}>
          {employee.role}
        </span>
      </td>
      <td className="px-8 py-5" style={{ borderBottom: '2px solid #FFFFFF' }}>
        <span className="font-rubik font-normal text-[14px] leading-[17px] tracking-[0px]" style={{ color: '#231F20' }}>
          {employee.projectId}
        </span>
      </td>
      <td className="px-8 py-5" style={{ borderBottom: '2px solid #FFFFFF' }}>
        <span className="font-rubik font-normal text-[14px] leading-[17px] tracking-[0px]" style={{ color: '#231F20' }}>
          {employee.tpAgeing}
        </span>
      </td>
      <td className="px-8 py-5" style={{ borderBottom: '2px solid #FFFFFF' }}>
        <span className="font-rubik font-normal text-[14px] leading-[17px] tracking-[0px]" style={{ color: '#231F20' }}>
          {employee.resumeUpdateDate}
        </span>
      </td>
      <td className="px-6 py-5 text-right" style={{ borderBottom: '2px solid #FFFFFF' }}>
        <button
          onClick={() => onViewMatchingJobs(employee)}
          className="hover:underline font-rubik font-normal text-[14px] leading-[17px] tracking-[0px]"
          style={{ color: 'var(--0097ac)' }}
        >
          View matching jobs
        </button>
      </td>
    </tr>
  );
};

export default TableRow;