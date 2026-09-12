import os

# Helper to write files
def write_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w') as f:
        f.write(content.strip() + "\n")

# --- UI Components ---
write_file("app/components/ui/Button/index.tsx", """
import React from "react";
import styles from "./styles.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "success" | "outline" | "white";
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", fullWidth, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`${styles.button} ${styles[variant]} ${fullWidth ? styles.fullWidth : ""} ${className || ""}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
""")

write_file("app/components/ui/Button/styles.module.css", """
@reference "tailwindcss";

.button {
  @apply font-semibold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center gap-2;
}

.primary {
  @apply bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-600;
}

.secondary {
  @apply bg-white text-brand-dark hover:bg-gray-100 focus:ring-white;
}

.success {
  @apply bg-brand-green hover:bg-green-600 text-white focus:ring-brand-green;
}

.outline {
  @apply border-2 border-white text-white hover:bg-white hover:text-brand-dark focus:ring-white;
}

.white {
  @apply bg-white text-blue-600 hover:bg-gray-100 focus:ring-white;
}

.fullWidth {
  @apply w-full;
}
""")

write_file("app/components/ui/Section/index.tsx", """
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
""")

write_file("app/components/ui/Section/styles.module.css", """
@reference "tailwindcss";

.section {
  @apply py-20 lg:py-28 relative;
}

.white {
  @apply bg-white;
}

.light {
  @apply bg-brand-light;
}

.dark {
  @apply bg-brand-dark;
}

.brand {
  @apply bg-blue-900;
}
""")

write_file("app/components/ui/SectionTitle/index.tsx", """
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
""")

write_file("app/components/ui/SectionTitle/styles.module.css", """
@reference "tailwindcss";

.container {
  @apply flex flex-col gap-3 mb-10;
}

.left {
  @apply items-start text-left;
}

.center {
  @apply items-center text-center mx-auto;
}

.tag {
  @apply font-sans font-bold text-sm tracking-wider uppercase px-4 py-1.5 rounded-full;
}

.tag_dark {
  @apply bg-blue-50 text-blue-700;
}

.tag_light {
  @apply bg-white/10 text-blue-100;
}

.title {
  @apply font-serif text-3xl md:text-4xl lg:text-5xl leading-tight font-bold;
}

.title_dark {
  @apply text-brand-dark;
}

.title_light {
  @apply text-white;
}
""")

