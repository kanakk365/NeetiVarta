// Placeholder for Footer
"use client"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Linkedin } from "lucide-react"
import type { FormEvent } from "react"

export default function Footer() {
  const handleNewsletterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert("Thank you for subscribing!")
    e.currentTarget.reset()
  }

  return (
    <footer id="footer" className="bg-slate-900 text-gray-200 dark:bg-[#1e293b] dark:text-gray-300 border-t-[1px] border-gray-500 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-sora text-lg font-semibold text-gray-100 dark:text-white">About</h3>
            <p className="font-sans text-gray-300 dark:text-gray-400 text-sm leading-relaxed">
              Neeti Varta is a social enterprise promoting policy literacy across India.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-sora text-lg font-semibold text-gray-100 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Courses", href: "/courses" },
                { name: "Events", href: "/events" },
                { name: "Blogs", href: "/blogs" },
                { name: "Careers", href: "/careers" },
                { name: "Contact", href: "/contact" },
                { name: "Neeti Kaushal", href: "/neeti-kaushal" },
                { name: "Neeti Sahayak", href: "/neeti-sahayak" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="font-sans text-gray-300 dark:text-gray-400 hover:text-brand-orange dark:hover:text-brand-orange transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-sora text-lg font-semibold text-gray-100 dark:text-white">Resources</h3>
            <ul className="space-y-2">
              {[
                { name: "Insights", href: "/comming-soon" },
                { name: "Memberships", href: "/comming-soon" },
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms of Use", href: "/terms-of-use" },
                { name: "Refund Policy", href: "/refund-policy" }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="font-sans text-gray-300 dark:text-gray-400 hover:text-brand-orange dark:hover:text-brand-orange transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-sora text-lg font-semibold text-gray-100 dark:text-white">Subscribe</h3>
            <p className="font-sans text-gray-300 dark:text-gray-400 text-sm">
              Stay updated with our latest news and courses.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-slate-800 border-slate-700 text-gray-100 placeholder-gray-400 dark:bg-slate-800 dark:border-slate-600 dark:text-gray-50 dark:placeholder-gray-500 text-sm"
                required
              />
              <Button type="submit" className="w-full font-sans bg-brand-orange hover:bg-opacity-90 text-sm">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-sans text-gray-400 dark:text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Neeti Varta Institute of Policy Research Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/61561348765226/about/"
                aria-label="Facebook"
                className="text-gray-400 dark:text-gray-500 hover:text-brand-orange dark:hover:text-brand-orange"
              >
                <Facebook size={20} />
              </Link>
              {/* <Link
                href="#"
                aria-label="Twitter"
                className="text-gray-400 dark:text-gray-500 hover:text-brand-orange dark:hover:text-brand-orange"
              >
                <Twitter size={20} />
              </Link> */}
              <Link
                href="https://www.linkedin.com/company/neeti-varta-institute-of-policy-research/"
                aria-label="LinkedIn"
                className="text-gray-400 dark:text-gray-500 hover:text-brand-orange dark:hover:text-brand-orange"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
