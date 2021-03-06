declare module "*.vue" {
  import { Component } from "vue";
  const component: Component;
  export default component;
}
declare module "*.svg" {
  const content: string;
  export default content;
}
declare module "*.md" {
  const str: string;
  export default str;
}
