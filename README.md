# ui-kit

A design system and component library — tokens, variants, and interaction
states, documented in Storybook.

**[Live Storybook](https://ui-kit-lime-tau.vercel.app)**

## Tokens
Color, type scale, spacing, and radii defined in `src/tokens.ts` and exposed
as CSS custom properties in `src/index.css`.

## Components
| Component | States |
|---|---|
| WalletPicker | with providers, none detected, connecting |
| RecordCard | confirmed, pending, failed |
| TeachingCard | full, minimal, with warning |
| StatusTicker | default, single item, all negative |
| SessionCard | available, completed, locked |

All components are presentational — no network calls, no SDK dependencies.

## Stack
React 19 · TypeScript · Tailwind · Vite · Storybook 8
