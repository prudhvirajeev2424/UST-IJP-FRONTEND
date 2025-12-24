import { X } from "lucide-react"; //notificationpanle
import { mockNotifications } from "../../../data/mockOpportunitiesData";

export const NotificationPanel = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="absolute top-[75px] right-[40px] z-[1000] animate-in fade-in slide-in-from-top-2">
      {/* Triangle Indicator */}
      <div className="absolute -top-2 right-4 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-[#006E74]"></div>

      <div className="w-[360px] bg-[#006E74] text-white rounded-xl shadow-2xl overflow-hidden font-rubik">
        <div className="flex justify-between items-center px-6 py-5">
          <h3 className="text-[16px] font-semibold">Notifications (3)</h3>
          <X
            size={20}
            className="cursor-pointer opacity-80"
            onClick={onClose}
          />
        </div>

        <div className="max-h-[400px] overflow-y-auto">
          {mockNotifications.map((n, i) => (
            <div
              key={i}
              className="flex gap-4 px-6 py-5 border-t border-white/10 hover:bg-white/5 transition-colors"
            >
              <img
                src={n.avatar}
                alt="user"
                className="w-11 h-11 rounded-full object-cover"
              />
              <div className="flex-grow">
                <p className="text-[13px] leading-snug">
                  <span className="font-bold">{n.user}</span> {n.action}{" "}
                  <span className="font-bold">{n.target}</span>
                </p>
                <span className="text-[11px] opacity-60 mt-2 block">
                  {n.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
