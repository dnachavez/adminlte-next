"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

interface CarouselItem {
  id: string
  content: React.ReactNode
  caption?: React.ReactNode
}

interface AdminLTECarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  items: CarouselItem[]
  autoPlay?: boolean
  interval?: number
  showIndicators?: boolean
  showControls?: boolean
}

const AdminLTECarousel = React.forwardRef<HTMLDivElement, AdminLTECarouselProps>(
  (
    {
      className,
      items,
      autoPlay = true,
      interval = 5000,
      showIndicators = true,
      showControls = true,
      ...props
    },
    ref
  ) => {
    const [activeIndex, setActiveIndex] = React.useState(0)

    React.useEffect(() => {
      if (!autoPlay || items.length <= 1) return
      const timer = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % items.length)
      }, interval)
      return () => clearInterval(timer)
    }, [autoPlay, interval, items.length])

    const goTo = (index: number) => setActiveIndex(index)
    const prev = () =>
      setActiveIndex((i) => (i - 1 + items.length) % items.length)
    const next = () => setActiveIndex((i) => (i + 1) % items.length)

    return (
      <div
        ref={ref}
        className={cn("relative overflow-hidden", className)}
        {...props}
      >
        {showIndicators && items.length > 1 && (
          <ol className="absolute bottom-[10px] left-1/2 -translate-x-1/2 z-[15] flex list-none m-0 p-0 gap-[3px]">
            {items.map((item, i) => (
              <li
                key={item.id}
                className={cn(
                  "w-[10px] h-[10px] rounded-full cursor-pointer border border-white",
                  i === activeIndex ? "bg-white" : "bg-white/50"
                )}
                onClick={() => goTo(i)}
              />
            ))}
          </ol>
        )}

        <div className="relative w-full">
          {items.map((item, i) => (
            <div
              key={item.id}
              className={cn(
                "transition-opacity duration-600",
                i === activeIndex
                  ? "block opacity-100"
                  : "hidden opacity-0"
              )}
            >
              {item.content}
              {item.caption && (
                <div className="absolute bottom-0 left-0 right-0 p-[20px] bg-black/50 text-white text-center">
                  {item.caption}
                </div>
              )}
            </div>
          ))}
        </div>

        {showControls && items.length > 1 && (
          <>
            <button
              type="button"
              className="absolute top-1/2 left-0 -translate-y-1/2 z-[15] w-[40px] h-[40px] bg-black/30 text-white border-none text-[20px] cursor-pointer hover:bg-black/50 rounded-r"
              onClick={prev}
              aria-label="Previous"
            >
              &#8249;
            </button>
            <button
              type="button"
              className="absolute top-1/2 right-0 -translate-y-1/2 z-[15] w-[40px] h-[40px] bg-black/30 text-white border-none text-[20px] cursor-pointer hover:bg-black/50 rounded-l"
              onClick={next}
              aria-label="Next"
            >
              &#8250;
            </button>
          </>
        )}
      </div>
    )
  }
)
AdminLTECarousel.displayName = "AdminLTECarousel"

export { AdminLTECarousel }
export type { AdminLTECarouselProps, CarouselItem }
