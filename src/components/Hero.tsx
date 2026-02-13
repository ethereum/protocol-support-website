import Image from "next/image";

interface HeroProps {
  updates?: string[];
}

export default function Hero({ updates }: HeroProps) {
  const lines = updates && updates.length > 0 ? updates : [
    "Meeting scheduled for Thursday 14:00 UTC",
    "Agenda published to GitHub",
    "47 participants notified",
  ];
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center hero-section">
      <Image
        src="/octopus_blue.png"
        alt=""
        width={900}
        height={900}
        priority
        className="hero-bg-octopus"
      />
      <div className="hero-glow" />

      <div className="relative z-[2] max-w-[680px]">
        <h1 style={{
          fontSize: "clamp(3.5rem, 9vw, 5.5rem)",
          fontWeight: 300,
          lineHeight: 1.05,
          color: "var(--color-text-bright)",
          marginBottom: "1.5rem",
          letterSpacing: "-0.02em",
        }}>
          <strong style={{ fontWeight: 700 }}>Protocol</strong><br />Support
        </h1>

        <p style={{
          fontSize: "1.05rem",
          color: "var(--color-text-secondary)",
          lineHeight: 1.8,
          maxWidth: 540,
          margin: "0 auto 3rem",
        }}>
          Coordinating Ethereum protocol development. We manage
          AllCoreDevs, facilitate breakout discussions, and
          build the infrastructure for building infrastructure.
        </p>

        <div className="terminal">
          <div className="terminal-bar">
            <div className="terminal-dot r" />
            <div className="terminal-dot y" />
            <div className="terminal-dot g" />
            <span className="terminal-title">protocol-support — zsh</span>
          </div>
          <div className="terminal-body">
            <div className="t-line"><span className="t-prompt">&rarr;</span><span className="t-cmd">cd ethereum/pm</span></div>
            <div className="t-line"><span className="t-prompt">&rarr;</span><span className="t-cmd">./coordinate --updates</span></div>
            {lines.map((line, i) => (
              <div key={i} className="t-out">{"\u2713"} {line}</div>
            ))}
            <div className="t-line"><span className="t-prompt">&rarr;</span><span className="cursor" /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
