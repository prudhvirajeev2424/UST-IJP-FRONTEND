import React from "react";
import type { Application } from "../types/application";
import { TableRow } from "./TableRow";

interface ApplicationsTableProps {
  applications: Application[];
}

export const ApplicationsTable: React.FC<ApplicationsTableProps> = ({
  applications,
}) => {
  return (
    <div className="w-full bg-white rounded-lg overflow-visible">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="sticky top-0 z-10 px-3 py-2 text-left overflow-visible bg-[#D7E0E3]">
              <div className="flex items-center gap-2">
                <div className="w-[20px] flex-shrink-0"></div>
                <span
                  className="font-rubik font-normal text-[13px] leading-[15px] tracking-[0px]"
                  style={{ color: "#7A7480", minWidth: "60px" }}
                >
                  SO#
                </span>
              </div>
            </th>
            <th className="sticky top-0 z-10 px-3 py-2 text-left bg-[#D7E0E3]">
              <span
                className="font-rubik font-normal text-[13px] leading-[15px] tracking-[0px]"
                style={{ color: "#7A7480" }}
              >
                UID
              </span>
            </th>
            <th className="sticky top-0 z-10 px-3 py-2 text-left bg-[#D7E0E3]">
              <span
                className="font-rubik font-normal text-[13px] leading-[15px] tracking-[0px]"
                style={{ color: "#7A7480" }}
              >
                Name
              </span>
            </th>
            <th className="sticky top-0 z-10 px-3 py-2 text-left bg-[#D7E0E3]">
              <span
                className="font-rubik font-normal text-[13px] leading-[15px] tracking-[0px]"
                style={{ color: "#7A7480" }}
              >
                Role
              </span>
            </th>
            <th className="sticky top-0 z-10 px-3 py-2 text-left bg-[#D7E0E3]">
              <span
                className="font-rubik font-normal text-[13px] leading-[15px] tracking-[0px]"
                style={{ color: "#7A7480" }}
              >
                Location
              </span>
            </th>
            <th className="sticky top-0 z-10 px-3 py-2 text-left bg-[#D7E0E3]">
              <span
                className="font-rubik font-normal text-[13px] leading-[15px] tracking-[0px]"
                style={{ color: "#7A7480" }}
              >
                Applied date
              </span>
            </th>
            <th className="sticky top-0 z-10 px-3 py-2 text-left bg-[#D7E0E3]">
              <span
                className="font-rubik font-normal text-[13px] leading-[15px] tracking-[0px]"
                style={{ color: "#7A7480" }}
              >
                Match Score
              </span>
            </th>
            <th className="sticky top-0 z-10 px-3 py-2 text-left bg-[#D7E0E3]">
              <span
                className="font-rubik font-normal text-[13px] leading-[15px] tracking-[0px]"
                style={{ color: "#7A7480" }}
              >
                Action Taken
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application, idx) => (
            <TableRow
              key={application.id}
              application={application}
              isFirst={idx === 0}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ApplicationsTable;
