import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessagesSquare, MapPin, Users, FileText, Monitor, ArrowRight, CheckCircle2, Building2, UserCog, Lightbulb } from "lucide-react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

const keyServices = [
  {
    icon: Users,
    title: "On-ground Advisory for Communities",
    description: "Direct community engagement and support services",
    color: "text-brand-blue dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-500/20"
  },
  {
    icon: FileText,
    title: "Government Scheme Enrollment",
    description: "Hands-on assistance for accessing government programs",
    color: "text-brand-orange dark:text-orange-400",
    bgColor: "bg-orange-100 dark:bg-orange-500/20"
  },
  {
    icon: Building2,
    title: "Capacity-building Programs",
    description: "Empowering Tier 2 & Tier 3 cities with essential skills",
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-100 dark:bg-green-500/20"
  }
]

const impactAreas = [
  {
    title: "Local Governance Support",
    description: "Strengthening democratic processes at the grassroots level",
    features: [
      "Policy implementation guidance",
      "Community participation facilitation",
      "Local governance training",
      "Civic engagement programs"
    ]
  },
  {
    title: "Digital Service Access",
    description: "Bridging the digital divide in underserved communities",
    features: [
      "Digital literacy training",
      "Online service navigation",
      "Technology adoption support",
      "Digital documentation assistance"
    ]
  },
  {
    title: "Community Development",
    description: "Fostering sustainable development at the community level",
    features: [
      "Development program awareness",
      "Resource mobilization support",
      "Community needs assessment",
      "Sustainable development planning"
    ]
  }
]

const centerLocations = [
  { city: "Bihar", centers: 12, population: "2.3M+ served" },
  { city: "Uttar Pradesh", centers: 18, population: "3.1M+ served" },
  { city: "Madhya Pradesh", centers: 8, population: "1.7M+ served" },
  { city: "Rajasthan", centers: 6, population: "1.2M+ served" }
]

export default function NeetiSahayakPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pb-24 bg-gradient-to-br from-brand-orange via-slate-800 to-brand-blue text-white dark:from-brand-orange/90 dark:via-slate-900 dark:to-brand-blue/90">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 mb-6">
                <MessagesSquare className="w-10 h-10 text-white" />
              </div>
              <h1 className="font-sora text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Neeti Sahayak Kendra
              </h1>
              <p className="font-sans text-xl lg:text-2xl text-gray-200 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
                Local Governance Support Centers providing on-ground advisory services and empowering communities across India
              </p>
            </div>
          </div>
        </section>

        {/* Key Services Section */}
        <section className="py-16 lg:py-24 bg-white dark:bg-slate-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Our Core Services
              </h2>
              <div className="w-24 h-1 bg-brand-orange mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {keyServices.map((service, index) => (
                <Card key={index} className="text-center bg-gray-50 dark:bg-slate-800 hover:shadow-lg transition-shadow duration-300 ease-in-out">
                  <CardHeader className="pb-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${service.bgColor} mx-auto mb-4`}>
                      <service.icon className={`w-8 h-8 ${service.color}`} />
                    </div>
                    <CardTitle className="font-sora text-xl text-gray-800 dark:text-gray-50">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-sans text-gray-700 dark:text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Areas Section */}
        <section className="py-16 lg:py-24 bg-gray-50 dark:bg-slate-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Our Impact Areas
              </h2>
              <p className="font-sans text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Comprehensive support services ensuring citizens can easily understand, access, and benefit from government programs
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {impactAreas.map((area, index) => (
                <Card key={index} className="bg-white dark:bg-slate-900 hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="font-sora text-xl text-gray-800 dark:text-gray-50 mb-2">
                      {area.title}
                    </CardTitle>
                    <p className="font-sans text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                      {area.description}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <ul className="space-y-2">
                      {area.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-brand-orange dark:text-orange-400 flex-shrink-0" />
                          <span className="font-sans text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

     

        {/* How We Help Section */}
        <section className="py-16 lg:py-24 bg-gray-50 dark:bg-slate-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-brand-blue/10 to-brand-orange/10 dark:from-brand-blue/20 dark:to-brand-orange/20 rounded-2xl p-8 lg:p-12">
              <div className="text-center mb-12">
                <h2 className="font-sora text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  How Neeti Sahayak Kendra Helps
                </h2>
                <p className="font-sans text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  These centers ensure citizens can easily understand, access, and benefit from government programs, promoting inclusive and sustainable development at the community level.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { 
                    icon: UserCog, 
                    title: "Personalized Support", 
                    description: "One-on-one assistance tailored to individual needs" 
                  },
                  { 
                    icon: FileText, 
                    title: "Document Preparation", 
                    description: "Help with paperwork and documentation requirements" 
                  },
                  { 
                    icon: Monitor, 
                    title: "Digital Services", 
                    description: "Guidance for online government service access" 
                  },
                  { 
                    icon: Lightbulb, 
                    title: "Awareness Programs", 
                    description: "Education about available government schemes" 
                  },
                  { 
                    icon: Users, 
                    title: "Community Mobilization", 
                    description: "Bringing communities together for collective action" 
                  },
                  { 
                    icon: CheckCircle2, 
                    title: "Follow-up Support", 
                    description: "Continued assistance throughout the process" 
                  }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-14 h-14 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center mx-auto mb-4 shadow-md">
                      <item.icon className="w-7 h-7 text-brand-orange dark:text-orange-400" />
                    </div>
                    <h3 className="font-sora text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-orange via-slate-800 to-brand-blue text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Find Your Nearest NSK Center
            </h2>
            <p className="font-sans text-lg lg:text-xl text-gray-200 dark:text-gray-300 leading-relaxed mb-8">
              Access personalized support and guidance for government schemes and digital services in your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="font-sans bg-white text-brand-orange hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                <Link href="/contact">
                  Locate Center <MapPin className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-sans border-white text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold"
              >
                <Link href="/about">
                  Learn More <ArrowRight className="w-5 h-5 ml-2" />
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