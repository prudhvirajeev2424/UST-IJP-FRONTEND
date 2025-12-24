/// <reference types="vite/client" />

// Allow importing image and other static asset files
declare module "*.avif";
declare module "*.bmp";
declare module "*.gif";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";
declare module "*.webp";
declare module "*.svg" {
  import * as React from "react";
  const src: string;
  export default src;
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
}

declare module "*.ico";
declare module "*.txt";
declare module "*.json" {
  const value: any;
  export default value;
}
