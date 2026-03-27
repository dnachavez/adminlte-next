"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

type LabelVariant =
  | "default"
  | "primary"
  | "success"
  | "info"
  | "warning"
  | "danger"

const labelStyles: Record<LabelVariant, string> = {
  default: "bg-[#d2d6de] text-[#444]",
  primary: "bg-[#3c8dbc] text-white",
  success: "bg-[#00a65a] text-white",
  info: "bg-[#00c0ef] text-white",
  warning: "bg-[#f39c12] text-white",
  danger: "bg-[#dd4b39] text-white",
}

interface AdminLTELabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: LabelVariant
}

const AdminLTELabel = React.forwardRef<HTMLSpanElement, AdminLTELabelProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline px-[6px] py-[2px] text-[75%] font-bold leading-none text-center whitespace-nowrap align-baseline rounded-[3px]",
          labelStyles[variant],
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }
)
AdminLTELabel.displayName = "AdminLTELabel"

export { AdminLTELabel }
export type { AdminLTELabelProps, LabelVariant }
