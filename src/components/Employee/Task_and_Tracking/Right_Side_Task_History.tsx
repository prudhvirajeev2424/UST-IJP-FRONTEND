import React from "react";
import type { Task } from "../../../data/taskTrackingData";

interface RightSideTaskHistoryProps {
  tasks: Task[];
  expandedId: string | null;
  setExpandedId: (id: string | null) => void;
}

const Right_Side_Task_History: React.FC<RightSideTaskHistoryProps> = ({
  tasks,
  expandedId,
  setExpandedId,
}) => {
  const specialCourses = new Set<string>([
    "front end development with react",
    "data visualisation workshop",
    "product management essentials",
  ]);

  const isSpecialCourse = (task: Task) =>
    specialCourses.has(task.name.trim().toLowerCase());

  const getOverallBarColor = (task: Task) => {
    if (isSpecialCourse(task)) return "bg-[#006E74]";
    if (task.progress === 0) return "bg-[#FC6A59]";
    if (task.progress === 100) return "bg-[#01B27C]";
    return "bg-[#FFBF00]";
  };

  const getOverallTextColor = (task: Task) => {
    if (isSpecialCourse(task)) return "text-[#006E74]";
    if (task.progress === 0) return "text-[#FC6A59]";
    if (task.progress === 100) return "text-[#01B27C]";
    return "text-[#FFBF00]";
  };

  return (
    <div className="flex-1 relative">
      {/* Pixel-perfect heading positioning */}
      <h2 className="text-[18px] font-medium mb-6 text-[#231F20] font-rubik">
        Task history
      </h2>

      <div className="bg-[#D7E0E3] bg-opacity-25 rounded-t-xl h-[52px] flex items-center px-6 text-[14px] font-medium text-[#7A7480]">
        <div className="flex-[2]">Course/Task Assigned</div>
        <div className="flex-[1]">Assigned By</div>
        <div className="flex-[1]">Start Date</div>
        {/* Fixed width column to prevent wrapping at 100% zoom */}
        <div className="w-[160px]">Overall percentage of Completion</div>
      </div>

      <div className="bg-white rounded-b-xl shadow-sm overflow-hidden">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="border-b border-[#E6EEF0] last:border-0"
          >
            <div
              onClick={() =>
                setExpandedId(expandedId === task.id ? null : task.id)
              }
              className={`flex items-center h-[52px] px-6 py-3 transition-colors duration-300 ${
                expandedId === task.id
                  ? "bg-[#F9FAFB] cursor-default"
                  : "hover:bg-gray-50 cursor-pointer"
              }`}
            >
              <div className="flex-[2] text-[14px] font-medium">
                {task.name}
              </div>
              <div className="flex-[1] text-[14px]">{task.assignedBy}</div>
              <div className="flex-[1] text-[14px]">{task.startDate}</div>
              {/* Use fixed pixel widths to keep bar and percent on one line */}
              <div className="w-[160px] flex items-center gap-2">
                <div className="w-[120px] h-[6px] bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-700 ${getOverallBarColor(
                      task
                    )}`}
                    style={{ width: `${task.progress}%` }}
                  />
                </div>
                <span
                  className={`w-[32px] text-right text-[14px] font-medium whitespace-nowrap ${getOverallTextColor(
                    task
                  )}`}
                  style={{ lineHeight: "17px" }}
                >
                  {task.progress}%
                </span>
              </div>
            </div>

            {/* ✅ SMOOTH STAGGERED TRANSITION SECTION */}
            <div
              className={`grid transition-all duration-500 ease-in-out ${
                expandedId === task.id
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 border-t border-[#E6EEF0] bg-white">
                  {/* Stagger 1: Description */}
                  <div
                    className={`mt-4 transition-all duration-500 delay-100 transform ${
                      expandedId === task.id
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                  >
                    <p className="text-[#7A7480] text-[14px] font-medium mb-1 uppercase tracking-wide">
                      Task Description
                    </p>
                    <p className="text-[14px] text-[#231F20] leading-relaxed">
                      {task.description}
                    </p>
                  </div>

                  {/* Stagger 2: Progress Box (Verified Size: 113x49) */}
                  <div
                    className={`mt-4 transition-all duration-500 delay-200 transform ${
                      expandedId === task.id
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                  >
                    <p className="text-[#7A7480] text-[14px] font-medium mb-2">
                      Update progress
                    </p>
                    <div
                      className="w-[113px] h-[49px] border border-[#7A7480] rounded-[5px] flex items-center justify-between px-3 bg-white"
                      style={{ borderWidth: "1.5px" }}
                    >
                      <span
                        className="text-[14px] text-[#231F20] font-rubik leading-[17px]"
                        style={{
                          width: "17px",
                          height: "17px",
                          display: "inline-block",
                          textAlign: "left",
                        }}
                      >
                        {task.progress}
                      </span>
                      <span
                        className="text-[14px] text-[#231F20] font-rubik leading-[17px]"
                        style={{ display: "inline-block" }}
                      >
                        %
                      </span>
                    </div>
                  </div>

                  {/* Stagger 3: Comments */}
                  <div
                    className={`mt-6 transition-all duration-500 delay-300 transform ${
                      expandedId === task.id
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                  >
                    <p className="text-[#7A7480] text-[14px] font-medium mb-2 uppercase tracking-wide">
                      Comments
                    </p>
                    <div className="border border-[#D7E0E3] rounded-lg p-4 min-h-[100px] text-[14px] leading-relaxed">
                      {task.comments || "No comments provided yet."}
                    </div>
                  </div>

                  {/* Stagger 4: Footer */}
                  <div
                    className={`mt-6 flex justify-between items-center transition-all duration-500 delay-[400ms] transform ${
                      expandedId === task.id
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                  >
                    <span className="text-[13px] text-[#7A7480] italic">
                      Last updated : {task.lastUpdated || "-"}
                    </span>
                    <button className="bg-[#007C85] text-white px-10 py-2.5 rounded font-semibold text-[15px] hover:bg-[#005f66] active:scale-95 transition-all">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Right_Side_Task_History;
