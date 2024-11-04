'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { useState, useEffect } from 'react'
import React from 'react'

export default function Header() {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleBookRental = () => {
    router.push('/contact')
  }

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Service', href: '/#why-choose-us' },
    { name: 'Cars', href: '/#car-listing' },
    { name: 'Contact Us', href: '/contact' }
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-gradient-to-b from-black/50 to-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className={`text-2xl font-bold ${scrolled ? 'text-black' : 'text-white'}`}>
          NOVARIDE
        </Link>
        <nav className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className={`hover:text-orange-500 ${scrolled ? 'text-black' : 'text-white'}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <Button
          onClick={handleBookRental}
          className="bg-orange-500 text-white hover:bg-orange-600 px-4 py-2 rounded cursor-pointer"
        >
          Book A Rental
        </Button>
      </div>
    </header>
  )
}