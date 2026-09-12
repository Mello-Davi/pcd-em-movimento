import React from "react";

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  centered?: boolean;
  theme?: "light" | "dark";
}

const titleStyles = {
  base: "text-3xl md:text-4xl font-bold mb-6",
  themes: {
    light: "text-blue-900",
    dark: "text-white"
  },
  alignment: {
    left: "text-left",
    center: "text-center mx-auto"
  }
};

export function SectionTitle({ centered, theme = "light", className, children, ...props }: SectionTitleProps) {
  const titleClasses = [
    titleStyles.base,
    titleStyles.themes[theme],
    centered ? titleStyles.alignment.center : titleStyles.alignment.left,
    className
  ].filter(Boolean).join(" ");

  return (
    <h2 className={titleClasses} {...props}>
      {children}
    </h2>
  );
}
