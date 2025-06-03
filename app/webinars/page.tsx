"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, Video, Ticket, Presentation, Info } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

interface Webinar {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  time: string;
  status: "upcoming" | "past";
  price: string;
  description?: string;
  coverImageUrl?: string;
  actionLink?: string;
  actionText?: string;
}

const webinarsData: Webinar[] = [
  {
    id: "dt-001",
    title: "Why Design Thinking Matters in Public Policy",
    subtitle: "How to apply it to public policy",
    date: "24 Nov 2023",
    time: "05:40 PM to 07:40 PM",
    status: "past",
    price: "Free",
    coverImageUrl: "/webinar-design-thinking.png",
    description:
      "Explore the significance of design thinking in shaping effective public policies and learn practical approaches to apply these methodologies.",
    actionLink: "#", // Placeholder for recording link
    actionText: "Watch Recording",
  },
  {
    id: "upcoming-001",
    title: "The Future of AI in Governance",
    subtitle: "Exploring opportunities and challenges",
    date: "15 Aug 2025", // Future date
    time: "03:00 PM to 04:30 PM",
    status: "upcoming",
    price: "Free",
    coverImageUrl: "/webinar-ai-governance.png",
    description:
      "Join us for an insightful discussion on how Artificial Intelligence is set to revolutionize public administration and governance.",
    actionLink: "#", // Placeholder for registration link
    actionText: "Register Now",
  },
  {
    id: "upcoming-002",
    title: "Sustainable Development Goals: Local Implementation Strategies",
    subtitle: "From global goals to local action",
    date: "10 Sep 2025", // Future date
    time: "11:00 AM to 12:30 PM",
    status: "upcoming",
    price: "₹299",
    coverImageUrl: "/webinar-sdg-local.png",
    description:
      "Learn how to effectively implement Sustainable Development Goals at the local level with actionable strategies and case studies.",
    actionLink: "#", // Placeholder for registration link
    actionText: "Register Now",
  },
];

const WebinarCard = ({ webinar }: { webinar: Webinar }) => (
  <Card className="flex flex-col bg-white dark:bg-slate-900 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
    {webinar.coverImageUrl && (
      <div className="relative w-full h-48">
        <Image
          src={webinar.coverImageUrl || "/placeholder.svg"}
          alt={webinar.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    )}
    <CardHeader className="p-5">
      <CardTitle className="font-sora text-lg font-semibold text-gray-900 dark:text-gray-100 leading-tight">
        {webinar.title}
      </CardTitle>
      {webinar.subtitle && (
        <p className="font-sans text-sm text-gray-600 dark:text-gray-400 mt-1">
          {webinar.subtitle}
        </p>
      )}
    </CardHeader>
    <CardContent className="p-5 pt-0 flex-grow space-y-3">
      <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
        <CalendarDays className="w-4 h-4 mr-2 text-brand-blue dark:text-blue-400" />
        <span>
          {webinar.date} &bull; {webinar.time}
        </span>
      </div>
      <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
        {webinar.price.toLowerCase() === "free" ? (
          <Ticket className="w-4 h-4 mr-2 text-green-500 dark:text-green-400" />
        ) : (
          <Info className="w-4 h-4 mr-2 text-brand-orange dark:text-orange-400" />
        )}
        <span
          className={
            webinar.price.toLowerCase() === "free"
              ? "font-semibold text-green-600 dark:text-green-400"
              : ""
          }
        >
          {webinar.price}
        </span>
      </div>
      {webinar.description && (
        <p className="font-sans text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
          {webinar.description}
        </p>
      )}
    </CardContent>
    {webinar.actionLink && webinar.actionText && (
      <CardFooter className="p-5 bg-gray-50 dark:bg-slate-800/50">
        <Button
          asChild
          className="w-full font-sans bg-brand-orange hover:bg-brand-orange/90"
        >
          <Link href={webinar.actionLink}>
            {webinar.status === "past" ? (
              <Video className="w-4 h-4 mr-2" />
            ) : (
              <Ticket className="w-4 h-4 mr-2" />
            )}
            {webinar.actionText}
          </Link>
        </Button>
      </CardFooter>
    )}
  </Card>
);

const filterWebinars = (status?: "upcoming" | "past") => {
  if (!status) return webinarsData; // For 'All' tab
  return webinarsData.filter((webinar) => webinar.status === status);
};

export default function WebinarsPage() {
  const upcomingWebinars = filterWebinars("upcoming");
  const pastWebinars = filterWebinars("past");
  const allWebinars = filterWebinars();

  const renderWebinarList = (webinars: Webinar[], tabName: string) => {
    if (webinars.length === 0) {
      return (
        <div className="text-center py-12">
          <Presentation className="w-20 h-20 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
          <h3 className="font-sora text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
            No {tabName.toLowerCase()} webinars at the moment.
          </h3>
          <p className="font-sans text-gray-500 dark:text-gray-400">
            Please check back later for updates.
          </p>
        </div>
      );
    }
    return (
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {webinars.map((webinar) => (
          <WebinarCard key={webinar.id} webinar={webinar} />
        ))}
      </div>
    );
  };

  return (
    <>
      <Header />
      <main
        id="main-content"
        className="flex-1 pt-20 bg-gray-50 dark:bg-slate-800"
      >
        {/* Page Header Section */}
        <section className="py-12 lg:py-16 bg-slate-100 dark:bg-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Presentation className="w-16 h-16 text-brand-orange dark:text-orange-400 mx-auto mb-6" />
            <h1 className="font-sora text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Webinars
            </h1>
            <p className="font-sans text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join our insightful webinars to learn from experts, discuss
              critical policy issues, and expand your knowledge.
            </p>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs  defaultValue="all" className="w-full ">
              <TabsList className="grid w-full grid-cols-3 md:w-1/2 lg:w-1/3 mx-auto mb-10 dark:bg-[#0f172a]">
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="past">Past</TabsTrigger>
                <TabsTrigger value="all">All</TabsTrigger>
              </TabsList>
              <TabsContent value="upcoming">
                {renderWebinarList(upcomingWebinars, "Upcoming")}
              </TabsContent>
              <TabsContent value="past">
                {renderWebinarList(pastWebinars, "Past")}
              </TabsContent>
              <TabsContent value="all">
                {renderWebinarList(allWebinars, "All")}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
