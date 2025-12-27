import React, { useState } from "react";
import ProfilePic from "/src/assets/DP.png";

interface AssignTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (message: string) => void;
}

const AssignTaskModal: React.FC<AssignTaskModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [title, setTitle] = useState("SQL for testers");
  const [description, setDescription] = useState(
    'The task "SQL for Testers" is aimed at enhancing your understanding of SQL fundamentals specifically tailored for software testing scenarios. You will learn to write queries for validating data, performing backend testing, and supporting test case creation.'
  );
  const [createdDate, setCreatedDate] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");
  const [assignTo, setAssignTo] = useState<string>("All");

  if (!isOpen) return null;

  return (
    // <div className="fixed inset-0 z-50 flex items-start justify-end">
    <div className="fixed inset-0 z-50 flex items-center justify-end">
      {/* backdrop */}
      <div
        // className="absolute inset-0 bg-black/50"
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden
      />

      {/* panel */}
      {/* <div className="relative z-10 w-full max-w-[480px] h-screen overflow-auto bg-white rounded-l-lg shadow-lg"> */}
      <div className="relative z-10 w-[420px] h-[90vh] overflow-auto bg-white rounded-xl shadow-xl mr-6">
        <div className="px-6 py-6 border-b">
          <div className="flex items-center justify-between">
            {/* <h2 className="text-lg font-semibold">Assign a new task</h2> */}
            <h2 className="text-base font-semibold text-black-800">
              Assign a new task
            </h2>

            <button
              aria-label="Close"
              onClick={onClose}
              className="h-9 w-9 flex items-center justify-center rounded-md hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* <div className="px-6 py-6 space-y-4"> */}
        <div className="px-5 py-5 space-y-3">
          {/* Title */}
          <div>
            <label className="block text-xs text-gray-500 mb-1">Title</label>
            <select
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded-md h-11 px-3 text-sm"
            >
              <option>SQL for testers</option>
              {/* <option>React Basics</option>
              <option>Backend Integration</option> */}
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full h-28 resize-none border rounded-md p-3 text-sm"
            />
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Task creation date
              </label>
              <input
                type="date"
                value={createdDate}
                onChange={(e) => setCreatedDate(e.target.value)}
                className="w-full border rounded-md h-11 px-3 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Due date
              </label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full border rounded-md h-11 px-3 text-sm"
              />
            </div>
          </div>

          {/* Assign to */}
          <div>
            <label className="block text-sm text-gray-700 mb-2">
              Assign to
            </label>
            <div className="relative">
              <input
                type="text"
                value={assignTo}
                onChange={(e) => setAssignTo(e.target.value)}
                className="w-full border rounded-md h-11 px-3 text-sm"
              />
              <button className="absolute right-2 top-2 h-7 w-7 flex items-center justify-center rounded-md hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Task created by */}
          <div>
            <label className="block text-sm text-gray-700 mb-2">
              Task created by
            </label>
            {/* <div className="flex items-center gap-3 border rounded-md p-3"> */}
            <div className="flex items-center gap-3 border rounded-md p-2">
              <img
                src={ProfilePic}
                alt="creator"
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <div className="text-sm font-semibold">Andrea Stephen</div>
                <div className="text-xs text-gray-500">TP Manager</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t bg-gray-50 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="h-9 px-4 rounded-md border border-gray-300 bg-white text-sm"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              // placeholder: implement save logic here
              // trigger parent banner if provided
              if (typeof onSuccess === "function") {
                onSuccess(
                  "A new task has been assigned to all Talent pool employees"
                );
              }
              onClose();
            }}
            className="h-9 px-4 rounded-md bg-[#0b7b77] text-white text-sm"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignTaskModal;
