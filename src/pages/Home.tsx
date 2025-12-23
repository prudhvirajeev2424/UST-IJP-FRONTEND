import ApplicationStatus from '../components/Wfm/Home/ApplicationStatus'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
    
      <div className="max-w-7xl mx-auto p-6">
        <div className="max-w-sm">
          <ApplicationStatus />
        </div>
      </div>
    </div>
  );
};
export default Home;