import React, { useState } from "react";
import type { Project } from "../../../types/project";
import AdobeLogo from "../../../assets/Image46.png";
import PdfIcon from "../../../assets/IconFilePdf.svg";
import ShortlistImg from '../../../assets/Group 173611.svg';
import { useShortlist } from './context/ShortlistContext';
import JobDetailsUI from "../../employee/home_components/JobDetailsUI";

interface ProjectInfoProps {
  project: Project;
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({ project }) => {
  const [showModal, setShowModal] = useState(false);
  const { shortlisted } = useShortlist();

  return (
    <>
      {/* Inline shortlist banner for this page */}
      {shortlisted && (
        <div
          role="status"
          aria-live="polite"
          className="flex items-center gap-2 rounded "
          style={{
            background: '#FFFFFF',
            color: '#06B27C',
            padding: '12px 16px',
            marginBottom: '16px'
          }}
        >
          <img src={ShortlistImg} alt="shortlisted" className="w-12 h-12" />
          <span
            className="text-sm font-medium"
            style={{
              font: 'var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-16)/19px var(--unnamed-font-family-rubik)'
            }}
          >
            Candidate has been shortlisted for this opportunity
          </span>
        </div>
      )}
      <div className="bg-white rounded-lg shadow-sm p-6 relative">
        {/* Adobe Logo fixed to top-right */}
        <img
          src={AdobeLogo}
          alt="Adobe Logo"
          className="w-20 h-auto absolute top-4 right-4"
        />

        <div>
          {/* Project ID */}
          <div>
            <span className="font-rubik text-[16px] leading-[19px] text-[#231F20] font-normal">
              Project ID #
            </span>
            <span className="font-rubik text-[16px] leading-[19px] text-[#231F20] font-normal">
              {project.projectId}
            </span>
          </div>

          {/* Legacy Modernisation text */}
          <div className="mt-0">
            <span className="font-rubik text-[12px] leading-[14px] text-[#7A7480] opacity-100">
              Legacy Modernisation
            </span>
          </div>

          {/* Horizontal line after spacing */}
          <hr className="mt-3 mb-4 border-t border-gray-300" />

          <div className="flex items-center space-x-2 mb-1">
            <span
              className="text-[18px] leading-[22px] font-normal transition-colors cursor-pointer"
              style={{ color: "#006E74" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#000000")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#006E74")}
            >
              SO# 85938594
            </span>
          </div>

          {/* Developer role with spacing below */}
          <div className="mb-2">
            <span
              className="text-[18px] leading-[22px] font-normal"
              style={{ color: "#231F20" }}
            >
              Developer III - B3
            </span>
          </div>

          {/* Location with extra spacing below */}
          <div className="mt-1 flex items-center space-x-1 mb-4">
            <svg
              width="13"
              height="16"
              viewBox="0 0 13 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.5 0C3.46 0 1 2.46 1 5.5C1 9.5 6.5 15 6.5 15C6.5 15 12 9.5 12 5.5C12 2.46 9.54 0 6.5 0ZM6.5 7.5C5.4 7.5 4.5 6.6 4.5 5.5C4.5 4.4 5.4 3.5 6.5 3.5C7.6 3.5 8.5 4.4 8.5 5.5C8.5 6.6 7.6 7.5 6.5 7.5Z"
                stroke="#7A7480"
                strokeWidth="2"
                fill="none"
                opacity="1"
              />
            </svg>
            <span
              className="text-[14px] leading-[17px] font-normal "
              style={{ color: "#7A7480" }}
            >
              Bangalore
            </span>
          </div>

          {/* Job Description Card */}
          {!shortlisted ? (
            <div
              onClick={() => setShowModal(true)}
              className="group p-4 bg-[#F2F7F8] rounded-lg cursor-pointer transition-transform"
            >
              <div className="flex items-center justify-between ">
                {/* Left side: PDF icon + label */}
                <div className="flex items-center space-x-2">
                  <img src={PdfIcon} alt="PDF Icon" className="w-6 h-6" />
                  <span className="text-sm font-medium text-gray-800">
                    Job Description
                  </span>
                </div>

                {/* Right side: enlarged teal arrow icon with hover animation */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#008080"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-10 h-10 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                >
                  <path d="M10 12h8M14 9l4 3-4 3" />
                </svg>
              </div>
            </div>
          ) : (
            <div className="p-4 bg-[#F2F7F8] rounded-lg">
              <div className="flex items-center">
                {/* Intentionally empty when shortlisted - non-clickable */}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Job Details Modal */}
      {showModal && <JobDetailsUI onClose={() => setShowModal(false)} />}
    </>
  );
};

export default ProjectInfo;
