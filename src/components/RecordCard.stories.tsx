import type { Meta, StoryObj } from "@storybook/react-vite";
import RecordCard from "./RecordCard";

const meta: Meta<typeof RecordCard> = {
  title: "Components/RecordCard",
  component: RecordCard,
  parameters: { docs: { description: { component: "Confirmation card for completed, pending, or failed record operations. Use after a write action to show outcome + next steps. Not for read-only data display — use a detail card instead." } } },
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
    title: "Draft Saved",
    quote: "Your changes have been committed to the ledger.",
    txHash: "0x8a3f…b7c2e91d",
  },
};

export const Pending: Story = {
  args: { status: "pending" },
};

export const Failed: Story = {
  args: {
    status: "failed",
    title: "Save Failed",
    quote: "Something went wrong — please try again.",
  },
};
