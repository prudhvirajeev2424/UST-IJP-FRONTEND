import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '' 
}) => {
  const baseStyles = 'px-6 py-2 rounded font-medium transition-colors';
  
  const variantStyles = {
    primary: 'bg-white text-[#1e3a4c] hover:bg-gray-100',
    secondary: 'border border-white text-white hover:bg-white hover:text-[#1e3a4c]',
    danger: 'bg-red-100 text-red-600 hover:bg-red-200',
    success: 'bg-teal-600 text-white hover:bg-teal-700'
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;