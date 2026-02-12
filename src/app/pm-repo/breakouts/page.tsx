import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingOcto from "@/components/FloatingOcto";

const activeBreakouts = [
  { name: "All Wallet Devs", href: "https://github.com/ethereum/pm/issues/1909" },
  { name: "EIP Editing Office Hour", href: "https://github.com/ethereum/pm/issues/1906" },
  { name: "EIP-7732 Breakout Room", href: "https://github.com/ethereum/pm/issues/1835" },
  { name: "EIP-7928 Breakout Room", href: "https://github.com/ethereum/pm/issues/1897" },
  { name: "EIPIP Meeting", href: "https://github.com/ethereum/pm/issues/1886" },
  { name: "Ethproofs Community Call", href: "https://github.com/ethereum/pm/issues/1849" },
  { name: "FCR Breakout Room", href: "https://github.com/ethereum/pm/issues/1887" },
  { name: "FOCIL Breakout", href: "https://github.com/ethereum/pm/issues/1898" },
  { name: "Glamsterdam Repricings", href: "https://github.com/ethereum/pm/issues/1910" },
  { name: "L1-zkEVM Breakout", href: "https://github.com/ethereum/pm/issues/1900" },
  { name: "L2 Interop Working Group", href: "https://github.com/ethereum/pm/issues/1899" },
  { name: "PQ Interop", href: "https://github.com/ethereum/pm/issues/1905" },
  { name: "PQ Transaction Signatures", href: "https://github.com/ethereum/pm/issues/1889" },
  { name: "RPC Standards", href: "https://github.com/ethereum/pm/issues/1881" },
  { name: "Stateless Implementers", href: "https://github.com/ethereum/pm/issues/1873" },
  { name: "Trustless Agents (ERC-8004)", href: "https://github.com/ethereum/pm/issues/1789" },
  { name: "Trustless Log Index", href: "https://github.com/ethereum/pm/issues/1911" },
];

