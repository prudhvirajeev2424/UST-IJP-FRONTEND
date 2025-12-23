import React, { useState } from "react";
import type { Employee } from "../types/employee";
import { mockEmployees } from "../data/mockEmployees";
import Navbar from "../navbar";
import Sidebar from "../components/Sidebar";
import EmployeeTable from "../components/EmployeeTable";
import Modal from "../components/ui/Modal";
import MatchingJobsModal from "../components/MatchingJobsModal";

// Rest of the file stays the same
const ReportsPage: React.FC = () => {
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewMatchingJobs = (employee: Employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEmployee(null);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main
          className="flex-1 p-8 overflow-auto"
          style={{ backgroundColor: "var(--f2f7f8)" }}
        >
          {/* Content Header Section */}
          <div className="bg-white shadow-sm" style={{ borderRadius: "10px" }}>
            {/* Title, Subtitle, and Search Row */}
            <div className="flex items-start justify-between mb-6 px-6 pt-6">
              {/* Left: Icon, Title, and Subtitle */}
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="mt-1">
                  <svg
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    style={{ color: "var(--0097ac)" }}
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>

                {/* Title and Subtitle */}
                <div>
                  <h1
                    className="text-xl font-semibold mb-1"
                    style={{ color: "#231F20" }}
                  >
                    Talent Pool employee list
                  </h1>
                  <p className="text-sm" style={{ color: "#231F20" }}>
                    View the list of employees present in fresher and global talent pool.
                  </p>
                </div>
              </div>

              {/* Right: Search Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  disabled
                  className="outline-none cursor-default"
                  style={{
                    width: "320px",
                    height: "49px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #D7E0E3",
                    borderRadius: "5px",
                    paddingLeft: "16px",
                    paddingRight: "16px",
                    fontSize: "14px",
                    color: "#231F20",
                  }}
                />
              </div>
            </div>

            {/* Employee Table with padding */}
            <div className="px-6 pb-6">
              <EmployeeTable
                employees={mockEmployees}
                onViewMatchingJobs={handleViewMatchingJobs}
              />
            </div>
          </div>
        </main>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedEmployee && (
          <MatchingJobsModal
            employee={selectedEmployee}
            onClose={handleCloseModal}
          />
        )}
      </Modal>
    </div>
  );
};

export default ReportsPage;