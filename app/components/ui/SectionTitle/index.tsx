import React from "react";
import styles from "./styles.module.css";

interface SectionTitleProps {
  tag?: string;
  title: React.ReactNode;
  align?: "left" | "center";
  theme?: "dark" | "light";
  className?: string;
}

export function SectionTitle({ tag, title, align = "left", theme = "dark", className = "" }: SectionTitleProps) {
  return (
    <div className={`${styles.container} ${styles[align]} ${className}`}>
      {tag && <span className={`${styles.tag} ${styles[`tag_${theme}`]}`}>{tag}</span>}
      <h2 className={`${styles.title} ${styles[`title_${theme}`]}`}>
        {title}
      </h2>
    </div>
  );
}
