export const generateCssVariables = (
  obj: Record<string, unknown>,
  prefix = "--color",
) => {
  let result = "";

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object" && value !== null) {
      for (const [shade, shadeValue] of Object.entries(value)) {
        result += `${prefix}-${key}-${shade}: ${shadeValue};\n`;
      }
    } else {
      result += `${prefix}-${key}: ${value};\n`;
    }
  }

  return result;
};
