import React, { useEffect, useRef, useState } from 'react';
import type { Education as EducationType } from '../../../types/candidate';
import EducationItem from './EducationItem';

interface EducationProps {
  education: EducationType[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [connectors, setConnectors] = useState<Array<{ top: number; left: number; height: number }>>([]);

  useEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      if (!container) return;
      const dots = Array.from(container.querySelectorAll('[data-timeline-dot]')) as HTMLElement[];
      if (dots.length === 0) {
        setConnectors([]);
        return;
      }
      const containerRect = container.getBoundingClientRect();
      const res: Array<{ top: number; left: number; height: number }> = [];
      for (let i = 0; i < dots.length - 1; i++) {
        const cur = dots[i].getBoundingClientRect();
        const next = dots[i + 1].getBoundingClientRect();
        const top = cur.top - containerRect.top + cur.height / 2;
        const left = cur.left - containerRect.left + cur.width / 2;
        const height = Math.max(0, (next.top - containerRect.top + next.height / 2) - top);
        res.push({ top, left, height });
      }
      setConnectors(res);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [education]);

  return (
    <section id="education" className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Education</h2>
      <div className="relative">
        <div ref={containerRef} className="space-y-8 pl-0">
          {education.map((edu) => (
            <EducationItem key={edu.id} education={edu} />
          ))}
        </div>

        {connectors.map((c, idx) => (
          <div
            key={idx}
            aria-hidden
            style={{
              position: 'absolute',
              left: c.left,
              top: c.top,
              height: c.height,
              borderLeft: `2px dotted #d1d5db`,
              transform: 'translateX(-50%)',
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Education;