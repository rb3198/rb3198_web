declare global {
  declare module "*.module.css";
  declare module "*.module.scss";
  declare module "*.scss";
  declare module "*.pdf";
  declare module "*.png";
  declare module "*.svg";
  declare module "*.gif";
  interface Window {
    dataLayer: Record<string, any>[];
  }
}
export {};
