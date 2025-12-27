import React from "react"

interface SidebarProps {
  onClose?: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  const menuItems = [
    { label: "TP employee list", active: true },
    { label: "Certifications", active: false },
    { label: "Education", active: false },
  ]

  return (
    <aside className="h-full w-full bg-white overflow-y-auto">
      <style>{`
        .sidebar-item {
          transition: transform 0.25s ease-out, font-weight 0.2s ease;
        }
        
        .sidebar-item.inactive:hover {
          font-weight: 500;
          transform: translateY(-2px) translateX(3px);
        }
        
        .sidebar-item.active:hover {
          transform: none;
        }
      `}</style>

      {/* Mobile Close Button */}
      {onClose && (
        <div 
          className="lg:hidden flex justify-end p-4 border-b" 
          style={{ borderColor: "#D7E0E3" }}
        >
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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

      {/* Menu Items */}
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
              borderColor: item.active ? "#0097AC" : "transparent"
            }}
            onClick={onClose}
          >
            {item.label}
          </div>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar