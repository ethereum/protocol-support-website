import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingOcto from "@/components/FloatingOcto";
import Card from "@/components/Card";
import ScrollReveal from "@/components/ScrollReveal";
import StatCounter from "@/components/StatCounter";
import {
  BookIcon, GitHubIcon, YouTubeIcon, DiscordIcon,
  CodeIcon, GraduationCapIcon, UsersIcon, ShieldIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Fellowship",
  description:
    "Ethereum Protocol Fellowship (EPF) and Ethereum Protocol Studies (EPS). Programs for learning and contributing to Ethereum core development.",
};

const heroStats = [
  { number: "~50", label: "Long-term protocol contributors produced" },
  { number: "~$28K", label: "Cost per contributor" },
];

const supportingStats = [
  { number: "~500", label: "Average applicants per cohort" },
  { number: "~25", label: "Selected fellows per cohort" },
  { number: "82", label: "Total alumni across all cohorts" },
  { number: "92", label: "Projects completed" },
  { number: "7", label: "Protocol Guild members" },
];

const workAreas = [
  {
    title: "Client Implementations",
    description:
      "Working directly with client teams to deliver new features, optimizations or prototypes to execution and consensus clients \u2014 Lighthouse, Prysm, Nimbus, Nethermind, Lodestar, Grandine, Besu and others.",
    icon: <CodeIcon color="var(--coord-cyan)" />,
  },
  {
    title: "Protocol Testing & Tooling",
    description:
      "Testing and monitoring tools that help to keep Ethereum secure and deliver new upgrades flawlessly. Fellows have worked on fuzzers, spec tests, and other devops infrastructure that every client team depends on.",
    icon: <ShieldIcon color="var(--coord-purple)" />,
  },
  {
    title: "Research and Prototyping",
    description:
      "Prototyping ideas or EIPs, benchmarking and analysing future of Ethereum. Fellows helped to contribute to research like zkEVMs, PeerDAS, ePBS, Verkle while working directly with EF Research and client teams.",
    icon: <BookIcon color="var(--coord-green)" />,
  },
];

const clientTestimonials = [
  {
    quote:
      "EPF is a good way to curate potential contributors who have a baseline understanding of Ethereum so they\u2019re not as lost when contributing to our team.",
    name: "Phil",
    role: "Lodestar",
    short: false,
  },
  {
    quote:
      "Nimbus has gotten significant value out of EPF. We\u2019ve hired 3 people either directly or indirectly out of EPF. The EPF background, that exposure to the ecosystem, has proven useful.",
    name: "Dustin",
    role: "Nimbus",
    short: false,
  },
  {
    quote: "Sourcing talent is a great value-add from EPF.",
    name: "Alex Stokes",
    role: "Coordination",
    short: true,
  },
];

const fellowTestimonials = [
  {
    quote:
      "Ethereum Protocol Fellowship is a very well organized program and has helped me gained invaluable knowledge and skills, and connected me with many great individuals that shares the same passion, dreams and are going through a similar journey. I thoroughly enjoyed the program from start to finish, and the support from organizers and mentors were just amazing!",
    name: "Jimmy Chen",
    role: "now at Lighthouse",
  },
  {
    quote:
      "The EPF was an efficient program for getting involved in core development. Apart from improving my technical skills and knowledge, it also allowed me to have direct experience on how Ethereum community values translate to enjoyable collaboration with others.",
    name: "Ignacio Hagiopan",
    role: "now at EF Research",
  },
  {
    quote:
      "My experience with the Ethereum Foundation Fellowship was a turning point in my career. This journey has not only shaped my professional path but also culminated in joining Pimlico as a founding engineer. The Fellowship was an invaluable platform for innovation, collaboration, and career-defining opportunities in the blockchain domain.",
    name: "Garvit Khatri",
    role: "now at Pimlico",
  },
];

const epfSteps = [
  {
    num: "1",
    title: "Study the protocol",
    desc: <>Work through the EPS curriculum at <strong>epf.wiki</strong>. Review past cohort projects and identify areas of the protocol that interest you.</>,
  },
  {
    num: "2",
    title: "Review program details",
    desc: <>Read the program guide and FAQ in the cohort repository. Understand what a <strong>5-month project commitment</strong> looks like and what kinds of projects have been done.</>,
  },
  {
    num: "3",
    title: "Apply",
    desc: <>Applications open annually, typically in <strong>April&ndash;May</strong> for a June cohort start. Watch the EF blog and join the <strong>EPF mailing list</strong> to be notified.</>,
  },
  {
    num: "4",
    title: "Participate \u2014 selected or not",
    desc: <>EPF is <strong>fully permissionless</strong>. You can participate, access all resources, and contribute regardless of whether you receive a stipend. <strong>Retroactive stipends</strong> have been awarded to standout permissionless participants in every cohort.</>,
  },
];

