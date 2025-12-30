import React from "react"
 
// Define the types for Sidebar component props
interface SidebarProps {
  onClose?: () => void // Optional onClose function to close the sidebar
}
 
const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
 
  // Menu items with label and active state
  const menuItems = [
    { label: "TP employee list", active: true }, 
    { label: "Certifications", active: false },
    { label: "Education", active: false },
  ]
 
  return (
    <aside className="h-full w-full bg-white overflow-y-auto">
      {/* Inline styles for sidebar item transitions and hover effects */}
      <style>{`
        /* Base transition for all sidebar items */
        .sidebar-item {
          transition: transform 0.25s ease-out, font-weight 0.2s ease;
        }
       
        /* Hover effect for inactive items */
        .sidebar-item.inactive:hover {
          font-weight: 500;
          transform: translateY(-2px) translateX(3px);
        }
       
        /* No hover effect for active item */
        .sidebar-item.active:hover {
          transform: none;
        }
      `}</style>
 
      {/* Mobile Close Button - Displayed on small screens */}
      {onClose && (
        <div
          className="lg:hidden flex justify-end p-5 border-b"
          style={{ borderColor: "#D7E0E3" }}
        >
          <button
            onClick={onClose} // Close the sidebar when clicked
            className="w-10 h-10 flex items-center justify-center rounded hover:bg-gray-100"
            aria-label="Close sidebar navigation" // Accessibility label
          >
            <svg
              className="w-6 h-6"
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
 
      {/* Menu Items Container - Adds padding and adjusts font sizes for mobile */}
      <div className="pt-[120px] pb-5">
        {menuItems.map((item) => (
          <div
            key={item.label} // Unique key for each menu item
            className={`
              sidebar-item
              font-rubik text-[17px] leading-[22px] tracking-[0px]
              py-[14px] px-7
              cursor-pointer relative bg-transparent
              md:max-lg:py-[14px] md:max-lg:px-6
              max-md:py-4 max-md:px-8 max-md:text-[18px] max-md:leading-[24px]
              ${item.active
                ? 'active font-medium border-l-[3px] pl-[25px] md:max-lg:pl-[21px] max-md:pl-[29px]'
                : 'inactive font-normal'
              }
            `}
            style={{
              color: "#231F20", // Text color
              borderColor: item.active ? "#0097AC" : "transparent" // Active item border color
            }}
            onClick={onClose} // Close the sidebar when a menu item is clicked
            role="button" // Mark the item as a button for accessibility
            tabIndex={0} // Enable keyboard navigation
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onClose?.()
              }
            }}
            aria-current={item.active ? 'page' : undefined} // Indicate the active menu item for accessibility
          >
            {item.label} {/* Menu item label */}
          </div>
        ))}
      </div>
    </aside>
  )
}
 
export default Sidebar