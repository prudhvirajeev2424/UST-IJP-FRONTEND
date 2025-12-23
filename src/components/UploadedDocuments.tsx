// // UploadedDocuments.tsx
// import { AiFillFilePdf } from "react-icons/ai";
// import { HiOutlineMail } from "react-icons/hi";

// interface DocumentItem {
//   id: number;
//   name: string;
//   type: "pdf" | "mail";
// }

// const documents: DocumentItem[] = [
//   {
//     id: 1,
//     name: "Zamira Peterson - Resume.pdf",
//     type: "pdf",
//   },
//   {
//     id: 2,
//     name: "Approval Mail.eml",
//     type: "mail",
//   },
// ];

// const UploadedDocuments = () => {
//   return (
//     <div className="max-w-sm w-full bg-white shadow-lg rounded-2xl overflow-hidden border border-white">
//       {/* Header */}
//       <div className="border-b border-gray-200 px-4 py-3">
//         <h3 className="text-xl font-semibold text-gray-800">Uploaded Documents</h3>
//       </div>

//       {/* List of Documents */}
//       <div className="px-4 py-3 space-y-3">
//         {documents.map((doc) => (
//           <div key={doc.id} className="flex items-center gap-3">
//             {/* Icon */}
//             <div className="flex h-5 w-5 items-center justify-center">
//               {doc.type === "pdf" ? (
//                 <AiFillFilePdf className="h-5 w-5 text-red-500" />
//               ) : (
//                 <HiOutlineMail className="h-5 w-5 text-blue-500" />
//               )}
//             </div>

//             {/* Filename */}
//             <span className="text-sm text-gray-700">{doc.name}</span>
//           </div>
//         ))}
//       </div>

//       {/* Black line below the list */}
//       <div className="border-t border-black"></div>
//     </div>
//   );
// };

// export default UploadedDocuments;



// import { FileText, Mail } from "lucide-react";

// interface Document {
//   id: string;
//   name: string;
//   type: "pdf" | "email";
// }

// const documents: Document[] = [
//   { id: "1", name: "Zamira Peterson - Resume.pdf", type: "pdf" },
//   { id: "2", name: "Approval Mail.eml", type: "email" },
// ];

// const UploadedDocuments = () => {
//   return (
//     <div className="bg-white rounded-lg shadow-sm border border-gray-100 w-[320px]">
//       {/* Header */}
//       <div className="px-4 py-3">
//         <h3 className="text-[15px] font-medium text-[#374151]">
//           Uploaded Documents
//         </h3>
//       </div>

//       {/* Divider */}
//       <div className="h-px bg-[#E5E7EB]" />

//       {/* Document List */}
//       <div className="px-4 py-3 space-y-3">
//         {documents.map((doc) => (
//           <div key={doc.id} className="flex items-center gap-3">
//             {doc.type === "pdf" ? (
//               <FileText className="w-5 h-5 text-[#EF4444] flex-shrink-0" />
//             ) : (
//               <Mail className="w-5 h-5 text-[#3B82F6] flex-shrink-0" />
//             )}
//             <span className="text-[14px] text-[#374151]">{doc.name}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UploadedDocuments;


interface Document {
  id: string;
  name: string;
  type: "pdf" | "email";
}

const documents: Document[] = [
  { id: "1", name: "Zamira Peterson - Resume.pdf", type: "pdf" },
  { id: "2", name: "Approval Mail.eml", type: "email" },
];

const UploadedDocuments = () => {
  console.log('UploadedDocuments component rendered');
  console.log('Documents:', documents);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 w-[320px]">
      {/* Header */}
      <div className="px-4 py-3">
        <h3 className="text-[15px] font-medium text-[#374151]">
          Uploaded Documents
        </h3>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#E5E7EB]" />

      {/* Document List */}
      <div className="px-4 py-3 space-y-3">
        {documents.map((doc) => {
          console.log('Rendering document:', doc);
          
          return (
            <div key={doc.id} className="flex items-center gap-3">
              {doc.type === "pdf" ? (
                <img 
                  src="./src/assets/pdficon.png" 
                  alt="PDF" 
                  className="w-5 h-5 flex-shrink-0 object-contain"
                />
              ) : (
                <img 
                  src="./src/assets/mailicon.png" 
                  alt="Email" 
                  className="w-5 h-5 flex-shrink-0 object-contain"
                />
              )}
              <span className="text-[14px] text-[#374151]">{doc.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UploadedDocuments;