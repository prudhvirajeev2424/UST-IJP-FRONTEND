import { useState } from 'react';
import { User, AlertCircle, FileText, ArrowRight } from 'lucide-react';
import { SkillBadge } from './SkillBadge';
import { UploadResumeModal } from './UploadResumeModal';
import { ResumeDetailModal } from './ResumeDetailModal';
import { UpdateResumeDrawer } from './UpdateResumeDrawer';
import { ResumeNotFoundCard } from './ResumeNotFoundCard';
import { Button, Card, CardContent, CardHeader, CardTitle } from '../ui';
import { EmpHomeRightSideBar } from './EmpHomeRightSideBar';
import {EmpHomeLeftSideBar} from './EmpHomeLeftSideBar'
import { stats,opportunities, } from '../../data/mockData';
import {profileData} from '../../data/profiles'
import { EmpHomeGrid } from './EmpHomeGrid';
// import type {Stats,Activity} from '../../types/activity';

 
interface Activity {
  id: string;
  jobTitle: string;
  soNumber: string;
  status: 'shortlisted' | 'actioned' | 'rejected';
  time: string;
}
 

 
const statsData = {
  applied: 4,
  shortlisted: 3,
  rejected: 1,
};
 
const recentActivities: Activity[] = [
  {
    id: '1',
    jobTitle: 'Java Developer I - A1',
    soNumber: 'SO#29256?',
    status: 'shortlisted',
    time: '12 hrs ago',
  },
  {
    id: '2',
    jobTitle: 'Java Developer I - A1',
    soNumber: 'SO#29256?',
    status: 'actioned',
    time: 'Yesterday',
  },
  {
    id: '3',
    jobTitle: 'Java Developer I - A1',
    soNumber: 'SO#29256?',
    status: 'rejected',
    time: '3 days ago',
  },
];
 
const StatusBadge = ({ status }: { status: Activity['status'] }) => {
  const styles = {
    shortlisted: 'bg-emerald-100 text-emerald-600',
    actioned: 'bg-amber-100 text-amber-600',
    rejected: 'bg-red-100 text-red-600',
  };
 
  const labels = {
    shortlisted: 'Shortlisted',
    actioned: 'Actioned',
    rejected: 'Rejected',
  };
 
  return (
    <span className={`text-xs px-2 py-0.5 rounded ${styles[status]}`}>
      {labels[status]}
    </span>
  );
};
 
export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [hasResume, setHasResume] = useState(false);
  const [uploadResumeModalOpen, setUploadResumeModalOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [updateDrawerOpen, setUpdateDrawerOpen] = useState(false);
 
  const handleResumeUpload = () => {
    setHasResume(true);
    setUploadResumeModalOpen(false);
  };
 
  const handleResumeClick = () => {
    if (hasResume) {
      setResumeModalOpen(true);
    }
  };
 
  const handleUpdateClick = () => {
    setUpdateDrawerOpen(true);
  };
 
  const handleUpdateConfirm = () => {
    setUpdateDrawerOpen(false);
    setResumeModalOpen(false);
  };
 
  return (
    <div className="min-h-screen bg-background">
      {/* <Header activeTab={activeTab} onTabChange={setActiveTab} /> */}
 
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-[repeat(3,1fr)] gap-6">
            {/* Left Column - Profile Summary */}
            
            <EmpHomeLeftSideBar profile={profileData}/>
            
 
            {/* Center Column - Resume Upload or Uploaded State */}
              {!hasResume ? (
                // Resume not found state - Use the new component
                <ResumeNotFoundCard onUploadClick={() => setUploadResumeModalOpen(true)} />
              ) : (
                // Resume uploaded - show placeholder for opportunities
                <EmpHomeGrid opportunities={opportunities} />
              )}
           
 
            <div>
              {/* Right Column - Stats & Activities */}
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-3xl font-medium text-foreground">{statsData.applied}</p>
                      <p className="text-sm text-muted-foreground">Applied</p>
                    </div>
                    <div>
                      <p className="text-3xl font-medium text-emerald-500">{statsData.shortlisted}</p>
                      <p className="text-sm text-muted-foreground">Shortlisted</p>
                    </div>
                    <div>
                      <p className="text-3xl font-medium text-coral">{statsData.rejected}</p>
                      <p className="text-sm text-muted-foreground">Rejected</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
 
              {/* Recent Activities */}
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base font-normal text-foreground">
                      Recent Activities
                    </CardTitle>
                    <button className="text-sm text-primary hover:underline">
                      View All
                    </button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-foreground">
                          Applied job "{activity.jobTitle}"
                        </p>
                        <p className="text-xs text-primary">({activity.soNumber})</p>
                        <div className="flex items-center gap-2 mt-1">
                          <StatusBadge status={activity.status} />
                          <span className="text-xs text-muted-foreground">{activity.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
            
            
          </div>
        </div>
      </main>
 
      {/* Upload Resume Modal */}
      <UploadResumeModal
        open={uploadResumeModalOpen}
        onOpenChange={setUploadResumeModalOpen}
        onConfirm={handleResumeUpload}
      />
 
      {/* Resume Detail Modal */}
      <ResumeDetailModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        onUpdateClick={handleUpdateClick}
      />
 
      {/* Update Resume Drawer */}
      <UpdateResumeDrawer
        isOpen={updateDrawerOpen}
        onClose={() => setUpdateDrawerOpen(false)}
        onConfirm={handleUpdateConfirm}
      />
    </div>
  );
}
 