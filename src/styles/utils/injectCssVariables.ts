import { lightColors, darkColors } from "../tokens/color";
import { generateCssVariables } from "./generateCssVariables";

export const injectCssVariables = () => {
  const lightCss = generateCssVariables(lightColors);
  const darkCss = generateCssVariables(darkColors);

  const styleTag = document.createElement("style");
  styleTag.innerHTML = `
    :root {
      ${lightCss}
    }

    [data-theme="dark"] {
      ${darkCss}
    }
  `;

  document.head.appendChild(styleTag);
};
