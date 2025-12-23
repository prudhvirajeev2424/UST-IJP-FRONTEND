import React from "react";
import type { Application } from "../types/application";
import { UserCircleIcon } from "./Icons";

interface TableRowProps {
  application: Application;
}

export const TableRow: React.FC<TableRowProps> = ({ application }) => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  const getActionColor = (action: string) => {
    switch (action) {
      case "Shortlisted":
        return { color: "#01B27C", backgroundColor: "#D4F4E7" };
      case "Allocated":
        return { color: "#0097AC", backgroundColor: "#D4EEF3" };
      case "Rejected":
        return { color: "#FC6A59", backgroundColor: "#FFE5E1" };
      case "Pending":
        return { color: "#B77FB8", backgroundColor: "#F3E5F2" };
      case "Actioned":
        return { color: "#E6B800", backgroundColor: "#FFF4D4" };
      default:
        return { color: "#7A7480", backgroundColor: "#F2F2F2" };
    }
  };

  const actionStyle = getActionColor(application.action);

  return (
    <tr style={{ backgroundColor: "#FFFFFF" }}>
      <td
        className="px-4 py-3 overflow-visible relative"
        style={{ borderBottom: "2px solid #FFFFFF" }}
      >
        <div className="flex items-center gap-2">
          <div className="w-[20px] flex-shrink-0">
            {application.hasIcon && (
              <div
                className="relative text-[#0097AC] cursor-pointer z-50"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                <UserCircleIcon />
                {showTooltip && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 bottom-8 z-[100] px-4 py-2 rounded-lg shadow-lg whitespace-nowrap"
                    style={{ backgroundColor: "#006E74", color: "#FFFFFF" }}
                  >
                    <div className="text-[13px] font-normal">
                      External request
                    </div>
                    <div
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0"
                      style={{
                        borderLeft: "6px solid transparent",
                        borderRight: "6px solid transparent",
                        borderTop: "8px solid #006E74",
                      }}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
          <span
            className="font-rubik font-normal text-[14px] leading-[17px] tracking-[0px] flex-shrink-0"
            style={{ color: "#0097AC", minWidth: "80px" }}
          >
            {application.sid}
          </span>
        </div>
      </td>
      <td className="px-4 py-3" style={{ borderBottom: "2px solid #FFFFFF" }}>
        <span
          className="font-rubik font-normal text-[14px] leading-[17px] tracking-[0px]"
          style={{ color: "#7A7480" }}
        >
          {application.uid}
        </span>
      </td>
      <td className="px-4 py-3" style={{ borderBottom: "2px solid #FFFFFF" }}>
        <span
          className="font-rubik font-normal text-[14px] leading-[17px] tracking-[0px]"
          style={{ color: "#7A7480" }}
        >
          {application.name}
        </span>
      </td>
      <td className="px-4 py-3" style={{ borderBottom: "2px solid #FFFFFF" }}>
        <span
          className="font-rubik font-normal text-[14px] leading-[17px] tracking-[0px]"
          style={{ color: "#0097AC" }}
        >
          {application.role}
        </span>
      </td>
      <td className="px-4 py-3" style={{ borderBottom: "2px solid #FFFFFF" }}>
        <span
          className="font-rubik font-normal text-[14px] leading-[17px] tracking-[0px]"
          style={{ color: "#7A7480" }}
        >
          {application.location}
        </span>
      </td>
      <td className="px-4 py-3" style={{ borderBottom: "2px solid #FFFFFF" }}>
        <span
          className="font-rubik font-normal text-[14px] leading-[17px] tracking-[0px]"
          style={{ color: "#7A7480" }}
        >
          {application.date}
        </span>
      </td>
      <td className="px-4 py-3" style={{ borderBottom: "2px solid #FFFFFF" }}>
        <span
          className="inline-flex items-center justify-center w-[65px] h-[32px] rounded-full text-[14px] font-medium border-2"
          style={{
            color: "#01B27C",
            backgroundColor: "#FFFFFF",
            borderColor: "#01B27C",
          }}
        >
          {application.score}
        </span>
      </td>
      <td className="px-6 py-5" style={{ borderBottom: "2px solid #FFFFFF" }}>
        <span
          className="inline-flex items-center justify-center min-w-[95px] h-[30px] px-4 rounded-md text-[13px] font-normal"
          style={{
            color: actionStyle.color,
            backgroundColor: actionStyle.backgroundColor,
          }}
        >
          {application.action}
        </span>
      </td>
    </tr>
  );
};
