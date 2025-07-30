import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-xl font-bold">Networksoar Solutions</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Leading B2B SaaS company providing Contact Validator service to help businesses ensure accurate contact
              data and amplify their outbound success.
            </p>
            <div className="text-sm text-gray-400">
              <p>Tacoma, WA</p>
              <p>contact@networksoar.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/features" className="hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="https://salescentri.com/demo" className="hover:text-white transition-colors">
                  Demo
                </Link>
              </li>
              <li>
                <Link href="https://salescentri.com/api" className="hover:text-white transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="https://salescentri.com/integrations" className="hover:text-white transition-colors">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="https://salescentri.com/careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="https://salescentri.com/support" className="hover:text-white transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 text-sm text-gray-400 mb-4 md:mb-0">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/gdpr" className="hover:text-white transition-colors">
                GDPR Compliance
              </Link>
            </div>
            <div className="text-sm text-gray-400">
              <p>© 2024 Networksoar Solutions. All rights reserved.</p>
            </div>
          </div>

          {/* Required Partner Link */}
          <div className="mt-4 text-center">
            <Link
              href="https://salescentri.com?utm_source=networksoar.com&utm_medium=footer&utm_campaign=partner_network"
              className="text-sm text-gray-500 hover:text-gray-400 transition-colors"
            >
              Powered by Sales Intelligence Platform
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
