import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MessagesSquare,
  MapPin,
  Users,
  FileText,
  Monitor,
  ArrowRight,
  CheckCircle2,
  Building2,
  UserCog,
  Lightbulb,
} from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const individualServices = [
  {
    icon: FileText,
    title: "Government Scheme Enrollment",
    description: "Guidance on accessing welfare programs and entitlements",
    color: "text-brand-blue dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-500/20",
  },
  {
    icon: CheckCircle2,
    title: "Document Preparation & Verification",
    description:
      "Support for applications, identity verification, and compliance processes",
    color: "text-brand-orange dark:text-orange-400",
    bgColor: "bg-orange-100 dark:bg-orange-500/20",
  },
  {
    icon: Monitor,
    title: "Digital Governance Access",
    description:
      "Assistance in using online government platforms for essential services",
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-100 dark:bg-green-500/20",
  },
];

const organizationServices = [
  {
    icon: Building2,
    title: "Policy Compliance & Regulatory Support",
    description:
      "Helping organizations understand and fulfill government requirements",
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-100 dark:bg-purple-500/20",
  },
  {
    icon: Users,
    title: "Strategic Collaboration & Public Sector Engagement",
    description:
      "Advisory on partnerships and policy implementation strategies",
    color: "text-indigo-600 dark:text-indigo-400",
    bgColor: "bg-indigo-100 dark:bg-indigo-500/20",
  },
];

const consultancyServices = [
  {
    icon: Monitor,
    title: "Monitoring & Performance Tracking",
    description: "Establishing real-time assessment frameworks to track impact",
    color: "text-teal-600 dark:text-teal-400",
    bgColor: "bg-teal-100 dark:bg-teal-500/20",
  },
  {
    icon: Lightbulb,
    title: "Evaluation & Impact Analysis",
    description:
      "Data-driven insights for optimizing effectiveness and resource allocation",
    color: "text-rose-600 dark:text-rose-400",
    bgColor: "bg-rose-100 dark:bg-rose-500/20",
  },
  {
    icon: UserCog,
    title: "MEL Framework Implementation",
    description:
      "Integrating learning-based strategies for continuous improvement",
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-100 dark:bg-amber-500/20",
  },
];

const impactAreas = [
  {
    title: "Bureaucratic Navigation",
    description:
      "Simplifying complex government processes for better accessibility",
    features: [
      "Policy compliance guidance",
      "Documentation assistance",
      "Regulatory requirement support",
      "Process optimization",
    ],
  },
  {
    title: "Digital Governance",
    description: "Bridging the digital divide in government service access",
    features: [
      "Online platform navigation",
      "Digital service enrollment",
      "Technology adoption support",
      "Digital literacy enhancement",
    ],
  },
  {
    title: "Organizational Development",
    description: "Empowering NGOs and organizations through strategic support",
    features: [
      "Partnership facilitation",
      "Strategic planning assistance",
      "Capacity building programs",
      "MEL framework implementation",
    ],
  },
];

