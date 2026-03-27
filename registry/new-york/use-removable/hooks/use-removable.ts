import { useState, useCallback } from "react"

export function useRemovable() {
  const [isRemoved, setIsRemoved] = useState(false)
  const [isRemoving, setIsRemoving] = useState(false)

  const remove = useCallback(() => {
    setIsRemoving(true)
    setTimeout(() => {
      setIsRemoved(true)
      setIsRemoving(false)
    }, 500)
  }, [])

  return { isRemoved, isRemoving, remove }
}
