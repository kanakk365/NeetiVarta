"use client"

import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Neeti Varta's internship program has provided me with invaluable research experience and skills, especially in policy analysis and writing.",
    name: "Jeevesh Jumar Singh",
    batch: "June Batch, 2024",
  },
  {
    quote:
      "The mentorship and guidance I received during my internship at Neeti Varta have been exceptional, helping me grow both professionally and personally.",
    name: "Sagar Sharma",
    batch: "June Batch, 2024",
  },
  {
    quote:
      "Working on real-world policy issues with Neeti Varta has given me a deeper understanding of the complexities of policy research and its impact.",
    name: "Vedantee Raut",
    batch: "June Batch, 2024",
  },
]

// Create multiple duplicates for seamless infinite scroll
const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-gray-50 dark:bg-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Testimonials
          </h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto"></div>
        </div>
      </div>

      <div
        className="w-full relative overflow-hidden group"
        style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
      >
        <div className="flex space-x-6 animate-scroll-testimonials group-hover:pause-animation">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card flex-shrink-0 w-80 bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-slate-700"
            >
              <div className="mb-6">
                <Quote className="w-8 h-8 text-brand-orange dark:text-orange-500 mb-4" fill="currentColor" />
                <blockquote className="font-sans text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
              </div>
              <div className="border-t border-gray-200 dark:border-slate-700 pt-4">
                <p className="font-sora font-semibold text-gray-900 dark:text-gray-100">{testimonial.name}</p>
                <p className="font-sans text-gray-600 dark:text-gray-400 text-sm">{testimonial.batch}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        .group:hover .animate-scroll-testimonials {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
