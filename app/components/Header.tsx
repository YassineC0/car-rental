'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { useState, useEffect } from 'react'
import React from 'react'

export default function Header() {
  const router = useRouter()
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const currentScroll = window.scrollY
      const progress = (currentScroll / totalScroll) * 100
      setScrollProgress(Math.min(progress, 100))
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

  const backgroundColor = `rgba(0, 0, 0, ${0.3 + (scrollProgress / 100) * 0.5})`

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ backgroundColor }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white">
          YASSINERIDE
        </Link>
        <nav className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="text-white hover:text-orange-500 transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <Button
          onClick={handleBookRental}
          className="bg-red-500 text-white hover:bg-orange-600 px-4 py-2 rounded cursor-pointer transition-colors duration-300"
        >
          Book A Rental
        </Button>
      </div>
    </header>
  )
}