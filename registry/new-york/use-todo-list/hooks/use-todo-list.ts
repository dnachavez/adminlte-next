import { useState, useCallback } from "react"

interface TodoItem {
  id: string
  text: string
  done: boolean
  [key: string]: unknown
}

interface UseTodoListOptions {
  onCheck?: (item: TodoItem) => void
  onUnCheck?: (item: TodoItem) => void
}

export function useTodoList(
  initialItems: TodoItem[] = [],
  options: UseTodoListOptions = {}
) {
  const { onCheck, onUnCheck } = options
  const [items, setItems] = useState<TodoItem[]>(initialItems)

  const toggleItem = useCallback(
    (id: string) => {
      setItems(prev =>
        prev.map(item => {
          if (item.id === id) {
            const updated = { ...item, done: !item.done }
            if (updated.done) {
              onCheck?.(updated)
            } else {
              onUnCheck?.(updated)
            }
            return updated
          }
          return item
        })
      )
    },
    [onCheck, onUnCheck]
  )

  const addItem = useCallback((item: TodoItem) => {
    setItems(prev => [...prev, item])
  }, [])

  const removeItem = useCallback((id: string) => {
    setItems(prev => prev.filter(item => item.id !== id))
  }, [])

  return { items, toggleItem, addItem, removeItem, setItems }
}
