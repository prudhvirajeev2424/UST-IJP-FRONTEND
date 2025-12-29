import React, { useEffect, useState } from 'react';
import { X, Upload, Download } from 'lucide-react';
import { UpdateResumeDrawer } from './UpdateResumeDrawer';

interface ResumeDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdateClick: () => void;
}

const resumeData = {
  appliedDate: '21st January, 2025',
  introduction: 'A highly skilled and results-driven Java Developer with 10 years of experience in designing, developing, and deploying scalable software solutions. Adept at leveraging modern frameworks, microservices architecture, and cloud technologies to build high-performance applications. Passionate about clean coding, Agile methodologies, and mentoring junior developers.',
  totalExperience: '10 years',
  experiences: [
    {
      id: '1',
      period: 'JAN 2020 - Present',
      title: 'Senior Java Developer',
      company: 'UST',
      description: 'Architected and implemented microservices-based applications using Spring Boot, Hibernate, and RESTful APIs. Led a team of 5 developers, conducting code reviews and improving overall code quality.',
      skills: ['Spring Boot', 'Hibernate', 'RESTful APIs'],
    },
    {
      id: '2',
      period: 'JAN 2020 - Present',
      title: 'Java Developer',
      company: 'ABC Solutions',
      description: 'Developed enterprise applications using Java EE, Spring MVC, and MySQL. Designed RESTful web services for seamless integration with front-end applications.',
      skills: ['Java EE', 'Spring MVC', 'MySQL'],
    },
    {
      id: '3',
      period: 'JAN 2020 - Present',
      title: 'Junior Java Developer',
      company: 'DEF Software Pvt Ltd',
      description: 'Assisted in developing and testing Java-based applications. Wrote reusable code modules and optimized legacy systems. Conducted unit testing using JUnit and ensured code adherence to best practices.',
      skills: ['Java EE'],
    },
  ],
  education: [
    {
      id: '1',
      period: '2012 - 2014',
      degree: 'Master of Computer Engineering (MCA)',
      institution: 'University of XYZ',
    },
    {
      id: '2',
      period: '2008 - 2012',
      degree: 'Bachelor of Computer Engineering (MCA)',
      institution: 'ABC University',
    },
  ],
  certifications: [
    'Oracle Certified Professional Java SE 11 Developer',
    'AWS Certified Solutions Architect - Associate',
    'Scrum Master Certified (SMC)',
  ],
  accolades: [
    'Received "Best Developer of the Year" at XYZ Technologies',
    'Achieved 98% on-time project delivery rate for mission-critical applications.',
    'Received "Best Developer of the Year" at XYZ Technologies',
  ],
  skills: ['Java', 'JavaScript', 'SQL', 'Spring Boot', 'MySQL', 'MongoDB', 'GitHub', 'Java EE'],
  testimonials: [
    {
      id: '1',
      text: 'An exceptional Java developer who consistently delivers high-quality code. His ability to troubleshoot complex issues is outstanding.',
      author: 'James Albert',
      role: 'CTO, XYZ Technologies',
    },
    {
      id: '2',
      text: "A fantastic mentor and leader. His technical expertise and problem-solving skills have greatly contributed to our team's success.",
      author: 'Peter Hayne',
      role: 'Team Lead, ABC Solutions',
    },
  ],
};

