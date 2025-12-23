import React from 'react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const menuItems = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'experience', label: 'Professional Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'education', label: 'Education' },
  { id: 'accolades', label: 'Accolades' },
  { id: 'skills', label: 'Skills' },
  { id: 'testimonials', label: 'Testimonials' }
];

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const handleClick = (id: string) => {
    onSectionChange(id);
  };

  return (
    <div className="w-64 flex-shrink-0">
      <nav className="bg-white rounded-lg shadow-sm p-4 space-y-1 sticky top-6">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={`w-full text-left block px-4 py-2 rounded font-medium ${
              activeSection === item.id
                ? 'text-teal-600 bg-teal-50'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;