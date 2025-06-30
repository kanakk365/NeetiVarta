import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, User, BookOpen, ArrowRight } from "lucide-react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishDate: string
  readTime: string
  category: string
  tags: string[]
  image: string
  featured?: boolean
}

const blogPosts: BlogPost[] = [
  // {
  //   id: "1",
  //   title: "Digital Governance: Transforming Public Service Delivery in India",
  //   excerpt: "Exploring how digital technologies are revolutionizing the way government services are delivered to citizens across India, from rural villages to metropolitan cities.",
  //   content: "The digital transformation of government services in India has been nothing short of remarkable...",
  //   author: "Dr. Rajesh Kumar",
  //   publishDate: "2025-06-10",
  //   readTime: "8 min read",
  //   category: "Digital Policy",
  //   tags: ["Digital India", "E-Governance", "Public Services", "Technology"],
  //   image: "/policy-research-communication.png",
  //   featured: true
  // },
  // {
  //   id: "2",
  //   title: "Climate Policy and Sustainable Development: India's Path Forward",
  //   excerpt: "An in-depth analysis of India's climate policies and their alignment with sustainable development goals, examining challenges and opportunities.",
  //   content: "As India navigates the complex landscape of climate change and sustainable development...",
  //   author: "Dr. Priya Sharma",
  //   publishDate: "2025-06-08",
  //   readTime: "10 min read",
  //   category: "Environment",
  //   tags: ["Climate Change", "Sustainable Development", "Environment Policy"],
  //   image: "/policy-discussion-group.png"
  // },
  // {
  //   id: "3",
  //   title: "Education Policy Reform: Building Tomorrow's Workforce",
  //   excerpt: "Understanding the National Education Policy 2020 and its implications for skill development and workforce preparation in the 21st century.",
  //   content: "The National Education Policy 2020 represents a paradigm shift in India's approach to education...",
  //   author: "Prof. Anita Desai",
  //   publishDate: "2025-06-05",
  //   readTime: "6 min read",
  //   category: "Education",
  //   tags: ["NEP 2020", "Skill Development", "Education Reform"],
  //   image: "/policy-workshop-diverse.png"
  // },
  // {
  //   id: "4",
  //   title: "Healthcare Policy in Post-Pandemic India: Lessons and Reforms",
  //   excerpt: "Examining the evolution of healthcare policy in India following the COVID-19 pandemic and the reforms needed for a resilient health system.",
  //   content: "The COVID-19 pandemic exposed critical gaps in India's healthcare infrastructure...",
  //   author: "Dr. Suresh Gupta",
  //   publishDate: "2025-06-03",
  //   readTime: "7 min read",
  //   category: "Healthcare",
  //   tags: ["Healthcare Policy", "Pandemic Response", "Health Infrastructure"],
  //   image: "/policy-research-collaboration.png"
  // },
  // {
  //   id: "5",
  //   title: "Financial Inclusion and Digital Banking: Policy Perspectives",
  //   excerpt: "Analyzing India's journey towards financial inclusion through digital banking initiatives and the policy frameworks enabling this transformation.",
  //   content: "India's financial inclusion story is one of remarkable innovation and policy intervention...",
  //   author: "Mr. Vikash Agarwal",
  //   publishDate: "2025-06-01",
  //   readTime: "9 min read",
  //   category: "Finance",
  //   tags: ["Financial Inclusion", "Digital Banking", "FinTech Policy"],
  //   image: "/community-advocacy-meeting.png"
  // },
  // {
  //   id: "6",
  //   title: "Urban Planning and Smart Cities: A Policy Framework for India",
  //   excerpt: "Exploring the policy challenges and opportunities in India's urban development, with a focus on smart city initiatives and sustainable urban planning.",
  //   content: "As India rapidly urbanizes, the need for effective urban planning policies becomes paramount...",
  //   author: "Ar. Meera Patel",
  //   publishDate: "2025-05-28",
  //   readTime: "11 min read",
  //   category: "Urban Development",
  //   tags: ["Smart Cities", "Urban Planning", "Infrastructure Policy"],
  //   image: "/indian-parliament-democracy.png"
  // }
]

const categories = ["All", "Digital Policy", "Environment", "Education", "Healthcare", "Finance", "Urban Development"]

export default function BlogsPage() {
  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pb-32 bg-gradient-to-br from-brand-blue via-blue-600 to-indigo-700 dark:from-brand-blue/90 dark:via-blue-700 dark:to-indigo-800 text-white">
          <div className="absolute inset-0">
            <Image
              src="/newsletter-cover.png"
              alt="Blog background"
              layout="fill"
              objectFit="cover"
              className="opacity-20 dark:opacity-15"
              priority
            />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <BookOpen className="w-16 h-16 text-white mx-auto mb-6 opacity-80" />
            <h1 className="font-sora text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Policy Insights & Analysis</h1>
            <p className="font-sans text-lg lg:text-xl text-gray-100 dark:text-gray-200 leading-relaxed max-w-2xl mx-auto">
              Stay informed with our latest research, policy analysis, and expert insights on India's most pressing policy challenges and opportunities.
            </p>
          </div>
        </section>

        {/* Featured Blog Post */}
        {featuredPost && (
          <section className="py-16 lg:py-24 bg-white dark:bg-slate-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-4 bg-brand-orange text-white">
                  Featured Article
                </Badge>
                <h2 className="font-sora text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Latest Insights
                </h2>
              </div>
              
              <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-700">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <Badge variant="outline" className="w-fit mb-4 border-brand-orange text-brand-orange">
                      {featuredPost.category}
                    </Badge>
                    <h3 className="font-sora text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                      {featuredPost.title}
                    </h3>
                    <p className="font-sans text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 mb-6 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CalendarDays className="w-4 h-4" />
                        <span>{formatDate(featuredPost.publishDate)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <Button asChild className="w-fit bg-brand-orange hover:bg-brand-orange/90">
                      <Link href={`/blogs/${featuredPost.id}`}>
                        Read Full Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* Category Filter */}
        <section className="py-8 bg-gray-50 dark:bg-slate-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className={
                    category === "All"
                      ? "bg-brand-blue hover:bg-brand-blue/90"
                      : "hover:bg-brand-blue hover:text-white"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 lg:py-24 bg-white dark:bg-slate-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-sora text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Recent Articles
              </h2>
              <p className="font-sans text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Explore our collection of policy research, analysis, and insights from leading experts in the field.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-slate-700">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs border-brand-orange text-brand-orange">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{post.readTime}</span>
                    </div>
                    <CardTitle className="font-sora text-lg line-clamp-2 text-gray-900 dark:text-gray-100">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="font-sans text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {formatDate(post.publishDate)}
                      </span>
                    </div>
                    <Button asChild variant="ghost" size="sm" className="w-full mt-4 justify-between p-0 h-auto text-brand-blue hover:text-brand-blue/80">
                      <Link href={`/blogs/${post.id}`}>
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-16 lg:py-24 bg-gray-100 dark:bg-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-sora text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Stay Updated with Policy Insights
            </h2>
            <p className="font-sans text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              Subscribe to our newsletter and never miss the latest policy research, expert analysis, and insights that matter to India's future.
            </p>
            <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white">
              <Link href="#footer">
                Subscribe to Newsletter
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
