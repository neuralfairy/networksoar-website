"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">N</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Networksoar</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/features" className="text-gray-600 hover:text-teal-600 transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-teal-600 transition-colors">
                Pricing
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-teal-600 transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-teal-600 transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-teal-600 transition-colors">
                Contact
              </Link>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" className="text-black border-teal-600 hover:bg-teal-50 bg-transparent" asChild>
                <Link href="https://salescentri.com/trial">
                  <span className="text-black">Free Trial</span>
                </Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/features"
                className="block px-3 py-2 text-gray-600 hover:text-teal-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="block px-3 py-2 text-gray-600 hover:text-teal-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-600 hover:text-teal-600"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-2 text-gray-600 hover:text-teal-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-600 hover:text-teal-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white" asChild>
                  <Link href="https://salescentri.com/trial">
                    <span className="text-black">Start Free Trial</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Sticky CTA Bar */}
      <div className="bg-teal-600 text-white py-2 px-4 text-center">
        <span className="text-sm mr-4">🚀 Limited Time: Get 30% off your first 3 months!</span>
        <Button size="sm" className="bg-white text-teal-600 hover:bg-gray-100" asChild>
          <Link href="https://salescentri.com/trial">
            <span className="text-black">Start Free Trial</span>
          </Link>
        </Button>
      </div>
    </>
  )
}
