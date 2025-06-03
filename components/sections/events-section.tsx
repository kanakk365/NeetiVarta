import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BadgeIndianRupee, TrendingUp, ClipboardCheck } from "lucide-react"

const courseDetails = [
  { text: "Duration: 1 week, 5 sessions" },
  { text: "Fee: Just ₹599!", isHighlighted: true, highlightColor: "text-brand-orange" },
  { text: "Platform: Online via Google Meet" },
  { text: "Certificate & Hands-On Experience: Included!" },
  { text: "Discount: Up to 20% on advanced courses!" },
  {
    text: "Target Audience: Beginners seeking a career in the developmental sector, especially from Tier 2, Tier 3, and rural areas of India.",
    isLongText: true,
  },
]

const whyEnroll = [
  {
    title: "Affordable & Accessible:",
    description: "Quality education at just ₹599.",
    icon: <BadgeIndianRupee className="w-5 h-5" />,
  },
  {
    title: "Career Growth:",
    description: "Step into the world of public policy and make a difference.",
    icon: <TrendingUp className="w-5 h-5" />,
  },
  {
    title: "Practical Experience:",
    description: "Gain hands-on skills and certification.",
    icon: <ClipboardCheck className="w-5 h-5" />,
  },
]

export default function EventsSection() {
  return (
    <section id="events" className="py-16 lg:py-24 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Unlock Your Future in Public Policy!
          </h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-slate-700">
            <div className="lg:flex">
              {/* Image Section */}
              <div className="lg:w-1/2">
                <Image
                  src="/policy-workshop-diverse.png"
                  alt="Professional policy training workshop with diverse participants"
                  width={1080}
                  height={1080}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 p-8 lg:p-12">
                <div className="space-y-6">
                  {/* Course Title */}
                  <h3 className="font-sora text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                    Public Policy Unveiled: Understanding, Essential Skills, and Career Opportunities
                  </h3>

                  {/* Course Details */}
                  <div className="space-y-3">
                    {courseDetails.map((item, index) => (
                      <div
                        key={index}
                        className={`flex items-start space-x-3 ${item.isLongText ? "" : "items-center"}`}
                      >
                        <div
                          className={`w-2 h-2 bg-brand-orange rounded-full ${item.isLongText ? "mt-1.5" : "mt-0"} flex-shrink-0`}
                        ></div>
                        <span
                          className={`font-sans text-gray-700 dark:text-gray-300 ${
                            item.isHighlighted ? `font-semibold ${item.highlightColor} dark:text-orange-400` : ""
                          }`}
                        >
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Why Enroll Section */}
                  <div className="border-t border-gray-200 dark:border-slate-700 pt-6 mt-6">
                    <h4 className="font-sora text-xl font-semibold text-gray-900 dark:text-gray-100 mb-5">
                      Why Enroll?
                    </h4>
                    <div className="space-y-3">
                      {whyEnroll.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-3 p-2 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-slate-800"
                        >
                          <div className="flex-shrink-0 mt-0.5 text-brand-blue dark:text-blue-400">
                            {React.cloneElement(item.icon, { className: "w-5 h-5" })}
                          </div>
                          <div>
                            <span className="font-sans font-semibold text-gray-900 dark:text-gray-100">
                              {item.title}
                            </span>
                            <span className="font-sans text-gray-700 dark:text-gray-300"> {item.description}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button
                      asChild
                      size="lg"
                      className="font-sans bg-brand-orange hover:bg-brand-orange/90 text-white text-center font-semibold transition-all duration-300 transform hover:scale-105 flex-1 px-6 py-3"
                    >
                      <Link href="https://forms.gle/f5GFNeciKFmjj2T48" target="_blank" rel="noopener noreferrer">
                        Join Now
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      className="font-sans bg-brand-blue hover:bg-brand-blue/90 text-white text-center font-semibold transition-all duration-300 transform hover:scale-105 flex-1 px-6 py-3"
                    >
                      <Link href="https://rzp.io/rzp/JH0lagu" target="_blank" rel="noopener noreferrer">
                        Pay Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
