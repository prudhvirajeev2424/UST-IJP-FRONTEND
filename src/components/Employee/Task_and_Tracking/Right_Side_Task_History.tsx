import React from "react";
// Import the actual data (value)

// Import only the type
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
      <h2 className="text-[18px] font-medium mb-6">Task history</h2>

      <div className="bg-[#D7E0E3] bg-opacity-25 rounded-t-xl h-[60px] flex items-center px-10 text-[14px] font-medium text-[#7A7480]">
        <div className="flex-[2]">Course/Task Assigned</div>
        <div className="flex-[1]">Assigned By</div>
        <div className="flex-[1]">Start Date</div>
        <div className="flex-[1.5]">Overall percentage of Completion</div>
      </div>

      <div className="bg-white rounded-b-xl shadow-sm">
        {tasks.map((task) => (
          <div key={task.id} className="border-b border-[#E6EEF0]">
            <div
              onClick={() => setExpandedId(expandedId === task.id ? null : task.id)}
              className="flex items-center px-10 py-6 cursor-pointer hover:bg-gray-50"
            >
              <div className="flex-[2] text-[14px]">{task.name}</div>
              <div className="flex-[1]">{task.assignedBy}</div>
              <div className="flex-[1]">{task.startDate}</div>
              <div className="flex-[1.5] flex items-center gap-4">
                <div className="flex-1 h-[7px] bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-700 ${getOverallBarColor(task)}`}
                    style={{ width: `${task.progress}%` }}
                  />
                </div>
                <span className={`w-10 text-right ${getOverallTextColor(task)}`}>
                  {task.progress}%
                </span>
              </div>
            </div>

            {expandedId === task.id && (
              <div className="px-10 pb-8 border-t border-[#E6EEF0] bg-white">
                <div className="mt-6">
                  <p className="text-[#7A7480] text-[14px] font-medium mb-1">Task Description</p>
                  <p className="text-[14px] text-[#231F20]">{task.description}</p>
                </div>

                <div className="mt-6">
                  <p className="text-[#7A7480] text-[14px] font-medium mb-2">Update progress</p>
                  <div className="w-[113px] h-[49px] border border-[#D7E0E3] rounded-[5px] flex items-center justify-between px-4">
                    <span>{task.progress}</span>
                    <span>%</span>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-[#7A7480] text-[14px] font-medium mb-2">Comments</p>
                  <div className="border border-[#D7E0E3] rounded-lg p-4 min-h-[80px]">
                    {task.comments || "No comments"}
                  </div>
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <span className="text-[13px] text-[#7A7480]">
                    Last updated : {task.lastUpdated || "-"}
                  </span>
                  <button className="bg-[#007C85] text-white px-8 py-2 rounded">
                    Submit
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Right_Side_Task_History;