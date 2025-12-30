import { useState } from "react";
import { UploadResumeModal } from "../../components/employee/UploadResumeModal";
import { ResumeDetailModal } from "../../components/employee/ResumeDetailModal";
import { UpdateResumeDrawer } from "../../components/employee/UpdateResumeDrawer";
import { ResumeNotFoundCard } from "../../components/employee/ResumeNotFoundCard";
import { EmpHomeRightSideBar } from "../../components/employee/EmpHomeRightSideBar";
import { EmpHomeLeftSideBar } from "../../components/employee/EmpHomeLeftSideBar";
import { stats, opportunities, recentActivities } from "../../data/mockData";
import { profileData } from "../../data/profiles";
import { EmpHomeGrid } from "../../components/employee/home_components/EmpHomeGrid";

export default function Home() {
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

  // Build a minimal ProfileSummary from the named profileData export for the left sidebar
  const profileSummary = {
    description: profileData?.description ?? "Profile summary",
    primarySkills: profileData?.primarySkills ?? [],
  };

  return (
    <div className="min-h-screen bg-background">
      {/* <Header activeTab={activeTab} onTabChange={setActiveTab} /> */}

      <main className="p-6">
        <div className="max-w-7xl ">
          <div className="w-full grid grid-cols-[repeat(3,1fr)] gap-6">
            {/* Left Column - Profile Summary */}

            <EmpHomeLeftSideBar
              profile={profileSummary}
              hasresume={hasResume}
              handleresume={handleResumeClick}
            />

            {/* Center Column - Resume Upload or Uploaded State */}

            {!hasResume ? (
              // Resume not found state - Use the new component
              <ResumeNotFoundCard
                onUploadClick={() => setUploadResumeModalOpen(true)}
              />
            ) : (
              // Resume uploaded - show placeholder for opportunities
              <EmpHomeGrid opportunities={opportunities} />
            )}

            {/* Right Column - Stats & Activities */}
            <EmpHomeRightSideBar stats={stats} activities={recentActivities} />
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
