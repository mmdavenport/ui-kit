import { type InputHTMLAttributes } from "react";
import { colors } from "../tokens";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({ label, error, style, id, ...rest }: InputProps) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

  return (
    <div style={{ fontFamily: "'Chakra Petch', system-ui, sans-serif" }}>
      {label && (
        <label
          htmlFor={inputId}
          style={{
            display: "block",
            fontSize: "0.65rem",
            letterSpacing: "0.1em",
            color: error ? colors.red : `${colors.accent}80`,
            marginBottom: 4,
            textTransform: "uppercase",
          }}
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        style={{
          width: "100%",
          background: "rgba(255,255,255,0.04)",
          border: `1px solid ${error ? colors.red : `${colors.accent}26`}`,
          borderRadius: 8,
          padding: "10px 14px",
          color: colors.foreground,
          fontFamily: "'Chakra Petch', system-ui, sans-serif",
          fontSize: "0.8rem",
          outline: "none",
          transition: "border-color 0.2s",
          ...style,
        }}
        aria-invalid={!!error}
        aria-describedby={error && inputId ? `${inputId}-error` : undefined}
        {...rest}
      />
      {error && (
        <p
          id={inputId ? `${inputId}-error` : undefined}
          role="alert"
          style={{ fontSize: "0.6rem", color: colors.red, marginTop: 4 }}
        >
          {error}
        </p>
      )}
    </div>
  );
}
