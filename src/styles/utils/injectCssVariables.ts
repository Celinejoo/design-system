import { lightColors, darkColors } from "../tokens/color";
import { generateCssVariables } from "./generateCssVariables";

// generateCssVariables 만든 CSS 문자열을 HTML <style> 태그로 넣어주는 함수야.

export const injectCssVariables = () => {
  const lightCss = generateCssVariables(lightColors);
  // generateCssVariables(lightColors); return 값은 문자열이다.
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
  // <body data-theme="dark"> 다크모드 적용,

  document.head.appendChild(styleTag);
  // HTML <head> 안에 붙여 넣어버려.
};

// injectCssVariables() 함수는 개발자가 원할 때 호출된다.
