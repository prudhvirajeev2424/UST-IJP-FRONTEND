// import React from "react";
// import type { Employee } from "../../../types/employee";

// interface TableRowProps {
//   employee: Employee;
//   onViewMatchingJobs: (employee: Employee) => void;
// }

// const TableRow: React.FC<TableRowProps> = ({
//   employee,
//   onViewMatchingJobs,
// }) => {
//   return (
//     <tr className="table-row-hover" style={{ backgroundColor: "#F2F7F8" }}>
//       <style>{`
//         .table-row-hover {
//           transition: background-color 0.2s ease-out;
//         }
        
//         .table-row-hover:hover {
//           background-color: #e8f3e9ff !important;
//         }
//       `}</style>

//       <td className="px-6 py-5" style={{ borderBottom: "2px solid #FFFFFF" }}>
//         <span
//           className="font-rubik font-normal text-[14px] leading-[17px] tracking-[0px]"
//           style={{ color: "#231F20" }}
//         >
//           {employee.uid}
//         </span>
//       </td>
//       <td className="px-8 py-5" style={{ borderBottom: "2px solid #FFFFFF" }}>
//         <span
//           className="font-rubik font-normal text-[14px] leading-[17px] tracking-[0px]"
//           style={{ color: "#231F20" }}
//         >
//           {employee.name}
//         </span>
//       </td>
//       <td className="px-8 py-5" style={{ borderBottom: "2px solid #FFFFFF" }}>
//         <span
//           className="font-rubik font-normal text-[14px] leading-[17px] tracking-[0px]"
//           style={{ color: "#231F20" }}
//         >
//           {employee.role}
//         </span>
//       </td>
//       <td className="px-8 py-5" style={{ borderBottom: "2px solid #FFFFFF" }}>
//         <span
//           className="font-rubik font-normal text-[14px] leading-[17px] tracking-[0px]"
//           style={{ color: "#231F20" }}
//         >
//           {employee.projectId}
//         </span>
//       </td>
//       <td className="px-8 py-5" style={{ borderBottom: "2px solid #FFFFFF" }}>
//         <span
//           className="font-rubik font-normal text-[14px] leading-[17px] tracking-[0px]"
//           style={{ color: "#231F20" }}
//         >
//           {employee.tpAgeing}
//         </span>
//       </td>
//       <td className="px-8 py-5" style={{ borderBottom: "2px solid #FFFFFF" }}>
//         <span
//           className="font-rubik font-normal text-[14px] leading-[17px] tracking-[0px]"
//           style={{ color: "#231F20" }}
//         >
//           {employee.resumeUpdateDate}
//         </span>
//       </td>
//       <td
//         className="px-6 py-5 text-right"
//         style={{ borderBottom: "2px solid #FFFFFF" }}
//       >
//         <button
//           onClick={() => onViewMatchingJobs(employee)}
//           className="hover:underline font-rubik font-normal text-[14px] leading-[17px] tracking-[0px]"
//           style={{ color: "#006E74" }}
//         >
//           View matching jobs
//         </button>
//       </td>
//     </tr>
//   );
// };

// export default TableRow;


import React from "react";
import type { Employee } from "../../../types/employee";

interface TableRowProps {
  employee: Employee;
  onViewMatchingJobs: (employee: Employee) => void;
}

const TableRow: React.FC<TableRowProps> = ({
  employee,
  onViewMatchingJobs,
}) => {
  return (
    <tr className="table-row-hover" style={{ backgroundColor: "#F2F7F8", height: "48px" }}>
      <style>{`
        .table-row-hover {
          transition: background-color 0.2s ease-out;
        }
        
        .table-row-hover:hover {
          background-color: #e8f3e9ff !important;
        }
      `}</style>

      <td style={{ borderBottom: "1px solid #FFFFFF", paddingLeft: "16px", paddingRight: "16px" }}>
        <span
          style={{ 
            color: "#231F20",
            fontSize: "12px",
            fontFamily: "Rubik, sans-serif",
            lineHeight: "1.4"
          }}
        >
          {employee.uid}
        </span>
      </td>
      <td style={{ borderBottom: "1px solid #FFFFFF", paddingLeft: "16px", paddingRight: "16px" }}>
        <span
          style={{ 
            color: "#231F20",
            fontSize: "12px",
            fontFamily: "Rubik, sans-serif",
            lineHeight: "1.4"
          }}
        >
          {employee.name}
        </span>
      </td>
      <td style={{ borderBottom: "1px solid #FFFFFF", paddingLeft: "16px", paddingRight: "16px" }}>
        <span
          style={{ 
            color: "#231F20",
            fontSize: "12px",
            fontFamily: "Rubik, sans-serif",
            lineHeight: "1.4"
          }}
        >
          {employee.role}
        </span>
      </td>
      <td style={{ borderBottom: "1px solid #FFFFFF", paddingLeft: "16px", paddingRight: "16px" }}>
        <span
          style={{ 
            color: "#231F20",
            fontSize: "12px",
            fontFamily: "Rubik, sans-serif",
            lineHeight: "1.4"
          }}
        >
          {employee.projectId}
        </span>
      </td>
      <td style={{ borderBottom: "1px solid #FFFFFF", paddingLeft: "16px", paddingRight: "16px" }}>
        <span
          style={{ 
            color: "#231F20",
            fontSize: "12px",
            fontFamily: "Rubik, sans-serif",
            lineHeight: "1.4"
          }}
        >
          {employee.tpAgeing}
        </span>
      </td>
      <td style={{ borderBottom: "1px solid #FFFFFF", paddingLeft: "16px", paddingRight: "16px" }}>
        <span
          style={{ 
            color: "#231F20",
            fontSize: "12px",
            fontFamily: "Rubik, sans-serif",
            lineHeight: "1.4"
          }}
        >
          {employee.resumeUpdateDate}
        </span>
      </td>
      <td
        style={{ 
          borderBottom: "1px solid #FFFFFF", 
          paddingLeft: "16px", 
          paddingRight: "16px",
          textAlign: "right"
        }}
      >
        <button
          onClick={() => onViewMatchingJobs(employee)}
          className="hover:underline"
          style={{ 
            color: "#006E74",
            fontSize: "12px",
            fontFamily: "Rubik, sans-serif",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0
          }}
        >
          View matching jobs
        </button>
      </td>
    </tr>
  );
};

export default TableRow;