"use client"

import * as React from "react"
import { useState, useCallback } from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

interface SidebarSearchFormProps extends React.HTMLAttributes<HTMLFormElement> {
  placeholder?: string
  onSearch?: (value: string) => void
}

const SidebarSearchForm = React.forwardRef<HTMLFormElement, SidebarSearchFormProps>(
  ({ className, placeholder = "Search...", onSearch, ...props }, ref) => {
    const [value, setValue] = useState("")

    const handleSubmit = useCallback(
      (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (onSearch) {
          onSearch(value)
        }
      },
      [onSearch, value]
    )

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
      },
      []
    )

    return (
      <form
        ref={ref}
        onSubmit={handleSubmit}
        className={cn("mx-[10px] my-[10px] rounded-[3px]", className)}
        {...props}
      >
        <div className="flex rounded-[3px] overflow-hidden">
          <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            className={cn(
              "flex-1 h-[35px] px-[10px] border-0 outline-none",
              "bg-[var(--adminlte-skin-sidebar-bg,#374850)] text-white",
              "placeholder:text-white/60"
            )}
          />
          <button
            type="submit"
            className={cn(
              "h-[35px] w-[35px] border-0 cursor-pointer flex items-center justify-center shrink-0",
              "bg-[var(--adminlte-skin-sidebar-bg,#374850)] text-white",
              "hover:opacity-80 transition-opacity"
            )}
            aria-label="Search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-[14px] w-[14px]"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>
      </form>
    )
  }
)
SidebarSearchForm.displayName = "SidebarSearchForm"

export { SidebarSearchForm }
export type { SidebarSearchFormProps }
