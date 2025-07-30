import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Zap, TrendingUp, Star } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-teal-100 text-teal-800 hover:bg-teal-200">Trusted by 10,000+ Sales Teams</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Ensure Accurate Contacts.
            <br />
            <span className="text-teal-600">Amplify Outbound.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Validate contact data in real-time to improve deliverability rates, reduce bounces, and maximize your
            outbound sales success with Contact Validator.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg" asChild>
              <Link href="https://salescentri.com/demo">
                <span className="text-black">Book Demo</span>
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-4 text-lg bg-transparent"
              asChild
            >
              <Link href="https://salescentri.com/trial">
                <span className="text-black">Start Free Trial</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-gray-500 mb-8">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-400 font-semibold">Logo {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Contact Validator?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced validation technology that ensures your outbound campaigns reach real, active contacts every
              time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-teal-100 hover:border-teal-300 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Real-Time Validation</h3>
                <p className="text-gray-600 mb-6">
                  Validate email addresses instantly with 99.5% accuracy using our advanced algorithms.
                </p>
                <Button variant="outline" className="text-black border-teal-600 hover:bg-teal-50 bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-teal-100 hover:border-teal-300 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Duplicate Detection</h3>
                <p className="text-gray-600 mb-6">
                  Automatically identify and remove duplicate contacts to optimize your database.
                </p>
                <Button variant="outline" className="text-black border-teal-600 hover:bg-teal-50 bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-teal-100 hover:border-teal-300 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Domain Analysis</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive domain verification to ensure deliverability and sender reputation.
                </p>
                <Button variant="outline" className="text-black border-teal-600 hover:bg-teal-50 bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 bg-teal-50 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Calculate Your ROI</h2>
          <p className="text-xl text-gray-600 mb-8">See how much you can save by validating your contact data</p>
          <Card className="p-8">
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-teal-600 mb-2">23%</div>
                  <p className="text-gray-600">Increase in deliverability rates</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-600 mb-2">$15K</div>
                  <p className="text-gray-600">Average monthly savings</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-600 mb-2">40%</div>
                  <p className="text-gray-600">Reduction in bounce rates</p>
                </div>
              </div>
              <Button className="mt-8 bg-teal-600 hover:bg-teal-700 text-white" asChild>
                <Link href="https://salescentri.com/calculator">
                  <span className="text-black">Calculate Your Savings</span>
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="border-teal-100">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Contact Validator has transformed our outbound campaigns. Our deliverability improved by 35% in the
                    first month alone."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-teal-100 rounded-full mr-3"></div>
                    <div>
                      <p className="font-semibold">Sarah Johnson</p>
                      <p className="text-sm text-gray-500">VP Sales, TechCorp</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Improve Your Contact Accuracy?</h2>
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
