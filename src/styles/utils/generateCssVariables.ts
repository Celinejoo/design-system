export const generateCssVariables = (
  obj: Record<string, unknown>,
  prefix = "--color",
) => {
  let result = "";

  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === "object" && value !== null) {
      Object.entries(value).forEach(([shade, shadeValue]) => {
        result += `${prefix}-${key}-${shade}: ${shadeValue};\n`;
      });
    } else {
      result += `${prefix}-${key}: ${value};\n`;
    }
  });

  return result;
};
