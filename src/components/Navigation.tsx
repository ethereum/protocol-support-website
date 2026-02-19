"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/team", label: "Team" },
  { href: "/forkcast", label: "Forkcast" },
  {
    href: "/pm-repo",
    label: "PM Repo",
    children: [
      { href: "/pm-repo", label: "Overview" },
      { href: "/pm-repo/breakouts", label: "Breakouts" },
    ],
  },
  { href: "/blog", label: "Blog" },
  { href: "/contributing", label: "Contributing" },
  { href: "/resources", label: "Resources" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/pm-repo") return pathname === "/pm-repo";
    return pathname.startsWith(href);
  };

  const isPmActive = pathname.startsWith("/pm-repo");

  const openDropdown = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };
  const closeDropdown = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 200);
  };

  useEffect(() => {
    return () => { if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current); };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const linkStyle = (active: boolean) => ({
    fontSize: "0.8rem" as const,
    fontWeight: active ? 700 : 500,
    color: active ? "var(--color-text-bright)" : "var(--color-text-muted)",
    letterSpacing: "0.1em",
  });

  return (
    <>
    <nav className="fixed top-0 left-0 right-0 z-[100] nav-backdrop page-container" style={{
      borderBottom: "1px solid var(--color-border)",
    }}>
      <div className="max-w-[1100px] mx-auto flex justify-between items-center h-14">
        <Link href="/" className="flex items-center gap-2.5 no-underline" style={{
          fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.06em", color: "var(--color-text-bright)",
        }}>
          <img
            src="/octopus_blue.png"
            alt="Protocol Support"
            className="nav-logo-octo"
          />
          <span style={{ transform: "translateY(1px)" }}>PROTOCOL SUPPORT</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex gap-8 list-none items-center">
          {navLinks.map((link) => {
            if (link.children) {
              return (
                <li
                  key={link.href}
                  className="relative"
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                >
                  <Link
                    href={link.href}
                    className="no-underline uppercase transition-colors duration-200 flex items-center gap-1"
                    style={linkStyle(isPmActive)}
                    onMouseEnter={e => { if (!isPmActive) e.currentTarget.style.color = "var(--color-blue)"; }}
                    onMouseLeave={e => { if (!isPmActive) e.currentTarget.style.color = "var(--color-text-muted)"; }}
                  >
                    {link.label}
                    <svg
                      width="10" height="10" viewBox="0 0 10 10" fill="none"
                      style={{
                        stroke: "currentColor",
                        transition: "transform 0.2s ease",
                        transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <path d="M2.5 4L5 6.5L7.5 4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>

                  {/* Dropdown */}
                  {dropdownOpen && (
                    <div style={{
                      position: "absolute",
                      top: "100%",
                      left: "-0.75rem",
                      marginTop: "0.5rem",
                      minWidth: "180px",
                      background: "var(--color-bg-elevated)",
                      backdropFilter: "blur(16px)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "6px",
                      padding: "0.4rem 0",
                      boxShadow: "0 8px 24px rgba(0, 212, 255, 0.06)",
                      animation: "fadeSlideDown 0.15s ease-out",
                    }}>
                      {link.children.map((child, i) => {
                        const childActive = pathname === child.href;
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="no-underline block transition-colors duration-150"
                            style={{
                              padding: "0.5rem 1rem",
                              fontSize: "0.75rem",
                              letterSpacing: "0.06em",
                              color: childActive ? "var(--color-blue)" : "var(--color-text-muted)",
                              fontWeight: childActive ? 700 : 400,
                              borderLeft: childActive ? "2px solid var(--color-blue)" : "2px solid transparent",
                            }}
                            onMouseEnter={e => {
                              e.currentTarget.style.background = "rgba(0, 212, 255, 0.06)";
                              if (!childActive) e.currentTarget.style.color = "var(--color-text-bright)";
                            }}
                            onMouseLeave={e => {
                              e.currentTarget.style.background = "transparent";
                              if (!childActive) e.currentTarget.style.color = "var(--color-text-muted)";
                            }}
                          >
                            <span style={{ color: "var(--color-text-dim)", marginRight: "0.4rem", fontSize: "0.7rem" }}>
                              {i === 0 ? "├─" : "└─"}
                            </span>
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </li>
              );
            }

            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link href={link.href} className="no-underline uppercase transition-colors duration-200" style={linkStyle(active)}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.color = "var(--color-blue)"; }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.color = "var(--color-text-muted)"; }}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop theme toggle */}
        <div className="hidden lg:block">
          <ThemeToggle />
        </div>

        {/* Mobile: theme toggle + hamburger side by side */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="p-3"
            style={{ color: "var(--color-text-muted)" }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </nav>

    {/* Mobile full-screen overlay menu — must be outside <nav> because nav-backdrop's backdrop-filter breaks position:fixed on children */}
    {mobileMenuOpen && (
      <div className="lg:hidden" style={{
        position: "fixed",
        inset: 0,
        top: "3.5rem",
        zIndex: 99,
        background: "var(--color-bg-void)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <div className="flex flex-col items-center gap-4">
          {navLinks.map((link) => {
            if (link.children) {
              const expanded = mobileExpanded === link.href;
              return (
                <div key={link.href} className="flex flex-col items-center">
                  <button
                    type="button"
                    className="flex items-center gap-2 no-underline"
                    style={{
                      color: isPmActive ? "var(--color-text-bright)" : "var(--color-text-muted)",
                      fontWeight: isPmActive ? 700 : 500,
                      fontSize: "1.25rem",
                      letterSpacing: "0.04em",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "0.75rem 1rem",
                    }}
                    onClick={() => setMobileExpanded(expanded ? null : link.href)}
                  >
                    {link.label}
                    <svg width="14" height="14" viewBox="0 0 10 10" fill="none" style={{
                      stroke: "currentColor",
                      transition: "transform 0.2s ease",
                      transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                    }}>
                      <path d="M2.5 4L5 6.5L7.5 4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {expanded && (
                    <div className="flex flex-col items-center gap-2" style={{ marginBottom: "0.25rem" }}>
                      {link.children.map((child) => {
                        const childActive = pathname === child.href;
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="no-underline"
                            style={{
                              color: childActive ? "var(--color-blue)" : "var(--color-text-muted)",
                              fontWeight: childActive ? 700 : 400,
                              fontSize: "1rem",
                              padding: "0.6rem 1rem",
                            }}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className="no-underline"
                style={{
                  color: active ? "var(--color-text-bright)" : "var(--color-text-muted)",
                  fontWeight: active ? 700 : 500,
                  fontSize: "1.25rem",
                  letterSpacing: "0.04em",
                  padding: "0.75rem 1rem",
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    )}
    </>
  );
}
