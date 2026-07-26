import type { Meta, StoryObj } from "@storybook/react-vite";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Primitives/Input",
  component: Input,
  argTypes: {
    label: { control: "text" },
    error: { control: "text" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = { args: { label: "Email", placeholder: "you@example.com" } };
export const WithValue: Story = { args: { label: "Name", defaultValue: "Jane Doe" } };
export const WithError: Story = { args: { label: "Email", defaultValue: "invalid", error: "Enter a valid email address." } };
export const Disabled: Story = { args: { label: "Locked field", defaultValue: "Read only", disabled: true } };
export const NoLabel: Story = { args: { placeholder: "Search…" } };
