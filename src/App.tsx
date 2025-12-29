import { useState } from 'react';
import './App.css';
import { ShortlistProvider } from './components/tp_manager/application/context/ShortlistContext';
// import Application from './pages/Application';
import TP_Applications from './pages/layout/TP_Applications';
import Home from './pages/home';
import Navbar from './components/navbar';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handleNavigate = (page: string) => {
    console.log('Navigating to:', page); // Debug log
    setCurrentPage(page);
  };

  return (
    <ShortlistProvider>
      <div className="min-h-screen">
        <Navbar 
          role="TP Manager" 
          onNavigate={handleNavigate}
          activePage={currentPage}
        />
        
        <div className="pt-16">
          {currentPage === 'Home' && (
            <div>
              <Home />
            </div>
          )}

          {currentPage === 'Applications' && (
            <div>
              <TP_Applications />
            </div>
          )}
          
          {/* {currentPage === 'Applications' && (
            <div>
              <Application />
            </div>
          )} */}
          
          {currentPage === 'Assigning & Tracking' && (
            <div className="p-8 bg-gray-50 min-h-screen">
              <h2 className="text-2xl font-bold mb-4">Assigning & Tracking</h2>
              <p className="text-gray-600">Content for Assigning & Tracking goes here.</p>
            </div>
          )}
          
          {currentPage === 'Reports' && (
            <div className="p-8 bg-gray-50 min-h-screen">
              <h2 className="text-2xl font-bold mb-4">Reports</h2>
              <p className="text-gray-600">Content for Reports goes here.</p>
            </div>
          )}
        </div>
      </div>
    </ShortlistProvider>
  );
}

export default App;