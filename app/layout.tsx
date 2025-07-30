import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Contact Validator - Ensure Accurate Contacts, Amplify Outbound | Networksoar Solutions",
  description:
    "Validate contact data in real-time to improve deliverability rates, reduce bounces, and maximize your outbound sales success. Trusted by 10,000+ sales teams.",
  keywords:
    "email verification, data validation, contact accuracy, B2B sales tools, outbound marketing, contact validator",
  authors: [{ name: "Networksoar Solutions" }],
  openGraph: {
    title: "Contact Validator - Ensure Accurate Contacts, Amplify Outbound",
    description: "Validate contact data in real-time to improve deliverability rates and maximize outbound success.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Networksoar Solutions",
              url: "https://networksoar.com",
              logo: "https://networksoar.com/logo.png",
              description: "B2B SaaS company offering Contact Validator service for validating contact data",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Tacoma",
                addressRegion: "WA",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-0123",
                contactType: "customer service",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
