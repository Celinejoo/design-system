import { heading, text } from "../tokens/typography/typography";

export const generateTypographyClasses = () => {
  let result = "";

  const createClass = (
    prefix: string,
    styles: Record<
      string,
      { fontSize: string; fontWeight: string; lineHeight: string }
    >,
  ) => {
    Object.entries(styles).forEach(([size, styleProps]) => {
      result += `.${prefix}-${size} {\n`;
      result += `  font-size: ${styleProps.fontSize};\n`;
      result += `  font-weight: ${styleProps.fontWeight};\n`;
      result += `  line-height: ${styleProps.lineHeight};\n`;
      result += `}\n\n`;
    });
  };

  createClass("heading", heading);
  createClass("text", text);

  return result;
};
