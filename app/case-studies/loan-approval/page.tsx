import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import EthicalPrincipleCard from "@/components/EthicalPrincipleCard";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "Case Study 01: AI-Based Loan Approval System — Patrick Pio",
  description:
    "Examining how automated credit-scoring systems can perpetuate bias, violate privacy, and erode accountability in AI-driven financial decisions.",
};

const principles = [
  {
    label: "Fairness",
    description:
      "Equal opportunities without favoritism or discrimination. The system must not disadvantage applicants based on race, gender, or socioeconomic background encoded in historical data.",
  },
  {
    label: "Privacy",
    description:
      "Personal and financial information must be kept secure and used only for authorized loan-assessment purposes — not shared with third parties or retained beyond necessity.",
  },
  {
    label: "Transparency",
    description:
      "The system must clearly explain which factors influenced the decision. Applicants have a right to understand why a loan was approved or declined.",
  },
  {
    label: "Accountability",
    description:
      "Financial institutions must take identifiable responsibility for AI-generated decisions. Accountability cannot be delegated entirely to an algorithmic process.",
  },
  {
    label: "Safety & Reliability",
    description:
      "The system must operate accurately and consistently, minimizing decision errors that can deny credit to deserving applicants or approve credit for high-risk cases.",
  },
];

export default function LoanApprovalPage() {
  return (
    <CaseStudyLayout
      number="01"
      title="AI-Based Loan Approval System"
      summary="An examination of how automated credit-scoring systems can perpetuate bias, violate privacy, and erode accountability — and how responsible design addresses these failures."
      themes={["Fairness", "Privacy", "Transparency", "Accountability", "Safety"]}
    >
      <div className="container-xl py-20">
        {/* ── AI Application ───────────────────────────── */}
        <ContentBlock title="AI Application">
          <p>
            Banks receive thousands of loan applications daily. An AI-based
            system can analyse applicant data and predict whether a loan should
            be approved, dramatically speeding up decision-making and reducing
            reliance on individual loan officer judgment.
          </p>
          <p>
            While this offers efficiency gains, it also introduces significant
            ethical responsibilities: the system's decisions directly affect
            individuals' financial access, credit histories, and economic
            opportunity.
          </p>
        </ContentBlock>

        <Divider />

        {/* ── Problem Statement ─────────────────────────── */}
        <ContentBlock title="Problem Statement">
          <p>
            Manual loan assessment is time-consuming and can be subjective.
            AI-based systems promise speed, consistency, and scalability. However,
            if the training data reflects historical lending patterns that were
            themselves discriminatory, the AI system can perpetuate and even
            amplify those patterns — denying credit to individuals who are
            creditworthy, while approving loans for others based on
            demographically correlated proxies rather than genuine financial
            indicators.
          </p>
        </ContentBlock>

        <Divider />

        {/* ── Data Required ─────────────────────────────── */}
        <div className="mb-20">
          <Label>Data Required</Label>
          <p className="mt-6 mb-8" style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
            The following applicant data is required for the AI system to generate a loan decision:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px border"
            style={{ borderColor: "var(--border)", background: "var(--border)" }}
          >
            {[
              { item: "Applicant Income", note: "Monthly or annual earnings from employment, business, or investments." },
              { item: "Employment History", note: "Duration, stability, and sector of employment." },
              { item: "Credit Score", note: "Numerical rating derived from past credit behaviour." },
              { item: "Existing Debts", note: "Outstanding obligations including mortgages, car loans, and credit cards." },
              { item: "Loan Amount Requested", note: "The sum applied for and the stated purpose." },
              { item: "Repayment History", note: "Track record of honouring previous financial commitments." },
            ].map(({ item, note }) => (
              <div key={item} className="p-6" style={{ background: "var(--bg-2)" }}>
                <p className="font-semibold mb-2" style={{ fontSize: "0.875rem", color: "var(--text-primary)" }}>{item}</p>
                <p style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{note}</p>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* ── Expected Output ───────────────────────────── */}
        <ContentBlock title="Expected Output">
          <div className="grid sm:grid-cols-2 gap-6 mt-6">
            <div className="p-6 border" style={{ borderColor: "var(--border)", background: "var(--bg-2)" }}>
              <p className="label mb-3">Decision</p>
              <p className="font-bold text-2xl mb-2" style={{ color: "var(--text-primary)" }}>Approved / Rejected</p>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                A binary outcome indicating whether the loan application meets the institution's lending criteria.
              </p>
            </div>
            <div className="p-6 border" style={{ borderColor: "var(--border)", background: "var(--bg-2)" }}>
              <p className="label mb-3">Risk Assessment</p>
              <p className="font-bold text-2xl mb-2" style={{ color: "var(--text-primary)" }}>Risk Score</p>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                A probabilistic score indicating the likelihood of loan default, used to determine interest rates and conditions.
              </p>
            </div>
          </div>
        </ContentBlock>

        <Divider />

        {/* ── Ethical Principles ────────────────────────── */}
        <div className="mb-20">
          <Label>Five Ethical Principles</Label>
          <p className="mt-3 mb-10" style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.65, maxWidth: "58ch" }}>
            Responsible AI loan systems must address five core ethical principles that govern how automated decisions affect individuals and society.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px border"
            style={{ borderColor: "var(--border)", background: "var(--border)" }}
          >
            {principles.map((p, i) => (
              <EthicalPrincipleCard
                key={p.label}
                number={i + 1}
                label={p.label}
                description={p.description}
                index={i}
              />
            ))}
          </div>
        </div>

        <Divider />

        {/* ── Ethical Risk ──────────────────────────────── */}
        <ContentBlock title="Ethical Risk">
          <div className="p-6 border-l-2 my-6" style={{ borderColor: "#d9534f", background: "rgba(217,83,79,0.06)" }}>
            <p className="font-semibold mb-2" style={{ color: "#d9534f", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Primary Risk Identified
            </p>
            <p style={{ fontSize: "1.0625rem", color: "var(--text-primary)", lineHeight: 1.65 }}>
              AI may make incorrect loan decisions due to incomplete or inaccurate
              applicant data, denying credit to deserving applicants and approving
              it for unsuitable ones.
            </p>
          </div>
          <p>
            Beyond individual decision errors, the systemic risk is that historical
            training data may contain embedded discrimination. If minority
            communities have historically been denied loans at higher rates —
            regardless of creditworthiness — an AI trained on this data will
            learn to replicate that pattern. The AI does not need to consider race
            directly; correlated proxies such as postcode, employer type, or
            educational institution may serve as effective substitutes.
          </p>
          <p>
            This form of indirect discrimination is particularly difficult to
            detect because it is obscured by the appearance of neutral,
            data-driven analysis.
          </p>
        </ContentBlock>

        <Divider />

        {/* ── Mitigation Strategies ─────────────────────── */}
        <div className="mb-20">
          <Label>Mitigation Strategies</Label>
          <p className="mt-3 mb-8" style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
            Addressing ethical risks in AI loan approval requires proactive governance throughout the system lifecycle.
          </p>
          <div className="flex flex-col gap-px border" style={{ borderColor: "var(--border)", background: "var(--border)" }}>
            {[
              {
                num: "01",
                title: "Regular Bias Testing",
                detail:
                  "Periodically audit the AI system for unfair outcomes across demographic groups. Fairness metrics — such as equal opportunity and demographic parity — should be monitored continuously.",
              },
              {
                num: "02",
                title: "Representative Training Data",
                detail:
                  "Use balanced and representative datasets that reflect the full diversity of the applicant population, not just historical approvals that may encode past discrimination.",
              },
              {
                num: "03",
                title: "Human Review Before Final Approval",
                detail:
                  "Ensure that AI-generated loan decisions are reviewed by qualified bank officials before they are communicated to applicants. AI should inform, not replace, human judgment.",
              },
            ].map(({ num, title, detail }) => (
              <div key={num} className="flex gap-6 p-6" style={{ background: "var(--bg-2)" }}>
                <span className="font-mono font-bold text-2xl flex-shrink-0" style={{ color: "var(--accent)", opacity: 0.5, lineHeight: 1 }}>{num}</span>
                <div>
                  <p className="font-semibold mb-2" style={{ fontSize: "0.9375rem", color: "var(--text-primary)" }}>{title}</p>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* ── Conclusion ────────────────────────────────── */}
        <ContentBlock title="Conclusion">
          <div className="border-l-2 pl-6 py-1 my-6" style={{ borderColor: "var(--accent)" }}>
            <p style={{ fontSize: "1.125rem", fontStyle: "italic", color: "var(--text-primary)", lineHeight: 1.65 }}>
              &ldquo;An AI system that processes loan applications efficiently but discriminates systematically is not a better system than a slower, human one. Speed without fairness is not progress.&rdquo;
            </p>
          </div>
          <p>
            AI-based loan approval systems offer genuine benefits in terms of
            processing speed and consistency. However, they must be designed,
            tested, and deployed within an ethical governance framework that
            prioritises fairness, transparency, and human accountability.
          </p>
          <p>
            The five principles — fairness, privacy, transparency, accountability,
            and safety — are not optional refinements. They are the conditions
            under which automated credit decisions can be considered legitimate.
          </p>
        </ContentBlock>
      </div>
    </CaseStudyLayout>
  );
}

/* ── Local helper components ────────────────────────────────── */
function ContentBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-20">
      <Label>{title}</Label>
      <div className="mt-6 prose-block flex flex-col gap-4 max-w-3xl">
        {children}
      </div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="section-number" style={{ fontSize: "0.6875rem" }}>
      {children}
    </p>
  );
}

function Divider() {
  return <hr className="divider mb-20" />;
}
