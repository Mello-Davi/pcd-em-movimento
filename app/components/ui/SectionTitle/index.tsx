import React from "react";
import styles from "./styles.module.css";

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  centered?: boolean;
  theme?: "light" | "dark";
}

export function SectionTitle({ centered, theme = "light", className, children, ...props }: SectionTitleProps) {
  const titleClasses = [
    styles.title,
    styles[theme],
    centered ? styles.center : styles.left,
    className
  ].filter(Boolean).join(" ");

  return (
    <h2 className={titleClasses} {...props}>
      {children}
    </h2>
  );
}
