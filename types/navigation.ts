import type React from "react"
export interface SideNavItem {
  title: string
  href: string
  isActive?: boolean
}

export interface PageContent {
  title: string
  content: React.ReactNode
}