export default function NeetiSahayakPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pb-24 bg-gradient-to-br from-brand-orange via-slate-800 to-brand-blue text-white dark:from-brand-orange/90 dark:via-slate-900 dark:to-brand-blue/90">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 mb-6">
                <MessagesSquare className="w-10 h-10 text-white" />
              </div>
              <h1 className="font-sora text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Neeti Sahayak Kendra
              </h1>
              <p className="font-sans text-xl lg:text-2xl text-gray-200 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto mb-4">
                Empowering Communities Through Policy & Governance
              </p>
              <p className="font-sans text-lg lg:text-xl text-gray-300 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
                Simplifying Bureaucracy for Individuals, NGOs & Organizations. A
                policy facilitation and consultancy initiative under Neeti Varta
                Institute of Policy Research.
              </p>            </div>
          </div>
        </section>
        {/* Services Section */}
        <section className="py-16 lg:py-24 bg-white dark:bg-slate-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Our Services
              </h2>
              <div className="w-24 h-1 bg-brand-orange mx-auto"></div>
            </div>

            {/* For Individuals */}
            <div className="mb-16">
              <h3 className="font-sora text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
                For Individuals
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {individualServices.map((service, index) => (
                  <Card
                    key={index}
                    className="text-center bg-gray-50 dark:bg-slate-800 hover:shadow-lg transition-shadow duration-300 ease-in-out"
                  >
                    <CardHeader className="pb-4">
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${service.bgColor} mx-auto mb-4`}
                      >
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

            {/* For NGOs & Organizations */}
            <div className="mb-16">
              <h3 className="font-sora text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
                For NGOs & Organizations
              </h3>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {organizationServices.map((service, index) => (
                  <Card
                    key={index}
                    className="text-center bg-gray-50 dark:bg-slate-800 hover:shadow-lg transition-shadow duration-300 ease-in-out"
                  >
                    <CardHeader className="pb-4">
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${service.bgColor} mx-auto mb-4`}
                      >
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

            {/* Consultancy Assistance - MEL */}
            <div>
              <h3 className="font-sora text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                Consultancy Assistance
              </h3>
              <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-8">
                Project Monitoring, Evaluation & Learning (MEL)
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {consultancyServices.map((service, index) => (
                  <Card
                    key={index}
                    className="text-center bg-gray-50 dark:bg-slate-800 hover:shadow-lg transition-shadow duration-300 ease-in-out"
                  >
                    <CardHeader className="pb-4">
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${service.bgColor} mx-auto mb-4`}
                      >
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
              </div>            </div>
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
                Designed to help individuals, NGOs, and organizations navigate
                complex bureaucratic processes, government schemes, and policy
                compliance.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {impactAreas.map((area, index) => (
                <Card
                  key={index}
                  className="bg-white dark:bg-slate-900 hover:shadow-xl transition-shadow duration-300"
                >
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
                          <span className="font-sans text-sm text-gray-600 dark:text-gray-400">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}            </div>
          </div>
        </section>
        {/* How We Work Section */}
        <section className="py-16 lg:py-24 bg-gray-50 dark:bg-slate-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-brand-blue/10 to-brand-orange/10 dark:from-brand-blue/20 dark:to-brand-orange/20 rounded-2xl p-8 lg:p-12">
              <div className="text-center mb-12">
                <h2 className="font-sora text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  How We Work
                </h2>
                <p className="font-sans text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
                  NSK is powered by trained{" "}
                  <strong>Neeti Kaushal fellows</strong>, who serve as policy
                  navigators and consultants, ensuring efficient governance
                  support and practical solutions for communities and
                  organizations. Our work-based learning approach fosters
                  real-world policy expertise, bridging the gap between theory
                  and implementation.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: UserCog,
                    title: "Policy Navigation",
                    description:
                      "Expert guidance through complex bureaucratic processes",
                  },
                  {
                    icon: Users,
                    title: "Community Engagement",
                    description:
                      "Direct support for individuals and communities",
                  },
                  {
                    icon: Building2,
                    title: "Organizational Support",
                    description:
                      "Comprehensive assistance for NGOs and organizations",
                  },
                  {
                    icon: Lightbulb,
                    title: "Real-world Expertise",
                    description:
                      "Work-based learning approach ensuring practical solutions",
                  },
                  {
                    icon: Monitor,
                    title: "Digital Integration",
                    description:
                      "Seamless access to online government platforms",
                  },
                  {
                    icon: CheckCircle2,
                    title: "Continuous Learning",
                    description:
                      "MEL frameworks for ongoing improvement and impact",
                  },
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
              </div>            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-orange via-slate-800 to-brand-blue text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Join Us in Strengthening Policy Access
            </h2>
            <p className="font-sans text-lg lg:text-xl text-gray-200 dark:text-gray-300 leading-relaxed mb-8">
              Whether you need individual assistance, NGO collaboration, or
              policy consultancy, Neeti Sahayak Kendra is here to help. Let's
              make governance more accessible, efficient, and impactful
              together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">              <Button
                asChild
                size="lg"
                className="font-sans bg-white text-brand-orange hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                <Link href="/contact">
                  Get Support <UserCog className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-sans bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-orange hover:border-white transition-all duration-300 px-8 py-3 text-lg font-semibold"
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
  );
}
