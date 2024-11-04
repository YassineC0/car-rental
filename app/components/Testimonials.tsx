'use client'

import { Star } from 'lucide-react'
import { Button } from './ui/button'
import React from 'react'

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-orange-500 font-semibold">✱ Testimonials</span>
          <h2 className="text-4xl font-bold mt-2">
            What our customers are saying about us
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? 'text-orange-500 fill-orange-500'
                        : 'text-gray-300 fill-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.text}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 gap-4">
          <Button
            variant="outline"
            className="rounded-full bg-orange-500 text-white hover:bg-orange-600"
          >
            Previous
          </Button>
          <Button
            variant="outline"
            className="rounded-full bg-orange-500 text-white hover:bg-orange-600"
          >
            Next
          </Button>
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    rating: 4,
    text: "Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive.",
    image: "/damien.jpg",
    name: "Alis White",
    role: "Project Manager"
  },
  {
    rating: 5,
    text: "Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive.",
    image: "/kevin.jpg",
    name: "Floyd Miles",
    role: "Project Manager"
  },
  {
    rating: 5,
    text: "Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive.",
    image: "/macron.jpg",
    name: "Annette Black",
    role: "Project Manager"
  }
]