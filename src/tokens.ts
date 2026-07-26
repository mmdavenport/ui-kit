/** Design tokens extracted from the production dashboard Tailwind config. */

export const colors = {
  navy: "#0B1120",
  dark: "#030B0F",
  card: "#0A1419",
  darkGray: "#1A1A2E",

  cyan: "#00F0FF",
  accent: "#00D9FF",
  blue: "#1E90FF",

  gold: "#F2C94C",
  brandGold: "#FFD700",

  green: "#22C55E",
  emerald: "#34D399",

  coral: "#F97316",
  red: "#FF4444",

  purple: "#A855F7",
  violet: "#7B2FBE",

  foreground: "#E2E8F0",
  mutedForeground: "#94A3B8",
  muted: "#1A2A33",
  border: "#1E3A4C",
  dim: "#7A9BA8",
} as const;

export const fontFamily = {
  sans: "'Chakra Petch', system-ui, sans-serif",
  mono: "'Courier New', monospace",
} as const;

/** Type scale — rem values from the production dashboard. */
export const fontSize = {
  "3xs": "0.48rem",
  "2xs": "0.55rem",
  xs: "0.65rem",
  sm: "0.75rem",
  base: "0.85rem",
  lg: "0.95rem",
  xl: "1.15rem",
  "2xl": "1.375rem",
  "3xl": "1.75rem",
  "4xl": "2.25rem",
} as const;

/** Spacing scale — px values from the production layout. */
export const spacing = {
  0: "0",
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  8: "32px",
  10: "40px",
  12: "48px",
  16: "64px",
  20: "80px",
} as const;

export const borderRadius = {
  sm: "6px",
  md: "8px",
  lg: "10px",
  xl: "12px",
} as const;
