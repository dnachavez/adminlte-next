"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

interface AdminLTECheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string
  color?: "primary" | "danger" | "info" | "warning" | "success"
  inline?: boolean
}

const colorStyles: Record<string, string> = {
  primary: "accent-[#3c8dbc]",
  danger: "accent-[#dd4b39]",
  info: "accent-[#00c0ef]",
  warning: "accent-[#f39c12]",
  success: "accent-[#00a65a]",
}

const AdminLTECheckbox = React.forwardRef<
  HTMLInputElement,
  AdminLTECheckboxProps
>(({ className, label, color, inline = false, ...props }, ref) => {
  return (
    <div
      className={cn(
        "relative min-h-[20px]",
        inline ? "inline-block mr-[10px]" : "mb-[5px]",
        className
      )}
    >
      <label className="flex items-center gap-[5px] cursor-pointer text-[14px] font-normal select-none">
        <input
          ref={ref}
          type="checkbox"
          className={cn(
            "w-[16px] h-[16px] cursor-pointer",
            color && colorStyles[color]
          )}
          {...props}
        />
        {label && <span>{label}</span>}
      </label>
    </div>
  )
})
AdminLTECheckbox.displayName = "AdminLTECheckbox"

interface AdminLTERadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string
  color?: "primary" | "danger" | "info" | "warning" | "success"
  inline?: boolean
}

const AdminLTERadio = React.forwardRef<HTMLInputElement, AdminLTERadioProps>(
  ({ className, label, color, inline = false, ...props }, ref) => {
    return (
      <div
        className={cn(
          "relative min-h-[20px]",
          inline ? "inline-block mr-[10px]" : "mb-[5px]",
          className
        )}
      >
        <label className="flex items-center gap-[5px] cursor-pointer text-[14px] font-normal select-none">
          <input
            ref={ref}
            type="radio"
            className={cn(
              "w-[16px] h-[16px] cursor-pointer",
              color && colorStyles[color]
            )}
            {...props}
          />
          {label && <span>{label}</span>}
        </label>
      </div>
    )
  }
)
AdminLTERadio.displayName = "AdminLTERadio"

export { AdminLTECheckbox, AdminLTERadio }
export type { AdminLTECheckboxProps, AdminLTERadioProps }
