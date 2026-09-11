import type { Metadata } from "next";
import Link from "next/link";
import { student } from "@/lib/data";
import { GraduationCap, BookOpen, Award, CheckCircle2, ShieldCheck, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Academic Profile — Patrick Pio | Responsible AI",
  description:
    "Curricular profile, course context, and research methodology for Patrick Pio (Reg. No. 2460420) — Department of Computer Science, CHRIST (Deemed to be University).",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      {/* Header */}
      <div className="border-b border-[var(--border)] bg-[var(--bg-secondary)]/50 pt-28 pb-16">
        <div className="container-xl">
          <div className="max-w-3xl">
            <span className="label bg-[var(--bg-primary)] text-[var(--text-secondary)] px-2.5 py-1 rounded border border-[var(--border)] mb-4 inline-block">
              ACADEMIC RESEARCH PROFILE
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {student.name}
            </h1>
            <p className="text-xl text-[var(--text-secondary)] font-mono mb-6">
              Registration Number: {student.regNo}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[var(--text-secondary)]">
              <div>
                <span className="text-xs uppercase font-mono text-[var(--text-tertiary)] block">Department</span>
                <span className="font-medium text-[var(--text-primary)]">{student.department}</span>
              </div>
              <div>
                <span className="text-xs uppercase font-mono text-[var(--text-tertiary)] block">Course</span>
                <span className="font-medium text-[var(--text-primary)]">{student.course}</span>
              </div>
              <div>
                <span className="text-xs uppercase font-mono text-[var(--text-tertiary)] block">Institution</span>
                <span className="font-medium text-[var(--text-primary)]">{student.institution}</span>
              </div>
              <div>
                <span className="text-xs uppercase font-mono text-[var(--text-tertiary)] block">Campus Location</span>
                <span className="font-medium text-[var(--text-primary)]">{student.campus}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container-xl py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left 2 Cols: Statement & Objectives */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[var(--accent)]" />
                Portfolio Purpose & Academic Statement
              </h2>
              <div className="prose prose-invert max-w-none text-[var(--text-secondary)] text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  This portfolio represents a comprehensive academic submission for the <strong>Responsible Artificial Intelligence</strong> curriculum in the Department of Computer Science at CHRIST (Deemed to be University). Rather than treating ethics as an afterthought or a superficial compliance checklist, this body of work approaches ethical reasoning as a fundamental engineering discipline.
                </p>
                <p>
                  Through six detailed case studies, theoretical frameworks, and institutional data audits, this portfolio investigates the tangible societal consequences of automated decision systems. The analyses encompass algorithmic bias in financial underwriting, dark patterns and surveillance capital in media recommendation engines, due process violations in criminal justice recidivism scoring, liability voids in autonomous vehicle fatalities, and safety critical trade-offs in clinical diagnostic AI.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-[var(--accent)]" />
                Core Competencies & Course Learning Outcomes
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded border border-[var(--border)] bg-[var(--bg-secondary)]/30">
                  <h3 className="font-semibold text-sm mb-2 text-[var(--text-primary)]">
                    1. Algorithmic Fairness & Bias Auditing
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    Ability to identify historical sampling bias, proxy variables, disparate impact, and mathematical incompatibilities between competing definitions of fairness.
                  </p>
                </div>
                <div className="p-4 rounded border border-[var(--border)] bg-[var(--bg-secondary)]/30">
                  <h3 className="font-semibold text-sm mb-2 text-[var(--text-primary)]">
                    2. Normative Moral Philosophy
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    Application of Utilitarianism, Deontology, Virtue Ethics, Rights-Based frameworks, and Ethics of Care to resolve complex socio-technical dilemmas.
                  </p>
                </div>
                <div className="p-4 rounded border border-[var(--border)] bg-[var(--bg-secondary)]/30">
                  <h3 className="font-semibold text-sm mb-2 text-[var(--text-primary)]">
                    3. High-Stakes Risk Assessment
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    Mastery of the TRACE framework and EU AI Act classification regimes to delineate acceptable vs. unacceptable automation thresholds.
                  </p>
                </div>
                <div className="p-4 rounded border border-[var(--border)] bg-[var(--bg-secondary)]/30">
                  <h3 className="font-semibold text-sm mb-2 text-[var(--text-primary)]">
                    4. Human-in-Command Architecture
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    Designing operational pipelines that prevent automation bias, maintain meaningful contestability, and preserve human moral accountability.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Institutional Details & Verification */}
          <div className="space-y-6">
            <div className="p-6 rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)]/40">
              <h3 className="text-sm font-bold uppercase tracking-wider font-mono text-[var(--text-tertiary)] mb-4">
                Institutional Affiliation
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-xs text-[var(--text-tertiary)] block">University</span>
                  <span className="font-medium">CHRIST (Deemed to be University)</span>
                </div>
                <div>
                  <span className="text-xs text-[var(--text-tertiary)] block">Department</span>
                  <span className="font-medium">Department of Computer Science</span>
                </div>
                <div>
                  <span className="text-xs text-[var(--text-tertiary)] block">Student Name</span>
                  <span className="font-medium">{student.name}</span>
                </div>
                <div>
                  <span className="text-xs text-[var(--text-tertiary)] block">Register Number</span>
                  <span className="font-mono text-[var(--accent)] font-semibold">{student.regNo}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[var(--border)]">
                <Link
                  href="/declaration"
                  className="btn btn-primary w-full text-center text-xs uppercase tracking-wider"
                >
                  View Academic Declaration
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)]/20">
              <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[var(--accent)]" />
                Academic Integrity Note
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                All external literature, empirical incident reports, and legislative instruments are cited according to international academic conventions. In case studies where generative AI tools were used for preliminary data ingestion, outputs were subjected to rigorous independent human audit and validation.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
