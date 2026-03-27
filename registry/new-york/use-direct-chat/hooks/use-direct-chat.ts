import { useState, useCallback } from "react"

export function useDirectChat(defaultOpen = false) {
  const [isContactsOpen, setIsContactsOpen] = useState(defaultOpen)

  const toggleContacts = useCallback(() => {
    setIsContactsOpen(prev => !prev)
  }, [])

  const openContacts = useCallback(() => setIsContactsOpen(true), [])
  const closeContacts = useCallback(() => setIsContactsOpen(false), [])

  return { isContactsOpen, toggleContacts, openContacts, closeContacts }
}
