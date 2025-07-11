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
import { Target, Eye } from "lucide-react";
import Header from "@/components/layout/header"; // Added import
import Footer from "@/components/layout/footer"; // Added import

const teamMembers = [
  {
    name: "Dr. Amit Kumar Gupta",
    role: "Founder, Director & CEO",
    imageUrl: "/amit_gupta.png",
  },
  {
    name: "Prapti Gupta",
    role: "Director",
    imageUrl: "/prapti_gupta.jpg",
  },
  {
    name: "Miss Himani Verma",
    role: "Chief Program Officer",
    imageUrl: "/himani_verma.png",
  },
];

const advisoryBoardMembers = [
  {
    name: "Prof. Anupama Saxena",
    description:
      "Professor, Department of Political Science, Guru Ghasidas Vishwavidyalaya, Bilaspur, Chhattisgarh",
    imageUrl: "/anupma_saxena.jpg",
  },
  {
    name: "Mr. Rajeev Tripathi",
    description:
      "Vice President Legal/Head Legal & CPIO with Goods and Services Tax Network (GSTN), a government of India SPV.",
    imageUrl: "/rajeev_tripathi.png",
  },
  {
    name: "Mr. Syam S. Rai",
    description:
      "Legal Professional, Advisory, Litigation & Compliance, Speaker, Author, Alumnus: University of Delhi (DU), Indian Law Institute (ILI), Indian Institute of Management Calcutta (IIM-C)",
    imageUrl: "/syam_rai.jpg",
  },
  {
    name: "Miss Himani Verma",
    description: "Former bureaucrat, Rajasthan Public Service Commission",
    imageUrl: "/himani_verma.png",
  },
];

const visitingFellows = [
  {
    name: "Dr. Sajjan Kumar Singh",
    description:
      "Roaming researcher. Political Analyst. Doctorate from Jawaharlal Nehru University, 2017.",
    imageUrl: "/sajjan.jpg",
  },
  {
    name: "Dr. Anjali Kumari",
    description: "Lecturer, Planning and Research",
    imageUrl: "/anjali.png",
  },
  {
    name: "Dr. Anindya Sundar Polley",
    description:
      "Assistant Professor, Department of English, Munger State University, Bihar",
    imageUrl: "/anindya.jpg",
  },
  {
    name: "Vivek Kumar Hind",
    description:
      "Assistant Professor, Department of Political Science, Tilka Manjhi State University, Bihar",
    imageUrl: "/vivek_hind.png",
  },
];

