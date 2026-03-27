"use client"

import * as React from "react"
import { useState, useCallback } from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

/* -------------------------------------------------------------------------- */
/*  SidebarMenuHeader                                                         */
/* -------------------------------------------------------------------------- */

interface SidebarMenuHeaderProps extends React.LiHTMLAttributes<HTMLLIElement> {
  children?: React.ReactNode
}

const SidebarMenuHeader = React.forwardRef<HTMLLIElement, SidebarMenuHeaderProps>(
  ({ className, children, ...props }, ref) => (
    <li
      ref={ref}
      className={cn(
        "px-[15px] pr-[25px] py-[10px] text-[12px] uppercase",
        "text-[var(--adminlte-skin-sidebar-color)]",
        className
      )}
      {...props}
    >
      {children}
    </li>
  )
)
SidebarMenuHeader.displayName = "SidebarMenuHeader"

/* -------------------------------------------------------------------------- */
/*  Chevron icon for treeview                                                 */
/* -------------------------------------------------------------------------- */

function TreeviewChevron({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(
        "ml-auto h-[14px] w-[14px] shrink-0 transition-transform duration-300",
        isOpen && "rotate-90"
      )}
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

/* -------------------------------------------------------------------------- */
/*  SidebarMenuItem                                                           */
/* -------------------------------------------------------------------------- */

interface SidebarMenuItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  label?: string
  icon?: React.ReactNode
  href?: string
  active?: boolean
  badge?: React.ReactNode
  children?: React.ReactNode
  isOpen?: boolean
  onToggle?: () => void
}

const SidebarMenuItem = React.forwardRef<HTMLLIElement, SidebarMenuItemProps>(
  (
    {
      className,
      label,
      icon,
      href,
      active = false,
      badge,
      children,
      isOpen: controlledIsOpen,
      onToggle: controlledOnToggle,
      ...props
    },
    ref
  ) => {
    const hasChildren = React.Children.count(children) > 0
    const [internalOpen, setInternalOpen] = useState(false)

    const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalOpen
    const handleToggle = useCallback(() => {
      if (controlledOnToggle) {
        controlledOnToggle()
      } else {
        setInternalOpen((prev) => !prev)
      }
    }, [controlledOnToggle])

    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (hasChildren) {
          e.preventDefault()
          handleToggle()
        }
      },
      [hasChildren, handleToggle]
    )

    return (
      <li
        ref={ref}
        className={cn("relative", className)}
        {...props}
      >
        <a
          href={hasChildren ? "#" : href || "#"}
          onClick={handleClick}
          className={cn(
            "flex items-center py-[12px] pr-[5px] pl-[15px] no-underline transition-colors",
            "text-[var(--adminlte-skin-sidebar-color,#b8c7ce)]",
            "hover:bg-[var(--adminlte-skin-sidebar-hover-bg,#1e282c)] hover:text-[var(--adminlte-skin-sidebar-hover-color,#fff)]",
            active && [
              "border-l-[3px] border-[var(--adminlte-skin-sidebar-active-border,#3c8dbc)]",
              "bg-[var(--adminlte-skin-sidebar-active-bg,#1a2226)]",
              "pl-[12px]",
            ]
          )}
        >
          {/* Icon */}
          {icon && (
            <span className="w-[20px] text-center mr-[5px] inline-flex items-center justify-center shrink-0">
              {icon}
            </span>
          )}

          {/* Label */}
          {label && <span>{label}</span>}

          {/* Badge */}
          {badge && <span className="ml-auto">{badge}</span>}

          {/* Treeview chevron */}
          {hasChildren && <TreeviewChevron isOpen={isOpen} />}
        </a>

        {/* Submenu */}
        {hasChildren && (
          <ul
            className={cn(
              "list-none m-0 p-0 overflow-hidden transition-[max-height] duration-500 ease-in-out",
              "bg-[var(--adminlte-skin-sidebar-submenu-bg,#2c3b41)]"
            )}
            style={{
              maxHeight: isOpen ? "1000px" : "0",
            }}
          >
            {children}
          </ul>
        )}
      </li>
    )
  }
)
SidebarMenuItem.displayName = "SidebarMenuItem"

/* -------------------------------------------------------------------------- */
/*  SidebarMenu                                                               */
/* -------------------------------------------------------------------------- */

interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {
  children?: React.ReactNode
}

const SidebarMenu = React.forwardRef<HTMLUListElement, SidebarMenuProps>(
  ({ className, children, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn("list-none p-0 m-0", className)}
      {...props}
    >
      {children}
    </ul>
  )
)
SidebarMenu.displayName = "SidebarMenu"

export { SidebarMenu, SidebarMenuItem, SidebarMenuHeader }
export type { SidebarMenuProps, SidebarMenuItemProps, SidebarMenuHeaderProps }
