/// <reference types="react-scripts" />

declare module "*.txt" {
  const content: string;
  export default content;
}

declare module "*.mp3" {
  const content: string;
  export default content;
}
