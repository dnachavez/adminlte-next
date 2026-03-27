"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

interface AdminLTEPaginationProps
  extends React.HTMLAttributes<HTMLUListElement> {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  size?: "sm" | "md" | "lg"
  flat?: boolean
}

const AdminLTEPagination = React.forwardRef<
  HTMLUListElement,
  AdminLTEPaginationProps
>(
  (
    {
      className,
      currentPage,
      totalPages,
      onPageChange,
      size = "md",
      flat = false,
      ...props
    },
    ref
  ) => {
    const pages = React.useMemo(() => {
      const p: (number | "...")[] = []
      if (totalPages <= 7) {
        for (let i = 1; i <= totalPages; i++) p.push(i)
      } else {
        p.push(1)
        if (currentPage > 3) p.push("...")
        for (
          let i = Math.max(2, currentPage - 1);
          i <= Math.min(totalPages - 1, currentPage + 1);
          i++
        ) {
          p.push(i)
        }
        if (currentPage < totalPages - 2) p.push("...")
        p.push(totalPages)
      }
      return p
    }, [currentPage, totalPages])

    const sizeClass = {
      sm: "[&_a]:px-[10px] [&_a]:py-[5px] [&_a]:text-[12px]",
      md: "",
      lg: "[&_a]:px-[16px] [&_a]:py-[10px] [&_a]:text-[18px]",
    }[size]

    return (
      <ul
        ref={ref}
        className={cn(
          "inline-flex list-none m-0 p-0",
          flat && "[&_a]:rounded-none [&_a]:border-[#00c0ef]",
          sizeClass,
          className
        )}
        {...props}
      >
        <li
          className={cn(
            currentPage === 1 && "opacity-50 pointer-events-none"
          )}
        >
          <a
            className={cn(
              "relative block px-[12px] py-[6px] leading-[1.42857] text-[#3c8dbc] bg-white border border-solid border-[#ddd] no-underline cursor-pointer hover:bg-[#eee] hover:text-[#23527c]",
              "rounded-l-[3px] -ml-[1px]",
              flat && "bg-transparent border-[#00c0ef] text-[#00c0ef]"
            )}
            onClick={() => onPageChange(currentPage - 1)}
          >
            &laquo;
          </a>
        </li>
        {pages.map((page, i) => (
          <li
            key={i}
            className={cn(
              page === currentPage && "z-[2]",
              page === "..." && "pointer-events-none"
            )}
          >
            <a
              className={cn(
                "relative block px-[12px] py-[6px] leading-[1.42857] border border-solid border-[#ddd] no-underline cursor-pointer -ml-[1px]",
                page === currentPage
                  ? cn(
                      "text-white cursor-default",
                      flat
                        ? "bg-[#00c0ef] border-[#00c0ef]"
                        : "bg-[#3c8dbc] border-[#3c8dbc]"
                    )
                  : cn(
                      "bg-white hover:bg-[#eee]",
                      flat
                        ? "text-[#00c0ef] border-[#00c0ef] hover:text-[#00a7d0]"
                        : "text-[#3c8dbc] hover:text-[#23527c]"
                    )
              )}
              onClick={() =>
                typeof page === "number" && onPageChange(page)
              }
            >
              {page}
            </a>
          </li>
        ))}
        <li
          className={cn(
            currentPage === totalPages && "opacity-50 pointer-events-none"
          )}
        >
          <a
            className={cn(
              "relative block px-[12px] py-[6px] leading-[1.42857] text-[#3c8dbc] bg-white border border-solid border-[#ddd] no-underline cursor-pointer hover:bg-[#eee] hover:text-[#23527c]",
              "rounded-r-[3px] -ml-[1px]",
              flat && "bg-transparent border-[#00c0ef] text-[#00c0ef]"
            )}
            onClick={() => onPageChange(currentPage + 1)}
          >
            &raquo;
          </a>
        </li>
      </ul>
    )
  }
)
AdminLTEPagination.displayName = "AdminLTEPagination"

export { AdminLTEPagination }
export type { AdminLTEPaginationProps }
