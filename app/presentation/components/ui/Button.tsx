import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "success" | "outline";
  fullWidth?: boolean;
}

const buttonStyles = {
  base: "font-bold rounded-xl flex items-center justify-center gap-2 transition-colors focus:outline-none focus:ring-4",
  variants: {
    primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-300",
    secondary: "bg-white text-blue-900 hover:bg-gray-100 focus:ring-white/50",
    success: "bg-green-600 hover:bg-green-500 text-white focus:ring-green-600/50",
    outline: "border-2 border-white text-white hover:bg-white hover:text-blue-900 focus:ring-white",
  },
  sizes: {
    normal: "py-3 px-6",
    large: "py-4 px-8 text-lg",
  }
};

export function Button({ variant = "primary", fullWidth, className, children, ...props }: ButtonProps) {
  const combinedClassName = [
    buttonStyles.base,
    buttonStyles.variants[variant],
    buttonStyles.sizes.normal,
    fullWidth ? "w-full" : "",
    className || ""
  ].join(" ").trim();

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
