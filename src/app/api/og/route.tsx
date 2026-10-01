import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "Orbit";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#fbf8f6",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: "#e8557a" }} />
          <span style={{ fontSize: 28, fontWeight: 700, color: "#17120f" }}>Orbit</span>
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#17120f",
            lineHeight: 1.15,
            maxWidth: 950,
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 24, color: "#5c544e" }}>Run your business. Not the admin.</div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
