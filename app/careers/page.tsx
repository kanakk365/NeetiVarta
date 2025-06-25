import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CalendarDays,
  Mail,
  Users,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Rocket,
  Target,
  Heart,
  Lightbulb,
} from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const jobOpenings = [
  {
    id: "1",
    title: "Call for Trainers: Social Policy Lab",
    department: "Training & Development",
    type: "Contract/Part-time",
    location: "Remote/Hybrid",
    deadline: "25 June 2025",
    isActive: true,
    featured: true,
    description:
      "Are you passionate about policy education, governance innovation, and social impact? Neeti Varta's Social Policy Lab is looking for experienced trainers to join our mission of transforming policy research and implementation!",
    requirements: [
      "Policy Experts, Academics & Governance Professionals",
      "Social Impact Leaders & Researchers",
      "Innovators in Policy Analysis & Implementation",
    ],
    benefits: [
      "Shape the future of policy education & evidence-based governance",
      "Collaborate with policymakers, researchers & changemakers",
      "Lead immersive training sessions, workshops & mentorship programs",
      "Contribute to cutting-edge research & policy innovation",
    ],
    applyEmail: "neetivarta.learning@gmail.com",
  },
  {
    id: "2",
    title: "Neeti Kaushal Internship Programme!",
    department: "Training & Development",
    type: "Contract/Part-time",
    location: "Work from Home",
    deadline: "30 June 2025",
    isActive: true,
    featured: true,
    description:
      "Are you passionate about public policy? Do you want to sharpen your skills and contribute to meaningful change? Join the Neeti Varta Institute of Policy Research Pvt. Ltd. as a Policy Trainee under our prestigious Neeti Kaushal Programme.",
    requirements: [
      "Policy Experts, Academics & Governance Professionals",
      "Social Impact Leaders & Researchers",
      "Innovators in Policy Analysis & Implementation",
    ],
    benefits: [
      "Real-world policy research experience",
      "One-on-one mentoring",
      "Career guidance sessions ",
      "Certificate & Letter of Recommendation",
    ],
    applyEmail: "https://forms.gle/UTeTiouaUEVV5gNZ7",
  },
  {
    id: "3",
    title: "Policy Research Training Cum Fellowship Programme",
    department: "Training & Development",
    type: "Contract/Part-time",
    location: "Work from Home",
    deadline: "30 June 2025",
    isActive: true,
    featured: true,
    description:
      "Are you passionate about public policy, governance, and research? Looking for hands-on experience and expert mentorship in policy analysis? .",
    requirements: [
      "Open to Undergraduate (UG), Postgraduate (PG), and PhD scholars. ",
      "Priority given to UG, PG, and PhD candidates based on merit and research interest. ",
      "Female candidates are strongly encouraged to apply.",
    ],
    benefits: [
      "Real-world policy research experience",
      "One-on-one mentoring",
      "Career guidance sessions ",
      "Certificate & Letter of Recommendation",
    ],
    applyEmail: "https://forms.gle/Vyt4fxnxZNUsx5re7",
  },
];

