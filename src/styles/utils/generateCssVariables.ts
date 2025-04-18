export const generateCssVariables = (
  obj: Record<string, any>,
  prefix = "--color",
) => {
  let result = "";

  for (const key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      for (const shade in obj[key]) {
        result += `${prefix}-${key}-${shade}: ${obj[key][shade]};\n`;
      }
    } else {
      result += `${prefix}-${key}: ${obj[key]};\n`;
    }
  }

  return result;
};
