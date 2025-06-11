import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import ContactSection from "@/components/sections/contact-section"

export default function ContactPage() {
  return (
    <>
      <Header />      <main className="flex-1 relative pt-20 sm:pt-24 bg-white dark:bg-slate-900">
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}