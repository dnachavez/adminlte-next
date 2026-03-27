"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

interface UserMenuItem {
  icon: React.ReactNode
  text: string
  href?: string
  badge?: React.ReactNode
}

interface UserMenuDropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  avatarUrl: string
  name: string
  memberSince: string
  headerBg?: string
  menuItems?: UserMenuItem[]
  onSignOut?: () => void
  onProfile?: () => void
}

const UserMenuDropdown = React.forwardRef<HTMLDivElement, UserMenuDropdownProps>(
  (
    {
      className,
      avatarUrl,
      name,
      memberSince,
      headerBg,
      menuItems = [],
      onSignOut,
      onProfile,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const containerRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(e.target as Node)
        ) {
          setIsOpen(false)
        }
      }
      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside)
      }
      return () =>
        document.removeEventListener("mousedown", handleClickOutside)
    }, [isOpen])

    return (
      <div
        ref={(node) => {
          ;(
            containerRef as React.MutableRefObject<HTMLDivElement | null>
          ).current = node
          if (typeof ref === "function") ref(node)
          else if (ref) ref.current = node
        }}
        className={cn("relative inline-block", className)}
        {...props}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-[8px] h-[50px] px-[15px] bg-transparent border-none text-[var(--adminlte-skin-navbar-color)] cursor-pointer hover:bg-black/10"
        >
          <img
            src={avatarUrl}
            alt={name}
            className="w-[25px] h-[25px] rounded-full object-cover"
          />
          <span className="text-[14px] hidden sm:inline">{name}</span>
        </button>

        {isOpen && (
          <ul className="absolute right-0 z-[1000] min-w-[280px] py-0 mt-0 bg-white border border-[#ccc] rounded-[3px] shadow-[0_6px_12px_rgba(0,0,0,0.175)] list-none overflow-hidden">
            {/* Header */}
            <li
              className="p-[20px] text-center text-white"
              style={{
                background:
                  headerBg || "var(--adminlte-skin-navbar-bg, #3c8dbc)",
              }}
            >
              <img
                src={avatarUrl}
                alt={name}
                className="w-[80px] h-[80px] rounded-full mx-auto mb-[10px] border-[3px] border-white/30 object-cover"
              />
              <p className="text-[17px] font-semibold m-0">{name}</p>
              <p className="text-[13px] opacity-80 m-0 mt-[4px]">
                Member since {memberSince}
              </p>
            </li>

            {/* Menu items in 2-column grid */}
            {menuItems.length > 0 && (
              <li className="p-[10px] border-b border-[#f4f4f4]">
                <div className="grid grid-cols-2 gap-[5px]">
                  {menuItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href || "#"}
                      className="flex items-center gap-[6px] px-[8px] py-[8px] text-[13px] text-[#333] no-underline rounded hover:bg-[#f4f4f4]"
                    >
                      <span className="flex-shrink-0">{item.icon}</span>
                      <span className="truncate">{item.text}</span>
                      {item.badge && (
                        <span className="ml-auto flex-shrink-0">
                          {item.badge}
                        </span>
                      )}
                    </a>
                  ))}
                </div>
              </li>
            )}

            {/* Footer */}
            <li className="flex items-center justify-between px-[10px] py-[10px] bg-[#f4f4f4]">
              <button
                onClick={() => {
                  setIsOpen(false)
                  onProfile?.()
                }}
                className="px-[15px] py-[5px] text-[12px] bg-[#3c8dbc] text-white border border-[#367fa9] rounded-[3px] cursor-pointer hover:bg-[#367fa9]"
              >
                Profile
              </button>
              <button
                onClick={() => {
                  setIsOpen(false)
                  onSignOut?.()
                }}
                className="px-[15px] py-[5px] text-[12px] bg-[#dd4b39] text-white border border-[#d73925] rounded-[3px] cursor-pointer hover:bg-[#d73925]"
              >
                Sign out
              </button>
            </li>
          </ul>
        )}
      </div>
    )
  }
)
UserMenuDropdown.displayName = "UserMenuDropdown"

export { UserMenuDropdown }
export type { UserMenuDropdownProps, UserMenuItem }
