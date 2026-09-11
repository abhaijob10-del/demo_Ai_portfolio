import type { Metadata } from "next";
import Link from "next/link";
import { student } from "@/lib/data";
import { ShieldCheck, CheckCircle, FileText, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Academic & Ethical Declaration — Patrick Pio | Responsible AI",
  description:
    "Official student declaration of academic integrity, originality, and adherence to ethical research standards for Patrick Pio (Reg. No. 2460420).",
};

export default function DeclarationPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      {/* Header */}
      <div className="border-b border-[var(--border)] bg-[var(--bg-secondary)]/50 pt-28 pb-16">
        <div className="container-xl">
          <div className="max-w-3xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-tertiary)] hover:text-[var(--text-primary)] mb-6 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Portfolio
            </Link>
            <span className="label bg-[var(--bg-primary)] text-[var(--text-secondary)] px-2.5 py-1 rounded border border-[var(--border)] mb-4 inline-block">
              FORMAL ACADEMIC PLEDGE
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Academic & Ethical Declaration
            </h1>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              Statement of originality, ethical conduct in research, and adherence to institutional standards of academic integrity at CHRIST (Deemed to be University).
            </p>
          </div>
        </div>
      </div>

      {/* Main Declaration Body */}
      <main className="container-xl py-16">
        <div className="max-w-3xl mx-auto">
          <div className="p-8 md:p-12 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)]/30 shadow-lg">
            <div className="flex items-center gap-3 border-b border-[var(--border)] pb-6 mb-8">
              <ShieldCheck className="w-8 h-8 text-[var(--accent)] flex-shrink-0" />
              <div>
                <h2 className="text-lg font-bold">DEPARTMENT OF COMPUTER SCIENCE</h2>
                <p className="text-xs text-[var(--text-tertiary)] font-mono">
                  CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA
                </p>
              </div>
            </div>

            <div className="space-y-6 text-sm text-[var(--text-secondary)] leading-relaxed">
              <p>
                I, <strong className="text-[var(--text-primary)]">{student.name}</strong>, bearing Registration Number <strong className="text-[var(--text-primary)] font-mono">{student.regNo}</strong>, hereby declare that the portfolio titled <strong className="text-[var(--text-primary)]">“Responsible Artificial Intelligence: Ethics, Governance, and High-Stakes Sociotechnical Systems”</strong> is a record of original academic work undertaken by me in fulfillment of the course curriculum.
              </p>

              <div className="p-4 rounded border border-[var(--border)] bg-[var(--bg-primary)] space-y-3 font-mono text-xs">
                <div className="flex justify-between border-b border-[var(--border)] pb-2">
                  <span className="text-[var(--text-tertiary)]">CANDIDATE NAME:</span>
                  <span className="text-[var(--text-primary)] font-semibold">{student.name.toUpperCase()}</span>
                </div>
                <div className="flex justify-between border-b border-[var(--border)] pb-2">
                  <span className="text-[var(--text-tertiary)]">REGISTRATION NUMBER:</span>
                  <span className="text-[var(--accent)] font-semibold">{student.regNo}</span>
                </div>
                <div className="flex justify-between border-b border-[var(--border)] pb-2">
                  <span className="text-[var(--text-tertiary)]">PROGRAMME:</span>
                  <span className="text-[var(--text-primary)]">Department of Computer Science</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-tertiary)]">COURSE TITLE:</span>
                  <span className="text-[var(--text-primary)]">{student.course}</span>
                </div>
              </div>

              <h3 className="text-base font-bold text-[var(--text-primary)] pt-4">
                Specific Attestations
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Originality of Critical Analysis:</strong> All synthesis, ethical arguments, matrix ratings, and policy recommendations represent my own analytical evaluations and critical reasoning.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Transparent Disclosure of AI Usage:</strong> In exercises where generative artificial intelligence tools were utilized (e.g., initial unstructured document summarization in Case Study 02), the scope, prompts, and subsequent human audits have been explicitly declared in accordance with course policy.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Scholarly Attribution:</strong> All external frameworks, judicial records, regulatory publications, and empirical accident reports cited throughout this portfolio are credited to their primary sources.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Commitment to Responsible AI:</strong> I affirm that as a computing professional, I acknowledge the moral and social obligation to design systems that safeguard human dignity, non-discrimination, transparency, and accountability.
                  </span>
                </li>
              </ul>

              <div className="mt-12 pt-8 border-t border-[var(--border)] grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <span className="text-xs text-[var(--text-tertiary)] font-mono block mb-1">DIGITAL ATTESTATION</span>
                  <span className="font-serif text-lg italic text-[var(--text-primary)] block">Patrick Pio</span>
                  <span className="text-[11px] text-[var(--text-tertiary)] font-mono">Digitally verified candidate submission</span>
                </div>
                <div className="sm:text-right">
                  <span className="text-xs text-[var(--text-tertiary)] font-mono block mb-1">DATE & LOCATION</span>
                  <span className="font-mono text-sm text-[var(--text-primary)] block">Academic Term 2025–2026</span>
                  <span className="text-[11px] text-[var(--text-tertiary)] font-mono">CHRIST (Deemed to be University), Bangalore</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/case-studies"
              className="btn btn-primary text-xs uppercase tracking-wider inline-flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Explore the 6 Case Studies
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
