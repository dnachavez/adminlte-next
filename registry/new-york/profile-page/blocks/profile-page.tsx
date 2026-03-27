"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

interface ProfileStat {
  label: string
  value: string | number
  href?: string
}

interface ProfilePageProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  avatarUrl: string
  role?: string
  coverImageUrl?: string
  coverColor?: string
  stats?: ProfileStat[]
  tabs?: { id: string; label: string; icon?: React.ReactNode; content: React.ReactNode }[]
  defaultTab?: string
  sidebar?: React.ReactNode
}

function ProfilePage({
  className,
  name,
  avatarUrl,
  role,
  coverImageUrl,
  coverColor = "#3c8dbc",
  stats = [],
  tabs = [],
  defaultTab,
  sidebar,
  ...props
}: ProfilePageProps) {
  const [activeTab, setActiveTab] = React.useState(defaultTab || tabs[0]?.id || "")

  return (
    <div className={cn("", className)} {...props}>
      <div className="flex gap-[15px] flex-col lg:flex-row">
        {/* Left column */}
        <div className="w-full lg:w-[280px] flex-shrink-0">
          <div className="bg-white shadow-[0_1px_1px_rgba(0,0,0,0.1)] rounded-[3px] mb-[20px]">
            {/* Cover + Avatar */}
            <div
              className="relative h-[150px] rounded-t-[3px] flex items-end justify-center"
              style={{
                background: coverImageUrl
                  ? `url(${coverImageUrl}) center/cover no-repeat`
                  : coverColor,
              }}
            >
              <img
                src={avatarUrl}
                alt={name}
                className="w-[100px] h-[100px] rounded-full border-[3px] border-white shadow-[0_2px_4px_rgba(0,0,0,0.2)] translate-y-[50px]"
              />
            </div>

            <div className="pt-[60px] pb-[20px] text-center">
              <h3 className="text-[20px] font-semibold m-0">{name}</h3>
              {role && <p className="text-[14px] text-[#999] mt-[5px]">{role}</p>}
            </div>

            {/* Stats */}
            {stats.length > 0 && (
              <div className="border-t border-t-[#f4f4f4]">
                <div className="flex">
                  {stats.map((stat, i) => (
                    <a
                      key={i}
                      href={stat.href || "#"}
                      className="flex-1 text-center py-[10px] text-[14px] no-underline text-[#444] border-r border-r-[#f4f4f4] last:border-r-0 hover:bg-[#f9f9f9]"
                    >
                      <span className="block font-bold text-[18px]">{stat.value}</span>
                      <span className="block text-[12px] text-[#999] uppercase">{stat.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {sidebar}
        </div>

        {/* Right column - Tabs */}
        {tabs.length > 0 && (
          <div className="flex-1">
            <div className="bg-white shadow-[0_1px_1px_rgba(0,0,0,0.1)] rounded-[3px]">
              <ul className="flex list-none m-0 p-0 border-b border-b-[#f4f4f4]">
                {tabs.map((tab) => (
                  <li key={tab.id}>
                    <button
                      type="button"
                      className={cn(
                        "block px-[15px] py-[10px] text-[14px] border-0 cursor-pointer transition-colors",
                        activeTab === tab.id
                          ? "bg-white text-[#444] border-b-[3px] border-b-[#3c8dbc] -mb-[1px]"
                          : "bg-transparent text-[#444] hover:bg-[#f4f4f4]"
                      )}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.icon && <span className="mr-[5px]">{tab.icon}</span>}
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="p-[15px]">
                {tabs.map((tab) => (
                  <div key={tab.id} className={activeTab === tab.id ? "block" : "hidden"}>
                    {tab.content}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export { ProfilePage }
export type { ProfilePageProps, ProfileStat }
