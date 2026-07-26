import { colors } from "../tokens";

export interface AlertProps {
  /** The message to display. */
  message: string;
  variant?: "info" | "success" | "warning" | "error";
  /** Optional title above the message. */
  title?: string;
  /** Called when the dismiss button is clicked. Omit to hide the button. */
  onDismiss?: () => void;
}

const variantMap: Record<string, { color: string; bg: string; border: string; icon: string }> = {
  info: { color: colors.accent, bg: "rgba(0,217,255,0.04)", border: "rgba(0,217,255,0.15)", icon: "ℹ" },
  success: { color: colors.green, bg: "rgba(34,197,94,0.04)", border: "rgba(34,197,94,0.15)", icon: "✓" },
  warning: { color: colors.gold, bg: "rgba(242,201,76,0.04)", border: "rgba(242,201,76,0.15)", icon: "⚠" },
  error: { color: colors.red, bg: "rgba(255,68,68,0.04)", border: "rgba(255,68,68,0.15)", icon: "✕" },
};

export default function Alert({ message, variant = "info", title, onDismiss }: AlertProps) {
  const v = variantMap[variant];

  return (
    <div
      role="alert"
      style={{
        fontFamily: "'Chakra Petch', system-ui, sans-serif",
        background: v.bg,
        border: `1px solid ${v.border}`,
        borderRadius: 10,
        padding: "12px 16px",
        display: "flex",
        gap: 10,
        alignItems: "flex-start",
      }}
    >
      <span style={{ color: v.color, fontSize: "0.9rem", flexShrink: 0, lineHeight: 1 }}>
        {v.icon}
      </span>
      <div style={{ flex: 1 }}>
        {title && (
          <div style={{ fontSize: "0.75rem", fontWeight: 700, color: v.color, marginBottom: 2 }}>
            {title}
          </div>
        )}
        <div style={{ fontSize: "0.7rem", color: colors.mutedForeground, lineHeight: 1.6 }}>
          {message}
        </div>
      </div>
      {onDismiss && (
        <button
          onClick={onDismiss}
          aria-label="Dismiss"
          style={{
            background: "none",
            border: "none",
            color: colors.mutedForeground,
            cursor: "pointer",
            fontSize: "0.8rem",
            padding: 0,
            lineHeight: 1,
          }}
        >
          ×
        </button>
      )}
    </div>
  );
}
