// components/RightSideProfileCards.tsx
import React, { useEffect, useRef, useState } from "react";
import ProfileCard from "./ProfileCard";
import { mockProfiles } from "../data/ApplicationsMockdata";

/**
 * RightSideProfileCards
 * The kanban-style grid of profile cards. This component watches the window
 * width to decide between a responsive multi-column layout and a compact
 * 2×4 footprint used when the viewport is reduced/zoomed.
 *
 * It intentionally avoids inner horizontal padding so the cards align with
 * the FilterTab on the left.
 */
const RightSideProfileCards: React.FC = () => {
  const [isNarrow, setIsNarrow] = useState(false);
  const initialWidthRef = useRef<number | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!initialWidthRef.current) initialWidthRef.current = window.innerWidth;

    const check = () => {
      const initial = initialWidthRef.current || window.innerWidth;
      // if width drops below 90% of initial, switch to compact 2x4 view
      setIsNarrow(window.innerWidth < initial * 0.9);
    };

    check();
    window.addEventListener("resize", check);
    window.addEventListener("orientationchange", check);
    return () => {
      window.removeEventListener("resize", check);
      window.removeEventListener("orientationchange", check);
    };
  }, []);

  // attach a delegated click handler to the first ProfileCard's "View in Detail"
  // button so we don't need to modify ProfileCard itself. This finds the
  // first rendered button with the label and wires navigation.
  useEffect(() => {
    const root = wrapperRef.current;
    if (!root) return;

    const buttons = Array.from(root.querySelectorAll("button")).filter((b) =>
      String(b.textContent).trim().includes("View in Detail")
    );

    const firstButton = buttons[0] as HTMLButtonElement | undefined;
    if (!firstButton) return;

    const handler = (e: Event) => {
      e.stopPropagation();
      window.dispatchEvent(
        new CustomEvent("navigate", {
          detail: { page: "Application", fromProfileId: mockProfiles[0]?.id },
        })
      );
    };

    firstButton.addEventListener("click", handler);
    return () => firstButton.removeEventListener("click", handler);
  }, [isNarrow]);

  return (
    <main className="flex-1 bg-[#F2F7F8]">
      {/* remove horizontal inner padding so cards align closer to the FilterTab */}
      <div className="pb-8 px-0" ref={wrapperRef}>
        {/* Profile Cards Grid - responsive
            - Normal: responsive columns up to 4
            - Compact (narrow/zoomed): show 2 columns × 4 rows visible
        */}
        {isNarrow ? (
          <div className="grid grid-cols-2 grid-rows-4 gap-4 justify-items-center">
            {mockProfiles.map((profile) => (
              <ProfileCard key={profile.id} profile={profile} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center">
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
