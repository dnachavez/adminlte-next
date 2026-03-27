"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

/* ---------------------------------------------------------------------------
 * Types
 * -------------------------------------------------------------------------- */

interface DirectChatMessageData {
  id: string
  name: string
  avatarUrl: string
  text: string
  time: string
  isOwn?: boolean
}

interface DirectChatContactData {
  id: string
  name: string
  avatarUrl: string
  status?: "online" | "offline" | "away" | "busy"
  lastMessage?: string
}

/* ---------------------------------------------------------------------------
 * DirectChatMessage
 * -------------------------------------------------------------------------- */

interface DirectChatMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  avatarUrl: string
  text: string
  time: string
  isOwn?: boolean
  variant?: string
}

const DirectChatMessage = React.forwardRef<HTMLDivElement, DirectChatMessageProps>(
  ({ className, name, avatarUrl, text, time, isOwn = false, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex mb-[10px] gap-[10px]",
          isOwn && "flex-row-reverse",
          className
        )}
        {...props}
      >
        {/* Avatar */}
        <img
          src={avatarUrl}
          alt={name}
          className="w-[40px] h-[40px] rounded-full object-cover flex-shrink-0"
        />

        {/* Message content */}
        <div className={cn("max-w-[70%]", isOwn && "text-right")}>
          {/* Name and time */}
          <div
            className={cn(
              "flex items-center gap-[8px] mb-[2px] text-[12px]",
              isOwn && "flex-row-reverse"
            )}
          >
            <span className="font-semibold text-[#333]">{name}</span>
            <span className="text-[#999]">{time}</span>
          </div>

          {/* Message bubble */}
          <div
            className={cn(
              "relative inline-block py-[5px] px-[10px] rounded-[5px] text-[14px] text-left",
              isOwn
                ? "bg-[var(--adminlte-light-blue,#3c8dbc)] text-white"
                : "bg-[#d2d6de] text-[#333]",
              isOwn && variant
            )}
          >
            {text}
          </div>
        </div>
      </div>
    )
  }
)
DirectChatMessage.displayName = "DirectChatMessage"

/* ---------------------------------------------------------------------------
 * DirectChatContacts
 * -------------------------------------------------------------------------- */

interface DirectChatContactsProps extends React.HTMLAttributes<HTMLDivElement> {
  contacts: DirectChatContactData[]
  visible?: boolean
}

const statusColors: Record<string, string> = {
  online: "bg-[#00a65a]",
  offline: "bg-[#d2d6de]",
  away: "bg-[#f39c12]",
  busy: "bg-[#dd4b39]",
}

const DirectChatContacts = React.forwardRef<HTMLDivElement, DirectChatContactsProps>(
  ({ className, contacts, visible = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "absolute top-0 bottom-0 right-0 w-full bg-[#222d32] overflow-y-auto transition-transform duration-300 z-10",
          visible ? "translate-x-0" : "translate-x-full",
          className
        )}
        {...props}
      >
        <ul className="list-none m-0 p-0">
          {contacts.map((contact) => (
            <li
              key={contact.id}
              className="border-b border-b-[rgba(255,255,255,0.2)] p-[10px] cursor-pointer hover:bg-[rgba(255,255,255,0.1)]"
            >
              <a href="#" className="flex items-center gap-[10px] no-underline text-white">
                <div className="relative flex-shrink-0">
                  <img
                    src={contact.avatarUrl}
                    alt={contact.name}
                    className="w-[40px] h-[40px] rounded-full object-cover"
                  />
                  <span
                    className={cn(
                      "absolute bottom-0 right-0 w-[10px] h-[10px] rounded-full border-2 border-[#222d32]",
                      statusColors[contact.status || "offline"]
                    )}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-[14px] font-semibold truncate">
                    {contact.name}
                  </span>
                  {contact.lastMessage && (
                    <span className="block text-[12px] text-[rgba(255,255,255,0.6)] truncate">
                      {contact.lastMessage}
                    </span>
                  )}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
)
DirectChatContacts.displayName = "DirectChatContacts"

/* ---------------------------------------------------------------------------
 * DirectChat
 * -------------------------------------------------------------------------- */

interface DirectChatProps extends React.HTMLAttributes<HTMLDivElement> {
  messages?: DirectChatMessageData[]
  contacts?: DirectChatContactData[]
  variant?: string
  height?: number
  onSendMessage?: (text: string) => void
}

const DirectChat = React.forwardRef<HTMLDivElement, DirectChatProps>(
  (
    {
      className,
      messages = [],
      contacts = [],
      variant,
      height = 250,
      onSendMessage,
      children,
      ...props
    },
    ref
  ) => {
    const [inputValue, setInputValue] = React.useState("")
    const [contactsVisible, setContactsVisible] = React.useState(false)

    const handleSend = () => {
      if (inputValue.trim() && onSendMessage) {
        onSendMessage(inputValue.trim())
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
        className={cn("relative bg-white overflow-hidden", className)}
        {...props}
      >
        {/* Box tools - contacts toggle */}
        {contacts.length > 0 && (
          <div className="absolute top-[10px] right-[10px] z-20">
            <button
              type="button"
              className="bg-transparent border-none text-[#999] cursor-pointer text-[14px] hover:text-[#333]"
              onClick={() => setContactsVisible(!contactsVisible)}
              aria-label="Toggle contacts"
            >
              <span className="inline-block w-[20px] h-[20px] text-center">
                {contactsVisible ? "\u2715" : "\u2630"}
              </span>
            </button>
          </div>
        )}

        {/* Messages container */}
        <div
          className="overflow-y-auto p-[10px]"
          style={{ height: `${height}px` }}
        >
          {messages.map((msg) => (
            <DirectChatMessage
              key={msg.id}
              name={msg.name}
              avatarUrl={msg.avatarUrl}
              text={msg.text}
              time={msg.time}
              isOwn={msg.isOwn}
              variant={variant}
            />
          ))}
          {children}
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

        {/* Contacts overlay */}
        {contacts.length > 0 && (
          <DirectChatContacts
            contacts={contacts}
            visible={contactsVisible}
          />
        )}
      </div>
    )
  }
)
DirectChat.displayName = "DirectChat"

export { DirectChat, DirectChatMessage, DirectChatContacts }
export type {
  DirectChatProps,
  DirectChatMessageProps,
  DirectChatContactsProps,
  DirectChatMessageData,
  DirectChatContactData,
}
