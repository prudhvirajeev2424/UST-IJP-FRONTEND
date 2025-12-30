import React from 'react';
import type { Certification } from '../../../types/candidate';
import CertificationCard from './CertificationCard';

interface CertificationsProps {
  certifications: Certification[];
}

const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  return (
    <section id="certifications" className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Certifications</h2>
      <div className="grid grid-cols-3 gap-4">
        {certifications.map((cert) => (
          <CertificationCard key={cert.id} certification={cert} />
        ))}
      </div>
    </section>
  );
};

export default Certifications;