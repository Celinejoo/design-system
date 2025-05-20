const peerDepsExternal = require("rollup-plugin-peer-deps-external");
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
const postcss = require("rollup-plugin-postcss");
const copy = require("rollup-plugin-copy");
const dts = require("rollup-plugin-dts").default;
const postcssCustomProperties = require("postcss-custom-properties");

module.exports = [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.cjs.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "dist/index.esm.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        modules: true,
        extract: "index.css", // dist/index.css 로 추출됨
        minimize: true,
        sourceMap: true,
        use: ["sass"],
        plugins: [
          postcssCustomProperties(), // ⚠️ var(--xxx) → 값으로 변환
        ],
      }),
      copy({
        targets: [
          {
            src: "src/styles/**/*",
            dest: "dist/styles",
            flatten: false,
          },
          {
            src: "src/components/**/*.{scss,css}",
            dest: "dist/components",
            flatten: false,
          },
        ],
      }),
    ],
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
];
