import React from "react";
// import Logo from  "../common/Logo";
import NavigationTabs from "../ui/TP_Manager_Assigning_and_tracking_NavigationTabs";
import IconButton from "../ui/TP_Manager_Assigning_and_tracking_IconButton";
import UserProfile from "../ui/TP_Manager_Progress_Track_13_UserProfile";
import profileImg from "../../assets/TP_Manager_Assigning_and_tracking_profile_photo.png";

const MailIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-primary"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const BellIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-primary"
  >
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          {/* <Logo /> */}

          {/* Navigation */}
          <div className="flex-1 flex justify-center">
            <NavigationTabs />
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <IconButton icon={<MailIcon />} ariaLabel="Mail" />
            <IconButton
              icon={<BellIcon />}
              badge={1}
              ariaLabel="Notifications"
            />

            <div className="pl-4 ml-2 border-l border-gray-200">
              <UserProfile
                name="Andrea Stephen"
                role="TP Manager"
                avatarUrl={profileImg}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
