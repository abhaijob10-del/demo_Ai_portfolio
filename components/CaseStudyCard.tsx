"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/lib/data";

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
}

export default function CaseStudyCard({ study, index }: CaseStudyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        href={`/case-studies/${study.slug}`}
        className="group block border-t transition-colors duration-300"
        style={{ borderColor: "var(--border)" }}
        aria-label={`Case study ${study.number}: ${study.title}`}
      >
        <div
          className="py-8 md:py-10 grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-10 transition-all duration-300"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          {/* Number */}
          <div className="flex items-start">
            <span
              className="font-mono font-bold select-none transition-colors duration-300"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                lineHeight: 1,
                color: "var(--border-2)",
                letterSpacing: "-0.03em",
              }}
            >
              {study.number}
            </span>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-4">
            <div>
              <h3
                className="font-semibold transition-colors duration-300 group-hover:text-[var(--accent)] mb-2"
                style={{
                  fontSize: "clamp(1.125rem, 2.5vw, 1.375rem)",
                  letterSpacing: "-0.02em",
                  color: "var(--text-primary)",
                }}
              >
                {study.title}
              </h3>
              {study.subtitle && (
                <p className="text-xs mb-3" style={{ color: "var(--text-tertiary)", letterSpacing: "0.05em" }}>
                  {study.subtitle}
                </p>
              )}
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.65,
                  maxWidth: "54ch",
                }}
              >
                {study.description}
              </p>
            </div>

            {/* Themes */}
            <div className="flex flex-wrap gap-2">
              {study.themes.map((theme) => (
                <span key={theme} className="tag">
                  {theme}
                </span>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center self-center">
            <span
              className="flex items-center gap-2 text-xs uppercase tracking-widest transition-all duration-300"
              style={{ color: "var(--text-tertiary)" }}
            >
              <span className="hidden lg:inline opacity-0 group-hover:opacity-100 transition-opacity">
                View
              </span>
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
                style={{ color: "var(--accent)" }}
              />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
