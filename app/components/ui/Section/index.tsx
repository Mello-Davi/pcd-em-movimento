import React from "react";
import styles from "./styles.module.css";

interface SectionProps {
  id?: string;
  theme?: "light" | "dark" | "brand" | "white";
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, theme = "white", className = "", children }: SectionProps) {
  return (
    <section id={id} className={`${styles.section} ${styles[theme]} ${className}`}>
      {children}
    </section>
  );
}
