"use client"

import { useEffect, useRef } from "react"
import { animate, useInView } from "framer-motion"

interface AnimatedNumberProps {
  from?: number
  to: number
  duration?: number
  className?: string
  once?: boolean // To trigger animation only once
  delay?: number // Optional delay before animation starts
}

export function AnimatedNumber({
  from = 0,
  to,
  duration = 1.5,
  className,
  once = true,
  delay = 0,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null)
  // `amount: 0.5` means 50% of the element needs to be in view to trigger
  const isInView = useInView(ref, { once, amount: 0.5 })

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(from, to, {
        duration: duration,
        delay: delay,
        ease: "easeOut",
        onUpdate(value) {
          if (ref.current) {
            // Format to integer, you can adjust if decimals are needed
            ref.current.textContent = Math.round(value).toString()
          }
        },
      })
      return () => controls.stop()
    }
  }, [from, to, duration, isInView, delay])

  // Initial display before animation starts or if not in view
  return (
    <span ref={ref} className={className}>
      {from}
    </span>
  )
}
