import React from "react";
import styles from "./styles.module.css";
import { useScrollReveal } from "../../hooks/useScrollReveal";

interface SectionProps {
  id?: string;
  theme?: "light" | "dark" | "brand" | "white";
  className?: string;
  children: React.ReactNode;
  animated?: boolean;
}

export function Section({ id, theme = "white", className = "", children, animated = true }: SectionProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section 
      id={id} 
      className={`${styles.section} ${styles[theme]} ${className}`}
      aria-label={id ? id.replace('-', ' ') : undefined}
    >
      <div 
        ref={ref as React.RefObject<HTMLDivElement>} 
        className={`${animated ? "reveal" : ""} ${isVisible ? "visible" : ""}`}
      >
        {children}
      </div>
    </section>
  );
}
