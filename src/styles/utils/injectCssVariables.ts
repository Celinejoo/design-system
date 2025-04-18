import { lightColors, darkColors } from "../tokens/color";
import { spacing, radii, shadows } from "../tokens/foundation";
import { generateCssVariables } from "./generateCssVariables";

export const injectCssVariables = () => {
  const lightColorCss = generateCssVariables(lightColors, "color");
  const darkColorCss = generateCssVariables(darkColors, "color");

  const spacingCss = generateCssVariables(spacing, "spacing");
  const radiusCss = generateCssVariables(radii, "radius");
  const shadowCss = generateCssVariables(shadows, "shadow");

  const styleTag = document.createElement("style");
  styleTag.setAttribute("id", "design-system-utilities");

  styleTag.innerHTML = `
    :root {
      ${lightColorCss}
      ${spacingCss}
      ${radiusCss}
      ${shadowCss}
    }

    [data-theme="dark"] {
      ${darkColorCss}
    }
  `;

  document.head.appendChild(styleTag);
};
