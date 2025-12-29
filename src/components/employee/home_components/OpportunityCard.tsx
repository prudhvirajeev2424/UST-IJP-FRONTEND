import { useState } from 'react';
import { MapPin ,ArrowRight} from 'lucide-react';
import StatusBadge from './StatusBadge';
import type { Opportunity } from '../../../types/opportunity';

 

interface Props {
  opportunity: Opportunity;
}

 
 
export function OpportunityCard({ opportunity }: OpportunityCardProps) {
  const [isHovered,setIsHovered] = useState(false);
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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
        <div>
          <span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700">
            {opportunity.status}
          </span>
        </div>
      </div>

      <p className="text-sm text-text-muted mt-3 line-clamp-3">
        {opportunity.description}
      </p>

      {opportunity.skills && opportunity.skills.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {opportunity.skills.slice(0, 5).map((s) => (
            <span key={s} className="text-xs bg-muted px-2 py-1 rounded">
              {s}
            </span>
          ))}
        </div>
      </div>
        </div>
 
          
      {/* Hover State Content - Covers from Title to End */}
      <div
        className="flex flex-col absolute left-0 right-0 rounded-lg overflow-hidden"
        style={{
          top: '3.625rem', // Position after SO ID (text-lg + mb-4)
          bottom: 0,
          opacity: isHovered ? 1 : 0,
          visibility: isHovered ? 'visible' : 'hidden',
          transition: 'opacity 300ms ease-out, visibility 300ms ease-out',
          pointerEvents: isHovered ? 'auto' : 'none',
          zIndex: 10
        }}
      >
 
        {/* White Card Body */}
        <div className="flex-1 bg-white px-5 py-4 flex flex-col justify-between">
          {/* Description */}
          <p
            className="text-sm mb-6"
            style={{
              color: '#4A4A4A',
              lineHeight: '1.6',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
          >
            {opportunity.description}
          </p>
 
          {/* View in Detail Link */}
          <a
            href="#"
            className="inline-flex items-center gap-1.5 font-medium hover:underline"
            style={{
              color: '#006E74',
              fontSize: '0.9375rem'
            }}
          >
            View in Detail
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
        
    </div>
  );
};
