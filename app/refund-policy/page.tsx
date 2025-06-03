import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export default function RefundPolicyPage() {
  const lastUpdatedDate = "June 2, 2025" // Placeholder, update as needed

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-20 bg-white dark:bg-slate-900">
        {/* Page Header Section */}
        <section className="py-12 lg:py-16 bg-slate-100 dark:bg-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-sora text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Refund Policy
            </h1>
            <p className="font-sans text-sm text-gray-500 dark:text-gray-400">Last Updated: {lastUpdatedDate}</p>
          </div>
        </section>

        {/* Policy Content Section */}
        <section className="py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-sora prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-a:text-brand-orange hover:prose-a:text-brand-orange/80">
              <p>Thank you for shopping at www.neetivarta.org.in</p>

              <h2>Non-tangible irrevocable goods (&quot;Digital products&quot;)</h2>
              <p>
                We do not issue refunds for non-tangible irrevocable goods (&quot;digital products&quot;) once the order
                is confirmed and the product is sent.
              </p>
              <p>
                We recommend contacting us for assistance if you experience any issues receiving or downloading our
                products.
              </p>

              <h2>Contact us for any issues:</h2>
              <p>
                If you have any questions about our Returns and Refunds Policy, please contact us at:{" "}
                <a href="mailto:neetivarta.forum@gmail.com">neetivarta.forum@gmail.com</a>
              </p>
              {/* The user provided "Contact us for any issues:" twice, I'll keep it as is unless they want to remove the duplicate. */}
              <p>
                Contact us for any issues: If you have any questions about our Returns and Refunds Policy, please
                contact us at: <a href="mailto:neetivarta.forum@gmail.com">neetivarta.forum@gmail.com</a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
