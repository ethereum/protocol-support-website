import { NextRequest, NextResponse } from "next/server";

/**
 * GET /api/ics?title=...&start=...&duration=...&description=...
 *
 * Generates a .ics (iCalendar) file from query params and returns it as a download.
 * Used by ACDbot in ethereum/pm to add "Download .ics" links to protocol call comments.
 *
 * Params:
 *   title       - Event title (required)
 *   start       - Start time in compact ISO format: YYYYMMDDTHHmmssZ (required)
 *   duration    - Duration in minutes (default: 60)
 *   description - Event description (optional)
 */
export function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const title = params.get("title");
  const start = params.get("start");
  const duration = parseInt(params.get("duration") ?? "60", 10);
  const description = params.get("description") ?? "";

  if (!title || !start) {
    return NextResponse.json(
      { error: "Missing required params: title, start" },
      { status: 400 }
    );
  }

  // Reject oversized params to prevent abuse (2KB is generous for calendar event text)
  if (title.length > 2048 || description.length > 2048) {
    return NextResponse.json(
      { error: "title and description must be under 2048 characters" },
      { status: 400 }
    );
  }

  // Validate start format: YYYYMMDDTHHmmssZ
  if (!/^\d{8}T\d{6}Z$/.test(start)) {
    return NextResponse.json(
      { error: "Invalid start format. Expected YYYYMMDDTHHmmssZ" },
      { status: 400 }
    );
  }

  const end = addMinutes(start, duration);

  // Fold long lines per RFC 5545 (max 75 octets per line)
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Protocol Support//ps.ethereum.foundation//EN",
    "BEGIN:VEVENT",
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${escapeIcsText(title)}`,
    ...(description
      ? foldLine(`DESCRIPTION:${escapeIcsText(description)}`)
      : []),
    "END:VEVENT",
    "END:VCALENDAR",
    "", // trailing newline
  ].join("\r\n");

  // Sanitize filename from title
  const filename =
    title
      .replace(/[^a-zA-Z0-9 _-]/g, "")
      .replace(/\s+/g, "_")
      .slice(0, 60) + ".ics";

  return new NextResponse(ics, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
  });
}

/** Add minutes to a compact ISO datetime string (YYYYMMDDTHHmmssZ). */
function addMinutes(start: string, minutes: number): string {
  const year = parseInt(start.slice(0, 4), 10);
  const month = parseInt(start.slice(4, 6), 10) - 1;
  const day = parseInt(start.slice(6, 8), 10);
  const hour = parseInt(start.slice(9, 11), 10);
  const min = parseInt(start.slice(11, 13), 10);
  const sec = parseInt(start.slice(13, 15), 10);
  const dt = new Date(Date.UTC(year, month, day, hour, min, sec));
  dt.setUTCMinutes(dt.getUTCMinutes() + minutes);
  const pad = (n: number) => n.toString().padStart(2, "0");
  return (
    `${dt.getUTCFullYear()}${pad(dt.getUTCMonth() + 1)}${pad(dt.getUTCDate())}` +
    `T${pad(dt.getUTCHours())}${pad(dt.getUTCMinutes())}${pad(dt.getUTCSeconds())}Z`
  );
}

/** Escape special characters per RFC 5545. Strip \r to prevent CRLF injection. */
function escapeIcsText(text: string): string {
  return text
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\r/g, "")
    .replace(/\n/g, "\\n");
}

/** Fold a line to 75-octet max per RFC 5545. */
function foldLine(line: string): string[] {
  if (line.length <= 75) return [line];
  const lines: string[] = [];
  lines.push(line.slice(0, 75));
  let rest = line.slice(75);
  while (rest.length > 0) {
    // continuation lines start with a space, so 74 chars of content
    lines.push(" " + rest.slice(0, 74));
    rest = rest.slice(74);
  }
  return lines;
}
