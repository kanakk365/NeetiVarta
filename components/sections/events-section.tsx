import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle2, Zap } from "lucide-react"

const annualMembershipBenefits = [
  "Exclusive courses and 5% Discounts on Training Programs",
  "Exclusive Access to Research Reports, and blogs",
  "Regular Webinars, Workshops, and Exclusive Newsletter or Journal",
  "Networking Events, and Monthly Q&A Sessions with Experts",
]

export default function EventsSection() {
  return (
    <section id="events" className="py-16 lg:py-24 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Unlock Exclusive Access
          </h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto mb-4"></div>
          <p className="font-sans text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join our community of policy enthusiasts, researchers, and professionals. Our annual membership offers a
            comprehensive package designed to support your growth and engagement in the public policy domain.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 md:order-1">
              <h3 className="font-sora text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
                Membership Benefits:
              </h3>
              <ul className="space-y-4">
                {annualMembershipBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-500 dark:text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="font-sans text-gray-700 dark:text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="order-1 md:order-2">
              <Card className="bg-white dark:bg-slate-800 shadow-xl border border-brand-orange dark:border-orange-500 transform hover:scale-105 transition-transform duration-300">
                <CardHeader className="text-center p-6 pb-4">
                  <CardTitle className="font-sora text-2xl font-bold text-brand-orange dark:text-orange-400">
                    Yearly Plan
                  </CardTitle>
                  <p className="font-sans text-sm text-gray-500 dark:text-gray-400">Recommended</p>
                </CardHeader>
                <CardContent className="text-center p-6 pt-0">
                  <div className="my-4">
                    <span className="font-sora text-5xl font-bold text-gray-900 dark:text-gray-100">₹500</span>
                    <span className="font-sans text-gray-500 dark:text-gray-400">/year</span>
                  </div>
                  <p className="font-sans text-sm text-gray-600 dark:text-gray-300 mb-6">
                    Billed annually. Full access to all member benefits.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="w-full font-sans bg-brand-orange hover:bg-brand-orange/90 text-white text-lg"
                  >
                    <Link href="#">
                      Buy Membership
                    </Link>
                  </Button>
                </CardContent>
                <CardFooter className="p-4 bg-brand-orange/10 dark:bg-orange-500/10 text-center">
                  <p className="font-sans text-xs text-brand-orange dark:text-orange-400 mx-auto">
                    Empower your policy journey today!
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
