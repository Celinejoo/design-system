import { injectTypographyClasses } from "../src/styles/utils/injectTypographyClasses";
import { injectCssVariables } from "../src/styles/utils/injectCssVariables";
import { generateTypographyClasses } from "../src/styles/utils/generateTypographyClasses";
injectCssVariables();
generateTypographyClasses();
injectTypographyClasses();

/** @type { import('@storybook/react').Preview } */

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
