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
    <div
      className="fixed inset-0 z-50 flex items-start justify-end"
      style={{ paddingTop: "80px", paddingRight: "60px" }}
    >
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden
      />

      {/* panel - exact dimensions from XD */}
      <div
        className="relative z-10 flex flex-col shadow-xl"
        style={{
          width: "518px",
          height: "850px",
          background: "#FFFFFF 0% 0% no-repeat padding-box",
          borderRadius: "10px",
          opacity: 1,
        }}
      >
        {/* Header */}
        <div
          className="flex-shrink-0 px-6"
          style={{
            height: "62px",
            background: "#F2F7F8",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            boxSizing: "border-box",
          }}
        >
          <div className="flex items-center justify-between h-full">
            <h2 className="text-lg font-semibold text-[#231F20]">
              Assign a new task
            </h2>

            <button
              aria-label="Close"
              onClick={onClose}
              className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors"
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

        {/* Content - scrollable */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-[#231F20] mb-2">
              Title
            </label>
            <select
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded-md h-11 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006E74] focus:border-transparent"
              style={{ fontSize: "14px" }}
            >
              <option>SQL for testers</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-[#231F20] mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full h-32 resize-none border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006E74] focus:border-transparent"
              style={{ fontSize: "14px", lineHeight: "1.5" }}
            />
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#231F20] mb-2">
                Task creation date
              </label>
              <input
                type="date"
                value={createdDate}
                onChange={(e) => setCreatedDate(e.target.value)}
                placeholder="dd-mm-yyyy"
                className="w-full border border-gray-300 rounded-md h-11 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006E74] focus:border-transparent"
                style={{ fontSize: "14px" }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#231F20] mb-2">
                Due date
              </label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                placeholder="dd-mm-yyyy"
                className="w-full border border-gray-300 rounded-md h-11 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006E74] focus:border-transparent"
                style={{ fontSize: "14px" }}
              />
            </div>
          </div>

          {/* Assign to */}
          <div>
            <label className="block text-sm font-medium text-[#231F20] mb-2">
              Assign to
            </label>
            <div className="relative">
              <input
                type="text"
                value={assignTo}
                onChange={(e) => setAssignTo(e.target.value)}
                className="w-full border border-gray-300 rounded-md h-11 px-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#006E74] focus:border-transparent"
                style={{ fontSize: "14px" }}
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7 flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors">
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
            <label className="block text-sm font-medium text-[#231F20] mb-2">
              Task created by
            </label>
            <div className="flex items-center gap-3 border border-gray-300 rounded-md p-3">
              <img
                src={ProfilePic}
                alt="creator"
                className="h-10 w-10 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <div className="text-sm font-semibold text-[#231F20]">
                  Andrea Stephen
                </div>
                <div className="text-xs text-gray-500">TP Manager</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer - fixed at bottom */}
        <div
          className="flex-shrink-0 px-6 py-4 border-t border-gray-200 bg-white flex items-center justify-end gap-3"
          style={{ borderRadius: "0 0 10px 10px" }}
        >
          <button
            onClick={onClose}
            className="h-10 px-6 rounded-md border border-gray-300 bg-white text-sm font-medium text-[#231F20] hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              if (typeof onSuccess === "function") {
                onSuccess(
                  "A new task has been assigned to all Talent pool employees"
                );
              }
              onClose();
            }}
            className="h-10 px-6 rounded-md bg-[#006E74] text-white text-sm font-medium hover:bg-[#005a5f] transition-colors"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignTaskModal;
