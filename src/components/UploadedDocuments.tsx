
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