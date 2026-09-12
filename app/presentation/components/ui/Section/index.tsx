import React from "react";
import styles from "./styles.module.css";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  theme?: "white" | "light" | "dark";
}

export function Section({ id, theme = "white", className, children, ...props }: SectionProps) {
  const sectionClasses = [styles.section, styles[theme], className].filter(Boolean).join(" ");

  return (
    <section id={id} className={sectionClasses} {...props}>
      <div className={styles.container}>
        {children}
      </div>
    </section>
  );
}
