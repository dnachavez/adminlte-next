"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

interface ControlSidebarProps extends React.HTMLAttributes<HTMLElement> {
  isOpen?: boolean
  onToggle?: () => void
  variant?: "dark" | "light"
}

const ControlSidebar = React.forwardRef<HTMLElement, ControlSidebarProps>(
  (
    {
      className,
      isOpen = false,
      onToggle,
      variant = "dark",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <aside
        ref={ref}
        className={cn(
          "fixed top-0 w-[230px] min-h-full z-[1010] pt-[50px]",
          "transition-[right] duration-300 ease-in-out",
          isOpen ? "right-0" : "right-[-230px]",
          variant === "dark" && "bg-[#222d32] text-[#b8c7ce]",
          variant === "light" &&
            "bg-[#f9fafc] text-[#444] border-l border-[#d2d6de]",
          className
        )}
        {...props}
      >
        <div className="h-full overflow-y-auto overflow-x-hidden p-[10px]">
          {children}
        </div>
      </aside>
    )
  }
)
ControlSidebar.displayName = "ControlSidebar"

interface ControlSidebarToggleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ControlSidebarToggle = React.forwardRef<
  HTMLButtonElement,
  ControlSidebarToggleProps
>(({ className, onClick, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "flex items-center justify-center w-[50px] h-[50px] bg-transparent border-none text-[var(--adminlte-skin-navbar-color)] cursor-pointer hover:bg-black/10",
        className
      )}
      onClick={onClick}
      aria-label="Toggle control sidebar"
      {...props}
    >
      {/* Gears icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="currentColor"
        className="w-[16px] h-[16px]"
      >
        <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
      </svg>
    </button>
  )
})
ControlSidebarToggle.displayName = "ControlSidebarToggle"

export { ControlSidebar, ControlSidebarToggle }
export type { ControlSidebarProps, ControlSidebarToggleProps }
