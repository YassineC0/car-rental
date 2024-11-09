'use client'

import Image from 'next/image'
import { Button } from './ui/button'
import React, { useEffect, useRef, useState } from 'react'

export default function CarCategories() {
  const [visibleCards, setVisibleCards] = useState(new Set())

  const onCardVisible = (index: number) => {
    setVisibleCards(prev => new Set(prev).add(index))
  }

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-red-500 font-semibold">Categories</span>
          <h2 className="text-4xl font-bold mt-2">Browse By Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CategoryCard 
              key={index} 
              category={category} 
              index={index}
              onVisible={onCardVisible}
              isVisible={visibleCards.has(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function CategoryCard({ category, index, onVisible, isVisible }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => onVisible(index), index * 200) // Staggered effect
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
      }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [index, onVisible])

  return (
    <div
      ref={cardRef}
      className={`bg-black rounded-lg overflow-hidden transform transition-all duration-700 hover:scale-105
                  shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]
                  ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
    >
      <div className="relative h-80">
        <Image
          src={category.image}
          alt={category.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 text-white">{category.name}</h3>
        <p className="text-gray-400 mb-4">{category.description}</p>
        <Button className="bg-red-600 hover:bg-red-700 text-white w-full transition-colors duration-300">
          View Cars
        </Button>
      </div>
    </div>
  )
}

const categories = [
  {
    name: "Luxury Cars",
    description: "Premium vehicles for those who appreciate the finer things in life.",
    image: "/porshe.jpg"
  },
  {
    name: "Sports Cars",
    description: "High-performance vehicles for an exhilarating driving experience.",
    image: "/bmw.jpg"
  },
  {
    name: "SUVs",
    description: "Spacious and versatile vehicles perfect for any adventure.",
    image: "/sedan.jpg"
  },
  {
    name: "Travel Cars",
    description: "Spacious and versatile vehicles perfect for any adventure.",
    image: "/travel.jpg"
  },
  {
    name: "Sedans",
    description: "Spacious and versatile vehicles perfect for any adventure.",
    image: "/octavia.jpg"
  },
  {
    name: "Super Fast Cars",
    description: "Spacious and versatile vehicles perfect for any adventure.",
    image: "/porshe911.jpg"
  }
]