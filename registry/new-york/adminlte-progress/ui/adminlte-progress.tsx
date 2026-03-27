"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

type ProgressColor =
  | "aqua"
  | "red"
  | "green"
  | "yellow"
  | "blue"
  | "purple"
  | "light-blue"
  | "primary"
  | "success"
  | "info"
  | "warning"
  | "danger"

type ProgressSize = "xs" | "sm" | "md" | "xxs"

const progressColorStyles: Record<ProgressColor, string> = {
  aqua: "bg-[#00c0ef]",
  red: "bg-[#dd4b39]",
  green: "bg-[#00a65a]",
  yellow: "bg-[#f39c12]",
  blue: "bg-[#3c8dbc]",
  purple: "bg-[#605ca8]",
  "light-blue": "bg-[#3c8dbc]",
  primary: "bg-[#3c8dbc]",
  success: "bg-[#00a65a]",
  info: "bg-[#00c0ef]",
  warning: "bg-[#f39c12]",
  danger: "bg-[#dd4b39]",
}

const progressSizeStyles: Record<ProgressSize, string> = {
  xxs: "h-[3px]",
  xs: "h-[7px]",
  sm: "h-[10px]",
  md: "h-[20px]",
}

interface AdminLTEProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  color?: ProgressColor
  size?: ProgressSize
  striped?: boolean
  animated?: boolean
  showLabel?: boolean
  vertical?: boolean
  description?: string
}

const AdminLTEProgress = React.forwardRef<HTMLDivElement, AdminLTEProgressProps>(
  (
    {
      className,
      value,
      color = "light-blue",
      size = "md",
      striped = false,
      animated = false,
      showLabel = false,
      vertical = false,
      description,
      ...props
    },
    ref
  ) => {
    const clampedValue = Math.max(0, Math.min(100, value))

    if (vertical) {
      return (
        <div
          ref={ref}
          className={cn("inline-block h-[200px] w-[30px] mr-[10px]", className)}
          {...props}
        >
          <div className="relative h-full w-full bg-[#f4f4f4] rounded-[3px] overflow-hidden">
            <div
              className={cn(
                "absolute bottom-0 w-full transition-all duration-500",
                progressColorStyles[color],
                striped &&
                  "bg-[length:40px_40px] bg-[linear-gradient(45deg,rgba(255,255,255,.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.15)_50%,rgba(255,255,255,.15)_75%,transparent_75%,transparent)]",
                animated && "animate-[progress-bar-stripes_2s_linear_infinite]"
              )}
              style={{ height: `${clampedValue}%` }}
              role="progressbar"
              aria-valuenow={clampedValue}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
      )
    }

    return (
      <div ref={ref} className={cn("mb-0", className)} {...props}>
        {description && (
          <div className="flex justify-between mb-[5px]">
            <span className="text-[13px]">{description}</span>
            <span className="text-[13px] text-[#777]">{clampedValue}%</span>
          </div>
        )}
        <div
          className={cn(
            "w-full bg-[#f4f4f4] rounded-[3px] overflow-hidden shadow-[inset_0_1px_1px_rgba(0,0,0,0.1)]",
            progressSizeStyles[size]
          )}
        >
          <div
            className={cn(
              "h-full float-left transition-[width] duration-600 ease",
              progressColorStyles[color],
              striped &&
                "bg-[length:40px_40px] bg-[linear-gradient(45deg,rgba(255,255,255,.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.15)_50%,rgba(255,255,255,.15)_75%,transparent_75%,transparent)]",
              animated && "animate-[progress-bar-stripes_2s_linear_infinite]",
              showLabel &&
                "text-[12px] leading-[20px] text-white text-center"
            )}
            style={{ width: `${clampedValue}%` }}
            role="progressbar"
            aria-valuenow={clampedValue}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            {showLabel && `${clampedValue}%`}
          </div>
        </div>
      </div>
    )
  }
)
AdminLTEProgress.displayName = "AdminLTEProgress"

export { AdminLTEProgress }
export type { AdminLTEProgressProps, ProgressColor, ProgressSize }
