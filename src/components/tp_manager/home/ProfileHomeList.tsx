import React, { useEffect } from 'react';
import StatusBadge from '../../employee/home_components/StatusBadge';

interface ProfileHomeListProps {
  // accept any[] to avoid type mismatches with different project Profile definitions
  profiles: any[];
}

const ProfileHomeList: React.FC<ProfileHomeListProps> = ({ profiles }) => {
  useEffect(() => {
    console.log('ProfileHomeList mounted with', profiles?.length ?? 0, 'profiles');
  }, [profiles]);

  const handleRowClick = (soNumber: string) => {
    // Dispatch navigation event to open the Applications view with this profile id
    window.dispatchEvent(
      new CustomEvent('navigate', {
        detail: {
          view: 'Applications',
          source: 'list',
          profileId: soNumber,
        },
      })
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden w-full" style={{ width: '100%' }}>
      <table className="w-full">
        <thead>
          <tr style={{ backgroundColor: 'rgba(215, 224, 227, 0.15)' }}>
            <th className="text-left py-4 px-6 font-rubik font-normal uppercase" style={{ fontSize: '14px', lineHeight: '17px', letterSpacing: '0px', height: '60px', color: '#7A7480' }}>SOE</th>
            <th className="text-left py-4 px-6 font-rubik font-normal" style={{ fontSize: '14px', lineHeight: '17px', letterSpacing: '0px', height: '60px', color: '#7A7480', textTransform: 'capitalize' }}>Name</th>
            <th className="text-left py-4 px-6 font-rubik font-normal" style={{ fontSize: '14px', lineHeight: '17px', letterSpacing: '0px', height: '60px', color: '#7A7480', textTransform: 'capitalize' }}>Role</th>
            <th className="text-left py-4 px-6 font-rubik font-normal" style={{ fontSize: '14px', lineHeight: '17px', letterSpacing: '0px', height: '60px', color: '#7A7480', textTransform: 'capitalize' }}>Band</th>
            <th className="text-left py-4 px-6 font-rubik font-normal" style={{ fontSize: '14px', lineHeight: '17px', letterSpacing: '0px', height: '60px', color: '#7A7480', textTransform: 'capitalize' }}>Location</th>
            <th className="text-left py-4 px-6 font-rubik font-normal" style={{ fontSize: '14px', lineHeight: '17px', letterSpacing: '0px', height: '60px', color: '#7A7480', textTransform: 'capitalize' }}>Match Score</th>
            <th className="text-left py-4 px-6 font-rubik font-normal" style={{ fontSize: '14px', lineHeight: '17px', letterSpacing: '0px', height: '60px', color: '#7A7480', textTransform: 'capitalize' }}>Action Taken</th>
          </tr>
        </thead>

        <tbody>
          {profiles.map((p, idx) => {
            // derive numeric score if possible (supports '90%' or number)
            let scoreNum: number | null = null;
            if (typeof p.matchScore === 'string') {
              const m = p.matchScore.trim().match(/^(\d+)(?:%?)$/);
              if (m) scoreNum = parseInt(m[1], 10);
            } else if (typeof p.matchScore === 'number') {
              scoreNum = p.matchScore;
            }

            const commonBadgeStyle: React.CSSProperties = {
              display: 'inline-block',
              padding: '4px 8px',
              borderRadius: '9999px',
              fontSize: '14px',
              lineHeight: '17px',
              fontWeight: 500,
            };

            const green = '#02B37C';
            const orange = '#FC6A59';

            const displayScore = scoreNum !== null ? `${scoreNum}%` : p.matchScore;
            let matchElement: React.ReactNode = displayScore;
            if (scoreNum === 90) {
              matchElement = (
                <span style={{ ...commonBadgeStyle, color: green, border: `1px solid ${green}` }}>{displayScore}</span>
              );
            } else if (scoreNum === 65) {
              matchElement = (
                <span style={{ ...commonBadgeStyle, color: orange, border: `1px solid ${orange}` }}>{displayScore}</span>
              );
            }

            return (
              <tr
                key={`${p.soNumber ?? 'profile'}-${idx}`}
                onClick={() => handleRowClick(p.soNumber ?? String(idx))}
                className="border-b border-[#D7E0E3] hover:bg-[#F2F7F8] cursor-pointer last:border-b-0"
                style={{ backgroundColor: '#FFFFFF', height: '65px' }}
              >
                <td className="py-4 px-6 font-rubik" style={{ fontSize: '14px', lineHeight: '17px', letterSpacing: '0px', color: '#006E74' }}>{p.soNumber}</td>
                <td className="py-4 px-3 font-rubik " style={{ fontSize: '18px', lineHeight: '22px', letterSpacing: '0px', color: '#000000' }}>{p.name}</td>
                <td className="py-4 px-2 font-rubik" style={{ fontSize: '18px', lineHeight: '22px', letterSpacing: '0px', color: '#006E74' }}>{p.role}</td>
                <td className="py-4 px-6 font-rubik" style={{ fontSize: '18px', lineHeight: '22px', letterSpacing: '0px', color: '#231F20' }}>{p.band}</td>
                <td className="py-4 px-6 font-rubik" style={{ fontSize: '16px', lineHeight: '19px', letterSpacing: '0px', color: '#231F20' }}>{p.location}</td>
                <td className="py-4 px-6 font-rubik" style={{ fontSize: '16px', lineHeight: '19px', letterSpacing: '0px', color: '#231F20' }}>{matchElement}</td>
                <td className="py-4 px-6">
                  {p.actionTaken && <StatusBadge status={p.actionTaken} />}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProfileHomeList;
