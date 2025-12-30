import React from 'react';
import type { Accolade } from '../../../types/candidate';
import AccoladeCard from './AccoladeCard';

interface AccoladesProps {
  accolades: Accolade[];
}

const Accolades: React.FC<AccoladesProps> = ({ accolades }) => {
  return (
    <section id="accolades" className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Accolades</h2>
      <div className="grid grid-cols-3 gap-4">
        {accolades.map((accolade) => (
          <AccoladeCard key={accolade.id} accolade={accolade} />
        ))}
      </div>
    </section>
  );
};

export default Accolades;