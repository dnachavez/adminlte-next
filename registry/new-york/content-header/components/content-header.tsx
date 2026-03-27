"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

interface Breadcrumb {
  label: string
  href?: string
  active?: boolean
}

interface ContentHeaderProps extends React.HTMLAttributes<HTMLElement> {
  title: string
  subtitle?: string
  breadcrumbs?: Breadcrumb[]
}

const ContentHeader = React.forwardRef<HTMLElement, ContentHeaderProps>(
  ({ className, title, subtitle, breadcrumbs = [], ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("px-[15px] pt-[15px] pb-0", className)}
        {...props}
      >
        <div className="flex items-center justify-between flex-wrap gap-[10px]">
          <div>
            <h1 className="text-[24px] m-0 inline-block font-normal">
              {title}
              {subtitle && (
                <small className="text-[15px] text-[#666] ml-[10px]">
                  {subtitle}
                </small>
              )}
            </h1>
          </div>

          {breadcrumbs.length > 0 && (
            <ol className="flex items-center list-none m-0 p-0 text-[14px]">
              {breadcrumbs.map((crumb, index) => (
                <li
                  key={index}
                  className={cn(
                    "flex items-center",
                    crumb.active
                      ? "text-[#444]"
                      : "text-[#3c8dbc]"
                  )}
                >
                  {index > 0 && (
                    <span className="mx-[5px] text-[#999]">/</span>
                  )}
                  {crumb.active || !crumb.href ? (
                    <span>{crumb.label}</span>
                  ) : (
                    <a
                      href={crumb.href}
                      className="text-[#3c8dbc] no-underline hover:underline"
                    >
                      {crumb.label}
                    </a>
                  )}
                </li>
              ))}
            </ol>
          )}
        </div>
      </section>
    )
  }
)
ContentHeader.displayName = "ContentHeader"

export { ContentHeader }
export type { ContentHeaderProps, Breadcrumb }
