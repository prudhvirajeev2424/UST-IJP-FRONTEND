import type React from "react"
import { useState } from "react"
import type { Employee } from "../types/employee"
import { mockEmployees } from "../data/mockEmployees"
import Navbar from "../components/navbar"
import Sidebar from "../components/TP_Manager/Reports/Sidebar"
import EmployeeTable from "../components/TP_Manager/Reports/EmployeeTable"
import Modal from "../components/ui/Modal"
import MatchingJobsModal from "../components/TP_Manager/Reports/MatchingJobsModal"

const ReportsPage: React.FC = () => {
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleViewMatchingJobs = (employee: Employee) => {
    setSelectedEmployee(employee)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedEmployee(null)
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="w-full min-h-screen bg-[#f2f7f8]">
      <div className="flex flex-col h-screen">
        <Navbar />
        
        <div className="flex flex-1 overflow-hidden relative">
          {/* Mobile Sidebar Toggle Button */}
          <button
            onClick={toggleSidebar}
            className="lg:hidden fixed bottom-4 left-4 z-50 w-12 h-12 rounded-full shadow-lg flex items-center justify-center stroke-white"
            style={{ backgroundColor: "#0097AC" }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Sidebar - Responsive */}
          <div
            className={`
              fixed lg:relative inset-y-0 left-0 z-40 w-64 lg:w-52
              transform transition-transform duration-300 ease-in-out
              ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
            `}
          >
            <Sidebar onClose={toggleSidebar} />
          </div>

          {/* Overlay for mobile */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
              onClick={toggleSidebar}
            />
          )}

          {/* Main Content - Responsive */}
          <main className="flex-1 overflow-auto p-4 sm:p-5 md:p-6 lg:p-8">
            <div className="bg-white shadow-sm rounded-lg">
              {/* Header section - Responsive */}
              <div className="p-4 sm:p-5 md:p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  {/* Left: Icon + Title + Subtitle */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    {/* Icon - Responsive size */}
                    <div className="flex-shrink-0 mt-0.5">
                      <svg
                        className="w-8 h-8 sm:w-10 sm:h-10"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle 
                          cx="16" 
                          cy="16" 
                          r="16" 
                          fill="#D7E0E3" 
                          opacity="0.5" 
                        />
                        <g transform="translate(8, 9)">
                          <circle cx="3.2" cy="3.2" r="2" fill="#006E74" />
                          <circle cx="12.8" cy="3.2" r="2" fill="#006E74" />
                          <circle cx="8" cy="4.8" r="2.4" fill="#006E74" />
                          <path
                            d="M 0.8 12 C 0.8 9.6 5.6 9.6 5.6 12"
                            stroke="#006E74"
                            strokeWidth="1.2"
                            fill="none"
                            strokeLinecap="round"
                          />
                          <path
                            d="M 10.4 12 C 10.4 9.6 15.2 9.6 15.2 12"
                            stroke="#006E74"
                            strokeWidth="1.2"
                            fill="none"
                            strokeLinecap="round"
                          />
                          <path
                            d="M 4 14.4 C 4 11.2 12 11.2 12 14.4"
                            stroke="#006E74"
                            strokeWidth="1.2"
                            fill="none"
                            strokeLinecap="round"
                          />
                        </g>
                      </svg>
                    </div>

                    {/* Title and Subtitle - Responsive text */}
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
                        View the list of employees present in fresher and global talent pool.
                      </p>
                    </div>
                  </div>

                  {/* Right: Search Input - Responsive */}
                  <div className="w-full lg:w-auto">
                    <input
                      type="text"
                      placeholder="Search"
                      disabled
                      className="font-rubik w-full lg:w-60 xl:w-72 h-9 bg-white rounded border px-3 outline-none cursor-default text-xs"
                      style={{
                        borderColor: "#D7E0E3",
                        color: "#231F20"
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Employee Table - Responsive wrapper */}
              <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6">
                <EmployeeTable 
                  employees={mockEmployees} 
                  onViewMatchingJobs={handleViewMatchingJobs} 
                />
              </div>
            </div>
          </main>
        </div>
      </div>
      
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedEmployee && (
          <MatchingJobsModal 
            employee={selectedEmployee} 
            onClose={handleCloseModal} 
          />
        )}
      </Modal>
    </div>
  )
}

export default ReportsPage