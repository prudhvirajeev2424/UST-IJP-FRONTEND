// import React from 'react';
import type { Status } from '../../types/status';
import { getStatusColor } from '../../utils/Helper';
 
interface StatusBadgeProps {
 status: Status;
}
 
const StatusBadge = ({ status }:StatusBadgeProps['status']) => {
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
 
 
 
 