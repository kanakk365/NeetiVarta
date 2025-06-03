import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { CheckCircle2, Zap } from "lucide-react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

const annualMembershipBenefits = [
  "Exclusive courses and 5% Discounts on Training Programs",
  "Exclusive Access to Research Reports, and blogs",
  "Regular Webinars, Workshops, and Exclusive Newsletter or Journal",
  "Networking Events, and Monthly Q&A Sessions with Experts",
]

export default function MembershipsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-20">
        {/* Cover Section */}
        <section className="relative py-20 lg:py-32 bg-gradient-to-br from-brand-orange via-orange-600 to-yellow-600 dark:from-brand-orange/90 dark:via-orange-700 dark:to-yellow-700 text-white">
          <div className="absolute inset-0">
            <Image
              src="/abstract-membership-pattern.png"
              alt="Abstract membership background"
              layout="fill"
              objectFit="cover"
              className="opacity-20 dark:opacity-15"
              priority
            />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Zap className="w-16 h-16 text-white mx-auto mb-6 opacity-80" />
            <h1 className="font-sora text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Unlock Exclusive Access</h1>
            <p className="font-sans text-lg lg:text-xl text-gray-100 dark:text-gray-200 leading-relaxed max-w-2xl mx-auto">
              Become a Neeti Varta member and gain access to a wealth of resources, expert insights, and a vibrant
              community dedicated to public policy.
            </p>
          </div>
        </section>

        {/* Membership Details Section */}
        <section className="py-16 lg:py-24 bg-white dark:bg-slate-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Annual Membership
              </h2>
              <p className="font-sans text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Join our community of policy enthusiasts, researchers, and professionals. Our annual membership offers a
                comprehensive package designed to support your growth and engagement in the public policy domain.
              </p>
            </div>

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
                <Card className="bg-gray-50 dark:bg-slate-800 shadow-xl border border-brand-orange dark:border-orange-500 transform hover:scale-105 transition-transform duration-300">
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
                        {" "}
                        {/* Replace with actual payment/signup link */}
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
        </section>

        {/* Call to Action / Why Join */}
        <section className="py-16 lg:py-24 bg-gray-100 dark:bg-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-sora text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Why Become a Neeti Varta Member?
            </h2>
            <p className="font-sans text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              Our membership is more than just access; it&apos;s an invitation to be part of a movement. Connect with
              like-minded individuals, gain insights from leading experts, and contribute to shaping effective public
              policy in India. Whether you&apos;re a student, researcher, professional, or simply passionate about
              policy, our membership provides the resources and network to thrive.
            </p>
            <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white">
              <Link href="#">
                {" "}
                {/* Link to the membership card or signup */}
                Choose Your Plan
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
