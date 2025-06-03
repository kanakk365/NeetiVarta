"use client"
import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const galleryImagesData = [
  {
    id: 0,
    src: "/policy-research-communication.png",
    alt: "Policy research communication tools and equipment",
    width: 800,
    height: 600,
  },
  {
    id: 1,
    src: "/policy-insurance-docs.png",
    alt: "Policy documentation and insurance certificates",
    width: 800,
    height: 500,
  },
  {
    id: 2,
    src: "/policy-research-portrait.png",
    alt: "Professional portrait of policy research team member",
    width: 600,
    height: 800,
  },
  {
    id: 3,
    src: "/placeholder-v7xve.png",
    alt: "Large crowd gathering for policy workshop event",
    width: 1024,
    height: 600,
  },
  {
    id: 4,
    src: "/placeholder-n59mj.png",
    alt: "Tall abstract policy chart",
    width: 600,
    height: 750,
  },
  {
    id: 5,
    src: "/policy-discussion-group.png",
    alt: "Policy discussion group in a wide shot",
    width: 600,
    height: 400,
  },
  {
    id: 6,
    src: "/placeholder-2sf4n.png",
    alt: "Agricultural policy research - hay bales in summer field",
    width: 600,
    height: 500,
  },
  {
    id: 7,
    src: "/community-advocacy-meeting.png",
    alt: "Community advocacy meeting with diverse people",
    width: 600,
    height: 650,
  },
]

export default function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [focusedElement, setFocusedElement] = useState<HTMLElement | null>(null)

  const openLightbox = (index: number) => {
    setFocusedElement(document.activeElement as HTMLElement)
    setCurrentImageIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
    document.body.style.overflow = ""
    if (focusedElement) {
      focusedElement.focus()
    }
  }, [focusedElement])

  const previousImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + galleryImagesData.length) % galleryImagesData.length)
  }, [])

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImagesData.length)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxOpen) {
        if (e.key === "Escape") closeLightbox()
        if (e.key === "ArrowLeft") previousImage()
        if (e.key === "ArrowRight") nextImage()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxOpen, closeLightbox, previousImage, nextImage])

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto"></div>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 lg:gap-6 space-y-4 lg:space-y-6">
          {galleryImagesData.map((image, index) => (
            <div
              key={image.id}
              className="gallery-item relative overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-lg cursor-pointer group transform transition-all duration-300 hover:scale-105 hover:shadow-xl break-inside-avoid"
              onClick={() => openLightbox(index)}
              onKeyDown={(e) => e.key === "Enter" && openLightbox(index)}
              tabIndex={0}
              role="button"
              aria-label={`View image ${index + 1}: ${image.alt}`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={image.width} // Use actual width for aspect ratio calculation
                height={image.height} // Use actual height for aspect ratio calculation
                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-110" // h-auto is key for masonry
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2 text-center text-sm">
                  View Image
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
          aria-modal="true"
          role="dialog"
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeLightbox}
              className="absolute -top-8 -right-0 sm:top-4 sm:right-4 z-[110] text-white hover:text-gray-300 transition-colors duration-300 p-2 bg-black/50 rounded-full"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            <Image
              src={galleryImagesData[currentImageIndex].src || "/placeholder.svg"}
              alt={galleryImagesData[currentImageIndex].alt}
              width={1200} // Max width for lightbox image
              height={800} // Max height for lightbox image
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              priority // Prioritize loading the lightbox image
            />

            <button
              onClick={previousImage}
              className="absolute left-0 sm:left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300 p-2 bg-black/50 rounded-full"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-0 sm:right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300 p-2 bg-black/50 rounded-full"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
