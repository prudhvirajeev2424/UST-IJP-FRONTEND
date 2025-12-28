/**
 * Sidebar Component
 * 
 * A responsive navigation sidebar that displays menu items with active state indication.
 * Features mobile-specific close functionality and smooth hover interactions.
 * 
 * Design Features:
 * - Active state indicated by left border accent and medium font weight
 * - Hover animations (translateY and translateX) for inactive items
 * - Responsive padding and spacing across breakpoints
 * - Optional close button for mobile overlay scenarios
 * 
 * @component
 * @example
 * ```tsx
 * // Desktop usage (no close handler)
 * <Sidebar />
 * 
 * // Mobile usage (with drawer close handler)
 * <Sidebar onClose={() => setDrawerOpen(false)} />
 * ```
 */

import React from "react"

/**
 * Props for the Sidebar component
 * 
 * @interface SidebarProps
 * @property {() => void} [onClose] - Optional callback to close sidebar (typically for mobile drawer)
 *                                    When provided, displays a close button on mobile viewports
 */
interface SidebarProps {
  onClose?: () => void
}

/**
 * Sidebar Component
 * 
 * Navigation sidebar with the following characteristics:
 * - Vertical menu layout with active state tracking
 * - Custom CSS animations for hover states
 * - Responsive design with breakpoint-specific styling
 * - Accessibility-friendly with proper semantic HTML
 * 
 * @param {SidebarProps} props - Component props
 * @returns {JSX.Element} Rendered sidebar navigation
 */
const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
 
  const menuItems = [
    { label: "TP employee list", active: true },
    { label: "Certifications", active: false },
    { label: "Education", active: false },
  ]

  return (
    <aside className="h-full w-full bg-white overflow-y-auto">
      <style>{`
        /* Base transition for all sidebar items */
        .sidebar-item {
          transition: transform 0.25s ease-out, font-weight 0.2s ease;
        }
        
        /* 
          Hover effect for inactive items
          - Subtle upward and rightward movement creates depth
          - Font weight increase provides tactile feedback
          - Creates anticipation of interaction
        */
        .sidebar-item.inactive:hover {
          font-weight: 500;
          transform: translateY(-2px) translateX(3px);
        }
        
        /* 
          No hover effect for active item
          - Prevents confusion about current location
          - Active state is already visually distinct
        */
        .sidebar-item.active:hover {
          transform: none;
        }
      `}</style>

      {/* 
        Mobile Close Button
        - Only rendered when onClose prop is provided
        - Hidden on desktop (lg:hidden) where sidebar is persistent
        - Touch-friendly 32x32px minimum size
        - Border bottom provides visual separation from menu
      */}
      {onClose && (
        <div 
          className="lg:hidden flex justify-end p-4 border-b" 
          style={{ borderColor: "#D7E0E3" }}
        >
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100"
            aria-label="Close sidebar navigation"
          >
            {/* X icon for close action - universally recognized pattern */}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}

      {/* 
        Menu Items Container
        
        Top padding considerations:
        - 90px accounts for fixed header height
        - Prevents menu items from being obscured by header
        - Should match header height from layout system
      */}
      <div className="pt-[90px] pb-4">
        {menuItems.map((item) => (
          <div
            key={item.label}
            className={`
              sidebar-item
              font-rubik text-[13px] leading-[16px] tracking-[0px]
              py-[10px] px-5
              cursor-pointer relative bg-transparent
              md:max-lg:py-[10px] md:max-lg:px-[18px]
              max-md:py-3 max-md:px-6 max-md:text-[14px] max-md:leading-[18px]
              ${item.active 
                ? 'active font-medium border-l-2 pl-[18px] md:max-lg:pl-4 max-md:pl-[22px]' 
                : 'inactive font-normal'
              }
            `}
            style={{
              color: "#231F20",
              // Active border creates visual indicator of current page/section
              borderColor: item.active ? "#0097AC" : "transparent"
            }}
            onClick={onClose}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              // Keyboard accessibility: Enter or Space triggers click
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onClose?.()
              }
            }}
            aria-current={item.active ? 'page' : undefined}
          >
            {item.label}
          </div>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
