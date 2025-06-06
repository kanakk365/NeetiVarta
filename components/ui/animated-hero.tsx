"use client"

import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import { MoveRight, PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0)
  const titles = useMemo(() => ["empowering", "innovative", "accessible", "transformative", "insightful"], [])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0)
      } else {
        setTitleNumber(titleNumber + 1)
      }
    }, 2000)
    return () => clearTimeout(timeoutId)
  }, [titleNumber, titles])

  return (
    <div
      className="w-full min-h-screen flex items-center relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/newPar.png')"
      }}
      id="hero"
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/70 via-slate-900/50 to-brand-orange/70 dark:from-brand-blue/80 dark:via-slate-950/60 dark:to-brand-orange/80"></div>
      <div className="container mx-auto relative z-10">
        <div className="flex gap-8 py-20 lg:py-32 items-center justify-center flex-col">
          <div>
            <Button
              variant="secondary" // This variant will use secondary colors from your theme
              size="sm"
              className="gap-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 dark:text-gray-200" // More specific styling for this context
              asChild
            >
              <Link href="/blog/launch-article">
                Read our launch article <MoveRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-3xl tracking-tighter text-center font-regular text-white dark:text-gray-100">
              Policy Research for
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1 h-20 md:h-24">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-spektr-cyan-50"
                    initial={{ opacity: 0, y: "-100%" }}
                    transition={{ type: "spring", stiffness: 50, duration: 0.5 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? "-150%" : "150%",
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
              Tier 2 & 3 India
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-gray-200 dark:text-gray-300 max-w-2xl text-center">
              Democratizing policy knowledge and fostering civic engagement. We aim to streamline access to policy
              education, making it easier and faster than ever.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button
              variant="outline" // Explicitly set variant
              size="lg"
              className="gap-4 font-sans bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-blue dark:bg-transparent dark:border-gray-200/70 dark:text-gray-100 dark:hover:bg-slate-200 dark:hover:text-brand-blue px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 w-full sm:w-auto min-w-[200px]"
              asChild
            >
              <Link href="#contact">
                Jump on a call <PhoneCall className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              className="gap-4 font-sans bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full sm:w-auto min-w-[200px]"
              // This button uses default variant which is 'bg-primary text-primary-foreground'
              // Overriding with specific brand color.
              asChild
            >
              <Link href="/register">
                Sign up here <MoveRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Hero }
