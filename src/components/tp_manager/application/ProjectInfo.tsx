import React, { useState } from 'react';
import type { Project } from '../../../types/project';
import AdobeLogo from '../../assets/Image 46@2x.png';
import PdfIcon from '../../assets/Icon awesome-file-pdf.svg';
import JobDetailsUI from './JobDetailsUI';

interface ProjectInfoProps {
  project: Project;
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({ project }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
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

          {/* Job Description Card */}
          <div
            onClick={() => setShowModal(true)}
            className="group p-4 bg-[#F2F7F8] rounded-lg cursor-pointer transition-transform"
          >
            <div className="flex items-center justify-between">
              {/* Left side: PDF icon + label */}
              <div className="flex items-center space-x-2">
                <img
                  src={PdfIcon}
                  alt="PDF Icon"
                  className="w-6 h-6"
                />
                <span className="text-sm font-medium text-gray-800">Job Description</span>
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
        </div>
      </div>

      {/* Job Details Modal */}
      {showModal && (
        <JobDetailsUI onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

export default ProjectInfo;
