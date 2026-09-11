"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#about", label: "About", num: "01" },
  { href: "/#case-studies", label: "Case Studies", num: "02" },
  { href: "/#frameworks", label: "Frameworks", num: "03" },
  { href: "/#reflection", label: "Reflection", num: "04" },
  { href: "/#references", label: "References", num: "05" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(12,12,12,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        <div className="container-xl">
          <nav
            className="flex items-center justify-between transition-all duration-300"
            style={{ height: scrolled ? "56px" : "72px" }}
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex flex-col leading-none group"
              aria-label="Patrick Pio — Home"
            >
              <span
                className="font-semibold tracking-tight transition-colors"
                style={{
                  fontSize: scrolled ? "0.875rem" : "1rem",
                  color: "var(--text-primary)",
                }}
              >
                PATRICK PIO
              </span>
              <span
                className="label-gray transition-opacity"
                style={{ opacity: scrolled ? 0.6 : 0.8 }}
              >
                Responsible AI
              </span>
            </Link>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-8" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 group transition-colors duration-200"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    <span
                      className="label"
                      style={{ fontSize: "0.625rem", color: "var(--text-tertiary)" }}
                    >
                      {link.num}
                    </span>
                    <span
                      className="text-xs font-medium uppercase tracking-widest group-hover:text-[var(--text-primary)] transition-colors"
                      style={{ letterSpacing: "0.1em" }}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right: reg number */}
            <div className="hidden md:flex items-center gap-4">
              <span className="label-gray" style={{ letterSpacing: "0.08em" }}>
                2460420
              </span>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-sm transition-colors"
              style={{ color: "var(--text-secondary)" }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col"
            style={{ background: "var(--bg)", paddingTop: "72px" }}
          >
            <div className="container-xl flex-1">
              <ul className="flex flex-col divide-y" style={{ borderColor: "var(--border)" }}>
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center gap-4 py-6 group"
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="label" style={{ minWidth: "1.5rem", color: "var(--accent)" }}>
                        {link.num}
                      </span>
                      <span
                        className="text-2xl font-semibold tracking-tight"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {link.label}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8 pt-6" style={{ borderTop: "1px solid var(--border)" }}>
                <p className="label-gray">Patrick Pio · Reg. No. 2460420</p>
                <p className="label-gray mt-1">Computer Science · CHRIST University</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
