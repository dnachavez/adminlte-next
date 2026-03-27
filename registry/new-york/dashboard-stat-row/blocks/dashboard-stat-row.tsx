"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

interface DashboardStatRowProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: 2 | 3 | 4 | 6
}

function DashboardStatRow({
  className,
  columns = 4,
  children,
  ...props
}: DashboardStatRowProps) {
  const gridCols = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    6: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
  }[columns]

  return (
    <div
      className={cn("grid gap-[15px]", gridCols, className)}
      {...props}
    >
      {children}
    </div>
  )
}

export { DashboardStatRow }
export type { DashboardStatRowProps }
