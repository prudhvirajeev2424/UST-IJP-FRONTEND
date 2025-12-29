

import React, { useState } from "react";
// import Navbar from "../components/navbar";
import Left_Side_Task_Tracker from "../components/Employee/Task_and_Tracking/Left_Side_Task_Tracker";
import Right_Side_Task_History from "../components/Employee/Task_and_Tracking/Right_Side_Task_History";
import { tasksData } from "../data/taskTrackingData";

const Assigning_and_Tracking: React.FC = () => {
  const [tasks] = useState(tasksData);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div
      className="min-h-screen bg-[#F2F7F8] text-[#231F20] font-rubik overflow-y-scroll"
      style={{ scrollbarGutter: "stable" }}
    >
      {/* <Navbar /> */}

      <div className="w-full bg-transparent">
        <div className="max-w-[1440px] mx-auto px-[32px] py-[32px] flex items-start gap-[32px]">
          <Left_Side_Task_Tracker
            tasks={tasks}
            isAnyTaskExpanded={expandedId !== null}
          />

          <Right_Side_Task_History
            tasks={tasks}
            expandedId={expandedId}
            setExpandedId={setExpandedId}
          />
        </div>
      </div>
    </div>
  );
};

export default Assigning_and_Tracking;
