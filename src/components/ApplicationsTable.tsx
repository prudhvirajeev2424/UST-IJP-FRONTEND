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
    <div className="w-full bg-white rounded-lg h-full">
      <table className="w-full border-collapse">
        <thead>
          <tr style={{ backgroundColor: "#D7E0E3" }}>
            <th className="px-6 py-4 text-left overflow-visible">
              <div className="flex items-center gap-3">
                <div className="w-[20px] flex-shrink-0"></div>
                <span
                  className="font-rubik font-normal text-[13px] leading-[15px] tracking-[0px]"
                  style={{ color: "#7A7480", minWidth: "80px" }}
                >
                  SO#
                </span>
              </div>
            </th>
            <th className="px-6 py-4 text-left">
              <span
                className="font-rubik font-normal text-[13px] leading-[15px] tracking-[0px]"
                style={{ color: "#7A7480" }}
              >
                UID
              </span>
            </th>
            <th className="px-6 py-4 text-left">
              <span
                className="font-rubik font-normal text-[13px] leading-[15px] tracking-[0px]"
                style={{ color: "#7A7480" }}
              >
                Name
              </span>
            </th>
            <th className="px-6 py-4 text-left">
              <span
                className="font-rubik font-normal text-[13px] leading-[15px] tracking-[0px]"
                style={{ color: "#7A7480" }}
              >
                Role
              </span>
            </th>
            <th className="px-6 py-4 text-left">
              <span
                className="font-rubik font-normal text-[13px] leading-[15px] tracking-[0px]"
                style={{ color: "#7A7480" }}
              >
                Location
              </span>
            </th>
            <th className="px-6 py-4 text-left">
              <span
                className="font-rubik font-normal text-[13px] leading-[15px] tracking-[0px]"
                style={{ color: "#7A7480" }}
              >
                Applied date
              </span>
            </th>
            <th className="px-6 py-4 text-left">
              <span
                className="font-rubik font-normal text-[13px] leading-[15px] tracking-[0px]"
                style={{ color: "#7A7480" }}
              >
                Match Score
              </span>
            </th>
            <th className="px-6 py-4 text-left">
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
          {applications.map((application) => (
            <TableRow key={application.id} application={application} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ApplicationsTable;
