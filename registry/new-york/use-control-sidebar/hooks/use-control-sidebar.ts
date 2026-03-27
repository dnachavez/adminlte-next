import { useState, useCallback } from "react"

interface UseControlSidebarOptions {
  slide?: boolean
  defaultOpen?: boolean
}

export function useControlSidebar(options: UseControlSidebarOptions = {}) {
  const { slide = true, defaultOpen = false } = options
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const toggle = useCallback(() => setIsOpen(prev => !prev), [])
  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  return { isOpen, slide, toggle, open, close }
}
