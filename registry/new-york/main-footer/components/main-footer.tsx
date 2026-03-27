"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

interface MainFooterProps extends React.HTMLAttributes<HTMLElement> {
  leftContent?: React.ReactNode
  rightContent?: React.ReactNode
}

const MainFooter = React.forwardRef<HTMLElement, MainFooterProps>(
  ({ className, leftContent, rightContent, children, ...props }, ref) => {
    return (
      <footer
        ref={ref}
        className={cn(
          "bg-white p-[15px] text-[#444] border-t border-[#d2d6de]",
          "transition-[margin-left] duration-300",
          className
        )}
        {...props}
      >
        {(leftContent || rightContent) ? (
          <div className="flex justify-between items-center">
            {leftContent && <div>{leftContent}</div>}
            {rightContent && <div className="ml-auto">{rightContent}</div>}
          </div>
        ) : (
          children
        )}
      </footer>
    )
  }
)
MainFooter.displayName = "MainFooter"

export { MainFooter }
export type { MainFooterProps }