export function ResumeDetailModal({ isOpen, onClose, onUpdateClick }: ResumeDetailModalProps) {
  // local state to show the update resume drawer on top of the modal
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
  const handleDrawerConfirm = () => {
    // close drawer then call parent update handler (if any)
    setIsDrawerOpen(false);
    onUpdateClick?.();
  };

	// move hook here so it's always called (avoids conditional hook rule)
	useEffect(() => {
		if (!isOpen) return;
		const prev = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		return () => { document.body.style.overflow = prev; };
	}, [isOpen]);

	// runtime asset URLs — place the SVGs under public/assets/
	const PUBLIC = '';
	const certIconPath = `${PUBLIC}${encodeURI('/assets/certificate_svg.svg')}`;
	const eduIconPath = `${PUBLIC}${encodeURI('/assets/education_svg.svg')}`;
	const accoladeIconPath = `${PUBLIC}${encodeURI('/assets/accolades_svg.svg')}`;
	const quoteIconPath = `${PUBLIC}${encodeURI('/assets/Icon metro-quote.svg')}`;
	const profileIconPath = `${PUBLIC}${encodeURI('/assets/profile_svg.svg')}`;

	// split skills into two rows (first 4, next 4)
	const topSkills = resumeData.skills.slice(0, 4);
	const bottomSkills = resumeData.skills.slice(4, 8);

	if (!isOpen) return null;

	return (
    <div className="fixed inset-0 z-50">
      <style>{`
        @keyframes slideUp {
          from { transform: translateX(-50%) translateY(100%); }
          to { transform: translateX(-50%) translateY(0); }
        }
        
        /* Hide scrollbar for Chrome, Safari and Opera */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
      
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/30"
        onClick={onClose}
      />
      
      {/* Modal: top gap 80px, flush to bottom; width 1000px; height = calc(100vh - 80px) */}
      <div
        id="resume-detail-modal"
        className="fixed left-1/2 top-[80px] bottom-0 -translate-x-1/2 w-[1000px] bg-white shadow-xl z-50 flex flex-col"
        style={{
          width: 1000,
          height: 'calc(100vh - 80px)',
          maxHeight: 'calc(100vh - 80px)',
          backgroundColor: '#FFFFFF',
          borderRadius: '10px',
          boxSizing: 'border-box',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0">
          <h2 className="text-lg font-semibold text-foreground">Introduction</h2>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">Applied on {resumeData.appliedDate}</span>
            <button 
              onClick={openDrawer}
              className="p-2 hover:bg-muted rounded-md transition-colors"
              aria-label="Upload resume"
            >
              <Upload className="w-5 h-5 text-muted-foreground" />
            </button>
            <button 
              className="p-2 hover:bg-muted rounded-md transition-colors"
              aria-label="Download resume"
            >
              <Download className="w-5 h-5 text-muted-foreground" />
            </button>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-md transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Scrollable Content - ensure texts are left-aligned (not justified) */}
        <div id="resume-modal-scroll" className="flex-1 overflow-y-auto hide-scrollbar p-6 space-y-8 text-left" style={{ paddingBottom: 150 }}>
          {/* Introduction */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            {resumeData.introduction}
          </p>

          {/* Professional Experience */}
          <section>
            <h3 className="text-base font-semibold text-foreground mb-1">Professional Experience</h3>
            <p className="text-sm text-muted-foreground mb-4">Total {resumeData.totalExperience} as Java Developer</p>
            
            <div className="space-y-6">
              {resumeData.experiences.map((exp, index) => {
                return (
                  <div key={exp.id} className="flex gap-4">
                    {/* timeline column with vertical line (line drawn by CSS ::before) */}
                    <div className="timeline-column relative flex flex-col items-center pt-1">
                      <div className="timeline-dot z-10" />
                    </div>

                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground mb-3">{exp.period}</p>

                      <div className="experience-box border-muted rounded-r-md">
                        <h4 className="font-semibold text-foreground">
                          {exp.title} <span className="font-normal text-muted-foreground">({exp.company})</span>
                        </h4>

                        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{exp.description}</p>

                        <div className="flex flex-wrap gap-2 mt-3">
                          {exp.skills.map((skill) => (
                            <div key={skill} className="skill-chip" role="listitem">
                              <span className="skill-text inner-small">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-base font-semibold text-foreground mb-4">Education</h3>
            <div className="space-y-4">
              {resumeData.education.map((edu) => (
                <div key={edu.id} className="flex gap-4">
                  {/* timeline column (vertical line) for education - matches experience timeline */}
                  <div className="timeline-column relative flex flex-col items-center pt-1">
                    <div className="timeline-dot z-10" />
                  </div>

                  <div className="flex-1 pb-2">
                    <p className="text-xs text-muted-foreground mb-2">{edu.period}</p>

                    <div className="education-box p-4 flex items-center gap-4">
                      <img src={eduIconPath} alt="education" className="w-10 h-10 object-contain" />
                      <div>
                        <h4 className="font-medium text-foreground">{edu.degree}</h4>
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h3 className="text-base font-semibold text-foreground mb-4">Certifications</h3>
            <div className="grid grid-cols-3 gap-4">
              {resumeData.certifications.map((cert, index) => (
                <div key={index} className="cert-box p-4 flex flex-col items-start justify-center">
                  <img src={certIconPath} alt="cert" className="w-10 h-10 mb-3 object-contain" />
                  <h4 className="text-sm font-medium text-foreground mb-1">{cert}</h4>
                </div>
              ))}
            </div>
          </section>
          
          {/* Accolades */}
          <section>
            <h3 className="text-base font-semibold text-foreground mb-4">Accolades</h3>
            <div className="grid grid-cols-3 gap-4">
              {resumeData.accolades.map((accolade, index) => (
                <div key={index} className="accolade-box p-4 flex flex-col items-start justify-center">
                  <div className="w-12 h-12 mb-3 flex items-center justify-center">
                    <img src={accoladeIconPath} alt="accolade" className="w-10 h-10 object-contain" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{accolade}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <h3 className="text-base font-semibold text-foreground mb-4">Skills</h3>

            <div className="space-y-1">
              <div className="skill-grid">
                {topSkills.map((skill) => (
                  <div key={skill} className="skill-chip" role="listitem">
                    <span className="skill-text">{skill}</span>
                  </div>
                ))}
              </div>
              
              <div className="skill-grid">
                {bottomSkills.map((skill) => (
                  <div key={skill} className="skill-chip" role="listitem">
                    <span className="skill-text">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section>
            <h3 className="text-base font-semibold text-foreground mb-4">Testimonials</h3>
            <div className="grid grid-cols-2 gap-4">
              {resumeData.testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-box p-5">
                  <div className="mb-2">
                    <img src={quoteIconPath} alt="quote" className="w-6 h-6 object-contain text-muted-foreground" />
                  </div>

                  <p className="text-sm text-muted-foreground italic mb-4">{testimonial.text}</p>

                  <div className="mb-4 text-right">
                    <img
                      src={quoteIconPath}
                      alt="quote-end"
                      className="w-6 h-6 object-contain inline-block"
                      style={{ transform: 'scaleX(-1)' }}
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <img src={profileIconPath} alt={testimonial.author} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <p className="font-medium text-foreground text-sm">{testimonial.author}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* UpdateResumeDrawer appears on top of the modal (its overlay uses a higher z-index) */}
      <UpdateResumeDrawer
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        onConfirm={handleDrawerConfirm}
      />
    </div>
  );
}

// add default export alias to satisfy default imports
export default ResumeDetailModal;