"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

type ValidationState = "success" | "warning" | "error" | null

const validationBorderStyles: Record<string, string> = {
  success: "border-[#00a65a] focus:border-[#00a65a] focus:shadow-[inset_0_1px_1px_rgba(0,0,0,0.075),0_0_6px_#00c97a]",
  warning: "border-[#f39c12] focus:border-[#f39c12] focus:shadow-[inset_0_1px_1px_rgba(0,0,0,0.075),0_0_6px_#f5b043]",
  error: "border-[#dd4b39] focus:border-[#dd4b39] focus:shadow-[inset_0_1px_1px_rgba(0,0,0,0.075),0_0_6px_#e47365]",
}

const validationTextStyles: Record<string, string> = {
  success: "text-[#00a65a]",
  warning: "text-[#f39c12]",
  error: "text-[#dd4b39]",
}

// Form Group
interface FormGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  validation?: ValidationState
  hasFeedback?: boolean
  label?: string
  htmlFor?: string
  helpText?: string
}

const FormGroup = React.forwardRef<HTMLDivElement, FormGroupProps>(
  (
    { className, validation, hasFeedback, label, htmlFor, helpText, children, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mb-[15px]",
          validation && `has-${validation}`,
          hasFeedback && "relative",
          className
        )}
        {...props}
      >
        {label && (
          <label
            htmlFor={htmlFor}
            className={cn(
              "inline-block max-w-full mb-[5px] font-bold text-[14px]",
              validation && validationTextStyles[validation]
            )}
          >
            {label}
          </label>
        )}
        {children}
        {helpText && (
          <p
            className={cn(
              "block mt-[5px] mb-[10px] text-[12px] text-[#737373]",
              validation && validationTextStyles[validation]
            )}
          >
            {helpText}
          </p>
        )}
      </div>
    )
  }
)
FormGroup.displayName = "FormGroup"

// Input
interface AdminLTEInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  validation?: ValidationState
  inputSize?: "sm" | "lg"
}

const AdminLTEInput = React.forwardRef<HTMLInputElement, AdminLTEInputProps>(
  ({ className, validation, inputSize, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "block w-full h-[34px] px-[12px] py-[6px] text-[14px] leading-[1.42857] text-[#555] bg-white border border-solid border-[#d2d6de] rounded-[3px] shadow-[inset_0_1px_1px_rgba(0,0,0,0.075)] transition-[border-color,box-shadow] duration-150 ease-in-out",
          "focus:border-[#3c8dbc] focus:outline-none focus:shadow-none",
          "placeholder:text-[#999]",
          inputSize === "sm" && "h-[30px] px-[10px] py-[5px] text-[12px] rounded-[3px]",
          inputSize === "lg" && "h-[46px] px-[16px] py-[10px] text-[18px] rounded-[6px]",
          validation && validationBorderStyles[validation],
          "disabled:bg-[#eee] disabled:cursor-not-allowed",
          className
        )}
        {...props}
      />
    )
  }
)
AdminLTEInput.displayName = "AdminLTEInput"

// Textarea
interface AdminLTETextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  validation?: ValidationState
}

const AdminLTETextarea = React.forwardRef<
  HTMLTextAreaElement,
  AdminLTETextareaProps
>(({ className, validation, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "block w-full px-[12px] py-[6px] text-[14px] leading-[1.42857] text-[#555] bg-white border border-solid border-[#d2d6de] rounded-[3px] shadow-[inset_0_1px_1px_rgba(0,0,0,0.075)] transition-[border-color,box-shadow] duration-150 ease-in-out",
        "focus:border-[#3c8dbc] focus:outline-none focus:shadow-none",
        "placeholder:text-[#999]",
        validation && validationBorderStyles[validation],
        "disabled:bg-[#eee] disabled:cursor-not-allowed",
        className
      )}
      {...props}
    />
  )
})
AdminLTETextarea.displayName = "AdminLTETextarea"

// Select
interface AdminLTESelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  validation?: ValidationState
  inputSize?: "sm" | "lg"
}

const AdminLTESelect = React.forwardRef<HTMLSelectElement, AdminLTESelectProps>(
  ({ className, validation, inputSize, children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          "block w-full h-[34px] px-[12px] py-[6px] text-[14px] leading-[1.42857] text-[#555] bg-white border border-solid border-[#d2d6de] rounded-[3px] shadow-[inset_0_1px_1px_rgba(0,0,0,0.075)] transition-[border-color,box-shadow] duration-150 ease-in-out",
          "focus:border-[#3c8dbc] focus:outline-none focus:shadow-none",
          inputSize === "sm" && "h-[30px] px-[10px] py-[5px] text-[12px]",
          inputSize === "lg" && "h-[46px] px-[16px] py-[10px] text-[18px]",
          validation && validationBorderStyles[validation],
          "disabled:bg-[#eee] disabled:cursor-not-allowed",
          className
        )}
        {...props}
      >
        {children}
      </select>
    )
  }
)
AdminLTESelect.displayName = "AdminLTESelect"

export {
  FormGroup,
  AdminLTEInput,
  AdminLTETextarea,
  AdminLTESelect,
}
export type {
  FormGroupProps,
  AdminLTEInputProps,
  AdminLTETextareaProps,
  AdminLTESelectProps,
  ValidationState,
}
