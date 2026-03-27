"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

interface BlankPageProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  subtitle?: string
  breadcrumbs?: { label: string; href?: string; active?: boolean }[]
  children?: React.ReactNode
}

function BlankPage({
  className,
  title = "Blank Page",
  subtitle = "it all starts here",
  breadcrumbs = [],
  children,
  ...props
}: BlankPageProps) {
  return (
    <div className={cn("", className)} {...props}>
      {/* Content Header */}
      <section className="p-[15px_15px_0_15px]">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[24px] m-0 inline-block font-normal">{title}</h1>
            {subtitle && (
              <small className="text-[15px] text-[#666] ml-[10px]">{subtitle}</small>
            )}
          </div>
          {breadcrumbs.length > 0 && (
            <ol className="flex list-none m-0 p-0 gap-[5px] text-[14px]">
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-[5px]">
                  {i > 0 && <span className="text-[#666]">/</span>}
                  {crumb.active ? (
                    <span className="text-[#666]">{crumb.label}</span>
                  ) : (
                    <a href={crumb.href || "#"} className="text-[#3c8dbc] no-underline hover:underline">
                      {crumb.label}
                    </a>
                  )}
                </li>
              ))}
            </ol>
          )}
        </div>
      </section>

      {/* Main content */}
      <section className="p-[15px]">
        {children || (
          <div className="bg-white shadow-[0_1px_1px_rgba(0,0,0,0.1)] rounded-[3px] border-t-[3px] border-t-[#d2d6de]">
            <div className="p-[10px]">
              <h4 className="text-[18px] m-0 mb-[10px]">Title</h4>
            </div>
            <div className="p-[10px]">
              Start creating your amazing application!
            </div>
            <div className="p-[10px] border-t border-t-[#f4f4f4]">
              Footer
            </div>
          </div>
        )}
      </section>
    </div>
  )
}

export { BlankPage }
export type { BlankPageProps }
