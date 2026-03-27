"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

type TabsVariant = "default" | "primary" | "info" | "success" | "warning" | "danger"

const tabsHeaderStyles: Record<TabsVariant, string> = {
  default: "bg-[#f4f4f4]",
  primary: "bg-[#3c8dbc]",
  info: "bg-[#00c0ef]",
  success: "bg-[#00a65a]",
  warning: "bg-[#f39c12]",
  danger: "bg-[#dd4b39]",
}

const tabActiveStyles: Record<TabsVariant, string> = {
  default: "bg-white text-[#444] border-t-[3px] border-t-[#3c8dbc]",
  primary: "bg-white text-[#444] border-t-[3px] border-t-[#3c8dbc]",
  info: "bg-white text-[#444] border-t-[3px] border-t-[#00c0ef]",
  success: "bg-white text-[#444] border-t-[3px] border-t-[#00a65a]",
  warning: "bg-white text-[#444] border-t-[3px] border-t-[#f39c12]",
  danger: "bg-white text-[#444] border-t-[3px] border-t-[#dd4b39]",
}

interface Tab {
  id: string
  label: React.ReactNode
  content: React.ReactNode
  icon?: React.ReactNode
  disabled?: boolean
}

interface AdminLTETabsProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs: Tab[]
  variant?: TabsVariant
  defaultActiveTab?: string
  activeTab?: string
  onTabChange?: (tabId: string) => void
  position?: "top" | "bottom" | "left" | "right"
  headerTools?: React.ReactNode
  custom?: boolean
}

const AdminLTETabs = React.forwardRef<HTMLDivElement, AdminLTETabsProps>(
  (
    {
      className,
      tabs,
      variant = "default",
      defaultActiveTab,
      activeTab: controlledActiveTab,
      onTabChange,
      position = "top",
      headerTools,
      custom = true,
      ...props
    },
    ref
  ) => {
    const [internalActiveTab, setInternalActiveTab] = React.useState(
      defaultActiveTab || tabs[0]?.id || ""
    )
    const activeTab = controlledActiveTab ?? internalActiveTab

    const handleTabClick = (tabId: string) => {
      setInternalActiveTab(tabId)
      onTabChange?.(tabId)
    }

    const tabNav = (
      <ul
        className={cn(
          "flex list-none m-0 border-b-0",
          custom && "p-0 rounded-t-[3px]",
          custom && variant !== "default" && tabsHeaderStyles[variant],
          !custom && "border-b border-b-[#ddd]"
        )}
      >
        {tabs.map((tab) => (
          <li key={tab.id} className="relative">
            <button
              type="button"
              className={cn(
                "block px-[15px] py-[10px] text-[14px] no-underline border-0 cursor-pointer transition-colors",
                activeTab === tab.id
                  ? cn(
                      custom
                        ? tabActiveStyles[variant]
                        : "bg-white text-[#444] border border-solid border-[#ddd] border-b-transparent rounded-t-[3px]",
                      "-mb-[1px]"
                    )
                  : cn(
                      "bg-transparent",
                      variant !== "default" && custom
                        ? "text-white/80 hover:text-white"
                        : "text-[#444] hover:bg-[#eee]"
                    ),
                tab.disabled && "opacity-50 cursor-not-allowed pointer-events-none"
              )}
              onClick={() => !tab.disabled && handleTabClick(tab.id)}
              disabled={tab.disabled}
            >
              {tab.icon && <span className="mr-[5px]">{tab.icon}</span>}
              {tab.label}
            </button>
          </li>
        ))}
        {headerTools && (
          <li className="ml-auto flex items-center pr-[10px]">
            {headerTools}
          </li>
        )}
      </ul>
    )

    const tabContent = (
      <div
        className={cn(
          "p-[10px]",
          custom && "bg-white rounded-b-[3px]"
        )}
      >
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={cn(
              activeTab === tab.id ? "block" : "hidden"
            )}
          >
            {tab.content}
          </div>
        ))}
      </div>
    )

    return (
      <div
        ref={ref}
        className={cn(
          custom && "mb-[20px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] rounded-[3px]",
          className
        )}
        {...props}
      >
        {position === "bottom" ? (
          <>
            {tabContent}
            {tabNav}
          </>
        ) : (
          <>
            {tabNav}
            {tabContent}
          </>
        )}
      </div>
    )
  }
)
AdminLTETabs.displayName = "AdminLTETabs"

export { AdminLTETabs }
export type { AdminLTETabsProps, Tab, TabsVariant }
