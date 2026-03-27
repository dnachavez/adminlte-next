"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

interface AdminLTEInputGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg"
  addonBefore?: React.ReactNode
  addonAfter?: React.ReactNode
  buttonBefore?: React.ReactNode
  buttonAfter?: React.ReactNode
}

const AdminLTEInputGroup = React.forwardRef<
  HTMLDivElement,
  AdminLTEInputGroupProps
>(
  (
    {
      className,
      size = "md",
      addonBefore,
      addonAfter,
      buttonBefore,
      buttonAfter,
      children,
      ...props
    },
    ref
  ) => {
    const sizeClass = {
      sm: "text-[12px]",
      md: "text-[14px]",
      lg: "text-[18px]",
    }[size]

    const addonClass =
      "inline-flex items-center px-[12px] py-[6px] text-[14px] font-normal leading-[1] text-[#555] text-center bg-[#eee] border border-solid border-[#ccc] rounded-[3px] whitespace-nowrap"

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex w-full border-collapse",
          sizeClass,
          className
        )}
        {...props}
      >
        {addonBefore && (
          <span
            className={cn(
              addonClass,
              "rounded-r-none border-r-0"
            )}
          >
            {addonBefore}
          </span>
        )}
        {buttonBefore && (
          <span className="flex items-center [&>*]:rounded-r-none">
            {buttonBefore}
          </span>
        )}
        <div className="relative flex-1 [&>input]:rounded-none [&>input:first-child]:rounded-l-[3px] [&>input:last-child]:rounded-r-[3px]">
          {children}
        </div>
        {addonAfter && (
          <span
            className={cn(
              addonClass,
              "rounded-l-none border-l-0"
            )}
          >
            {addonAfter}
          </span>
        )}
        {buttonAfter && (
          <span className="flex items-center [&>*]:rounded-l-none">
            {buttonAfter}
          </span>
        )}
      </div>
    )
  }
)
AdminLTEInputGroup.displayName = "AdminLTEInputGroup"

export { AdminLTEInputGroup }
export type { AdminLTEInputGroupProps }
