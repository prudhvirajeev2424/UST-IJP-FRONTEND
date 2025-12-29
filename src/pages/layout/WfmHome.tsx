import ApplicationStatus from '../../components/Wfm/Home/ApplicationStatus'
import RecentActivities from '../../components/Wfm/Home/RecentActivities'
import ProfilesReceivedSection from '../../components/Wfm/Home/ProfilesReceivedSection'

const WfmHome = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-[1800px] mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr_360px] gap-8">
          {/* Left Column - Application Status */}
          <div className="flex flex-col gap-6">
            <ApplicationStatus />
          </div>

          {/* Middle Column - Profiles Received */}
          <div className="flex-grow">
            <ProfilesReceivedSection />
          </div>

          {/* Right Column - Recent Activities */}
          <div className="flex flex-col gap-6">
            <RecentActivities />
          </div>
        </div>
      </main>
    </div>
  )
}

export default WfmHome
