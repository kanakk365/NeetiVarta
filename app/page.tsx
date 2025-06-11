import Header from "@/components/layout/header"
import { Hero } from "@/components/ui/animated-hero" // Updated import
import AboutSection from "@/components/sections/about-section"
import ServicesSection from "@/components/sections/services-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import AchievementsSection from "@/components/sections/achievements-section"
import EventsSection from "@/components/sections/events-section"
import CollaborationsSection from "@/components/sections/collaborations-section"
import GallerySection from "@/components/sections/gallery-section"
import Footer from "@/components/layout/footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 relative">
        {" "}
        {/* Removed h-full as hero might control its own height */}
        <Hero /> {/* Use the new Hero component */}
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <AchievementsSection />
        <EventsSection />
        <CollaborationsSection />
        <GallerySection />
      </main>
      <Footer />
    </>
  )
}
