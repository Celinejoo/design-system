// src/global.d.ts 또는 프로젝트 루트에

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
