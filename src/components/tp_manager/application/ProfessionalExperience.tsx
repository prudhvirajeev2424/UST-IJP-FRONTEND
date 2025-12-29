import React, { useEffect, useRef, useState } from 'react';
import type { Job } from '../../../types/candidate';
import JobCard from './JobCard';

interface ProfessionalExperienceProps {
  jobs: Job[];
  totalYears?: number;
  position?: string;
}

const ProfessionalExperience: React.FC<ProfessionalExperienceProps> = ({ 
  jobs, 
  totalYears = 10, 
  position = "Java Developer" 
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [connectors, setConnectors] = useState<Array<{ top: number; left: number; height: number }>>([]);

  useEffect(() => {
    const runMeasurements = () => {
      const container = containerRef.current;
      if (!container) return;

      const dots = Array.from(container.querySelectorAll('[data-timeline-dot]')) as HTMLElement[];
      if (dots.length === 0) {
        setConnectors([]);
        return;
      }

  const containerRect = container.getBoundingClientRect();
  const results: Array<{ top: number; left: number; height: number }> = [];

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const dotRect = dot.getBoundingClientRect();
        const currentTop = dotRect.top - containerRect.top + dotRect.height / 2;
        const currentLeft = dotRect.left - containerRect.left + dotRect.width / 2;

        if (i < dots.length - 1) {
          const nextRect = dots[i + 1].getBoundingClientRect();
          const nextTop = nextRect.top - containerRect.top + nextRect.height / 2;
          const height = Math.max(0, nextTop - currentTop);
          results.push({ top: currentTop, left: currentLeft, height });
        }
      }

      setConnectors(results);
    };

    // measure once and on resize
    runMeasurements();
    window.addEventListener('resize', runMeasurements);
    return () => window.removeEventListener('resize', runMeasurements);
  }, [jobs]);

  return (
    <section id="experience" className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">
        Professional Experience
      </h2>
      <p className="text-sm text-black-600 mb-6">
        Total {totalYears} years as {position}
      </p>
      <div className="relative">
        <div ref={containerRef} className="space-y-8 pl-0">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} dotColor="#14b8a6" />
          ))}
        </div>

        {/* Render connector overlays */}
        {connectors.map((c, idx) => (
          <div
            key={idx}
            aria-hidden
            style={{
              position: 'absolute',
              left: c.left,
              top: c.top,
              height: c.height,
              borderLeft: `2px dotted #d1d5db`, // slightly darker light gray (tailwind gray-300)
              transform: 'translateX(-50%)', // center the dotted line at the dot's center
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default ProfessionalExperience;