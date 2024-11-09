'use client'

import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import { Car, MapPin, UserCheck, Shield } from 'lucide-react'

export default function WhyChooseUs() {
  const [visibleFeatures, setVisibleFeatures] = useState(new Set())

  const onFeatureVisible = (index: number) => {
    setVisibleFeatures(prev => new Set(prev).add(index))
  }

  return (
    <section id="why-choose-us" className="py-16 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-red-500 font-semibold">✱ Why Choose Us</span>
          <h2 className="text-4xl font-bold mt-2">
            Unmatched quality and service<br />for your needs
          </h2>
        </div>

        <div className="relative">
          {/* Central image */}
          <div className="relative w-[600px] h-[600px] mx-auto">
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <Image
                src="/driving.jpg"
                alt="Luxury car"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>

          {/* Features */}
          <div className="absolute inset-0">
            <div className="grid grid-cols-2 gap-8 h-full">
              {features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  feature={feature}
                  index={index}
                  onVisible={onFeatureVisible}
                  isVisible={visibleFeatures.has(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureItem({ feature, index, onVisible, isVisible }) {
  const featureRef = useRef(null)

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

    if (featureRef.current) {
      observer.observe(featureRef.current)
    }

    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current)
      }
    }
  }, [index, onVisible])

  return (
    <div
      ref={featureRef}
      className={`flex items-start transition-all duration-700 ${
        index % 2 === 0 ? 'justify-end pr-[300px]' : 'pl-[300px]'
      } ${
        index < 2 ? 'self-start pt-20' : 'self-end pb-20'
      } ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-xs">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
            {feature.icon}
          </div>
          <h3 className="text-xl font-semibold">{feature.title}</h3>
        </div>
        <p className="text-gray-400">{feature.description}</p>
      </div>
    </div>
  )
}

const features = [
  {
    title: 'Extensive Fleet Options',
    description: 'Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euismod Eu. Phasellus Hendrerit, Massa',
    icon: <Car className="w-6 h-6 text-red-500" aria-hidden="true" />
  },
  {
    title: 'Convenient Locations',
    description: 'Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euismod Eu. Phasellus Hendrerit, Massa',
    icon: <MapPin className="w-6 h-6 text-red-500" aria-hidden="true" />
  },
  {
    title: 'Exceptional Customer Service',
    description: 'Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euismod Eu. Phasellus Hendrerit, Massa',
    icon: <UserCheck className="w-6 h-6 text-red-500" aria-hidden="true" />
  },
  {
    title: 'Reliability And Safety',
    description: 'Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euismod Eu. Phasellus Hendrerit, Massa',
    icon: <Shield className="w-6 h-6 text-red-500" aria-hidden="true" />
  }
]