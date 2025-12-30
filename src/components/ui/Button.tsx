import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  className = "",
  children,
  ...rest
}) => {
  const base =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors";
  const variantClass =
    variant === "outline"
      ? "border border-gray-300 bg-white text-gray-700"
      : variant === "ghost"
      ? "bg-transparent text-gray-700"
      : "bg-primary text-primary-foreground";

  return (
    <button className={`${base} ${variantClass} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
