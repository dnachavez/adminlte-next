"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

/* ---------------------------------------------------------------------------
 * Timeline
 * -------------------------------------------------------------------------- */

interface TimelineProps extends React.HTMLAttributes<HTMLUListElement> {}

const Timeline = React.forwardRef<HTMLUListElement, TimelineProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <ul
        ref={ref}
        className={cn(
          "relative list-none m-[0_0_30px] p-0 before:content-[''] before:absolute before:top-0 before:bottom-0 before:w-[4px] before:bg-[#ddd] before:left-[31px] before:m-0",
          className
        )}
        {...props}
      >
        {children}
      </ul>
    )
  }
)
Timeline.displayName = "Timeline"

/* ---------------------------------------------------------------------------
 * TimelineLabel
 * -------------------------------------------------------------------------- */

interface TimelineLabelProps extends React.HTMLAttributes<HTMLLIElement> {
  color?: string
}

const TimelineLabel = React.forwardRef<HTMLLIElement, TimelineLabelProps>(
  ({ className, color = "bg-[#3c8dbc]", children, ...props }, ref) => {
    return (
      <li
        ref={ref}
        className={cn("mb-[20px]", className)}
        {...props}
      >
        <span
          className={cn(
            "inline-block py-[5px] px-[15px] rounded-[4px] text-white font-bold text-[14px]",
            color
          )}
        >
          {children}
        </span>
      </li>
    )
  }
)
TimelineLabel.displayName = "TimelineLabel"

/* ---------------------------------------------------------------------------
 * TimelineItem
 * -------------------------------------------------------------------------- */

interface TimelineItemProps extends React.HTMLAttributes<HTMLLIElement> {
  icon?: React.ReactNode
  iconColor?: string
  time?: string
  header?: React.ReactNode
  footer?: React.ReactNode
}

const TimelineItem = React.forwardRef<HTMLLIElement, TimelineItemProps>(
  (
    {
      className,
      icon,
      iconColor = "bg-[#d2d6de]",
      time,
      header,
      footer,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <li
        ref={ref}
        className={cn("relative mb-[15px]", className)}
        {...props}
      >
        {/* Time marker icon */}
        <span
          className={cn(
            "absolute left-[18px] w-[30px] h-[30px] rounded-full text-center leading-[30px] text-[15px] text-white z-[1]",
            iconColor
          )}
        >
          {icon}
        </span>

        {/* Content */}
        <div className="ml-[60px] bg-white rounded-[3px] p-0 relative shadow-[0_1px_1px_rgba(0,0,0,0.1)]">
          {/* Time stamp */}
          {time && (
            <span className="absolute right-[10px] top-[10px] text-[#999] text-[12px] italic">
              {time}
            </span>
          )}

          {/* Header */}
          {header && (
            <h3 className="text-[16px] m-0 p-[10px] border-b border-b-[#f4f4f4] font-semibold text-[#333]">
              {header}
            </h3>
          )}

          {/* Body */}
          {children && (
            <div className="p-[10px] text-[14px] text-[#444]">{children}</div>
          )}

          {/* Footer */}
          {footer && (
            <div className="p-[10px] border-t border-t-[#f4f4f4]">
              {footer}
            </div>
          )}
        </div>
      </li>
    )
  }
)
TimelineItem.displayName = "TimelineItem"

export { Timeline, TimelineItem, TimelineLabel }
export type { TimelineProps, TimelineItemProps, TimelineLabelProps }
