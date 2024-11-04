import Image from 'next/image'
import Header from '../components/Header'
import React from 'react'


export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
          
          <div className="mb-16 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-gray-600">
                Founded in 2010, CarRental has been providing top-notch car rental services for over a decade. 
                Our mission is to offer convenient, reliable, and affordable transportation solutions to our customers. 
                With a diverse fleet of vehicles and a commitment to exceptional customer service, we&apos;ve become a 
                trusted name in the car rental industry.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image src="/office.webp" alt="Our team" width={600} height={400} className="rounded-lg shadow-md" />
            </div>
          </div>

          <div className="mb-16 flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 md:pl-8 mb-8 md:mb-0">
              <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
              <p className="text-gray-600">
                At CarRental, we&apos;re committed to providing an exceptional experience for every customer. 
                We continuously invest in our fleet, ensuring that our vehicles are well-maintained, clean, 
                and equipped with the latest features. Our team of dedicated professionals is always ready 
                to assist you, whether you need help choosing the right vehicle or require roadside assistance.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image src="/drive.webp" alt="Our commitment" width={600} height={400} className="rounded-lg shadow-md" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
              <h2 className="text-2xl font-semibold mb-4">Our Future</h2>
              <p className="text-gray-600">
                As we look to the future, CarRental is committed to embracing innovation and sustainability. 
                We&apos;re expanding our fleet to include more electric and hybrid vehicles, reducing our environmental 
                impact while providing our customers with cutting-edge transportation options. Our goal is to 
                continue growing and evolving, always putting our customers&apos; needs first.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image src="/rental.webp" alt="Our future" width={600} height={400} className="rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </main>
      
    </div>
    </div>
  )
}