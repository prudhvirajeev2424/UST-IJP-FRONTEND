import React from 'react';
import type { ApplicationStatus } from '../../../types/application.ts';

interface StatusBadgeProps {
  status: ApplicationStatus;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getStatusStyles = (status: ApplicationStatus): string => {
    switch (status) {
      case 'Interviewing':
        return 'bg-[#FFF4E0] text-[#FFBF00]';
      case 'Allocated':
        return 'bg-[#E0F5F9] text-[#0097AC]';
      case 'Selected':
        return 'bg-[#E0F7F0] text-[#01B27C]';
      case 'Rejected':
        return 'bg-[#FFE9E7] text-[#FC6A59]';
      case 'Pending':
        return 'bg-[#F3E8F3] text-[#881E87]';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <span
  className={`inline-flex items-center rounded-md px-[7px] py-[6px] text-[13px] font-normal leading-tight ${getStatusStyles(
    status
  )}`}
>
  {status}
</span>

  );
};

export default StatusBadge;