"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

interface AdminLTEDescriptionBlockProps
  extends React.HTMLAttributes<HTMLDivElement> {
  value: string | number
  label: string
  indicator?: "up" | "down" | "flat"
  indicatorColor?: string
  bordered?: boolean
}

const AdminLTEDescriptionBlock = React.forwardRef<
  HTMLDivElement,
  AdminLTEDescriptionBlockProps
>(
  (
    {
      className,
      value,
      label,
      indicator,
      indicatorColor,
      bordered = false,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "block text-center m-[10px_0]",
          bordered && "border-r border-r-[#f4f4f4]",
          className
        )}
        {...props}
      >
        {indicator && (
          <span
            className={cn(
              "text-[18px]",
              indicatorColor,
              !indicatorColor && indicator === "up" && "text-[#00a65a]",
              !indicatorColor && indicator === "down" && "text-[#dd4b39]",
              !indicatorColor && indicator === "flat" && "text-[#f39c12]"
            )}
          >
            {indicator === "up" && "▲"}
            {indicator === "down" && "▼"}
            {indicator === "flat" && "▶"}
          </span>
        )}
        <h5 className="font-bold m-0 p-0 text-[20px]">{value}</h5>
        <span className="text-[#999] text-[14px] uppercase">{label}</span>
      </div>
    )
  }
)
AdminLTEDescriptionBlock.displayName = "AdminLTEDescriptionBlock"

export { AdminLTEDescriptionBlock }
export type { AdminLTEDescriptionBlockProps }
