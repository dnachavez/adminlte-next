"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

/* ---------------------------------------------------------------------------
 * Types
 * -------------------------------------------------------------------------- */

interface ProfileStat {
  label: string
  value: string | number
}

/* ---------------------------------------------------------------------------
 * ProfileCard
 * -------------------------------------------------------------------------- */

interface ProfileCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  avatarUrl: string
  description?: string
  backgroundUrl?: string
  backgroundColor?: string
  stats?: ProfileStat[]
  variant?: "style1" | "style2"
}

const ProfileCard = React.forwardRef<HTMLDivElement, ProfileCardProps>(
  (
    {
      className,
      name,
      avatarUrl,
      description,
      backgroundUrl,
      backgroundColor = "#3c8dbc",
      stats = [],
      variant = "style1",
      children,
      ...props
    },
    ref
  ) => {
    if (variant === "style2") {
      return (
        <div
          ref={ref}
          className={cn(
            "bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] overflow-hidden",
            className
          )}
          {...props}
        >
          {/* Side-by-side layout */}
          <div className="flex items-center gap-[15px] p-[20px]">
            {/* Avatar */}
            <img
              src={avatarUrl}
              alt={name}
              className="w-[90px] h-[90px] rounded-full object-cover flex-shrink-0"
            />

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h3 className="text-[20px] font-light m-0 mb-[5px] text-[#333] truncate">
                {name}
              </h3>
              {description && (
                <p className="text-[14px] text-[#999] m-0 mb-[10px]">
                  {description}
                </p>
              )}
              {/* Inline actions */}
              {children && (
                <div className="flex items-center gap-[5px] flex-wrap">
                  {children}
                </div>
              )}
            </div>
          </div>

          {/* Stats row */}
          {stats.length > 0 && (
            <div className="flex border-t border-t-[#f4f4f4]">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex-1 text-center py-[10px]",
                    index < stats.length - 1 && "border-r border-r-[#f4f4f4]"
                  )}
                >
                  <span className="block text-[20px] font-bold text-[#333]">
                    {stat.value}
                  </span>
                  <span className="block text-[12px] text-[#999] uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )
    }

    /* Style 1 - widget-user (default) */
    return (
      <div
        ref={ref}
        className={cn(
          "bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] overflow-hidden",
          className
        )}
        {...props}
      >
        {/* Header area with background */}
        <div
          className="relative text-center py-[25px] bg-cover bg-center"
          style={{
            backgroundImage: backgroundUrl
              ? `url(${backgroundUrl})`
              : undefined,
            backgroundColor: !backgroundUrl ? backgroundColor : undefined,
          }}
        >
          {/* Overlay for readability when background image is used */}
          {backgroundUrl && (
            <div className="absolute inset-0 bg-black/30" />
          )}
        </div>

        {/* Avatar - overlapping the header */}
        <div className="text-center -mt-[45px] relative z-[1]">
          <img
            src={avatarUrl}
            alt={name}
            className="w-[90px] h-[90px] rounded-full border-[3px] border-white object-cover mx-auto shadow-[0_2px_5px_rgba(0,0,0,0.2)]"
          />
        </div>

        {/* Name and description */}
        <div className="text-center py-[10px] px-[15px]">
          <h3 className="text-[25px] font-light m-0 mb-[5px] text-[#333]">
            {name}
          </h3>
          {description && (
            <p className="text-[14px] text-[#999] m-0">{description}</p>
          )}
        </div>

        {/* Stats row */}
        {stats.length > 0 && (
          <div className="flex border-t border-t-[#f4f4f4]">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={cn(
                  "flex-1 text-center py-[10px]",
                  index < stats.length - 1 && "border-r border-r-[#f4f4f4]"
                )}
              >
                <span className="block text-[20px] font-bold text-[#333]">
                  {stat.value}
                </span>
                <span className="block text-[12px] text-[#999] uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Footer / actions */}
        {children && (
          <div className="border-t border-t-[#f4f4f4] p-[10px] text-center">
            {children}
          </div>
        )}
      </div>
    )
  }
)
ProfileCard.displayName = "ProfileCard"

export { ProfileCard }
export type { ProfileCardProps, ProfileStat }
