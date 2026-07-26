import type { Meta, StoryObj } from "@storybook/react-vite";
import TeachingCard from "./TeachingCard";

const meta: Meta<typeof TeachingCard> = {
  title: "Components/TeachingCard",
  component: TeachingCard,
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
    name: "Blueberries",
    tags: ["Antioxidant", "Brain Health"],
    caption: "Rich in anthocyanins that support cognitive function.",
    focus: "NEURO",
    teaching:
      "Anthocyanins cross the blood-brain barrier and reduce neuroinflammation. Regular intake is associated with improved memory consolidation.",
    supplement: "Consider a concentrated extract for year-round availability.",
    tip: "Fresh or frozen both retain the bioactive compounds.",
  },
};

export const MinimalCard: Story = {
  args: {
    name: "Turmeric",
    tags: ["Anti-inflammatory"],
    caption: "Contains curcumin, a potent anti-inflammatory compound.",
  },
};

export const WithWarning: Story = {
  args: {
    name: "Green Tea Extract",
    tags: ["Stimulant", "Antioxidant"],
    caption: "Provides L-theanine and catechins.",
    focus: "FOCUS",
    teaching:
      "L-theanine promotes calm alertness by modulating alpha wave activity.",
    warning: "High doses may affect iron absorption. Take between meals.",
  },
};
