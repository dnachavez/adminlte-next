"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

interface AdminLTETableProps
  extends React.TableHTMLAttributes<HTMLTableElement> {
  striped?: boolean
  bordered?: boolean
  hover?: boolean
  condensed?: boolean
  responsive?: boolean
}

const AdminLTETable = React.forwardRef<HTMLTableElement, AdminLTETableProps>(
  (
    {
      className,
      striped = false,
      bordered = false,
      hover = false,
      condensed = false,
      responsive = false,
      children,
      ...props
    },
    ref
  ) => {
    const table = (
      <table
        ref={ref}
        className={cn(
          "w-full max-w-full mb-[20px] bg-transparent border-collapse border-spacing-0",
          "[&_th]:p-[8px] [&_td]:p-[8px] [&_th]:leading-[1.42857] [&_td]:leading-[1.42857] [&_th]:text-left [&_th]:border-b [&_th]:border-b-[#f4f4f4]",
          "[&_thead_th]:border-b-[2px] [&_thead_th]:border-b-[#f4f4f4]",
          "[&_tbody_td]:border-t [&_tbody_td]:border-t-[#f4f4f4]",
          striped &&
            "[&_tbody_tr:nth-child(odd)]:bg-[#f9f9f9]",
          bordered &&
            "border border-solid border-[#f4f4f4] [&_th]:border [&_th]:border-[#f4f4f4] [&_td]:border [&_td]:border-[#f4f4f4]",
          hover && "[&_tbody_tr:hover]:bg-[#f5f5f5]",
          condensed && "[&_th]:p-[5px] [&_td]:p-[5px]",
          className
        )}
        {...props}
      >
        {children}
      </table>
    )

    if (responsive) {
      return (
        <div className="min-h-[0.01%] overflow-x-auto">
          {table}
        </div>
      )
    }

    return table
  }
)
AdminLTETable.displayName = "AdminLTETable"

export { AdminLTETable }
export type { AdminLTETableProps }
