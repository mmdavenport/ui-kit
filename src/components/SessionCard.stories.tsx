import type { Meta, StoryObj } from "@storybook/react-vite";
import SessionCard from "./SessionCard";

const meta: Meta<typeof SessionCard> = {
  title: "Components/SessionCard",
  component: SessionCard,
  argTypes: {
    status: { control: "select", options: ["available", "completed", "locked"] },
    title: { control: "text" },
    subtitle: { control: "text" },
    duration: { control: "text" },
    lockReason: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof SessionCard>;

export const Available: Story = {
  args: {
    title: "Focus & Attention",
    subtitle:
      "A bilateral-stimulation exercise designed to support calm focus and present-moment awareness.",
    duration: "8 min",
    tags: ["Dopamine", "GABA"],
    backContent: {
      heading: "Protocol Detail",
      sections: [
        { label: "Supplements", text: "L-Tyrosine 500mg, Magnesium Glycinate 200mg" },
        { label: "Co-factors", text: "B6 (P-5-P), Vitamin C" },
        { label: "Avoid", text: "Caffeine 2h before session", color: "#FF4444" },
      ],
      footnote: "Educational reference only. Not clinical advice.",
    },
  },
};

export const Completed: Story = {
  args: {
    title: "Calm Resilience",
    subtitle: "Rhythmic left-right engagement for emotional regulation.",
    duration: "6 min",
    status: "completed",
    tags: ["Serotonin"],
  },
};

export const Locked: Story = {
  args: {
    title: "Advanced Integration",
    subtitle: "Deep bilateral protocol for experienced users.",
    duration: "12 min",
    status: "locked",
    tags: ["Endorphin"],
    lockReason: "Requires Level 2",
  },
};
