// lib/data.ts — Single source of truth for portfolio content

export const student = {
  name: "Patrick Pio",
  regNo: "2460420",
  department: "Computer Science",
  course: "Responsible Artificial Intelligence",
  institution: "CHRIST (Deemed to be University)",
  campus: "Kengeri Campus",
};

// ─── Case Studies Index ──────────────────────────────────────────
export type CaseStudy = {
  slug: string;
  number: string;
  title: string;
  subtitle?: string;
  description: string;
  themes: string[];
  unit?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "loan-approval",
    number: "01",
    title: "AI-Based Loan Approval System",
    description:
      "An examination of how automated credit-scoring systems can perpetuate bias, violate privacy, and erode accountability — and how responsible design addresses these failures.",
    themes: ["Fairness", "Privacy", "Transparency", "Accountability", "Safety"],
  },
  {
    slug: "netflix",
    number: "02",
    title: "Responsible Data Audit — Netflix",
    subtitle: "Unit 2 — Ethics of Data Power, Consent & Digital Inequality",
    description:
      "A structured audit of Netflix's data collection, consent mechanisms, algorithmic influence, and digital inequality — conducted using generative AI with critical human evaluation.",
    themes: ["Privacy", "Consent", "Data Power", "Digital Inequality", "Representational Harm"],
  },
  {
    slug: "criminal-justice",
    number: "03",
    title: "TRACE Test — Criminal Justice & AI",
    description:
      "Applying the TRACE framework (Task, Risk, Authority, Contestability, Evidence) to predictive policing, risk-assessment algorithms, and facial-recognition systems used in criminal justice.",
    themes: ["Risk", "Authority", "Contestability", "Evidence", "Human Decision-Making"],
  },
  {
    slug: "uber-accident",
    number: "04",
    title: "Uber Self-Driving Car Accident",
    description:
      "An ethics analysis of the March 2018 Uber autonomous vehicle fatality in Tempe, Arizona — examining safety failures, accountability gaps, and the limits of human oversight.",
    themes: ["Safety", "Accountability", "Human Oversight", "Transparency", "AI Ethics"],
  },
  {
    slug: "when-the-machine-decides",
    number: "05",
    title: "When the Machine Decides",
    subtitle: "Ethical Analysis of the Uber Autonomous Vehicle Fatality",
    description:
      "An expanded academic presentation applying five major ethical theories — Utilitarian, Deontological, Virtue, Rights-Based, and Care Ethics — to the Uber AV case.",
    themes: ["Utilitarian Ethics", "Deontological Ethics", "Virtue Ethics", "Rights-Based Ethics", "Care Ethics"],
  },
  {
    slug: "medical-diagnosis",
    number: "06",
    title: "AI Ethics Canvas — Medical Diagnosis",
    description:
      "A structured ethics canvas examining the deployment of AI diagnostic tools in radiology and clinical decision-making, including harm assessment, stakeholder analysis, and accountability frameworks.",
    themes: ["Patient Safety", "Autonomy", "Justice", "Accountability", "Human Oversight"],
  },
];

// ─── Ethical Principles ─────────────────────────────────────────
export const ethicalPrinciples = [
  {
    id: "fairness",
    label: "Fairness",
    description: "Equal opportunities without favoritism or discrimination in automated decision-making.",
  },
  {
    id: "privacy",
    label: "Privacy",
    description: "Personal information kept secure and used only for authorized purposes with informed consent.",
  },
  {
    id: "transparency",
    label: "Transparency",
    description: "Systems clearly explain the factors influencing decisions to users and affected parties.",
  },
  {
    id: "accountability",
    label: "Accountability",
    description: "Organizations take identifiable responsibility for the actions and outcomes of AI systems.",
  },
  {
    id: "safety",
    label: "Safety",
    description: "Systems operate accurately and consistently, minimizing harm to individuals and society.",
  },
  {
    id: "human-oversight",
    label: "Human Oversight",
    description: "Qualified humans retain meaningful authority to review, override, and be accountable for AI decisions.",
  },
  {
    id: "consent",
    label: "Consent",
    description: "Individuals have genuine, informed control over how their data is collected and used.",
  },
  {
    id: "explainability",
    label: "Explainability",
    description: "AI reasoning is understandable to affected parties and can be challenged or contested.",
  },
  {
    id: "contestability",
    label: "Contestability",
    description: "Individuals have the right to question and challenge AI-generated decisions through accessible processes.",
  },
  {
    id: "justice",
    label: "Justice",
    description: "Benefits and burdens of AI systems are distributed equitably across populations.",
  },
];

// ─── Cross-Case Framework Matrix ────────────────────────────────
export type MatrixRow = {
  principle: string;
  loan: boolean;
  netflix: boolean;
  criminal: boolean;
  uber: boolean;
  medical: boolean;
};

export const frameworkMatrix: MatrixRow[] = [
  { principle: "Fairness",         loan: true,  netflix: true,  criminal: true,  uber: false, medical: true  },
  { principle: "Privacy",          loan: true,  netflix: true,  criminal: false, uber: false, medical: true  },
  { principle: "Transparency",     loan: true,  netflix: true,  criminal: true,  uber: true,  medical: true  },
  { principle: "Accountability",   loan: true,  netflix: false, criminal: true,  uber: true,  medical: true  },
  { principle: "Safety",           loan: true,  netflix: false, criminal: true,  uber: true,  medical: true  },
  { principle: "Human Oversight",  loan: true,  netflix: false, criminal: true,  uber: true,  medical: true  },
  { principle: "Consent",          loan: false, netflix: true,  criminal: false, uber: false, medical: true  },
  { principle: "Explainability",   loan: true,  netflix: true,  criminal: true,  uber: true,  medical: true  },
  { principle: "Contestability",   loan: false, netflix: false, criminal: true,  uber: false, medical: false },
  { principle: "Justice",          loan: true,  netflix: true,  criminal: true,  uber: false, medical: true  },
];

// ─── References ─────────────────────────────────────────────────
export const references = [
  {
    id: 1,
    citation: "Netflix. (2026). Netflix Privacy Statement.",
    url: "https://help.netflix.com/legal/privacy",
  },
  {
    id: 2,
    citation: "Netflix. (2026). Netflix Terms of Use.",
    url: "https://help.netflix.com/legal/termsofuse",
  },
  {
    id: 3,
    citation: "European Union. (2016). General Data Protection Regulation (GDPR).",
    url: "https://gdpr.eu",
  },
  {
    id: 4,
    citation: "NIST. (2023). AI Risk Management Framework (AI RMF 1.0). National Institute of Standards and Technology.",
    url: "https://www.nist.gov/itl/ai-risk-management-framework",
  },
  {
    id: 5,
    citation: "OECD. (2019). OECD Principles on Artificial Intelligence. Organisation for Economic Co-operation and Development.",
    url: "https://oecd.ai",
  },
  {
    id: 6,
    citation: "UNESCO. (2021). Recommendation on the Ethics of Artificial Intelligence. United Nations Educational, Scientific and Cultural Organization.",
    url: "https://unesdoc.unesco.org",
  },
  {
    id: 7,
    citation:
      "Floridi, L., & Cowls, J. (2019). A Unified Framework of Five Principles for AI in Society. Harvard Data Science Review.",
    url: "https://hdsr.mitpress.mit.edu",
  },
  {
    id: 8,
    citation:
      "European Commission. (2024). Ethics Guidelines for Trustworthy Artificial Intelligence. Directorate-General for Communications Networks, Content and Technology.",
    url: "https://digital-strategy.ec.europa.eu",
  },
];
