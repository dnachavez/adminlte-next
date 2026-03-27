"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

interface RegisterPageProps extends React.HTMLAttributes<HTMLDivElement> {
  logo?: React.ReactNode
  logoText?: string
  message?: string
  onSubmit?: (data: {
    fullName: string
    email: string
    password: string
    confirmPassword: string
    agreeTerms: boolean
  }) => void
  socialButtons?: React.ReactNode
  loginHref?: string
  termsHref?: string
}

function RegisterPage({
  className,
  logo,
  logoText = "AdminLTE",
  message = "Register a new membership",
  onSubmit,
  socialButtons,
  loginHref = "#",
  termsHref = "#",
  ...props
}: RegisterPageProps) {
  const [fullName, setFullName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [confirmPassword, setConfirmPassword] = React.useState("")
  const [agreeTerms, setAgreeTerms] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.({ fullName, email, password, confirmPassword, agreeTerms })
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
            <a href="#" className="text-[35px] font-bold no-underline text-[#444]">
              <b>{logoText.slice(0, 5)}</b>{logoText.slice(5)}
            </a>
          )}
        </div>

        <div className="bg-white shadow-[0_1px_1px_rgba(0,0,0,0.1)] rounded-[3px]">
          <div className="p-[20px] border-t-[3px] border-t-[#3c8dbc]">
            <p className="text-center text-[15px] text-[#666] mb-[20px]">{message}</p>

            <form onSubmit={handleSubmit}>
              <div className="mb-[15px]">
                <input
                  type="text"
                  className="block w-full h-[34px] px-[12px] py-[6px] text-[14px] text-[#555] bg-white border border-solid border-[#d2d6de] rounded-[3px] focus:border-[#3c8dbc] focus:outline-none placeholder:text-[#999]"
                  placeholder="Full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="mb-[15px]">
                <input
                  type="email"
                  className="block w-full h-[34px] px-[12px] py-[6px] text-[14px] text-[#555] bg-white border border-solid border-[#d2d6de] rounded-[3px] focus:border-[#3c8dbc] focus:outline-none placeholder:text-[#999]"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-[15px]">
                <input
                  type="password"
                  className="block w-full h-[34px] px-[12px] py-[6px] text-[14px] text-[#555] bg-white border border-solid border-[#d2d6de] rounded-[3px] focus:border-[#3c8dbc] focus:outline-none placeholder:text-[#999]"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-[15px]">
                <input
                  type="password"
                  className="block w-full h-[34px] px-[12px] py-[6px] text-[14px] text-[#555] bg-white border border-solid border-[#d2d6de] rounded-[3px] focus:border-[#3c8dbc] focus:outline-none placeholder:text-[#999]"
                  placeholder="Retype password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-[5px] cursor-pointer text-[14px]">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                  />
                  I agree to the{" "}
                  <a href={termsHref} className="text-[#3c8dbc]">terms</a>
                </label>
                <button
                  type="submit"
                  className="px-[20px] py-[6px] bg-[#3c8dbc] border border-[#367fa9] text-white rounded-[3px] text-[14px] cursor-pointer hover:bg-[#367fa9]"
                >
                  Register
                </button>
              </div>
            </form>

            {socialButtons && (
              <div className="text-center mt-[20px]">
                <p className="text-[#666] mb-[10px]">- OR -</p>
                <div className="flex gap-[5px] justify-center">{socialButtons}</div>
              </div>
            )}
          </div>
        </div>

        <div className="text-center mt-[10px]">
          <a href={loginHref} className="text-[14px] text-[#999] no-underline hover:text-[#444]">
            I already have a membership
          </a>
        </div>
      </div>
    </div>
  )
}

export { RegisterPage }
export type { RegisterPageProps }
