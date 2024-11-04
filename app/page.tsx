import Header from './components/Header'
import Hero3D from './components/Hero3D'
import About from './components/About'
import CarListing from './components/CarListing'
import CarCategories from './components/CarCategories'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import React from 'react'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero3D />
      <About />
      <CarListing />
      <CarCategories />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </main>
  )
}