export default function BreakoutsPage() {

  return (
    <>
      <Navigation />
      <div className="relative z-10 max-w-[1100px] mx-auto page-container">
        <div className="page-header">
          <h1 className="page-title">Breakout Calls</h1>
          <p className="page-desc">
            Focused technical discussions on specific Ethereum protocol topics.
            Anyone can propose and participate in breakout calls.
          </p>
        </div>
        <div className="page-divider" />

        {/* What are Breakout Calls */}
        <section className="section">
          <h2 className="section-title">What are Breakout Calls?</h2>
          <div style={{ color: "var(--color-text-body)", fontSize: "0.95rem", lineHeight: 1.75, maxWidth: 650 }}>
            <p style={{ marginBottom: "0.75rem" }}>
              Breakout calls are feature- or topic-specific calls for items in active
              implementation stages, aiming for inclusion in an upcoming fork, that
              benefit from synchronous discussion beyond what fits into AllCoreDevs.
            </p>
            <p style={{ marginBottom: "0.5rem" }}>Start a breakout when:</p>
            <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", marginBottom: "1rem" }}>
              <li>There&apos;s active development or open questions to address</li>
              <li>It can&apos;t fit responsibly in the ACD agenda</li>
              <li>There&apos;s enough interest that multiple participants will attend</li>
            </ul>
            <p style={{ marginBottom: "0.5rem" }}>Examples of breakout series:</p>
            <ul style={{ listStyle: "disc", paddingLeft: "1.5rem" }}>
              <li>ePBS (EIP-7732)</li>
              <li>Block-Level Access Lists</li>
              <li>PQ Interop</li>
              <li>FOCIL</li>
              <li>PeerDAS</li>
              <li>Stateless Implementers</li>
            </ul>
          </div>
        </section>

        {/* How to Schedule */}
        <section className="section">
          <h2 className="section-title">How to Schedule a Breakout Call</h2>
          <div className="flex flex-col gap-4">
            <div className="card">
              <div className="step-card-layout">
                <span className="step-badge">1</span>
                <div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--color-text-bright)", marginBottom: "0.4rem" }}>
                    Contact Protocol Support
                  </h3>
                  <p style={{ color: "var(--color-text-body)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}>
                    Reach out to{" "}
                    <strong style={{ color: "var(--color-text-bright)" }}>Josh</strong>{" "}
                    (<span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}>@joshdavislight</span> on Discord/Telegram,{" "}
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}>josh.davis@ethereum.org</span>) or{" "}
                    <strong style={{ color: "var(--color-text-bright)" }}>nixo</strong>{" "}
                    (<span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}>@nixo.eth</span> on Discord,{" "}
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}>nixo@ethereum.org</span>).
                  </p>
                  <p style={{ color: "var(--color-text-body)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.4rem" }}>
                    Provide:
                  </p>
                  <ul style={{ color: "var(--color-text-body)", fontSize: "0.9rem", lineHeight: 1.7, listStyle: "disc", paddingLeft: "1.25rem", marginBottom: "0.5rem" }}>
                    <li>Title</li>
                    <li>Cadence (weekly, biweekly, etc.)</li>
                    <li>Reason for the breakout</li>
                    <li>Associated EIP(s)</li>
                    <li>Target fork (if relevant)</li>
                    <li>Your GitHub username</li>
                  </ul>
                  <p style={{ fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}>
                    <strong style={{ color: "var(--color-text-bright)" }}>{"\u{1F6A8}"} Wait for Protocol Support to confirm creation of your series.</strong>
                  </p>
                  <p style={{ color: "var(--color-text-muted)", fontSize: "0.85rem", lineHeight: 1.6 }}>
                    You can use your own Zoom or the EF zoom-bot, which provides
                    transcripts, an AI summary, and YouTube upload. The EF zoom-bot
                    requires someone with an @ethereum.org email to be assigned host.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="step-card-layout">
                <span className="step-badge">2</span>
                <div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--color-text-bright)", marginBottom: "0.4rem" }}>
                    Schedule the First Meeting
                  </h3>
                  <p style={{ color: "var(--color-text-body)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}>
                    Once Protocol Support confirms your series, create a{" "}
                    <a href="https://github.com/ethereum/pm/issues/new/choose" target="_blank" rel="noopener noreferrer" className="link-blue">
                      new issue
                    </a>{" "}
                    in ethereum/pm and choose the <strong style={{ color: "var(--color-text-bright)" }}>Protocol Call</strong> template.
                  </p>
                  <ul style={{ color: "var(--color-text-body)", fontSize: "0.9rem", lineHeight: 1.7, listStyle: "disc", paddingLeft: "1.25rem" }}>
                    <li>Title format: <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}>&lt;Call Name&gt; #N, &lt;Date&gt;</span></li>
                    <li>Add the UTC date, time, and agenda items</li>
                    <li>Select your call series from the dropdown</li>
                    <li>Check <strong style={{ color: "var(--color-text-bright)" }}>Autopilot Mode</strong> (recommended) — it applies preconfigured
                      defaults for duration, recurrence, Zoom, and calendar</li>
                  </ul>
                  <p style={{ color: "var(--color-text-muted)", fontSize: "0.85rem", lineHeight: 1.6, marginTop: "0.5rem" }}>
                    Only uncheck Autopilot if you need to customize settings for
                    a specific meeting (duration, custom Zoom link, livestream, etc.).
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <a href="https://github.com/ethereum/pm/blob/master/processes/running-a-breakout.md" target="_blank" rel="noopener noreferrer" className="link-blue" style={{ fontSize: "0.9rem" }}>
              Full guide: Running a Breakout &rarr;
            </a>
          </div>
        </section>

        {/* Active Breakout Topics */}
        <section className="section">
          <h2 className="section-title">Active Breakout Topics</h2>
          <p style={{ color: "var(--color-text-body)", fontSize: "0.95rem", lineHeight: 1.75, marginBottom: "1.25rem", maxWidth: 650 }}>
            Breakout series that have had a call within the last three months.
            Each links to its coordination issue on GitHub.
          </p>
          <div className="card-grid">
            {activeBreakouts.map((room) => (
              <a
                key={room.href}
                href={room.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card"
                style={{ textDecoration: "none" }}
              >
                <span style={{ fontSize: "0.95rem", fontWeight: 500, color: "var(--color-text-bright)" }}>
                  {room.name}
                </span>
              </a>
            ))}
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <a href="https://github.com/ethereum/pm/blob/master/Breakout-Room-Meetings/active-breakout-series.md" target="_blank" rel="noopener noreferrer" className="link-blue" style={{ fontSize: "0.9rem" }}>
              View active breakout series on GitHub &rarr;
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="card">
            <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--color-text-bright)", marginBottom: "0.75rem" }}>
              Want to Start a Breakout Series?
            </h3>
            <p style={{ color: "var(--color-text-body)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "1rem" }}>
              Reach out to the Protocol Support team with your topic, cadence,
              and associated EIPs. We&apos;ll set up your series and help you
              schedule your first call.
            </p>
            <a href="https://github.com/ethereum/pm/blob/master/processes/running-a-breakout.md" target="_blank" rel="noopener noreferrer" className="card-btn">
              Read the Full Guide <span>{"\u2197"}</span>
            </a>
          </div>
        </section>

        <Footer />
      </div>
      <FloatingOcto />
    </>
  );
}
