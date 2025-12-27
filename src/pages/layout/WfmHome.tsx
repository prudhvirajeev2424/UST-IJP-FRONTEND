import ApplicationStatus from '../../components/Wfm/Home/ApplicationStatus'
import RecentActivities from '../../components/Wfm/Home/RecentActivities'

const WfmHome = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl p-6 flex justify-between">
        {/* Left side */}
        <div className="max-w-xs">
          <ApplicationStatus />
        </div>

        {/* Right side */}
        <div className="ml-4 w-1/3">
          <RecentActivities />
        </div>
      </div>
    </div>
  )
}

export default WfmHome
