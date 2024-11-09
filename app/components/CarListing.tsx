'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const cars = [
  {
    id: 1,
    name: 'Renault Megan',
    price: 169,
    image: '/renault.jpg',
    slug: 'renault-megan'
  },
  {
    id: 2,
    name: 'Octavia',
    price: 139,
    image: '/octavia.jpg',
    slug: 'octavia'
  },
  {
    id: 3,
    name: 'Golf 8',
    price: 139,
    image: '/golf.jpg',
    slug: 'golf-8'
  },
  {
    id: 4,
    name: 'Voyager GT',
    price: 259,
    image: '/camper.jpg',
    slug: 'voyager-gt'
  },
  {
    id: 5,
    name: 'Viper SXT',
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
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-2">Our Fleet</h2>
        <p className="text-xl text-center mb-12 text-gray-400">Explore our perfect and extensive fleet</p>
        
        <div className="relative">
          <div className="flex overflow-hidden">
            {cars.map((car, index) => (
              <div
                key={car.id}
                className="w-full flex-shrink-0 transition-all duration-500 ease-out transform px-4"
                style={{
                  transform: `translateX(-${startIndex * 100}%)`,
                }}
              >
                <Link href={`/cars/${car.slug}`}>
                  <div className="relative group cursor-pointer">
                    <div className="relative h-[600px] overflow-hidden rounded-lg">
                      <Image
                        src={car.image}
                        alt={car.name}
                        layout="fill"
                        objectFit="cover"
                        className="transform transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex justify-between items-end">
                        <h3 className="text-3xl font-bold text-white">{car.name}</h3>
                        <p className="text-2xl font-bold text-emerald-500">${car.price}/day</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          <button
            onClick={prevCars}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm border border-white/10 hover:bg-black/70 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextCars}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm border border-white/10 hover:bg-black/70 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}