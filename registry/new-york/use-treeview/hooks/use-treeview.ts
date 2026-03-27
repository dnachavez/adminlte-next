import { useState, useCallback } from "react"

interface UseTreeviewOptions {
  accordion?: boolean
  defaultOpenItems?: string[]
}

export function useTreeview(options: UseTreeviewOptions = {}) {
  const { accordion = true, defaultOpenItems = [] } = options
  const [openItems, setOpenItems] = useState<Set<string>>(
    new Set(defaultOpenItems)
  )

  const isOpen = useCallback(
    (itemId: string) => openItems.has(itemId),
    [openItems]
  )

  const toggle = useCallback(
    (itemId: string, parentId?: string) => {
      setOpenItems(prev => {
        const next = new Set(prev)
        if (next.has(itemId)) {
          next.delete(itemId)
        } else {
          if (accordion && parentId) {
            // Close siblings at same level - remove items that share the same parent
            for (const openId of prev) {
              if (openId !== itemId && openId.startsWith(parentId)) {
                next.delete(openId)
              }
            }
          } else if (accordion) {
            next.clear()
          }
          next.add(itemId)
        }
        return next
      })
    },
    [accordion]
  )

  const expand = useCallback((itemId: string) => {
    setOpenItems(prev => new Set(prev).add(itemId))
  }, [])

  const collapse = useCallback((itemId: string) => {
    setOpenItems(prev => {
      const next = new Set(prev)
      next.delete(itemId)
      return next
    })
  }, [])

  const collapseAll = useCallback(() => {
    setOpenItems(new Set())
  }, [])

  return { openItems, isOpen, toggle, expand, collapse, collapseAll }
}
