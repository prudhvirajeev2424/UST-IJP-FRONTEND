import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  icon,
  iconPosition = "left",
  className = "",
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors whitespace-nowrap h-9 px-5";

  const variantStyles = {
    primary: "bg-[#006E74] text-white hover:bg-[#00595F]",
    secondary: "bg-white text-dark border border-gray-light hover:bg-gray-50",
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
