import React from "react";

const codeLines = [
  "> initializing neural_core...",
  "> loading cybersecurity_protocol...",
  "> establishing secure connection...",
  "> scanning network...",
  "> analyzing packets...",
  "> threat_detection: ACTIVE",
  "> encryption: AES-256",
  "> firewall.status = ONLINE",
  "> AI_MODEL.predict()",
  "> anomaly_detection.run()",
  "> system.integrity: 100%",
  "> access.granted",
  "> ITESA.system → ONLINE",
];

const nodes = [
  { left: "18%", top: "24%", delay: "0s" },
  { left: "35%", top: "48%", delay: "1.2s" },
  { left: "55%", top: "28%", delay: "0.6s" },
  { left: "72%", top: "52%", delay: "1.8s" },
  { left: "86%", top: "22%", delay: "0.9s" },
  { left: "78%", top: "78%", delay: "2.2s" },
  { left: "42%", top: "78%", delay: "1.5s" },
  { left: "12%", top: "72%", delay: "2.5s" },
];

const CyberBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-[#030508]">

      {/* =========================================
          BASE
          ========================================= */}

      <div className="absolute inset-0 bg-[#030508]" />

      {/* =========================================
          RUNNING CODE
          ========================================= */}

      <div className="absolute inset-0 flex gap-16 opacity-[0.18]">

        {[0, 1, 2, 3].map((column) => (
          <div
            key={column}
            className="cyber-code-column min-w-[280px] font-mono text-xs leading-7 text-cyan-300"
          >
            {[...codeLines, ...codeLines].map((line, index) => (
              <div key={index}>
                {line}
              </div>
            ))}
          </div>
        ))}

      </div>

      {/* =========================================
          AI NETWORK
          ========================================= */}

      <div className="absolute inset-0">

        {/* Connection lines */}

        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >

          <line
            x1="18"
            y1="24"
            x2="35"
            y2="48"
            className="cyber-connection"
          />

          <line
            x1="35"
            y1="48"
            x2="55"
            y2="28"
            className="cyber-connection"
          />

          <line
            x1="55"
            y1="28"
            x2="72"
            y2="52"
            className="cyber-connection"
          />

          <line
            x1="72"
            y1="52"
            x2="86"
            y2="22"
            className="cyber-connection"
          />

          <line
            x1="72"
            y1="52"
            x2="78"
            y2="78"
            className="cyber-connection"
          />

          <line
            x1="72"
            y1="52"
            x2="42"
            y2="78"
            className="cyber-connection"
          />

          <line
            x1="42"
            y1="78"
            x2="35"
            y2="48"
            className="cyber-connection"
          />

          <line
            x1="35"
            y1="48"
            x2="12"
            y2="72"
            className="cyber-connection"
          />

        </svg>

        {/* Network nodes */}

        {nodes.map((node, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              left: node.left,
              top: node.top,
            }}
          >
            <div
              className="cyber-node"
              style={{
                animationDelay: node.delay,
              }}
            />
          </div>
        ))}

      </div>

      {/* =========================================
          SCANNING LINE
          ========================================= */}

      <div className="cyber-scan-line" />

      {/* =========================================
          GRID
          ========================================= */}

      <div className="absolute inset-0 cyber-grid" />

      {/* =========================================
          VIGNETTE
          ========================================= */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#030508_90%)] opacity-80" />

      {/* =========================================
          READABILITY OVERLAY
          ========================================= */}

      <div className="absolute inset-0 bg-black/35" />

    </div>
  );
};

export default CyberBackground;