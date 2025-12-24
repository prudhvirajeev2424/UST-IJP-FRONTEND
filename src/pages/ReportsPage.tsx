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

  const handleViewMatchingJobs = (employee: Employee) => {
    setSelectedEmployee(employee)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedEmployee(null)
  }

  return (
    <div className="w-full min-h-screen bg-[#f2f7f8]">
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-auto" style={{ padding: "20px 24px" }}>
            <div className="bg-white shadow-sm" style={{ borderRadius: "8px" }}>
              {/* Header section */}
              <div style={{ padding: "16px 20px 14px 20px" }}>
                <div className="flex items-start justify-between">
                  {/* Left: Icon + Title + Subtitle */}
                  <div className="flex items-start" style={{ gap: "12px" }}>
                    {/* Icon - Smaller */}
                    <div style={{ marginTop: "1px" }}>
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="16" cy="16" r="16" fill="#D7E0E3" opacity="0.5" />
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

                    {/* Title and Subtitle */}
                    <div>
                      <h1 
                        style={{ 
                          fontSize: "16px",
                          fontWeight: "600",
                          color: "#231F20",
                          marginBottom: "2px",
                          lineHeight: "1.25",
                          fontFamily: "Rubik, sans-serif"
                        }}
                      >
                        Talent Pool employee list
                      </h1>
                      <p 
                        style={{ 
                          fontSize: "12px",
                          color: "#231F20",
                          lineHeight: "1.3",
                          fontFamily: "Rubik, sans-serif"
                        }}
                      >
                        View the list of employees present in fresher and global talent pool.
                      </p>
                    </div>
                  </div>

                  {/* Right: Search Input */}
                  <div>
                    <input
                      type="text"
                      placeholder="Search"
                      disabled
                      className="outline-none cursor-default"
                      style={{
                        width: "240px",
                        height: "36px",
                        backgroundColor: "#FFFFFF",
                        border: "1px solid #D7E0E3",
                        borderRadius: "4px",
                        paddingLeft: "12px",
                        paddingRight: "12px",
                        fontSize: "12px",
                        color: "#231F20",
                        fontFamily: "Rubik, sans-serif"
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Employee Table */}
              <div style={{ padding: "0 20px 20px 20px" }}>
                <EmployeeTable employees={mockEmployees} onViewMatchingJobs={handleViewMatchingJobs} />
              </div>
            </div>
          </main>
        </div>
      </div>
      
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedEmployee && <MatchingJobsModal employee={selectedEmployee} onClose={handleCloseModal} />}
      </Modal>
    </div>
  )
}

export default ReportsPage