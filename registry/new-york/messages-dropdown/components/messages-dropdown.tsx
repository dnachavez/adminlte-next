"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

interface Message {
  id: string | number
  name: string
  avatarUrl: string
  text: string
  time: string
  href?: string
}

interface MessagesDropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  messages: Message[]
  count?: number
  onSeeAll?: () => void
}

const MessagesDropdown = React.forwardRef<HTMLDivElement, MessagesDropdownProps>(
  ({ className, messages, count, onSeeAll, ...props }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const containerRef = React.useRef<HTMLDivElement>(null)

    const displayCount = count ?? messages.length

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
          ;(containerRef as React.MutableRefObject<HTMLDivElement | null>).current = node
          if (typeof ref === "function") ref(node)
          else if (ref) ref.current = node
        }}
        className={cn("relative inline-block", className)}
        {...props}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center justify-center w-[50px] h-[50px] bg-transparent border-none text-[var(--adminlte-skin-navbar-color)] cursor-pointer hover:bg-black/10"
          aria-label="Messages"
        >
          {/* Mail icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
            className="w-[16px] h-[16px]"
          >
            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
          </svg>
          {displayCount > 0 && (
            <span className="absolute top-[8px] right-[6px] inline-block min-w-[10px] px-[5px] py-[2px] text-[10px] font-bold leading-none text-center text-white bg-[#00a65a] rounded-[10px]">
              {displayCount}
            </span>
          )}
        </button>

        {isOpen && (
          <ul className="absolute right-0 z-[1000] min-w-[280px] py-0 mt-0 bg-white border border-[#ccc] rounded-[3px] shadow-[0_6px_12px_rgba(0,0,0,0.175)] list-none">
            <li className="px-[10px] py-[10px] text-[14px] font-bold text-center border-b border-[#f4f4f4]">
              You have {displayCount} messages
            </li>
            {messages.map((message) => (
              <li key={message.id} className="border-b border-[#f4f4f4]">
                <a
                  href={message.href || "#"}
                  className="flex items-start px-[10px] py-[10px] no-underline text-[#333] hover:bg-[#f4f4f4]"
                >
                  <div className="flex-shrink-0 mr-[10px]">
                    <img
                      src={message.avatarUrl}
                      alt={message.name}
                      className="w-[40px] h-[40px] rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[14px] font-semibold m-0 mb-[2px] text-[#333] truncate">
                      {message.name}
                    </h4>
                    <p className="text-[12px] text-[#999] m-0 mb-[2px] truncate">
                      {message.text}
                    </p>
                    <p className="text-[12px] text-[#999] m-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="w-[10px] h-[10px] mr-[4px] inline-block"
                      >
                        <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                      </svg>
                      {message.time}
                    </p>
                  </div>
                </a>
              </li>
            ))}
            <li className="px-[10px] py-[10px] bg-[#f4f4f4] text-center">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  onSeeAll?.()
                }}
                className="text-[14px] text-[#3c8dbc] no-underline hover:underline"
              >
                See All Messages
              </a>
            </li>
          </ul>
        )}
      </div>
    )
  }
)
MessagesDropdown.displayName = "MessagesDropdown"

export { MessagesDropdown }
export type { MessagesDropdownProps, Message }
