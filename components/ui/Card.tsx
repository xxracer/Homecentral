"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function Card({
  children,
  className = "",
  hover = true,
  padding = "md",
}: CardProps) {
  return (
    <motion.div
      className={`
        bg-surface rounded-2xl border border-warm-gray/50
        shadow-sm ${paddingStyles[padding]}
        ${className}
      `.trim()}
      whileHover={
        hover
          ? {
              y: -4,
              boxShadow:
                "0 20px 40px -12px rgba(26, 58, 92, 0.12), 0 0 0 1px rgba(13, 148, 136, 0.1)",
            }
          : undefined
      }
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
