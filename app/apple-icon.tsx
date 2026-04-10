import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "36px",
          background: "linear-gradient(-45deg, #1B6CA8 0%, #0BA898 50%, #1B6CA8 100%)",
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: "56px",
            fontWeight: 800,
            letterSpacing: "-1px",
            lineHeight: 1,
          }}
        >
          SAI
        </span>
        <span
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "14px",
            fontWeight: 600,
            letterSpacing: "2px",
            marginTop: "6px",
            textTransform: "uppercase",
          }}
        >
          HEALTH
        </span>
      </div>
    ),
    { ...size }
  );
}
