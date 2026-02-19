import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingOcto from "@/components/FloatingOcto";
import Card from "@/components/Card";
import Link from "next/link";
import { getPMRepoReadme, getRecentMeetings, getForkcastUpgrades, getActiveBreakouts } from "@/lib/github";
import {
  CalendarIcon, MessageCircleIcon, FileTextIcon,
  MapIcon, ArchiveIcon, GitHubIcon,
} from "@/components/Icons";

export const revalidate = 3600;

export default async function PMRepoPage() {
  const [readme, executionMeetings, consensusMeetings, upgrades, breakouts] = await Promise.all([
    getPMRepoReadme(),
    getRecentMeetings("execution", 3),
    getRecentMeetings("consensus", 3),
    getForkcastUpgrades(),
    getActiveBreakouts(),
  ]);

  return (
    <>
      <Navigation />
      <div className="relative z-10 max-w-[1100px] mx-auto page-container">
        <div className="page-header">
          <h1 className="page-title">The PM Repository</h1>
          <p className="page-desc">
            The ethereum/pm repository is the central hub for Ethereum protocol
            coordination, meeting notes, and scheduling.
          </p>
          <a href="https://github.com/ethereum/pm" target="_blank" rel="noopener noreferrer" className="card-btn" style={{ marginTop: "1.5rem" }}>
            View on GitHub <span>&rarr;</span>
          </a>
        </div>
        <div className="page-divider" />

        {/* What's in the PM Repo */}
        <section className="section">
          <h2 className="section-title">What&apos;s in the PM Repo?</h2>
          <div className="card-grid">
            <Card title="AllCoreDevs Meetings" description="Notes and recordings from bi-weekly execution and consensus layer calls." href="https://github.com/ethereum/pm/tree/master/AllCoreDevs-Meetings" external icon={<CalendarIcon color="var(--coord-cyan)" />} />
            <Card title="Breakout Rooms" description="Focused technical discussions on specific topics. View active series or schedule one." href="/pm-repo/breakouts" icon={<MessageCircleIcon color="var(--coord-green)" />} />
            <Card title="Championing an EIP" description="A guide to shepherding an EIP through the process to protocol inclusion." href="https://github.com/ethereum/pm/blob/master/processes/2026_championing_an_EIP.md" external icon={<FileTextIcon color="var(--coord-yellow)" />} />
            <Card title="Protocol Upgrade Process" description="An overview of how the Ethereum network upgrade process works." href="https://github.com/ethereum/pm/blob/master/processes/protocol-upgrade.md" external icon={<MapIcon color="var(--coord-purple)" />} />
            <Card title="Active Breakout Series" description="Breakout calls that have had a call within the last three months." href="https://github.com/ethereum/pm/blob/master/Breakout-Room-Meetings/active-breakout-series.md" external icon={<GitHubIcon color="var(--coord-pink)" />} />
            <Card title="Upgrade Archive" description="Historical archive of fork development, incident postmortems, and records." href="https://github.com/ethereum/pm/tree/master/Network-Upgrade-Archive" external icon={<ArchiveIcon color="var(--coord-cyan-alt)" />} />
          </div>
        </section>

        {/* Key Workflows */}
        <section className="section">
          <h2 className="section-title">Key Workflows</h2>
          <div className="bento-grid">
            {/* Breakout Rooms */}
            <div className="card">
              <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--color-text-bright)", marginBottom: "0.5rem" }}>Breakout Rooms</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-body)", lineHeight: 1.6, marginBottom: "1rem" }}>
                Focused technical discussions on specific protocol topics. Anyone can propose a breakout for deep-dives on EIPs, research, or cross-team coordination.
              </p>
              <div className="flex flex-wrap gap-x-1.5 gap-y-0" style={{ marginBottom: "1rem", lineHeight: 1.7 }}>
                {breakouts.slice(0, 6).map((b, i) => {
                  const short = b.name.replace(/ Breakout Room$| Breakout$| Meeting$| Community Call$| Working Group$/i, "");
                  return (
                    <span key={b.name} style={{ fontSize: "0.75rem", color: "var(--color-text-secondary)", whiteSpace: "nowrap" }}>
                      {short}{i < Math.min(breakouts.length, 6) - 1 ? " ·" : ""}
                    </span>
                  );
                })}
              </div>
              <Link href="/pm-repo/breakouts" className="card-btn">View Breakouts <span>&rarr;</span></Link>
            </div>

            {/* Championing an EIP */}
            <div className="card">
              <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--color-text-bright)", marginBottom: "0.5rem" }}>Championing an EIP</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-body)", lineHeight: 1.6, marginBottom: "1rem" }}>
                A guide to shepherding an EIP through the protocol inclusion process — from draft to mainnet.
              </p>
              <div className="eip-flow" style={{ marginBottom: "1rem" }}>
                {["Draft", "Review", "Champion", "ACD", "Devnet", "Testnet", "Mainnet"].map((step, i, arr) => (
                  <span key={step}>
                    <span style={{ color: i < 3 ? "var(--color-blue)" : "var(--color-text-dim)", fontWeight: i < 3 ? 600 : 400 }}>
                      {step}
                    </span>
                    {i < arr.length - 1 && <span style={{ color: "var(--color-text-dim)", margin: "0 0.15rem" }}>&rarr;</span>}
                  </span>
                ))}
              </div>
              <a href="https://github.com/ethereum/pm/blob/master/processes/2026_championing_an_EIP.md" target="_blank" rel="noopener noreferrer" className="card-btn">Read the Guide <span style={{ fontSize: "0.75rem", opacity: 0.5 }}>{"\u2197"}</span></a>
            </div>

            {/* Protocol Upgrades */}
            <div className="card">
              <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--color-text-bright)", marginBottom: "0.5rem" }}>Protocol Upgrades</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-body)", lineHeight: 1.6, marginBottom: "1rem" }}>
                How Ethereum coordinates and ships network upgrades across all client teams.
              </p>
              <div className="upgrade-timeline" style={{ marginBottom: "1rem" }}>
                {upgrades.map((u, i) => (
                  <span key={u.id} className="contents">
                    {i > 0 && <div className="upgrade-connector" />}
                    <div className="upgrade-item">
                      <div className={`upgrade-pip upgrade-pip-${u.status}`} />
                      <span style={{ color: u.status === "active" ? "var(--color-text-bright)" : "var(--color-text-secondary)", fontWeight: u.status === "active" ? 600 : 400 }}>{u.name}</span>
                    </div>
                  </span>
                ))}
              </div>
              <a href="https://github.com/ethereum/pm/blob/master/processes/protocol-upgrade.md" target="_blank" rel="noopener noreferrer" className="card-btn">Upgrade Process <span style={{ fontSize: "0.75rem", opacity: 0.5 }}>{"\u2197"}</span></a>
            </div>
          </div>
        </section>

        {/* How ACD Works */}
        <section className="section">
          <div className="card">
            <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--color-text-bright)", marginBottom: "1rem" }}>
              How AllCoreDevs Works
            </h3>
            <div style={{ color: "var(--color-text-body)", fontSize: "0.95rem", lineHeight: 1.7 }}>
              <p style={{ marginBottom: "0.75rem" }}>
                AllCoreDevs (ACD) calls happen bi-weekly and alternate between
                execution layer (ACDE) and consensus layer (ACDC) topics:
              </p>
              <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", marginBottom: "0.75rem" }}>
                <li><strong style={{ color: "var(--color-text-bright)" }}>ACDE</strong> — Execution Layer (EVM, transaction processing, state management)</li>
                <li><strong style={{ color: "var(--color-text-bright)" }}>ACDC</strong> — Consensus Layer (proof-of-stake, validators, finality)</li>
              </ul>
              <p>
                Anyone can watch live or view recordings on the{" "}
                <a href="https://www.youtube.com/@EthereumProtocol" target="_blank" rel="noopener noreferrer" className="link-blue">
                  Ethereum Protocol YouTube channel
                </a>.
              </p>
            </div>
          </div>
        </section>

        {/* Recent Meetings */}
        <section className="section">
          <h2 className="section-title">Recent Meeting Notes</h2>
          <div className="meetings-grid">
            <div>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--color-blue)", marginBottom: "0.75rem" }}>Execution Layer (ACDE)</h3>
              {executionMeetings.length > 0 ? (
                <div className="flex flex-col gap-2">
                  {executionMeetings.map((meeting) => (
                    <a key={meeting.path} href={meeting.html_url} target="_blank" rel="noopener noreferrer"
                      style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 0.75rem", background: "var(--color-bg-deep)", borderRadius: 4, fontSize: "0.85rem", color: "var(--color-text-secondary)", textDecoration: "none" }}>
                      {meeting.name.replace(".md", "")}
                    </a>
                  ))}
                </div>
              ) : (
                <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>Unable to load meeting notes.</p>
              )}
            </div>
            <div>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--color-purple)", marginBottom: "0.75rem" }}>Consensus Layer (ACDC)</h3>
              {consensusMeetings.length > 0 ? (
                <div className="flex flex-col gap-2">
                  {consensusMeetings.map((meeting) => (
                    <a key={meeting.path} href={meeting.html_url} target="_blank" rel="noopener noreferrer"
                      style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 0.75rem", background: "var(--color-bg-deep)", borderRadius: 4, fontSize: "0.85rem", color: "var(--color-text-secondary)", textDecoration: "none" }}>
                      {meeting.name.replace(".md", "")}
                    </a>
                  ))}
                </div>
              ) : (
                <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>Unable to load meeting notes.</p>
              )}
            </div>
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <a href="https://github.com/ethereum/pm/tree/master/AllCoreDevs-Meetings" target="_blank" rel="noopener noreferrer" className="link-blue" style={{ fontSize: "0.9rem" }}>
              View all meeting notes &rarr;
            </a>
          </div>
        </section>

        {/* Proposing */}
        <section className="section">
          <h2 className="section-title">Want to Add Something to the Agenda?</h2>
          <div style={{ color: "var(--color-text-body)", fontSize: "0.95rem", lineHeight: 1.75, maxWidth: 650 }}>
            <p style={{ marginBottom: "0.75rem" }}>
              If you have a topic for an AllCoreDevs call, propose it by opening an issue:
            </p>
            <ol style={{ listStyle: "decimal", paddingLeft: "1.5rem", marginBottom: "1rem" }}>
              <li>Go to the <a href="https://github.com/ethereum/pm/issues" target="_blank" rel="noopener noreferrer" className="link-blue">PM repo issues</a></li>
              <li>Find the agenda issue for the upcoming call</li>
              <li>Add a comment with your topic and relevant context</li>
            </ol>
            <p>
              For more focused discussions, consider{" "}
              <Link href="/pm-repo/breakouts" className="link-blue">scheduling a breakout call</Link>.
            </p>
          </div>
        </section>

        <Footer />
      </div>
      <FloatingOcto />
    </>
  );
}
