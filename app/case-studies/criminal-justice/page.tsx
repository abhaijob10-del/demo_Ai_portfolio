import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Case Study 03: TRACE Test — Criminal Justice & AI — Patrick Pio",
  description:
    "Applying the TRACE framework to predictive policing, risk-assessment algorithms, and facial-recognition systems used in criminal justice.",
};

const traceItems = [
  {
    letter: "T",
    word: "Task",
    color: "var(--accent)",
    summary: "Narrow assistive functions: database matching, record organisation, pattern flagging.",
    detail:
      "AI can legitimately assist with narrow, evidence-organising tasks — flagging case patterns, matching fingerprints and DNA against databases, summarising prior records for judges, and organising large volumes of documentary evidence. These tasks are bounded, verifiable, and do not require the AI to exercise judgment over human liberty.",
  },
  {
    letter: "R",
    word: "Risk",
    color: "#d9a84f",
    summary: "Wrongful arrest, bail denial, harsher sentencing. Disproportionate impact on minorities.",
    detail:
      "Wrongful arrest, denial of bail, and harsher sentencing can destroy freedom, livelihood, and reputation. Racial minorities and low-income communities may be disproportionately affected. Documented bias exists in risk-assessment tools such as COMPAS, which has been shown to assign higher recidivism risk scores to Black defendants than to white defendants with comparable backgrounds.",
  },
  {
    letter: "A",
    word: "Authority",
    color: "#5bc4a4",
    summary: "Judges, magistrates, and senior officers must retain full override authority.",
    detail:
      "A judge, magistrate, or senior investigating officer must retain full authority to question, override, or disregard AI-generated scores or matches entirely. Authority over decisions affecting human liberty cannot be delegated to an algorithm — even one presented as objective.",
  },
  {
    letter: "C",
    word: "Contestability",
    color: "#b57bd4",
    summary: "Defendants must be able to understand, challenge, and appeal AI outputs.",
    detail:
      "Defendants and their lawyers must be able to understand how a risk score or match was generated, challenge it in court, access independent expert review, and exercise the right to appeal. Opaque AI outputs that cannot be examined or questioned violate fundamental principles of due process and the right to a fair trial.",
  },
  {
    letter: "E",
    word: "Evidence",
    color: "#7ac4d4",
    summary: "Mixed evidence. AI can assist with databases; recidivism tools show accuracy and bias problems.",
    detail:
      "Evidence is mixed. AI can accelerate database matching and record-keeping. However, recidivism prediction and facial-recognition tools have demonstrated accuracy problems and bias against minority groups — particularly in low-resolution or nighttime conditions. The evidence base does not support treating AI outputs as reliable alone.",
  },
];

