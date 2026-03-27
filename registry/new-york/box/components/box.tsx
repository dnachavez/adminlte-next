"use client"

import * as React from "react"
import { useState, useRef, useEffect, useCallback } from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"
import { type BoxVariant, boxVariantColors } from "@/registry/new-york/adminlte-theme/lib/colors"

/* -------------------------------------------------------------------------- */
/*  BoxTools                                                                  */
/* -------------------------------------------------------------------------- */

interface BoxToolsProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

const BoxTools = React.forwardRef<HTMLDivElement, BoxToolsProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("ml-auto flex items-center gap-[5px]", className)}
      {...props}
    >
      {children}
    </div>
  )
)
BoxTools.displayName = "BoxTools"

/* -------------------------------------------------------------------------- */
/*  BoxHeader                                                                 */
/* -------------------------------------------------------------------------- */

interface BoxHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  children?: React.ReactNode
}

const BoxHeader = React.forwardRef<HTMLDivElement, BoxHeaderProps>(
  ({ className, title, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center p-[10px] border-b border-[#f4f4f4]",
        className
      )}
      {...props}
    >
      {title && (
        <h3 className="text-[18px] leading-none m-0 font-normal">{title}</h3>
      )}
      {children}
    </div>
  )
)
BoxHeader.displayName = "BoxHeader"

/* -------------------------------------------------------------------------- */
/*  BoxBody                                                                   */
/* -------------------------------------------------------------------------- */

interface BoxBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

const BoxBody = React.forwardRef<HTMLDivElement, BoxBodyProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("p-[10px]", className)}
      {...props}
    >
      {children}
    </div>
  )
)
BoxBody.displayName = "BoxBody"

/* -------------------------------------------------------------------------- */
/*  BoxFooter                                                                 */
/* -------------------------------------------------------------------------- */

interface BoxFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

const BoxFooter = React.forwardRef<HTMLDivElement, BoxFooterProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "p-[10px] bg-white border-t border-[#f4f4f4]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
)
BoxFooter.displayName = "BoxFooter"

/* -------------------------------------------------------------------------- */
/*  Loading overlay spinner                                                   */
/* -------------------------------------------------------------------------- */

function BoxLoadingOverlay() {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/70 rounded-[3px]">
      <svg
        className="h-[40px] w-[40px] animate-spin text-[#3c8dbc]"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        />
      </svg>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Tool buttons (collapse / remove)                                          */
/* -------------------------------------------------------------------------- */

function CollapseButton({
  isCollapsed,
  onClick,
  solid,
}: {
  isCollapsed: boolean
  onClick: () => void
  solid?: boolean
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center h-[20px] w-[20px] rounded-[3px] border-0 cursor-pointer bg-transparent",
        solid ? "text-white hover:opacity-80" : "text-[#97a0b3] hover:text-[#444]"
      )}
      aria-label={isCollapsed ? "Expand" : "Collapse"}
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
        {isCollapsed ? (
          <polyline points="6 9 12 15 18 9" />
        ) : (
          <polyline points="18 15 12 9 6 15" />
        )}
      </svg>
    </button>
  )
}

function RemoveButton({
  onClick,
  solid,
}: {
  onClick: () => void
  solid?: boolean
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center h-[20px] w-[20px] rounded-[3px] border-0 cursor-pointer bg-transparent",
        solid ? "text-white hover:opacity-80" : "text-[#97a0b3] hover:text-[#444]"
      )}
      aria-label="Remove"
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
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  )
}

/* -------------------------------------------------------------------------- */
/*  Box                                                                       */
/* -------------------------------------------------------------------------- */

const solidVariantBg: Record<BoxVariant, string> = {
  default: "bg-[#d2d6de]",
  primary: "bg-[#3c8dbc]",
  info: "bg-[#00c0ef]",
  success: "bg-[#00a65a]",
  warning: "bg-[#f39c12]",
  danger: "bg-[#dd4b39]",
}

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BoxVariant
  solid?: boolean
  collapsible?: boolean
  removable?: boolean
  loading?: boolean
  defaultCollapsed?: boolean
  title?: string
  tools?: React.ReactNode
  footer?: React.ReactNode
  children?: React.ReactNode
}

const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      className,
      variant = "default",
      solid = false,
      collapsible = false,
      removable = false,
      loading = false,
      defaultCollapsed = false,
      title,
      tools,
      footer,
      children,
      ...props
    },
    ref
  ) => {
    const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed)
    const [isRemoving, setIsRemoving] = useState(false)
    const [isRemoved, setIsRemoved] = useState(false)
    const contentRef = useRef<HTMLDivElement>(null)
    const [contentHeight, setContentHeight] = useState<number | undefined>(
      undefined
    )

    const toggleCollapse = useCallback(() => {
      setIsCollapsed((prev) => !prev)
    }, [])

    const handleRemove = useCallback(() => {
      setIsRemoving(true)
      setTimeout(() => {
        setIsRemoved(true)
      }, 500)
    }, [])

    useEffect(() => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight)
      }
    }, [children, footer])

    if (isRemoved) return null

    const borderColor = boxVariantColors[variant]
    const hasHeader = title || tools || collapsible || removable
    const showToolbar = collapsible || removable || tools

    return (
      <div
        ref={ref}
        className={cn(
          "relative mb-[20px] rounded-[3px] bg-white",
          isRemoving && "transition-opacity duration-500 opacity-0",
          defaultCollapsed && isCollapsed && "collapsed-box",
          className
        )}
        style={{
          boxShadow: "0 1px 1px rgba(0,0,0,0.1)",
          borderTop: `3px solid ${borderColor}`,
        }}
        {...props}
      >
        {/* Loading overlay */}
        {loading && <BoxLoadingOverlay />}

        {/* Header */}
        {hasHeader && (
          <BoxHeader
            title={title}
            className={cn(
              solid && solidVariantBg[variant],
              solid && "text-white border-b-0"
            )}
          >
            {showToolbar && (
              <BoxTools>
                {tools}
                {collapsible && (
                  <CollapseButton
                    isCollapsed={isCollapsed}
                    onClick={toggleCollapse}
                    solid={solid}
                  />
                )}
                {removable && (
                  <RemoveButton onClick={handleRemove} solid={solid} />
                )}
              </BoxTools>
            )}
          </BoxHeader>
        )}

        {/* Collapsible wrapper */}
        <div
          ref={contentRef}
          className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
          style={{
            maxHeight: isCollapsed
              ? 0
              : contentHeight !== undefined
                ? contentHeight
                : "none",
          }}
        >
          {/* Body */}
          {children && <BoxBody>{children}</BoxBody>}

          {/* Footer */}
          {footer && <BoxFooter>{footer}</BoxFooter>}
        </div>
      </div>
    )
  }
)
Box.displayName = "Box"

export { Box, BoxHeader, BoxBody, BoxFooter, BoxTools }
export type { BoxProps, BoxHeaderProps, BoxBodyProps, BoxFooterProps, BoxToolsProps }
