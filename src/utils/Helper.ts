import type { Opportunity } from "../types/opportunity";
import type { Activity } from "../types/activity";
 
export const getStatusColor = (status: Opportunity['status']): string => {
 if (!status) return '';
 
 switch (status) {
   case 'Shortlisted':
     return 'bg-success bg-opacity-10 text-success';
   case 'Actioned':
     return 'bg-warning bg-opacity-10 text-warning';
   case 'Rejected':
     return 'bg-danger bg-opacity-10 text-danger';
   default:
     return 'bg-gray-100 text-gray-700';
 }
};
export const getStatusColorActivity = (activity: Activity): string => {
 if (!activity) return '';
 
 switch (activity.status) {
   case 'Shortlisted':
     return 'bg-success bg-opacity-10 text-success';
   case 'Actioned':
     return 'bg-warning bg-opacity-10 text-warning';
   case 'Rejected':
     return 'bg-danger bg-opacity-10 text-danger';
   default:
     return 'bg-gray-100 text-gray-700';
 }
};

 

 
 
 
 
 