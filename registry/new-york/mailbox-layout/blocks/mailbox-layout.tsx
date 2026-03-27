"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

interface MailboxEmail {
  id: string
  from: string
  subject: string
  preview: string
  time: string
  read?: boolean
  starred?: boolean
  hasAttachment?: boolean
  labels?: { text: string; color: string }[]
}

interface MailboxFolder {
  id: string
  name: string
  icon?: React.ReactNode
  count?: number
  active?: boolean
}

interface MailboxLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  folders?: MailboxFolder[]
  emails?: MailboxEmail[]
  activeFolder?: string
  onFolderClick?: (folderId: string) => void
  onEmailClick?: (emailId: string) => void
  onCompose?: () => void
  selectedEmails?: string[]
  onSelectEmail?: (emailId: string) => void
  onSelectAll?: () => void
  view?: "inbox" | "read" | "compose"
  readContent?: React.ReactNode
  composeContent?: React.ReactNode
}

function MailboxLayout({
  className,
  folders = [],
  emails = [],
  activeFolder,
  onFolderClick,
  onEmailClick,
  onCompose,
  selectedEmails = [],
  onSelectEmail,
  onSelectAll,
  view = "inbox",
  readContent,
  composeContent,
  ...props
}: MailboxLayoutProps) {
  return (
    <div className={cn("flex gap-[15px] flex-col lg:flex-row", className)} {...props}>
      {/* Sidebar */}
      <div className="w-full lg:w-[200px] flex-shrink-0">
        <button
          type="button"
          className="w-full mb-[15px] px-[12px] py-[10px] bg-[#3c8dbc] border border-[#367fa9] text-white rounded-[3px] text-[14px] font-bold cursor-pointer hover:bg-[#367fa9]"
          onClick={onCompose}
        >
          Compose
        </button>

        <div className="bg-white shadow-[0_1px_1px_rgba(0,0,0,0.1)] rounded-[3px] p-[10px]">
          <ul className="list-none m-0 p-0">
            {folders.map((folder) => (
              <li key={folder.id}>
                <a
                  className={cn(
                    "flex items-center gap-[8px] px-[10px] py-[8px] text-[14px] no-underline rounded-[3px] cursor-pointer",
                    folder.active || folder.id === activeFolder
                      ? "bg-[#3c8dbc] text-white"
                      : "text-[#444] hover:bg-[#f4f4f4]"
                  )}
                  onClick={() => onFolderClick?.(folder.id)}
                >
                  {folder.icon && <span>{folder.icon}</span>}
                  <span className="flex-1">{folder.name}</span>
                  {folder.count !== undefined && folder.count > 0 && (
                    <span className="text-[12px] opacity-70">{folder.count}</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main */}
      <div className="flex-1">
        <div className="bg-white shadow-[0_1px_1px_rgba(0,0,0,0.1)] rounded-[3px]">
          {view === "inbox" && (
            <>
              {/* Controls */}
              <div className="p-[10px] border-b border-b-[#f4f4f4] flex items-center gap-[5px]">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="mr-[5px]"
                    onChange={() => onSelectAll?.()}
                  />
                </label>
                <button className="px-[8px] py-[4px] bg-[#f4f4f4] border border-[#ddd] text-[12px] rounded-[3px] cursor-pointer hover:bg-[#e7e7e7]">
                  Delete
                </button>
                <button className="px-[8px] py-[4px] bg-[#f4f4f4] border border-[#ddd] text-[12px] rounded-[3px] cursor-pointer hover:bg-[#e7e7e7]">
                  Refresh
                </button>
              </div>

              {/* Email list */}
              <table className="w-full border-collapse">
                <tbody>
                  {emails.map((email) => (
                    <tr
                      key={email.id}
                      className={cn(
                        "cursor-pointer hover:bg-[#f5f5f5] border-b border-b-[#f4f4f4]",
                        !email.read && "bg-[#f6f6f6] font-semibold"
                      )}
                      onClick={() => onEmailClick?.(email.id)}
                    >
                      <td className="w-[30px] p-[8px] text-center">
                        <input
                          type="checkbox"
                          checked={selectedEmails.includes(email.id)}
                          onChange={(e) => {
                            e.stopPropagation()
                            onSelectEmail?.(email.id)
                          }}
                          onClick={(e) => e.stopPropagation()}
                        />
                      </td>
                      <td className="w-[20px] p-[8px] text-center text-[14px] cursor-pointer">
                        {email.starred ? "★" : "☆"}
                      </td>
                      <td className="p-[8px] text-[14px] w-[150px] truncate">{email.from}</td>
                      <td className="p-[8px] text-[14px]">
                        <span>{email.subject}</span>
                        <span className="text-[#999]"> - {email.preview}</span>
                        {email.labels?.map((l, i) => (
                          <span
                            key={i}
                            className={cn(
                              "inline-block ml-[5px] px-[4px] py-[1px] text-[11px] text-white rounded-[2px]",
                              l.color
                            )}
                          >
                            {l.text}
                          </span>
                        ))}
                        {email.hasAttachment && <span className="ml-[5px]">&#128206;</span>}
                      </td>
                      <td className="p-[8px] text-[12px] text-[#999] text-right w-[80px]">{email.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          {view === "read" && (
            <div className="p-[15px]">{readContent}</div>
          )}

          {view === "compose" && (
            <div className="p-[15px]">{composeContent}</div>
          )}
        </div>
      </div>
    </div>
  )
}

export { MailboxLayout }
export type { MailboxLayoutProps, MailboxEmail, MailboxFolder }