export default function CriminalJusticePage() {
  return (
    <CaseStudyLayout
      number="03"
      title="TRACE Test — Criminal Justice & AI"
      summary="Applying the TRACE framework — Task, Risk, Authority, Contestability, Evidence — to predictive policing, risk-assessment algorithms, and facial-recognition systems used in criminal justice."
      themes={["Risk", "Authority", "Contestability", "Evidence", "Human Decision-Making"]}
    >
      <div className="container-xl py-20">

        {/* ── Scenario ─────────────────────────────────── */}
        <Section title="Scenario">
          <p>
            Criminal justice systems increasingly use AI tools including predictive
            policing software, risk-assessment algorithms for recidivism, bail, and
            sentencing decisions, and facial-recognition systems for suspect
            identification.
          </p>
          <p>
            These systems promise faster, data-driven decisions. But they directly
            affect human liberty, reputation, and access to justice — consequences
            that demand the highest standard of ethical scrutiny.
          </p>
        </Section>

        <Divider />

        {/* ── TRACE Framework ──────────────────────────── */}
        <div className="mb-20">
          <SectionLabel>The TRACE Framework</SectionLabel>
          <p className="mt-3 mb-10" style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.65, maxWidth: "58ch" }}>
            TRACE is a structured evaluation framework for assessing whether AI use in high-stakes contexts is appropriate, safe, and ethical.
          </p>

          {/* Large TRACE display */}
          <div className="flex flex-wrap gap-2 mb-12">
            {traceItems.map(({ letter, word, color }) => (
              <div
                key={letter}
                className="flex items-center gap-3 px-5 py-3 border"
                style={{ borderColor: "var(--border)", background: "var(--bg-2)" }}
              >
                <span
                  className="font-mono font-black"
                  style={{ fontSize: "2.5rem", lineHeight: 1, color, letterSpacing: "-0.04em" }}
                >
                  {letter}
                </span>
                <div>
                  <p className="font-semibold" style={{ fontSize: "0.875rem", color: "var(--text-primary)" }}>{word}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed TRACE cards */}
          <div className="flex flex-col gap-px border" style={{ borderColor: "var(--border)", background: "var(--border)" }}>
            {traceItems.map(({ letter, word, color, summary, detail }) => (
              <div key={letter} className="flex gap-6 p-7" style={{ background: "var(--bg-2)" }}>
                <div className="flex-shrink-0 text-center" style={{ minWidth: "40px" }}>
                  <span
                    className="font-mono font-black"
                    style={{ fontSize: "3rem", lineHeight: 1, color, letterSpacing: "-0.04em" }}
                  >
                    {letter}
                  </span>
                  <p style={{ fontSize: "0.6875rem", color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: "0.25rem" }}>
                    {word}
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-3" style={{ fontSize: "0.9375rem", color: "var(--text-primary)" }}>{summary}</p>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* ── Appropriate / Inappropriate AI Role ──────── */}
        <div className="mb-20">
          <SectionLabel>Scope of AI Involvement</SectionLabel>
          <p className="mt-3 mb-8" style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
            A clear distinction must be maintained between what AI may assist with and what must remain entirely under human judgment.
          </p>
          <div className="grid sm:grid-cols-2 gap-px border" style={{ borderColor: "var(--border)", background: "var(--border)" }}>
            <div className="p-7" style={{ background: "var(--bg-2)" }}>
              <p className="label mb-5" style={{ color: "var(--accent)" }}>AI May Assist With</p>
              <ul className="flex flex-col gap-3">
                {[
                  "Database matching (fingerprints, DNA records)",
                  "Case pattern identification from historical records",
                  "Evidence organisation and document summarisation",
                  "Administrative scheduling and resource allocation",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span style={{ color: "var(--accent)", flexShrink: 0 }}>→</span>
                    <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-7" style={{ background: "var(--bg-2)" }}>
              <p className="label mb-5" style={{ color: "#d9534f" }}>Humans Must Retain Authority Over</p>
              <ul className="flex flex-col gap-3">
                {[
                  "Arrest decisions",
                  "Bail decisions",
                  "Determinations of guilt or innocence",
                  "Sentencing",
                  "Parole and release decisions",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span style={{ color: "#d9534f", flexShrink: 0 }}>—</span>
                    <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Divider />

        {/* ── Non-Negotiable Safeguard ──────────────────── */}
        <div className="mb-20">
          <SectionLabel>Non-Negotiable Ethical Safeguard</SectionLabel>
          <div
            className="mt-8 p-8 border"
            style={{ borderColor: "var(--accent)", background: "var(--accent-dim)" }}
          >
            <p
              className="font-bold mb-4"
              style={{
                fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
                letterSpacing: "-0.02em",
                color: "var(--text-primary)",
                lineHeight: 1.25,
              }}
            >
              &ldquo;No arrest, bail denial, conviction, or sentence may be based on AI output alone.&rdquo;
            </p>
            <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
              A qualified human judge or officer must independently verify and
              authorise every such decision. AI reasoning must be fully disclosed
              to the defence, enabling the accused to challenge the basis of any
              AI-assisted finding.
            </p>
          </div>
        </div>

        <Divider />

        {/* ── Conclusion ────────────────────────────────── */}
        <Section title="Conclusion">
          <p>
            Criminal justice decisions carry consequences of irreversible gravity —
            wrongful imprisonment, family separation, lost employment, and
            permanent reputational damage. These consequences demand that the
            decision-making process remains firmly human-led, with AI restricted
            to a narrow assistive role.
          </p>
          <p>
            The TRACE framework confirms that current AI tools in criminal justice
            contexts may legitimately assist with bounded database and evidence tasks.
            They must not be permitted to determine whether a person is arrested,
            detained, convicted, or punished.
          </p>
          <div className="quote-block mt-6">
            <p>
              Justice is not a probabilistic output. It is a human responsibility
              that cannot be delegated to an algorithm.
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
