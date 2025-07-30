import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, X } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small teams getting started",
      features: [
        "5,000 validations/month",
        "Real-time validation",
        "Basic duplicate detection",
        "Email support",
        "CSV import/export",
        "Basic analytics",
      ],
      notIncluded: ["Bulk processing", "API access", "Advanced analytics", "Priority support"],
      cta: "Start Free Trial",
      ctaLink: "https://salescentri.com/trial/starter",
      popular: false,
    },
    {
      name: "Pro",
      price: "$99",
      period: "/month",
      description: "Ideal for growing sales teams",
      features: [
        "25,000 validations/month",
        "Real-time validation",
        "Advanced duplicate detection",
        "Domain analysis",
        "Bulk processing",
        "API access",
        "Priority email support",
        "Advanced analytics",
        "CRM integrations",
      ],
      notIncluded: ["Custom integrations", "Dedicated support"],
      cta: "Start Free Trial",
      ctaLink: "https://salescentri.com/trial/pro",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with custom needs",
      features: [
        "Unlimited validations",
        "All Pro features",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom reporting",
        "SLA guarantee",
        "On-premise deployment",
        "Advanced security features",
      ],
      notIncluded: [],
      cta: "Contact Sales",
      ctaLink: "https://salescentri.com/enterprise",
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-teal-100 text-teal-800 hover:bg-teal-200">Transparent Pricing</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Choose the Perfect Plan for
            <span className="text-teal-600"> Your Team</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Start with our free trial and scale as you grow. No hidden fees, no long-term contracts, cancel anytime.
          </p>
          <div className="flex justify-center items-center space-x-4 mb-8">
            <span className="text-gray-600">Monthly</span>
            <div className="relative">
              <input type="checkbox" className="sr-only" />
              <div className="w-12 h-6 bg-gray-300 rounded-full"></div>
            </div>
            <span className="text-gray-600">Annual</span>
            <Badge className="bg-teal-100 text-teal-800">Save 20%</Badge>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={plan.name}
                className={`relative ${plan.popular ? "border-teal-500 border-2 shadow-lg" : "border-gray-200"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-teal-600 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </CardHeader>

                <CardContent>
                  <Button
                    className={`w-full mb-6 ${plan.popular ? "bg-teal-600 hover:bg-teal-700 text-white" : "bg-gray-900 hover:bg-gray-800 text-white"}`}
                    asChild
                  >
                    <Link href={plan.ctaLink}>
                      <span className="text-black">{plan.cta}</span>
                    </Link>
                  </Button>

                  <div className="space-y-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feature) => (
                      <div key={feature} className="flex items-center opacity-50">
                        <X className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-500">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-teal-50 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our pricing and plans</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What happens if I exceed my monthly validation limit?",
                answer:
                  "You'll receive a notification when you reach 80% of your limit. You can upgrade your plan or purchase additional validations as needed.",
              },
              {
                question: "Can I change my plan at any time?",
                answer:
                  "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated.",
              },
              {
                question: "Do you offer refunds?",
                answer:
                  "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, contact our support team for a full refund.",
              },
              {
                question: "Is there a free trial available?",
                answer: "Yes, all plans come with a 14-day free trial. No credit card required to get started.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of sales teams who trust Contact Validator for their outbound success.
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
