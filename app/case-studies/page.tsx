import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies, student } from "@/lib/data";
import { ArrowRight, BookOpen, Layers, ShieldCheck, Scale, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies Catalog — Patrick Pio | Responsible AI",
  description:
    "Complete academic case studies directory evaluating artificial intelligence systems across algorithmic fairness, data governance, safety failures, and bioethics.",
};

const domains = [
  { label: "All Domains", value: "all" },
  { label: "Financial AI", value: "finance" },
  { label: "Media Governance", value: "media" },
  { label: "Criminal Justice", value: "justice" },
  { label: "Autonomous Systems", value: "autonomous" },
  { label: "Clinical Healthcare", value: "health" },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      {/* Header Banner */}
      <div className="border-b border-[var(--border)] bg-[var(--bg-secondary)]/50 pt-28 pb-16">
        <div className="container-xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="label bg-[var(--bg-primary)] text-[var(--text-secondary)] px-2.5 py-1 rounded border border-[var(--border)]">
                CURRICULAR PORTFOLIO
              </span>
              <span className="text-xs text-[var(--text-tertiary)] font-mono">
                REG: {student.regNo}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[var(--text-primary)]">
              Case Studies in Responsible AI
            </h1>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              Six in-depth academic investigations evaluating real-world algorithmic implementations, corporate data governance, autonomous systems fatalities, and clinical bioethics under rigorous ethical frameworks.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-[var(--text-tertiary)]">
              <span>CHRIST (DEEMED TO BE UNIVERSITY)</span>
              <span>•</span>
              <span>DEPT. OF COMPUTER SCIENCE</span>
              <span>•</span>
              <span>ACADEMIC YEAR 2025–2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <main className="container-xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <article
              key={cs.slug}
              className="card group hover:border-[var(--text-secondary)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 border-b border-[var(--border)] pb-3">
                  <span className="font-mono text-xs text-[var(--accent)] tracking-wider">
                    CASE STUDY {cs.number}
                  </span>
                  {cs.unit && (
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[var(--bg-tertiary)] text-[var(--text-tertiary)] border border-[var(--border)]">
                      {cs.unit}
                    </span>
                  )}
                </div>
                <h2 className="text-xl font-semibold mb-2 group-hover:text-[var(--text-primary)] transition-colors">
                  {cs.title}
                </h2>
                {cs.subtitle && (
                  <p className="text-xs text-[var(--text-tertiary)] font-mono mb-3">
                    {cs.subtitle}
                  </p>
                )}
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  {cs.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cs.themes.map((theme) => (
                    <span
                      key={theme}
                      className="text-[11px] px-2 py-0.5 rounded bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border)] font-mono"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                >
                  Read Full Case Analysis
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Framework & Matrix Quick Jump */}
        <section className="mt-20 p-8 rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)]/30">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold mb-1">Ethical Frameworks & Principles Crosswalk</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Examine comparative mapping across IEEE, NIST AI RMF, UNESCO, and EU High-Risk AI categories.
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                href="/frameworks"
                className="btn btn-secondary text-xs uppercase tracking-wider"
              >
                View Governance Frameworks
              </Link>
              <Link
                href="/declaration"
                className="btn btn-primary text-xs uppercase tracking-wider"
              >
                Ethics Declaration
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
