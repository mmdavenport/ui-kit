import type { Meta, StoryObj } from "@storybook/react-vite";
import Alert from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Primitives/Alert",
  component: Alert,
  parameters: { docs: { description: { component: "Block-level notification for system messages, validation summaries, or transient feedback. Dismissible when onDismiss is provided. For inline field errors, use Input's error prop instead." } } },
  argTypes: {
    variant: { control: "select", options: ["info", "success", "warning", "error"] },
    title: { control: "text" },
    message: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = { args: { variant: "info", title: "Heads up", message: "A new version is available. Refresh to update." } };
export const Success: Story = { args: { variant: "success", title: "Saved", message: "Your settings have been applied." } };
export const Warning: Story = { args: { variant: "warning", title: "Quota", message: "You have used 90% of your monthly allocation." } };
export const Error: Story = { args: { variant: "error", title: "Connection lost", message: "Unable to reach the server. Check your network and retry." } };
export const Dismissible: Story = { args: { variant: "info", message: "This alert can be dismissed.", onDismiss: () => {} } };
export const MessageOnly: Story = { args: { message: "A simple informational message without a title." } };
