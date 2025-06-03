"use client" // Added "use client" as Hero component is a client component

import { Hero } from "@/components/ui/animated-hero"

function HeroDemo() {
  return (
    <div className="block">
      {" "}
      {/* Removed dark class, let ThemeProvider handle it */}
      <Hero />
    </div>
  )
}

export { HeroDemo }
