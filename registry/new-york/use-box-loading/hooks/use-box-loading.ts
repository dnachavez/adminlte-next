import { useState, useCallback } from "react"

export function useBoxLoading(initialLoading = false) {
  const [isLoading, setIsLoading] = useState(initialLoading)

  const startLoading = useCallback(() => setIsLoading(true), [])
  const stopLoading = useCallback(() => setIsLoading(false), [])
  const toggleLoading = useCallback(() => setIsLoading(prev => !prev), [])

  return { isLoading, startLoading, stopLoading, toggleLoading }
}
