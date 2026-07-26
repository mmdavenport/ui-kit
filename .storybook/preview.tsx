import type { Preview } from "@storybook/react-vite";
import { themes } from "storybook/theming";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#030B0F" },
        { name: "card", value: "#0A1419" },
        { name: "navy", value: "#0B1120" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    },
    options: {
      storySort: {
        order: ["Introduction", "Design Tokens", "Primitives", "Components"],
      },
    },
  },
  tags: ["autodocs"],
};

export default preview;
