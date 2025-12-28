import React from 'react';
import { X } from 'lucide-react';
import type { Application } from '../../../types/application';

interface ApplicationDetailsPanelProps {
  application: Application;
  onClose: () => void;
}

const ApplicationDetailsPanel: React.FC<ApplicationDetailsPanelProps> = ({
  application,
  onClose,
}) => {
  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={onClose}
      />

      {/* Side Panel */}
      <div className="fixed right-0 top-0 bottom-0 w-[750px] bg-white shadow-2xl z-[999] overflow-y-auto rounded-l-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-tl-2xl">
          <h2 className="text-[18px] font-medium text-[#231F20] leading-tight">
            Application details
          </h2>
          <button
            onClick={onClose}
            className="text-ijp-gray hover:text-ijp-near-black transition-colors"
          >
            <X size={20} strokeWidth={2} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-5 space-y-6">
          {/* Top Information Card with Background */}
          <div className="bg-[#F7F9FA] rounded-lg p-5 space-y-5">
            {/* Top Section - 3 Columns */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-[12px] font-medium text-ijp-gray mb-1 leading-tight">
                  SO#
                </label>
                <p className="text-[14px] font-normal text-ijp-near-black leading-tight">
                  32443388
                </p>
              </div>
              <div>
                <label className="block text-[12px] font-medium text-ijp-gray mb-1 leading-tight">
                  Role
                </label>
                <p className="text-[14px] font-normal text-ijp-near-black leading-tight">
                  Lead 2 - Software Engineer
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <label className="text-[12px] font-medium text-ijp-gray leading-tight">
                    Hiring Manager
                  </label>
                  <span className="inline-flex items-center rounded-full bg-[#E0F5F9] px-2 py-0.5 text-[11px] font-medium text-[#0097AC] leading-tight">
                    External request
                  </span>
                </div>
                <p className="text-[14px] font-normal text-ijp-near-black leading-tight">
                  Andreas Stephen
                </p>
              </div>
            </div>

            {/* Second Row - 3 Columns */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-[12px] font-medium text-ijp-gray mb-1 leading-tight">
                  Applied Date
                </label>
                <p className="text-[14px] font-normal text-ijp-near-black leading-tight">
                  6th January, 2025
                </p>
              </div>
              <div>
                <label className="block text-[12px] font-medium text-ijp-gray mb-1 leading-tight">
                  Account
                </label>
                <p className="text-[14px] font-normal text-ijp-near-black leading-tight">
                  T Mobile
                </p>
              </div>
              <div>
                <label className="block text-[12px] font-medium text-ijp-gray mb-1 leading-tight">
                  WFM Manager
                </label>
                <p className="text-[14px] font-normal text-ijp-near-black leading-tight">
                  John Doe
                </p>
              </div>
            </div>

            {/* Required Skills */}
            <div>
              <label className="block text-[12px] font-medium text-ijp-gray mb-2 leading-tight">
                Required Skills
              </label>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Selenium', 'C++', 'Python'].map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full bg-[#ECEEE8] px-3 py-1.5 text-[13px] font-normal text-ijp-near-black leading-tight"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Application Progress */}
          <div>
            <h3 className="text-[15px] font-medium text-ijp-near-black mb-4 leading-tight">
              Application Progress
            </h3>
            <div className="space-y-0">
              {/* Timeline Item 1 - Completed */}
              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#01B27C] flex-shrink-0">
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      className="text-white"
                    >
                      <path
                        d="M1 5L4.5 8.5L11 1.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="w-px flex-1 bg-[#E5E7EB]" />
                </div>
                <div className="flex-1 pb-6">
                  <p className="text-[14px] font-medium text-ijp-near-black leading-tight">
                    Application pending
                  </p>
                  <p className="text-[12px] text-ijp-gray mt-0.5 leading-tight">
                    Pending approval from WFM
                  </p>
                  <p className="text-[11px] text-ijp-gray mt-0.5 leading-tight">
                    4th December, 2024
                  </p>
                </div>
              </div>

              {/* Timeline Item 2 - Completed */}
              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#01B27C] flex-shrink-0">
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      className="text-white"
                    >
                      <path
                        d="M1 5L4.5 8.5L11 1.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="w-px flex-1 bg-[#E5E7EB]" />
                </div>
                <div className="flex-1 pb-6">
                  <p className="text-[14px] font-medium text-ijp-near-black leading-tight">
                    Application approved
                  </p>
                  <p className="text-[12px] text-ijp-gray mt-0.5 leading-tight">
                    Application has been approved by WFM
                  </p>
                  <p className="text-[11px] text-ijp-gray mt-0.5 leading-tight">
                    4th December, 2024
                  </p>
                </div>
              </div>

              {/* Timeline Item 3 - Completed */}
              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#01B27C] flex-shrink-0">
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      className="text-white"
                    >
                      <path
                        d="M1 5L4.5 8.5L11 1.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="w-px flex-1 bg-[#E5E7EB]" />
                </div>
                <div className="flex-1 pb-6">
                  <p className="text-[14px] font-medium text-ijp-near-black leading-tight">
                    Selected for interview
                  </p>
                  <p className="text-[12px] text-ijp-gray mt-0.5 leading-tight">
                    Applicant pushed to interview stage
                  </p>
                  <p className="text-[11px] text-ijp-gray mt-0.5 leading-tight">
                    4th December, 2024
                  </p>
                </div>
              </div>

              {/* Timeline Item 4 - Failed */}
              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FC6A59] flex-shrink-0">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      className="text-white"
                    >
                      <path
                        d="M1.5 1.5L8.5 8.5M8.5 1.5L1.5 8.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="w-px flex-1 bg-[#E5E7EB]" />
                </div>
                <div className="flex-1 pb-6">
                  <p className="text-[14px] font-medium text-ijp-near-black leading-tight">
                    Selected for opportunity
                  </p>
                  <p className="text-[12px] text-ijp-gray mt-0.5 leading-tight">
                    Failed to qualify interview
                  </p>
                  <p className="text-[11px] text-ijp-gray mt-0.5 leading-tight">
                    4th December, 2024
                  </p>
                </div>
              </div>

              {/* Timeline Item 5 - Incomplete */}
              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#D1D5DB] bg-white flex-shrink-0" />
                </div>
                <div className="flex-1">
                  <p className="text-[14px] font-normal text-ijp-gray leading-tight">
                    Successfully allocated to account
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Reason for Rejection - WITH BACKGROUND */}
          <div className="rounded-lg bg-red-50 p-4 border border-red-100">
              <h3 className="text-[15px] font-medium text-[#231F20] mb-3 leading-tight">
                  Reason for Rejection
              </h3>
              <p className="text-[13px] text-[#231F20] leading-relaxed">
                  While your portfolio demonstrated strong design skills, we were looking for more experience with
                  enterprise-level design systems and accessibility standards. We found a candidate with more relevant
                  experience in these specific areas. We encourage you to apply for future UX positions as your skills
                  continue to develop.
              </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationDetailsPanel;