const epsSteps = [
  {
    num: "1",
    title: "Start at epf.wiki",
    desc: <>The wiki is the canonical resource \u2014 protocol docs, past session recordings, research pointers, and a <strong>community-built knowledge base</strong>.</>,
  },
  {
    num: "2",
    title: "Join the live cohort",
    desc: <>EPS runs annually, typically starting in <strong>February&ndash;March</strong> ahead of the EPF cohort. Sessions are <strong>90 minutes weekly</strong>, covering a different part of the protocol stack each week. <strong>No application required</strong>.</>,
  },
  {
    num: "3",
    title: "Contribute to the wiki",
    desc: <>EPS participants collaboratively build and expand epf.wiki alongside the curriculum. Contributing to the wiki is one of the best ways to <strong>solidify protocol knowledge</strong>.</>,
  },
];

const resources = [
  {
    title: "EPF Wiki",
    description: "The canonical resource for Ethereum protocol education \u2014 curriculum, documentation, research pointers, and a community-maintained knowledge base built by EPS participants.",
    href: "https://epf.wiki",
    external: true,
    icon: <BookIcon color="var(--coord-cyan)" />,
  },
  {
    title: "EPF GitHub Organization",
    description: "All cohort repositories, past project write-ups, program guides, and FAQs. Browse to find project inspiration and understand what a cohort looks like in practice.",
    href: "https://github.com/eth-protocol-fellows",
    external: true,
    icon: <GitHubIcon color="var(--coord-purple)" />,
  },
  {
    title: "EPF YouTube",
    description: "Recordings of all Protocol Studies sessions and EPF Day presentations.",
    href: "https://www.youtube.com/@ethprotocolfellows",
    external: true,
    icon: <YouTubeIcon color="var(--coord-orange)" />,
  },
  {
    title: "EPS Discord",
    description: "The primary async coordination channel for core devs. Join to follow protocol discussions, ask questions, and connect with the community.",
    href: "https://discord.gg/a4gm9nT3Ty",
    external: true,
    icon: <DiscordIcon color="var(--coord-indigo)" />,
  },
];

const pathStages = [
  {
    color: "var(--coord-green)",
    label: "Study",
    title: "EPS is the on-ramp",
    desc: "It provides a structured foundation in protocol internals \u2014 execution, consensus, cryptography, the roadmap \u2014 that makes EPF contributions more effective. Many successful EPF fellows came through EPS first.",
  },
  {
    color: "var(--color-blue)",
    label: "Build",
    title: "EPF is where contribution happens",
    desc: "Fellows work on real projects scoped with client teams and researchers: client implementations, spec work, testing tooling, cryptography research, and more.",
  },
  {
    color: "var(--coord-purple)",
    label: "Grow",
    title: "After the fellowship",
    desc: "Contributors go many directions \u2014 full-time roles at client teams, EF research positions, ESP grants for continued independent work, or ongoing permissionless contribution.",
  },
];

