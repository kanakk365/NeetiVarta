import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, IndianRupee } from "lucide-react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

interface Course {
  id: string
  title: string
  coverImageUrl: string
  institute: string
  originalPrice: number
  discountedPrice: number
  discountPercentage?: number // Optional, can be calculated
  tags?: string[]
  description?: string // Short description if needed
  enrollLink: string
  additionalNotes?: string
}

const coursesData: Course[] = [
  {
    id: "ppu-001",
    title: "Public Policy Unveiled: Understanding, Essential Skills, and Career Opportunities",
    coverImageUrl: "/course-public-policy-unveiled.png",
    institute: "Neeti Varta Institute of Policy Research",
    originalPrice: 1000,
    discountedPrice: 599,
    tags: ["Beginner", "Career Development", "Policy Analysis"],
    enrollLink: "#", // Replace with actual link
    additionalNotes: "Flexible pricing plans available.",
  },
  {
    id: "ipp-002",
    title: "Introduction to Public Policy: A Foundational Course",
    coverImageUrl: "/course-intro-public-policy.png",
    institute: "Neeti Varta Institute of Policy Research",
    originalPrice: 10000,
    discountedPrice: 5000,
    tags: ["Foundational", "Governance", "Policy Making"],
    enrollLink: "#", // Replace with actual link
  },
  // Add more courses here if needed
]

// Calculate discount percentage
coursesData.forEach((course) => {
  if (course.originalPrice > course.discountedPrice) {
    course.discountPercentage = Math.round(
      ((course.originalPrice - course.discountedPrice) / course.originalPrice) * 100,
    )
  }
})

export default function CoursesPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 bg-white dark:bg-slate-900">
        {/* Page Header Section */}
        <section className="pt-32 pb-12 lg:pb-16 bg-gradient-to-br from-brand-blue via-slate-800 to-slate-900 text-white dark:from-brand-blue/90 dark:via-slate-900 dark:to-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <BookOpen className="w-16 h-16 text-white mb-6 mx-auto" />
            <h1 className="font-sora text-4xl sm:text-5xl font-bold text-white mb-4">
              Our Courses
            </h1>
            <p className="font-sans text-lg text-gray-200 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our range of courses designed to equip you with the knowledge and skills for a successful career
              in public policy.
            </p>
          </div>
        </section>

        {/* Courses Grid Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {coursesData.length > 0 ? (
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {coursesData.map((course) => (
                  <Card
                    key={course.id}
                    className="flex flex-col bg-white dark:bg-slate-900 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden"
                  >
                    <div className="relative w-full h-56">
                      <Image
                        src={course.coverImageUrl || "/placeholder.svg?width=400&height=225&query=course+cover"}
                        alt={course.title}
                        layout="fill"
                        objectFit="cover"
                      />
                      {course.discountPercentage && (
                        <Badge variant="destructive" className="absolute top-3 right-3 text-xs bg-red-500 text-white">
                          {course.discountPercentage}% OFF
                        </Badge>
                      )}
                    </div>
                    <CardHeader className="p-5">
                      <CardTitle className="font-sora text-lg font-semibold text-gray-900 dark:text-gray-100 leading-tight hover:text-brand-orange dark:hover:text-orange-400 transition-colors">
                        <Link href={course.enrollLink}>{course.title}</Link>
                      </CardTitle>
                      <p className="font-sans text-xs text-gray-500 dark:text-gray-400 pt-1">By {course.institute}</p>
                    </CardHeader>
                    <CardContent className="p-5 pt-0 flex-grow">
                      {course.tags && course.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {course.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                      {course.description && (
                        <p className="font-sans text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                          {course.description}
                        </p>
                      )}
                      <div className="flex items-center space-x-2">
                        <IndianRupee className="w-6 h-6 text-brand-orange dark:text-orange-400" />
                        <span className="font-sora text-2xl font-bold text-gray-900 dark:text-gray-100">
                          {course.discountedPrice.toLocaleString("en-IN")}
                        </span>
                        {course.originalPrice > course.discountedPrice && (
                          <span className="font-sans text-sm text-gray-500 dark:text-gray-400 line-through">
                            ₹{course.originalPrice.toLocaleString("en-IN")}
                          </span>
                        )}
                      </div>
                      {course.additionalNotes && (
                        <p className="font-sans text-xs text-green-600 dark:text-green-400 mt-2">
                          {course.additionalNotes}
                        </p>
                      )}
                    </CardContent>
                    <CardFooter className="p-5 bg-gray-50 dark:bg-slate-800/50">
                      <Button asChild size="lg" className="w-full font-sans bg-brand-blue hover:bg-brand-blue/90">
                        <Link href={course.enrollLink}>View Details & Enroll</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <BookOpen className="w-20 h-20 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                <h3 className="font-sora text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  No Courses Available Yet
                </h3>
                <p className="font-sans text-gray-500 dark:text-gray-400">
                  Please check back later for our upcoming course offerings.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
