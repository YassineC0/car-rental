'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import CarCard from './CarCard'

export const cars = [
  {
    id: 1,
    name: 'Renault Megan',
    type: 'Coupe Car',
    doors: 4,
    passengers: 2,
    price: 169,
    image: '/renault.jpg',
    slug: 'renault-megan'
  },
  {
    id: 2,
    name: 'Octavia',
    type: 'Coupe Car',
    doors: 4,
    passengers: 2,
    price: 139,
    image: '/octavia.jpg',
    slug: 'octavia'
  },
  {
    id: 3,
    name: 'Golf 8',
    type: 'Convertible Car',
    doors: 4,
    passengers: 2,
    price: 139,
    image: '/golf.jpg',
    slug: 'golf-8'
  },
  {
    id: 4,
    name: 'Voyager GT',
    type: 'Luxury Car',
    doors: 4,
    passengers: 1,
    price: 259,
    image: '/travel.jpg',
    slug: 'voyager-gt'
  },
  {
    id: 5,
    name: 'Viper SXT',
    type: 'Coupe Car',
    doors: 4,
    passengers: 2,
    price: 329,
    image: '/porshe911.jpg',
    slug: 'viper-sxt'
  },
]

export default function CarListing() {
  const [startIndex, setStartIndex] = useState(0)

  const nextCars = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % cars.length)
  }

  const prevCars = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + cars.length) % cars.length)
  }

  return (
    <section id="car-listing" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Our Fleets</h2>
        <p className="text-xl text-center mb-8">Explore our perfect and extensive fleet</p>
        <div className="relative">
          <div className="flex overflow-hidden">
            {cars.map((car, index) => (
              <CarCard car={car} startIndex={startIndex} key={car.id}></CarCard>
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-2 transform -translate-y-1/2"
            onClick={prevCars}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-2 transform -translate-y-1/2"
            onClick={nextCars}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}