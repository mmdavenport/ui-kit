import type { Meta, StoryObj } from "@storybook/react-vite";
import TeachingCard from "./TeachingCard";

const meta: Meta<typeof TeachingCard> = {
  title: "Components/TeachingCard",
  component: TeachingCard,
  parameters: { docs: { description: { component: "Educational content card with a structured layout: name, tags, caption, and optional teaching/supplement/warning/tip slots. Use for reference material and explainer content. Not for transient notifications — use Alert instead." } } },
  argTypes: {
    name: { control: "text" },
    caption: { control: "text" },
    focus: { control: "text" },
    teaching: { control: "text" },
    supplement: { control: "text" },
    warning: { control: "text" },
    tip: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof TeachingCard>;

export const FullContent: Story = {
  args: {
    name: "Rate Limiting",
    tags: ["Infrastructure", "API Design"],
    caption: "Controls request throughput to protect backend services.",
    focus: "BACKEND",
    teaching:
      "Token-bucket algorithms allow burst traffic while enforcing a sustained rate ceiling. Leaky-bucket variants smooth output further but add latency under load.",
    supplement: "Pair with circuit-breaker middleware for cascading-failure protection.",
    tip: "Start with a generous limit and tighten based on observed p99 latency.",
  },
};

export const MinimalCard: Story = {
  args: {
    name: "Environment Variables",
    tags: ["Configuration"],
    caption: "Inject runtime config without rebuilding the container.",
  },
};

export const WithWarning: Story = {
  args: {
    name: "Hot Module Replacement",
    tags: ["Dev Tooling", "Vite"],
    caption: "Applies code changes in the browser without a full reload.",
    focus: "DX",
    teaching:
      "HMR preserves component state across edits, shortening the feedback loop from seconds to milliseconds.",
    warning: "Side-effect-heavy modules may need a full reload — watch for stale closures.",
  },
};
