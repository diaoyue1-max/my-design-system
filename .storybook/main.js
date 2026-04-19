/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  "framework": "@storybook/react-vite",
  viteFinal: (config) => {
    // Rolldown (Vite 6) resolves Storybook's "code" export condition to raw .ts
    // source files. Filter it out so the compiled "default" condition is used.
    config.resolve = config.resolve || {};
    config.resolve.conditions = (config.resolve.conditions || []).filter(
      (c) => c !== 'code'
    );

    config.optimizeDeps = config.optimizeDeps || {};
    config.optimizeDeps.include = config.optimizeDeps.include || [];
    config.optimizeDeps.include.push('@storybook/addon-docs/blocks');
    return config;
  },
};
export default config;