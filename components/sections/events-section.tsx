import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Calendar,
  Clock,
  Users,
  Target,
  Globe,
  Star,
  GraduationCap,
  TrendingUp,
  Award,
} from "lucide-react";

export default function EventsSection() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Career Enhancement",
      description:
        "Strengthen research skills, improve analytical abilities, and boost your resume with practical experience",
    },
    {
      icon: Globe,
      title: "Real-World Exposure",
      description:
        "Work on pressing policy issues, contributing to practical solutions that matter",
    },
    {
      icon: Users,
      title: "Networking & Mentorship",
      description:
        "Build valuable connections with policy experts and fellow researchers",
    },
    {
      icon: Clock,
      title: "Remote Learning",
      description:
        "Participate in an accessible, engaging online format from anywhere in the world",
    },
  ];

  const importantDates = [
    {
      label: "Early Bird Deadline",
      date: "5th June",
      badge: "Save ₹500",
    },
    {
      label: "Final Application",
      date: "10th June",
      badge: "Last Chance",
    },
    {
      label: "Programme Duration",
      date: "15th June – 15th July",
      badge: "One Month",
    },
  ];

  return (
    <section
      id="events"
      className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-slate-800 dark:to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 dark:bg-orange-500/10 px-4 py-2 rounded-full mb-6">
            <GraduationCap className="w-5 h-5 text-brand-orange dark:text-orange-400" />
            <span className="text-sm font-semibold text-brand-orange dark:text-orange-400">
              Professional Development Programme
            </span>
          </div>

          <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
            Policy Research Training cum<br />
            <span className="text-brand-orange dark:text-orange-400">
              Internship Programme
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-brand-orange to-orange-600 mx-auto mb-6"></div>

          <p className="font-sans text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A comprehensive one-month training and internship programme designed
            for aspiring policy researchers, offering theoretical insights with
            hands-on policy analysis. Develop critical research skills, engage
            in policy evaluation, and gain real-world governance experience.
          </p>
        </div>

        {/* Important Dates Banner */}
        <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-8 mb-16 ">
          <div className="text-center ">
            <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-slate-700 px-4 py-2 rounded-full mb-4">
              <Calendar className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Timeline
              </span>
            </div>
            
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {importantDates.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <Badge
                    variant="outline"
                    className="border-brand-orange text-brand-orange dark:border-orange-400 dark:text-orange-400 mb-4"
                  >
                    {item.badge}
                  </Badge>
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2">
                    {item.label}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Program Overview & Pricing */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Benefits Section */}
          <div className="space-y-8">
            <div>
              <h3 className="font-sora text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                Why Join This Program?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Transform your career with our comprehensive training programme
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={index}
                    className="group flex items-start p-4 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-colors duration-200"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-brand-orange/10 dark:bg-orange-500/10 rounded-lg flex items-center justify-center group-hover:bg-brand-orange/20 dark:group-hover:bg-orange-500/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-brand-orange dark:text-orange-400" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pricing Card */}
          <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-md bg-white dark:bg-slate-800 shadow-2xl border-2 border-brand-orange/20 dark:border-orange-500/20 hover:border-brand-orange/40 dark:hover:border-orange-500/40 transition-colors">
              <CardHeader className="text-center p-8 pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-orange to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="font-sora text-2xl font-bold text-brand-orange dark:text-orange-400">
                  Programme Pricing
                </CardTitle>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  Choose your investment plan
                </p>
              </CardHeader>

              <CardContent className="p-8 pt-0">
                <div className="space-y-6">
                  {/* Early Bird Pricing */}
                  <div className="relative bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-6 border-2 border-green-200 dark:border-green-700">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-green-500 hover:bg-green-600 text-white px-4 py-1">
                        <Star className="w-3 h-3 mr-1" />
                        Early Bird Offer
                      </Badge>
                    </div>
                    <div className="text-center pt-2">
                      <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-1">
                        ₹2,000
                      </div>
                      <p className="text-sm text-green-700 dark:text-green-300">
                        Applications by 5th June
                      </p>
                      <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                        Save ₹500!
                      </p>
                    </div>
                  </div>

                  {/* Standard Pricing */}
                  <div className="text-center bg-gray-50 dark:bg-slate-700/50 rounded-xl p-6 border border-gray-200 dark:border-slate-600">
                    <div className="text-3xl font-bold text-gray-700 dark:text-gray-300 mb-1">
                      ₹2,500
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Standard Fee
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      (Non-refundable)
                    </p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-4 mt-8">
                  <Button
                    asChild
                    size="lg"
                    className="w-full font-semibold bg-gradient-to-r from-brand-orange to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    <Link
                      href="https://forms.gle/eYJ6MFbgiHa2ebpC7"
                      target="_blank"
                    >
                      Apply Now
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full font-semibold border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white dark:border-orange-400 dark:text-orange-400 dark:bg-[#121b2e] transition-all duration-200"
                  >
                    <Link href="https://rzp.io/rzp/VlQrmg7" target="_blank">
                      Make Payment
                    </Link>
                  </Button>
                </div>
              </CardContent>

              
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
