"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

interface ContentWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  collapsed?: boolean
}

const ContentWrapper = React.forwardRef<HTMLDivElement, ContentWrapperProps>(
  ({ className, collapsed = false, children, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "min-h-full bg-[#ecf0f5] z-[800]",
          "transition-[transform,margin] duration-300 ease-in-out",
          collapsed ? "ml-[50px]" : "ml-[230px]",
          "max-md:ml-0",
          className
        )}
        style={style}
        {...props}
      >
        {children}
      </div>
    )
  }
)
ContentWrapper.displayName = "ContentWrapper"

export { ContentWrapper }
export type { ContentWrapperProps }
