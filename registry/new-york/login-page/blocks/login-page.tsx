"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

interface LoginPageProps extends React.HTMLAttributes<HTMLDivElement> {
  logo?: React.ReactNode
  logoText?: string
  message?: string
  onSubmit?: (email: string, password: string, remember: boolean) => void
  socialButtons?: React.ReactNode
  registerHref?: string
  forgotPasswordHref?: string
}

function LoginPage({
  className,
  logo,
  logoText = "AdminLTE",
  message = "Sign in to start your session",
  onSubmit,
  socialButtons,
  registerHref = "#",
  forgotPasswordHref = "#",
  ...props
}: LoginPageProps) {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [remember, setRemember] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.(email, password, remember)
  }

  return (
    <div
      className={cn(
        "min-h-screen flex items-center justify-center bg-[#d2d6de]",
        className
      )}
      {...props}
    >
      <div className="w-full max-w-[360px] mx-auto">
        <div className="text-center mb-[25px]">
          {logo || (
            <a
              href="#"
              className="text-[35px] text-center font-bold no-underline text-[#444]"
            >
              <b>{logoText.slice(0, 5)}</b>
              {logoText.slice(5)}
            </a>
          )}
        </div>

        <div className="bg-white shadow-[0_1px_1px_rgba(0,0,0,0.1)] rounded-[3px]">
          <div className="p-[20px] border-t-[3px] border-t-[#3c8dbc]">
            <p className="text-center text-[15px] text-[#666] mb-[20px]">
              {message}
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-[15px] relative">
                <input
                  type="email"
                  className="block w-full h-[34px] px-[12px] py-[6px] text-[14px] text-[#555] bg-white border border-solid border-[#d2d6de] rounded-[3px] focus:border-[#3c8dbc] focus:outline-none placeholder:text-[#999]"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="absolute right-[10px] top-1/2 -translate-y-1/2 text-[#999]">
                  &#9993;
                </span>
              </div>

              <div className="mb-[15px] relative">
                <input
                  type="password"
                  className="block w-full h-[34px] px-[12px] py-[6px] text-[14px] text-[#555] bg-white border border-solid border-[#d2d6de] rounded-[3px] focus:border-[#3c8dbc] focus:outline-none placeholder:text-[#999]"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="absolute right-[10px] top-1/2 -translate-y-1/2 text-[#999]">
                  &#128274;
                </span>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-[5px] cursor-pointer text-[14px]">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  Remember Me
                </label>
                <button
                  type="submit"
                  className="px-[20px] py-[6px] bg-[#3c8dbc] border border-[#367fa9] text-white rounded-[3px] text-[14px] cursor-pointer hover:bg-[#367fa9]"
                >
                  Sign In
                </button>
              </div>
            </form>

            {socialButtons && (
              <div className="text-center mt-[20px]">
                <p className="text-[#666] mb-[10px]">- OR -</p>
                <div className="flex gap-[5px] justify-center">
                  {socialButtons}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-between mt-[10px] text-[14px]">
          <a href={forgotPasswordHref} className="text-[#999] no-underline hover:text-[#444]">
            I forgot my password
          </a>
          <a href={registerHref} className="text-[#999] no-underline hover:text-[#444]">
            Register a new membership
          </a>
        </div>
      </div>
    </div>
  )
}

export { LoginPage }
export type { LoginPageProps }
