import React from "react";
import styles from "./styles.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "success" | "outline";
  fullWidth?: boolean;
}

export function Button({ variant = "primary", fullWidth, className, children, ...props }: ButtonProps) {
  const combinedClassName = [
    styles.button,
    styles[variant],
    styles.normal,
    fullWidth ? styles.fullWidth : "",
    className || ""
  ].join(" ").trim();

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
