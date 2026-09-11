import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Case Study 04: Uber Self-Driving Car Accident — Patrick Pio",
  description:
    "Ethics analysis of the March 2018 Uber autonomous vehicle fatality in Tempe, Arizona — examining safety failures, accountability gaps, and human oversight.",
};

const ethicalTheories = [
  {
    theory: "Utilitarian Ethics",
    description:
      "Autonomous vehicle programmes are justified in utilitarian terms by the promise of reducing road fatalities, improving transport efficiency, and saving lives at scale. However, the immediate, irreversible loss of one human life and the resulting public trust damage outweighed speculative future benefits at the time of deployment. Utilitarianism requires that harms are not merely deferred — they must be genuinely prevented.",
  },
  {
    theory: "Deontological Ethics",
    description:
      "Organisations have a moral duty to prioritise public safety, independent of the potential benefits of their technology. Deploying a system with known safety gaps on public roads — where pedestrians did not consent to being test subjects — constitutes a violation of the categorical duty of care. Failure to prevent foreseeable risks cannot be excused by positive intent.",
  },
  {
    theory: "Virtue Ethics",
    description:
      "Virtue ethics asks whether Uber demonstrated sufficient caution, responsibility, and organisational integrity. A virtuous organisation prioritises public welfare over the competitive pressure to deploy rapidly. The disabling of emergency braking systems and the insufficient operator training suggest that virtues of prudence and care were subordinated to commercial urgency.",
  },
  {
    theory: "Rights-Based Ethics",
    description:
      "Individuals have fundamental rights to life, safety, and protection from avoidable harm. Pedestrians using public roads have not consented to exposure to autonomous vehicle testing hazards. Elaine Herzberg's right to safety was violated by a system that was deployed before it could reliably protect her.",
  },
  {
    theory: "Care Ethics",
    description:
      "Care ethics emphasises empathy, relational responsibility, and the protection of vulnerable individuals. Pedestrians — particularly those who cross roads outside marked crosswalks, which is common human behaviour — represent vulnerable road users who deserve strong protection. A care-oriented approach demands that AI systems be trained to account for human behaviour as it actually occurs, not only as it is supposed to occur.",
  },
];

const raePrinciples = [
  { principle: "Fairness",        concern: "Risk imposed on pedestrians who did not consent to participate in the testing programme.", level: "Medium" },
  { principle: "Accountability",  concern: "Responsibility was distributed across software, safety driver, and company — with no single clear accountable party.", level: "High" },
  { principle: "Transparency",    concern: "Public understanding of the system's decisions and failure modes was limited at the time of incident.", level: "High" },
  { principle: "Privacy",         concern: "Less central, but road-facing sensors continuously recorded public space data.", level: "Low" },
  { principle: "Safety",          concern: "Emergency braking was disabled. The pedestrian was not correctly classified. The system failed to act.", level: "Critical" },
  { principle: "Human Oversight", concern: "A single inattentive operator as the sole human safety check was insufficient for a high-risk deployment.", level: "Critical" },
];

const levelColor: Record<string, string> = {
  Critical: "#d9534f",
  High:     "#d9a84f",
  Medium:   "var(--accent)",
  Low:      "var(--text-tertiary)",
};

