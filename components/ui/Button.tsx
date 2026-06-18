"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "accent";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
  href?: string;
  icon?: ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  /** Open href in a new tab (for external links). */
  external?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-light shadow-lg shadow-primary/20 hover:shadow-primary/30",
  secondary:
    "bg-secondary text-white hover:bg-secondary-light shadow-lg shadow-secondary/20 hover:shadow-secondary/30",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  accent:
    "bg-accent text-white hover:bg-accent-light shadow-lg shadow-accent/20 hover:shadow-accent/30",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-base rounded-xl",
  lg: "px-8 py-4 text-lg rounded-xl",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  href,
  icon,
  type = "button",
  disabled = false,
  onClick,
  external = false,
}: ButtonProps) {
  const classes = `
    inline-flex items-center justify-center gap-2 font-semibold
    transition-all duration-300 ease-out cursor-pointer
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${disabled ? "opacity-50 pointer-events-none" : ""}
    ${className}
  `.trim();

  const springTransition = {
    type: "spring" as const,
    stiffness: 400,
    damping: 17,
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.98 }}
        transition={springTransition}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {icon && <span className="text-xl">{icon}</span>}
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={springTransition}
    >
      {icon && <span className="text-xl">{icon}</span>}
      {children}
    </motion.button>
  );
}
