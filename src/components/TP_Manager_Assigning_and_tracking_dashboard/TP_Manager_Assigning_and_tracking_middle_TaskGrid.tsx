import React from "react";
import TaskCard from "./TP_Manager_Assigning_and_tracking_middle_TaskCard";
import type { Task } from "../../types/TP_Manager_Assigning_and_tracking_activity";

interface TaskGridProps {
  tasks: Task[];
}
const TaskGrid: React.FC<TaskGridProps> = ({ tasks }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskGrid;
