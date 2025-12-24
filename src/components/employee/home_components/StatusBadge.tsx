
import { getStatusColor } from '../../../utils/Helper';
 
interface StatusBadgeProps {
 status: String;
}
 
const StatusBadge = ({ status }:StatusBadgeProps) => {
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
 
 
 
 