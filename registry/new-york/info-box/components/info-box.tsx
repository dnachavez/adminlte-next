"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"
import {
  type AdminLTEColor,
  bgColorMap,
} from "@/registry/new-york/adminlte-theme/lib/colors"

interface InfoBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: AdminLTEColor
  icon?: React.ReactNode
  text?: string
  number?: string | number
  progress?: number
  progressDescription?: string
}

const InfoBox = React.forwardRef<HTMLDivElement, InfoBoxProps>(
  (
    {
      className,
      color = "aqua",
      icon,
      text,
      number: numberValue,
      progress,
      progressDescription,
      ...props
    },
    ref
  ) => {
    const clampedProgress =
      progress !== undefined ? Math.max(0, Math.min(100, progress)) : undefined

    return (
      <div
        ref={ref}
        className={cn(
          "flex min-h-[90px] mb-[15px] rounded-[2px] bg-white",
          className
        )}
        style={{ boxShadow: "0 1px 1px rgba(0,0,0,0.1)" }}
        {...props}
      >
        {/* Icon area */}
        <div
          className={cn(
            "flex w-[90px] h-[90px] items-center justify-center text-[45px] leading-[90px]",
            bgColorMap[color]
          )}
        >
          {icon}
        </div>

        {/* Content area */}
        <div className="flex-1 p-[5px_10px]">
          <span className="block text-[14px] font-bold uppercase whitespace-nowrap overflow-hidden text-ellipsis">
            {text}
          </span>
          <span className="block text-[18px] font-bold">
            {numberValue}
          </span>

          {/* Optional progress bar */}
          {clampedProgress !== undefined && (
            <div className="mt-[5px]">
              <div className="h-[3px] w-full bg-black/20 rounded-[1px] overflow-hidden">
                <div
                  className="h-full bg-white transition-[width] duration-500"
                  style={{ width: `${clampedProgress}%` }}
                  role="progressbar"
                  aria-valuenow={clampedProgress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              {progressDescription && (
                <span className="block mt-[3px] text-[12px] text-[#777] whitespace-nowrap overflow-hidden text-ellipsis">
                  {progressDescription}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }
)
InfoBox.displayName = "InfoBox"

export { InfoBox }
export type { InfoBoxProps }
