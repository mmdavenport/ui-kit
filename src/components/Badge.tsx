import { colors } from "../tokens";

export interface BadgeProps {
  label: string;
  variant?: "default" | "success" | "warning" | "error" | "info";
}

const variantMap: Record<string, { color: string; bg: string; border: string }> = {
  default: { color: colors.mutedForeground, bg: "rgba(255,255,255,0.04)", border: "rgba(255,255,255,0.08)" },
  success: { color: colors.green, bg: "rgba(34,197,94,0.1)", border: "rgba(34,197,94,0.3)" },
  warning: { color: colors.gold, bg: "rgba(242,201,76,0.1)", border: "rgba(242,201,76,0.3)" },
  error: { color: colors.red, bg: "rgba(255,68,68,0.1)", border: "rgba(255,68,68,0.3)" },
  info: { color: colors.accent, bg: "rgba(0,217,255,0.1)", border: "rgba(0,217,255,0.3)" },
};

export default function Badge({ label, variant = "default" }: BadgeProps) {
  const v = variantMap[variant];

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        fontSize: "0.65rem",
        fontWeight: 600,
        fontFamily: "'Chakra Petch', system-ui, sans-serif",
        padding: "3px 10px",
        borderRadius: 12,
        color: v.color,
        background: v.bg,
        border: `1px solid ${v.border}`,
      }}
    >
      {label}
    </span>
  );
}
