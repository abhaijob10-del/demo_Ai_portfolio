"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({ number, title, subtitle, className = "" }: SectionHeadingProps) {
  return (
    <motion.div
      className={`${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      <p className="section-number mb-4">
        {number} — {title.toUpperCase()}
      </p>
      {subtitle && (
        <p
          className="mt-3 max-w-2xl"
          style={{
            fontSize: "1.0625rem",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
