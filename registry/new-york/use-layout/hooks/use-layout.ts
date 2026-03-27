import { useState, useEffect, useCallback, useRef } from "react"

interface UseLayoutOptions {
  isFixed?: boolean
  headerHeight?: number
  footerHeight?: number
}

export function useLayout(options: UseLayoutOptions = {}) {
  const { isFixed = false, headerHeight = 50 } = options
  const [contentMinHeight, setContentMinHeight] = useState<number>(0)
  const footerRef = useRef<HTMLElement>(null)
  const sidebarRef = useRef<HTMLElement>(null)

  const calculateHeight = useCallback(() => {
    const windowHeight = window.innerHeight
    const fHeight = footerRef.current?.offsetHeight ?? 0
    const sHeight = sidebarRef.current?.scrollHeight ?? 0

    if (isFixed) {
      setContentMinHeight(windowHeight - fHeight)
    } else {
      const neg = headerHeight + fHeight
      if (windowHeight >= sHeight) {
        setContentMinHeight(windowHeight - neg)
      } else {
        setContentMinHeight(sHeight)
      }
    }
  }, [isFixed, headerHeight])

  useEffect(() => {
    calculateHeight()
    window.addEventListener("resize", calculateHeight)
    return () => window.removeEventListener("resize", calculateHeight)
  }, [calculateHeight])

  return { contentMinHeight, footerRef, sidebarRef, recalculate: calculateHeight }
}
