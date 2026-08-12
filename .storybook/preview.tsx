import type { Preview } from "@storybook/react-vite";
import { themes } from "storybook/theming";
import { create } from "storybook/theming/create";
import "../src/index.css";

const docsTheme = create({
  base: "dark",
  appPreviewBg: "#030B0F",
});

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
      theme: docsTheme,
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
