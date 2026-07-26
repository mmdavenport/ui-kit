import { type ButtonHTMLAttributes } from "react";
import { colors } from "../tokens";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

const variantStyles: Record<string, React.CSSProperties> = {
  primary: { background: colors.accent, color: colors.dark, border: "none" },
  secondary: { background: "transparent", color: colors.accent, border: `1px solid ${colors.accent}66` },
  danger: { background: "transparent", color: colors.red, border: `1px solid ${colors.red}66` },
};

const sizeStyles: Record<string, React.CSSProperties> = {
  sm: { padding: "6px 12px", fontSize: "0.7rem" },
  md: { padding: "10px 20px", fontSize: "0.8rem" },
  lg: { padding: "14px 28px", fontSize: "0.9rem" },
};

export default function Button({
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  children,
  style,
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      disabled={isDisabled}
      style={{
        fontFamily: "'Chakra Petch', system-ui, sans-serif",
        fontWeight: 600,
        borderRadius: 8,
        cursor: isDisabled ? "not-allowed" : "pointer",
        opacity: isDisabled ? 0.5 : 1,
        letterSpacing: "0.04em",
        transition: "all 0.2s",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        ...variantStyles[variant],
        ...sizeStyles[size],
        ...style,
      }}
      {...rest}
    >
      {loading && (
        <span
          style={{
            width: 14,
            height: 14,
            border: "2px solid currentColor",
            borderTopColor: "transparent",
            borderRadius: "50%",
            animation: "btn-spin 0.6s linear infinite",
            flexShrink: 0,
          }}
        />
      )}
      {children}
      <style>{`@keyframes btn-spin { to { transform: rotate(360deg); } }`}</style>
    </button>
  );
}
