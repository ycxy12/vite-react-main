import { ReactNode } from "react"

export interface MetaProps {
  key?: string
  title?: string
  icon?: string
  auth?: boolean
  noCache?: boolean
  hidden?: boolean
  [key: string]: any
}

export interface RouteObject {
  path: string
  element?: ReactNode
  meta?: MetaProps
  children?: RouteObject[]
  redirect?: string
}

export interface MenuItem {
  path: string
  title: string
  element?: string
  icon?: string
  children?: MenuItem[]
  meta?: MetaProps
}

export interface MenuState {
  isCollapse: boolean
  flatMenuList: MenuItem[]
  menuList: MenuItem[]
} 