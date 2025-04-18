declare module "*.less" {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module "*.css" {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module "*.svg" {
  import React = require("react")
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}

declare module "*.json" {
  const value: any
  export default value
}

declare module "virtual:*" {
  const src: any
  export default src
} 