export default function FellowshipPage() {
  return (
    <>
      <Navigation />
      <div className="relative z-10 max-w-[1100px] mx-auto page-container">
        {/* Header */}
        <div className="page-header fellowship-header">
          <div className="fellowship-header-text">
            <h1 className="page-title">Protocol Fellowship<br />& Studies</h1>
            <p className="page-desc">
              EPF and EPS are Protocol Support&apos;s two programs for bringing new
              contributors into Ethereum core development &mdash; one for learning
              the protocol, one for building it.
            </p>
            <p className="page-desc" style={{ marginTop: "1rem" }}>
              EPF is fully permissionless. You don&apos;t need to be selected to participate.
            </p>

            {/* Action row */}
            <div className="hero-actions">
              <a href="https://epf.wiki" target="_blank" rel="noopener noreferrer" className="card-btn">
                Explore EPF Wiki <span style={{ fontSize: "0.7rem" }}>{"\u2197"}</span>
              </a>
              <span className="cohort-text">Next cohort: applications open April 2026</span>
            </div>

          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/epfsg_hero_cropped.jpg"
            alt="Ethereum Protocol Fellowship"
            className="fellowship-header-img"
          />

        </div>

        <div className="page-divider" />

        {/* The Two Programs */}
        <ScrollReveal>
          <section className="section">
            <h2 className="section-title">The Two Programs</h2>
            <div className="programs-grid">
              <div className="card card-featured card-featured--green">
                <div style={{ marginBottom: "0.75rem" }}>
                  <GraduationCapIcon color="var(--coord-green)" />
                </div>
                <div style={{ marginBottom: "0.5rem" }}>
                  <span className="card-tag" style={{ color: "var(--coord-green)", background: "rgba(52,211,153,0.1)" }}>Education</span>
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--color-text-bright)", marginBottom: "0.75rem" }}>
                  Ethereum Protocol Studies
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-body)", lineHeight: 1.7, marginBottom: "1rem" }}>
                  A structured curriculum for learning Ethereum protocol internals.
                  Ten weeks of live sessions covering execution, consensus, networking,
                  cryptography, and the research roadmap &mdash; open to everyone, no application required.
                </p>
                <a href="https://epf.wiki/#/eps/intro" target="_blank" rel="noopener noreferrer" className="card-btn" style={{ marginTop: "auto" }}>
                  epf.wiki/eps <span style={{ fontSize: "0.7rem" }}>{"\u2192"}</span>
                </a>
              </div>
              <div className="card card-featured card-featured--cyan">
                <div style={{ marginBottom: "0.75rem" }}>
                  <UsersIcon color="var(--coord-cyan)" />
                </div>
                <div style={{ marginBottom: "0.5rem" }}>
                  <span className="card-tag">Fellowship</span>
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--color-text-bright)", marginBottom: "0.75rem" }}>
                  Ethereum Protocol Fellowship
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-body)", lineHeight: 1.7, marginBottom: "1rem" }}>
                  A 5-month cohort for developers contributing to Ethereum core R&D.
                  Fellows work on real projects alongside client teams and researchers,
                  with mentorship and a monthly stipend for selected participants.
                  Fully permissionless &mdash; anyone can join.
                </p>
                <a href="https://epf.wiki" target="_blank" rel="noopener noreferrer" className="card-btn" style={{ marginTop: "auto" }}>
                  epf.wiki <span style={{ fontSize: "0.7rem" }}>{"\u2192"}</span>
                </a>
              </div>
            </div>

            {/* Comparison strip */}
            <div className="comparison-strip">
              <div className="comparison-row comparison-header">
                <div></div>
                <div style={{ color: "var(--coord-green)" }}>EPS</div>
                <div style={{ color: "var(--color-blue)" }}>EPF</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-label">Duration</div>
                <div>10 weeks</div>
                <div>5 months</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-label">Application</div>
                <div>None required</div>
                <div>Competitive</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-label">Format</div>
                <div>Weekly sessions</div>
                <div>Project-based</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-label">Output</div>
                <div>Protocol knowledge</div>
                <div>Shipped contribution</div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* The Path — vertical timeline */}
        <ScrollReveal>
          <section className="section section--major">
            <h2 className="section-title">The Path</h2>
            <p style={{ color: "var(--color-text-body)", fontSize: "0.95rem", lineHeight: 1.75, maxWidth: "720px", marginBottom: "2rem" }}>
              EPS and EPF are designed to work together, but each stands on its own.
            </p>
            <div className="path-timeline">
              {pathStages.map((stage, i) => (
                <div key={stage.label} className="path-stage" style={{ "--stage-color": stage.color } as React.CSSProperties}>
                  <div className="path-rail">
                    <div className="path-node" />
                    {i < pathStages.length - 1 && <div className="path-connector" />}
                  </div>
                  <div className="path-content">
                    <span className="path-label">{stage.label}</span>
                    <h3 className="path-title">{stage.title}</h3>
                    <p className="path-desc">{stage.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <div className="divider divider--tight">
          <div className="divider-line" />
          <span className="divider-text">EPF in Numbers</span>
          <div className="divider-line" />
        </div>

        {/* Stats — bento grid: 2 hero + 5 supporting in 2 rows */}
        <section className="section stats-band" style={{ paddingTop: "0.5rem" }}>
          <ScrollReveal stagger={80}>
            <div className="stats-bento">
              {heroStats.map((stat) => (
                <div key={stat.label} className="stat-block stat-block--hero reveal-child">
                  <StatCounter value={stat.number} className="stat-number" />
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
              {supportingStats.map((stat) => (
                <div key={stat.label} className="stat-block reveal-child">
                  <StatCounter value={stat.number} className="stat-number" />
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* Work Areas */}
        <ScrollReveal stagger={120}>
          <section className="section section--major">
            <h2 className="section-title">What Fellows Work On</h2>
            <div className="card-grid">
              {workAreas.map((area) => (
                <div key={area.title} className="card reveal-child">
                  <div style={{ marginBottom: "0.75rem" }}>{area.icon}</div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--color-text-bright)", marginBottom: "0.5rem" }}>
                    {area.title}
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--color-text-body)", lineHeight: 1.7 }}>
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <div className="divider divider--left divider--tight">
          <span className="divider-text">Testimonials</span>
          <div className="divider-line" />
        </div>

        {/* Testimonials - Client Teams */}
        <ScrollReveal stagger={100}>
          <section className="section" style={{ paddingTop: "0.5rem" }}>
            <h2 className="section-title" style={{ fontSize: "1.15rem", marginBottom: "1rem" }}>What Client Teams Say</h2>
            <div className="card-grid">
              {clientTestimonials.map((t) => (
                <div key={t.name} className={`reveal-child ${t.short ? "testimonial-pullquote" : "testimonial-card"}`}>
                  <blockquote>{t.quote}</blockquote>
                  <div className="testimonial-attr">
                    <strong>{t.name}</strong> &middot; {t.role}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Testimonials - Fellows */}
        <ScrollReveal stagger={100}>
          <section className="section" style={{ paddingTop: "0" }}>
            <h2 className="section-title" style={{ fontSize: "1.15rem" }}>What Fellows Say</h2>
            <div className="card-grid">
              {fellowTestimonials.map((t) => (
                <div key={t.name} className="testimonial-card reveal-child">
                  <blockquote>{t.quote}</blockquote>
                  <div className="testimonial-attr">
                    <strong>{t.name}</strong>
                    <span className="outcome-tag">{t.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <div className="divider divider--silent" />

        {/* Get Involved — side by side */}
        <ScrollReveal>
          <section className="section section--major">
            <h2 className="section-title" style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", marginBottom: "2rem" }}>Get Involved</h2>
            <div className="involve-grid">
              {/* EPS Track */}
              <div className="involve-track involve-track--green">
                <div style={{ marginBottom: "0.25rem" }}>
                  <GraduationCapIcon color="var(--coord-green)" />
                </div>
                <h3 className="involve-track-title" style={{ color: "var(--coord-green)" }}>I want to study</h3>
                <span className="involve-track-meta" style={{ color: "var(--coord-green)" }}>No application required</span>
                <div className="involve-steps">
                  {epsSteps.map((step) => (
                    <div key={step.num} className="involve-step">
                      <span className="step-badge" style={{ borderColor: "var(--coord-green)", color: "var(--coord-green)" }}>
                        {step.num}
                      </span>
                      <div>
                        <h4 style={{ fontWeight: 600, color: "var(--color-text-bright)", marginBottom: "0.3rem", fontSize: "0.95rem" }}>
                          {step.title}
                        </h4>
                        <p style={{ color: "var(--color-text-body)", fontSize: "0.85rem", lineHeight: 1.6 }}>
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <a href="https://epf.wiki/#/eps/intro" target="_blank" rel="noopener noreferrer" className="card-btn card-btn--green" style={{ marginTop: "auto" }}>
                  View the 2026 schedule <span style={{ fontSize: "0.7rem" }}>{"\u2197"}</span>
                </a>
              </div>

              {/* EPF Track */}
              <div className="involve-track involve-track--cyan">
                <div style={{ marginBottom: "0.25rem" }}>
                  <UsersIcon color="var(--coord-cyan)" />
                </div>
                <h3 className="involve-track-title" style={{ color: "var(--color-blue)" }}>I want to build</h3>
                <span className="involve-track-meta" style={{ color: "var(--color-blue)" }}>5-month commitment</span>
                <div className="involve-steps">
                  {epfSteps.map((step, i) => (
                    <div key={step.num} className="involve-step">
                      <span className="step-badge step-badge--progress" style={{ "--step-progress": `${(i + 1) / epfSteps.length}` } as React.CSSProperties}>
                        {step.num}
                      </span>
                      <div>
                        <h4 style={{ fontWeight: 600, color: "var(--color-text-bright)", marginBottom: "0.3rem", fontSize: "0.95rem" }}>
                          {step.title}
                        </h4>
                        <p style={{ color: "var(--color-text-body)", fontSize: "0.85rem", lineHeight: 1.6 }}>
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <a href="https://epf.wiki" target="_blank" rel="noopener noreferrer" className="card-btn" style={{ marginTop: "auto" }}>
                  Apply to EPF <span style={{ fontSize: "0.7rem" }}>{"\u2197"}</span>
                </a>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Related Resources */}
        <ScrollReveal stagger={100}>
          <section className="section">
            <h2 className="section-title">Related Resources</h2>
            <div className="card-grid">
              {resources.map((r) => (
                <Card
                  key={r.href}
                  href={r.href}
                  external={r.external}
                  title={r.title}
                  description={r.description}
                  icon={r.icon}
                  className="reveal-child"
                />
              ))}
            </div>
          </section>
        </ScrollReveal>

        <Footer />
      </div>
      <FloatingOcto />
    </>
  );
}
