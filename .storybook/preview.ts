import type { Preview } from "@storybook/react";
import { GmThemeProvider } from '../src/styleguide/GmThemeProvider';

const preview: Preview = {
  render: () => (
    <GmThemeProvider>
  ),
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
