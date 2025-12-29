/**
 * MatchingJobsModal Component
 * 
 * A modal component that displays job opportunities matching an employee's profile.
 * Features responsive layouts (desktop table, mobile cards), action status badges,
 * and empty state handling.
 * 
 * @component
 * @example
 * ```tsx
 * <MatchingJobsModal 
 *   employee={selectedEmployee}
 *   onClose={() => setShowModal(false)}
 * />
 * ```
 * 
 * @see {@link Employee} for employee data structure
 * @see {@link mockMatchingJobs} for job data source
 */

import React from "react";
import type { Employee } from "../../../types/TPManagerReportsTypes";
import { mockMatchingJobs } from "../../../data/TPManagerReportsMockMatchingJob";

/**
 * Props for the MatchingJobsModal component
 * 
 * @interface MatchingJobsModalProps
 * @property {Employee} employee - The employee object whose matching jobs should be displayed
 * @property {() => void} onClose - Callback function to close the modal
 */
interface MatchingJobsModalProps {
  employee: Employee;
  onClose: () => void;
}

/**
 * MatchingJobsModal Component
 * 
 * Displays a filtered list of job opportunities that match the selected employee's
 * profile and skills. Provides different layouts for desktop and mobile devices
 * with appropriate empty states.
 * 
 * Features:
 * - Responsive design with separate desktop (table) and mobile (card) views
 * - Color-coded action badges (Shortlisted, Actioned, Rejected)
 * - Skill truncation with "+N" indicator for space efficiency
 * - Touch-friendly close button with hover states
 * - Empty state UI with icons and helpful messaging
 * @param {MatchingJobsModalProps} props - Component props
 * @returns {JSX.Element} Rendered modal content with job listings
 */
