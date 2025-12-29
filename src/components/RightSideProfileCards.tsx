// components/RightSideProfileCards.tsx
import React, { useEffect, useRef, useState } from "react";
import ProfileCard from "./ProfileCard";
import { mockProfiles } from "../data/ApplicationsMockdata";

// RightSideProfileCards: kanban grid of ProfileCard items with a compact mode
const RightSideProfileCards: React.FC = () => {
  // Detect zoom/viewport shrink heuristically so we can switch to a
  // compact 2×4 grid when the user zooms in. This keeps normal CSS
  // breakpoints for layout but also handles browser zoom which often
  // affects window.innerWidth or devicePixelRatio.
  const [isNarrow, setIsNarrow] = useState(false);
  const initialWidthRef = useRef<number | null>(null);
  const initialDPRRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!initialWidthRef.current) initialWidthRef.current = window.innerWidth;
    if (!initialDPRRef.current)
      initialDPRRef.current = window.devicePixelRatio || 1;

    const check = () => {
      const initial = initialWidthRef.current || window.innerWidth;
      const initialDPR = initialDPRRef.current || 1;

      // width-based: user zoom or resize that reduces innerWidth below 75%
      const widthShrunk = window.innerWidth < initial * 0.75;
      // devicePixelRatio-based: browsers change DPR on zoom in some cases
      const dprIncreased = (window.devicePixelRatio || 1) > initialDPR * 1.15;

      setIsNarrow(widthShrunk || dprIncreased);
    };

    check();
    window.addEventListener("resize", check);
    window.addEventListener("orientationchange", check);
    return () => {
      window.removeEventListener("resize", check);
      window.removeEventListener("orientationchange", check);
    };
  }, []);

  return (
    <main className="flex-1 bg-[#F2F7F8]">
      {/* remove horizontal inner padding so cards align closer to the FilterTab */}
      <div className="pb-8 px-0">
        {/* Profile Cards Grid - responsive using Tailwind breakpoints
            - default (very narrow): 2 columns with tight gaps (compact)
            - sm/md/lg: progressively expand to 2,3,4 columns and increase gaps
            This CSS-only approach remains stable at different browser zoom levels
            (so at 67% zoom you will see the full/wide layout when the viewport
            is large enough).
        */}
        {isNarrow ? (
          // compact 2x4 grid with tighter spacing
          <div className="grid grid-cols-2 grid-rows-4 gap-1 justify-items-center px-1">
            {mockProfiles.slice(0, 8).map((profile) => (
              <div key={profile.id} className="w-full">
                <ProfileCard profile={profile} />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-5 justify-items-center">
            {mockProfiles.map((profile) => (
              <ProfileCard key={profile.id} profile={profile} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default RightSideProfileCards;
