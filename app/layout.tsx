import type React from "react"
import type { Metadata } from "next"
import { Inter, Sora } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider" // Ensure this path is correct

const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const fontSora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
})

export const metadata: Metadata = {
  title: "Neeti Varta Institute - Policy Research & Education",
  description: "Leading policy research institute democratizing policy knowledge for Tier 2 & 3 India.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased text-gray-800 dark:text-gray-200 flex flex-col",
          fontInter.variable,
          fontSora.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light" // Set light as default
          enableSystem={false} // Disable system theme option
          disableTransitionOnChange
        >
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-[100] focus:p-4 focus:bg-white dark:focus:bg-gray-800 focus:text-black dark:focus:text-white"
          >
            Skip to main content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
