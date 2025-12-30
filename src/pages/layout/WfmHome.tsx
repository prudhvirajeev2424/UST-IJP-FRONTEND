// React import not required with the new JSX transform
// Use the TP Manager application status component (path used elsewhere in the app)
import ApplicationStatus from "../../components/tp_manager/home/ApplicationStatus";
// React import not required with the new JSX transform
import ApplicationStatus from "../../components/tp_manager/home/ApplicationStatus";

const WfmHome = () => {
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

export default WfmHome;
