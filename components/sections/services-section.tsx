import React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Sparkles, Newspaper, MessagesSquare, ArrowRight } from "lucide-react" // Replaced CheckCircle2 with ArrowRight for a more minimal list
import type { LucideIcon } from "lucide-react"

interface Service {
  icon: LucideIcon
  title: string
  description: string
  details?: string
  courses?: Array<{ name: string; href: string }>
  cta?: { href: string; text: string }
  themeColor: string // e.g., "brand-blue", "brand-orange", "green-600"
}

const services: Service[] = [
  {
    icon: Sparkles,
    title: "Neeti Kaushal",
    description:
      "A structured program that builds policy literacy, professional skills, and career opportunities in public policy.",
    details:
      "Youth are trained, certified, and placed as citizen consultants, helping communities navigate government schemes and digital platforms.",
    courses: [
      { name: "Policy Literacy Training", href: "/courses/policy-literacy" },
      { name: "Professional Skills Development", href: "/courses/professional-skills" },
      { name: "Citizen Consultant Certification", href: "/courses/consultant-certification" },
    ],
    cta: { href: "/programs/neeti-kaushal", text: "Join Neeti Kaushal" },
    themeColor: "brand-blue",
  },
  {
    icon: MessagesSquare,
    title: "Neeti Sahayak Kendra (NSK)",
    description:
      "Grassroots facilitation centers staffed by Neeti Kaushal fellows, offering hands-on support for scheme enrollment, document preparation, and digital service access.",
    details:
      "These centers ensure citizens can easily understand, access, and benefit from government programs, promoting inclusive and sustainable development at the community level.",
    courses: [
      { name: "Government Scheme Enrollment", href: "/services/scheme-enrollment" },
      { name: "Document Preparation Support", href: "/services/document-prep" },
      { name: "Digital Services Access", href: "/services/digital-access" },
    ],
    cta: { href: "/centers/neeti-sahayak-kendra", text: "Find NSK Center" },
    themeColor: "brand-orange",
  },
]

const researchExpertise = [
  "Urban & Rural Public Policy and Governance",
  "Education and Skill Development",
  "Economic Policy and Development",
  "Environmental Sustainability and Climate Change",
  "Social Justice and Human Rights",
  "Feminist Public Policy",
  "Tribal Community Development",
  "Public Health Policy",
  "Technology and Policy",
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Our Core Solutions
          </h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="flex flex-col bg-gray-50 dark:bg-slate-800 hover:shadow-lg transition-shadow duration-300 ease-in-out rounded-lg border border-gray-200 dark:border-slate-700"
            >
              <CardHeader className="pb-4">
                <div className={`mb-3 ${
                  service.themeColor === "brand-blue" 
                    ? "text-brand-blue dark:text-blue-400" 
                    : service.themeColor === "brand-orange" 
                    ? "text-brand-orange dark:text-orange-400" 
                    : "text-green-600 dark:text-green-400"
                }`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <CardTitle className="font-sora text-xl lg:text-2xl text-gray-800 dark:text-gray-50">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-3">
                <p className="font-sans text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                  {service.description}
                </p>
                {service.details && (
                  <p className="font-sans text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {service.details}
                  </p>
                )}
                {service.courses && service.courses.length > 0 && (
                  <div className="pt-2">
                    <h4 className="font-sora text-sm font-medium text-gray-700 dark:text-gray-200 mb-1.5">
                      Key Programs:
                    </h4>
                    <ul className="space-y-1">
                      {service.courses.map((course) => (
                        <li key={course.name} className="flex items-center">
                          <ArrowRight className={`w-3.5 h-3.5 mr-2 flex-shrink-0 ${
                            service.themeColor === "brand-blue" 
                              ? "text-brand-blue dark:text-blue-400" 
                              : service.themeColor === "brand-orange" 
                              ? "text-brand-orange dark:text-orange-400" 
                              : "text-green-600 dark:text-green-400"
                          }`} />
                          <Link
                            href={course.href}
                            className={`font-sans text-sm text-gray-700 dark:text-gray-300 transition-colors ${
                              service.themeColor === "brand-blue" 
                                ? "hover:text-brand-blue dark:hover:text-blue-400" 
                                : service.themeColor === "brand-orange" 
                                ? "hover:text-brand-orange dark:hover:text-orange-400" 
                                : "hover:text-green-600 dark:hover:text-green-400"
                            }`}
                          >
                            {course.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
              {service.cta && (
                <CardFooter className="pt-4 mt-auto">
                  <Button
                    asChild
                    variant="outline"
                    className={`w-full transition-colors dark:bg-[#0f172a] ${
                      service.themeColor === "brand-blue" 
                        ? "border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900  " 
                        : service.themeColor === "brand-orange" 
                        ? "border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-400 dark:hover:text-gray-900" 
                        : "border-green-600 text-green-600 hover:bg-green-600 hover:text-white dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-gray-900"
                    }`}
                  >
                    <Link href={service.cta.href}>{service.cta.text}</Link>
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>

        <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-8 lg:p-12 border border-gray-200 dark:border-slate-700">
          <h3 className="font-sora text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
            Our Research Expertise
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
            {researchExpertise.map((item, index) => (
              <div key={index} className="flex items-center space-x-2.5 group py-1">
                <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                <span className="font-sans text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-200">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
