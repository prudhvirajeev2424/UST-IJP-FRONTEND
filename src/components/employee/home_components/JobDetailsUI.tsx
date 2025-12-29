import React, { useEffect } from 'react';
import { X, MapPin } from 'lucide-react';
import emilyImage from '../../../assets/DP_emila_stephen.png';

interface JobDetailsUIProps {
  onClose: () => void;
}

const JobDetailsUI: React.FC<JobDetailsUIProps> = ({ onClose }) => {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    // Prevent background page from scrolling when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      // Restore original overflow when modal is closed/unmounted
      document.body.style.overflow = originalOverflow || '';
    };
  }, []);
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-2xl overflow-hidden"
        style={{ 
          fontFamily: 'Rubik, sans-serif',
           width: '1520px',
          height: '928px',
          marginTop: '152px',
          marginRight:'179px',
          marginLeft:'221px',
          display: 'flex',
          flexDirection: 'column'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close Button */}
        <div className="bg-white px-6 py-4 ml-[30px] flex justify-between items-center flex-shrink-0">
          <span className="text-xl font-normal" style={{ color: '#231F20', lineHeight: '24px', letterSpacing: '0px' }}>
            SO : 32443388
          </span>
          <button 
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full transition-all text-black hover:bg-gray-100"
          >
            <X size={24} strokeWidth={2} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div style={{ backgroundColor: '#FFFFFF' }}>
          <div className="px-12 py-6">
            <div className="flex gap-6">
              {/* LEFT SIDEBAR */}
              <div className="flex-shrink-0" style={{ width: '360px' }}>
                <div className="p-5" style={{ backgroundColor: '#F2F7F8', borderRadius: '10px' }}>
                  {/* Summary */}
                  <div className="mb-6 ">
                    <h3 className="mb-2" style={{ fontSize: '16px', lineHeight: '19px', letterSpacing: '0px', color: '#7A7480', fontWeight: 'normal' }}>Summary</h3>
                    <p style={{ fontSize: '14px', lineHeight: '22px', letterSpacing: '0px', color: '#231F20', fontWeight: 'normal' }}>
                      Join our team as a Software Development Lead, where you will oversee and guide the development of software solutions from concept to deployment. This leadership role involves managing a team of developers, collaborating with stakeholders, and ensuring projects meet quality standards and timelines.
                    </p>
                  </div>

                  {/* SO# */}
                  <div className="mb-6">
                    <h3 className="mb-1" style={{ fontSize: '14px', lineHeight: '17px', letterSpacing: '0px', color: '#7A7480', fontWeight: 'normal' }}>SO#</h3>
                    <p className="text-sm font-medium text-gray-900">32443388</p>
                  </div>

                  {/* Role & Band */}
                  <div className="mb-6">
                    <h3 className="mb-1" style={{ fontSize: '14px', lineHeight: '17px', letterSpacing: '0px', color: '#7A7480', fontWeight: 'normal' }}>Role & Band</h3>
                    <p className="text-sm font-medium text-gray-900">Lead 2 - Software Engineer / B2</p>
                  </div>

                  {/* Account */}
                  <div className="mb-6">
                    <h3 className="text-xs font-medium text-gray-500 mb-2">Account</h3>
                    <p className="text-base font-bold" style={{ color: '#E20074' }}>T Mobile</p>
                  </div>

                  {/* Location */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} style={{ color: '#7A7480', strokeWidth: '2px' }} />
                      <span style={{ fontSize: '16px', lineHeight: '19px', letterSpacing: '0px', color: '#231F20', fontWeight: 'normal' }}>Bangalore</span>
                    </div>
                  </div>

                  {/* Hiring Manager */}
                  <div>
                    <h3 className="mb-3" style={{ fontSize: '14px', lineHeight: '17px', letterSpacing: '0px', color: '#7A7480', fontWeight: 'normal' }}>Hiring Manager</h3>
                    <div className="flex items-center gap-3">
                      <div className="overflow-hidden" style={{ width: '40px', height: '40px', backgroundColor: '#E5E5E5', borderRadius: '4px' }}>
                        <img
                          src={emilyImage}
                          alt="Emily Stephen"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span style={{ fontSize: '16px', lineHeight: '19px', letterSpacing: '0px', color: '#231F20', fontWeight: 'normal' }}>Emily Stephen</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* MAIN COMPONENT - RIGHT SIDE */}
              <div className="flex-1">
                <div className="p-6" style={{ backgroundColor: '#F2F7F8', borderRadius: '10px' }}>
                  {/* Header Row */}
                  <div className="flex justify-between items-start mb-6">
                    <h1 className="text-xl font-semibold text-gray-900">Lead 2 - Software Engineer</h1>
                    <span style={{ fontSize: '14px', lineHeight: '17px', letterSpacing: '0px', color: '#7A7480', fontWeight: 'normal', textAlign: 'right' }}>Posted in 26 December 2024</span>
                  </div>

                  {/* Job Summary */}
                  <div className="mb-6">
                    <h2 className="mb-3" style={{ fontSize: '20px', lineHeight: '24px', letterSpacing: '0px', color: '#231F20', fontWeight: 'normal' }}>Job Summary</h2>
                    <p style={{ fontSize: '16px', lineHeight: '24px', letterSpacing: '0px', color: '#7A7480', fontWeight: 'normal' }}>
                      We are seeking a highly skilled and experienced Senior Backend Software Engineer to join our dynamic technology team. The ideal candidate will be responsible for designing, developing, and maintaining scalable, robust, and secure backend systems. This role requires strong problem-solving skills, architectural thinking, and the ability to mentor junior engineers while collaborating with cross-functional teams to deliver high-quality software solutions.
                    </p>
                  </div>

                  {/* Key Responsibilities */}
                  <div className="mb-6">
                    <h2 className="mb-3" style={{ fontSize: '20px', lineHeight: '24px', letterSpacing: '0px', color: '#231F20', fontWeight: 'normal' }}>Key Responsibilities</h2>
                    <ul className="space-y-2">
                      <li className="flex gap-3">
                        <span className="mt-1.5 flex-shrink-0" style={{ width: '8px', height: '8px', backgroundColor: '#0097AC', borderRadius: '50%' }}></span>
                        <span style={{ fontSize: '16px', lineHeight: '24px', letterSpacing: '0px', color: '#7A7480', fontWeight: 'normal' }}>Design, develop, and maintain high-performance, scalable, and secure backend services and APIs.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-1.5 flex-shrink-0" style={{ width: '8px', height: '8px', backgroundColor: '#0097AC', borderRadius: '50%' }}></span>
                        <span style={{ fontSize: '16px', lineHeight: '24px', letterSpacing: '0px', color: '#7A7480', fontWeight: 'normal' }}>Collaborate with front-end developers, product managers, and other stakeholders to define and implement technical solutions.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-1.5 flex-shrink-0" style={{ width: '8px', height: '8px', backgroundColor: '#0097AC', borderRadius: '50%' }}></span>
                        <span style={{ fontSize: '16px', lineHeight: '24px', letterSpacing: '0px', color: '#7A7480', fontWeight: 'normal' }}>Optimize applications for maximum speed, scalability, and reliability.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-1.5 flex-shrink-0" style={{ width: '8px', height: '8px', backgroundColor: '#0097AC', borderRadius: '50%' }}></span>
                        <span style={{ fontSize: '16px', lineHeight: '24px', letterSpacing: '0px', color: '#7A7480', fontWeight: 'normal' }}>Write clean, maintainable, and well-documented code following best practices.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-1.5 flex-shrink-0" style={{ width: '8px', height: '8px', backgroundColor: '#0097AC', borderRadius: '50%' }}></span>
                        <span style={{ fontSize: '16px', lineHeight: '24px', letterSpacing: '0px', color: '#7A7480', fontWeight: 'normal' }}>Conduct code reviews, provide constructive feedback, and mentor junior engineers.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Must Have Skills */}
                  <div>
                    <h2 className="mb-3" style={{ fontSize: '20px', lineHeight: '24px', letterSpacing: '0px', color: '#231F20', fontWeight: 'normal' }}>Must Have Skills</h2>
                    
                    {/* Primary */}
                    <div className="mb-4">
                      <h3 className="text-xs font-medium text-gray-500 mb-2">Primary</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3" style={{ backgroundColor: '#ECECE1', borderRadius: '30px', height: '33px', display: 'inline-flex', alignItems: 'center', fontSize: '14px', lineHeight: '17px', letterSpacing: '0px', color: '#231F20', fontWeight: 'normal' }}>Java</span>
                        <span className="px-3" style={{ backgroundColor: '#ECECE1', borderRadius: '30px', height: '33px', display: 'inline-flex', alignItems: 'center', fontSize: '14px', lineHeight: '17px', letterSpacing: '0px', color: '#231F20', fontWeight: 'normal' }}>Node.js</span>
                        <span className="px-3" style={{ backgroundColor: '#ECECE1', borderRadius: '30px', height: '33px', display: 'inline-flex', alignItems: 'center', fontSize: '14px', lineHeight: '17px', letterSpacing: '0px', color: '#231F20', fontWeight: 'normal' }}>.NET</span>
                        <span className="px-3" style={{ backgroundColor: '#ECECE1', borderRadius: '30px', height: '33px', display: 'inline-flex', alignItems: 'center', fontSize: '14px', lineHeight: '17px', letterSpacing: '0px', color: '#231F20', fontWeight: 'normal' }}>Python</span>
                      </div>
                    </div>

                    {/* Others */}
                    <div className="mb-4">
                      <h3 className="text-xs font-medium text-gray-500 mb-2">Others</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3" style={{ backgroundColor: '#ECECE1', borderRadius: '30px', height: '33px', display: 'inline-flex', alignItems: 'center', fontSize: '14px', lineHeight: '17px', letterSpacing: '0px', color: '#231F20', fontWeight: 'normal' }}>Presentation</span>
                        <span className="px-3" style={{ backgroundColor: '#ECECE1', borderRadius: '30px', height: '33px', display: 'inline-flex', alignItems: 'center', fontSize: '14px', lineHeight: '17px', letterSpacing: '0px', color: '#231F20', fontWeight: 'normal' }}>MS Powerpoint</span>
                        <span className="px-3" style={{ backgroundColor: '#ECECE1', borderRadius: '30px', height: '33px', display: 'inline-flex', alignItems: 'center', fontSize: '14px', lineHeight: '17px', letterSpacing: '0px', color: '#231F20', fontWeight: 'normal' }}>MS Excel</span>
                      </div>
                    </div>

                    {/* Good to Have Skills */}
                    <div>
                      <h3 className="text-xs font-medium text-gray-500 mb-2">Good to Have Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3" style={{ backgroundColor: '#ECECE1', borderRadius: '30px', height: '33px', display: 'inline-flex', alignItems: 'center', fontSize: '14px', lineHeight: '17px', letterSpacing: '0px', color: '#231F20', fontWeight: 'normal' }}>Nextiva</span>
                        <span className="px-3" style={{ backgroundColor: '#ECECE1', borderRadius: '30px', height: '33px', display: 'inline-flex', alignItems: 'center', fontSize: '14px', lineHeight: '17px', letterSpacing: '0px', color: '#231F20', fontWeight: 'normal' }}>Miro</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsUI;