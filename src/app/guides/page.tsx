import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingOcto from "@/components/FloatingOcto";
import Link from "next/link";
import { MapIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Protocol development guides from the Ethereum Foundation Protocol Support team. Resources to help you navigate EIP championing, governance, and the ACD process.",
};

export default function GuidesPage() {
  return (
    <>
      <Navigation />
      <div className="relative z-10 max-w-[1100px] mx-auto page-container">
        <div className="page-header">
          <h1 className="page-title">Guides</h1>
          <p className="page-desc">
            Practical resources from Protocol Support to help you participate in
            Ethereum protocol development — from championing an EIP to
            understanding how governance decisions are made.
          </p>
        </div>
        <div className="page-divider" />

        <section className="section">
          <Link
            href="/guides/champion"
            className="card card-featured"
            style={{
              textDecoration: "none",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              gap: "1.25rem",
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 10,
                border: "1.5px solid var(--color-blue)",
                background: "rgba(0,212,255,0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <MapIcon size={26} color="var(--color-blue)" />
            </div>
            <div style={{ flex: 1 }}>
              <div className="flex justify-between items-start mb-2">
                <h2
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "var(--color-text-bright)",
                  }}
                >
                  EIP Champion&apos;s Handbook
                </h2>
                <span className="card-tag">New</span>
              </div>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--color-text-body)",
                  lineHeight: 1.7,
                  marginBottom: "1.25rem",
                }}
              >
                Everything you need to take an EIP from idea to inclusion.
                Understand the ACD process, prepare your proposal, gather
                stakeholder evidence, and navigate the path to mainnet.
              </p>
              <span className="card-btn">
                Read the Handbook <span>&rarr;</span>
              </span>
            </div>
          </Link>
        </section>

        <Footer />
      </div>
      <FloatingOcto />
    </>
  );
}
