import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingOcto from "@/components/FloatingOcto";
import BlogPostCard from "@/components/BlogPostCard";
import { getAllPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navigation />
      <div className="relative z-10 max-w-[1100px] mx-auto page-container">
        <div className="page-header">
          <h1 className="page-title">Blog</h1>
          <p className="page-desc">
            Updates, insights, and announcements from the Protocol Support team.
          </p>
        </div>
        <div className="page-divider" />

        <section className="section">
          {posts.length > 0 ? (
            <div className="grid gap-4">
              {posts.map((post) => (
                <BlogPostCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.frontmatter.title}
                  date={post.frontmatter.date}
                  author={post.frontmatter.author}
                  excerpt={post.frontmatter.excerpt}
                  tags={post.frontmatter.tags}
                />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "4rem 0" }}>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--color-text-bright)", marginBottom: "0.75rem" }}>
                No posts yet
              </h2>
              <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", maxWidth: 400, margin: "0 auto" }}>
                Check back soon for updates from the Protocol Support team.
                In the meantime, explore our{" "}
                <a href="/resources" className="link-blue">resources</a>{" "}
                or learn about{" "}
                <a href="/contributing" className="link-blue">contributing</a>.
              </p>
            </div>
          )}
        </section>

        <Footer />
      </div>
      <FloatingOcto />
    </>
  );
}
