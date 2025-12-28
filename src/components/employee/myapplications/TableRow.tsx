import React from "react";
import type { Application } from "../../../types/application";
import StatusBadge from "./StatusBadge";
import SkillsBadge from "./SkillsBadge";
import externalrequesticon from "../../../assets/externalrequesticon.svg";

interface TableRowProps {
  application: Application;
  isClickable?: boolean;
  onClick?: () => void;
}

const TableRow: React.FC<TableRowProps> = ({
  application,
  isClickable = false,
  onClick,
}) => {
  return (
    <tr
      className={`border-b border-[#E5E7EB] transition-colors hover:bg-[#F9FAFB] ${
        isClickable ? "cursor-pointer" : ""
      }`}
      onClick={isClickable ? onClick : undefined}
    >
      {/* SO ID */}
      <td className="w-[100px] px-3 py-3.5">
        <span className="text-[13px] font-normal text-[#006E74] hover:underline leading-tight cursor-pointer">
          {application.soId}
        </span>
      </td>

      {/* Role */}
      <td className="w-[180px] px-3 py-3.5">
        <span className="text-[13px] font-normal text-[#231F20] leading-tight">
          {application.role}
        </span>
      </td>

      {/* Account */}
      <td className="w-[100px] px-3 py-3.5">
        <span className="text-[13px] font-normal text-[#231F20] leading-tight">
          {application.account}
        </span>
      </td>

      {/* Applied Date */}
      <td className="w-[110px] px-3 py-3.5">
        <span className="text-[13px] font-normal text-[#231F20] leading-tight">
          {application.appliedDate}
        </span>
      </td>

      {/* Hiring Manager */}
      <td className="w-[140px] px-3 py-3.5">
        <div className="flex items-center gap-1.5">
          <span className="text-[13px] font-normal text-[#231F20] leading-tight">
            {application.hiringManager}
          </span>
          {application.hasManagerInfo && (
            <div>
              <img
                src={externalrequesticon}
                title="External Request"
                alt="externalrequest"
                className="h-[22px] w-[22px]"
              />
            </div>
          )}
        </div>
      </td>

      {/* Required Skills */}
      <td className="w-[140px] px-3 py-3.5">
        <SkillsBadge skills={application.requiredSkills} />
      </td>

      {/* Status */}
      <td className="w-[120px] px-3 py-3.5">
        <StatusBadge status={application.status} />
      </td>
    </tr>
  );
};

export default TableRow;
