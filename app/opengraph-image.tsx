import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Global Sitcom Map — מפת סיטקומים עולמית";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
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
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative dots simulating a world map */}
        {[
          [120, 200], [200, 160], [310, 210], [420, 180], [500, 220],
          [590, 170], [680, 195], [760, 215], [850, 180], [940, 200],
          [1050, 210], [1100, 175], [160, 310], [260, 290], [380, 320],
          [470, 300], [560, 340], [650, 295], [740, 315], [830, 300],
          [920, 330], [1010, 295], [1080, 320], [140, 420], [240, 400],
          [350, 430], [450, 410], [540, 440], [630, 405], [720, 425],
          [810, 410], [900, 435], [990, 405], [1070, 420],
        ].map(([x, y], i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x,
              top: y,
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: [
                "#3b82f6", "#10b981", "#f59e0b", "#ef4444",
                "#8b5cf6", "#06b6d4", "#f97316",
              ][i % 7],
              opacity: 0.7,
            }}
          />
        ))}

        {/* Globe circle outline */}
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            border: "1px solid rgba(59,130,246,0.2)",
            top: 65,
            left: 350,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            border: "1px solid rgba(59,130,246,0.1)",
            top: 50,
            left: 340,
            transform: "scaleX(0.4)",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            zIndex: 10,
          }}
        >
          <div style={{ fontSize: 90, lineHeight: 1 }}>🎬</div>

          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-2px",
              textAlign: "center",
              lineHeight: 1.1,
            }}
          >
            Global Sitcom Map
          </div>

          <div
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.6)",
              textAlign: "center",
            }}
          >
            מפת סיטקומים עולמית
          </div>

          <div
            style={{
              marginTop: 16,
              display: "flex",
              gap: 12,
            }}
          >
            {["🇺🇸 Friends", "🇬🇧 Fawlty Towers", "🇮🇱 שמש", "🇩🇪 Stromberg", "🇯🇵 Kodoku"].map((label) => (
              <div
                key={label}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: 24,
                  padding: "8px 18px",
                  color: "#e2e8f0",
                  fontSize: 18,
                }}
              >
                {label}
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 20,
              fontSize: 20,
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            sitcom-world-map.vercel.app
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
