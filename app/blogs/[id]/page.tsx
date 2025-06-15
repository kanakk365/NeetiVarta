import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, User, ArrowLeft, Share2 } from "lucide-react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

// This would typically come from a database or CMS
const getBlogPost = (id: string) => {
  const posts = [
    {
      id: "1",
      title: "Digital Governance: Transforming Public Service Delivery in India",
      content: `
        <p>The digital transformation of government services in India has been nothing short of remarkable. Over the past decade, initiatives like Digital India, Aadhaar, and the Unified Payments Interface (UPI) have fundamentally changed how citizens interact with government services.</p>
        
        <h2>The Digital India Revolution</h2>
        <p>Launched in 2015, Digital India aimed to transform the country into a digitally empowered society and knowledge economy. The program has three key vision areas:</p>
        
        <ul>
          <li><strong>Digital Infrastructure as a Core Utility:</strong> Creating a robust digital infrastructure that serves as the backbone for delivering services to citizens.</li>
          <li><strong>Governance and Services on Demand:</strong> Making government services available to citizens electronically by improving online infrastructure and increasing Internet connectivity.</li>
          <li><strong>Digital Empowerment of Citizens:</strong> Ensuring digital literacy and making digital resources/services available to citizens in their language.</li>
        </ul>
        
        <h2>Key Achievements</h2>
        <p>The impact of these digital initiatives has been transformative:</p>
        
        <blockquote>
          "India has leapfrogged several stages of development through its digital governance initiatives, creating a model that other developing nations are now studying and adopting."
        </blockquote>
        
        <p>Some notable achievements include:</p>
        <ul>
          <li>Over 1.3 billion Aadhaar enrollments, making it the world's largest biometric ID system</li>
          <li>UPI processing over 8 billion transactions per month</li>
          <li>Common Service Centers (CSCs) reaching over 600,000 villages</li>
          <li>DigiLocker storing over 5 billion documents digitally</li>
        </ul>
        
        <h2>Challenges and the Path Forward</h2>
        <p>Despite these successes, challenges remain in areas such as:</p>
        
        <ul>
          <li>Digital divide between urban and rural areas</li>
          <li>Cybersecurity and data privacy concerns</li>
          <li>Need for continuous skill development and digital literacy</li>
          <li>Interoperability between different government systems</li>
        </ul>
        
        <p>As we move forward, the focus must be on making digital governance more inclusive, secure, and citizen-centric. The lessons learned from India's digital transformation journey offer valuable insights for policy makers and practitioners worldwide.</p>
      `,
      author: "Dr. Rajesh Kumar",
      publishDate: "2025-06-10",
      readTime: "8 min read",
      category: "Digital Policy",
      tags: ["Digital India", "E-Governance", "Public Services", "Technology"],
      image: "/policy-research-communication.png"
    }
  ]
  
  return posts.find(post => post.id === id)
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = getBlogPost(params.id)
  
  if (!post) {
    return (
      <>
        <Header />
        <main className="flex-1 pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-sora text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Blog Post Not Found
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              The blog post you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link href="/blogs">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blogs
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    )
  }

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
        <section className="pt-32 pb-16 bg-white dark:bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button variant="ghost" asChild className="mb-8 p-0 hover:bg-transparent">
              <Link href="/blogs" className="flex items-center text-brand-blue hover:text-brand-blue/80">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blogs
              </Link>
            </Button>
            
            <Badge variant="outline" className="mb-4 border-brand-orange text-brand-orange">
              {post.category}
            </Badge>
            
            <h1 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                <span>{formatDate(post.publishDate)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <Button variant="ghost" size="sm" className="ml-auto p-2 h-auto">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="relative h-64 sm:h-80 lg:h-96 mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300"
                priority
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-16 bg-white dark:bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              className="prose prose-lg dark:prose-invert max-w-none
                prose-headings:font-sora prose-headings:text-gray-900 dark:prose-headings:text-gray-100
                prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed
                prose-a:text-brand-blue hover:prose-a:text-brand-blue/80
                prose-strong:text-gray-900 dark:prose-strong:text-gray-100
                prose-blockquote:border-l-brand-orange prose-blockquote:bg-orange-50 dark:prose-blockquote:bg-orange-900/10
                prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:not-italic
                prose-ul:text-gray-700 dark:prose-ul:text-gray-300
                prose-li:marker:text-brand-orange"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-slate-700">
              <h3 className="font-sora text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50 dark:bg-slate-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-sora text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
              Related Articles
            </h2>
            <div className="text-center">
              <Button asChild variant="outline">
                <Link href="/blogs">
                  Explore More Articles
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
