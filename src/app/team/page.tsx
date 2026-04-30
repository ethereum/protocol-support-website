import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingOcto from "@/components/FloatingOcto";
import TeamMemberCard from "@/components/TeamMemberCard";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the Protocol Support team coordinating Ethereum core development, AllCoreDevs calls, and contributor onboarding.",
};

const teamMembers = [
  {
    name: "Josh Davis",
    role: "EPF / EF Internship",
    image: "/team-josh.jpg",
    twitter: "joshdavislight",
    github: "joshdavislight",
  },
  {
    name: "Marc Garreau",
    role: "Team Lead",
    image: "/team-wolovim.png",
    twitter: "wolovim",
    github: "wolovim",
  },
  {
    name: "Mario Havel",
    role: "EPF / Study Group",
    image: "/team-mario.jpg",
    twitter: "TMIYChao",
    github: "taxmeifyoucan",
  },
  {
    name: "Butta",
    role: "Stakeholder Outreach",
    image: "/team-butta.jpg",
    twitter: "Butta_eth",
    github: "Buttaa",
  },
  {
    name: "Dionysuz",
    role: "Forkcast / ACDbot",
    image: "/team-dionysuz.png",
    twitter: "dionysuzx",
    github: "dionysuzx",
  },
];

export default function TeamPage() {
  return (
    <>
      <Navigation />
      <div className="relative z-10 max-w-[1100px] mx-auto page-container">
        <div className="page-header">
          <h1 className="page-title">Meet the Team</h1>
          <p className="page-desc">
            The Protocol Support team coordinates Ethereum core development,
            facilitates AllCoreDevs calls, and helps contributors navigate the
            ecosystem.
          </p>
        </div>
        <div className="page-divider" />

        {/* Team Grid */}
        <section className="section">
          <div className="card-grid">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                twitter={member.twitter}
                github={member.github}
              />
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="section">
          <h2 className="section-title">Get in Touch</h2>
          <p style={{ color: "var(--color-text-body)", fontSize: "0.95rem", lineHeight: 1.75, marginBottom: "1.5rem", maxWidth: 650 }}>
            Reach the Protocol Support team through any of these channels.
          </p>
          <div className="flex flex-wrap gap-6" style={{ alignItems: "center" }}>
            <a href="https://x.com/efprotocol" target="_blank" rel="noopener noreferrer" className="link-blue" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.95rem" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.7 }}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              @efprotocol
            </a>
            <span style={{ color: "var(--color-text-dim)" }}>·</span>
            <a href="mailto:protocolsupport@ethereum.org" className="link-blue" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.95rem" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              protocolsupport@ethereum.org
            </a>
          </div>
        </section>

        <Footer />
      </div>
      <FloatingOcto />
    </>
  );
}
