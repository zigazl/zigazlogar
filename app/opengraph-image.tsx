import { ImageResponse } from "next/og";
import { siteContent } from "@/data/site-content";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          position: "relative",
          background:
            "radial-gradient(circle at 20% 20%, rgba(138,167,209,0.22), transparent 35%), radial-gradient(circle at 80% 0%, rgba(184,203,230,0.22), transparent 30%), linear-gradient(180deg, #f7f9fd 0%, #eef3fa 100%)",
          color: "#1a2533",
          padding: "56px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "40px",
            border: "1px solid rgba(106,124,148,0.16)",
            borderRadius: "28px",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            zIndex: 1,
          }}
        >
          <div style={{ display: "flex", letterSpacing: "0.24em", fontSize: 20, textTransform: "uppercase", color: "#6b7b92" }}>
            {siteContent.hero.eyebrow}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: 760 }}>
            <div style={{ fontSize: 78, fontWeight: 700, lineHeight: 1 }}>{siteContent.hero.name}</div>
            <div style={{ fontSize: 36, lineHeight: 1.2, color: "#5a6b82" }}>
              {siteContent.hero.headline}
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
