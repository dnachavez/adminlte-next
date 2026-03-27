"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

/* ---------------------------------------------------------------------------
 * TodoList
 * -------------------------------------------------------------------------- */

interface TodoListProps extends React.HTMLAttributes<HTMLUListElement> {}

const TodoList = React.forwardRef<HTMLUListElement, TodoListProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <ul
        ref={ref}
        className={cn("list-none m-0 p-0", className)}
        {...props}
      >
        {children}
      </ul>
    )
  }
)
TodoList.displayName = "TodoList"

/* ---------------------------------------------------------------------------
 * TodoItem
 * -------------------------------------------------------------------------- */

interface TodoItemProps extends React.HTMLAttributes<HTMLLIElement> {
  text: string
  done?: boolean
  onToggle?: () => void
  onDelete?: () => void
  color?: string
  tools?: React.ReactNode
}

const TodoItem = React.forwardRef<HTMLLIElement, TodoItemProps>(
  (
    {
      className,
      text,
      done = false,
      onToggle,
      onDelete,
      color,
      tools,
      ...props
    },
    ref
  ) => {
    return (
      <li
        ref={ref}
        className={cn(
          "flex items-center gap-[8px] p-[10px] rounded-[2px] border-l-[2px] border-l-transparent mb-[2px] bg-[#f4f4f4] hover:bg-[#e8e8e8] transition-colors",
          className
        )}
        style={color ? { borderLeftColor: color } : undefined}
        {...props}
      >
        {/* Checkbox */}
        <input
          type="checkbox"
          checked={done}
          onChange={onToggle}
          className="w-[16px] h-[16px] cursor-pointer flex-shrink-0 accent-[#3c8dbc]"
        />

        {/* Text */}
        <span
          className={cn(
            "flex-1 text-[14px]",
            done && "line-through text-[#999]"
          )}
        >
          {text}
        </span>

        {/* Tools */}
        <div className="flex items-center gap-[5px] flex-shrink-0">
          {tools}

          {onDelete && (
            <button
              type="button"
              className="bg-transparent border-none text-[#dd4b39] cursor-pointer text-[14px] p-[2px_4px] rounded hover:bg-[rgba(221,75,57,0.1)]"
              onClick={onDelete}
              aria-label="Delete item"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          )}
        </div>
      </li>
    )
  }
)
TodoItem.displayName = "TodoItem"

export { TodoList, TodoItem }
export type { TodoListProps, TodoItemProps }
