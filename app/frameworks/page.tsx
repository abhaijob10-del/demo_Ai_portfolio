import type { Metadata } from "next";
import Link from "next/link";
import { student } from "@/lib/data";
import { Shield, Scale, Cpu, Eye, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Ethical Frameworks Library — Patrick Pio | Responsible AI",
  description:
    "Comprehensive taxonomy of Responsible AI governance frameworks, evaluation matrices, and normative ethical theories applied across academic case studies.",
};

const frameworks = [
  {
    id: "trace",
    name: "The TRACE Test",
    context: "High-Stakes Algorithmic Decision-Making & Criminal Justice",
    description:
      "A 5-pillar procedural safeguard designed to assess whether an automated system can legitimately be deployed in domains that affect fundamental liberty or legal status.",
    pillars: [
      { letter: "T", name: "Task Justification", desc: "Is the algorithm solving a legitimate, constitutionally valid problem that cannot be addressed via less invasive methods?" },
      { letter: "R", name: "Risk Assessment", desc: "Has the full spectrum of systemic, downstream, and disparate demographic risks been formally quantified?" },
      { letter: "A", name: "Authority Boundaries", desc: "Are algorithmic outputs strictly advisory, preserving human authority as the sole determinant of binding outcomes?" },
      { letter: "C", name: "Contestability", desc: "Can an affected individual challenge the score, inspect the decision criteria, and request meaningful administrative review?" },
      { letter: "E", name: "Evidence Base", desc: "Is the underlying mathematical model validated independently on representative local population data with ongoing drift audits?" },
    ],
    appliedIn: "/case-studies/criminal-justice",
    caseTitle: "CS-03: Criminal Justice & Risk Assessment",
  },
  {
    id: "canvas",
    name: "AI Ethics Canvas",
    context: "Clinical AI, Diagnostics, and Socio-Technical Systems",
    description:
      "An end-to-end impact evaluation instrument used to map direct/indirect stakeholders, identify potential harms, delineate data provenance, and establish redress pipelines.",
    pillars: [
      { letter: "1", name: "Stakeholder Ecosystem", desc: "Identification of primary users (radiologists, physicians), subjects (patients), and vulnerable groups." },
      { letter: "2", name: "Harm Taxonomy", desc: "Classification of diagnostic false negatives, automation bias, cognitive deskilling, and liability voids." },
      { letter: "3", name: "Data Lineage", desc: "Verification of clinical consent, dataset diversity, demographic representation, and institutional variance." },
      { letter: "4", name: "Oversight Protocol", desc: "Definition of calibrated confidence thresholds below which automated triage demands dual-physician signoff." },
    ],
    appliedIn: "/case-studies/medical-diagnosis",
    caseTitle: "CS-06: Medical Diagnosis & Responsibility Gap",
  },
  {
    id: "theories",
    name: "The Five Normative Ethical Theories",
    context: "Moral Philosophy Applied to Autonomous Systems & Algorithmic Governance",
    description:
      "A multi-paradigm philosophical framework that subjects technological design choices to classical ethical inquiry rather than pure engineering expediency.",
    pillars: [
      { letter: "UT", name: "Utilitarianism", desc: "Evaluating net aggregate utility vs. localized catastrophic harms (e.g., aggregate AV safety vs. unprotected pedestrian sacrifice)." },
      { letter: "DE", name: "Deontological Ethics", desc: "Categorical imperatives and duties: treating human lives as ends in themselves rather than acceptable statistical probabilities." },
      { letter: "VE", name: "Virtue Ethics", desc: "Organizational integrity, moral courage in engineering culture, and the habituation of safety-first decision-making." },
      { letter: "RB", name: "Rights-Based Ethics", desc: "Inviolable fundamental human rights to bodily integrity, due process, privacy, and non-discrimination." },
      { letter: "CE", name: "Ethics of Care", desc: "Relational responsibility, asymmetric vulnerability, and systemic protection for marginalized or unprotected road/data subjects." },
    ],
    appliedIn: "/case-studies/when-the-machine-decides",
    caseTitle: "CS-05: When the Machine Decides (Uber AV Analysis)",
  },
  {
    id: "governance",
    name: "EU AI Act High-Risk Governance & NIST AI RMF",
    context: "Statutory Compliance & Operational Risk Management",
    description:
      "Crosswalk between statutory risk tiers (Prohibited, High-Risk, Transparency Risk, Minimal) and operational lifecycle governance functions (Govern, Map, Measure, Manage).",
    pillars: [
      { letter: "GV", name: "Govern", desc: "Establishing clear corporate policies, executive accountability, and ethical red lines prior to deployment." },
      { letter: "MP", name: "Map", desc: "Contextualizing the operational environment, anticipated user behaviors, and systemic misuse vectors." },
      { letter: "MS", name: "Measure", desc: "Continuous quantitative tracking of false discovery rates, demographic parity, and calibration drift." },
      { letter: "MG", name: "Manage", desc: "Active mitigation controls, kill-switches, fallbacks, and incident reporting post-deployment." },
    ],
    appliedIn: "/case-studies/loan-approval",
    caseTitle: "CS-01: Automated Credit & Loan Approval",
  },
];

