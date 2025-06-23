// Placeholder for About Section
import Image from "next/image";
import { Target, Eye } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            About Us
          </h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto"></div>
        </div>

        {/* Mission and Video section */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-20">
          <div className="bg-[#f9fafb] dark:bg-[#1e293b] rounded-lg transition-shadow duration-300 h-full flex flex-col ">
            <div className="flex flex-row items-center space-x-4 pb-4">
              <div className="p-3 rounded-md bg-brand-blue/10 text-brand-blue dark:bg-blue-500/20 dark:text-blue-400">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="font-sora text-2xl text-brand-blue dark:text-blue-400">
                Our Mission
              </h3>
            </div>
            <div className="flex-grow">
              <p className="font-sans text-gray-700 dark:text-gray-300 leading-relaxed text-xl">
                To empower individuals, particularly in Tier 2 and Tier 3
                cities, with the knowledge and skills necessary to understand
                and influence public policy, and become active and informed
                citizens.
              </p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-xl h-full">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace dQw4w9WgXcQ with your actual YouTube video ID
                title="Our Mission in Action - YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="flex flex-row items-center space-x-4 pb-4">
              <div className="p-3 rounded-md bg-brand-orange/10 text-brand-orange dark:bg-orange-500/20 dark:text-orange-400">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="font-sora text-2xl text-brand-orange dark:text-orange-400">
                Our Vision
              </h3>
            </div>
            <p className="font-sans text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Neeti Varta Institute of Policy Research Pvt Ltd bridges critical
              gaps in policy literacy, skill development, and governance access.
            </p>
            <p className="font-sans text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              We foster inclusive growth in Tier-2, Tier-3 cities, and rural
              areas by empowering youth with comprehensive knowledge and
              practical skills in policy understanding and implementation.
            </p>

            <p className="font-sans text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Through our innovative approach, we enhance citizen access to
              public schemes, create meaningful career pathways in policy
              research and governance, and drive sustainable local development.
              Our unique blend of training programs, professional certification,
              and community support ensures lasting impact and transformative
              change in communities across India.
            </p>
          </div>
          <div className="relative h-96">
            <Image
              src="/policy-research-collaboration.png"
              alt="Policy research team collaborating"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
