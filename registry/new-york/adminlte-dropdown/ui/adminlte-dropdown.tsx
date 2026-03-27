"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

interface AdminLTEDropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  trigger: React.ReactNode
  align?: "left" | "right"
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

const AdminLTEDropdown = React.forwardRef<HTMLDivElement, AdminLTEDropdownProps>(
  (
    {
      className,
      trigger,
      align = "left",
      open: controlledOpen,
      onOpenChange,
      children,
      ...props
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = React.useState(false)
    const isOpen = controlledOpen ?? internalOpen
    const containerRef = React.useRef<HTMLDivElement>(null)

    const setOpen = React.useCallback(
      (value: boolean) => {
        setInternalOpen(value)
        onOpenChange?.(value)
      },
      [onOpenChange]
    )

    React.useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(e.target as Node)
        ) {
          setOpen(false)
        }
      }
      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside)
      }
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [isOpen, setOpen])

    return (
      <div
        ref={(node) => {
          ;(containerRef as React.MutableRefObject<HTMLDivElement | null>).current = node
          if (typeof ref === "function") ref(node)
          else if (ref) ref.current = node
        }}
        className={cn("relative inline-block", isOpen && "open", className)}
        {...props}
      >
        <div onClick={() => setOpen(!isOpen)} className="cursor-pointer">
          {trigger}
        </div>
        {isOpen && (
          <ul
            className={cn(
              "absolute z-[1000] min-w-[160px] py-[5px] mt-[2px] bg-white border border-solid border-[#ccc] rounded-[3px] shadow-[0_6px_12px_rgba(0,0,0,0.175)] list-none",
              align === "right" ? "right-0" : "left-0"
            )}
          >
            {children}
          </ul>
        )}
      </div>
    )
  }
)
AdminLTEDropdown.displayName = "AdminLTEDropdown"

interface DropdownItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  divider?: boolean
  header?: boolean
  active?: boolean
  disabled?: boolean
}

const DropdownItem = React.forwardRef<HTMLLIElement, DropdownItemProps>(
  (
    { className, divider, header, active, disabled, children, onClick, ...props },
    ref
  ) => {
    if (divider) {
      return (
        <li
          ref={ref}
          className={cn("h-[1px] my-[9px] overflow-hidden bg-[#e5e5e5]", className)}
          {...props}
        />
      )
    }

    if (header) {
      return (
        <li
          ref={ref}
          className={cn(
            "px-[20px] py-[3px] text-[12px] leading-[1.42857] text-[#777]",
            className
          )}
          {...props}
        >
          {children}
        </li>
      )
    }

    return (
      <li
        ref={ref}
        className={cn(
          active && "bg-[#f5f5f5]",
          disabled && "opacity-65 pointer-events-none",
          className
        )}
        {...props}
      >
        <a
          className="block px-[20px] py-[3px] text-[14px] text-[#333] no-underline whitespace-nowrap hover:bg-[#f5f5f5] hover:text-[#262626] cursor-pointer"
          onClick={disabled ? undefined : onClick as React.MouseEventHandler<HTMLAnchorElement>}
        >
          {children}
        </a>
      </li>
    )
  }
)
DropdownItem.displayName = "DropdownItem"

interface DropdownHeaderProps extends React.LiHTMLAttributes<HTMLLIElement> {}

const DropdownHeader = React.forwardRef<HTMLLIElement, DropdownHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <li
        ref={ref}
        className={cn(
          "px-[10px] py-[10px] bg-[#ffffff] text-[14px] font-bold text-center border-b border-b-[#f4f4f4]",
          className
        )}
        {...props}
      >
        {children}
      </li>
    )
  }
)
DropdownHeader.displayName = "DropdownHeader"

interface DropdownFooterProps extends React.LiHTMLAttributes<HTMLLIElement> {}

const DropdownFooter = React.forwardRef<HTMLLIElement, DropdownFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <li
        ref={ref}
        className={cn(
          "px-[10px] py-[10px] bg-[#f4f4f4] text-center border-t border-t-[#f4f4f4]",
          className
        )}
        {...props}
      >
        {children}
      </li>
    )
  }
)
DropdownFooter.displayName = "DropdownFooter"

export {
  AdminLTEDropdown,
  DropdownItem,
  DropdownHeader,
  DropdownFooter,
}
export type { AdminLTEDropdownProps, DropdownItemProps }