export default function UberAccidentPage() {
  return (
    <CaseStudyLayout
      number="04"
      title="Uber Self-Driving Car Accident"
      summary="An ethics analysis of the March 2018 Uber autonomous vehicle fatality in Tempe, Arizona — examining safety failures, accountability gaps, and the limits of human oversight."
      themes={["Safety", "Accountability", "Human Oversight", "Transparency", "AI Ethics"]}
    >
      <div className="container-xl py-20">

        {/* ── Incident Overview ─────────────────────────── */}
        <div className="mb-20">
          <SectionLabel>Incident Overview</SectionLabel>
          <div className="grid sm:grid-cols-3 gap-px border mt-8" style={{ borderColor: "var(--border)", background: "var(--border)" }}>
            {[
              { label: "Date", value: "18 March 2018" },
              { label: "Location", value: "Tempe, Arizona, USA" },
              { label: "Vehicle", value: "Uber Volvo XC90 (AV)" },
            ].map(({ label, value }) => (
              <div key={label} className="p-5" style={{ background: "var(--bg-2)" }}>
                <p className="label-gray mb-1">{label}</p>
                <p className="font-bold" style={{ fontSize: "1.0625rem", color: "var(--text-primary)" }}>{value}</p>
              </div>
            ))}
          </div>

          <div className="p-6 border-l-2 mt-8" style={{ borderColor: "#d9534f", background: "rgba(217,83,79,0.06)" }}>
            <p className="font-semibold mb-2" style={{ color: "#d9534f", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              The Incident
            </p>
            <p style={{ fontSize: "1rem", color: "var(--text-primary)", lineHeight: 1.7 }}>
              Uber's autonomous vehicle struck and killed 49-year-old Elaine Herzberg
              while she was walking her bicycle across the road in Tempe, Arizona.
              The vehicle's sensors registered Herzberg approximately six seconds
              before impact. The object was misclassified as an unknown object, then
              as a vehicle, then as a bicycle — with no confident classification
              reached in time to initiate braking. Emergency braking had been
              disabled by Uber. The safety operator was looking at a phone at the
              time of impact.
            </p>
          </div>
        </div>

        <Divider />

        {/* ── Stakeholder Impacts ───────────────────────── */}
        <div className="mb-20">
          <SectionLabel>Stakeholder Impacts</SectionLabel>
          <div className="flex flex-col gap-px border mt-8" style={{ borderColor: "var(--border)", background: "var(--border)" }}>
            {[
              { stakeholder: "Elaine Herzberg & Family", impact: "Most severe and irreversible consequences. Loss of life and the permanent impact on surviving family members.", severity: "Irreversible" },
              { stakeholder: "Uber Technologies", impact: "Significant legal liability, financial cost of the regulatory response, and lasting reputational damage to its autonomous vehicle programme.", severity: "Severe" },
              { stakeholder: "Safety Operator", impact: "Increased personal scrutiny, legal proceedings, and the psychological burden of being physically present during a fatal failure.", severity: "Significant" },
              { stakeholder: "Regulators & Policymakers", impact: "Compelled to reconsider autonomous vehicle testing permissions, oversight frameworks, and deployment standards.", severity: "Significant" },
              { stakeholder: "Society & Public Trust", impact: "Reduced public confidence in autonomous vehicle safety, creating broader regulatory and commercial headwinds for the industry.", severity: "Systemic" },
            ].map(({ stakeholder, impact, severity }) => (
              <div key={stakeholder} className="flex gap-5 p-6" style={{ background: "var(--bg-2)" }}>
                <div className="flex-shrink-0 pt-1">
                  <span
                    className="text-xs font-semibold px-2 py-0.5"
                    style={{
                      background: severity === "Irreversible" ? "rgba(217,83,79,0.15)" : "rgba(217,168,79,0.1)",
                      color: severity === "Irreversible" ? "#d9534f" : "#d9a84f",
                      borderRadius: "2px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {severity}
                  </span>
                </div>
                <div>
                  <p className="font-semibold mb-1" style={{ fontSize: "0.9375rem", color: "var(--text-primary)" }}>{stakeholder}</p>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* ── Ethical Theories ─────────────────────────── */}
        <div className="mb-20">
          <SectionLabel>Ethical Theories Applied</SectionLabel>
          <p className="mt-3 mb-10" style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.65, maxWidth: "58ch" }}>
            Five major ethical frameworks are applied to the Uber AV case to analyse the moral dimensions of the failure.
          </p>
          <div className="flex flex-col gap-6">
            {ethicalTheories.map(({ theory, description }, i) => (
              <div
                key={theory}
                className="flex gap-6 p-7 border"
                style={{ borderColor: "var(--border)", background: "var(--bg-2)" }}
              >
                <span
                  className="font-mono font-bold flex-shrink-0"
                  style={{ fontSize: "1.5rem", color: "var(--accent)", opacity: 0.4, lineHeight: 1, marginTop: "2px" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-semibold mb-3" style={{ fontSize: "1rem", color: "var(--text-primary)", letterSpacing: "-0.01em" }}>{theory}</p>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* ── Responsible AI Evaluation ─────────────────── */}
        <div className="mb-20">
          <SectionLabel>Responsible AI Evaluation Matrix</SectionLabel>
          <p className="mt-3 mb-8" style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
            The following matrix evaluates the Uber AV system against core Responsible AI principles.
          </p>
          <div className="flex flex-col gap-px border" style={{ borderColor: "var(--border)", background: "var(--border)" }}>
            {raePrinciples.map(({ principle, concern, level }) => (
              <div key={principle} className="flex gap-4 p-5" style={{ background: "var(--bg-2)" }}>
                <div className="flex-shrink-0" style={{ minWidth: "130px" }}>
                  <p className="font-semibold" style={{ fontSize: "0.875rem", color: "var(--text-primary)" }}>{principle}</p>
                  <span
                    className="text-xs font-medium"
                    style={{ color: levelColor[level] }}
                  >
                    {level}
                  </span>
                </div>
                <div className="flex-1 border-l pl-5" style={{ borderColor: "var(--border)" }}>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{concern}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* ── Recommendations ──────────────────────────── */}
        <div className="mb-20">
          <SectionLabel>Recommendations</SectionLabel>
          <div className="flex flex-col gap-px border mt-8" style={{ borderColor: "var(--border)", background: "var(--border)" }}>
            {[
              { num: "01", title: "Extensive Safety Testing", detail: "Conduct thorough testing in controlled environments before public deployment, including edge-case scenarios involving pedestrians outside crosswalks." },
              { num: "02", title: "Stronger Detection Systems", detail: "Develop and validate improved pedestrian detection and obstacle recognition, particularly in low-light and unconventional movement scenarios." },
              { num: "03", title: "Effective Human Supervision", detail: "Require attentive, distraction-free human oversight for all autonomous vehicle testing, with attention-monitoring technology and strict no-distraction policies." },
              { num: "04", title: "Independent Safety Audits", detail: "Mandate third-party safety audits before and during public deployment of autonomous vehicles." },
              { num: "05", title: "Transparency", detail: "Disclose system capabilities, known limitations, and failure modes to regulators and the public." },
              { num: "06", title: "Clear Accountability Frameworks", detail: "Establish legally clear accountability for AV failures — specifying which party (developer, operator, or owner) bears responsibility in which scenarios." },
              { num: "07", title: "Ethical Assessments", detail: "Conduct regular ethical assessments throughout the system lifecycle, not only at initial deployment." },
              { num: "08", title: "Restore Redundant Safety Systems", detail: "Emergency braking and other safety-critical systems must not be disabled without verified, independently audited alternative protections." },
            ].map(({ num, title, detail }) => (
              <div key={num} className="flex gap-6 p-6" style={{ background: "var(--bg-2)" }}>
                <span className="font-mono font-bold flex-shrink-0" style={{ fontSize: "1.25rem", color: "var(--accent)", opacity: 0.5, lineHeight: 1 }}>{num}</span>
                <div>
                  <p className="font-semibold mb-1" style={{ fontSize: "0.875rem", color: "var(--text-primary)" }}>{title}</p>
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
            The Uber AV fatality of March 2018 is not a case of unavoidable
            technological limitation. It is a case of identifiable failures —
            disabled safety systems, insufficient oversight, and deployment ahead
            of verified readiness — that resulted in a preventable death.
          </p>
          <div className="quote-block mt-6">
            <p>
              Safety, accountability, transparency, and human oversight must be
              designed into autonomous systems from the beginning — not added as
              afterthoughts following a fatal incident.
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
