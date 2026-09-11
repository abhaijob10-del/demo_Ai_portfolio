import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import { student } from "@/lib/data";

export const metadata: Metadata = {
  title: "Case Study 05: When the Machine Decides — Patrick Pio",
  description:
    "An expanded academic presentation applying five ethical theories to the Uber autonomous vehicle fatality — Utilitarian, Deontological, Virtue, Rights-Based, and Care Ethics.",
};

const keyFailures = [
  {
    title: "Detection Too Late",
    detail:
      "Sensors registered Herzberg approximately six seconds before impact. The object was misclassified sequentially as: unknown object → vehicle → bicycle. No confident classification was reached in sufficient time to enable emergency braking.",
  },
  {
    title: "Braking Disabled",
    detail:
      "Emergency braking was active in the vehicle's software architecture but had been switched off by Uber engineers during testing — without a verified alternative emergency response mechanism.",
  },
  {
    title: "Distracted Safety Operator",
    detail:
      "The human safety operator was looking at a phone in the seconds before impact. The single human safety mechanism in the system was, at the critical moment, not functioning.",
  },
  {
    title: "Disputed Responsibility",
    detail:
      "Scrutiny was directed at both the software system and the human operator, raising the deeper accountability question: who is responsible when autonomous systems fail in ways that involve both technical and human errors?",
  },
];

const ethicalTheories = [
  {
    theory: "Utilitarian Ethics",
    argument:
      "Autonomous vehicle programmes offer utilitarian justification: reduced road fatalities, improved transport efficiency, and net benefits to society over time. However, utilitarianism also requires that harms not be dismissed as acceptable collateral. The immediate, certain loss of Elaine Herzberg's life — combined with the damage to public trust, which may itself delay safety benefits — means the utilitarian calculus does not clearly support this specific deployment decision. The benefits were speculative; the harm was immediate and irreversible.",
  },
  {
    theory: "Deontological Ethics",
    argument:
      "Kant's categorical imperative holds that moral rules must be universalisable. A maxim permitting organisations to deploy insufficiently tested autonomous systems on public roads cannot be universalised without accepting widespread preventable harm. Regardless of intended benefits, Uber had a categorical duty to ensure that its system did not create foreseeable risks of fatal harm to non-consenting pedestrians. That duty was violated.",
  },
  {
    theory: "Virtue Ethics",
    argument:
      "Virtue ethics asks whether Uber demonstrated the character traits that constitute ethical conduct: prudence, caution, integrity, and genuine concern for human welfare. The decision to disable emergency braking and to deploy on public roads before achieving reliable pedestrian detection suggests that virtues of caution and care were subordinated to commercial urgency. A virtuous organisation — one characterised by genuine commitment to safety — would have delayed deployment.",
  },
  {
    theory: "Rights-Based Ethics",
    argument:
      "Individuals have rights to life and safety that cannot be overridden by an organisation's commercial interests. Pedestrians using public spaces have not consented to become test subjects for autonomous vehicle programmes. Elaine Herzberg had a right to safety that the Uber system failed to protect. Rights-based ethics holds that this violation is not justified by the potential future benefits of autonomous vehicle development.",
  },
  {
    theory: "Care Ethics",
    argument:
      "Care ethics emphasises relationships, context, and the protection of vulnerable individuals. Pedestrians — and particularly those who deviate from idealised crossing behaviour, as humans commonly do — are vulnerable road users deserving strong protection. A care-oriented approach to system design would require the AI to model real human behaviour, not idealised behaviour, and to fail safely when encountering ambiguity. The Herzberg case is precisely the kind of atypical but foreseeable scenario that care ethics demands be anticipated.",
  },
];

const raeMatrix = [
  { principle: "Fairness",        finding: "Risk imposed on pedestrians who did not consent to participate in the autonomous vehicle testing programme." },
  { principle: "Accountability",  finding: "Responsibility distributed across software, safety driver, and company — creating a diffuse accountability structure where each party could attribute responsibility elsewhere." },
  { principle: "Transparency",    finding: "Classification failures and system limitations were not publicly visible until investigators released information. The public had no means to assess deployment readiness." },
  { principle: "Safety",          finding: "Disabling emergency braking without a verified alternative created a critical safety gap. This is the primary failure point in this case.", primary: true },
  { principle: "Privacy",         finding: "Less central, but continuous road-facing sensors captured incidental data about bystanders, pedestrians, and public space — raising secondary data governance questions." },
  { principle: "Human Oversight", finding: "A single operator — susceptible to distraction and fatigue — was an insufficient human safety mechanism for a high-risk autonomous deployment.", primary: true },
];

