import { addons } from "storybook/manager-api";
import { create } from "storybook/theming/create";

addons.setConfig({
  theme: create({
    base: "dark",
    brandTitle: "Margarita Montañez Davenport — ui-kit",
    brandUrl: "https://github.com/mmdavenport/ui-kit",
  }),
});
