"use client";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Neeti Varta's internship program has provided me with invaluable research experience and skills, especially in policy analysis and writing.",
    image:
      "",
    name: "Jeevesh Jumar Singh",
    role: "June Batch, 2024",
  },
  {
    text: "The mentorship and guidance I received during my internship at Neeti Varta have been exceptional, helping me grow both professionally and personally.",
    image:
      "",
    name: "Sagar Sharma",
    role: "June Batch, 2024",
  },
  {
    text: "Working on real-world policy issues with Neeti Varta has given me a deeper understanding of the complexities of policy research and its impact.",
    image:
      "",
    name: "Vedantee Raut",
    role: "June Batch, 2024",
  },
  {
    text: "The research opportunities at Neeti Varta have expanded my understanding of public policy and governance structures significantly.",
    image:
      "",
    name: "Arjun Patel",
    role: "March Batch, 2024",
  },
  {
    text: "Through Neeti Varta's programs, I gained practical insights into policy implementation and its real-world challenges.",
    image:
      "",
    name: "Priya Sharma",
    role: "March Batch, 2024",
  },
  {
    text: "The collaborative environment at Neeti Varta fostered critical thinking and analytical skills essential for policy research.",
    image:
      "",
    name: "Rohit Kumar",
    role: "December Batch, 2023",
  },
  {
    text: "Neeti Varta's comprehensive approach to policy education has been instrumental in shaping my career in public administration.",
    image:
      "",
    name: "Anjali Gupta",
    role: "December Batch, 2023",
  },
  {
    text: "The expert guidance and mentorship at Neeti Varta have been crucial in developing my research and analytical capabilities.",
    image:
      "",
    name: "Vikash Singh",
    role: "September Batch, 2023",
  },
  {
    text: "Working with Neeti Varta has provided me with a comprehensive understanding of policy frameworks and governance systems.",
    image:
      "",
    name: "Sneha Yadav",
    role: "September Batch, 2023",
  },
   {
    text: "Interning with the Social Policy Lab at the Neeti Varta Institute of Policy Research was a hands-on experience that bridged policy theory and real-world application. Evaluating a government scheme in Chhattisgarh, I gained skills in stakeholder mapping, data analysis, and impact assessment using tools like the Evaluation Matrix and Theory of Change. This experience sharpened my research abilities and gave me a deeper understanding of governance, laying a strong foundation for a career in public policy and development.",
    image:"/vanshika.jpg",
    name: "Vanshikha Tyagi",
    role: "September Batch, 2023",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-16 lg:py-24 bg-gray-50 dark:bg-slate-800 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-300">
              Testimonials
            </div>
          </div>

          <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 mt-5 text-center">
            What our students say
          </h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto"></div>
          <p className="text-center mt-5 opacity-75 text-gray-600 dark:text-gray-400">
            See what our students and interns have to say about their experience
            with Neeti Varta.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}
