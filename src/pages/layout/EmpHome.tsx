import { useState } from 'react';
import { User, AlertCircle, FileText, ArrowRight } from 'lucide-react';
import { SkillBadge } from '../../components/employee/home_components/SkillBadge';
import { UploadResumeModal } from '../../components/employee/home_components/UploadResumeModal';
import { ResumeDetailModal } from '../../components/employee/home_components/ResumeDetailModal';
import { UpdateResumeDrawer } from '../../components/employee/home_components/UpdateResumeDrawer';
import { ResumeNotFoundCard } from '../../components/employee/home_components/ResumeNotFoundCard';
import {  Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { EmpHomeRightSideBar } from '../../components/employee/home_components//EmpHomeRightSideBar';
import { EmpHomeLeftSideBar } from '../../components/employee/home_components//EmpHomeLeftSideBar';
import { stats,opportunities } from '../../data/mockData';
import { profileData } from '../../data/profiles';
import { EmpHomeGrid } from '../../components/employee/home_components//EmpHomeGrid';
// import type {Stats,Activity} from '../../types/activity';

 

 

 
const statsData = {
  applied: 4,
  shortlisted: 3,
  rejected: 1,
};
 

 
// const StatusBadge = ({ status }) => {
//   const styles = {
//     shortlisted: 'bg-emerald-100 text-emerald-600',
//     actioned: 'bg-amber-100 text-amber-600',
//     rejected: 'bg-red-100 text-red-600',
//   };
 
//   const labels = {
//     shortlisted: 'Shortlisted',
//     actioned: 'Actioned',
//     rejected: 'Rejected',
//   };
 
//   return (
//     <span className={`text-xs px-2 py-0.5 rounded ${styles[status]}`}>
//       {labels[status]}
//     </span>
//   );
// };
 
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column - Profile Summary */}
<<<<<<< HEAD:src/components/employee/EmpHome.tsx
            
            <EmpHomeLeftSideBar profile={profileData} hasresume={hasResume} handleresume={handleResumeClick}/>
            
=======
            <div className="lg:col-span-3">
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-normal text-muted-foreground">
                    Profile Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-foreground leading-relaxed">
                    {profileData.summary}
                  </p>
 
                  <div className="space-y-2">
                    <h4 className="text-sm text-muted-foreground">Primary Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {profileData.primarySkills.map((skill) => (
                        <SkillBadge key={skill} skill={skill} variant="primary" />
                      ))}
                    </div>
                  </div>
 
                  {/* Resume Status */}
                  {hasResume ? (
                    <button
                      onClick={handleResumeClick}
                      className="w-full flex items-center justify-between py-3 px-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <FileText className="w-5 h-5 text-primary" />
                        </div>
                        <div className="text-left">
                          <p className="text-sm font-medium text-foreground">Resume</p>
                          <p className="text-xs text-muted-foreground">Updated: 6 months ago</p>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </button>
                  ) : (
                    <div className="flex items-center justify-between py-2 px-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="w-4 h-4" />
                        <span>Resume not found</span>
                      </div>
                      <AlertCircle className="w-4 h-4 text-coral" />
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
>>>>>>> 21ef11eb7e7ec03a479ea6c3c772e89146e7f29e:src/pages/layout/EmpHome.tsx
 
            {/* Center Column - Resume Upload or Uploaded State */}
            <div className="lg:col-span-5">
              {!hasResume ? (
                // Resume not found state - Use the new component
                <ResumeNotFoundCard onUploadClick={() => setUploadResumeModalOpen(true)} />
              ) : (
                // Resume uploaded - show placeholder for opportunities
                <EmpHomeGrid opportunities={opportunities} />
              )}
            </div>
 
            {/* Right Column - Stats & Activities */}
            <div className="lg:col-span-4 space-y-4">
              {/* Stats */}
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
                          Applied job "{activity.title}"
                        </p>
                        <p className="text-xs text-primary">({activity.soId})</p>
                        <div className="flex items-center gap-2 mt-1">
                          <StatusBadge status={activity.status} />
                          <span className="text-xs text-muted-foreground">{activity.timestamp}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
              {/* <EmpHomeRightSideBar stats={stats} activities={recentActivities} /> */}
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
 