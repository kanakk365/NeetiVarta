import type { Config } from "tailwindcss"

const { fontFamily } = require("tailwindcss/defaultTheme")

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        brand: {
          blue: "#1E40AF",
          slate: "#64748B",
          orange: "#EA580C",
        },
        "spektr-cyan-50": "#67E8F9",
        // Added green for services, ensure it's defined if not already part of a base palette
        "green-600": "#16A34A", // Example: Tailwind green-600
        "green-400": "#4ADE80", // Example: Tailwind green-400 for dark mode text
        "blue-500": "#3B82F6", // Example: Tailwind blue-500
        "orange-500": "#F97316", // Example: Tailwind orange-500
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        sora: ["var(--font-sora)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "scroll-testimonials": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-100% / 4))" },
        },
        "pulse-indicator": {
          "50%": { opacity: ".5" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "scroll-testimonials": "scroll-testimonials 20s linear infinite",
        "pulse-indicator": "pulse-indicator 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  // Safelist for dynamically generated Tailwind classes if necessary
  safelist: [
    "border-brand-blue",
    "text-brand-blue",
    "bg-blue-50",
    "dark:bg-blue-500/10",
    "hover:bg-brand-blue/90",
    "bg-brand-blue",
    "border-brand-orange",
    "text-brand-orange",
    "bg-orange-50",
    "dark:bg-orange-500/10",
    "hover:bg-brand-orange/90",
    "bg-brand-orange",
    "border-green-600",
    "text-green-600",
    "bg-green-50",
    "dark:bg-green-500/10",
    "hover:bg-green-600/90",
    "bg-green-600",
    "dark:text-green-400",
    "hover:text-green-400",
  ],
} satisfies Config

export default config
