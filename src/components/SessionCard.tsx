import { useState } from "react";
import { colors } from "../tokens";

export type SessionStatus = "available" | "completed" | "locked";

export interface SessionCardProps {
  title: string;
  subtitle: string;
  duration: string;
  status?: SessionStatus;
  /** Short labels shown as tags (e.g. focus areas). */
  tags?: string[];
  /** Back-of-card content — protocol or detail summary. */
  backContent?: {
    heading: string;
    sections: { label: string; text: string; color?: string }[];
    footnote?: string;
  };
  /** Lock reason shown when status is "locked". */
  lockReason?: string;
}

export default function SessionCard({
  title,
  subtitle,
  duration,
  status = "available",
  tags = [],
  backContent,
  lockReason,
}: SessionCardProps) {
  const [flipped, setFlipped] = useState(false);
  const isLocked = status === "locked";
  const isCompleted = status === "completed";

  const borderColor = isLocked
    ? colors.border
    : isCompleted
      ? "rgba(34,197,94,0.3)"
      : colors.border;

  return (
    <div
      style={{
        perspective: "1000px",
        minHeight: 220,
        fontFamily: "'Chakra Petch', system-ui, sans-serif",
      }}
    >
      <div
        onClick={() => !isLocked && backContent && setFlipped(!flipped)}
        style={{
          position: "relative",
          width: "100%",
          minHeight: 220,
          cursor: isLocked ? "default" : "pointer",
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.5s",
        }}
      >
        {/* ═══ FRONT ═══ */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 12,
            border: `1px solid ${borderColor}`,
            background: colors.card,
            overflow: "hidden",
            backfaceVisibility: "hidden",
            opacity: isLocked ? 0.7 : 1,
          }}
        >
          <div style={{ padding: 16 }}>
            {/* Tags row */}
            <div
              style={{
                marginBottom: 12,
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", gap: 4 }}>
                {tags.slice(0, 2).map((t) => (
                  <span
                    key={t}
                    style={{
                      borderRadius: 999,
                      padding: "2px 8px",
                      fontSize: "0.6rem",
                      fontWeight: 500,
                      background: "rgba(0,217,255,0.1)",
                      color: colors.accent,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              {isCompleted && (
                <span style={{ color: colors.green, fontSize: "1rem" }}>✓</span>
              )}
              {isLocked && (
                <span style={{ color: colors.gold, fontSize: "0.85rem" }}>🔒</span>
              )}
            </div>

            {/* Title */}
            <h3
              style={{
                fontSize: "0.9rem",
                fontWeight: 600,
                color: isLocked ? colors.mutedForeground : colors.foreground,
                marginBottom: 4,
              }}
            >
              {title}
            </h3>
            <p
              style={{
                fontSize: "0.75rem",
                color: colors.mutedForeground,
                marginBottom: 16,
                lineHeight: 1.5,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {subtitle}
            </p>

            {/* Footer */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "0.7rem",
                color: colors.mutedForeground,
              }}
            >
              <span>⏱ {duration}</span>
              {isLocked ? (
                <span style={{ color: colors.gold }}>{lockReason}</span>
              ) : isCompleted ? (
                <span style={{ color: colors.green }}>Completed</span>
              ) : (
                backContent && <span>↻ Tap to flip</span>
              )}
            </div>
          </div>

          {isLocked && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(3,11,15,0.5), transparent)",
                pointerEvents: "none",
              }}
            />
          )}
        </div>

        {/* ═══ BACK ═══ */}
        {backContent && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 12,
              border: "1px solid rgba(34,197,94,0.3)",
              background: colors.card,
              overflow: "hidden",
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div
              style={{
                padding: 16,
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 12,
                }}
              >
                <h4
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    color: colors.green,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {backContent.heading}
                </h4>
                <span
                  style={{
                    fontSize: "0.6rem",
                    color: colors.mutedForeground,
                  }}
                >
                  ↻ Tap to flip
                </span>
              </div>

              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: colors.foreground,
                  marginBottom: 8,
                }}
              >
                {title}
              </p>

              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
                {backContent.sections.map((s) => (
                  <div key={s.label}>
                    <p
                      style={{
                        fontSize: "0.6rem",
                        fontWeight: 500,
                        color: s.color || colors.accent,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        marginBottom: 2,
                      }}
                    >
                      {s.label}
                    </p>
                    <p
                      style={{
                        fontSize: "0.7rem",
                        color: colors.mutedForeground,
                        lineHeight: 1.5,
                      }}
                    >
                      {s.text}
                    </p>
                  </div>
                ))}
              </div>

              {backContent.footnote && (
                <p
                  style={{
                    fontSize: "0.55rem",
                    color: colors.mutedForeground,
                    marginTop: 8,
                    paddingTop: 8,
                    borderTop: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  {backContent.footnote}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
