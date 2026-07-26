import { colors } from "../tokens";

export type RecordStatus = "pending" | "confirmed" | "failed";

export interface RecordCardProps {
  status: RecordStatus;
  /** Short title shown in the card header. */
  title?: string;
  /** Motivational or summary text. */
  quote?: string;
  /** Truncated transaction hash to display. */
  txHash?: string;
  /** Callback for "New Entry" action. */
  onNewEntry?: () => void;
  /** Callback for "View Records" action. */
  onViewRecords?: () => void;
}

export default function RecordCard({
  status,
  title = "Entry Recorded",
  quote,
  txHash,
  onNewEntry,
  onViewRecords,
}: RecordCardProps) {
  const isPending = status === "pending";
  const isFailed = status === "failed";

  return (
    <section
      style={{
        borderRadius: 12,
        border: `1px solid ${isFailed ? "rgba(255,68,68,0.3)" : "rgba(0,240,255,0.15)"}`,
        padding: 24,
        textAlign: "center",
        background: colors.navy,
        boxShadow: isFailed
          ? "0 0 40px rgba(255,68,68,0.06)"
          : "0 0 40px rgba(52,211,153,0.06)",
        fontFamily: "'Chakra Petch', system-ui, sans-serif",
      }}
    >
      {/* Status icon */}
      <div style={{ fontSize: "2.2rem", marginBottom: 10 }}>
        {isPending ? "⏳" : isFailed ? "✕" : "🔥"}
      </div>

      {/* Heading */}
      <h2
        style={{
          color: isFailed ? colors.red : colors.gold,
          fontSize: "1.15rem",
          fontWeight: 700,
          letterSpacing: "0.1em",
          marginBottom: 6,
        }}
      >
        {isPending ? "Recording…" : isFailed ? "Recording Failed" : title}
      </h2>

      {/* Quote */}
      {quote && !isPending && (
        <p
          style={{
            fontSize: "0.78rem",
            color: "rgba(255,255,255,0.7)",
            fontStyle: "italic",
            lineHeight: 1.7,
            marginBottom: 22,
          }}
        >
          &ldquo;{quote}&rdquo;
        </p>
      )}

      {/* Confirmed badge */}
      {status === "confirmed" && (
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(52,211,153,0.06) 0%, rgba(242,201,76,0.04) 100%)",
            border: "1px solid rgba(242,201,76,0.2)",
            borderRadius: 10,
            padding: "14px 18px",
            marginBottom: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ textAlign: "left" }}>
            <div
              style={{
                fontSize: "0.52rem",
                color: colors.gold,
                letterSpacing: "0.12em",
                marginBottom: 3,
                opacity: 0.7,
              }}
            >
              ENTRY RECORDED
            </div>
            <div
              style={{ fontSize: "1.1rem", color: colors.gold, fontWeight: 700 }}
            >
              {title}
            </div>
          </div>
          <div
            style={{
              fontSize: "0.55rem",
              letterSpacing: "0.08em",
              padding: "4px 12px",
              borderRadius: 6,
              color: colors.emerald,
              background: "rgba(74,222,128,0.1)",
              border: "1px solid rgba(74,222,128,0.3)",
              fontWeight: 600,
            }}
          >
            ✓ CONFIRMED
          </div>
        </div>
      )}

      {/* Tx hash */}
      {txHash && status === "confirmed" && (
        <div style={{ marginBottom: 16, textAlign: "left" }}>
          <div
            style={{
              fontSize: "0.5rem",
              color: "rgba(255,255,255,0.6)",
              letterSpacing: "0.1em",
              marginBottom: 4,
            }}
          >
            TRANSACTION
          </div>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "0.6rem",
              color: "rgba(0,240,255,0.65)",
              wordBreak: "break-all",
            }}
          >
            {txHash}
          </span>
        </div>
      )}

      {/* Pending spinner */}
      {isPending && (
        <div
          style={{
            margin: "16px auto",
            width: 32,
            height: 32,
            border: "3px solid rgba(0,240,255,0.2)",
            borderTop: `3px solid ${colors.cyan}`,
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        />
      )}

      {/* Actions */}
      {!isPending && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            marginTop: 12,
          }}
        >
          <button
            onClick={onNewEntry}
            style={{
              padding: "11px",
              background: "rgba(242,201,76,0.08)",
              border: "1px solid rgba(242,201,76,0.3)",
              borderRadius: 8,
              color: colors.gold,
              fontSize: "0.75rem",
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "'Chakra Petch', system-ui, sans-serif",
            }}
          >
            New Entry
          </button>
          <button
            onClick={onViewRecords}
            style={{
              padding: "11px",
              background: "rgba(0,240,255,0.05)",
              border: "1px solid rgba(0,240,255,0.15)",
              borderRadius: 8,
              color: colors.cyan,
              fontSize: "0.7rem",
              cursor: "pointer",
              fontWeight: 500,
              fontFamily: "'Chakra Petch', system-ui, sans-serif",
            }}
          >
            View Records →
          </button>
        </div>
      )}

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}
