import { colors } from "../tokens";

export interface TeachingCardProps {
  /** Item name (e.g. an ingredient, concept, or module). */
  name: string;
  /** Short descriptive tags. */
  tags?: string[];
  /** One-line caption. */
  caption: string;
  /** Focus area label. */
  focus?: string;
  /** Educational explanation — the "why this matters" content. */
  teaching?: string;
  /** Optional supplementary note. */
  supplement?: string;
  /** Optional warning/caution text. */
  warning?: string;
  /** Optional tip text. */
  tip?: string;
}

export default function TeachingCard({
  name,
  tags = [],
  caption,
  focus,
  teaching,
  supplement,
  warning,
  tip,
}: TeachingCardProps) {
  return (
    <div
      style={{
        background: colors.navy,
        border: "1px solid rgba(0,240,255,0.12)",
        borderRadius: 12,
        padding: "16px 18px",
        fontFamily: "'Chakra Petch', system-ui, sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 8,
        }}
      >
        <span style={{ fontSize: "0.85rem", fontWeight: 700, color: colors.foreground }}>
          {name}
        </span>
        {focus && (
          <span
            style={{
              fontSize: "0.5rem",
              color: colors.cyan,
              letterSpacing: "0.08em",
              padding: "2px 8px",
              borderRadius: 4,
              background: "rgba(0,240,255,0.08)",
              border: "1px solid rgba(0,240,255,0.2)",
              fontWeight: 600,
            }}
          >
            {focus}
          </span>
        )}
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 8 }}>
          {tags.map((t) => (
            <span
              key={t}
              style={{
                fontSize: "0.5rem",
                padding: "2px 8px",
                borderRadius: 10,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: colors.mutedForeground,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {/* Caption */}
      <p style={{ fontSize: "0.68rem", color: colors.dim, lineHeight: 1.6, marginBottom: 8 }}>
        {caption}
      </p>

      {/* Teaching */}
      {teaching && (
        <>
          <div
            style={{
              fontSize: "0.55rem",
              color: colors.gold,
              letterSpacing: "0.06em",
              fontWeight: 600,
              marginBottom: 4,
              marginTop: 6,
            }}
          >
            WHY THIS MATTERS
          </div>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "0.62rem",
              lineHeight: 1.7,
              marginBottom: 6,
            }}
          >
            {teaching}
          </p>
        </>
      )}

      {/* Supplement */}
      {supplement && (
        <div
          style={{
            fontSize: "0.58rem",
            color: colors.emerald,
            background: "rgba(52,211,153,0.06)",
            border: "1px solid rgba(52,211,153,0.15)",
            borderRadius: 6,
            padding: "6px 10px",
            marginTop: 6,
          }}
        >
          💊 {supplement}
        </div>
      )}

      {/* Warning */}
      {warning && (
        <div
          style={{
            fontSize: "0.58rem",
            color: colors.coral,
            background: "rgba(249,115,22,0.06)",
            border: "1px solid rgba(249,115,22,0.15)",
            borderRadius: 6,
            padding: "6px 10px",
            marginTop: 6,
          }}
        >
          ⚠ {warning}
        </div>
      )}

      {/* Tip */}
      {tip && (
        <div
          style={{
            fontSize: "0.58rem",
            color: colors.cyan,
            background: "rgba(0,240,255,0.04)",
            border: "1px solid rgba(0,240,255,0.1)",
            borderRadius: 6,
            padding: "6px 10px",
            marginTop: 6,
          }}
        >
          💡 {tip}
        </div>
      )}
    </div>
  );
}
