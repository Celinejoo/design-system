module.exports = {
  parser: "@typescript-eslint/parser", // ⭐️ 이 줄 꼭 있어야 해
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off",
    "react/button-has-type": "off",
    "react/jsx-props-no-spreading": ["off"],
    "react/jsx-filename-extension": [
      "warn",
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-restricted-exports": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function", // ⭐️ 요거 추가!
        unnamedComponents: "arrow-function", // ⭐️ 요것도!
      },
    ],
  },
};
