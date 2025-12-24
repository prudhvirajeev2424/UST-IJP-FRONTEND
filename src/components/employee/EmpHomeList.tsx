import React, { useEffect } from 'react';
import StatusBadge from './home_components/StatusBadge';

interface EmpHomeListProps {
  opportunities: any[]; // changed from Opportunity[] to any[] to avoid missing export runtime error
}

const EmpHomeList: React.FC<EmpHomeListProps> = ({ opportunities }) => {
  // log on mount to confirm rendering
  useEffect(() => {
    console.log("EmpHomeList mounted with", opportunities?.length ?? 0, "items");
  }, [opportunities]);

  const handleRowClick = (opportunityId: string) => {
    console.log('Opportunity clicked:', opportunityId);
  };

  // Accept string[] or string and normalize to array
  const formatSkills = (skills: string[] | string | undefined) => {
    const skillsArray: string[] = Array.isArray(skills)
      ? skills
      : typeof skills === 'string'
      ? skills.split(/[,;]+/).map(s => s.trim()).filter(Boolean)
      : [];

    if (skillsArray.length <= 2) {
      return skillsArray.join(',');
    }

    const firstTwoSkills = skillsArray.slice(0, 2).join(', ');
    const remainingCount = skillsArray.length - 2;

    return `${firstTwoSkills}, +${remainingCount}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden" style={{ width: '1000px' }}>
      <table className="w-full">
        <thead>
          <tr style={{ backgroundColor: 'rgba(215, 224, 227, 0.15)' }}>
            <th className="text-left py-4 px-6 font-rubik font-normal uppercase" style={{ fontSize: '14px', lineHeight: '17px', letterSpacing: '0px', height: '60px', color: '#7A7480' }}>SOE</th>
            <th className="text-left py-4 px-6 font-rubik font-normal" style={{ fontSize: '14px', lineHeight: '17px', letterSpacing: '0px', height: '60px', color: '#7A7480', textTransform: 'capitalize' }}>Role</th>
            <th className="text-left py-4 px-6 font-rubik font-normal" style={{ fontSize: '14px', lineHeight: '17px', letterSpacing: '0px', height: '60px', color: '#7A7480', textTransform: 'capitalize' }}>Band</th>
            <th className="text-left py-4 px-6 font-rubik font-normal" style={{ fontSize: '14px', lineHeight: '17px', letterSpacing: '0px', height: '60px', color: '#7A7480', textTransform: 'capitalize' }}>Location</th>
            <th className="text-left py-4 px-6 font-rubik font-normal" style={{ fontSize: '14px', lineHeight: '17px', letterSpacing: '0px', height: '60px', color: '#7A7480', textTransform: 'capitalize' }}>Skills</th>
            <th className="text-left py-4 px-6 font-rubik font-normal" style={{ fontSize: '14px', lineHeight: '17px', letterSpacing: '0px', height: '60px', color: '#7A7480', textTransform: 'capitalize' }}>Action Taken</th>
          </tr>
        </thead>
        <tbody>
          {opportunities.map((opp, index) => (
            <tr
              key={opp.id ?? index}
              onClick={() => handleRowClick(opp.id)}
              className="border-b border-[#D7E0E3] hover:bg-[#F2F7F8] cursor-pointer last:border-b-0"
              style={{ backgroundColor: '#FFFFFF', height: '65px' }}
            >
              <td className="py-4 px-6 font-rubik" style={{ fontSize: '14px', lineHeight: '17px', letterSpacing: '0px', color: '#006E74' }}>{opp.id}</td>
              <td className="py-4 px-6 font-rubik" style={{ fontSize: '18px', lineHeight: '22px', letterSpacing: '0px', color: '#006E74' }}>{opp.role}</td>
              <td className="py-4 px-6 font-rubik" style={{ fontSize: '18px', lineHeight: '22px', letterSpacing: '0px', color: '#231F20' }}>{opp.band}</td>
              <td className="py-4 px-6 font-rubik" style={{ fontSize: '16px', lineHeight: '19px', letterSpacing: '0px', color: '#231F20' }}>{opp.location}</td>
              <td className="py-4 px-6 font-rubik" style={{ fontSize: '16px', lineHeight: '19px', letterSpacing: '0px', color: '#231F20' }} title={Array.isArray(opp.skills) ? opp.skills.join('; ') : String(opp.skills)}>
                {formatSkills(opp.skills)}
              </td>
              <td className="py-4 px-6">
                {opp.status && <StatusBadge status={opp.status} />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmpHomeList;