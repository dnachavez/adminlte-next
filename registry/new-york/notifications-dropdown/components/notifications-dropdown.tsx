"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

interface Notification {
  id: string | number
  icon: React.ReactNode
  text: string
  href?: string
}

interface NotificationsDropdownProps
  extends React.HTMLAttributes<HTMLDivElement> {
  notifications: Notification[]
  count?: number
  onViewAll?: () => void
}

const NotificationsDropdown = React.forwardRef<
  HTMLDivElement,
  NotificationsDropdownProps
>(({ className, notifications, count, onViewAll, ...props }, ref) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)

  const displayCount = count ?? notifications.length

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
    return () => document.removeEventListener("mousedown", handleClickOutside)
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
        className="relative flex items-center justify-center w-[50px] h-[50px] bg-transparent border-none text-[var(--adminlte-skin-navbar-color)] cursor-pointer hover:bg-black/10"
        aria-label="Notifications"
      >
        {/* Bell icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          fill="currentColor"
          className="w-[16px] h-[16px]"
        >
          <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
        </svg>
        {displayCount > 0 && (
          <span className="absolute top-[8px] right-[6px] inline-block min-w-[10px] px-[5px] py-[2px] text-[10px] font-bold leading-none text-center text-white bg-[#f39c12] rounded-[10px]">
            {displayCount}
          </span>
        )}
      </button>

      {isOpen && (
        <ul className="absolute right-0 z-[1000] min-w-[280px] py-0 mt-0 bg-white border border-[#ccc] rounded-[3px] shadow-[0_6px_12px_rgba(0,0,0,0.175)] list-none">
          <li className="px-[10px] py-[10px] text-[14px] font-bold text-center border-b border-[#f4f4f4]">
            You have {displayCount} notifications
          </li>
          {notifications.map((notification) => (
            <li key={notification.id} className="border-b border-[#f4f4f4]">
              <a
                href={notification.href || "#"}
                className="flex items-center px-[10px] py-[10px] no-underline text-[#333] hover:bg-[#f4f4f4]"
              >
                <span className="mr-[10px] flex-shrink-0">
                  {notification.icon}
                </span>
                <span className="text-[13px]">{notification.text}</span>
              </a>
            </li>
          ))}
          <li className="px-[10px] py-[10px] bg-[#f4f4f4] text-center">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                onViewAll?.()
              }}
              className="text-[14px] text-[#3c8dbc] no-underline hover:underline"
            >
              View all
            </a>
          </li>
        </ul>
      )}
    </div>
  )
})
NotificationsDropdown.displayName = "NotificationsDropdown"

export { NotificationsDropdown }
export type { NotificationsDropdownProps, Notification }
