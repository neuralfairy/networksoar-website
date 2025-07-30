import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const posts = [
    {
      title: "10 Email Deliverability Best Practices for 2024",
      excerpt: "Learn the latest strategies to improve your email deliverability rates and avoid the spam folder.",
      author: "Sarah Johnson",
      date: "January 15, 2024",
      category: "Email Marketing",
      readTime: "5 min read",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "The Hidden Cost of Bad Contact Data",
      excerpt:
        "Discover how invalid contact data is costing your business more than you think and what to do about it.",
      author: "Michael Chen",
      date: "January 10, 2024",
      category: "Data Quality",
      readTime: "7 min read",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "B2B Sales Outreach: Quality vs Quantity",
      excerpt: "Why focusing on contact quality over quantity leads to better sales outcomes and higher ROI.",
      author: "Emily Rodriguez",
      date: "January 5, 2024",
      category: "Sales Strategy",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "GDPR and Email Validation: What You Need to Know",
      excerpt: "Navigate GDPR compliance while maintaining effective email validation practices for your business.",
      author: "Sarah Johnson",
      date: "December 28, 2023",
      category: "Compliance",
      readTime: "8 min read",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "API Integration Guide: Contact Validator",
      excerpt:
        "Step-by-step guide to integrating Contact Validator API into your existing sales and marketing workflows.",
      author: "Michael Chen",
      date: "December 20, 2023",
      category: "Technical",
      readTime: "10 min read",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Case Study: 40% Improvement in Campaign Performance",
      excerpt: "How TechCorp increased their email campaign performance by 40% using Contact Validator.",
      author: "Emily Rodriguez",
      date: "December 15, 2023",
      category: "Case Study",
      readTime: "4 min read",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  const categories = [
    "All",
    "Email Marketing",
    "Data Quality",
    "Sales Strategy",
    "Compliance",
    "Technical",
    "Case Study",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-teal-100 text-teal-800 hover:bg-teal-200">Industry Insights</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            The Contact Validator
            <span className="text-teal-600"> Blog</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Stay up-to-date with the latest insights on data quality, email deliverability, and outbound sales best
            practices from our team of experts.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={
                  category === "All"
                    ? "bg-teal-600 hover:bg-teal-700 text-white"
                    : "text-black border-teal-600 hover:bg-teal-50"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-teal-100 text-teal-800">
                      {post.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl hover:text-teal-600 transition-colors">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent">
              <span className="text-black">Load More Posts</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-teal-50 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8">
            Get the latest insights on data quality and email deliverability delivered to your inbox.
          </p>
          <Card className="max-w-md mx-auto">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                  <span className="text-black">Subscribe</span>
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2">No spam, unsubscribe at any time.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Resources</h2>
            <p className="text-xl text-gray-600">Dive deeper with our comprehensive guides and resources</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-teal-100 hover:border-teal-300 transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <span className="text-teal-600 font-bold text-xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Case Studies</h3>
                <p className="text-gray-600 mb-6">
                  Real-world examples of how businesses improved their outbound success with Contact Validator.
                </p>
                <Button
                  variant="outline"
                  className="text-black border-teal-600 hover:bg-teal-50 bg-transparent"
                  asChild
                >
                  <Link href="https://salescentri.com/case-studies">View Case Studies</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-teal-100 hover:border-teal-300 transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <span className="text-teal-600 font-bold text-xl">📖</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Tutorials</h3>
                <p className="text-gray-600 mb-6">
                  Step-by-step guides to help you get the most out of Contact Validator and improve your processes.
                </p>
                <Button
                  variant="outline"
                  className="text-black border-teal-600 hover:bg-teal-50 bg-transparent"
                  asChild
                >
                  <Link href="https://salescentri.com/tutorials">Browse Tutorials</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-teal-100 hover:border-teal-300 transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <span className="text-teal-600 font-bold text-xl">📄</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Whitepapers</h3>
                <p className="text-gray-600 mb-6">
                  In-depth research and analysis on data quality trends and best practices in the industry.
                </p>
                <Button
                  variant="outline"
                  className="text-black border-teal-600 hover:bg-teal-50 bg-transparent"
                  asChild
                >
                  <Link href="https://salescentri.com/whitepapers">Download Whitepapers</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Improve Your Contact Quality?</h2>
          <p className="text-xl mb-8 opacity-90">
            Put these insights into action with Contact Validator and see immediate improvements in your campaigns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4" asChild>
              <Link href="https://salescentri.com/trial">
                <span className="text-black">Start Free Trial</span>
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 bg-transparent"
              asChild
            >
              <Link href="https://salescentri.com/demo">
                <span className="text-black">Book Demo</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
