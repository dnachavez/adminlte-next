"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

interface HeaderLogoProps extends React.HTMLAttributes<HTMLAnchorElement> {
  logoFull: React.ReactNode
  logoMini: React.ReactNode
  collapsed: boolean
  href: string
}

const HeaderLogo = React.forwardRef<HTMLAnchorElement, HeaderLogoProps>(
  ({ className, logoFull, logoMini, collapsed, href, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        className={cn(
          "flex items-center h-[50px] transition-[width] duration-300 no-underline",
          "bg-[var(--adminlte-skin-logo-bg)] text-[var(--adminlte-skin-logo-color)]",
          "hover:bg-[var(--adminlte-skin-logo-hover-bg)]",
          collapsed ? "w-[50px]" : "w-[230px]",
          className
        )}
        {...props}
      >
        {collapsed ? (
          <span className="text-[18px] font-bold text-center w-[50px]">
            {logoMini}
          </span>
        ) : (
          <span className="text-[20px] font-bold pl-[15px]">
            {logoFull}
          </span>
        )}
      </a>
    )
  }
)
HeaderLogo.displayName = "HeaderLogo"

export { HeaderLogo }
export type { HeaderLogoProps }
