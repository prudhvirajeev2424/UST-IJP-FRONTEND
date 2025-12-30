
import { getStatusColor } from '../../../utils/Helper';
import { useState } from 'react';

interface StatusBadgeProps {
  status: string;
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const [hovered, setHovered] = useState(false);

  // Special-case Allocated: use exact color and a hover effect
  if (status === 'Allocated') {
    const textColor = hovered ? '#000000' : '#0097AC';
    const bgColor = hovered ? '#e6f7fa' : 'transparent';

    return (
      <span
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="px-3 py-1 rounded-md font-rubik transition-colors"
        style={{ fontSize: '14px', lineHeight: '17px', letterSpacing: '0px', color: textColor, backgroundColor: bgColor }}
      >
        {status}
      </span>
    );
  }

  return (
    <span
      className={`px-3 py-1 rounded-md font-rubik ${getStatusColor(status)}`}
      style={{ fontSize: '14px', lineHeight: '17px', letterSpacing: '0px' }}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
 
 
 
 