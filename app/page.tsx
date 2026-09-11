"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CaseStudyCard from "@/components/CaseStudyCard";
import EthicsMatrix from "@/components/EthicsMatrix";
import ReferenceList from "@/components/ReferenceList";
import { caseStudies, ethicalPrinciples, frameworkMatrix, references, student } from "@/lib/data";

/* ── Animation helpers ─────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  show: { transition: { staggerChildren: 0.1 } },
};

export default function HomePage() {
  const caseRef = useRef<HTMLElement>(null);

  return (
    <>
      {/* ════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════ */}
      <section
        id="hero"
        aria-label="Introduction"
        className="relative flex items-end min-h-screen"
        style={{ paddingBottom: "clamp(4rem, 8vw, 8rem)" }}
      >
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.25,
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 30% 60%, rgba(91,143,212,0.04) 0%, transparent 70%)",
          }}
        />

        <div className="container-xl relative z-10 w-full">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="max-w-4xl"
          >
            {/* Eyebrow */}
            <motion.p variants={fadeUp} className="label mb-10">
              Responsible Artificial Intelligence
            </motion.p>

            {/* Main heading */}
            <motion.h1
              variants={fadeUp}
              className="font-bold mb-8"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.035em",
                color: "var(--text-primary)",
              }}
            >
              Examining what happens
              <br />
              <span style={{ color: "var(--text-secondary)", fontWeight: 400 }}>
                when intelligence meets
              </span>
              <br />
              human responsibility.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: "clamp(1rem, 1.8vw, 1.125rem)",
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                maxWidth: "62ch",
                marginBottom: "3.5rem",
              }}
            >
              An academic portfolio exploring fairness, privacy, accountability,
              transparency, safety, human oversight, and ethical decision-making
              through real-world AI case studies.
            </motion.p>

            {/* Student metadata */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-x-10 gap-y-4 pb-12 mb-12 border-b"
              style={{ borderColor: "var(--border)" }}
            >
              {[
                ["Student", student.name],
                ["Registration", student.regNo],
                ["Department", student.department],
                ["Institution", `${student.institution}, ${student.campus}`],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="label-gray mb-1">{label}</p>
                  <p style={{ fontSize: "0.9375rem", color: "var(--text-primary)", fontWeight: 500 }}>
                    {value}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Scroll cue */}
            <motion.a
              variants={fadeUp}
              href="#about"
              className="inline-flex items-center gap-3 group transition-colors"
              style={{ color: "var(--text-tertiary)" }}
              aria-label="Scroll to explore"
            >
              <ArrowDown
                size={14}
                className="group-hover:translate-y-1 transition-transform"
                style={{ color: "var(--accent)" }}
              />
              <span className="label-gray tracking-widest">Scroll to Explore</span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          01 — ABOUT
      ════════════════════════════════════════════════════════ */}
      <section
        id="about"
        aria-labelledby="about-heading"
        className="border-t"
        style={{ borderColor: "var(--border)", padding: "clamp(5rem, 10vw, 10rem) 0" }}
      >
        <div className="container-xl">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 md:gap-24">
            <div>
              <SectionHeading number="01" title="About the Portfolio" />

              {/* Metadata panel */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-12 flex flex-col gap-5"
              >
                {[
                  ["Student", student.name],
                  ["Registration", student.regNo],
                  ["Department", student.department],
                  ["Course", student.course],
                  ["Institution", student.institution],
                  ["Campus", student.campus],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="pt-4 border-t"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <p className="label-gray mb-1">{label}</p>
                    <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", fontWeight: 500 }}>
                      {value}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="prose-block"
              >
                <p
                  style={{
                    fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
                    color: "var(--text-primary)",
                    lineHeight: 1.65,
                    marginBottom: "2rem",
                    fontWeight: 400,
                  }}
                >
                  This portfolio presents my work for the Responsible Artificial
                  Intelligence course, examining how AI systems interact with
                  people, institutions, rights, and society.
                </p>

                <p>
                  Rather than treating AI as purely a technical system, these case
                  studies examine the responsibilities that emerge when automated
                  systems influence decisions involving finance, privacy, justice,
                  healthcare, mobility, and human safety.
                </p>

                {/* Visual statement */}
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="my-12 border-l-2 pl-8"
                  style={{ borderColor: "var(--accent)" }}
                >
                  <p
                    style={{
                      fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                      fontWeight: 700,
                      letterSpacing: "-0.025em",
                      lineHeight: 1.2,
                      color: "var(--text-primary)",
                    }}
                  >
                    AI can automate decisions.
                    <br />
                    <span style={{ color: "var(--text-secondary)", fontWeight: 400 }}>
                      Responsibility cannot be automated.
                    </span>
                  </p>
                </motion.div>

                <p>
                  Each case study applies established ethical frameworks —
                  including utilitarian, deontological, virtue, rights-based,
                  and care ethics — to real-world AI systems, identifying risks,
                  stakeholders, and pathways toward responsible deployment.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          02 — CASE STUDIES
      ════════════════════════════════════════════════════════ */}
      <section
        id="case-studies"
        ref={caseRef as React.RefObject<HTMLElement>}
        aria-labelledby="case-studies-heading"
        className="border-t"
        style={{ borderColor: "var(--border)", padding: "clamp(5rem, 10vw, 10rem) 0" }}
      >
        <div className="container-xl">
          <div className="grid md:grid-cols-[1fr_2fr] gap-8 mb-16">
            <SectionHeading
              number="02"
              title="Case Studies"
              subtitle="Six studies examining AI systems through ethical principles, real-world consequences, governance frameworks, and human responsibility."
            />
          </div>

          {/* Case study list */}
          <div>
            {caseStudies.map((study, i) => (
              <CaseStudyCard key={study.slug} study={study} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          03 — ETHICAL FRAMEWORKS (cross-case matrix)
      ════════════════════════════════════════════════════════ */}
      <section
        id="frameworks"
        aria-labelledby="frameworks-heading"
        className="border-t"
        style={{
          borderColor: "var(--border)",
          padding: "clamp(5rem, 10vw, 10rem) 0",
          background: "var(--bg-2)",
        }}
      >
        <div className="container-xl">
          <div className="mb-16">
            <SectionHeading
              number="03"
              title="Ethical Frameworks"
              subtitle="What keeps appearing across every case? A cross-case analysis of ethical principles and where they emerge."
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-4"
              style={{ fontSize: "0.9375rem", color: "var(--text-tertiary)", maxWidth: "52ch" }}
            >
              Across all six case studies, certain ethical principles appear
              consistently — indicating systemic patterns in how AI systems
              create responsibility gaps.
            </motion.p>
          </div>

          <EthicsMatrix data={frameworkMatrix} />

          {/* Principles grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-px border"
            style={{ borderColor: "var(--border)", background: "var(--border)" }}
          >
            {ethicalPrinciples.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="p-6"
                style={{ background: "var(--bg-2)" }}
              >
                <p className="label mb-3" style={{ fontSize: "0.6rem" }}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p
                  className="font-semibold mb-2"
                  style={{ fontSize: "0.9375rem", color: "var(--text-primary)" }}
                >
                  {p.label}
                </p>
                <p style={{ fontSize: "0.8125rem", color: "var(--text-tertiary)", lineHeight: 1.6 }}>
                  {p.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          04 — HUMAN OVERSIGHT
      ════════════════════════════════════════════════════════ */}
      <section
        id="oversight"
        aria-labelledby="oversight-heading"
        className="border-t"
        style={{ borderColor: "var(--border)", padding: "clamp(5rem, 10vw, 10rem) 0" }}
      >
        <div className="container-xl">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 md:gap-24">
            <SectionHeading
              number="04"
              title="Human Oversight"
            />

            <div>
              {/* Big statement */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-bold mb-12"
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.15,
                  color: "var(--text-primary)",
                }}
              >
                AI can recommend.
                <br />
                <span style={{ color: "var(--text-secondary)", fontWeight: 400 }}>
                  Humans must remain accountable.
                </span>
              </motion.p>

              {/* Oversight flow */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-12 flex flex-col"
              >
                {[
                  "AI OUTPUT",
                  "HUMAN REVIEW",
                  "CONTEXTUAL JUDGMENT",
                  "ACCOUNTABILITY",
                  "FINAL DECISION",
                ].map((step, i, arr) => (
                  <div key={step} className="flex flex-col items-start">
                    <div
                      className="flex items-center gap-4 py-3 px-5 border"
                      style={{
                        borderColor: i === 0 ? "var(--border-2)" : "var(--accent)",
                        background: i === arr.length - 1 ? "var(--accent-dim)" : "var(--surface)",
                        minWidth: "220px",
                      }}
                    >
                      <span
                        className="font-mono text-xs"
                        style={{ color: "var(--text-tertiary)" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="font-semibold text-xs tracking-widest"
                        style={{
                          color: i === arr.length - 1 ? "var(--accent)" : "var(--text-primary)",
                        }}
                      >
                        {step}
                      </span>
                    </div>
                    {i < arr.length - 1 && (
                      <div
                        className="ml-8 h-4 w-px"
                        style={{ background: "var(--accent)", opacity: 0.4 }}
                      />
                    )}
                  </div>
                ))}
              </motion.div>

              {/* Case-by-case breakdown */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="grid sm:grid-cols-2 gap-px border"
                style={{ borderColor: "var(--border)", background: "var(--border)" }}
              >
                {[
                  {
                    area: "Loan Approval",
                    note: "Bank officials review final credit decisions before approval.",
                  },
                  {
                    area: "Criminal Justice",
                    note: "Judges and officers retain full authority to override AI risk scores.",
                  },
                  {
                    area: "Autonomous Vehicles",
                    note: "Human safety oversight must be meaningful, attentive, and reliable.",
                  },
                  {
                    area: "Medical Diagnosis",
                    note: "Clinicians bear professional responsibility for all final diagnoses.",
                  },
                  {
                    area: "Generative AI Auditing",
                    note: "Human verification is essential when using AI as an analytical tool.",
                  },
                  {
                    area: "Data & Privacy",
                    note: "Meaningful user control requires genuinely accessible privacy options.",
                  },
                ].map(({ area, note }) => (
                  <div
                    key={area}
                    className="p-6"
                    style={{ background: "var(--bg-2)" }}
                  >
                    <p className="label mb-2">{area}</p>
                    <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                      {note}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          05 — REFLECTION
      ════════════════════════════════════════════════════════ */}
      <section
        id="reflection"
        aria-labelledby="reflection-heading"
        className="border-t"
        style={{
          borderColor: "var(--border)",
          padding: "clamp(5rem, 10vw, 10rem) 0",
          background: "var(--bg-2)",
        }}
      >
        <div className="container-xl">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 md:gap-24">
            <SectionHeading number="05" title="Reflection" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="font-bold mb-8"
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  letterSpacing: "-0.025em",
                  color: "var(--text-primary)",
                }}
              >
                What Responsible AI means to me
              </h2>

              <div className="prose-block flex flex-col gap-5">
                <p>
                  Working through these six case studies has consistently
                  challenged me to separate technical capability from ethical
                  legitimacy. An AI system that functions accurately is not, by
                  that fact alone, a system that functions responsibly. The loan
                  approval system may process thousands of applications
                  efficiently; but if the training data encodes historical
                  discrimination, efficiency becomes a mechanism of injustice.
                </p>

                <p>
                  The Netflix audit revealed how power asymmetries operate even
                  in contexts we consider benign. Users formally &ldquo;consent&rdquo; to data
                  collection, but the conditions for genuine informed consent —
                  clear language, meaningful alternatives, genuine control — are
                  rarely met. This is not a technical failure; it is a governance
                  failure.
                </p>

                <p>
                  The Uber autonomous vehicle case made the cost of oversight
                  failures irreversibly concrete. A single distracted operator,
                  disabled braking systems, and an organisation prioritising
                  deployment over safety resulted in a preventable death. Human
                  oversight must be designed to be effective, not simply present
                  on paper.
                </p>

                <p>
                  The medical diagnosis case extended this reasoning into
                  healthcare, where the stakes are similarly high and the
                  accountability chain even more complex. When each party assumes
                  another party has verified safety, the result is a
                  &ldquo;responsibility gap&rdquo; that can cause direct patient harm.
                </p>

                <div
                  className="border-l-2 pl-6 py-1 my-4"
                  style={{ borderColor: "var(--accent)" }}
                >
                  <p
                    style={{
                      fontSize: "1.0625rem",
                      color: "var(--text-primary)",
                      fontStyle: "italic",
                      lineHeight: 1.65,
                    }}
                  >
                    Working with generative AI as an auditing tool during the
                    Netflix case study was instructive in its own right. The AI
                    identified surface-level data practices accurately but missed
                    deeper concerns around behavioral profiling, information
                    asymmetry, and digital inequality. This confirmed that
                    generative AI is a valuable assistant, not a replacement for
                    human ethical judgment.
                  </p>
                </div>

                <p>
                  Across every case, the same question recurs: who remains
                  accountable when an automated system causes harm? The answer
                  must always be traceable to identifiable humans and
                  organisations. Responsible AI is not a feature that can be
                  added after deployment. It is a design commitment that begins
                  before the first line of training data is assembled.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          06 — PORTFOLIO SUMMARY
      ════════════════════════════════════════════════════════ */}
      <section
        id="summary"
        aria-label="Portfolio summary"
        className="border-t"
        style={{ borderColor: "var(--border)", padding: "clamp(4rem, 8vw, 8rem) 0" }}
      >
        <div className="container-xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-number mb-10"
          >
            PORTFOLIO SUMMARY
          </motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px border"
            style={{ borderColor: "var(--border)", background: "var(--border)" }}
          >
            {caseStudies.map((study, i) => (
              <motion.a
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="group flex flex-col gap-4 p-7 transition-colors duration-300"
                style={{ background: "var(--bg-2)" }}
              >
                <span
                  className="font-mono font-bold"
                  style={{
                    fontSize: "2rem",
                    letterSpacing: "-0.04em",
                    color: "var(--border-2)",
                    lineHeight: 1,
                    transition: "color 0.2s",
                  }}
                >
                  {study.number}
                </span>
                <p
                  className="font-semibold group-hover:text-[var(--accent)] transition-colors"
                  style={{ fontSize: "0.9375rem", color: "var(--text-primary)", lineHeight: 1.3 }}
                >
                  {study.title}
                </p>
                <div className="flex flex-col gap-1">
                  {study.themes.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      style={{ fontSize: "0.75rem", color: "var(--text-tertiary)" }}
                    >
                      — {t}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          REFERENCES
      ════════════════════════════════════════════════════════ */}
      <section
        id="references"
        aria-labelledby="references-heading"
        className="border-t"
        style={{
          borderColor: "var(--border)",
          padding: "clamp(5rem, 10vw, 10rem) 0",
          background: "var(--bg-2)",
        }}
      >
        <div className="container-xl">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 md:gap-24">
            <SectionHeading number="06" title="References" />
            <ReferenceList references={references} />
          </div>
        </div>
      </section>
    </>
  );
}
