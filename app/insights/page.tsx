"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Mail, Send } from "lucide-react"
import Header from "@/components/layout/header" // Added import
import Footer from "@/components/layout/footer" // Added import

export default function InsightsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        {/* Page Header */}
        <section className="pt-32 pb-12 lg:pb-16 bg-slate-100 dark:bg-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100">
              Insights & Analysis
            </h1>
            <p className="mt-3 font-sans text-lg text-gray-600 dark:text-gray-300">
              Exploring the landscape of public policy in India.
            </p>
          </div>
        </section>
        {/* Main Content Area */}
        <section className="py-12 lg:py-16 bg-[#0f172a] ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:flex lg:gap-12">
              {/* Blog Post Content */}
              <article className="lg:w-2/3 prose prose-lg dark:prose-invert max-w-none prose-headings:font-sora prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-a:text-brand-orange hover:prose-a:text-brand-orange/80">
                <header className="mb-8">
                  <h2 className="text-3xl lg:text-4xl font-bold !mb-3">
                    Navigating a Fulfilling Career in Public Policy in India
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Post: 21.06.2024</p>
                </header>

                <p>
                  India&apos;s dynamic growth presents complex challenges and opportunities, demanding innovative and
                  effective policy solutions. A career in public policy offers a unique platform to drive meaningful
                  change and shape the nation&apos;s trajectory. For individuals passionate about social impact,
                  possessing strong analytical acumen, and driven by a desire to serve the public good, a career in
                  public policy can be immensely fulfilling.
                </p>

                <h3>The Significance of Public Policy in India</h3>
                <p>
                  Public policy touches every aspect of Indian life, from healthcare and education to economic
                  development and environmental sustainability. As India addresses critical issues such as poverty
                  reduction, infrastructure development, and climate change mitigation, skilled public policy
                  professionals are essential for crafting and implementing policies that benefit all citizens.
                </p>

                <h3>Diverse Career Pathways</h3>
                <p>The field of public policy offers a rich tapestry of career options:</p>
                <ul>
                  <li>
                    <strong>Government:</strong> Contribute directly to policy formulation and implementation by joining
                    the civil services, working in ministries, or contributing to think tanks like NITI Aayog.
                  </li>
                  <li>
                    <strong>Research and Analysis:</strong> Conduct in-depth research, analyze complex data, and provide
                    evidence-based recommendations to policymakers in think tanks and research organizations.
                  </li>
                  <li>
                    <strong>Advocacy and Social Impact:</strong> Work with NGOs to advocate for specific causes, design
                    and implement social programs, and influence policy changes.
                  </li>
                  <li>
                    <strong>International Development:</strong> Address global challenges such as climate change,
                    poverty, and human rights through roles in international organizations like the United Nations
                    Development Programme or the World Bank.
                  </li>
                  <li>
                    <strong>Policy Consulting:</strong> Offer government agencies and non-profit organizations
                    specialized expertise on various policy issues.
                  </li>
                </ul>

                <h3>Essential Skills for Public Policy Professionals</h3>
                <p>Success in public policy requires a diverse skill set:</p>
                <ul>
                  <li>
                    <strong>Analytical Skill:</strong> The ability to analyze complex data, identify trends, and derive
                    actionable insights.
                  </li>
                  <li>
                    <strong>Effective Communication:</strong> The ability to articulate ideas clearly and persuasively,
                    both verbally and in writing, to diverse stakeholders.
                  </li>
                  <li>
                    <strong>Strategic Thinking:</strong> The ability to develop and execute comprehensive policy
                    strategies.
                  </li>
                  <li>
                    <strong>Problem-Solving Aptitude:</strong> The ability to approach complex challenges with
                    innovative solutions.
                  </li>
                  <li>
                    <strong>Collaboration and Relationship Building:</strong> The ability to work effectively with
                    diverse stakeholders and build consensus.
                  </li>
                </ul>

                <h3>Preparing for a Public Policy Career</h3>
                <ul>
                  <li>
                    <strong>Education:</strong> A master&apos;s degree in public policy, public administration, or a
                    related field can provide a strong foundation.
                  </li>
                  <li>
                    <strong>Internships and Fellowships:</strong> Gain practical experience by interning at government
                    agencies, NGOs, or think tanks. Fellowships like the Legislative Assistants to Members of Parliament
                    (LAMP) Fellowship offer immersive, on-the-ground opportunities to contribute to policymaking and
                    implementation.
                  </li>
                  <li>
                    <strong>Professional Development:</strong> Continuously update your knowledge and skills through
                    workshops, conferences, and online courses.
                  </li>
                </ul>

                <h3>Neeti Varta&apos;s Commitment</h3>
                <p>
                  At Neeti Varta, we are dedicated to nurturing the next generation of public policy leaders. Our
                  programs and resources equip aspiring and established professionals with the tools and networks to
                  excel in this field. We invite you to explore our offerings and join us in shaping a brighter future
                  for India.
                </p>

                <h3>Embrace a Rewarding Public Policy Career</h3>
                <p>
                  A career in public policy is not merely a profession; it&apos;s an opportunity to create lasting
                  impact and contribute to the well-being of society. If you are passionate about addressing
                  India&apos;s challenges and shaping its future, a public policy career can be your pathway to a
                  fulfilling and rewarding journey.
                </p>
              </article>

              {/* Sidebar */}
              <aside className="lg:w-1/3 mt-12 lg:mt-0 space-y-8">
                {/* Latest Newsletter */}
                <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg shadow-md">
                  <h3 className="font-sora text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    Latest Newsletter
                  </h3>
                  <Image
                    src="/newsletter-cover.png"
                    alt="Neeti Varta Newsletter Cover"
                    width={300}
                    height={400}
                    className="w-full h-auto rounded-md mb-4 border border-gray-200 dark:border-slate-700"
                  />
                  <h4 className="font-sora text-md font-medium text-gray-800 dark:text-gray-200">
                    Neeti Varta Newsletter - Volume 1, Issue 1 (July 2024)
                  </h4>
                  <p className="font-sans text-sm text-gray-600 dark:text-gray-400 mt-2 mb-4">
                    We are pleased to announce the release of our latest newsletter, featuring:
                  </p>
                  <ul className="list-disc list-inside font-sans text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                    <li>Introductions to our new policy research interns</li>
                    <li>Updates on our ongoing research projects</li>
                    <li>Announcements of upcoming events</li>
                  </ul>
                  <Button asChild className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white">
                    <Link href="/placeholder-newsletter.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="w-4 h-4 mr-2" />
                      Download the Newsletter
                    </Link>
                  </Button>
                </div>

                {/* Stay Connected */}
                <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg shadow-md">
                  <h3 className="font-sora text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    Stay Connected
                  </h3>
                  <p className="font-sans text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Subscribe to our newsletter to receive regular updates on our research, events, and policy insights.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full bg-[#0f172a] border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white dark:border-orange-500 dark:text-orange-400 dark:hover:bg-orange-500 dark:hover:text-white"
                    onClick={() => alert("Newsletter subscription functionality coming soon!")}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Subscribe Now (Coming Soon)
                  </Button>
                </div>

                {/* Contact Us */}
                <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg shadow-md">
                  <h3 className="font-sora text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Contact Us</h3>
                  <p className="font-sans text-sm text-gray-700 dark:text-gray-300 font-medium">
                    Neeti Varta Institute of Policy Research
                  </p>
                  <Link
                    href="mailto:neetivarta.learning@gmail.com"
                    className="font-sans text-sm text-brand-orange hover:underline dark:text-orange-400 flex items-center mt-1"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    neetivarta.learning@gmail.com
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
