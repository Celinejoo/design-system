// src/styles/utils/generateCssVariables.ts

export const generateCssVariables = (obj: object, prefix: string) => {
  let result = "";

  const process = (key: string, value: any) => {
    if (typeof value === "object" && value !== null) {
      Object.entries(value).forEach(([nestedKey, nestedValue]) => {
        process(`${key}-${nestedKey}`, nestedValue);
      });
    } else {
      result += `--${prefix}-${key}: ${value};\n`;
    }
  };

  Object.entries(obj).forEach(([key, value]) => {
    process(key, value);
  });

  return result;
};
