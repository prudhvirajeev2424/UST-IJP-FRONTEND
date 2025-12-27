interface Activity {
  applicant: string;
  position: string;
  status: "allocated" | "rejected" | "pending" | "interviewing" | "selected";
  time: string;
}

const activities: Activity[] = [
  {
    applicant: "Eric Warne",
    position: "Developer I – A1",
    status: "pending",
    time: "12 hrs ago",
  },
  {
    applicant: "James Albertson",
    position: "Product Manager",
    status: "allocated",
    time: "Yesterday",
  },
  {
    applicant: "James Albertson",
    position: "Product Manager",
    status: "interviewing",
    time: "5 days ago",
  },
  {
    applicant: "James Albertson",
    position: "Product Designer",
    status: "rejected",
    time: "5 days ago",
  },
  
];

const RecentActivities = () => {
    return (
    <div className="bg-card w-[360px]  rounded-xl p-5 card-shadow absolute top-[116px] right-[60px] shadow-lg border border-gray-200">
        <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-medium leading-5 tracking-normal text-[#231F20] text-left opacity-100">
          Recent Activities
        </h3>

        <button className="text-base font-medium leading-5 tracking-normal text-[#006E74] text-left opacity-100 hover:text-[#006E74]/80 transition-colors ">
          View All
        </button>

        </div>
        <div className="w-full border-t border-gray-300 my-4 "></div>

        {/* Timeline container */}
        <div className="relative space-y-4 pl-4">
        {/* Vertical line only inside this component */}
        <div className="absolute top-0 left-1.5 w-px h-full bg-gray-300" />

        {activities.map((activity, index) => (
            <div key={index} className="flex items-start gap-2.5">
            {/* Status dot */}
            <div className="absolute left-1 w-2 h-2 rounded-full mt-1.5 z-10 bg-[rgb(0,151,172)]"/>

            {/* Activity content */}
            <div className="flex-1 min-w-0 px-1">
                <p className="text-base font-normal leading-6 tracking-normal text-[#231F20] text-left">
                  Application for "<span className="font-semibold">{activity.applicant}</span>" for the position {activity.position}.
                </p>

                <div className="flex items-center justify-between mt-1.5">
                <span
                    className={`status-badge text-[10px] px-2 py-0.5 ${
                    activity.status === "allocated"
                        ? "bg-[rgb(0,151,172)]/10 text-[rgb(0,151,172)]"
                        : activity.status === "rejected"
                        ? "bg-[rgb(252,106,89)]/10 text-[rgb(252,106,89)]"
                        : activity.status === "pending"
                        ? "bg-[rgb(136,29,135)]/10 text-[rgb(136,29,135)]"
                        : activity.status === "interviewing"
                        ? "bg-[rgb(255,190,0)]/10 text-[rgb(255,190,0)]"
                        : "bg-[rgb(6,178,124)]/10 text-[rgb(6,178,124)]"
                    }`}
                >
                    {activity.status === "allocated"
                    ? "Allocated"
                    : activity.status === "rejected"
                    ? "Rejected"
                    : activity.status === "pending"
                    ? "Pending"
                    : activity.status === "interviewing"
                    ? "Interviewing"
                    : "Selected"}
                </span>
                <span className="text-[10px] text-muted-foreground">{activity.time}</span>
                </div>
            </div>
            </div>
        ))}
        </div>
    </div>
    );
};

export default RecentActivities;
