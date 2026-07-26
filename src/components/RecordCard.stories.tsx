import type { Meta, StoryObj } from "@storybook/react-vite";
import RecordCard from "./RecordCard";

const meta: Meta<typeof RecordCard> = {
  title: "Components/RecordCard",
  component: RecordCard,
  argTypes: {
    status: { control: "select", options: ["pending", "confirmed", "failed"] },
    title: { control: "text" },
    quote: { control: "text" },
    txHash: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof RecordCard>;

export const Confirmed: Story = {
  args: {
    status: "confirmed",
    title: "Integration Complete",
    quote: "What you resist persists; what you accept transforms.",
    txHash: "0x8a3f…b7c2e91d",
  },
};

export const Pending: Story = {
  args: { status: "pending" },
};

export const Failed: Story = {
  args: {
    status: "failed",
    title: "Recording Failed",
    quote: "Something went wrong — please try again.",
  },
};
