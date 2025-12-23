import { X, Upload, Download } from 'lucide-react';

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
      
      {/* Bottom Sheet Modal - slides up from bottom */}
      <div className="fixed left-1/2 -translate-x-1/2 bottom-0 w-full max-w-[650px] h-[85vh] bg-background rounded-t-2xl shadow-xl z-50 flex flex-col"
        style={{ animation: 'slideUp 0.3s ease-out' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0">
          <h2 className="text-lg font-semibold text-foreground">Introduction</h2>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">Applied on {resumeData.appliedDate}</span>
            <button 
              onClick={onUpdateClick}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Upload resume"
            >
              <Upload className="w-5 h-5 text-muted-foreground" />
            </button>
            <button 
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Download resume"
            >
              <Download className="w-5 h-5 text-muted-foreground" />
            </button>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Scrollable Content - with hidden scrollbar */}
        <div className="flex-1 overflow-y-auto hide-scrollbar p-6 space-y-8">
          {/* Introduction */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            {resumeData.introduction}
          </p>

          {/* Professional Experience */}
          <section>
            <h3 className="text-base font-semibold text-foreground mb-1">Professional Experience</h3>
            <p className="text-sm text-muted-foreground mb-4">Total {resumeData.totalExperience} as Java Developer</p>
            
            <div className="space-y-6">
              {resumeData.experiences.map((exp, index) => (
                <div key={exp.id} className="flex gap-4">
                  <div className="flex flex-col items-center pt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {index < resumeData.experiences.length - 1 && (
                      <div className="w-px flex-1 bg-border mt-2" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground mb-3">{exp.period}</p>
                    <div className="bg-background border-l-4 border-muted rounded-r-lg p-4 shadow-sm">
                      <h4 className="font-semibold text-foreground">
                        {exp.title} <span className="font-normal text-muted-foreground">({exp.company})</span>
                      </h4>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{exp.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {exp.skills.map((skill) => (
                          <span key={skill} className="text-xs bg-foreground text-background px-3 py-1.5 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-base font-semibold text-foreground mb-4">Education</h3>
            <div className="space-y-4">
              {resumeData.education.map((edu) => (
                <div key={edu.id} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div className="w-px flex-1 bg-border" />
                  </div>
                  <div className="flex-1 pb-2">
                    <p className="text-xs text-muted-foreground mb-2">{edu.period}</p>
                    <div className="bg-muted/30 rounded-lg p-4 flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-lg">🎓</span>
                      </div>
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
                <div key={index} className="bg-muted/30 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <p className="text-sm text-foreground">{cert}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Accolades */}
          <section>
            <h3 className="text-base font-semibold text-foreground mb-4">Accolades</h3>
            <div className="grid grid-cols-3 gap-4">
              {resumeData.accolades.map((accolade, index) => (
                <div key={index} className="bg-muted/30 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                    <span className="text-3xl">🏅</span>
                  </div>
                  <p className="text-sm text-foreground">{accolade}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <h3 className="text-base font-semibold text-foreground mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.map((skill) => (
                <span key={skill} className="text-sm border border-border px-4 py-1.5 rounded-full text-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section>
            <h3 className="text-base font-semibold text-foreground mb-4">Testimonials</h3>
            <div className="grid grid-cols-2 gap-4">
              {resumeData.testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-muted/30 rounded-lg p-5">
                  <div className="text-2xl text-muted-foreground mb-2">"</div>
                  <p className="text-sm text-muted-foreground italic mb-4">{testimonial.text}</p>
                  <div className="text-2xl text-muted-foreground text-right mb-4">"</div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-sm font-medium text-primary">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
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
    </div>
  );
}