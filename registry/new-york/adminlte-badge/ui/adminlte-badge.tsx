"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

type BadgeVariant =
  | "default"
  | "primary"
  | "success"
  | "info"
  | "warning"
  | "danger"

const badgeStyles: Record<BadgeVariant, string> = {
  default: "bg-[#d2d6de] text-[#444]",
  primary: "bg-[#3c8dbc] text-white",
  success: "bg-[#00a65a] text-white",
  info: "bg-[#00c0ef] text-white",
  warning: "bg-[#f39c12] text-white",
  danger: "bg-[#dd4b39] text-white",
}

interface AdminLTEBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
}

const AdminLTEBadge = React.forwardRef<HTMLSpanElement, AdminLTEBadgeProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-block min-w-[10px] px-[6px] py-[3px] text-[12px] font-bold leading-none text-center whitespace-nowrap align-middle rounded-[10px]",
          badgeStyles[variant],
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }
)
AdminLTEBadge.displayName = "AdminLTEBadge"

export { AdminLTEBadge }
export type { AdminLTEBadgeProps, BadgeVariant }
