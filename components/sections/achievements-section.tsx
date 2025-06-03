"use client";
import React from "react";
import { Award, Users, BookCheck } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedNumber } from "@/components/ui/animated-number"; // Import the new component
import type { LucideIcon } from "lucide-react";

interface AchievementItem {
  icon: LucideIcon;
  numericValue: number;
  suffix?: string;
  label: string;
  themeColor: string; // e.g., "brand-blue", "brand-orange", "green-600"
  iconBgColor: string; // e.g., "bg-blue-100 dark:bg-blue-500/20"
}

const achievementsData: AchievementItem[] = [
  {
    icon: BookCheck,
    numericValue: 3,
    suffix: "",
    label: "Internship Programmes Offered",
    themeColor: "text-brand-blue dark:text-blue-400",
    iconBgColor: "bg-blue-100 dark:bg-blue-500/20",
  },
  {
    icon: Users,
    numericValue: 30,
    suffix: "+",
    label: "Successful Enrollments",
    themeColor: "text-brand-orange dark:text-orange-400",
    iconBgColor: "bg-orange-100 dark:bg-orange-500/20",
  },
  {
    icon: Award,
    numericValue: 3,
    suffix: "",
    label: "Courses Offered",
    themeColor: "text-green-600 dark:text-green-400",
    iconBgColor: "bg-green-100 dark:bg-green-500/20",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // Stagger animation for each card
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="py-16 lg:py-24 bg-white dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Our Milestones
          </h2>
          <p className="font-sans text-xl text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Celebrating our progress in democratizing policy knowledge and
            fostering civic engagement.
          </p>
          <div className="w-24 h-1 bg-brand-orange mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {achievementsData.map((ach, index) => (
            <motion.div
              key={index}
              className="text-center bg-gray-50 dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-slate-700 transform hover:-translate-y-1"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the card is visible
              variants={cardVariants}
            >
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${ach.iconBgColor}`}
              >
                <ach.icon className={`w-10 h-10 ${ach.themeColor}`} />
              </div>
              <div
                className={`font-sora text-5xl lg:text-6xl font-bold ${ach.themeColor} mb-3`}
              >
                <AnimatedNumber
                  to={ach.numericValue}
                  delay={index * 0.2 + 0.5}
                />
                {ach.suffix && <span>{ach.suffix}</span>}
              </div>
              <p className="font-sans text-lg font-semibold text-gray-800 dark:text-gray-200">
                {ach.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
