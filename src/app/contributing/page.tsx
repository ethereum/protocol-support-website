import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingOcto from "@/components/FloatingOcto";
import Card from "@/components/Card";
import Link from "next/link";
import {
  ForkIcon, CodeIcon, BookIcon, GraduationCapIcon,
  CalendarIcon, BriefcaseIcon, ShieldIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contributing",
  description:
    "Get involved in Ethereum protocol development. Learn how to contribute to core development, join AllCoreDevs, and participate in the Protocol Fellowship.",
};

const openSourceProjects = [
  {
    title: "Contribute to Forkcast",
    description: "Help improve the Ethereum upgrade tracking tool. Check out the contributing guide to get started.",
    href: "https://github.com/ethereum/forkcast/blob/main/CONTRIBUTING.md",
    external: true,
    icon: <ForkIcon color="var(--coord-cyan)" />,
  },
  {
    title: "Protocol Studies",
    description: "Contribute to the Protocol Studies repository \u2014 educational content and research on Ethereum protocol.",
    href: "https://github.com/eth-protocol-fellows/protocol-studies/",
    external: true,
    icon: <CodeIcon color="var(--coord-purple)" />,
  },
];

const fellowships = [
  {
    title: "Ethereum Protocol Fellowship",
    description: "A program for developers to dive deep into Ethereum protocol development with mentorship from core developers.",
    href: "https://epf.wiki",
    external: true,
    icon: <BookIcon color="var(--coord-green)" />,
  },
  {
    title: "Academic Secretariat Fellowship",
    description: "A PhD fellowship supporting academic research aligned with Ethereum protocol development.",
    href: "https://blog.ethereum.org/2026/02/05/phd-fellowship",
    external: true,
    icon: <GraduationCapIcon color="var(--coord-yellow)" />,
  },
  {
    title: "EPF Study Group",
    description: "Weekly study sessions covering Ethereum protocol topics, from consensus to execution layer internals.",
    href: "https://epf.wiki/#/eps/schedule",
    external: true,
    icon: <CalendarIcon color="var(--coord-pink)" />,
  },
];

const jobs = [
  {
    title: "Ethereum Foundation Jobs",
    description: "Explore open positions at the Ethereum Foundation across research, development, and operations.",
    href: "https://jobs.ashbyhq.com/ethereum-foundation",
    external: true,
    icon: <BriefcaseIcon color="var(--coord-cyan-alt)" />,
  },
  {
    title: "EthStaker",
    description: "Join the community of Ethereum validators and home stakers. Help secure the network.",
    href: "https://ethstaker.org/",
    external: true,
    icon: <ShieldIcon color="var(--coord-green)" />,
  },
];

export default function ContributingPage() {
  return (
    <>
      <Navigation />
      <div className="relative z-10 max-w-[1100px] mx-auto page-container">
        <div className="page-header">
          <h1 className="page-title">Start Contributing</h1>
          <p className="page-desc">
            Ethereum is built by thousands of contributors worldwide. Find your
            path to making an impact on the protocol.
          </p>
        </div>
        <div className="page-divider" />

        {/* Open Source */}
        <section className="section">
          <h2 className="section-title">Open Source</h2>
          <p style={{ color: "var(--color-text-body)", fontSize: "0.95rem", marginBottom: "1.25rem" }}>
            Contribute directly to the tools and resources used by the Ethereum protocol community.
          </p>
          <div className="card-grid">
            {openSourceProjects.map((project) => (
              <Card
                key={project.href}
                href={project.href}
                external={project.external}
                title={project.title}
                description={project.description}
                icon={project.icon}
              />
            ))}
          </div>
        </section>

        {/* Fellowships */}
        <section className="section">
          <h2 className="section-title">Internships & Fellowships</h2>
          <p style={{ color: "var(--color-text-body)", fontSize: "0.95rem", marginBottom: "1.25rem" }}>
            Programs designed to help newcomers dive deep into Ethereum protocol
            development with mentorship and structure.
          </p>
          <div className="card-grid">
            {fellowships.map((fellowship) => (
              <Card
                key={fellowship.href}
                href={fellowship.href}
                external={fellowship.external}
                title={fellowship.title}
                description={fellowship.description}
                icon={fellowship.icon}
              />
            ))}
          </div>
        </section>

        {/* Jobs */}
        <section className="section">
          <h2 className="section-title">Jobs & Community</h2>
          <div className="card-grid">
            {jobs.map((item) => (
              <Card
                key={item.href}
                href={item.href}
                external={item.external}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </section>

        {/* Getting Oriented */}
        <section className="section">
          <h2 className="section-title">Not Sure Where to Start?</h2>
          <div className="flex flex-col gap-4">
            {[
              {
                num: "1",
                title: "Understand the landscape",
                desc: (
                  <>
                    Start by exploring our{" "}
                    <Link href="/pm-repo" className="link-blue">PM Repository Guide</Link>{" "}
                    to understand how Ethereum protocol development is coordinated.
                  </>
                ),
              },
              {
                num: "2",
                title: "Join the community",
                desc: (
                  <>
                    Connect with other contributors on{" "}
                    <a href="https://discord.gg/a4gm9nT3Ty" target="_blank" rel="noopener noreferrer" className="link-blue">Discord</a>{" "}
                    and{" "}
                    <a href="https://ethereum-magicians.org/" target="_blank" rel="noopener noreferrer" className="link-blue">Ethereum Magicians</a>.
                    Introduce yourself and ask questions.
                  </>
                ),
              },
              {
                num: "3",
                title: "Start learning",
                desc: (
                  <>
                    The{" "}
                    <a href="https://epf.wiki" target="_blank" rel="noopener noreferrer" className="link-blue">EPF Wiki</a>{" "}
                    is an excellent resource for learning about Ethereum protocol
                    internals, from the execution layer to consensus mechanisms.
                  </>
                ),
              },
              {
                num: "4",
                title: "Find your niche",
                desc: "Ethereum needs contributors of all kinds\u2014developers, researchers, writers, educators, and community builders. Find what excites you and dive in.",
              },
            ].map((step) => (
              <div key={step.num} className="card">
                <div className="step-card-layout">
                  <span className="step-badge">{step.num}</span>
                  <div>
                    <h3 style={{ fontWeight: 600, color: "var(--color-text-bright)", marginBottom: "0.4rem" }}>
                      {step.title}
                    </h3>
                    <p style={{ color: "var(--color-text-body)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
      <FloatingOcto />
    </>
  );
}
