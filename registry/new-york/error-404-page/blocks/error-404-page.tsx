"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

interface Error404PageProps extends React.HTMLAttributes<HTMLDivElement> {
  headline?: string
  message?: string
  searchPlaceholder?: string
  onSearch?: (query: string) => void
  homeHref?: string
}

function Error404Page({
  className,
  headline = "404",
  message = "Oops! Page not found.",
  searchPlaceholder = "Search",
  onSearch,
  homeHref = "/",
  ...props
}: Error404PageProps) {
  const [query, setQuery] = React.useState("")

  return (
    <div
      className={cn("bg-[#ecf0f5] min-h-screen", className)}
      {...props}
    >
      <section className="py-[40px] px-[15px]">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-[#00c0ef] text-[100px] font-black leading-none m-0">
            {headline}
          </h2>

          <h3 className="text-[30px] font-light mt-[10px] mb-[20px]">
            {message}
          </h3>

          <p className="text-[#666] text-[16px] mb-[20px]">
            We could not find the page you were looking for.
            Meanwhile, you may{" "}
            <a href={homeHref} className="text-[#3c8dbc]">
              return to dashboard
            </a>
            .
          </p>

          <form
            className="max-w-[300px] mx-auto"
            onSubmit={(e) => {
              e.preventDefault()
              onSearch?.(query)
            }}
          >
            <div className="flex">
              <input
                type="text"
                className="flex-1 h-[34px] px-[12px] py-[6px] text-[14px] text-[#555] bg-white border border-solid border-[#d2d6de] rounded-l-[3px] rounded-r-none focus:border-[#3c8dbc] focus:outline-none placeholder:text-[#999]"
                placeholder={searchPlaceholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                type="submit"
                className="px-[15px] py-[6px] bg-[#3c8dbc] border border-[#367fa9] text-white rounded-r-[3px] rounded-l-none text-[14px] cursor-pointer hover:bg-[#367fa9]"
              >
                &#128269;
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export { Error404Page }
export type { Error404PageProps }
