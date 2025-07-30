import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Zap, Shield, TrendingUp, Database, Globe, Clock } from "lucide-react"
import Link from "next/link"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-teal-100 text-teal-800 hover:bg-teal-200">Advanced Validation Technology</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="text-teal-600"> Perfect Validation</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover how Contact Validator's comprehensive suite of features ensures your contact data is accurate,
            clean, and ready for successful outbound campaigns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4" asChild>
              <Link href="https://salescentri.com/demo">
                <span className="text-black">Interactive Demo</span>
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-4 bg-transparent"
              asChild
            >
              <Link href="https://salescentri.com/trial">
                <span className="text-black">Start Free Trial</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Validation Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to ensure your contact data is accurate and deliverable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-teal-100 hover:border-teal-300 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-teal-600" />
                </div>
                <CardTitle className="text-xl">Real-Time Validation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Validate email addresses instantly with 99.5% accuracy using advanced algorithms and real-time server
                  checks.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-600 mr-2" />
                    Syntax validation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-600 mr-2" />
                    Domain verification
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-600 mr-2" />
                    Mailbox existence check
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-teal-100 hover:border-teal-300 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-teal-600" />
                </div>
                <CardTitle className="text-xl">Duplicate Detection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Automatically identify and remove duplicate contacts to optimize your database and reduce costs.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-600 mr-2" />
                    Smart matching algorithms
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-600 mr-2" />
                    Fuzzy logic detection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-600 mr-2" />
                    Merge suggestions
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-teal-100 hover:border-teal-300 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-teal-600" />
                </div>
                <CardTitle className="text-xl">Domain Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive domain verification to ensure deliverability and protect your sender reputation.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-600 mr-2" />
                    MX record validation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-600 mr-2" />
                    Spam trap detection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-600 mr-2" />
                    Reputation scoring
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-teal-100 hover:border-teal-300 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-teal-600" />
                </div>
                <CardTitle className="text-xl">Bulk Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Process thousands of contacts simultaneously with our high-speed bulk validation engine.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-600 mr-2" />
                    CSV/Excel import
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-600 mr-2" />
                    Progress tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-600 mr-2" />
                    Detailed reporting
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-teal-100 hover:border-teal-300 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-teal-600" />
                </div>
                <CardTitle className="text-xl">API Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Seamlessly integrate validation into your existing workflows with our robust REST API.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-600 mr-2" />
                    RESTful endpoints
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-600 mr-2" />
                    Webhook support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-600 mr-2" />
                    Rate limiting
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-teal-100 hover:border-teal-300 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-teal-600" />
                </div>
                <CardTitle className="text-xl">Analytics Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Track validation performance and data quality metrics with comprehensive analytics and reporting.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-600 mr-2" />
                    Real-time metrics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-600 mr-2" />
                    Custom reports
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-600 mr-2" />
                    Export capabilities
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-teal-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Seamless Integrations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect Contact Validator with your favorite CRM and marketing tools
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {["Salesforce", "HubSpot", "Pipedrive", "Mailchimp", "Zapier", "Slack"].map((integration) => (
              <Card key={integration} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500 font-semibold text-xs">{integration}</span>
                </div>
                <p className="text-sm font-medium">{integration}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white" asChild>
              <Link href="https://salescentri.com/integrations">
                <span className="text-black">View All Integrations</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience These Features?</h2>
          <p className="text-xl mb-8 opacity-90">
            Start validating your contacts today and see the difference accurate data makes.
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
