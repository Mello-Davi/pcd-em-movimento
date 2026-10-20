"use client";

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

const SECTION_LABELS: Record<string, string> = {
  inicio: "Início",
  "quem-somos": "Quem Somos",
  projeto: "O Projeto",
  depoimentos: "Depoimentos",
  participar: "Como Participar",
  contato: "Contato",
};

export function Section({ id, theme = "white", className = "", children, animated = true }: SectionProps) {
  const { ref, isVisible } = useScrollReveal();
  const accessibleLabel = id ? SECTION_LABELS[id] || id.replace(/-/g, " ") : undefined;

  return (
    <section 
      id={id} 
      className={`${styles.section} ${styles[theme]} ${className}`}
      aria-label={accessibleLabel}
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
