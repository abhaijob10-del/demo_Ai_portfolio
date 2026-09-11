"use client";

import { motion } from "framer-motion";

interface EthicalPrincipleCardProps {
  number: string | number;
  label: string;
  description: string;
  index?: number;
}

export default function EthicalPrincipleCard({
  number,
  label,
  description,
  index = 0,
}: EthicalPrincipleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="group flex gap-5 p-6 border transition-colors duration-300"
      style={{
        borderColor: "var(--border)",
        background: "var(--bg-2)",
      }}
    >
      <div>
        <span
          className="font-mono font-bold"
          style={{
            fontSize: "1.75rem",
            lineHeight: 1,
            color: "var(--accent)",
            opacity: 0.5,
            letterSpacing: "-0.04em",
            display: "block",
            marginBottom: "1rem",
          }}
        >
          {String(number).padStart(2, "0")}
        </span>
        <h4
          className="font-semibold mb-2"
          style={{ fontSize: "0.9375rem", color: "var(--text-primary)", letterSpacing: "-0.01em" }}
        >
          {label}
        </h4>
        <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
          {description}
        </p>
      </div>
    </motion.div>
  );
}
