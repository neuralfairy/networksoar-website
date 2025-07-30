import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Award, Target } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Former VP of Sales at TechCorp with 15+ years in B2B sales and data analytics.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Ex-Google engineer specializing in data validation algorithms and scalable systems.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Product",
      bio: "Product leader with expertise in SaaS platforms and user experience design.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const values = [
    {
      icon: Target,
      title: "Accuracy First",
      description: "We're obsessed with providing the most accurate contact validation in the industry.",
    },
    {
      icon: Users,
      title: "Customer Success",
      description: "Your success is our success. We're committed to helping you achieve your outbound goals.",
    },
    {
      icon: Award,
      title: "Innovation",
      description: "Continuously improving our technology to stay ahead of industry challenges.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-teal-100 text-teal-800 hover:bg-teal-200">Tacoma, WA Based</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About
            <span className="text-teal-600"> Networksoar Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're a passionate team of data scientists, engineers, and sales professionals dedicated to solving the
            contact accuracy problem that plagues B2B sales teams worldwide.
          </p>
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <MapPin className="w-5 h-5" />
            <span>Founded in Tacoma, Washington • 2019</span>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="mb-6">
                Networksoar Solutions was born out of frustration. Our founder, Sarah Johnson, was leading a sales team
                at a fast-growing tech company when she discovered that nearly 30% of their contact database contained
                invalid or outdated information.
              </p>
              <p className="mb-6">
                This revelation led to missed opportunities, wasted resources, and damaged sender reputation. After
                searching for a solution and finding existing tools lacking, Sarah partnered with data scientist Michael
                Chen to build Contact Validator.
              </p>
              <p>
                Today, we're proud to serve over 10,000 sales professionals worldwide, helping them achieve higher
                deliverability rates and more successful outbound campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-teal-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-teal-100">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The people behind Contact Validator</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-teal-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white" asChild>
              <Link href="https://salescentri.com/careers">
                <span className="text-black">Join Our Team</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Compliance</h2>
            <p className="text-xl text-gray-600">We maintain the highest standards of security and compliance</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["GDPR", "ISO 27001", "SOC 2", "CCPA"].map((cert) => (
              <Card key={cert} className="text-center p-6">
                <div className="w-16 h-16 bg-teal-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8 text-teal-600" />
                </div>
                <p className="font-semibold">{cert}</p>
                <p className="text-sm text-gray-600 mt-1">Compliant</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of sales teams who trust Networksoar Solutions for their contact validation needs.
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
              <Link href="/contact">
                <span className="text-black">Contact Us</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
