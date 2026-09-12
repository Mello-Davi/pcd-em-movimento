import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  theme?: "white" | "light" | "dark";
}

const sectionStyles = {
  base: "py-20",
  themes: {
    white: "bg-white text-gray-900",
    light: "bg-gray-50 text-gray-900",
    dark: "bg-blue-900 text-white",
  }
};

export function Section({ id, theme = "white", className, children, ...props }: SectionProps) {
  const containerClasses = "container mx-auto px-4";
  const sectionClasses = [sectionStyles.base, sectionStyles.themes[theme], className].filter(Boolean).join(" ");

  return (
    <section id={id} className={sectionClasses} {...props}>
      <div className={containerClasses}>
        {children}
      </div>
    </section>
  );
}
