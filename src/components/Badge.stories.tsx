import type { Meta, StoryObj } from "@storybook/react-vite";
import Badge from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Primitives/Badge",
  component: Badge,
  argTypes: {
    variant: { control: "select", options: ["default", "success", "warning", "error", "info"] },
    label: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = { args: { label: "Draft" } };
export const Success: Story = { args: { variant: "success", label: "Active" } };
export const Warning: Story = { args: { variant: "warning", label: "Pending" } };
export const Error: Story = { args: { variant: "error", label: "Failed" } };
export const Info: Story = { args: { variant: "info", label: "New" } };
