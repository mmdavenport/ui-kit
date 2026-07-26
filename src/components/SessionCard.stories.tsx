import type { Meta, StoryObj } from "@storybook/react-vite";
import SessionCard from "./SessionCard";

const meta: Meta<typeof SessionCard> = {
  title: "Components/SessionCard",
  component: SessionCard,
  parameters: { docs: { description: { component: "Flip card with a front face (title, tags, duration, status) and a back face (detail sections). Use for browsable lists where each item has a summary + detail view. Not for single-item detail pages — use a full layout instead." } } },
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
    title: "Onboarding Walkthrough",
    subtitle:
      "A step-by-step introduction to the dashboard, key features, and account settings.",
    duration: "8 min",
    tags: ["Getting Started", "UX"],
    backContent: {
      heading: "Module Detail",
      sections: [
        { label: "Prerequisites", text: "Active account, verified email" },
        { label: "Covers", text: "Navigation, settings panel, notification preferences" },
        { label: "Note", text: "Skip if you completed setup via the CLI", color: "#FF4444" },
      ],
      footnote: "Content may vary by plan tier.",
    },
  },
};

export const Completed: Story = {
  args: {
    title: "Team Sync",
    subtitle: "Review shared dashboards and recent activity across your workspace.",
    duration: "6 min",
    status: "completed",
    tags: ["Collaboration"],
  },
};

export const Locked: Story = {
  args: {
    title: "Advanced Analytics",
    subtitle: "Deep-dive reporting with custom date ranges and export options.",
    duration: "12 min",
    status: "locked",
    tags: ["Pro"],
    lockReason: "Requires Pro plan",
  },
};
