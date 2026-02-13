export default function Footer() {
  return (
    <footer className="site-footer">
      <div style={{ fontSize: "0.75rem", color: "var(--color-text-dim)" }}>
        <a href="https://ethereum.foundation" style={{ color: "var(--color-text-muted)", textDecoration: "none" }}>Ethereum Foundation</a>
        {" — Protocol Support · "}
        <a href="mailto:protocol-support@ethereum.org" style={{ color: "var(--color-text-muted)", textDecoration: "none" }}>protocol-support@ethereum.org</a>
      </div>
      <div className="footer-links">
        <a href="https://x.com/efprotocol" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://github.com/ethereum/pm" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://discord.gg/a4gm9nT3Ty" target="_blank" rel="noopener noreferrer">Discord</a>
        <a href="https://www.youtube.com/@EthereumProtocol" target="_blank" rel="noopener noreferrer">YouTube</a>
      </div>
    </footer>
  );
}
