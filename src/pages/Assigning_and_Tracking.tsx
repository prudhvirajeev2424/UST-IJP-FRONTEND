// import React, { useState } from "react";
// import Navbar from "../components/navbar";
// import Left_Side_Task_Tracker from "../components/Employee/Task_and_Tracking/Left_Side_Task_Tracker";
// import Right_Side_Task_History from "../components/Employee/Task_and_Tracking/Right_Side_Task_History";

// // Import the actual data (value)
// import { tasksData } from "../data/taskTrackingData";

// // Import only the type
// import type { Task } from "../data/taskTrackingData";

// const Assigning_and_Tracking: React.FC = () => {
//   const [tasks] = useState<Task[]>(tasksData);
//   const [expandedId, setExpandedId] = useState<string | null>(null);

//   return (
//     <div
//       className="min-h-screen bg-[#F2F7F8] text-[#231F20] font-rubik overflow-y-scroll"
//       style={{ scrollbarGutter: "stable" }}
//     >
//       <Navbar />

//       <div className="p-10 flex gap-10">
//         <Left_Side_Task_Tracker tasks={tasks} />
//         <Right_Side_Task_History
//           tasks={tasks}
//           expandedId={expandedId}
//           setExpandedId={setExpandedId}
//         />
//       </div>
//     </div>
//   );
// };

// export default Assigning_and_Tracking;


import React, { useState } from "react";
import Navbar from "../components/navbar";
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
      <Navbar />

      <div className="p-10 flex gap-10 max-w-[1800px] mx-auto">
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
  );
};

export default Assigning_and_Tracking;