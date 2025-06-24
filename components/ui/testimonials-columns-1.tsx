"use client";
import React from "react";
import { motion } from "framer-motion";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full" key={i}>
                  <div>{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">{name}</div>
                      <div className="leading-5 opacity-60 tracking-tight">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

const testimonials = [
  {
    text: "Neeti Varta's internship program has provided me with invaluable research experience and skills, especially in policy analysis and writing.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b739?w=400&h=400&fit=crop&crop=face",
    name: "Jeevesh Jumar Singh",
    role: "June Batch, 2024",
  },
  {
    text: "The mentorship and guidance I received during my internship at Neeti Varta have been exceptional, helping me grow both professionally and personally.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    name: "Sagar Sharma",
    role: "June Batch, 2024",
  },
  {
    text: "Working on real-world policy issues with Neeti Varta has given me a deeper understanding of the complexities of policy research and its impact.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    name: "Vedantee Raut",
    role: "June Batch, 2024",
  },
  {
    text: "The research opportunities at Neeti Varta have expanded my understanding of public policy and governance structures significantly.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    name: "Arjun Patel",
    role: "March Batch, 2024",
  },
  {
    text: "Through Neeti Varta's programs, I gained practical insights into policy implementation and its real-world challenges.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    name: "Priya Sharma",
    role: "March Batch, 2024",
  },
  {
    text: "The collaborative environment at Neeti Varta fostered critical thinking and analytical skills essential for policy research.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    name: "Rohit Kumar",
    role: "December Batch, 2023",
  },
  {
    text: "Neeti Varta's comprehensive approach to policy education has been instrumental in shaping my career in public administration.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    name: "Anjali Gupta",
    role: "December Batch, 2023",
  },
  {
    text: "The expert guidance and mentorship at Neeti Varta have been crucial in developing my research and analytical capabilities.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    name: "Vikash Singh",
    role: "September Batch, 2023",
  },
  {
    text: "Working with Neeti Varta has provided me with a comprehensive understanding of policy frameworks and governance systems.",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face",
    name: "Sneha Yadav",
    role: "September Batch, 2023",
  },
];
