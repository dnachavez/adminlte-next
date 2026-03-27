"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

type ChartType = "line" | "area" | "bar" | "pie" | "donut"

interface AdminLTEChartPlaceholderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  type?: ChartType
  height?: number | string
  chartId?: string
  children?: React.ReactNode
}

const AdminLTEChartPlaceholder = React.forwardRef<
  HTMLDivElement,
  AdminLTEChartPlaceholderProps
>(
  (
    { className, type = "line", height = 250, chartId, children, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        id={chartId}
        className={cn("relative w-full", className)}
        style={{ height: typeof height === "number" ? `${height}px` : height }}
        data-chart-type={type}
        {...props}
      >
        {children || (
          <div className="absolute inset-0 flex items-center justify-center bg-[#f9f9f9] rounded-[3px] border border-dashed border-[#ddd]">
            <span className="text-[#999] text-[14px]">
              {type.charAt(0).toUpperCase() + type.slice(1)} Chart
            </span>
          </div>
        )}
      </div>
    )
  }
)
AdminLTEChartPlaceholder.displayName = "AdminLTEChartPlaceholder"

export { AdminLTEChartPlaceholder }
export type { AdminLTEChartPlaceholderProps, ChartType }
