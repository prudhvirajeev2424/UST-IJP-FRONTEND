import React from "react";

const Sidebar: React.FC = () => {
  const menuItems = [
    { label: "TP employee list", active: true },
    { label: "Certifications", active: false },
    { label: "Education", active: false },
  ];

  return (
    <aside
      className="w-52 bg-white border-r"
      style={{ borderColor: "var(--d7e0e3)" }}
    >
      <style>{`
        .sidebar-item {
          padding: 12px 24px;
          cursor: pointer;
          font-family: 'Rubik', sans-serif;
          font-size: 14px;
          line-height: 17px;
          letter-spacing: 0px;
          transition: transform 0.25s ease-out, font-weight 0.2s ease;
          position: relative;
          background-color: transparent;
        }
        
        .sidebar-item.inactive {
          color: #231F20;
          font-weight: 400;
        }
        
        .sidebar-item.inactive:hover {
          color: #231F20;
          font-weight: 500;
          transform: translateY(-2px) translateX(3px);
        }
        
        .sidebar-item.active {
          color: #231F20;
          font-weight: 500;
          border-left: 2px solid #0097AC;
          padding-left: 22px;
        }
        
        .sidebar-item.active:hover {
          transform: none;
        }
      `}</style>
      <div className="pt-6">
        {menuItems.map((item) => (
          <div
            key={item.label}
            className={`sidebar-item ${item.active ? "active" : "inactive"}`}
          >
            {item.label}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;