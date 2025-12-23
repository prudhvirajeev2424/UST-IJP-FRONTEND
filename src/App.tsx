import UploadedDocuments from "./components/UploadedDocuments";

const App = () => {
  console.log('🚀 App component is rendering');

  return (
    <div className="App relative min-h-screen bg-gray-100">
      
      {/* Fixed positioning to keep it in viewport */}
      <div className="fixed bottom-8 right-8 z-50">
        <UploadedDocuments />
      </div>
    </div>
  );
};

export default App;