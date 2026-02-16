import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FloatingOcto from "@/components/FloatingOcto";
import Link from "next/link";
import { getPMStats, getForkcastUpgrades, getLatestCallSummary, getLatestEipChange } from "@/lib/github";
import { getAllPosts } from "@/lib/posts";

export const revalidate = 3600;

export default async function Home() {
  const [stats, upgrades, callSummary, eipChange] = await Promise.all([
    getPMStats(), getForkcastUpgrades(), getLatestCallSummary(), getLatestEipChange(),
  ]);
  const posts = getAllPosts();
  const heroUpdates: string[] = [];
  if (posts.length > 0) heroUpdates.push(`Blog: "${posts[0].frontmatter.title}"`);
  if (callSummary) heroUpdates.push(callSummary);
  if (eipChange) heroUpdates.push(eipChange);
  const done = upgrades.filter(u => u.status === "done").pop();
  const active = upgrades.find(u => u.status === "active");
  const planned = upgrades.find(u => u.status === "planned");
  const timelineItems = [
    done ? { name: done.name, pip: "done" } : { name: "Fusaka", pip: "done" },
    active ? { name: active.name, pip: "active" } : { name: "Glamsterdam", pip: "active" },
    planned ? { name: planned.name, pip: "planned" } : { name: "Hegota", pip: "planned" },
  ];
  return (
    <>
      <Navigation />

      <div className="relative z-10 max-w-[1100px] mx-auto page-container">
        {/* HERO */}
        <Hero updates={heroUpdates} />

        {/* CORE SYSTEMS */}
        <div className="divider">
          <div className="divider-line" />
          <span className="divider-text">Core Systems</span>
          <div className="divider-line" />
        </div>

        <section>
          <div className="bento-grid">
            {/* Forkcast — featured, wide */}
            <div className="card card-featured" style={{ gridColumn: "1 / 3" }}>
              <div className="flex justify-between items-start mb-3">
                <h3 style={{ fontSize: "1.3rem", fontWeight: 600, color: "var(--color-text-bright)" }}>Forkcast</h3>
                <span className="card-tag">Upgrade Tracker</span>
              </div>
              <p style={{ fontSize: "0.95rem", color: "var(--color-text-body)", lineHeight: 1.6, marginBottom: "1rem", flex: 1 }}>
                Track Ethereum network upgrades in real time. Monitor EIP inclusion, testnet activations,
                and mainnet readiness across every fork — from proposal to deployment.
              </p>
              <div className="flex items-center gap-4" style={{ marginBottom: "1rem" }}>
                <div className="upgrade-timeline" style={{ flexDirection: "row", gap: "0.5rem", margin: 0, flexWrap: "wrap" }}>
                  {timelineItems.map((item, i) => (
                    <span key={item.name} className="flex items-center" style={{ gap: "0.5rem" }}>
                      {i > 0 && <div style={{ width: 16, height: 1, background: "var(--color-text-dim)", alignSelf: "center" }} />}
                      <div className="upgrade-item">
                        <div className={`upgrade-pip upgrade-pip-${item.pip}`} />
                        <span style={{ color: item.pip === "active" ? "var(--color-text-bright)" : "var(--color-text-secondary)", fontWeight: item.pip === "active" ? 600 : 400 }}>{item.name}</span>
                      </div>
                    </span>
                  ))}
                </div>
              </div>
              <Link href="/forkcast" className="card-btn">Explore Forkcast <span>&rarr;</span></Link>
            </div>

            {/* PM Repository */}
            <div className="card">
              <div className="flex justify-between items-start mb-3">
                <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--color-text-bright)" }}>PM Repository</h3>
                <span className="card-tag">Coordination</span>
              </div>
              <p style={{ fontSize: "0.95rem", color: "var(--color-text-body)", lineHeight: 1.6, marginBottom: "1rem", flex: 1 }}>
                Central hub for Ethereum protocol coordination — AllCoreDevs calls, breakout rooms, EIP championing, and governance in the open.
              </p>
              <Link href="/pm-repo" className="card-btn">Explore Repository <span>&rarr;</span></Link>
            </div>

            {/* EPF */}
            <div className="card">
              <div className="flex justify-between items-start mb-3">
                <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--color-text-bright)" }}>Protocol Fellowship</h3>
                <span className="card-tag">Fellowship</span>
              </div>
              <p style={{ fontSize: "0.95rem", color: "var(--color-text-body)", lineHeight: 1.6, marginBottom: "1rem", flex: 1 }}>
                A cohort-based program for developers to learn Ethereum protocol internals through mentorship and hands-on contribution to core development.
              </p>
              <a href="https://epf.wiki" target="_blank" rel="noopener noreferrer" className="card-btn">Explore EPF <span style={{ fontSize: "0.75rem", opacity: 0.5 }}>{"\u2197"}</span></a>
            </div>

            {/* Study Group */}
            <div className="card">
              <div className="flex justify-between items-start mb-3">
                <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--color-text-bright)" }}>Study Group</h3>
                <span className="card-tag">Education</span>
              </div>
              <p style={{ fontSize: "0.95rem", color: "var(--color-text-body)", lineHeight: 1.6, marginBottom: "1rem", flex: 1 }}>
                Weekly educational sessions covering Ethereum protocol development — from EVM fundamentals to consensus mechanisms.
              </p>
              <a href="https://epf.wiki/#/eps/schedule" target="_blank" rel="noopener noreferrer" className="card-btn">View Schedule <span style={{ fontSize: "0.75rem", opacity: 0.5 }}>{"\u2197"}</span></a>
            </div>

            {/* Quick Links */}
            <div className="card">
              <div className="flex justify-between items-start mb-3">
                <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--color-text-bright)" }}>Quick Links</h3>
                <span className="card-tag">Resources</span>
              </div>
              <p style={{ fontSize: "0.95rem", color: "var(--color-text-body)", lineHeight: 1.6, marginBottom: "0.75rem" }}>
                Essential channels and tools for protocol developers.
              </p>
              <div className="quick-links-grid">
                <a href="https://www.youtube.com/@EthereumProtocol" target="_blank" rel="noopener noreferrer">
                  <svg width="14" height="14" viewBox="0 0 24 24" style={{ flexShrink: 0, opacity: 0.7, fill: "var(--coord-pink)" }}><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  Protocol YouTube <span style={{ marginLeft: "auto", fontSize: "0.9rem", color: "var(--color-text-muted)" }}>&rarr;</span>
                </a>
                <a href="https://discord.gg/a4gm9nT3Ty" target="_blank" rel="noopener noreferrer">
                  <svg width="14" height="14" viewBox="0 0 24 24" style={{ flexShrink: 0, opacity: 0.7, fill: "var(--coord-purple)" }}><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
                  R&D Discord <span style={{ marginLeft: "auto", fontSize: "0.9rem", color: "var(--color-text-muted)" }}>&rarr;</span>
                </a>
                <a href="https://github.com/ethereum/pm/issues?q=label%3AEIPOfficeHr" target="_blank" rel="noopener noreferrer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, opacity: 0.7, stroke: "var(--coord-yellow)" }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  EIP Office Hours <span style={{ marginLeft: "auto", fontSize: "0.9rem", color: "var(--color-text-muted)" }}>&rarr;</span>
                </a>
                <a href="https://ethereum.org/governance" target="_blank" rel="noopener noreferrer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, opacity: 0.7, stroke: "var(--coord-green)" }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  Ethereum Governance <span style={{ marginLeft: "auto", fontSize: "0.9rem", color: "var(--color-text-muted)" }}>&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section style={{ paddingTop: "7rem", paddingBottom: "4rem" }}>
          <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 3rem" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "var(--color-text-bright)", marginBottom: "1.25rem" }}>About Protocol Support</h2>
            <p style={{ fontSize: "1.05rem", color: "var(--color-text-body)", lineHeight: 1.75, marginBottom: "1rem" }}>
              Protocol Support is an Ethereum Foundation team dedicated to
              facilitating the protocol development process. We serve as the
              connective tissue between client teams, researchers, and the
              broader community.
            </p>
            <p style={{ fontSize: "1.05rem", color: "var(--color-text-body)", lineHeight: 1.75 }}>
              Our octopus mascot represents the many arms reaching into
              different areas of Ethereum development — from coordinating
              AllCoreDevs meetings to helping newcomers navigate the complex
              landscape of protocol governance.
            </p>
          </div>

          {/* Coordination Diagram — Full-width Centered Octopus */}
          <div className="coord-diagram" style={{ maxWidth: 700, margin: "0 auto" }}>
            {(() => {
              const cx = 350, cy = 250, r = 185;
              const arms = [
                { label: "Call facilitation", lines: ["Call", "facilitation"], color: "var(--coord-cyan)" },
                { label: "Client team coordination", lines: ["Client team", "coordination"], color: "var(--coord-purple)" },
                { label: "Core dev onboarding", lines: ["Core dev", "onboarding"], color: "var(--coord-green)" },
                { label: "Researcher onboarding", lines: ["Researcher", "onboarding"], color: "var(--coord-yellow)" },
                { label: "Governance legibility", lines: ["Governance", "legibility"], color: "var(--coord-pink)" },
                { label: "Stakeholder outreach", lines: ["Stakeholder", "outreach"], color: "var(--coord-orange)" },
                { label: "Project management", lines: ["Project", "management"], color: "var(--coord-indigo)" },
                { label: "Signal curation", lines: ["Signal", "curation"], color: "var(--coord-cyan-alt)" },
              ];
              const pts = arms.map((_, i) => {
                const angle = (-90 + i * 45) * Math.PI / 180;
                return { x: Math.round(cx + r * Math.cos(angle)), y: Math.round(cy + r * Math.sin(angle)) };
              });
              const ctrl = (i: number) => {
                const angle = (-90 + i * 45) * Math.PI / 180;
                const mid = r * 0.5;
                const perp = (i % 2 === 0 ? 1 : -1) * 45;
                return {
                  x: Math.round(cx + mid * Math.cos(angle) + perp * Math.cos(angle + Math.PI / 2)),
                  y: Math.round(cy + mid * Math.sin(angle) + perp * Math.sin(angle + Math.PI / 2)),
                };
              };
              return (
                <svg viewBox="0 0 700 500" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="coord-title coord-desc">
                  <title id="coord-title">Protocol Support Activities</title>
                  <desc id="coord-desc">An octopus diagram showing 8 areas Protocol Support works in: {arms.map(a => a.label).join(", ")}.</desc>

                  {/* Tentacle paths */}
                  {arms.map((arm, i) => {
                    const p = pts[i], c = ctrl(i);
                    return <path key={arm.label} className="tentacle" d={`M${cx} ${cy} Q${c.x} ${c.y} ${p.x} ${p.y}`} style={{ stroke: arm.color }} strokeWidth="2.5" opacity="0.6" aria-hidden="true" />;
                  })}

                  {/* Pulse ring */}
                  <circle cx={cx} cy={cy} r="46" className="coord-pulse" style={{ stroke: "var(--coord-cyan)" }} strokeWidth="1" opacity="0.3" aria-hidden="true">
                    <animate attributeName="r" values="46;62;46" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0.08;0.3" dur="3s" repeatCount="indefinite" />
                  </circle>

                  {/* Central octopus body */}
                  <circle cx={cx} cy={cy} r="40" className="coord-node-bg" style={{ stroke: "var(--coord-cyan)" }} strokeWidth="1.5" aria-hidden="true" />
                  {/* Octopus face */}
                  <circle cx={cx - 9} cy={cy - 12} r="3" style={{ fill: "var(--coord-cyan)" }} opacity="0.9" aria-hidden="true" />
                  <circle cx={cx + 9} cy={cy - 12} r="3" style={{ fill: "var(--coord-cyan)" }} opacity="0.9" aria-hidden="true" />
                  <circle cx={cx - 9} cy={cy - 12} r="1.2" style={{ fill: "var(--color-bg-deep, #0a0a14)" }} aria-hidden="true" />
                  <circle cx={cx + 9} cy={cy - 12} r="1.2" style={{ fill: "var(--color-bg-deep, #0a0a14)" }} aria-hidden="true" />
                  <text x={cx} y={cy + 14} textAnchor="middle" style={{ fill: "var(--coord-cyan)" }} fontSize="16" fontWeight="700" letterSpacing="0.08em" aria-hidden="true">PS</text>

                  {/* Endpoint dots + labels */}
                  {arms.map((arm, i) => {
                    const p = pts[i];
                    const angle = -90 + i * 45;
                    const norm = ((angle % 360) + 360) % 360;
                    const isTopBottom = (norm > 250 && norm < 290) || (norm > 70 && norm < 110);
                    const isLeft = norm > 110 && norm < 250;
                    const anchor = isTopBottom ? "middle" : isLeft ? "end" : "start";
                    const rad = (angle) * Math.PI / 180;
                    const offset = isTopBottom ? 26 : 18;
                    const tx = p.x + offset * Math.cos(rad);
                    const ty = p.y + offset * Math.sin(rad);
                    return (
                      <g key={arm.label} aria-hidden="true">
                        <circle cx={p.x} cy={p.y} r="5" style={{ fill: arm.color }} opacity="0.8" />
                        <text x={tx} y={ty - 5} textAnchor={anchor} style={{ fill: arm.color }} fontSize="13" fontWeight="600">{arm.lines[0]}</text>
                        <text x={tx} y={ty + 9} textAnchor={anchor} style={{ fill: arm.color }} fontSize="13" fontWeight="600">{arm.lines[1]}</text>
                      </g>
                    );
                  })}
                </svg>
              );
            })()}
          </div>

          {/* Stats Panel */}
          <div className="stats-panel" style={{ marginTop: "4rem" }}>
            <div className="stats-bar">
              <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--color-text-bright)", letterSpacing: "0.02em" }}>ethereum/pm</h3>
              <div className="flex items-center gap-1.5" style={{ fontSize: "0.7rem", color: "var(--color-blue)" }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--color-blue)", boxShadow: "0 0 6px var(--color-blue)", animation: "pulse 2s ease-in-out infinite" }} />
                Live from GitHub
              </div>
            </div>
            <div style={{ padding: "1rem 1.25rem" }}>
              {[
                { label: "ACDE Meeting Notes", value: String(stats.acdeMeetings), color: "var(--color-blue)" },
                { label: "ACDC Meeting Notes", value: String(stats.acdcMeetings), color: "var(--color-purple)" },
                { label: "Breakout Series", value: String(stats.breakoutSeries), color: "var(--coord-green)" },
                { label: "Repo Forks", value: String(stats.contributors), color: "var(--coord-yellow)" },
              ].map((stat, i, arr) => (
                <div key={stat.label} className="stat-row" style={i === arr.length - 1 ? { borderBottom: "none" } : {}}>
                  <span style={{ color: "var(--color-text-bright)" }}>{stat.label}</span>
                  <span style={{ fontWeight: 600, color: stat.color }}>{stat.value}</span>
                </div>
              ))}

              <div style={{ marginTop: "1rem" }}>
                <div className="activity-track">
                  <div className="activity-seg" style={{ flex: stats.acdeMeetings, background: "var(--color-blue)" }} />
                  <div className="activity-seg" style={{ flex: stats.acdcMeetings, background: "var(--color-purple)" }} />
                  <div className="activity-seg" style={{ flex: stats.breakoutSeries, background: "var(--coord-green)" }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <FloatingOcto />
    </>
  );
}
