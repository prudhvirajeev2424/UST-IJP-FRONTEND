import type React from "react";
import { useState } from "react";
import type { Employee } from "../types/TPManagerReportsTypes";
import { mockEmployees } from "../data/TPManagerReportsMockEmployeesData";
import Sidebar from "../components/TP_Manager/Reports/Sidebar";
import EmployeeTable from "../components/TP_Manager/Reports/EmployeeTable";
import Modal from "../components/ui/Popup";
import MatchingJobsModal from "../components/TP_Manager/Reports/MatchingJobsModal";
import MeetingIcon from "/src/assets/meeting_icon.png";

interface ReportsPageProps {
  showNavbar?: boolean; // Optional prop to display Navbar
}

const ReportsPage: React.FC<ReportsPageProps> = () => {
  // State hooks for managing modal, sidebar, and selected employee
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Handler for viewing matching jobs for an employee
  const handleViewMatchingJobs = (employee: Employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  // Handler for closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEmployee(null);
  };

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="w-full min-h-screen bg-[#f2f7f8]">
      <div className="flex flex-col h-screen">
        

        <div className="flex flex-1 overflow-hidden relative">
          {/* Mobile Sidebar Toggle Button */}
          <button
            onClick={toggleSidebar} // Toggles the sidebar open/close
            className="lg:hidden fixed bottom-4 left-4 z-50 w-12 h-12 rounded-full shadow-lg flex items-center justify-center stroke-white"
            style={{ backgroundColor: "#0097AC" }}
            aria-label={
              isSidebarOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isSidebarOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Sidebar Container */}
          <div
            className={`fixed lg:relative inset-y-0 left-0 z-40 w-64 lg:w-52
              transform transition-transform duration-300 ease-in-out
              ${
                isSidebarOpen
                  ? "translate-x-0"
                  : "-translate-x-full lg:translate-x-0"
              }`}
          >
            <Sidebar onClose={toggleSidebar} />
          </div>

          {/* Sidebar Overlay (only visible when sidebar is open) */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
              onClick={toggleSidebar} // Closes sidebar when overlay is clicked
              aria-hidden="true"
              role="presentation"
            />
          )}

          {/* Main Content Area */}
          <main className="flex-1 overflow-auto p-4 sm:p-5 md:p-6 lg:p-8">
            <div className="bg-white shadow-sm rounded-lg">
              <div className="p-4 sm:p-5 md:p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex items-start gap-3 sm:gap-4">
                    {/* Meeting Icon - Increased size as per spec */}
                    <div className="flex-shrink-0 mt-0.5">
                      <img
                        src={MeetingIcon}
                        alt="Meeting icon"
                        aria-hidden="true"
                        className="object-contain"
                        style={{ width: "42px", height: "42px" }}
                      />
                    </div>

                    {/* Header Text */}
                    <div className="flex-1 min-w-0">
                      <h1
                        className="font-rubik text-base sm:text-lg font-semibold mb-1 leading-[1.3]"
                        style={{ color: "#231F20" }}
                      >
                        Talent Pool employee list
                      </h1>
                      <p
                        className="font-rubik text-xs sm:text-sm leading-[1.4]"
                        style={{ color: "#231F20" }}
                      >
                        View the list of employees present in fresher and global
                        talent pool.
                      </p>
                    </div>
                  </div>

                  {/* Search Input (currently disabled) */}
                  <div className="w-full lg:w-auto">
                    <input
                      type="text"
                      placeholder="Search"
                      disabled // Disabled for now
                      className="font-rubik w-full lg:w-72 xl:w-80 h-11 bg-white rounded border px-4 outline-none cursor-default text-sm"
                      style={{
                        borderColor: "#D7E0E3",
                        color: "#231F20",
                      }}
                      aria-label="Search employees (currently disabled)"
                    />
                  </div>
                </div>
              </div>

              {/* Employee Table */}
              <div className="px-6 sm:px-7 md:px-8 pb-6 sm:pb-7 md:pb-8">
                <EmployeeTable
                  employees={mockEmployees}
                  onViewMatchingJobs={handleViewMatchingJobs}
                />
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Modal for Matching Jobs */}
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
