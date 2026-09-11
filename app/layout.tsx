import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Patrick Pio — Responsible AI Portfolio",
  description:
    "Academic portfolio by Patrick Pio exploring Responsible Artificial Intelligence through ethical case studies involving finance, privacy, criminal justice, autonomous vehicles, and healthcare. CHRIST (Deemed to be University), Kengeri Campus.",
  keywords: [
    "Responsible AI",
    "AI Ethics",
    "Patrick Pio",
    "CHRIST University",
    "Ethical AI",
    "Case Studies",
    "Fairness",
    "Accountability",
    "Transparency",
    "AI Safety",
  ],
  authors: [{ name: "Patrick Pio" }],
  openGraph: {
    title: "Patrick Pio — Responsible AI Portfolio",
    description:
      "Ethical case studies in AI fairness, privacy, accountability, transparency, and human oversight.",
    type: "website",
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body
        className="min-h-full flex flex-col antialiased"
        style={{ background: "var(--bg)", color: "var(--text-primary)" }}
      >
        <ScrollProgress />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
