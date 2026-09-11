import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import { student } from "@/lib/data";

export const metadata: Metadata = {
  title: "Case Study 06: AI Ethics Canvas — Medical Diagnosis — Patrick Pio",
  description:
    "A structured ethics canvas examining the deployment of AI diagnostic tools in radiology and clinical decision-making.",
};

const stakeholders = [
  {
    party: "Patients",
    role: "Primary Recipient",
    harms: "Direct physical harm from missed/incorrect diagnoses. Emotional distress, unnecessary procedures, delayed treatment.",
    responsibilities: "Provide accurate medical history. Participate in informed consent discussions.",
    primary: true,
  },
  {
    party: "Clinicians / Radiologists",
    role: "Decision Maker",
    harms: "Professional liability, moral distress, and deskilling risk as reliance on AI increases.",
    responsibilities: "Maintain clinical judgment, ensure AI outputs are verified, uphold duty of care.",
    primary: false,
  },
  {
    party: "Hospitals / Healthcare Providers",
    role: "Deploying Organisation",
    harms: "Litigation, reputational damage, and erosion of patient trust.",
    responsibilities: "Due diligence in procurement, human confirmation protocols, staff training.",
    primary: false,
  },
  {
    party: "AI Developers",
    role: "System Builder",
    harms: "Accountability for flawed or inadequately validated systems.",
    responsibilities: "Accuracy validation, transparent failure mode disclosure, training-data transparency.",
    primary: false,
  },
  {
    party: "Regulators",
    role: "Governance Body",
    harms: "Systemic risk from inadequate oversight frameworks.",
    responsibilities: "Approval criteria, post-market surveillance, corrective action powers.",
    primary: false,
  },
];

const recommendations = [
  {
    num: "01",
    title: "Mandatory Human-in-the-Loop Review",
    detail: "All AI-assisted diagnostic outputs must be reviewed and confirmed by a qualified clinician before informing patient care decisions.",
    principle: "Beneficence",
  },
  {
    num: "02",
    title: "Transparent Patient Disclosure & Consent",
    detail: "Patients must be informed when AI tools contribute to their diagnosis. Consent to AI-assisted assessment must be genuine and explainable.",
    principle: "Autonomy",
  },
  {
    num: "03",
    title: "Rigorous Ongoing Validation & Audit",
    detail: "AI diagnostic systems must be continuously validated against real-world performance data, not only pre-deployment benchmarks.",
    principle: "Non-maleficence",
  },
  {
    num: "04",
    title: "Explainability Requirements",
    detail: "AI systems must provide human-readable reasoning that clinicians can evaluate. Black-box outputs in high-stakes diagnostic contexts are ethically insufficient.",
    principle: "Autonomy",
  },
  {
    num: "05",
    title: "Clear Liability & Regulatory Frameworks",
    detail: "Legislation must establish which party — developer, institution, or clinician — bears responsibility when an AI-assisted diagnosis results in patient harm.",
    principle: "Justice",
  },
];

const principleColors: Record<string, string> = {
  Beneficence: "var(--accent)",
  "Non-maleficence": "#d9534f",
  Autonomy: "#5bc4a4",
  Justice: "#b57bd4",
};

