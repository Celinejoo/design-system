import { lightColors, darkColors } from "../tokens/color";
import { spacing, radii, shadows } from "../tokens/foundation";
import { generateCssVariables } from "./generateCssVariables";
import {
  fontSize,
  fontWeight,
  lineHeight,
} from "../tokens/typography/typographyVars"; // 이거 추가

export const injectCssVariables = () => {
  const lightColorCss = generateCssVariables(lightColors, "color");
  const darkColorCss = generateCssVariables(darkColors, "color");

  const spacingCss = generateCssVariables(spacing, "spacing");
  const radiusCss = generateCssVariables(radii, "radius");
  const shadowCss = generateCssVariables(shadows, "shadow");

  const fontSizeCss = generateCssVariables(fontSize, "font-size");
  const fontWeightCss = generateCssVariables(fontWeight, "font-weight");
  const lineHeightCss = generateCssVariables(lineHeight, "line-height");

  const styleTag = document.createElement("style");
  styleTag.setAttribute("id", "design-system-utilities");

  styleTag.innerHTML = `
    :root {
      ${lightColorCss}
      ${spacingCss}
      ${radiusCss}
      ${shadowCss}
      ${fontSizeCss}
      ${fontWeightCss}
      ${lineHeightCss}
    }

    [data-theme="dark"] {
      ${darkColorCss}
    }
  `;

  document.head.appendChild(styleTag);
};
