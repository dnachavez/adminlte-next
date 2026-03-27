"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

/* ---------------------------------------------------------------------------
 * Types
 * -------------------------------------------------------------------------- */

interface ChatMessage {
  id: string
  name: string
  avatarUrl: string
  text: string
  time: string
  isOwn?: boolean
}

/* ---------------------------------------------------------------------------
 * ChatWidget
 * -------------------------------------------------------------------------- */

interface ChatWidgetProps extends React.HTMLAttributes<HTMLDivElement> {
  messages?: ChatMessage[]
  onSend?: (text: string) => void
  height?: number
}

const ChatWidget = React.forwardRef<HTMLDivElement, ChatWidgetProps>(
  ({ className, messages = [], onSend, height = 250, ...props }, ref) => {
    const [inputValue, setInputValue] = React.useState("")
    const messagesEndRef = React.useRef<HTMLDivElement>(null)

    const scrollToBottom = React.useCallback(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [])

    React.useEffect(() => {
      scrollToBottom()
    }, [messages, scrollToBottom])

    const handleSend = () => {
      if (inputValue.trim() && onSend) {
        onSend(inputValue.trim())
        setInputValue("")
      }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault()
        handleSend()
      }
    }

    return (
      <div
        ref={ref}
        className={cn("bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)]", className)}
        {...props}
      >
        {/* Messages container */}
        <div
          className="overflow-y-auto p-[10px]"
          style={{ height: `${height}px` }}
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={cn(
                "flex mb-[10px] gap-[10px]",
                msg.isOwn && "flex-row-reverse"
              )}
            >
              {/* Avatar */}
              <img
                src={msg.avatarUrl}
                alt={msg.name}
                className="w-[40px] h-[40px] rounded-full object-cover flex-shrink-0"
              />

              {/* Message content */}
              <div className={cn("max-w-[70%]", msg.isOwn && "text-right")}>
                {/* Name and time */}
                <div
                  className={cn(
                    "flex items-center gap-[8px] mb-[2px] text-[12px]",
                    msg.isOwn && "flex-row-reverse"
                  )}
                >
                  <span className="font-semibold text-[#333]">{msg.name}</span>
                  <span className="text-[#999]">{msg.time}</span>
                </div>

                {/* Message bubble */}
                <div
                  className={cn(
                    "inline-block py-[5px] px-[10px] rounded-[5px] text-[14px] text-left",
                    msg.isOwn
                      ? "bg-[#3c8dbc] text-white"
                      : "bg-[#d2d6de] text-[#333]"
                  )}
                >
                  {msg.text}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        <div className="border-t border-t-[#f4f4f4] p-[10px]">
          <div className="flex gap-[5px]">
            <input
              type="text"
              placeholder="Type Message ..."
              className="flex-1 border border-[#d2d6de] rounded-[4px] py-[6px] px-[12px] text-[14px] outline-none focus:border-[#3c8dbc]"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              type="button"
              className="bg-[#3c8dbc] text-white border-none rounded-[4px] py-[6px] px-[15px] text-[14px] cursor-pointer hover:bg-[#367fa9]"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    )
  }
)
ChatWidget.displayName = "ChatWidget"

export { ChatWidget }
export type { ChatWidgetProps, ChatMessage }
