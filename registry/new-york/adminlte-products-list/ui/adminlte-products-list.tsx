"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

interface ProductItem {
  id: string
  imageUrl: string
  name: string
  description: string
  label?: React.ReactNode
  href?: string
}

interface AdminLTEProductsListProps
  extends React.HTMLAttributes<HTMLUListElement> {
  items: ProductItem[]
}

const AdminLTEProductsList = React.forwardRef<
  HTMLUListElement,
  AdminLTEProductsListProps
>(({ className, items, ...props }, ref) => {
  return (
    <ul
      ref={ref}
      className={cn("list-none m-0 p-0", className)}
      {...props}
    >
      {items.map((item) => (
        <li
          key={item.id}
          className="py-[10px] px-0 border-b border-b-[#f4f4f4] last:border-b-0"
        >
          <a
            href={item.href || "#"}
            className="flex items-start gap-[10px] text-[#333] no-underline hover:text-[#999]"
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-[50px] h-[50px] rounded-[3px] object-cover flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <span className="text-[14px] font-semibold block truncate">
                  {item.name}
                </span>
                {item.label && <span className="ml-[5px]">{item.label}</span>}
              </div>
              <span className="text-[12px] text-[#999] block">
                {item.description}
              </span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  )
})
AdminLTEProductsList.displayName = "AdminLTEProductsList"

export { AdminLTEProductsList }
export type { AdminLTEProductsListProps, ProductItem }
