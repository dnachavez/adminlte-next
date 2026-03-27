"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

type AlertVariant = "success" | "info" | "warning" | "danger"

const alertStyles: Record<AlertVariant, string> = {
  success: "bg-[#dff0d8] border-[#d6e9c6] text-[#3c763d]",
  info: "bg-[#d9edf7] border-[#bce8f1] text-[#31708f]",
  warning: "bg-[#fcf8e3] border-[#faebcc] text-[#8a6d3b]",
  danger: "bg-[#f2dede] border-[#ebccd1] text-[#a94442]",
}

interface AdminLTEAlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant
  dismissible?: boolean
  onDismiss?: () => void
  icon?: React.ReactNode
}

const AdminLTEAlert = React.forwardRef<HTMLDivElement, AdminLTEAlertProps>(
  (
    {
      className,
      variant = "info",
      dismissible = false,
      onDismiss,
      icon,
      children,
      ...props
    },
    ref
  ) => {
    const [dismissed, setDismissed] = React.useState(false)

    if (dismissed) return null

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          "p-[15px] mb-[20px] border border-solid rounded-[3px]",
          alertStyles[variant],
          className
        )}
        {...props}
      >
        {dismissible && (
          <button
            type="button"
            className="float-right -mr-[21px] -mt-[15px] p-0 bg-transparent border-none text-[21px] font-bold leading-none text-black/20 cursor-pointer hover:text-black/50"
            onClick={() => {
              setDismissed(true)
              onDismiss?.()
            }}
            aria-label="Close"
          >
            &times;
          </button>
        )}
        {icon && <span className="mr-[10px]">{icon}</span>}
        {children}
      </div>
    )
  }
)
AdminLTEAlert.displayName = "AdminLTEAlert"

export { AdminLTEAlert }
export type { AdminLTEAlertProps, AlertVariant }
