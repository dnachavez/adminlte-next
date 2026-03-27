"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

type TaskColor =
  | "aqua"
  | "red"
  | "green"
  | "yellow"
  | "blue"
  | "purple"
  | "light-blue"
  | "primary"
  | "success"
  | "info"
  | "warning"
  | "danger"

const taskColorStyles: Record<TaskColor, string> = {
  aqua: "bg-[#00c0ef]",
  red: "bg-[#dd4b39]",
  green: "bg-[#00a65a]",
  yellow: "bg-[#f39c12]",
  blue: "bg-[#3c8dbc]",
  purple: "bg-[#605ca8]",
  "light-blue": "bg-[#3c8dbc]",
  primary: "bg-[#3c8dbc]",
  success: "bg-[#00a65a]",
  info: "bg-[#00c0ef]",
  warning: "bg-[#f39c12]",
  danger: "bg-[#dd4b39]",
}

interface Task {
  id: string | number
  name: string
  progress: number
  color: TaskColor
}

interface TasksDropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  tasks: Task[]
  count?: number
  onViewAll?: () => void
}

const TasksDropdown = React.forwardRef<HTMLDivElement, TasksDropdownProps>(
  ({ className, tasks, count, onViewAll, ...props }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const containerRef = React.useRef<HTMLDivElement>(null)

    const displayCount = count ?? tasks.length

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
      return () =>
        document.removeEventListener("mousedown", handleClickOutside)
    }, [isOpen])

    return (
      <div
        ref={(node) => {
          ;(
            containerRef as React.MutableRefObject<HTMLDivElement | null>
          ).current = node
          if (typeof ref === "function") ref(node)
          else if (ref) ref.current = node
        }}
        className={cn("relative inline-block", className)}
        {...props}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center justify-center w-[50px] h-[50px] bg-transparent border-none text-[var(--adminlte-skin-navbar-color)] cursor-pointer hover:bg-black/10"
          aria-label="Tasks"
        >
          {/* Flag icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="currentColor"
            className="w-[16px] h-[16px]"
          >
            <path d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32V64 368 480c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z" />
          </svg>
          {displayCount > 0 && (
            <span className="absolute top-[8px] right-[6px] inline-block min-w-[10px] px-[5px] py-[2px] text-[10px] font-bold leading-none text-center text-white bg-[#dd4b39] rounded-[10px]">
              {displayCount}
            </span>
          )}
        </button>

        {isOpen && (
          <ul className="absolute right-0 z-[1000] min-w-[280px] py-0 mt-0 bg-white border border-[#ccc] rounded-[3px] shadow-[0_6px_12px_rgba(0,0,0,0.175)] list-none">
            <li className="px-[10px] py-[10px] text-[14px] font-bold text-center border-b border-[#f4f4f4]">
              You have {displayCount} tasks
            </li>
            {tasks.map((task) => {
              const clampedProgress = Math.max(0, Math.min(100, task.progress))
              return (
                <li
                  key={task.id}
                  className="px-[10px] py-[10px] border-b border-[#f4f4f4]"
                >
                  <div className="flex justify-between mb-[5px]">
                    <span className="text-[13px] text-[#333] truncate">
                      {task.name}
                    </span>
                    <span className="text-[12px] text-[#999]">
                      {clampedProgress}%
                    </span>
                  </div>
                  <div className="w-full h-[7px] bg-[#f4f4f4] rounded-[3px] overflow-hidden">
                    <div
                      className={cn(
                        "h-full transition-[width] duration-500",
                        taskColorStyles[task.color]
                      )}
                      style={{ width: `${clampedProgress}%` }}
                      role="progressbar"
                      aria-valuenow={clampedProgress}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </li>
              )
            })}
            <li className="px-[10px] py-[10px] bg-[#f4f4f4] text-center">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  onViewAll?.()
                }}
                className="text-[14px] text-[#3c8dbc] no-underline hover:underline"
              >
                View all tasks
              </a>
            </li>
          </ul>
        )}
      </div>
    )
  }
)
TasksDropdown.displayName = "TasksDropdown"

export { TasksDropdown }
export type { TasksDropdownProps, Task, TaskColor }
