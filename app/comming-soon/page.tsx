
import { Button } from "@/components/ui/button"
import { Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-orange-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        {/* Coming Soon Badge */}
        <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-full text-sm font-medium mb-8">
          <Clock size={16} />
          Coming Soon
        </div>

        {/* Main Heading */}
        <h1 className="font-sora text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Something Amazing is{" "}
          <span className="text-brand-orange">Coming</span>
        </h1>

        {/* Description */}
        <p className="font-sans text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
          We're working hard to bring you an incredible experience. Stay tuned!
        </p>

        {/* Back to Home Button */}
        <Link href="/">
          <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white font-sans px-8 py-3">
            Back to Home
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
