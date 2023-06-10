import type { StorybookConfig } from "@storybook/react-vite";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  previewHead: (head) => (`
    ${head}
    <link href='https://fonts.googleapis.com/css?family=Quicksand' rel='stylesheet'>
    <link href="https://fonts.cdnfonts.com/css/mukta" rel="stylesheet"> 
  `),
  previewBody: (body) => (`
    ${body}
    <style>
      #main {
        background-color: red;
      }
    </style>
  `)
};
export default config;
