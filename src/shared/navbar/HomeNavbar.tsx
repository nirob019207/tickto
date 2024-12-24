'use client'

import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import tikito from '@/assets/logo/Tickyto_logo 1.png'

export function HomeNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full border-b bg-white top-0 sticky z-40 py-4">
      <div className="container flex h-16 items-center justify-between">
        {/* Left Navigation */}
        <nav className="hidden md:flex items-center space-x-6 z-50">
        <Link href="/" className="text-lg font-medium transition-colors hover:text-primary">
  Home
</Link>
<Link href="/events" className="text-lg font-medium transition-colors hover:text-primary">
  Events
</Link>
<Link href="/blog" className="text-lg font-medium transition-colors hover:text-primary">
  Blog
</Link>

        </nav>

        {/* Center Logo */}
        <div className="absolute inset-0 flex justify-center top-4 items-center h-16">
          <Link href="/">
            <Image
              src={tikito}
              alt="Tickyto"
              width={120}
              height={40}
              className="h-16"
              priority
            />
          </Link>
        </div>

        {/* Right Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-6">
            <Link href="/about" className="text-lg font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="/verify" className="text-lg font-medium transition-colors hover:text-primary">
              Verify Ticket
            </Link>
          </nav>
          <Button variant="default" className="bg-[#2B3147] hover:bg-[#1f2435]">
            Register
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-8">
              <Link 
                href="/" 
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/events" 
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Events
              </Link>
              <Link 
                href="/blog" 
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/about" 
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/verify" 
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Verify Ticket
              </Link>
              <Button variant="default" className="bg-[#2B3147] hover:bg-[#1f2435] w-full mt-4">
                Register
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

