import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
          background: "linear-gradient(-45deg, #1B6CA8 0%, #0BA898 50%, #1B6CA8 100%)",
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: "14px",
            fontWeight: 800,
            letterSpacing: "-0.5px",
            lineHeight: 1,
          }}
        >
          SAI
        </span>
      </div>
    ),
    { ...size }
  );
}
