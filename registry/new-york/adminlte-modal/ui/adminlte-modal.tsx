"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

type ModalVariant = "default" | "primary" | "info" | "success" | "warning" | "danger"

const modalHeaderStyles: Record<ModalVariant, string> = {
  default: "bg-white border-b border-b-[#e5e5e5]",
  primary: "bg-[#3c8dbc] text-white border-b-0",
  info: "bg-[#00c0ef] text-white border-b-0",
  success: "bg-[#00a65a] text-white border-b-0",
  warning: "bg-[#f39c12] text-white border-b-0",
  danger: "bg-[#dd4b39] text-white border-b-0",
}

interface AdminLTEModalProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean
  onClose: () => void
  variant?: ModalVariant
  size?: "sm" | "md" | "lg"
}

const AdminLTEModal = React.forwardRef<HTMLDivElement, AdminLTEModalProps>(
  (
    { className, open, onClose, variant = "default", size = "md", children, ...props },
    ref
  ) => {
    React.useEffect(() => {
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose()
      }
      if (open) {
        document.addEventListener("keydown", handleEsc)
        document.body.style.overflow = "hidden"
      }
      return () => {
        document.removeEventListener("keydown", handleEsc)
        document.body.style.overflow = ""
      }
    }, [open, onClose])

    if (!open) return null

    const sizeClass = {
      sm: "max-w-[300px]",
      md: "max-w-[600px]",
      lg: "max-w-[900px]",
    }[size]

    return (
      <>
        <div
          className="fixed inset-0 z-[1040] bg-black/50"
          onClick={onClose}
        />
        <div
          ref={ref}
          className={cn(
            "fixed inset-0 z-[1050] overflow-x-hidden overflow-y-auto outline-none",
            className
          )}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose()
          }}
          {...props}
        >
          <div
            className={cn(
              "relative mx-auto mt-[30px] mb-[30px] w-auto",
              sizeClass
            )}
          >
            <div className="relative bg-white border border-solid border-[#999] rounded-[6px] shadow-[0_3px_9px_rgba(0,0,0,0.5)] outline-none bg-clip-padding">
              {children}
            </div>
          </div>
        </div>
      </>
    )
  }
)
AdminLTEModal.displayName = "AdminLTEModal"

interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: ModalVariant
  onClose?: () => void
}

const ModalHeader = React.forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ className, variant = "default", onClose, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "p-[15px] rounded-t-[6px]",
          modalHeaderStyles[variant],
          className
        )}
        {...props}
      >
        {onClose && (
          <button
            type="button"
            className={cn(
              "float-right p-0 bg-transparent border-none text-[21px] font-bold leading-none cursor-pointer opacity-50 hover:opacity-100",
              variant === "default" ? "text-black" : "text-white"
            )}
            onClick={onClose}
            aria-label="Close"
          >
            &times;
          </button>
        )}
        <h4 className="m-0 text-[18px] leading-[1.42857] font-medium">
          {children}
        </h4>
      </div>
    )
  }
)
ModalHeader.displayName = "ModalHeader"

interface ModalBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

const ModalBody = React.forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative p-[15px]", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
ModalBody.displayName = "ModalBody"

interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const ModalFooter = React.forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "p-[15px] text-right border-t border-t-[#e5e5e5] rounded-b-[6px]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
ModalFooter.displayName = "ModalFooter"

export { AdminLTEModal, ModalHeader, ModalBody, ModalFooter }
export type { AdminLTEModalProps, ModalHeaderProps, ModalBodyProps, ModalFooterProps, ModalVariant }
