import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router";

type ButtonVariant = "primary" | "secondary" | "success" | "outline" | "white";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
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

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

export const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, variant = "primary", fullWidth, children, href, ...props }, ref) => {
    const isInternal = href.startsWith("/") || href.startsWith("#");
    const linkProps = {
      className: `${styles.button} ${styles[variant]} ${fullWidth ? styles.fullWidth : ""} ${className || ""}`,
      style: { textDecoration: 'none' },
      ...props
    };

    if (isInternal && href.startsWith("/")) {
      return (
        <Link ref={ref as any} to={href} {...linkProps}>
          {children}
        </Link>
      );
    }

    return (
      <a ref={ref as any} href={href} {...linkProps}>
        {children}
      </a>
    );
  }
);
LinkButton.displayName = "LinkButton";
