import type { Meta, StoryObj } from "@storybook/react-vite";
import WalletPicker from "./WalletPicker";

const meta: Meta<typeof WalletPicker> = {
  title: "Components/WalletPicker",
  component: WalletPicker,
  parameters: { docs: { description: { component: "Modal dialog for selecting a browser-injected or external wallet via EIP-6963. Use as the entry point for wallet-based auth flows. Not needed if the app uses a single hardcoded provider." } } },
  argTypes: {
    connecting: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof WalletPicker>;

const sampleWallets = [
  { name: "MetaMask", rdns: "io.metamask" },
  { name: "Brave Wallet", rdns: "com.brave.wallet" },
  { name: "Rabby", rdns: "io.rabby" },
];

export const WithWallets: Story = {
  args: { wallets: sampleWallets, connecting: false },
};

export const NoWalletsDetected: Story = {
  args: { wallets: [], connecting: false },
};

export const Connecting: Story = {
  args: { wallets: [], connecting: true },
};
