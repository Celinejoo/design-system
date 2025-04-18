// 색깔 정보(color tokens)를 받아서,
// CSS 변수(--color-primary, --color-primary-100, 이런 것)를 문자열로 만들어주는 함수야.
// 즉, 객체를  CSS 변수 문자열로 변환해주는 함수.
//
export const generateCssVariables = (
  obj: Record<string, unknown>,
  prefix = "--color",
) => {
  let result = "";

  // Object.entries(obj)
  // {a: 1, b: 2} 이런 객체가 있으면
  // [['a', 1], ['b', 2]] 이렇게 배열로 바뀐다.

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
