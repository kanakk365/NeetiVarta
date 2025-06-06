import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Users, Award, BookOpen, CheckCircle2, ArrowRight, UserCheck, GraduationCap } from "lucide-react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

const features = [
  {
    icon: BookOpen,
    title: "Certified Courses",
    description: "Accredited by partner institutions",
    color: "text-brand-blue dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-500/20"
  },
  {
    icon: UserCheck,
    title: "Youth Placement as Citizen Consultants",
    description: "Strengthening policy accessibility",
    color: "text-brand-orange dark:text-orange-400",
    bgColor: "bg-orange-100 dark:bg-orange-500/20"
  },
  {
    icon: GraduationCap,
    title: "Workshops & Applied Policy Training",
    description: "Building policy monitoring and governance expertise",
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-100 dark:bg-green-500/20"
  }
]

const coreComponents = [
  {
    icon: Users,
    title: "Social Policy Lab",
    description: "A structured training and skill development program designed to enhance the capabilities of Neeti Sahayak Kendra (NSK) fellows.",
    color: "text-brand-blue dark:text-blue-400",
    highlights: [
      "Hands-on policy research methodology",
      "Data analysis and interpretation skills",
      "Community engagement techniques",
      "Digital literacy enhancement"
    ]
  },
  {
    icon: Award,
    title: "Policy Research Fellowship cum Training Program",
    description: "A comprehensive learning pathway offering both general and referral courses in the Public Policy domain.",
    color: "text-brand-orange dark:text-orange-400",
    highlights: [
      "General policy literacy courses",
      "Specialized referral programs",
      "Research methodology training",
      "Professional certification pathway"
    ]
  }
]

export default function NeetiKaushalPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pb-24 bg-gradient-to-br from-brand-blue via-slate-800 to-slate-900 text-white dark:from-brand-blue/90 dark:via-slate-900 dark:to-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 mb-6">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h1 className="font-sora text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Neeti Kaushal
              </h1>
              <p className="font-sans text-xl lg:text-2xl text-gray-200 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
                Our flagship capacity-building initiative for building policy literacy, professional skills, and career opportunities in public policy
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 lg:py-24 bg-white dark:bg-slate-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Training & Skill Development Program
              </h2>
              <div className="w-24 h-1 bg-brand-orange mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => (
                <Card key={index} className="text-center bg-gray-50 dark:bg-slate-800 hover:shadow-lg transition-shadow duration-300 ease-in-out">
                  <CardHeader className="pb-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${feature.bgColor} mx-auto mb-4`}>
                      <feature.icon className={`w-8 h-8 ${feature.color}`} />
                    </div>
                    <CardTitle className="font-sora text-xl text-gray-800 dark:text-gray-50">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-sans text-gray-700 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Core Components Section */}
        <section className="py-16 lg:py-24 bg-gray-50 dark:bg-slate-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Core Components
              </h2>
              <p className="font-sans text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Neeti Kaushal comprises two essential components designed to build comprehensive policy expertise
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {coreComponents.map((component, index) => (
                <Card key={index} className="bg-white dark:bg-slate-900 hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gray-100 dark:bg-slate-700 flex items-center justify-center`}>
                        <component.icon className={`w-6 h-6 ${component.color}`} />
                      </div>
                      <CardTitle className="font-sora text-2xl text-gray-800 dark:text-gray-50">
                        {component.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="font-sans text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                      {component.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-sora text-sm font-semibold text-gray-700 dark:text-gray-200">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {component.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <CheckCircle2 className={`w-4 h-4 ${component.color} flex-shrink-0`} />
                            <span className="font-sans text-sm text-gray-600 dark:text-gray-400">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-white dark:bg-slate-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-brand-blue/10 to-brand-orange/10 dark:from-brand-blue/20 dark:to-brand-orange/20 rounded-2xl p-8 lg:p-12">
              <div className="text-center mb-12">
                <h2 className="font-sora text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Why Choose Neeti Kaushal?
                </h2>
                <p className="font-sans text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  Youth are trained, certified, and placed as citizen consultants, helping communities navigate government schemes and digital platforms.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Professional Certification", description: "Industry-recognized credentials" },
                  { title: "Career Placement", description: "Direct pathway to policy careers" },
                  { title: "Community Impact", description: "Make a real difference in society" },
                  { title: "Skill Development", description: "Comprehensive capacity building" }
                ].map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-brand-blue/20 dark:bg-brand-blue/30 flex items-center justify-center mx-auto mb-4">
                      <ArrowRight className="w-6 h-6 text-brand-blue dark:text-blue-400" />
                    </div>
                    <h3 className="font-sora text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="font-sans text-sm text-gray-600 dark:text-gray-400">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-blue via-slate-800 to-brand-orange text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your Policy Journey?
            </h2>
            <p className="font-sans text-lg lg:text-xl text-gray-200 dark:text-gray-300 leading-relaxed mb-8">
              Join Neeti Kaushal and become a certified policy professional making a difference in your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="font-sans bg-white text-brand-blue hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                <Link href="/register">
                  Apply Now <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-sans border-white text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold"
              >
                <Link href="/courses">
                  Explore Courses <BookOpen className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}