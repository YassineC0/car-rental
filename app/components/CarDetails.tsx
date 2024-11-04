'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { ArrowRight, MessageCircle, Plus, Minus, Check } from 'lucide-react'
import React from 'react'

interface Car {
  id: number
  name: string
  type: string
  doors: number
  passengers: number
  price: number
  image: string
  slug: string
}

interface CarDetailsProps {
  car: Car
}

interface PolicyProps {
  title: string
  content: string
}

function Policy({ title, content }: PolicyProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border rounded-lg">
      <button
        className="w-full px-6 py-4 flex items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{title}</span>
        {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-600">{content}</p>
        </div>
      )}
    </div>
  )
}

export default function CarDetails({ car }: CarDetailsProps) {
  const [activeImage, setActiveImage] = useState(0)
  const images = [car.image, '/car-interior.jpg', '/car-back.jpg', '/car-side.jpg']

  const amenities = [
    'Music System',
    'Toolkit',
    'Abs System',
    'Bluetooth',
    'Full Boot Space',
    'Usb Charger',
    'Aux Input',
    'Spare Tyre',
    'Power Steering',
    'Power Windows'
  ]

  const policies = [
    {
      title: "Driver's License Requirements",
      content: "Valid driver's license required, minimum age of 21 years, minimum 2 years of driving experience. International driving permit required for non-UAE licenses."
    },
    {
      title: "Insurance and Coverage policy",
      content: "Comprehensive insurance included, covering accidents and theft. Deductible applies for damages. Additional insurance options available for reduced liability."
    },
    {
      title: "Available payment Methods",
      content: "We accept credit cards (Visa, MasterCard, American Express), debit cards, and cash payments. Security deposit required for all rentals."
    },
    {
      title: "Cancellation and Modification policy",
      content: "Free cancellation up to 24 hours before pickup. Modifications subject to availability. Late cancellations may incur charges up to one day's rental fee."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column - Image Carousel */}
        <div className="relative rounded-xl overflow-hidden">
          <div className="aspect-w-16 aspect-h-9">
            <Image
              src={images[activeImage]}
              alt={car.name}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === activeImage ? 'bg-orange-500' : 'bg-white'
                }`}
                onClick={() => setActiveImage(index)}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right Column - Car Details */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h1 className="text-3xl font-bold mb-4">{car.name}</h1>
          <div className="text-4xl font-bold text-orange-500 mb-6">${car.price}<span className="text-lg font-normal text-gray-600">/Per Day</span></div>

          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span role="img" aria-label="Doors">🚪</span>
                <span>Doors</span>
              </div>
              <span className="font-semibold">{car.doors}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span role="img" aria-label="Passengers">👥</span>
                <span>Passengers</span>
              </div>
              <span className="font-semibold">{car.passengers}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span role="img" aria-label="Transmission">⚙️</span>
                <span>Transmission</span>
              </div>
              <span className="font-semibold">Auto</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span role="img" aria-label="Age">📅</span>
                <span>Age</span>
              </div>
              <span className="font-semibold">2 years</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span role="img" aria-label="Luggage">🧳</span>
                <span>Luggage</span>
              </div>
              <span className="font-semibold">2 bags</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span role="img" aria-label="Air Condition">❄️</span>
                <span>Air Condition</span>
              </div>
              <span className="font-semibold">Yes</span>
            </div>
          </div>

          <div className="flex space-x-4">
            <Button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white">
              Book Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="bg-green-500 hover:bg-green-600 text-white p-2">
              <MessageCircle className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Amenities Section */}
      <div className="mt-16">
        <div className="mb-8">
          <span className="text-orange-500 font-semibold">✱ Amenities</span>
          <h2 className="text-3xl font-bold mt-2">Premium amenities and features</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="rounded-full bg-orange-500/10 p-1">
                <Check className="h-4 w-4 text-orange-500" />
              </div>
              <span>{amenity}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Policies Section */}
      <div className="mt-16">
        <div className="mb-8">
          <span className="text-orange-500 font-semibold">✱ Rental Conditions</span>
          <h2 className="text-3xl font-bold mt-2">Policies and agreement</h2>
        </div>
        <div className="space-y-4">
          {policies.map((policy, index) => (
            <Policy key={index} title={policy.title} content={policy.content} />
          ))}
        </div>
      </div>

      {/* Additional Features */}
      <div className="grid md:grid-cols-2 gap-6 mt-16">
        <div className="bg-white p-6 rounded-xl shadow-sm flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
            <span className="text-2xl" role="img" aria-label="Speedometer">🚗</span>
          </div>
          <div>
            <h3 className="font-semibold">Unlimited KMs</h3>
            <p className="text-gray-600">Endless Km with no extra charge</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
            <span className="text-2xl" role="img" aria-label="Lock">🔒</span>
          </div>
          <div>
            <h3 className="font-semibold">Insurance Included</h3>
            <p className="text-gray-600">Full coverage for peace of mind</p>
          </div>
        </div>
      </div>
    </div>
  )
}