import { useState } from 'react';
import { MapPin } from 'lucide-react';
import StatusBadge from './StatusBadge';
import type { Opportunity } from '../../../types/opportunity';

 

interface OpportunityCardProps {
  opportunity: Opportunity;
}

 
 
export function OpportunityCard({ opportunity }: OpportunityCardProps) {
  const [isHovered] = useState(false);
  const displayedSkills = opportunity.skills.slice(0, 2);
  const remainingSkills = opportunity.skills.length - 2;
 
  return (
    <div
      className="relative rounded-[10px] font-rubik  cursor-pointer shadow-lg overflow-hidden text-left"
      style={{
        background: isHovered ?'#828080ff' :'#FFFFFF',
        transition: 'background-color 300ms ease-out',
        height: '287px',
        width: '320px'
      }}
    >
      {/* Default State Content */}
      <div className="flex flex-col"
      style={{
          opacity: isHovered ? 0.5 : 1,
          transition: 'opacity 300ms ease-out'
        }}
        >
        {/* SO ID - Default State */}
        <div className="text-teal-700 pl-5 pr-5 pt-5 text-lg font-normal mb-4">
          SO#{opportunity.id}
        </div>
        <div style={{width:'100%'}}>
          <hr style={{ width: '100%', borderTop: '1px solid #ccc', marginBottom: '1rem', margin: "0 auto 1rem auto" }} />
        </div>
        
        <div className='pl-5 pr-5 pt-5 '>
          {/* Title */}
        <h3 className="text-base font-medium text-gray-900 mb-1">
          {opportunity.role}
        </h3>
 
        {/* Band */}
        <div className="text-sm text-gray-600 mb-1">
          Band {opportunity.band}
        </div>
 
        {/* Location */}
        <div className="flex items-center gap-1 text-sm text-gray-600 mb-4">
          <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
          {opportunity.location}
        </div>
 
        {/* Status Badge */}
        {opportunity.status ? (
          <div className="mb-4">
            <span className={`text-sm font-rubik border-none rounded-md p-1`}>
              <StatusBadge status={opportunity.status}/>
            </span>
          </div>
        ):
        (
          <div className="mb-4 pt-5">
          </div>
        )}
 
        {/* Skills */}
        <div className="flex items-center gap-2 flex-wrap">
          {displayedSkills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-sm bg-customGray rounded-full border-none border-gray-300  text-gray-900"
            >
              {skill}
            </span>
          ))}
          {remainingSkills > 0 && (
            <span className="px-3 py-1 text-sm rounded-full border border-gray-300 bg-white text-gray-900">
              +{remainingSkills}
            </span>
          )}
        </div>
      </div>
        </div>
 
        
    </div>
  );
}
 
// Demo with sample data
// export default function App() {
//   const sampleOpportunity: Opportunity = {
//     soId: '12345',
//     title: 'Lead2 Software Developer',
//     band: 'Band 3',
//     location: 'Hyderabad, India',
//     status: 'shortlisted',
//     skills: ['React', 'TypeScript', 'Node.js', 'AWS'],
//     description: 'We are looking for an experienced Lead Software Developer to join our dynamic team. The ideal candidate will have strong expertise in React, TypeScript, and modern web technologies. You will lead development efforts and mentor junior developers.'
//   };
 
//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <OpportunityCard opportunity={sampleOpportunity} />
//     </div>
//   );
// }
 