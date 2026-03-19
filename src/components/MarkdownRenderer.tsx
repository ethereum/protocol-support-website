"use client";

import { useEffect, useState } from "react";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

function parseMarkdown(markdown: string): string {
  let html = markdown;

  // Escape HTML to prevent XSS
  html = html
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Headers
  html = html.replace(/^### (.*$)/gm, '<h3 style="font-size:1.15rem;font-weight:600;color:var(--color-text-bright);margin-top:1.5rem;margin-bottom:0.5rem">$1</h3>');
  html = html.replace(/^## (.*$)/gm, '<h2 style="font-size:1.25rem;font-weight:600;color:var(--color-text-bright);margin-top:2rem;margin-bottom:0.75rem">$1</h2>');
  html = html.replace(/^# (.*$)/gm, '<h1 style="font-size:1.5rem;font-weight:700;color:var(--color-text-bright);margin-top:2rem;margin-bottom:1rem">$1</h1>');

  // Bold and italic
  html = html.replace(/\*\*\*(.*?)\*\*\*/g, "<strong><em>$1</em></strong>");
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");

  // Links
  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer" style="color:var(--color-blue);text-decoration:none" onmouseover="this.style.textDecoration=\'underline\'" onmouseout="this.style.textDecoration=\'none\'">$1</a>'
  );

  // Inline code
  html = html.replace(
    /`([^`]+)`/g,
    '<code style="padding:0.15rem 0.4rem;border-radius:3px;background:var(--color-bg-elevated);color:var(--color-text-secondary);font-size:0.85em">$1</code>'
  );

  // Tables
  html = html.replace(
    /(?:^|\n)(\|.+\|)\n(\|[\s:|-]+\|)\n((?:\|.+\|\n?)+)/g,
    (_match, headerRow: string, _separator: string, bodyRows: string) => {
      const headers = headerRow.split('|').filter((c: string) => c.trim()).map((c: string) => c.trim());
      const thCells = headers.map((h: string) =>
        `<th style="padding:0.5rem 0.75rem;text-align:left;font-weight:600;color:var(--color-text-bright);border-bottom:2px solid var(--color-border)">${h}</th>`
      ).join('');

      const rows = bodyRows.trim().split('\n').map((row: string) => {
        const cells = row.split('|').filter((c: string) => c.trim()).map((c: string) => c.trim());
        const tdCells = cells.map((c: string) =>
          `<td style="padding:0.5rem 0.75rem;border-bottom:1px solid var(--color-border);color:var(--color-text-body)">${c}</td>`
        ).join('');
        return `<tr>${tdCells}</tr>`;
      }).join('');

      return `<table style="width:100%;border-collapse:collapse;margin:1rem 0;font-size:0.9rem"><thead><tr>${thCells}</tr></thead><tbody>${rows}</tbody></table>`;
    }
  );

  // Unordered lists
  html = html.replace(/^\s*[-*]\s+(.*)$/gm, '<li style="margin-left:1rem;margin-bottom:0.25rem">$1</li>');
  html = html.replace(/(<li.*<\/li>\n?)+/g, '<ul style="list-style:disc;list-style-position:inside;margin-bottom:1rem;color:var(--color-text-body)">$&</ul>');

  // Ordered lists
  html = html.replace(/^\s*\d+\.\s+(.*)$/gm, '<li style="margin-left:1rem;margin-bottom:0.25rem">$1</li>');

  // Paragraphs
  html = html.replace(/\n\n/g, '</p><p style="margin-bottom:1rem;color:var(--color-text-body);line-height:1.7;font-size:0.95rem">');
  html = '<p style="margin-bottom:1rem;color:var(--color-text-body);line-height:1.7;font-size:0.95rem">' + html + "</p>";

  // Clean up empty paragraphs
  html = html.replace(/<p[^>]*>\s*<\/p>/g, "");

  return html;
}

export default function MarkdownRenderer({
  content,
  className = "",
}: MarkdownRendererProps) {
  const [html, setHtml] = useState("");

  useEffect(() => {
    if (content) {
      setHtml(parseMarkdown(content));
    }
  }, [content]);

  if (!content) {
    return (
      <div className="card">
        <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>Content not available.</p>
      </div>
    );
  }

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
