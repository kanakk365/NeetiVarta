// Placeholder for Collaborations Section
import Image from "next/image"

const partnerLogos = [
  { src: "/collaboration1.png", alt: "Partner 1" },
  { src: "/collaboration2.jpg", alt: "Partner 2" },
  { src: "/collaboration3.jpg", alt: "Partner 3" }
]

export default function CollaborationsSection() {
  return (
    <section id="collaborations" className="py-16 lg:py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Collaborations
          </h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto mb-8"></div>
          <p className="font-sans text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            We are proud to collaborate with these institutions to further our mission in policy research and civic
            engagement.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-items-center">
          {partnerLogos.map((logo, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-slate-800 rounded-lg p-8 border border-gray-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105 w-full max-w-sm"
            >
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.alt}
                width={300}
                height={200}
                className="w-full h-60 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
