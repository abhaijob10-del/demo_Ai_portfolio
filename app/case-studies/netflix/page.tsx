import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Case Study 02: Responsible Data Audit — Netflix — Patrick Pio",
  description:
    "A structured audit of Netflix's data collection, consent mechanisms, algorithmic influence, and digital inequality, conducted using generative AI with critical human evaluation.",
};

export default function NetflixPage() {
  return (
    <CaseStudyLayout
      number="02"
      title="Responsible Data Audit — Netflix"
      subtitle="Unit 2 — Ethics of Data Power, Consent & Digital Inequality"
      summary="A structured audit of Netflix's data collection practices, consent mechanisms, algorithmic influence, and digital inequality — conducted using generative AI with critical human evaluation."
      themes={["Privacy", "Consent", "Data Power", "Digital Inequality", "Representational Harm"]}
    >
      <div className="container-xl py-20">

        {/* ── Header Quote ─────────────────────────────── */}
        <div className="mb-20">
          <blockquote className="quote-block">
            <p>
              &ldquo;Privacy is not about hiding information; it is about preserving
              the freedom to control our personal data in the digital world.&rdquo;
            </p>
          </blockquote>
          <div className="mt-4 flex flex-wrap gap-8">
            <MetaItem label="Application Audited" value="Netflix Inc." />
            <MetaItem label="AI Tool Used" value="ChatGPT" />
            <MetaItem label="Course" value="Responsible Artificial Intelligence" />
          </div>
        </div>

        <Divider />

        {/* ── Introduction ─────────────────────────────── */}
        <Section title="Introduction">
          <p>
            Netflix is one of the world's largest subscription-based video
            streaming platforms, serving hundreds of millions of users across 190+
            countries. Artificial intelligence powers its recommendation engine,
            search ranking, streaming quality optimisation, thumbnail selection,
            fraud detection, and customer engagement systems.
          </p>
          <p>
            Netflix was selected for this audit because of its extensive use of
            AI and ML for personalised recommendations; its collection of viewing
            history, search activity, device usage, and preferences; and the
            questions it raises around privacy, consent, profiling, and user
            autonomy — despite its subscription-based model.
          </p>
          <p>
            Its global reach — serving diverse cultures, ages, and regions —
            also makes it well-suited for analysing digital inequality, fairness,
            accessibility, and representational harm.
          </p>

          <div className="grid sm:grid-cols-3 gap-px border mt-8"
            style={{ borderColor: "var(--border)", background: "var(--border)" }}
          >
            {[
              { label: "Founded", value: "1997" },
              { label: "Headquarters", value: "California, USA" },
              { label: "Reach", value: "190+ Countries" },
            ].map(({ label, value }) => (
              <div key={label} className="p-5" style={{ background: "var(--bg-2)" }}>
                <p className="label-gray mb-1">{label}</p>
                <p className="font-bold" style={{ fontSize: "1.25rem", color: "var(--text-primary)" }}>{value}</p>
              </div>
            ))}
          </div>

          <p className="mt-6">
            Netflix evolved from a DVD rental service to an internet streaming
            platform whose AI systems create personalised homepages using viewing
            history, search behaviour, ratings, watch time, and device information.
          </p>
        </Section>

        <Divider />

        {/* ── Data Collected ───────────────────────────── */}
        <div className="mb-20">
          <SectionLabel>Data Collected</SectionLabel>
          <p className="mt-3 mb-8" style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.65, maxWidth: "58ch" }}>
            Netflix collects data across six broad categories, spanning user-provided information through to data obtained from third-party partners.
          </p>
          <div className="flex flex-col gap-px border" style={{ borderColor: "var(--border)", background: "var(--border)" }}>
            {[
              {
                category: "User-Provided Information",
                items: "Name, email, password, phone, payment information, profile details, language preferences.",
              },
              {
                category: "Viewing Activity",
                items: "Movies and TV shows watched, watch history, search history, ratings, browsing behaviour, viewing duration, and interaction patterns.",
              },
              {
                category: "Technical Information",
                items: "Device identifiers, browser type, operating system, IP address, ISP, cookies, advertising identifiers, and connection information.",
              },
              {
                category: "Billing Information",
                items: "Subscription plan, payment method, billing history, and transaction records.",
              },
              {
                category: "Customer Support Information",
                items: "Service conversations, feedback, survey responses, and reported issues.",
              },
              {
                category: "Information from Partners",
                items: "Data from payment providers, ISPs, smart TV manufacturers, and promotional partners.",
              },
            ].map(({ category, items }) => (
              <div key={category} className="flex flex-col sm:flex-row gap-4 p-6" style={{ background: "var(--bg-2)" }}>
                <p className="font-semibold flex-shrink-0" style={{ fontSize: "0.875rem", color: "var(--text-primary)", minWidth: "220px" }}>
                  {category}
                </p>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{items}</p>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* ── Purpose of Data Collection ───────────────── */}
        <div className="mb-20">
          <SectionLabel>Purpose of Data Collection</SectionLabel>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px border mt-8"
            style={{ borderColor: "var(--border)", background: "var(--border)" }}
          >
            {[
              { num: "01", purpose: "Providing Streaming Services", detail: "Delivering content and maintaining account access across devices." },
              { num: "02", purpose: "Personalisation", detail: "Generating individual recommendations, thumbnails, and curated homepages." },
              { num: "03", purpose: "Service Improvement", detail: "Analysing usage patterns to enhance platform features and content strategy." },
              { num: "04", purpose: "Security & Fraud Prevention", detail: "Detecting unauthorised access, payment fraud, and account sharing." },
              { num: "05", purpose: "Customer Support", detail: "Resolving service issues and improving support quality." },
              { num: "06", purpose: "Legal Compliance", detail: "Meeting regulatory requirements including data retention and disclosure obligations." },
            ].map(({ num, purpose, detail }) => (
              <div key={num} className="p-6" style={{ background: "var(--bg-2)" }}>
                <span className="font-mono font-bold" style={{ fontSize: "1.5rem", color: "var(--accent)", opacity: 0.4, lineHeight: 1, display: "block", marginBottom: "0.75rem" }}>{num}</span>
                <p className="font-semibold mb-1" style={{ fontSize: "0.875rem", color: "var(--text-primary)" }}>{purpose}</p>
                <p style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{detail}</p>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* ── Consent Mechanisms ───────────────────────── */}
        <Section title="Consent Mechanisms">
          <p>
            Users must accept Netflix's Terms of Use and Privacy Statement before
            accessing the platform. In GDPR regions, cookie consent mechanisms
            provide some additional control.
          </p>
          <div className="p-5 border-l-2 my-6" style={{ borderColor: "#d9a84f", background: "rgba(217,168,79,0.07)" }}>
            <p className="font-semibold mb-2" style={{ color: "#d9a84f", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Ethical Concern</p>
            <p style={{ fontSize: "0.9375rem", color: "var(--text-primary)", lineHeight: 1.65 }}>
              Acceptance of data collection terms is mandatory for access, and
              alternatives are extremely limited. The Privacy Statement can be
              lengthy and written in legalistic language, substantially reducing
              the effectiveness of informed consent.
            </p>
          </div>
          <p>
            Informed consent requires that users understand what data is collected,
            for what purpose, with whom it is shared, and for how long it is
            retained. When these conditions are obscured by complexity, consent
            becomes formal rather than substantive.
          </p>
        </Section>

        <Divider />

        {/* ── User Rights & Controls ───────────────────── */}
        <div className="mb-20">
          <SectionLabel>User Rights & Controls</SectionLabel>
          <p className="mt-3 mb-8" style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
            Netflix provides the following data controls to users:
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Access and update account information",
              "Change profile settings",
              "Delete selected viewing history",
              "Download certain personal information",
              "Cancel subscriptions",
              "Manage communication preferences",
              "Configure autoplay behaviour",
              "Control cookie preferences (where applicable)",
              "Request deletion of personal information per applicable privacy laws",
            ].map((right) => (
              <div key={right} className="flex items-start gap-3 py-3 border-b" style={{ borderColor: "var(--border)" }}>
                <span style={{ color: "var(--accent)", fontSize: "0.75rem", marginTop: "3px", flexShrink: 0 }}>→</span>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>{right}</p>
              </div>
            ))}
          </div>
          <div className="p-5 border-l-2 mt-8" style={{ borderColor: "#d9534f", background: "rgba(217,83,79,0.06)" }}>
            <p className="font-semibold mb-2" style={{ color: "#d9534f", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Critical Limitation</p>
            <p style={{ fontSize: "0.9375rem", color: "var(--text-primary)", lineHeight: 1.65 }}>
              Many users may be unaware of these options due to their complexity.
              Crucially, users cannot selectively opt out of all behavioural data
              collection while retaining all personalised services — creating a
              coercive trade-off between privacy and functionality.
            </p>
          </div>
        </div>

        <Divider />

        {/* ── Ethical Data Audit ───────────────────────── */}
        <div className="mb-20">
          <SectionLabel>Ethical Data Audit — Privacy Concerns</SectionLabel>
          <div className="flex flex-col gap-6 mt-8">
            {[
              {
                id: "3.1.1",
                title: "Continuous Behavioural Tracking",
                body: "Netflix records viewing behaviour, search queries, watch duration, pause/resume interactions, and device usage. This continuous surveillance creates a detailed behavioural profile with each interaction.",
              },
              {
                id: "3.1.2",
                title: "Extensive User Profiling",
                body: "Machine learning algorithms predict future interests and viewing preferences. This raises concerns around informational privacy, user autonomy, and algorithmic influence over cultural consumption.",
              },
              {
                id: "3.1.3",
                title: "Long-Term Data Retention",
                body: "Data is stored for operational, legal, and business purposes over extended periods, creating risks around unauthorised access, disclosure, and secondary use beyond the original stated purpose.",
              },
              {
                id: "3.1.4",
                title: "Data Sharing with Service Providers",
                body: "Third-party providers may handle payment processing, customer support, cloud infrastructure, analytics, fraud detection, and content delivery — each representing an additional data access point.",
              },
            ].map(({ id, title, body }) => (
              <div key={id} className="flex gap-5 p-6 border" style={{ borderColor: "var(--border)", background: "var(--bg-2)" }}>
                <span className="label-gray flex-shrink-0 mt-0.5">{id}</span>
                <div>
                  <p className="font-semibold mb-2" style={{ fontSize: "0.9375rem", color: "var(--text-primary)" }}>{title}</p>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* ── Dark Patterns ────────────────────────────── */}
        <Section title="Manipulative Practices & Dark Patterns">
          <p>
            Several Netflix design choices create conditions that may override
            users' independent decision-making:
          </p>
          <div className="grid sm:grid-cols-2 gap-px border mt-6"
            style={{ borderColor: "var(--border)", background: "var(--border)" }}
          >
            {[
              { num: "01", pattern: "Autoplay Functionality", detail: "Automatically plays the next episode, encouraging prolonged viewing and increased screen time without explicit user initiation." },
              { num: "02", pattern: "Personalised Recommendations", detail: "Continuous recommendation loops may reduce content diversity and create dependency on algorithmic suggestions rather than independent discovery." },
              { num: "03", pattern: "Personalised Thumbnails", detail: "Different cover images are shown to different users based on profiling data, influencing viewing decisions through targeted visual presentation." },
              { num: "04", pattern: "Complex Privacy Information", detail: "Legal terminology and lengthy documentation can prevent users from genuinely understanding how their data is collected, used, and shared." },
            ].map(({ num, pattern, detail }) => (
              <div key={num} className="p-6" style={{ background: "var(--bg-2)" }}>
                <span className="font-mono font-bold" style={{ fontSize: "1.25rem", color: "var(--accent)", opacity: 0.4, lineHeight: 1, display: "block", marginBottom: "0.5rem" }}>{num}</span>
                <p className="font-semibold mb-2" style={{ fontSize: "0.875rem", color: "var(--text-primary)" }}>{pattern}</p>
                <p style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{detail}</p>
              </div>
            ))}
          </div>
        </Section>

        <Divider />

        {/* ── Data Power ───────────────────────────────── */}
        <div className="mb-20">
          <SectionLabel>Data Power & Surveillance</SectionLabel>
          <div className="flex flex-col gap-px border mt-8" style={{ borderColor: "var(--border)", background: "var(--border)" }}>
            {[
              { id: "3.3.1", title: "Behavioural Surveillance", body: "Netflix continuously observes user behaviour, creating a detailed record of cultural choices, preferences, viewing times, and consumption patterns." },
              { id: "3.3.2", title: "Algorithmic Influence", body: "By shaping what content is most visible, Netflix's recommendation algorithms influence cultural consumption at scale — affecting what stories are seen and which remain marginal." },
              { id: "3.3.3", title: "Information Asymmetry", body: "Netflix possesses highly detailed knowledge of each user's behaviour. Users, by contrast, have very limited visibility into how this data is used to influence their experience." },
              { id: "3.3.4", title: "AI-Driven Personalisation & Dependence", body: "Persistent personalisation may reduce users' independent discovery of content, creating algorithmic dependency and narrowing their exposure to diverse perspectives." },
            ].map(({ id, title, body }) => (
              <div key={id} className="flex gap-5 p-6" style={{ background: "var(--bg-2)" }}>
                <span className="label-gray flex-shrink-0 mt-0.5">{id}</span>
                <div>
                  <p className="font-semibold mb-2" style={{ fontSize: "0.875rem", color: "var(--text-primary)" }}>{title}</p>
                  <p style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* ── Digital Inequality ───────────────────────── */}
        <div className="mb-20">
          <SectionLabel>Digital Inequality</SectionLabel>
          <div className="grid sm:grid-cols-2 gap-px border mt-8" style={{ borderColor: "var(--border)", background: "var(--border)" }}>
            {[
              { id: "3.4.1", title: "Internet Accessibility", body: "High-speed internet access required for optimal streaming is not equally available across regions, disproportionately affecting lower-income and rural communities." },
              { id: "3.4.2", title: "Digital Literacy", body: "Understanding how to manage privacy settings, read terms of service, and navigate data controls requires digital literacy that is not uniformly distributed." },
              { id: "3.4.3", title: "Language Accessibility", body: "Privacy statements and controls are primarily in English, limiting meaningful consent and control for non-English-speaking users." },
              { id: "3.4.4", title: "Unequal Content Representation", body: "Content availability varies significantly across regions, creating unequal access to the full breadth of Netflix's library based on geography and market decisions." },
            ].map(({ id, title, body }) => (
              <div key={id} className="p-6" style={{ background: "var(--bg-2)" }}>
                <p className="label mb-2">{id}</p>
                <p className="font-semibold mb-2" style={{ fontSize: "0.875rem", color: "var(--text-primary)" }}>{title}</p>
                <p style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* ── Representational Harm ────────────────────── */}
        <div className="mb-20">
          <SectionLabel>Representational Harm</SectionLabel>
          <div className="flex flex-col gap-px border mt-8" style={{ borderColor: "var(--border)", background: "var(--border)" }}>
            {[
              { id: "3.5.1", title: "Recommendation Bias", body: "If training data reflects existing consumption patterns, the algorithm may systematically under-recommend content from underrepresented communities, reinforcing existing visibility gaps." },
              { id: "3.5.2", title: "Cultural Bias", body: "Recommendation systems trained predominantly on viewing patterns from Western markets may reflect cultural biases that disadvantage non-Western storytelling traditions." },
              { id: "3.5.3", title: "Limited Diversity of Recommendations", body: "Personalisation can create filter bubbles, limiting users' exposure to culturally diverse content and reinforcing existing preferences rather than broadening them." },
              { id: "3.5.4", title: "Accessibility Concerns", body: "Adequate subtitle quality, audio descriptions, and accessible interfaces are not uniformly available, creating barriers for users with disabilities." },
            ].map(({ id, title, body }) => (
              <div key={id} className="flex gap-5 p-6" style={{ background: "var(--bg-2)" }}>
                <span className="label-gray flex-shrink-0 mt-0.5">{id}</span>
                <div>
                  <p className="font-semibold mb-2" style={{ fontSize: "0.875rem", color: "var(--text-primary)" }}>{title}</p>
                  <p style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* ── Critical Evaluation of GenAI ─────────────── */}
        <div className="mb-20">
          <SectionLabel>Critical Evaluation of Generative AI</SectionLabel>
          <p className="mt-3 mb-8" style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.65, maxWidth: "58ch" }}>
            The following table assesses ChatGPT's performance in auditing Netflix's data practices — identifying where AI analysis was accurate, where it was incomplete, and where it produced incorrect assumptions.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse" style={{ minWidth: "720px" }}>
              <thead>
                <tr>
                  {["AI Observation", "Status", "Evidence", "Missing Issues / Limitations"].map((h) => (
                    <th key={h} className="text-left py-3 px-4 label-gray" style={{ borderBottom: "1px solid var(--border)", fontSize: "0.625rem" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    obs: "Netflix collects account, viewing, search, payment, and device data.",
                    status: "Correct",
                    evidence: "Confirmed in Netflix Privacy Statement under data categories.",
                    missing: "—",
                  },
                  {
                    obs: "Uses AI to personalise recommendations and improve UX.",
                    status: "Correct",
                    evidence: "Netflix engineering blog and Privacy Statement confirm AI-driven personalisation.",
                    missing: "—",
                  },
                  {
                    obs: "Users have privacy controls.",
                    status: "Partially Correct",
                    evidence: "Controls exist but are difficult to discover and incomplete.",
                    missing: "Fails to identify the coercive trade-off between privacy and service.",
                  },
                  {
                    obs: "Shares data with trusted service providers.",
                    status: "Correct",
                    evidence: "Privacy Statement confirms third-party sharing for technical operations.",
                    missing: "—",
                  },
                  {
                    obs: "Netflix sells personal data to advertisers.",
                    status: "Incorrect",
                    evidence: "Netflix Privacy Statement does not indicate personal data sales; Netflix operates a subscription model.",
                    missing: "AI hallucinated an unsupported claim.",
                  },
                  {
                    obs: "Users provide fully informed consent.",
                    status: "Incorrect",
                    evidence: "Consent is structural and mandatory; genuine informed consent is unlikely given complexity.",
                    missing: "AI assumed legitimacy of consent without analysing its conditions.",
                  },
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                    <td className="py-3 px-4" style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>{row.obs}</td>
                    <td className="py-3 px-4">
                      <span className="text-xs font-medium px-2 py-0.5"
                        style={{
                          background: row.status === "Correct" ? "rgba(91,143,212,0.15)" : row.status === "Incorrect" ? "rgba(217,83,79,0.12)" : "rgba(217,168,79,0.12)",
                          color: row.status === "Correct" ? "var(--accent)" : row.status === "Incorrect" ? "#d9534f" : "#d9a84f",
                          borderRadius: "2px",
                          whiteSpace: "nowrap",
                        }}
                      >{row.status}</span>
                    </td>
                    <td className="py-3 px-4" style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>{row.evidence}</td>
                    <td className="py-3 px-4" style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>{row.missing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10">
            <p className="label mb-4">AI Limitations Identified</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Surface-level analysis without deeper ethical reasoning",
                "Limited understanding of regulatory context (GDPR, CCPA)",
                "Assumption bias — presumed ethical practices without verification",
                "Dependence on user prompts — only analysed what was explicitly asked",
                "Unable to assess real-world impact of privacy policies on users",
              ].map((lim) => (
                <div key={lim} className="flex gap-3 py-3 border-b" style={{ borderColor: "var(--border)" }}>
                  <span style={{ color: "#d9534f", fontSize: "0.75rem", flexShrink: 0, marginTop: "2px" }}>—</span>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>{lim}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Divider />

        {/* ── AI Prompts ───────────────────────────────── */}
        <div className="mb-20">
          <SectionLabel>AI Prompts & Interactions</SectionLabel>
          <p className="mt-3 mb-8" style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
            The following five prompts were submitted to ChatGPT as part of the generative AI-assisted audit. Placeholder frames are shown where screenshot images are unavailable.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px border" style={{ borderColor: "var(--border)", background: "var(--border)" }}>
            {[
              { fig: "Figure 1", prompt: "Summarise Netflix Privacy Statement and identify types of personal data collected." },
              { fig: "Figure 2", prompt: "Analyse whether consent mechanisms satisfy ethical principles of informed consent." },
              { fig: "Figure 3", prompt: "Identify manipulative data practices, dark patterns, and privacy concerns." },
              { fig: "Figure 4", prompt: "Evaluate digital inequality and representational harm." },
              { fig: "Figure 5", prompt: "List ethical concerns from a Responsible AI perspective." },
            ].map(({ fig, prompt }) => (
              <div key={fig} className="flex flex-col" style={{ background: "var(--bg-2)" }}>
                {/* Placeholder frame */}
                <div
                  className="flex items-center justify-center border-b"
                  style={{
                    height: "140px",
                    borderColor: "var(--border)",
                    background: "var(--bg-3)",
                  }}
                >
                  <div className="text-center px-4">
                    <p className="label-gray mb-1">{fig}</p>
                    <p style={{ fontSize: "0.75rem", color: "var(--text-tertiary)" }}>ChatGPT Screenshot</p>
                    <p style={{ fontSize: "0.6875rem", color: "var(--text-tertiary)", marginTop: "0.25rem", fontStyle: "italic" }}>[Placeholder — actual screenshot not available]</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="label mb-2">{fig}</p>
                  <p style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{prompt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* ── Ethical Reflection ───────────────────────── */}
        <Section title="Ethical Reflection">
          <p>
            This audit demonstrated that responsible data practices require more
            than a legally compliant privacy statement. They require genuine
            accessibility, meaningful user control, and organisational commitment
            to transparency that goes beyond formal compliance.
          </p>
          <div className="quote-block my-6">
            <p>
              Can users truly provide informed consent online when privacy policies
              are long, legalistic, and acceptance is mandatory for access? The
              evidence suggests that most users cannot — and that this is a
              systemic design problem, not an individual failure of attention.
            </p>
          </div>
          <p>
            Organisations have a responsibility to make privacy controls
            genuinely accessible, not merely technically available. The GDPR's
            requirement for plain-language consent exists for this reason — yet
            compliance with its letter does not always mean compliance with its
            spirit.
          </p>
          <p>
            Working with generative AI as an auditing tool confirmed that AI is
            a useful starting point for identifying publicly available
            information, but it lacks the ethical reasoning capacity, regulatory
            context, and critical judgment needed to conduct a complete
            responsible data audit.
          </p>
          <div className="p-5 border-l-2 mt-6" style={{ borderColor: "var(--accent)" }}>
            <p className="font-semibold" style={{ fontSize: "1rem", color: "var(--text-primary)", lineHeight: 1.65 }}>
              Generative AI is a valuable assistant, not a replacement for human judgment.
            </p>
          </div>
        </Section>

      </div>
    </CaseStudyLayout>
  );
}

/* ── Local helper components ────────────────────────────────── */
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

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="label-gray mb-1">{label}</p>
      <p style={{ fontSize: "0.9375rem", color: "var(--text-primary)", fontWeight: 500 }}>{value}</p>
    </div>
  );
}

function Divider() {
  return <hr className="divider mb-20" />;
}
