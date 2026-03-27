import { useState, useCallback, useEffect } from "react"

interface UsePushMenuOptions {
  collapseScreenSize?: number
  defaultCollapsed?: boolean
}

export function usePushMenu(options: UsePushMenuOptions = {}) {
  const { collapseScreenSize = 767, defaultCollapsed = false } = options
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= collapseScreenSize)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [collapseScreenSize])

  const toggle = useCallback(() => {
    if (isMobile) {
      setIsMobileOpen(prev => !prev)
    } else {
      setIsCollapsed(prev => !prev)
    }
  }, [isMobile])

  const open = useCallback(() => {
    if (isMobile) {
      setIsMobileOpen(true)
    } else {
      setIsCollapsed(false)
    }
  }, [isMobile])

  const close = useCallback(() => {
    if (isMobile) {
      setIsMobileOpen(false)
    } else {
      setIsCollapsed(true)
    }
  }, [isMobile])

  const closeMobile = useCallback(() => {
    if (isMobile) {
      setIsMobileOpen(false)
    }
  }, [isMobile])

  return {
    isCollapsed,
    isMobileOpen,
    isMobile,
    toggle,
    open,
    close,
    closeMobile,
  }
}
