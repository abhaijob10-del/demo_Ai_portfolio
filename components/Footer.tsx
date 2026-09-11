import Link from "next/link";
import { student } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{ borderColor: "var(--border)", background: "var(--bg-2)" }}
    >
      <div className="container-xl py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <p
              className="font-semibold mb-3"
              style={{ fontSize: "1.125rem", letterSpacing: "-0.02em", color: "var(--text-primary)" }}
            >
              PATRICK PIO
            </p>
            <p className="label-gray mb-1">Responsible Artificial Intelligence</p>
            <p className="label-gray">{student.department}</p>
            <p className="label-gray">{student.institution}</p>
            <p className="label-gray">{student.campus}</p>
            <p className="label-gray mt-1">Reg. No. {student.regNo}</p>
          </div>

          {/* Navigation */}
          <div>
            <p className="label mb-4">Navigate</p>
            <ul className="flex flex-col gap-2">
              {[
                { href: "/#about", label: "About the Portfolio" },
                { href: "/#case-studies", label: "Case Studies" },
                { href: "/#frameworks", label: "Ethical Frameworks" },
                { href: "/#reflection", label: "Reflection" },
                { href: "/#references", label: "References" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-200"
                    style={{ fontSize: "0.875rem", color: "var(--text-tertiary)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Statement */}
          <div className="flex flex-col justify-between">
            <blockquote>
              <p
                className="font-medium leading-relaxed mb-6"
                style={{ color: "var(--text-secondary)", fontSize: "1rem", fontStyle: "italic" }}
              >
                &ldquo;Technology is powerful.
                <br />
                Responsible technology is accountable.&rdquo;
              </p>
            </blockquote>
            <div>
              <div className="h-px mb-6" style={{ background: "var(--border)" }} />
              <p style={{ fontSize: "0.8125rem", color: "var(--text-tertiary)" }}>
                &copy; 2026 Patrick Pio. Academic Portfolio.
              </p>
              <p style={{ fontSize: "0.8125rem", color: "var(--text-tertiary)", marginTop: "0.25rem" }}>
                CHRIST (Deemed to be University) · Kengeri Campus
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