const courses = [
  {
    title:
      "Public Policy Unveiled: Understanding, Essential Skills, and Career Opportunities",
    description:
      "Unlock the world of public policy and embark on a rewarding career path.",
    price: "₹599",
    imageUrl: "/placeholder.svg?width=450&height=280",
    enrollLink: "#", // Placeholder link
  },
  {
    title: "Introduction to Public Policy: A Foundational Course",
    description:
      '"Unlock the Secrets of Governance with Our Fundamental Guide to Public Policy - Your Pathway to Understanding Policy-Making Dynamics!"',
    price: "₹5,000",
    imageUrl: "/placeholder.svg?width=450&height=280",
    enrollLink: "#", // Placeholder link
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pb-24 bg-gradient-to-br from-brand-blue via-slate-800 to-slate-900 text-white dark:from-brand-blue/90 dark:via-slate-900 dark:to-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8  text-center">
            <h1 className="font-sora text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Welcome to Neeti Varta Institute
            </h1>
            <p className="font-sans text-lg lg:text-xl text-gray-200 dark:text-gray-300 leading-relaxed">
              Neeti Varta Institute of Policy Research Pvt. Ltd. is a pioneering
              social enterprise dedicated to enhancing policy literacy and civic
              engagement, particularly in Tier 2 and Tier 3 cities of India. We
              aim to democratize policy knowledge, enabling individuals to
              understand public policy, engage in the democratic process, and
              influence positive societal change. Our core mission is to empower
              citizens, with a strong focus on making policy education
              accessible through cutting-edge technology, educational resources,
              and community-driven initiatives.
            </p>
          </div>
        </section>
        {/* Mission & Vision Section */}
        <section className="py-16 lg:py-24 bg-gray-50 dark:bg-slate-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
              <Card className="bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center space-x-4 pb-3">
                  <div className="p-3 rounded-md bg-brand-orange/10 text-brand-orange dark:bg-orange-500/20 dark:text-orange-400">
                    <Target className="w-8 h-8" />
                  </div>
                  <CardTitle className="font-sora text-2xl text-gray-900 dark:text-gray-100">
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-sans text-gray-700 dark:text-gray-300 leading-relaxed">
                    Neeti Kaushal equips individuals from Tier-2 and Tier-3 cities
                    of India and rural India with policy literacy, digital skills,
                    and career pathways, transforming them into Citizen Consultants
                    who support their communities. Through Neeti Sahayak Kendras
                    (NSKs), these trained fellows provide localized guidance, ease
                    access to government schemes, and bridge governance gaps.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center space-x-4 pb-3">
                  <div className="p-3 rounded-md bg-brand-blue/10 text-brand-blue dark:bg-blue-500/20 dark:text-blue-400">
                    <Eye className="w-8 h-8" />
                  </div>
                  <CardTitle className="font-sora text-2xl text-gray-900 dark:text-gray-100">
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-sans text-gray-700 dark:text-gray-300 leading-relaxed">
                    We envision an inclusive democracy where everyone can understand,
                    access, and influence public policy. By scaling Neeti Kaushal and
                    NSKs nationwide, we aim to build a network of Citizen Consultants
                    driving grassroots impact, civic engagement, and sustainable
                    careers in public policy.
                  </p>
                
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        {/* Team Section */}
        <section className="py-16 lg:py-24 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Meet Our Team
              </h2>
              <div className="w-24 h-1 bg-brand-orange mx-auto"></div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {teamMembers.map((member) => (
                <Card
                  key={member.name}
                  className="text-center bg-gray-50 dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
                >
                  <Image
                    src={member.imageUrl || "/placeholder.svg"}
                    alt={member.name}
                    width={120}
                    height={120}
                    className="rounded-full mx-auto mb-4 border-4 border-gray-200 dark:border-slate-700"
                  />
                  <CardTitle className="font-sora text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
                    {member.name}
                  </CardTitle>
                  <p className="font-sans text-brand-orange dark:text-orange-400 text-sm">
                    {member.role}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* Advisory Board Section */}
        <section className="py-16 lg:py-24 bg-gray-50 dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Our Advisory Board Members
              </h2>
              <div className="w-24 h-1 bg-brand-blue mx-auto"></div>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {advisoryBoardMembers.map((member) => (
                <Card
                  key={member.name}
                  className="bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row items-center p-6 text-center sm:text-left"
                >
                  <Image
                    src={member.imageUrl || "/placeholder.svg"}
                    alt={member.name}
                    width={100}
                    height={100}
                    className="rounded-full mb-4 sm:mb-0 sm:mr-6 flex-shrink-0 border-4 border-gray-200 dark:border-slate-700"
                  />
                  <div>
                    <CardTitle className="font-sora text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      {member.name}
                    </CardTitle>
                    <p className="font-sans text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* Visiting Fellows Section */}
        <section className="py-16 lg:py-24 lg:pb-32 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Visiting Fellows
              </h2>
              <div className="w-24 h-1 bg-green-600 mx-auto"></div>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {visitingFellows.map((fellow) => (
                <Card
                  key={fellow.name}
                  className="bg-gray-50 dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row items-center p-6 text-center sm:text-left"
                >
                  <Image
                    src={fellow.imageUrl || "/placeholder.svg"}
                    alt={fellow.name}
                    width={100}
                    height={100}
                    className="rounded-full mb-4 sm:mb-0 sm:mr-6 flex-shrink-0 border-4 border-gray-200 dark:border-slate-700"
                  />
                  <div>
                    <CardTitle className="font-sora text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      {fellow.name}
                    </CardTitle>
                    <p className="font-sans text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {fellow.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
