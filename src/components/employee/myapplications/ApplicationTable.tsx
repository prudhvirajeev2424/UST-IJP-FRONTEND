// import React, { useState } from 'react';
// import TableHeader from './TableHeader';
// import TableRow from './TableRow';
// import ApplicationDetailsPanel from './ApplicationDetailsPanel';
// import { mockApplications } from '../../../data/mockApplications';
// import type { Application } from '../../../types/application';

// const ApplicationTable: React.FC = () => {
//   const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);

//   const handleRowClick = (application: Application, index: number) => {
//     // Only the 3rd row (index 2) is clickable
//     if (index === 2) {
//       setSelectedApplication(application);
//       // Disable background scrolling
//       document.body.style.overflow = 'hidden';
//     }
//   };

//   const handleClosePanel = () => {
//     setSelectedApplication(null);
//     // Re-enable background scrolling
//     document.body.style.overflow = 'unset';
//   };

//   return (
//     <>
//       <div className="overflow-x-auto rounded-lg bg-white shadow-sm border border-gray-100">
//         <table className="w-full">
//           <TableHeader />
//           <tbody>
//             {mockApplications.map((application, index) => (
//               <TableRow
//                 key={application.id}
//                 application={application}
//                 isClickable={index === 2}
//                 onClick={() => handleRowClick(application, index)}
//               />
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Side Panel */}
//       {selectedApplication && (
//         <ApplicationDetailsPanel
//           application={selectedApplication}
//           onClose={handleClosePanel}
//         />
//       )}
//     </>
//   );
// };

// export default ApplicationTable;

import React, { useState } from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import ApplicationDetailsPanel from './ApplicationDetailsPanel';
import { mockApplications } from '../../../data/mockApplications';
import type { Application } from '../../../types/application';

const ApplicationTable: React.FC = () => {
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);

  const handleRowClick = (application: Application, index: number) => {
    // Only the 3rd row (index 2) is clickable
    if (index === 2) {
      setSelectedApplication(application);
      // Disable background scrolling
      document.body.style.overflow = 'hidden';
    }
  };

  const handleClosePanel = () => {
    setSelectedApplication(null);
    // Re-enable background scrolling
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <div className="overflow-x-auto rounded-lg bg-white shadow-sm">
        <table className="w-full table-fixed">
          <TableHeader />
          <tbody>
            {mockApplications.map((application, index) => (
              <TableRow
                key={application.id}
                application={application}
                isClickable={index === 2}
                onClick={() => handleRowClick(application, index)}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Side Panel */}
      {selectedApplication && (
        <ApplicationDetailsPanel
          application={selectedApplication}
          onClose={handleClosePanel}
        />
      )}
    </>
  );
};

export default ApplicationTable;