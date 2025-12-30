import { useState } from "react";
import { ArrowLeft, CheckCircle, X } from "lucide-react";
import { Button } from "../../ui/Button";
import ApplyModal from "./ApplyModal";
import { JobSummaryCard } from "./JobSummaryCard";
import { JobDetailsCard } from "./JobDetailsCard";
import { MatchScoreCard } from "./MatchScoreCard";
import { SimilarJobs } from "./SimilarJobsPanel";
import { getJobById, getSimilarJobs } from "../../../data/mockData";

interface JobDetailsProps {
  jobId: string;
  onBack: () => void;
}

export default function JobDetails({ jobId, onBack }: JobDetailsProps) {
  const [applyModalOpen, setApplyModalOpen] = useState<boolean>(false);
  const [hasApplied, setHasApplied] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);

  const jobData = getJobById(jobId);
  const similarJobs = getSimilarJobs(jobId);

  if (!jobData) {
    return (
      <div className="min-h-screen bg-background">
        <main className="p-6">
          <div className="max-w-7xl mx-auto text-center py-12">
            <h1 className="text-2xl font-medium text-foreground">
              Job not found
            </h1>
            <Button onClick={onBack} className="mt-4">
              Back to Opportunities
            </Button>
          </div>
        </main>
      </div>
    );
  }

  const handleApplyConfirm = (): void => {
    setHasApplied(true);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  const handleWithdraw = (): void => {
    setHasApplied(false);
  };

  // Transform similarJobs data for SimilarJobsPanel
  const similarJobsData = similarJobs.map((job) => ({
    soNumber: job.id,
    title: job.role,
    skills: job.skills,
    matchScore: 85, // You can make this dynamic based on your data
  }));

  // Split skills into primary and others
  const mustHaveSkills = {
    primary: jobData.skills.slice(0, 4),
    others: jobData.skills.slice(4),
  };

  const goodToHaveSkills = ["NextJs", "Miro"];

  const responsibilities = [
    "Design, develop, and maintain high-performance, scalable, and secure backend services and APIs.",
    "Collaborate with front-end developers, product managers, and other stakeholders to define and implement technical solutions.",
    "Optimize applications for maximum speed, scalability, and reliability.",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Success Toast */}
      {showToast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-teal-600 text-white px-4 py-3 rounded-lg shadow-lg">
          <CheckCircle className="w-5 h-5" />
          <span className="text-sm font-medium ">
            You have applied for "SO #{jobData.id}" successfully
          </span>
          <button
            onClick={() => setShowToast(false)}
            className="ml-2 hover:bg-white/20 p-1 rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      <main className="p-6">
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: 60, paddingRight: 60 }}>
          {/* Header with Back Button and Apply */}
          <div className="flex items-center justify-between mb-6">
            {/* Fixed back control placed 60px from left and 118px from top (contains arrow + SO text) */}
            <button
              onClick={onBack}
              aria-label="Back"
              style={{
                position: "absolute",
                top: 108,
                left: 50,
                display: "flex",
                alignItems: "center",
                gap: 8,
                width: 200,
                height: 24,
                boxSizing: "border-box",
                background: "transparent",
                border: "none",
                padding: 0,
                cursor: "pointer",
                zIndex: 70,
              }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span
                style={{
                  font: "20px/24px Rubik",
                  fontWeight: 700,
                  letterSpacing: "0px",
                  color: "#231F20",
                  textAlign: "left",
                  opacity: 1,
                  margin: 0,
                  padding: 0,
                  boxSizing: "border-box",
                  lineHeight: "24px",
                }}
              >
                SO: {jobData.id}
              </span>
            </button>

            {/* Apply / Withdraw (unchanged) */}
            {hasApplied ? (
              <button
                onClick={handleWithdraw}
                style={{
                  position: "absolute",
                  top: 100,
                  right: 60,
                  zIndex: 60,
                }}
                className="px-6 py-3 border border-red-500 text-red-500 bg-white hover:bg-red-500 hover:text-white rounded-md"
              >
                Withdraw
              </button>
            ) : (
              <button
                onClick={() => setApplyModalOpen(true)}
                style={{
                  position: "absolute",
                  top: 100,
                  right: 60,
                  zIndex: 60,
                }}
                className="px-6 py-3 bg-[#006E74] border border-black rounded text-white hover:bg-black disabled:opacity-50"
              >
                Apply
              </button>
            )}
          </div>

          {/* Stable 3-column CSS grid to enforce exact widths and prevent overlap */}
          <div
            style={{
              width: "100%",
              boxSizing: "border-box",
              display: "grid",
              gridTemplateColumns: "360px 1000px 360px", // exact column widths
              columnGap: 40, // 40px gap between columns
              alignItems: "start",
              justifyContent: "center",
              // push the grid content below the fixed header controls to avoid overlap
              marginTop: 70,
              minHeight: 870,
            }}
          >
            {/* Left Sidebar - Summary (360 x 663) */}
            <div style={{ width: "100%", boxSizing: "border-box", height: 663, overflow: "hidden" }}>
              <JobSummaryCard
                soNumber={jobData.id}
                role={jobData.role}
                band={jobData.band}
                account="T-Mobile"
                location={jobData.location}
                hiringManager={{ name: "Emily Stephen" }}
                summary={jobData.description}
              />
            </div>

            {/* Center - Job Details (1000 x 870) */}
            <div style={{ width: "100%", boxSizing: "border-box", height: 870, overflowY: "auto" }}>
              <JobDetailsCard
                title={jobData.role}
                postedDate="26 December 2024"
                mustHaveSkills={mustHaveSkills}
                goodToHaveSkills={goodToHaveSkills}
                jobSummary={jobData.description}
                responsibilities={responsibilities}
              />
            </div>

            {/* Right Sidebar - Match Score (top 132) & Similar Jobs (below 470) */}
            <div style={{ width: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: 40 }}>
              <div style={{ height: 132, boxSizing: "border-box" }}>
                <MatchScoreCard percentage={90} />
              </div>

              <div style={{ height: 470, boxSizing: "border-box", overflowY: "auto" }}>
                <SimilarJobs jobs={similarJobsData} />
              </div>
            </div>
          </div>
          {/* END stable grid layout */}
        </div>
      </main>

      <ApplyModal open={applyModalOpen} onOpenChange={setApplyModalOpen} onConfirm={handleApplyConfirm} />
    </div>
  );
}
