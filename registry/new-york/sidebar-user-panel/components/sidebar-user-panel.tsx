"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

interface SidebarUserPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  avatarUrl?: string
  name?: string
  status?: string
  statusColor?: string
  href?: string
}

const SidebarUserPanel = React.forwardRef<HTMLDivElement, SidebarUserPanelProps>(
  (
    {
      className,
      avatarUrl,
      name,
      status = "Online",
      statusColor = "#00a65a",
      href,
      ...props
    },
    ref
  ) => {
    const content = (
      <div
        ref={ref}
        className={cn(
          "flex items-center p-[10px] overflow-hidden whitespace-nowrap",
          className
        )}
        {...props}
      >
        {/* Avatar */}
        {avatarUrl && (
          <div className="shrink-0">
            <img
              src={avatarUrl}
              alt={name || "User avatar"}
              className="w-[45px] h-[45px] rounded-full object-cover"
            />
          </div>
        )}

        {/* Info */}
        <div className="ml-[10px] flex flex-col overflow-hidden">
          {name && (
            <span className="text-white text-[14px] font-normal truncate">
              {name}
            </span>
          )}
          {status && (
            <span className="text-[12px] flex items-center gap-[5px] mt-[2px]">
              <span
                className="inline-block w-[8px] h-[8px] rounded-full"
                style={{ backgroundColor: statusColor }}
              />
              <span style={{ color: statusColor }}>{status}</span>
            </span>
          )}
        </div>
      </div>
    )

    if (href) {
      return (
        <a href={href} className="no-underline block">
          {content}
        </a>
      )
    }

    return content
  }
)
SidebarUserPanel.displayName = "SidebarUserPanel"

export { SidebarUserPanel }
export type { SidebarUserPanelProps }
