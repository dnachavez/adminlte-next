import { useState, useRef, useCallback } from "react"

export function useCollapsible(initialCollapsed = false) {
  const [isCollapsed, setIsCollapsed] = useState(initialCollapsed)
  const contentRef = useRef<HTMLDivElement>(null)

  const toggle = useCallback(() => {
    setIsCollapsed(prev => !prev)
  }, [])

  const collapse = useCallback(() => setIsCollapsed(true), [])
  const expand = useCallback(() => setIsCollapsed(false), [])

  return { isCollapsed, toggle, collapse, expand, contentRef }
}
