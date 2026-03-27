"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

type ButtonVariant =
  | "default"
  | "primary"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "link"

type ButtonSize = "xs" | "sm" | "md" | "lg"

type SocialVariant =
  | "facebook"
  | "twitter"
  | "google"
  | "linkedin"
  | "instagram"
  | "flickr"
  | "tumblr"
  | "vk"
  | "github"
  | "bitbucket"
  | "dropbox"

const variantStyles: Record<ButtonVariant, string> = {
  default:
    "bg-[#f4f4f4] border-[#ddd] text-[#444] hover:bg-[#e7e7e7] hover:border-[#ccc]",
  primary:
    "bg-[#3c8dbc] border-[#367fa9] text-white hover:bg-[#367fa9] hover:border-[#204d74]",
  success:
    "bg-[#00a65a] border-[#008d4c] text-white hover:bg-[#008d4c] hover:border-[#00632f]",
  info: "bg-[#00c0ef] border-[#00acd6] text-white hover:bg-[#00acd6] hover:border-[#0086a5]",
  warning:
    "bg-[#f39c12] border-[#e08e0b] text-white hover:bg-[#e08e0b] hover:border-[#b6770a]",
  danger:
    "bg-[#dd4b39] border-[#d73925] text-white hover:bg-[#d73925] hover:border-[#b52c1e]",
  link: "bg-transparent border-transparent text-[#3c8dbc] hover:text-[#296282] hover:underline",
}

const flatVariantStyles: Record<ButtonVariant, string> = {
  default:
    "bg-[#f4f4f4] border-[#ddd] text-[#444] hover:bg-[#e7e7e7] rounded-none",
  primary:
    "bg-[#3c8dbc] border-[#3c8dbc] text-white hover:bg-[#367fa9] rounded-none",
  success:
    "bg-[#00a65a] border-[#00a65a] text-white hover:bg-[#008d4c] rounded-none",
  info: "bg-[#00c0ef] border-[#00c0ef] text-white hover:bg-[#00acd6] rounded-none",
  warning:
    "bg-[#f39c12] border-[#f39c12] text-white hover:bg-[#e08e0b] rounded-none",
  danger:
    "bg-[#dd4b39] border-[#dd4b39] text-white hover:bg-[#d73925] rounded-none",
  link: "bg-transparent border-transparent text-[#3c8dbc] hover:text-[#296282] hover:underline rounded-none",
}

const sizeStyles: Record<ButtonSize, string> = {
  xs: "px-[5px] py-[1px] text-[12px] leading-[1.5]",
  sm: "px-[10px] py-[5px] text-[12px] leading-[1.5]",
  md: "px-[12px] py-[6px] text-[14px] leading-[1.42857]",
  lg: "px-[16px] py-[10px] text-[18px] leading-[1.33333]",
}

const socialStyles: Record<SocialVariant, string> = {
  facebook: "bg-[#3b5998] text-white hover:bg-[#2d4373]",
  twitter: "bg-[#55acee] text-white hover:bg-[#2795e9]",
  google: "bg-[#dd4b39] text-white hover:bg-[#c23321]",
  linkedin: "bg-[#007bb6] text-white hover:bg-[#005983]",
  instagram: "bg-[#3f729b] text-white hover:bg-[#305777]",
  flickr: "bg-[#ff0084] text-white hover:bg-[#cc006a]",
  tumblr: "bg-[#2c4762] text-white hover:bg-[#1c2e3f]",
  vk: "bg-[#587ea3] text-white hover:bg-[#466482]",
  github: "bg-[#444] text-white hover:bg-[#2b2b2b]",
  bitbucket: "bg-[#205081] text-white hover:bg-[#163758]",
  dropbox: "bg-[#1087dd] text-white hover:bg-[#0d6aad]",
}

interface AdminLTEButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  flat?: boolean
  block?: boolean
  social?: SocialVariant
  icon?: React.ReactNode
  loading?: boolean
}

const AdminLTEButton = React.forwardRef<HTMLButtonElement, AdminLTEButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "md",
      flat = false,
      block = false,
      social,
      icon,
      loading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-block font-normal text-center whitespace-nowrap align-middle touch-manipulation cursor-pointer border border-solid select-none transition-colors duration-150 focus:outline-none"

    const styles = social
      ? socialStyles[social]
      : flat
        ? flatVariantStyles[variant]
        : variantStyles[variant]

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          styles,
          sizeStyles[size],
          !flat && "rounded-[3px]",
          block && "block w-full",
          (disabled || loading) && "opacity-65 cursor-not-allowed pointer-events-none",
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <span className="inline-block mr-1 animate-spin">&#8635;</span>
        )}
        {icon && <span className="mr-1">{icon}</span>}
        {children}
      </button>
    )
  }
)
AdminLTEButton.displayName = "AdminLTEButton"

export { AdminLTEButton }
export type { AdminLTEButtonProps, ButtonVariant, ButtonSize, SocialVariant }