export default function MedicalDiagnosisPage() {
  return (
    <CaseStudyLayout
      number="06"
      title="AI Ethics Canvas — Medical Diagnosis"
      summary="A structured ethics canvas examining the deployment of AI diagnostic tools in radiology and clinical decision-making — including harm assessment, stakeholder analysis, and layered accountability frameworks."
      themes={["Patient Safety", "Autonomy", "Justice", "Accountability", "Human Oversight"]}
    >
      <div className="container-xl py-20">

        {/* ── Metadata ─────────────────────────────────── */}
        <div className="mb-20 flex flex-wrap gap-8 py-8 border-b" style={{ borderColor: "var(--border)" }}>
          {[
            ["Student", student.name],
            ["Reg. No.", student.regNo],
            ["Department", student.department],
            ["Course", student.course],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="label-gray mb-1">{label}</p>
              <p style={{ fontSize: "0.875rem", color: "var(--text-primary)", fontWeight: 500 }}>{value}</p>
            </div>
          ))}
        </div>

        {/* ── Case Background ───────────────────────────── */}
        <Section title="Case Background">
          <p>
            AI diagnostic systems are increasingly used in radiology, pathology,
            and clinical decision-making to detect cancers, fractures, and cardiac
            abnormalities from medical images and patient data. These systems are
            trained on large historical datasets and marketed on the basis of
            improved speed and diagnostic accuracy.
          </p>
          <p>
            Real-world deployments have, however, produced false negatives,
            false positives, delayed treatment, unnecessary procedures, and
            incorrect medication — sometimes as a result of the AI system's
            limitations and sometimes because clinicians relied too heavily on
            AI outputs without independent verification.
          </p>
        </Section>

        <Divider />

        {/* ── Central Ethical Issue ─────────────────────── */}
        <div className="mb-20">
          <SectionLabel>Central Ethical Issue</SectionLabel>
          <div className="mt-8 p-8 border" style={{ borderColor: "var(--accent)", background: "var(--accent-dim)" }}>
            <p
              className="font-bold mb-5"
              style={{ fontSize: "clamp(1.125rem, 2vw, 1.5rem)", letterSpacing: "-0.02em", color: "var(--text-primary)", lineHeight: 1.25 }}
            >
              Delegation of high-stakes medical judgment to opaque, probabilistic
              AI systems without adequate human oversight, transparency, or
              accountability.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Non-maleficence & Patient Safety",
                "Informed Consent",
                "Automation Bias",
                "Transparency & Explainability",
                "Equity & Fairness",
              ].map((concern) => (
                <div key={concern} className="flex items-center gap-2">
                  <span style={{ color: "var(--accent)", fontSize: "0.75rem" }}>→</span>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>{concern}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Divider />

        {/* ── Stakeholder Analysis ─────────────────────── */}
        <div className="mb-20">
          <SectionLabel>Stakeholder Analysis Matrix</SectionLabel>
          <div className="flex flex-col gap-px border mt-8" style={{ borderColor: "var(--border)", background: "var(--border)" }}>
            <div className="grid grid-cols-4 gap-px" style={{ background: "var(--border)" }}>
              {["Party", "Role", "Potential Harms", "Responsibilities"].map((h) => (
                <div key={h} className="py-3 px-4 label-gray" style={{ background: "var(--bg-3)", fontSize: "0.625rem" }}>{h}</div>
              ))}
            </div>
            {stakeholders.map(({ party, role, harms, responsibilities, primary }) => (
              <div
                key={party}
                className="grid grid-cols-4 gap-px"
                style={{ background: "var(--border)" }}
              >
                <div className="py-4 px-4" style={{ background: primary ? "rgba(217,83,79,0.06)" : "var(--bg-2)" }}>
                  <p className="font-semibold" style={{ fontSize: "0.875rem", color: primary ? "#d9534f" : "var(--text-primary)" }}>{party}</p>
                </div>
                <div className="py-4 px-4" style={{ background: "var(--bg-2)" }}>
                  <p className="label" style={{ fontSize: "0.625rem" }}>{role}</p>
                </div>
                <div className="py-4 px-4" style={{ background: "var(--bg-2)" }}>
                  <p style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>{harms}</p>
                </div>
                <div className="py-4 px-4" style={{ background: "var(--bg-2)" }}>
                  <p style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>{responsibilities}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* ── Harm & Risk Assessment ───────────────────── */}
        <div className="mb-20">
          <SectionLabel>Harm & Risk Assessment</SectionLabel>
          <div className="grid sm:grid-cols-2 gap-px border mt-8" style={{ borderColor: "var(--border)", background: "var(--border)" }}>
            <div className="p-7" style={{ background: "var(--bg-2)" }}>
              <p className="label mb-5" style={{ color: "#d9534f" }}>Direct Harms</p>
              <ul className="flex flex-col gap-3">
                {[
                  "Delayed or missed treatment due to false negatives",
                  "Unnecessary biopsies, surgeries, or medication from false positives",
                  "Psychological harm from incorrect diagnoses",
                  "Worsened prognosis from diagnostic delay",
                ].map((h) => (
                  <li key={h} className="flex gap-3">
                    <span style={{ color: "#d9534f", flexShrink: 0 }}>—</span>
                    <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>{h}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-7" style={{ background: "var(--bg-2)" }}>
              <p className="label mb-5" style={{ color: "#d9a84f" }}>Systemic Risks</p>
              <ul className="flex flex-col gap-3">
                {[
                  "Clinical deskilling as AI dependency increases",
                  "Algorithmic bias against underrepresented patient groups",
                  "Legal and financial exposure for healthcare institutions",
                  "Erosion of public trust in AI-assisted medicine",
                ].map((h) => (
                  <li key={h} className="flex gap-3">
                    <span style={{ color: "#d9a84f", flexShrink: 0 }}>—</span>
                    <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>{h}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="p-5 border-l-2 mt-6" style={{ borderColor: "#d9534f", background: "rgba(217,83,79,0.06)" }}>
            <p className="label mb-2" style={{ color: "#d9534f" }}>Severity Level: HIGH</p>
            <p style={{ fontSize: "0.9375rem", color: "var(--text-primary)", lineHeight: 1.65 }}>
              Diagnostic errors directly affect survival rates and quality of life.
              Unlike errors in lower-stakes AI applications, medical misdiagnosis
              can result in irreversible physical harm or death.
            </p>
          </div>
        </div>

        <Divider />

        {/* ── Responsibility & Accountability ──────────── */}
        <Section title="Responsibility & Accountability">
          <p>
            Responsibility in AI-assisted medical diagnosis is shared across multiple
            parties — forming a layered accountability structure. However, this
            structure creates a risk: when each party assumes that another has
            verified safety, the result is what ethicists call a
            &ldquo;responsibility gap.&rdquo;
          </p>
          <div className="quote-block my-6">
            <p>
              &ldquo;Shared responsibility&rdquo; must mean that each party genuinely fulfils
              their portion of the accountability obligation — not that each party
              assumes the others have covered it.
            </p>
          </div>
          <p>
            The treating clinician bears ultimate professional responsibility for
            the final diagnosis. AI systems are tools that support — but do not
            replace — clinical judgment.
          </p>
        </Section>

        <Divider />

        {/* ── Recommendations ──────────────────────────── */}
        <div className="mb-20">
          <SectionLabel>Recommendations</SectionLabel>
          <p className="mt-3 mb-8" style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.65, maxWidth: "58ch" }}>
            Each recommendation is grounded in one of the four core bioethical principles.
          </p>
          <div className="flex flex-col gap-px border" style={{ borderColor: "var(--border)", background: "var(--border)" }}>
            {recommendations.map(({ num, title, detail, principle }) => (
              <div key={num} className="flex gap-6 p-6" style={{ background: "var(--bg-2)" }}>
                <span className="font-mono font-bold flex-shrink-0" style={{ fontSize: "1.25rem", color: "var(--accent)", opacity: 0.5, lineHeight: 1 }}>{num}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <p className="font-semibold" style={{ fontSize: "0.875rem", color: "var(--text-primary)" }}>{title}</p>
                    <span
                      className="text-xs px-2 py-0.5 font-medium"
                      style={{
                        background: `${principleColors[principle]}20`,
                        color: principleColors[principle],
                        borderRadius: "2px",
                      }}
                    >
                      {principle}
                    </span>
                  </div>
                  <p style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* ── Conclusion ────────────────────────────────── */}
        <Section title="Conclusion">
          <p>
            AI diagnostic tools offer significant potential to improve the speed
            and consistency of clinical assessment. Preliminary evidence suggests
            they can identify anomalies in medical images with high sensitivity.
            However, the responsible deployment of these systems requires a
            comprehensive ethical framework — not simply technical performance metrics.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mt-6">
            {[
              "Human-in-the-loop oversight",
              "Transparency and explainability",
              "Accountability at every level",
              "Informed patient consent",
              "Continuous validation and audit",
              "Equitable performance across populations",
            ].map((req) => (
              <div key={req} className="flex items-center gap-3 py-3 border-b" style={{ borderColor: "var(--border)" }}>
                <span style={{ color: "var(--accent)", flexShrink: 0 }}>→</span>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>{req}</p>
              </div>
            ))}
          </div>
          <div className="quote-block mt-8">
            <p>
              AI should support clinical judgment — not replace it. The physician
              who integrates AI as a tool, rather than substituting it for
              judgment, is practising Responsible AI in medicine.
            </p>
          </div>
        </Section>

      </div>
    </CaseStudyLayout>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-20">
      <SectionLabel>{title}</SectionLabel>
      <div className="mt-6 prose-block flex flex-col gap-4 max-w-3xl">{children}</div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-number" style={{ fontSize: "0.6875rem" }}>{children}</p>;
}

function Divider() {
  return <hr className="divider mb-20" />;
}
