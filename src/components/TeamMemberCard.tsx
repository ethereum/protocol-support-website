interface TeamMemberCardProps {
  name: string;
  role: string;
  image?: string;
  twitter?: string;
  github?: string;
}

export default function TeamMemberCard({
  name,
  role,
  image,
  twitter,
  github,
}: TeamMemberCardProps) {
  return (
    <div className="card group">
      <div className="flex items-start gap-4">
        {image ? (
          <img
            src={image}
            alt={name}
            style={{
              width: 44, height: 44, borderRadius: "50%",
              border: "1.5px solid var(--color-border)",
              objectFit: "cover",
              flexShrink: 0,
            }}
          />
        ) : (
          <div style={{
            width: 44, height: 44, borderRadius: "50%",
            background: "var(--color-bg-elevated)",
            border: "1.5px solid var(--color-border)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1.15rem", fontWeight: 700, color: "var(--color-blue)",
            flexShrink: 0,
          }}>
            {name.charAt(0)}
          </div>
        )}

        <div style={{ flex: 1, minWidth: 0 }}>
          <h3 style={{ fontWeight: 600, color: "var(--color-text-bright)", fontSize: "1.05rem" }}>
            {name}
          </h3>
          <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "0.75rem" }}>{role}</p>

          <div className="flex flex-col gap-1">
            {twitter && (
              <a
                href={`https://x.com/${twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--color-text-muted)", fontSize: "0.75rem", textDecoration: "none" }}
              >
                @{twitter}
              </a>
            )}
            {github && (
              <a
                href={`https://github.com/${github}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--color-text-muted)", fontSize: "0.75rem", textDecoration: "none" }}
              >
                gh/{github}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
