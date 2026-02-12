export default function Footer() {
  return (
    <footer style={{
      padding: "2rem 0",
      borderTop: "1px solid var(--color-border)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "5rem",
      flexWrap: "wrap",
      gap: "1rem",
    }}>
      <div style={{ fontSize: "0.75rem", color: "var(--color-text-dim)" }}>
        <a href="https://ethereum.org" style={{ color: "var(--color-text-muted)", textDecoration: "none" }}>Ethereum Foundation</a>
        {" — Protocol Support · "}
        <a href="mailto:protocol-support@ethereum.org" style={{ color: "var(--color-text-muted)", textDecoration: "none" }}>protocol-support@ethereum.org</a>
      </div>
      <div className="flex gap-6">
        <a href="https://github.com/ethereum/pm" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", textDecoration: "none" }}>GitHub</a>
        <a href="https://discord.gg/a4gm9nT3Ty" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", textDecoration: "none" }}>Discord</a>
        <a href="https://www.youtube.com/@EthereumProtocol" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", textDecoration: "none" }}>YouTube</a>
      </div>
    </footer>
  );
}