const MatchingJobsModal: React.FC<MatchingJobsModalProps> = ({
  employee,
  onClose,
}) => {
  /**
   * Filter jobs to only show matches for the current employee
   * if the jobs dataset is large (>1000 items) or if the component re-renders frequently
   */
  const matchingJobs = mockMatchingJobs.filter(
    (job) => job.employeeUid === employee.uid
  );

  /**
   * Returns styling object for action status badges
   * 
   * Uses color-coded backgrounds and text to visually distinguish between
   * different action states in the recruitment workflow.
   * 
   * @param {string | null} action - The action status (Shortlisted, Actioned, Rejected, or null)
   * @returns {React.CSSProperties} Style object with backgroundColor and color properties
   * 
   * @example
   * getActionBadgeStyle('Shortlisted') 
   * // Returns: { backgroundColor: "rgba(1, 178, 124, 0.1)", color: "#01B27C" }
   */
  const getActionBadgeStyle = (action: string | null): React.CSSProperties => {
    switch (action) {
      case "Shortlisted":
        // Green - Positive action, candidate moved forward
        return {
          backgroundColor: "rgba(1, 178, 124, 0.1)",
          color: "#01B27C",
        };
      case "Actioned":
        // Amber - Intermediate state, action taken but not final
        return {
          backgroundColor: "rgba(255, 191, 0, 0.1)",
          color: "#FFBF00",
        };
      case "Rejected":
        // Red - Negative action, candidate not proceeding
        return {
          backgroundColor: "rgba(252, 106, 89, 0.1)",
          color: "#FC6A59",
        };
      default:
        // No styling for null or unknown states
        return {};
    }
  };

  /**
   * Formats skills array for display with truncation
   * 
   * Shows first 2 skills followed by "+N" indicator if more exist.
   * This prevents layout overflow while indicating additional skills.
   * 
   * @param {string[]} skills - Array of skill strings
   * @returns {string} Formatted skills string
   * 
   * @example
   * formatSkills(['React', 'TypeScript', 'Node.js', 'AWS'])
   * // Returns: "React, TypeScript +2"
   * 
   * formatSkills(['Python'])
   * // Returns: "Python"
   */
  const formatSkills = (skills: string[]) => {
    if (skills.length <= 2) return skills.join(", ");
    return `${skills.slice(0, 2).join(", ")} +${skills.length - 2}`;
  };

  return (
    <div className="w-full">
      {/* 
        Modal Header
        - Responsive spacing using Tailwind breakpoint-specific margins
        - Flex layout for title and close button positioning
      */}
      <div className="flex items-center justify-between mb-4 sm:mb-5 md:mb-6 px-1">
        <h3
          className="font-rubik font-semibold text-sm sm:text-base md:text-lg leading-[1.3]"
          style={{ color: "#231F20" }}
        >
          Matching opportunities
        </h3>
        
        {/* 
          Close Button
          - Minimum touch target size of 36x36px for accessibility (WCAG 2.1)
          - Hover state for desktop interaction feedback
          - ARIA label for screen readers
        */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="flex items-center justify-center w-9 h-9 min-w-[36px] rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#7A7480"
            strokeWidth="2.5"
            className="w-5 h-5 sm:w-6 sm:h-6"
            aria-hidden="true" // Decorative icon, label is on button
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* 
        Desktop Table View
        - Hidden below 'md' breakpoint (768px)
        - Horizontal scroll for narrow desktop viewports
        - Minimum width constraint prevents column cramping
      */}
      <div className="hidden md:block">
        <div className="bg-white rounded-lg overflow-hidden p-3">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[650px]">
              {/* Table Header */}
              <thead>
                <tr
                  className="h-[50px]"
                  style={{ backgroundColor: "rgba(215, 224, 227, 0.15)" }}
                >
                  {/* 
                    Dynamic header generation using array mapping
                    Reduces code duplication and ensures consistency
                  */}
                  {[
                    "SO#",           // Sales Order / Service Order number
                    "Role",          // Job position title
                    "Band",          // Salary/experience band
                    "Location",      // Job location
                    "Skills",        // Required skills
                    "Action Taken",  // Recruitment status
                  ].map((header, idx) => (
                    <th
                      key={header}
                      className="px-3 lg:px-4 text-left font-rubik font-medium text-xs leading-[15px] whitespace-nowrap"
                      style={{
                        color: "#7A7480",
                        borderBottom: "1px solid rgba(215,224,227,0.3)",
                        // Rounded corners only on first and last columns
                        borderTopLeftRadius: idx === 0 ? "8px" : undefined,
                        borderTopRightRadius: idx === 5 ? "8px" : undefined,
                      }}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              
              {/* Table Body */}
              <tbody>
                {matchingJobs.map((job, index) => (
                  <tr
                    key={`${job.so}-${index}`}
                    className="h-14"
                    style={{
                      // Remove border from last row for cleaner appearance
                      borderBottom:
                        index === matchingJobs.length - 1
                          ? "none"
                          : "1px solid rgba(215,224,227,0.6)",
                    }}
                  >
                    {/* SO# Column - Service/Sales Order Number */}
                    <td className="px-3 lg:px-4">
                      <span
                        className="font-rubik font-normal text-[13px] leading-4"
                        style={{ color: "#0097AC" }} // Primary brand color for clickable elements
                      >
                        {job.so}
                      </span>
                    </td>
                    
                    {/* Role Column */}
                    <td className="px-3 lg:px-4">
                      <span
                        className="font-rubik font-normal text-[13px]"
                        style={{ color: "#0097AC" }}
                      >
                        {job.role}
                      </span>
                    </td>
                    
                    {/* Band Column - Seniority/Salary Band */}
                    <td className="px-3 lg:px-4">
                      <span
                        className="font-rubik font-normal text-[13px]"
                        style={{ color: "#231F20" }}
                      >
                        {job.band}
                      </span>
                    </td>
                    
                    {/* Location Column */}
                    <td className="px-3 lg:px-4">
                      <span
                        className="font-rubik font-normal text-[13px]"
                        style={{ color: "#231F20" }}
                      >
                        {job.location}
                      </span>
                    </td>
                    
                    {/* Skills Column - Truncated with formatSkills() */}
                    <td className="px-3 lg:px-4">
                      <span
                        className="font-rubik font-normal text-[13px]"
                        style={{ color: "#231F20" }}
                      >
                        {formatSkills(job.skills)}
                      </span>
                    </td>
                    
                    {/* Action Taken Column - Status Badge */}
                    <td className="px-3 lg:px-4">
                      {job.actionTaken && (
                        <span
                          className="inline-block rounded px-3 py-1 font-medium text-xs leading-[15px]"
                          style={getActionBadgeStyle(job.actionTaken)}
                        >
                          {job.actionTaken}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 
        Mobile/Tablet Card View
        - Visible only below 'md' breakpoint (< 768px)
        - Card-based layout optimized for touch interactions
        - Vertical stacking with consistent spacing
      */}
      <div className="md:hidden space-y-3">
        {matchingJobs.map((job, index) => (
          <div
            key={`${job.so}-${index}`}
            className="bg-white rounded-lg border shadow-sm p-4 space-y-3"
            style={{ borderColor: "#D7E0E3" }}
          >
            {/* 
              Card Header
              - SO# and action badge positioned horizontally
              - Flex-1 on left allows text to use available space
              - Flex-shrink-0 on badge prevents it from being compressed
            */}
            <div
              className="flex justify-between items-start pb-3 border-b"
              style={{ borderColor: "#F2F7F8" }}
            >
              <div className="flex-1 min-w-0">
                <div
                  className="text-xs font-medium mb-1"
                  style={{ color: "#7A7480" }}
                >
                  SO#
                </div>
                <div
                  className="text-base font-semibold"
                  style={{ color: "#0097AC" }}
                >
                  {job.so}
                </div>
              </div>
              
              {/* Action Badge - Only shown if action has been taken */}
              {job.actionTaken && (
                <span
                  className="inline-block text-xs font-medium px-2.5 py-1 rounded flex-shrink-0 ml-2"
                  style={getActionBadgeStyle(job.actionTaken)}
                >
                  {job.actionTaken}
                </span>
              )}
            </div>
            
            {/* Card Details Section */}
            <div className="space-y-2.5">
              {/* Role Field */}
              <div>
                <div
                  className="text-xs font-medium mb-0.5"
                  style={{ color: "#7A7480" }}
                >
                  Role
                </div>
                <div
                  className="text-sm font-medium"
                  style={{ color: "#0097AC" }}
                >
                  {job.role}
                </div>
              </div>
              
              {/* 
                Band & Location - Two-column Grid
                Efficient use of horizontal space on mobile
              */}
              <div className="grid grid-cols-2 gap-3">
                {/* Band Field */}
                <div>
                  <div
                    className="text-xs font-medium mb-0.5"
                    style={{ color: "#7A7480" }}
                  >
                    Band
                  </div>
                  <div className="text-sm" style={{ color: "#231F20" }}>
                    {job.band}
                  </div>
                </div>
                
                {/* Location Field */}
                <div>
                  <div
                    className="text-xs font-medium mb-0.5"
                    style={{ color: "#7A7480" }}
                  >
                    Location
                  </div>
                  <div className="text-sm" style={{ color: "#231F20" }}>
                    {job.location}
                  </div>
                </div>
              </div>
              
              {/* Skills Field - Full width with truncation */}
              <div>
                <div
                  className="text-xs font-medium mb-1"
                  style={{ color: "#7A7480" }}
                >
                  Skills
                </div>
                <div
                  className="text-sm font-normal"
                  style={{ color: "#231F20" }}
                >
                  {formatSkills(job.skills)}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* 
          Empty State for Mobile
          - Only shown when no matching jobs exist
          - Icon, heading, and description provide clear feedback
        */}
        {matchingJobs.length === 0 && (
          <div
            className="text-center py-12 rounded-lg bg-white"
            style={{ borderColor: "#D7E0E3" }}
          >
            {/* Document Icon - Visual indicator of missing content */}
            <svg
              className="w-16 h-16 mx-auto mb-4 opacity-30"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <p
              className="text-base font-medium mb-1"
              style={{ color: "#231F20" }}
            >
              No Matching Jobs
            </p>
            <p className="text-sm" style={{ color: "#7A7480" }}>
              No opportunities found for this employee
            </p>
          </div>
        )}
      </div>

      {/* 
        Empty State for Desktop
        - Separate from mobile version to allow different sizing/spacing
        - Larger icon and text for desktop viewing distance
      */}
      {matchingJobs.length === 0 && (
        <div className="hidden md:block">
          <div
            className="text-center py-16 rounded-lg bg-white"
            style={{ borderColor: "#D7E0E3" }}
          >
            <svg
              className="w-20 h-20 mx-auto mb-4 opacity-30"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <p
              className="text-lg font-medium mb-2"
              style={{ color: "#231F20" }}
            >
              No Matching Jobs Found
            </p>
            <p className="text-sm" style={{ color: "#7A7480" }}>
              There are currently no job openings matching this employee's
              profile.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MatchingJobsModal;