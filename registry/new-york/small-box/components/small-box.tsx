"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"
import {
  type AdminLTEColor,
  bgColorMap,
} from "@/registry/new-york/adminlte-theme/lib/colors"

interface SmallBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: AdminLTEColor
  value?: string | number
  text?: string
  icon?: React.ReactNode
  footerText?: string
  footerIcon?: React.ReactNode
  href?: string
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

const SmallBox = React.forwardRef<HTMLDivElement, SmallBoxProps>(
  (
    {
      className,
      color = "aqua",
      value,
      text,
      icon,
      footerText,
      footerIcon,
      href,
      onClick,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative mb-[20px] overflow-hidden rounded-[2px]",
          bgColorMap[color],
          className
        )}
        style={{ boxShadow: "0 1px 1px rgba(0,0,0,0.1)" }}
        {...props}
      >
        {/* Inner content */}
        <div className="p-[10px]">
          <h3 className="m-0 p-0 text-[38px] font-bold leading-tight whitespace-nowrap">
            {value}
          </h3>
          <p className="m-0 text-[15px]">{text}</p>
        </div>

        {/* Icon */}
        {icon && (
          <div className="absolute right-[10px] top-[10px] text-[90px] leading-none opacity-20">
            {icon}
          </div>
        )}

        {/* Footer link */}
        {(footerText || footerIcon) && (
          <a
            href={href || "#"}
            onClick={onClick}
            className="block bg-black/10 py-[3px] px-0 text-center text-white/80 no-underline hover:text-white hover:bg-black/15 transition-colors"
          >
            {footerText && <span>{footerText}</span>}
            {footerIcon && (
              <span className="ml-[5px] inline-flex">{footerIcon}</span>
            )}
          </a>
        )}
      </div>
    )
  }
)
SmallBox.displayName = "SmallBox"

export { SmallBox }
export type { SmallBoxProps }
