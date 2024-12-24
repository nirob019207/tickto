import { Facebook, Instagram, ArrowRight } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo */}
        <div>
          <svg
            viewBox="0 0 100 100"
            className="w-20 h-20 fill-current"
            aria-label="Ticketing Tix Logo"
          >
            <path d="M20 50 L40 50 L40 20 L60 20 L60 50 L80 50 L80 80 L60 80 L60 50 L40 50 L40 80 L20 80 Z" />
          </svg>
        </div>

        {/* Explore Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">EXPLORE</h3>
          <nav className="flex flex-col space-y-2">
            <a href="/" className="hover:text-gray-300">Home</a>
            <a href="/about" className="hover:text-gray-300">About Us</a>
            <a href="/events" className="hover:text-gray-300">Events</a>
            <a href="/faqs" className="hover:text-gray-300">FAQs</a>
            <a href="/privacy" className="hover:text-gray-300">Privacy Policy</a>
            <a href="/terms" className="hover:text-gray-300">Terms & Conditions</a>
            <a href="/contact" className="hover:text-gray-300">Contact Us</a>
          </nav>
        </div>

        {/* Connect With Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">CONNECT WITH US</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              <Facebook className="w-6 h-6" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="hover:text-gray-300">
              <Instagram className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">GET THE LATEST NEWS</h3>
          <div className="flex">
            <Input 
              type="email" 
              placeholder="Your email here" 
              className="bg-white text-black rounded-r-none"
            />
            <Button 
              variant="outline" 
              size="icon"
              className="rounded-l-none border-l-0"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2">Ticketing Tix</h3>
            <p className="text-sm text-gray-400">202301008087 (1502008-U)</p>
            <p className="text-sm text-gray-400">F106, First Floor, Sungei Wang Plaza,</p>
            <p className="text-sm text-gray-400">Jalan Sultan Ismail,</p>
            <p className="text-sm text-gray-400">50250 Kuala Lumpur.</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-sm text-gray-400">
        © Copyright 2024 Ticketing Tix Sdn Bhd 202301008087 (1502008-U). All Rights Reserved.
      </div>
    </footer>
  )
}

