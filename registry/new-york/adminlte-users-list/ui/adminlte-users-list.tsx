"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

interface UserItem {
  id: string
  name: string
  avatarUrl: string
  date?: string
  href?: string
}

interface AdminLTEUsersListProps extends React.HTMLAttributes<HTMLUListElement> {
  users: UserItem[]
  columns?: 2 | 3 | 4 | 6
}

const AdminLTEUsersList = React.forwardRef<
  HTMLUListElement,
  AdminLTEUsersListProps
>(({ className, users, columns = 4, ...props }, ref) => {
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    6: "grid-cols-6",
  }[columns]

  return (
    <ul
      ref={ref}
      className={cn("grid list-none m-0 p-0", gridCols, className)}
      {...props}
    >
      {users.map((user) => (
        <li key={user.id} className="text-center py-[10px]">
          <a
            href={user.href || "#"}
            className="block text-[#666] no-underline hover:text-[#333]"
          >
            <img
              src={user.avatarUrl}
              alt={user.name}
              className="rounded-full w-full max-w-[100px] h-auto mx-auto"
            />
            <span className="block text-[14px] mt-[5px]">{user.name}</span>
            {user.date && (
              <span className="block text-[12px] text-[#999]">
                {user.date}
              </span>
            )}
          </a>
        </li>
      ))}
    </ul>
  )
})
AdminLTEUsersList.displayName = "AdminLTEUsersList"

export { AdminLTEUsersList }
export type { AdminLTEUsersListProps, UserItem }
