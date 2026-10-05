import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

const INK = "#17120f";
const MUTED = "#5c544e";
const PAPER = "#fbf8f6";
const PINK = "#d13563";

async function loadFonts() {
  try {
    const read = async (file: string) => {
      const buf = await readFile(path.join(process.cwd(), "src", "lib", "og-fonts", file));
      return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength) as ArrayBuffer;
    };
    const [fraunces, inter400, inter500] = await Promise.all([
      read("fraunces-600.woff"),
      read("inter-400.woff"),
      read("inter-500.woff"),
    ]);
    return [
      { name: "Fraunces", data: fraunces, weight: 600 as const, style: "normal" as const },
      { name: "Inter", data: inter400, weight: 400 as const, style: "normal" as const },
      { name: "Inter", data: inter500, weight: 500 as const, style: "normal" as const },
    ];
  } catch {
    return undefined;
  }
}

/**
 * Builds the 1200x630 social preview image. `accent` is an optional second
 * line shown in brand pink (used on the homepage for "Not the admin.").
 */
export async function renderOg({
  title,
  accent,
  eyebrow = "For service businesses",
}: {
  title: string;
  accent?: string;
  eyebrow?: string;
}) {
  const fonts = await loadFonts();
  const total = title.length + (accent?.length ?? 0);
  const titleSize = total <= 36 ? 72 : total <= 60 ? 64 : 54;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: PAPER,
          fontFamily: "Inter",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 72px", width: 760 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <svg width="44" height="44" viewBox="0 0 64 64">
              <circle cx="32" cy="32" r="30" fill="#e8557a" />
              <path d="M32 14 L34.4 28.4 L48 32 L34.4 35.6 L32 50 L29.6 35.6 L16 32 L29.6 28.4 Z" fill="#ffffff" />
            </svg>
            <span style={{ fontSize: 34, fontWeight: 500, color: INK }}>Orbit</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 22, fontWeight: 500, letterSpacing: 2, textTransform: "uppercase", color: PINK, marginBottom: 22 }}>
              {eyebrow}
            </span>
            <span style={{ fontFamily: "Fraunces", fontWeight: 600, fontSize: titleSize, lineHeight: 1.04, letterSpacing: -2, color: INK }}>
              {title}
            </span>
            {accent && (
              <span style={{ fontFamily: "Fraunces", fontWeight: 600, fontSize: titleSize, lineHeight: 1.04, letterSpacing: -2, color: PINK }}>
                {accent}
              </span>
            )}
          </div>

          <span style={{ fontSize: 26, color: MUTED }}>getorbitcrm.com</span>
        </div>

        <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center", paddingRight: 56 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 340,
              background: "#ffffff",
              borderRadius: 24,
              padding: 26,
              border: "1px solid #e7ded8",
              boxShadow: "0 30px 60px -20px rgba(23,18,15,0.25)",
              transform: "rotate(-3deg)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  background: "#fbe0e7",
                  color: "#ad2a51",
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                AT
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: 22, fontWeight: 500, color: INK }}>Ada T.</span>
                <span style={{ fontSize: 17, color: MUTED }}>Gel manicure · Thu 2:00 PM</span>
              </div>
            </div>
            <div style={{ display: "flex", marginTop: 22, borderTop: "1px solid #e7ded8", paddingTop: 18, fontSize: 17, color: MUTED }}>
              Deposit paid
            </div>
            <div style={{ display: "flex", marginTop: 20, gap: 10 }}>
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  justifyContent: "center",
                  padding: "12px 0",
                  borderRadius: 10,
                  background: PINK,
                  color: "#ffffff",
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                Approve
              </div>
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  justifyContent: "center",
                  padding: "12px 0",
                  borderRadius: 10,
                  border: "1px solid #d9cfc8",
                  color: MUTED,
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                Decline
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts }
  );
}
