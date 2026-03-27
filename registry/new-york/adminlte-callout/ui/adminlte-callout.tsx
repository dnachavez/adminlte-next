"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

type CalloutVariant = "default" | "success" | "info" | "warning" | "danger"

const calloutStyles: Record<CalloutVariant, string> = {
  default: "border-l-[#d2d6de]",
  success: "border-l-[#00a65a]",
  info: "border-l-[#00c0ef]",
  warning: "border-l-[#f39c12]",
  danger: "border-l-[#dd4b39]",
}

const calloutTitleStyles: Record<CalloutVariant, string> = {
  default: "text-[#444]",
  success: "text-[#00a65a]",
  info: "text-[#00c0ef]",
  warning: "text-[#f39c12]",
  danger: "text-[#dd4b39]",
}

interface AdminLTECalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CalloutVariant
  title?: string
}

const AdminLTECallout = React.forwardRef<HTMLDivElement, AdminLTECalloutProps>(
  ({ className, variant = "default", title, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mb-[20px] p-[20px] border-l-[5px] border-l-solid bg-[#fff] shadow-[0_1px_1px_rgba(0,0,0,0.15)] rounded-[3px]",
          calloutStyles[variant],
          className
        )}
        {...props}
      >
        {title && (
          <h4
            className={cn(
              "mt-0 mb-[5px] text-[18px] font-light",
              calloutTitleStyles[variant]
            )}
          >
            {title}
          </h4>
        )}
        {children}
      </div>
    )
  }
)
AdminLTECallout.displayName = "AdminLTECallout"

export { AdminLTECallout }
export type { AdminLTECalloutProps, CalloutVariant }
