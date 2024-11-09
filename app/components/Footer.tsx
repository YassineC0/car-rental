import Link from 'next/link'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Facebook, Twitter, Youtube, Instagram, Linkedin, ArrowRight } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <Link href="/" className="text-2xl font-bold">
              <span className="text-white">YASSINE</span>
              <span className="text-red-500">RIDE</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Experience the ease and convenience of renting a car with Novaride.
            </p>
          </div>

          {/* Legal Policy */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal Policy</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-white">Term & Condition</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Legal Notice</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Accessibility</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Car Type</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Service</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe To The Newsletters</h3>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Email..."
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Button className="bg-red-500 hover:bg-red-600">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">© 2024 Novaride. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-400 hover:text-white">
              <Youtube className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}