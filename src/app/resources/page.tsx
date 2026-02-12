import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingOcto from "@/components/FloatingOcto";
import Card from "@/components/Card";
import {
  ForkIcon, GitHubIcon, YouTubeIcon, BookIcon,
  DiscordIcon, GlobeIcon, LinkIcon, CalendarIcon,
} from "@/components/Icons";

const resourceCategories = [
  {
    title: "All Core Devs",
    description: "Tools and resources for following Ethereum protocol development",
    resources: [
      {
        title: "Forkcast",
        description: "Track upcoming Ethereum hard forks, network upgrades, and EIPs. To propose an EIP for a fork, PR your EIP info into the forkcast repo\u2019s data/eips directory.",
        href: "https://forkcast.org",
        external: true,
        icon: <ForkIcon color="var(--coord-cyan)" />,
      },
      {
        title: "ethereum/pm Repository",
        description: "The central hub for protocol meeting notes, agendas, call scheduling, and coordination.",
        href: "https://github.com/ethereum/pm",
        external: true,
        icon: <GitHubIcon color="var(--coord-purple)" />,
      },
      {
        title: "Ethereum Protocol YouTube",
        description: "Where all ACD calls and breakout discussions get uploaded. Watch live or catch up on recordings.",
        href: "https://www.youtube.com/@EthereumProtocol",
        external: true,
        icon: <YouTubeIcon color="var(--coord-pink)" />,
      },
    ],
  },
  {
    title: "Protocol Development",
    description: "Learn about Ethereum protocol internals and contribute to development",
    resources: [
      {
        title: "EPF Wiki",
        description: "Comprehensive documentation from the Ethereum Protocol Fellowship covering protocol internals.",
        href: "https://epf.wiki",
        external: true,
        icon: <BookIcon color="var(--coord-green)" />,
      },
      {
        title: "EPF YouTube",
        description: "Video content from the Ethereum Protocol Fellowship program.",
        href: "https://www.youtube.com/@ethprotocolfellows",
        external: true,
        icon: <YouTubeIcon color="var(--coord-pink)" />,
      },
      {
        title: "Study Group",
        description: "Educational materials and weekly sessions for learning about Ethereum protocol development.",
        href: "https://epf.wiki/#/eps/schedule",
        external: true,
        icon: <CalendarIcon color="var(--coord-yellow)" />,
      },
    ],
  },
  {
    title: "Community & Governance",
    description: "Connect with core devs and understand how Ethereum protocol decisions are made",
    resources: [
      {
        title: "Ethereum R&D Discord",
        description: "Where core devs discuss issues asynchronously. The primary async coordination channel.",
        href: "https://discord.gg/a4gm9nT3Ty",
        external: true,
        icon: <DiscordIcon color="var(--coord-purple)" />,
      },
      {
        title: "Ethereum Governance",
        description: "Learn about Ethereum\u2019s governance model and how protocol decisions are made.",
        href: "https://ethereum.org/governance",
        external: true,
        icon: <GlobeIcon color="var(--coord-cyan)" />,
      },
      {
        title: "Forkcast EIPs Directory",
        description: "Where EIPs in the Forkcast repo live. Authors wanting to propose an EIP for a fork should PR here.",
        href: "https://github.com/ethereum/forkcast/tree/main/src/data/eips",
        external: true,
        icon: <LinkIcon color="var(--coord-green)" />,
      },
      {
        title: "EIP Office Hours",
        description: "A recurring series where EIP authors get synchronous feedback on formatting, process, and technical details. Maintained by the Cat Herders.",
        href: "https://github.com/ethereum/pm/issues?q=label%3AEIPOfficeHr",
        external: true,
        icon: <CalendarIcon color="var(--coord-yellow)" />,
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Navigation />
      <div className="relative z-10 max-w-[1100px] mx-auto" style={{ padding: "0 2rem" }}>
        <div className="page-header">
          <h1 className="page-title">Resources</h1>
          <p className="page-desc">
            Curated links to essential tools, documentation, and community
            channels for Ethereum protocol development.
          </p>
        </div>
        <div className="page-divider" />

        {/* Resource Categories */}
        {resourceCategories.map((category) => (
          <section key={category.title} className="section">
            <h2 className="section-title">{category.title}</h2>
            <p style={{ color: "var(--color-text-body)", fontSize: "0.95rem", marginBottom: "1.25rem" }}>
              {category.description}
            </p>
            <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}>
              {category.resources.map((resource) => (
                <Card
                  key={resource.href}
                  href={resource.href}
                  external={resource.external}
                  title={resource.title}
                  description={resource.description}
                  icon={resource.icon}
                />
              ))}
            </div>
          </section>
        ))}

        <Footer />
      </div>
      <FloatingOcto />
    </>
  );
}
