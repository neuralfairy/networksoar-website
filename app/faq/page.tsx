"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqs = [
    {
      category: "General",
      question: "What is Contact Validator?",
      answer:
        "Contact Validator is a comprehensive email validation service that helps businesses ensure their contact data is accurate, deliverable, and up-to-date. Our advanced algorithms check email syntax, domain validity, and mailbox existence in real-time.",
    },
    {
      category: "General",
      question: "How accurate is Contact Validator?",
      answer:
        "Contact Validator maintains a 99.5% accuracy rate through our multi-step validation process that includes syntax checking, domain verification, MX record validation, and mailbox existence verification.",
    },
    {
      category: "Pricing",
      question: "Do you offer a free trial?",
      answer:
        "Yes! We offer a 14-day free trial for all plans. No credit card required to get started. You can validate up to 1,000 contacts during your trial period.",
    },
    {
      category: "Pricing",
      question: "What happens if I exceed my monthly validation limit?",
      answer:
        "You'll receive notifications when you reach 80% and 95% of your limit. If you exceed your limit, you can upgrade your plan or purchase additional validations. Your service won't be interrupted.",
    },
    {
      category: "Technical",
      question: "Do you provide an API?",
      answer:
        "Yes, we offer a robust REST API that allows you to integrate Contact Validator directly into your applications, CRM systems, or marketing platforms. Our API supports both single and bulk validation requests.",
    },
    {
      category: "Technical",
      question: "What file formats do you support for bulk uploads?",
      answer:
        "We support CSV, Excel (.xlsx, .xls), and TXT file formats for bulk uploads. You can upload files up to 100MB in size, containing up to 1 million email addresses.",
    },
    {
      category: "Technical",
      question: "How long does bulk validation take?",
      answer:
        "Bulk validation speed depends on the size of your list. Typically, we process 10,000-50,000 emails per minute. You'll receive real-time progress updates and can download results as soon as processing is complete.",
    },
    {
      category: "Data & Privacy",
      question: "How do you handle data privacy and security?",
      answer:
        "We take data security seriously. All data is encrypted in transit and at rest. We're GDPR compliant, SOC 2 certified, and never store your email lists longer than necessary for processing. Data is automatically deleted after 30 days.",
    },
    {
      category: "Data & Privacy",
      question: "Do you store or share my email lists?",
      answer:
        "No, we never store your email lists permanently or share them with third parties. Your data is processed securely and deleted automatically after 30 days. We only retain validation results and statistics.",
    },
    {
      category: "Integration",
      question: "Which CRM and marketing platforms do you integrate with?",
      answer:
        "We integrate with popular platforms including Salesforce, HubSpot, Pipedrive, Mailchimp, Constant Contact, and many others. We also support Zapier for connecting with 3,000+ applications.",
    },
    {
      category: "Integration",
      question: "Can I validate emails in real-time on my website forms?",
      answer:
        "Yes! Our JavaScript widget and API allow you to validate email addresses in real-time as users type them into your forms, preventing invalid emails from entering your database.",
    },
    {
      category: "Support",
      question: "What kind of support do you provide?",
      answer:
        "We offer email support for all plans, with priority support for Pro and Enterprise customers. Enterprise customers also receive phone support and a dedicated account manager.",
    },
    {
      category: "Support",
      question: "Do you provide onboarding assistance?",
      answer:
        "Yes, we provide onboarding assistance for all new customers. This includes setup guidance, integration support, and best practices training to help you get the most out of Contact Validator.",
    },
  ]

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const categories = [...new Set(faqs.map((faq) => faq.category))]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-teal-100 text-teal-800 hover:bg-teal-200">Help Center</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked
            <span className="text-teal-600"> Questions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Find answers to common questions about Contact Validator, our features, pricing, and how to get the most out
            of our email validation service.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-lg"
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            <Button
              variant="default"
              className="bg-teal-600 hover:bg-teal-700 text-white"
              onClick={() => setSearchTerm("")}
            >
              All
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="text-black border-teal-600 hover:bg-teal-50 bg-transparent"
                onClick={() => setSearchTerm(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <Card key={index} className="border-teal-100">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-teal-50 transition-colors"
                  >
                    <div>
                      <Badge variant="secondary" className="bg-teal-100 text-teal-800 mb-2">
                        {faq.category}
                      </Badge>
                      <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    </div>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    )}
                  </button>

                  {openItems.includes(index) && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No FAQs found matching your search. Try different keywords or browse all categories.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Still Need Help Section */}
      <section className="py-20 bg-teal-50 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Still Need Help?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Can't find what you're looking for? Our support team is here to help.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal-600 font-bold text-xl">📚</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">User Guide</h3>
                <p className="text-gray-600 mb-4">Comprehensive documentation and tutorials</p>
                <Button
                  variant="outline"
                  className="text-black border-teal-600 hover:bg-teal-50 bg-transparent"
                  asChild
                >
                  <Link href="https://salescentri.com/docs">View Guide</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal-600 font-bold text-xl">🔧</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">API Reference</h3>
                <p className="text-gray-600 mb-4">Technical documentation for developers</p>
                <Button
                  variant="outline"
                  className="text-black border-teal-600 hover:bg-teal-50 bg-transparent"
                  asChild
                >
                  <Link href="https://salescentri.com/api">API Docs</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal-600 font-bold text-xl">🎫</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Submit Ticket</h3>
                <p className="text-gray-600 mb-4">Get personalized help from our support team</p>
                <Button
                  variant="outline"
                  className="text-black border-teal-600 hover:bg-teal-50 bg-transparent"
                  asChild
                >
                  <Link href="https://salescentri.com/support">Submit Ticket</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Validating?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of businesses who trust Contact Validator for accurate contact data.
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

      {/* Structured Data for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  )
}
