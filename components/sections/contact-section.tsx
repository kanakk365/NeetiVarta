// Placeholder for Contact Section
"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin } from "lucide-react";
import type { FormEvent } from "react";
import { Globe } from "@/components/ui/globe"; // Import the Globe component

export default function ContactSection() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic form validation and mock submission
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    // ... get other fields
    if (!name) {
      // Add more validation
      alert("Please fill in all required fields.");
      return;
    }
    alert("Thank you for your message! We will get back to you soon.");
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Contact
          </h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-6">
            {/* Container for the Globe */}
            <div className="relative  over  rounded-lg  h-[400px] sm:h-[450px] md:h-[550px] flex items-center justify-center">
              <Globe className="" />{" "}
            </div>
            
          </div>
          <div className="bg-gray-50 rounded-lg p-8 dark:bg-slate-800">
            <h3 className="font-sora text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-sans text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Name *
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your full name"
                  className="dark:bg-[#0f172a] border-0"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-sans text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email *
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                  className="dark:bg-[#0f172a] border-0"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block font-sans text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Subject *
                </label>
                <Select  name="subject" required>
                  <SelectTrigger className="dark:bg-[#0f172a] border-0">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-[#0f172a]border-0 hover:bg-[#0f172a]">
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="course">Course Inquiry</SelectItem>
                    <SelectItem value="collaboration">Collaboration</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block font-sans text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message *
                </label>
                <Textarea
                className="dark:bg-[#0f172a] border-0"
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us how we can help you..."
                />
              </div>
              <Button
                type="submit"
                className="w-full font-sans bg-brand-orange hover:bg-opacity-90"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
