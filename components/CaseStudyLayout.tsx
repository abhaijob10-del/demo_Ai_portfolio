"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

interface CaseStudyLayoutProps {
  number: string;
  title: string;
  subtitle?: string;
  summary: string;
  themes: string[];
  children: React.ReactNode;
}

export default function CaseStudyLayout({
  number,
  title,
  subtitle,
  summary,
  themes,
  children,
}: CaseStudyLayoutProps) {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* Back link */}
      <div className="container-xl pt-28 pb-6">
        <Link
          href="/#case-studies"
          className="inline-flex items-center gap-2 transition-colors hover:text-[var(--text-primary)] group"
          style={{ fontSize: "0.8125rem", color: "var(--text-tertiary)" }}
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
          <span>Case Studies</span>
        </Link>
      </div>

      {/* Hero */}
      <div
        className="border-b"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="container-xl pb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="label mb-6">Case Study {number}</p>

            <h1
              className="font-bold mb-5"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "var(--text-primary)",
                maxWidth: "16ch",
              }}
            >
              {title}
            </h1>

            {subtitle && (
              <p
                className="mb-5"
                style={{ fontSize: "1.0625rem", color: "var(--accent)", fontStyle: "italic" }}
              >
                {subtitle}
              </p>
            )}

            <p
              className="mb-8"
              style={{
                fontSize: "1.0625rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                maxWidth: "60ch",
              }}
            >
              {summary}
            </p>

            {/* Themes */}
            <div className="flex flex-wrap gap-2">
              {themes.map((theme) => (
                <span key={theme} className="tag tag-accent">
                  {theme}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </main>
  );
}
