"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

interface DashboardOverviewProps extends React.HTMLAttributes<HTMLDivElement> {
  statsRow?: React.ReactNode
  mainContent?: React.ReactNode
  sideContent?: React.ReactNode
  bottomRow?: React.ReactNode
}

function DashboardOverview({
  className,
  statsRow,
  mainContent,
  sideContent,
  bottomRow,
  children,
  ...props
}: DashboardOverviewProps) {
  return (
    <div className={cn("", className)} {...props}>
      {/* Content Header */}
      <section className="p-[15px_15px_0_15px]">
        <div className="flex items-center justify-between">
          <h1 className="text-[24px] m-0 font-normal">Dashboard</h1>
        </div>
      </section>

      {/* Stats Row */}
      {statsRow && (
        <section className="px-[15px] pt-[15px]">{statsRow}</section>
      )}

      {/* Main Content */}
      <section className="p-[15px]">
        {children || (
          <div className="flex gap-[15px] flex-col lg:flex-row">
            {mainContent && (
              <div className="flex-1">{mainContent}</div>
            )}
            {sideContent && (
              <div className="w-full lg:w-[350px] flex-shrink-0">
                {sideContent}
              </div>
            )}
          </div>
        )}
      </section>

      {/* Bottom Row */}
      {bottomRow && (
        <section className="px-[15px] pb-[15px]">{bottomRow}</section>
      )}
    </div>
  )
}

export { DashboardOverview }
export type { DashboardOverviewProps }
