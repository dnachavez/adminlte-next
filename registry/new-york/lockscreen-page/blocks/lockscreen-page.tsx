"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

interface LockscreenPageProps extends React.HTMLAttributes<HTMLDivElement> {
  userName: string
  avatarUrl: string
  logo?: React.ReactNode
  logoText?: string
  onUnlock?: (password: string) => void
}

function LockscreenPage({
  className,
  userName,
  avatarUrl,
  logo,
  logoText = "AdminLTE",
  onUnlock,
  ...props
}: LockscreenPageProps) {
  const [password, setPassword] = React.useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onUnlock?.(password)
  }

  return (
    <div
      className={cn(
        "min-h-screen flex items-center justify-center bg-[#d2d6de]",
        className
      )}
      {...props}
    >
      <div className="w-full max-w-[360px] mx-auto text-center">
        <div className="mb-[25px]">
          {logo || (
            <a href="#" className="text-[35px] font-bold no-underline text-[#444]">
              <b>{logoText.slice(0, 5)}</b>{logoText.slice(5)}
            </a>
          )}
        </div>

        <div className="bg-white shadow-[0_1px_1px_rgba(0,0,0,0.1)] rounded-[3px] p-[20px]">
          <div className="mb-[15px]">
            <img
              src={avatarUrl}
              alt={userName}
              className="w-[70px] h-[70px] rounded-full mx-auto border-[3px] border-white shadow-[0_1px_3px_rgba(0,0,0,0.2)]"
            />
          </div>

          <h3 className="text-[22px] font-light text-center mb-[20px]">
            {userName}
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="flex gap-0">
              <input
                type="password"
                className="flex-1 h-[34px] px-[12px] py-[6px] text-[14px] text-[#555] bg-white border border-solid border-[#d2d6de] rounded-l-[3px] rounded-r-none focus:border-[#3c8dbc] focus:outline-none placeholder:text-[#999]"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="px-[15px] py-[6px] bg-[#3c8dbc] border border-[#367fa9] text-white rounded-r-[3px] rounded-l-none text-[14px] cursor-pointer hover:bg-[#367fa9]"
              >
                &#10132;
              </button>
            </div>
          </form>
        </div>

        <p className="text-[13px] text-[#999] mt-[15px]">
          Enter your password to retrieve your session
        </p>
      </div>
    </div>
  )
}

export { LockscreenPage }
export type { LockscreenPageProps }
