import type { Meta, StoryObj } from "@storybook/react-vite";
import StatusTicker from "./StatusTicker";

const meta: Meta<typeof StatusTicker> = {
  title: "Components/StatusTicker",
  component: StatusTicker,
  argTypes: {
    trailingLabel: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof StatusTicker>;

const sampleItems = [
  { symbol: "BTC", price: 105000, change24h: 2.3 },
  { symbol: "ETH", price: 3400, change24h: -1.1 },
  { symbol: "XRP", price: 2.18, change24h: 0.5 },
  { symbol: "ADA", price: 0.72, change24h: -0.3 },
  { symbol: "ALGO", price: 0.38, change24h: 1.8 },
];

export const Default: Story = {
  args: {
    items: sampleItems,
    trailingLabel: "ISO 20022 + BTC + ETH",
  },
};

export const SingleItem: Story = {
  args: {
    items: [{ symbol: "ETH", price: 3400, change24h: 4.2 }],
  },
};

export const AllNegative: Story = {
  args: {
    items: sampleItems.map((i) => ({ ...i, change24h: -Math.abs(i.change24h) })),
    trailingLabel: "Market Down",
  },
};
