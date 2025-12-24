import type { Stats,Activity } from "../../../types/activity";
import { getStatusColorActivity } from "../../../utils/Helper";

interface RightSidebarProps {
  stats: Stats;
  activities: Activity[];
}

function getStatusLabel(status: Activity["status"]): string {
  return status.charAt(0).toUpperCase() + status.slice(1);
}

export function EmpHomeRightSideBar({ stats, activities }: RightSidebarProps) {
  return (
    <aside className="w-[360px] flex-shrink-0 pt-6">
      {/* Stats */}
      <div className="w-full h-[110px] bg-white relative rounded-lg p-5 cursor-pointer shadow-lg overflow-hidden flex justify-around mb-10">
        <div className="text-center">
          <div className="text-2xl font-semibold text-text-primary">
            {stats.applied}
          </div>
          <div className="text-sm text-text-muted">Applied</div>
        </div>
        <div className="text-center">
          <div
            className="text-2xl font-semibold text-secondary "
            style={{ color: "#01B27C" }}
          >
            {stats.shortlisted}
          </div>
          <div className="text-sm text-text-muted">Shortlisted</div>
        </div>
        <div className="text-center">
          <div
            className="text-2xl font-semibold text-danger"
            style={{ color: "#FC6A59" }}
          >
            {stats.rejected}
          </div>
          <div className="text-sm text-text-muted">Rejected</div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="w-full min-h-[450px] bg-white relative rounded-lg cursor-pointer shadow-lg overflow-hidden">
        <div className="flex items-center justify-between pt-5 pl-5 pr-5 mb-4">
          <h3 className="text-base font-medium text-text-primary">
            Recent Activities
          </h3>
          <button className="text-sm text-secondary hover:underline">
            View All
          </button>
        </div>
        <hr />
        <div className="pb-5 px-5 mt-7">
          {activities.map((activity, index) => (
            <div key={activity.id} className="relative flex gap-4 pb-8">
              {/* Timeline column */}
              <div className="w-4 flex justify-center">
                {/* Dot */}
                <span className="w-2.5 h-2.5 mt-2 rounded-full bg-secondary z-10" />
              </div>

              {/* Vertical line (absolute, full height) */}
              {index < activities.length - 1 && (
                <span className="absolute left-[7px] top-4 -bottom-4 w-px bg-gray-300" />
              )}

              {/* Content */}
              <div className="flex-1">
                <p className="text-base text-text-primary leading-6">
                  Applied job{" "}
                  <span className="font-semibold">
                    "{activity.title} ({activity.soId})"
                  </span>
                </p>

                <div className="flex items-center justify-between mt-1">
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-md ${getStatusColorActivity(
                      activity
                    )}`}
                  >
                    {getStatusLabel(activity.status)}
                  </span>

                  <span className="text-xs text-text-muted">
                    {activity.timestamp}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
