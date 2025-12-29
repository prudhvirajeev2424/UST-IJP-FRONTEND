import ApplicationStatus from '../../components/Wfm/Home/ApplicationStatus'
import RecentActivities from '../../components/Wfm/Home/RecentActivities'
import ProfilesReceivedSection from '../../components/Wfm/Home/ProfilesReceivedSection'

const WfmHome = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-[1800px] mx-auto p-6">
        <div className="grid grid-cols-12"> 

          {/* Left */} 
          <div className="col-span-1">``
            <div className="flex flex-col "> 
              <ApplicationStatus /> 
            </div> 
          </div> 

          {/* Middle */} 
          <div className="col-span-10 min-w-0"> 
            <div className="flex justify-center"> 
              <ProfilesReceivedSection /> 
            </div> 
          </div> 

          {/* Right */} 
          <div className="col-span-1"> 
            <div className="flex flex-col "> 
              <RecentActivities /> 
            </div> 
          </div> 
        </div>
      </main>
    </div>
  )
}

export default WfmHome
