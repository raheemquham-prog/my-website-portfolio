import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Raheem Quham Folahan — Web Application Security, Penetration Testing, Ethical Hacking";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(140deg, #080D18 0%, #101827 55%, #162033 100%)",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -180,
            left: 260,
            width: 700,
            height: 700,
            borderRadius: 700,
            background: "radial-gradient(circle, rgba(59,130,246,0.30) 0%, rgba(8,13,24,0) 70%)",
            display: "flex",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 46,
              height: 46,
              borderRadius: 10,
              border: "1px solid #1F2C42",
              background: "#162033",
              color: "#22D3EE",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            RQ
          </div>
          <div style={{ color: "#94A3B8", fontSize: 18, letterSpacing: 3 }}>
            PORTFOLIO
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              color: "#F8FAFC",
              lineHeight: 1.05,
              letterSpacing: -2,
              display: "flex",
            }}
          >
            Raheem Quham Folahan
          </div>
          <div
            style={{
              marginTop: 26,
              fontSize: 26,
              color: "#22D3EE",
              letterSpacing: 1,
              display: "flex",
            }}
          >
            Web Application Security · Penetration Testing · Ethical Hacking
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #1F2C42",
            paddingTop: 26,
            fontSize: 20,
            color: "#94A3B8",
          }}
        >
          <div style={{ display: "flex" }}>Burp Suite · Python · API Security · Reconnaissance</div>
          <div style={{ display: "flex", color: "#3B82F6" }}>raheemquham@gmail.com</div>
        </div>
      </div>
    ),
    size,
  );
}