export default function FrameworksPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      {/* Header */}
      <div className="border-b border-[var(--border)] bg-[var(--bg-secondary)]/50 pt-28 pb-16">
        <div className="container-xl">
          <div className="max-w-3xl">
            <span className="label bg-[var(--bg-primary)] text-[var(--text-secondary)] px-2.5 py-1 rounded border border-[var(--border)] mb-4 inline-block">
              METHODOLOGICAL FOUNDATIONS
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Ethical Governance Frameworks
            </h1>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              Rigorous analytical frameworks and philosophical theories synthesized for structured evaluation of artificial intelligence systems. Each framework serves as an operational tool to identify vulnerabilities, clarify moral accountability, and engineer ethical mitigations.
            </p>
            <div className="flex gap-4 text-xs font-mono text-[var(--text-tertiary)]">
              <span>STUDENT: {student.name.toUpperCase()} ({student.regNo})</span>
              <span>•</span>
              <span>{student.institution.toUpperCase()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Frameworks List */}
      <main className="container-xl py-16">
        <div className="space-y-16">
          {frameworks.map((fw) => (
            <section
              key={fw.id}
              className="p-8 rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)]/20"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--border)] pb-6 mb-6">
                <div>
                  <span className="label text-[var(--accent)] text-xs font-mono">
                    {fw.context}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold mt-1">{fw.name}</h2>
                </div>
                <Link
                  href={fw.appliedIn}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                >
                  See Applied Case: {fw.caseTitle}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <p className="text-sm md:text-base text-[var(--text-secondary)] mb-8 leading-relaxed max-w-4xl">
                {fw.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {fw.pillars.map((pillar) => (
                  <div
                    key={pillar.name}
                    className="p-4 rounded border border-[var(--border)] bg-[var(--bg-primary)] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-7 h-7 rounded flex items-center justify-center font-mono text-xs font-bold bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border)]">
                          {pillar.letter}
                        </span>
                        <h3 className="font-semibold text-sm">{pillar.name}</h3>
                      </div>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Human in the Loop Pipeline */}
        <section className="mt-20 p-8 rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)]/30">
          <h2 className="text-2xl font-bold mb-3">The Human-in-Command Oversight Architecture</h2>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-8 max-w-3xl">
            A key synthesis across this portfolio is that human oversight cannot be reduced to nominal or perfunctory rubber-stamping. True responsibility requires structured cognitive capacity, contestability, and legal authority at every tier.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded border border-[var(--border)] bg-[var(--bg-primary)]">
              <span className="font-mono text-xs text-[var(--text-tertiary)]">STAGE 01</span>
              <h4 className="font-semibold text-sm mt-1 mb-2">Algorithmic Assessment</h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                System evaluates input data, produces probabilistic confidence score, and explicitly flags uncertainty or out-of-distribution inputs.
              </p>
            </div>
            <div className="p-4 rounded border border-[var(--border)] bg-[var(--bg-primary)]">
              <span className="font-mono text-xs text-[var(--text-tertiary)]">STAGE 02</span>
              <h4 className="font-semibold text-sm mt-1 mb-2">Substantive Human Audit</h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Qualified domain professional examines feature attributions and underlying documentation with sufficient time allotted per case.
              </p>
            </div>
            <div className="p-4 rounded border border-[var(--border)] bg-[var(--bg-primary)]">
              <span className="font-mono text-xs text-[var(--text-tertiary)]">STAGE 03</span>
              <h4 className="font-semibold text-sm mt-1 mb-2">Contextual Judgment</h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Integration of lived human context, socio-economic nuances, and legal standards that algorithms are structurally incapable of perceiving.
              </p>
            </div>
            <div className="p-4 rounded border border-[var(--border)] bg-[var(--bg-primary)]">
              <span className="font-mono text-xs text-[var(--text-tertiary)]">STAGE 04</span>
              <h4 className="font-semibold text-sm mt-1 mb-2">Final Accountable Signoff</h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Named human decision-maker bears legal liability and must record written justification whenever overriding or endorsing the algorithmic recommendation.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