export default function CareersPage() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const activejobs = jobOpenings.filter((job) => job.isActive);
  const featuredJob = activejobs.find((job) => job.featured);

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pb-32 bg-gradient-to-br from-brand-blue via-slate-800 to-slate-900 text-white dark:from-brand-blue/90 dark:via-slate-900 dark:to-black">
          <div className="absolute inset-0">
            <Image
              src="/policy-workshop-diverse.png"
              alt="Career opportunities background"
              layout="fill"
              objectFit="cover"
              className="opacity-20 dark:opacity-15"
              priority
            />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Briefcase className="w-16 h-16 text-white mx-auto mb-6 opacity-80" />
            <h1 className="font-sora text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Join Our Mission
            </h1>
            <p className="font-sans text-lg lg:text-xl text-gray-100 dark:text-gray-200 leading-relaxed max-w-2xl mx-auto">
              Be part of an impact-driven initiative that empowers communities
              and future policy leaders. Help us build a stronger, more
              accessible governance ecosystem.
            </p>
          </div>
        </section>

        {/* All Job Openings */}
        <section className="py-16 lg:py-24 bg-white dark:bg-slate-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-sora text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Current Opportunities
              </h2>
              <p className="font-sans text-lg text-gray-600 dark:text-gray-300">
                Explore all available positions and find the perfect fit for your skills and passion.
              </p>
            </div>

            <div className="grid gap-8">
              {activejobs.map((job, index) => (
                <Card
                  key={job.id}
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600"
                >
                  <CardHeader className="bg-gradient-to-r from-brand-blue to-brand-blue/80 text-white p-6">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div>
                        <CardTitle className="font-sora text-xl lg:text-2xl font-bold mb-2">
                          {job.title}
                        </CardTitle>
                        <div className="flex flex-wrap gap-4 text-blue-100">
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <CalendarDays className="w-4 h-4" />
                            Location: {job.location}
                          </span>
                        </div>
                      </div>
                      {job.featured && (
                        <Badge
                          variant="secondary"
                          className="bg-brand-orange text-white"
                        >
                          Featured
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="font-sans text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h3 className="font-sora text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                          <Target className="w-5 h-5 mr-2 text-brand-blue" />
                          Requirements:
                        </h3>
                        <ul className="space-y-2">
                          {job.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start">
                              <CheckCircle2 className="w-4 h-4 text-green-500 dark:text-green-400 mr-2 mt-1 flex-shrink-0" />
                              <span className="font-sans text-sm text-gray-600 dark:text-gray-400">
                                {req}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-sora text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                          <Heart className="w-5 h-5 mr-2 text-brand-blue" />
                          What You'll Get:
                        </h3>
                        <ul className="space-y-2">
                          {job.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start">
                              <CheckCircle2 className="w-4 h-4 text-green-500 dark:text-green-400 mr-2 mt-1 flex-shrink-0" />
                              <span className="font-sans text-sm text-gray-600 dark:text-gray-400">
                                {benefit}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg">
                      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <CalendarDays className="w-4 h-4" />
                          <span>
                            Application Deadline:{" "}
                            <strong className="text-red-600 dark:text-red-400">
                              {formatDate(job.deadline)}
                            </strong>
                          </span>
                        </div>
                        <Button
                          asChild
                          className="bg-brand-blue hover:bg-brand-blue/90 text-white"
                        >
                          <Link
                            href={`${job.applyEmail}`}
                          >
                            <Mail className="w-4 h-4 mr-2" />
                            Apply Now
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16 lg:py-24 bg-gray-50 dark:bg-slate-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-sora text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Why Choose Neeti Varta?
              </h2>
              <p className="font-sans text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Join a dynamic team committed to transforming policy research
                and implementation across India.
              </p>
            </div>{" "}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-brand-blue/10 dark:bg-brand-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-6 h-6 text-brand-blue dark:text-brand-blue" />
                  </div>
                  <h3 className="font-sora text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Innovation-Driven
                  </h3>
                  <p className="font-sans text-gray-600 dark:text-gray-300 text-sm">
                    Work on cutting-edge policy research and innovative
                    solutions that shape India's governance landscape.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-brand-orange/10 dark:bg-brand-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-brand-orange dark:text-brand-orange" />
                  </div>
                  <h3 className="font-sora text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Collaborative Environment
                  </h3>
                  <p className="font-sans text-gray-600 dark:text-gray-300 text-sm">
                    Collaborate with diverse experts, policymakers, and
                    researchers in an inclusive and supportive environment.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-500/10 dark:bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-green-500 dark:text-green-400" />
                  </div>
                  <h3 className="font-sora text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Meaningful Impact
                  </h3>
                  <p className="font-sans text-gray-600 dark:text-gray-300 text-sm">
                    Make a real difference in communities and contribute to
                    evidence-based policy making across India.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16 lg:py-24 bg-white dark:bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-sora text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                How to Apply
              </h2>
              <p className="font-sans text-lg text-gray-600 dark:text-gray-300">
                Ready to join our mission? Here's how you can apply for our
                current openings.
              </p>
            </div>{" "}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-blue hover:bg-brand-blue/90 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg shadow-lg">
                  1
                </div>
                <h3 className="font-sora text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Review Requirements
                </h3>
                <p className="font-sans text-gray-600 dark:text-gray-300 text-sm">
                  Carefully read through the job requirements and ensure you
                  meet the qualifications.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg shadow-lg">
                  2
                </div>
                <h3 className="font-sora text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Prepare Application
                </h3>
                <p className="font-sans text-gray-600 dark:text-gray-300 text-sm">
                  Prepare your resume, cover letter, and any relevant portfolio
                  or work samples.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 hover:bg-green-500/90 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg shadow-lg">
                  3
                </div>
                <h3 className="font-sora text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Submit Application
                </h3>
                <p className="font-sans text-gray-600 dark:text-gray-300 text-sm">
                  Send your application to the specified email address before
                  the deadline.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 lg:py-24 bg-gray-100 dark:bg-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-sora text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="font-sans text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              Be part of an impact-driven initiative that empowers communities &
              future policy leaders! Let's build a stronger, more accessible
              governance ecosystem together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-brand-orange hover:bg-brand-orange/90 text-white"
              >
                <Link href="mailto:neetivarta.learning@gmail.com?subject=Career Inquiry">
                  <Mail className="w-4 h-4 mr-2" />
                  Apply Now
                </Link>
              </Button>{" "}
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-600"
              >
                <Link href="/contact">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            <p className="font-sans text-sm text-gray-500 dark:text-gray-400 mt-6">
              Questions? Contact us at{" "}
              <Link
                href="mailto:neetivarta.learning@gmail.com"
                className="text-brand-blue hover:underline"
              >
                neetivarta.learning@gmail.com
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