export default function WhenTheMachineDecidesPage() {
  return (
    <CaseStudyLayout
      number="05"
      title="When the Machine Decides"
      subtitle="Ethical Analysis of the Uber Autonomous Vehicle Fatality"
      summary="An expanded academic presentation applying five major ethical theories to the Uber AV fatality — examining what the incident reveals about the responsibilities of organisations deploying autonomous systems."
      themes={["Utilitarian Ethics", "Deontological Ethics", "Virtue Ethics", "Rights-Based Ethics", "Care Ethics"]}
    >
      <div className="container-xl py-20">

        {/* ── Presentation Metadata ─────────────────────── */}
        <div className="mb-20 flex flex-wrap gap-8 py-8 border-b" style={{ borderColor: "var(--border)" }}>
          {[
            ["Presenter", student.name],
            ["Reg. No.", student.regNo],
            ["Course", "Responsible AI"],
            ["Department", student.department],
            ["Institution", `${student.institution}, ${student.campus}`],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="label-gray mb-1">{label}</p>
              <p style={{ fontSize: "0.875rem", color: "var(--text-primary)", fontWeight: 500 }}>{value}</p>
            </div>
          ))}
        </div>

        {/* ── Background ───────────────────────────────── */}
        <Section title="Background">
          <p>
            In March 2018, Uber was operating a self-driving vehicle pilot programme
            in Tempe, Arizona, using modified Volvo XC90 SUVs equipped with radar,
            lidar, and camera sensors. The vehicles were required to carry a human
            safety operator as a backup — responsible for monitoring road conditions
            and intervening if the automated system failed.
          </p>
          <p>
            On 18 March 2018, one of these vehicles struck and killed 49-year-old
            Elaine Herzberg as she walked her bicycle across the road. The incident
            triggered the suspension of Uber's autonomous testing nationwide and
            prompted a 20-month federal investigation by the National Transportation
            Safety Board (NTSB).
          </p>
        </Section>

        <Divider />

        {/* ── Key Failures ─────────────────────────────── */}
        <div className="mb-20">
          <SectionLabel>Key System & Organisational Failures</SectionLabel>
          <div className="grid sm:grid-cols-2 gap-px border mt-8" style={{ borderColor: "var(--border)", background: "var(--border)" }}>
            {keyFailures.map(({ title, detail }, i) => (
              <div key={title} className="p-7" style={{ background: "var(--bg-2)" }}>
                <span className="font-mono font-bold block mb-3" style={{ fontSize: "1.5rem", color: "var(--accent)", opacity: 0.4, lineHeight: 1 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-semibold mb-3" style={{ fontSize: "0.9375rem", color: "var(--text-primary)" }}>{title}</p>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>{detail}</p>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* ── Stakeholders ─────────────────────────────── */}
        <div className="mb-20">
          <SectionLabel>Stakeholder Analysis</SectionLabel>
          <div className="flex flex-col gap-px border mt-8" style={{ borderColor: "var(--border)", background: "var(--border)" }}>
            {[
              { stakeholder: "Elaine Herzberg & Family", role: "Victim", description: "The primary victim of the failure. Sustained fatal injuries. Family faced unquantifiable loss." },
              { stakeholder: "Safety Operator", role: "Human Oversight", description: "The designated human check on the autonomous system. Was distracted at the critical moment." },
              { stakeholder: "Uber Technologies", role: "Developer & Operator", description: "Made decisions about system configuration, braking disablement, and public deployment readiness." },
              { stakeholder: "Autonomous Vehicle Industry", role: "Industry Stakeholder", description: "The incident set a precedent affecting public trust, regulatory environment, and deployment standards across the industry." },
              { stakeholder: "Regulators & Government", role: "Oversight Authority", description: "Responsible for testing approval and safety thresholds. Required to reassess frameworks in response to the incident." },
              { stakeholder: "Public & Road Users", role: "Affected Society", description: "All road users were affected by the deployment of an insufficiently safe system on public roads without their knowledge or consent." },
            ].map(({ stakeholder, role, description }) => (
              <div key={stakeholder} className="flex flex-col sm:flex-row gap-3 p-6" style={{ background: "var(--bg-2)" }}>
                <div style={{ minWidth: "200px" }}>
                  <p className="font-semibold" style={{ fontSize: "0.875rem", color: "var(--text-primary)" }}>{stakeholder}</p>
                  <p className="label mt-1" style={{ fontSize: "0.625rem" }}>{role}</p>
                </div>
                <div className="border-l pl-5 sm:border-l flex-1" style={{ borderColor: "var(--border)" }}>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* ── AI System Analysis ───────────────────────── */}
        <Section title="AI System Analysis">
          <p>
            The Uber vehicle used a fusion of radar, lidar, and camera vision for
            object detection, distance estimation, and classification. The onboard
            perception and prediction system determined braking and steering urgency
            based on object classifications.
          </p>
          <p>
            The system detected Herzberg approximately six seconds before impact —
            sufficient time, under normal conditions, to initiate braking. However,
            the classification pipeline repeatedly reclassified her, failing to
            settle on a clear category in time to trigger a decisive response.
          </p>
          <div className="p-5 border-l-2 my-6" style={{ borderColor: "#d9a84f", background: "rgba(217,168,79,0.07)" }}>
            <p className="label mb-2" style={{ color: "#d9a84f" }}>Core Design Gap</p>
            <p style={{ fontSize: "0.9375rem", color: "var(--text-primary)", lineHeight: 1.65 }}>
              The system was not designed to handle a pedestrian outside a designated
              crosswalk with a bicycle — a scenario that is unusual relative to
              training data but entirely foreseeable in real-world deployment. This
              represents a failure of edge-case scenario planning.
            </p>
          </div>
        </Section>

        <Divider />

        {/* ── Five Ethical Theories ─────────────────────── */}
        <div className="mb-20">
          <SectionLabel>Five Ethical Theories Applied</SectionLabel>
          <p className="mt-3 mb-10" style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.65, maxWidth: "58ch" }}>
            Each major ethical tradition reaches a consistent conclusion: the deployment was premature and the resulting harm was preventable.
          </p>
          <div className="flex flex-col gap-6">
            {ethicalTheories.map(({ theory, argument }, i) => (
              <div
                key={theory}
                className="p-8 border"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--bg-2)",
                  borderLeft: "3px solid var(--accent)",
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="font-mono font-bold" style={{ fontSize: "1.25rem", color: "var(--accent)", opacity: 0.5, lineHeight: 1, flexShrink: 0, marginTop: "2px" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-bold" style={{ fontSize: "1.0625rem", color: "var(--text-primary)", letterSpacing: "-0.015em" }}>{theory}</h3>
                </div>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.75, paddingLeft: "calc(1.25rem + 1rem)" }}>
                  {argument}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* ── Responsible AI Evaluation ─────────────────── */}
        <div className="mb-20">
          <SectionLabel>Responsible AI Evaluation</SectionLabel>
          <div className="flex flex-col gap-px border mt-8" style={{ borderColor: "var(--border)", background: "var(--border)" }}>
            {raeMatrix.map(({ principle, finding, primary }) => (
              <div
                key={principle}
                className="flex gap-4 p-5"
                style={{
                  background: primary ? "rgba(217,83,79,0.06)" : "var(--bg-2)",
                  borderLeft: primary ? "3px solid #d9534f" : undefined,
                }}
              >
                <p
                  className="font-semibold flex-shrink-0"
                  style={{ fontSize: "0.875rem", color: primary ? "#d9534f" : "var(--text-primary)", minWidth: "130px" }}
                >
                  {principle}
                </p>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{finding}</p>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* ── Recommendations ──────────────────────────── */}
        <div className="mb-20">
          <SectionLabel>Recommendations</SectionLabel>
          <div className="grid sm:grid-cols-2 gap-px border mt-8" style={{ borderColor: "var(--border)", background: "var(--border)" }}>
            {[
              { title: "Restore Redundant Braking", detail: "Emergency braking must never be disabled without a verified, independently audited alternative." },
              { title: "Classify Atypical Scenarios", detail: "Training data must include edge cases involving pedestrians outside crosswalks, cyclists, and unusual movement patterns." },
              { title: "Strengthen Operator Oversight", detail: "Human operators must be supported by attention-monitoring systems and distraction prevention protocols." },
              { title: "Strict No-Distraction Policies", detail: "Enforceable policies prohibiting device use during safety monitoring must be mandatory and monitored." },
              { title: "Independent Pre-Deployment Reviews", detail: "Third-party safety audits before public deployment must be required and their findings disclosed." },
              { title: "Clearer Regulatory Thresholds", detail: "Regulators must establish clear minimum safety standards that autonomous vehicles must demonstrably meet before public road access is granted." },
            ].map(({ title, detail }) => (
              <div key={title} className="p-6" style={{ background: "var(--bg-2)" }}>
                <p className="font-semibold mb-2" style={{ fontSize: "0.875rem", color: "var(--text-primary)" }}>{title}</p>
                <p style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{detail}</p>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* ── Final Statement ───────────────────────────── */}
        <div className="mb-12">
          <div className="p-10 border" style={{ borderColor: "var(--accent)", background: "var(--accent-dim)" }}>
            <p
              className="font-bold mb-5"
              style={{ fontSize: "clamp(1.25rem, 3vw, 1.875rem)", letterSpacing: "-0.02em", color: "var(--text-primary)", lineHeight: 1.2 }}
            >
              Automating Service Is Not Automating Responsibility.
            </p>
            <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: "60ch" }}>
              Responsible AI requires safety, oversight, and accountability to scale
              together with autonomy — not after the fact. Every ethical framework
              applied to this case reaches the same conclusion: the deployment was
              premature, the safeguards were insufficient, and the harm was
              preventable.
            </p>
          </div>
        </div>

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
