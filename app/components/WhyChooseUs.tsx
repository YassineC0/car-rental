import Image from 'next/image'
import React from 'react'
import { Car, MapPin, UserCheck, Shield } from 'lucide-react'

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-orange-500 font-semibold">✱ Why Choose Us</span>
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
                <div
                  key={index}
                  className={`flex items-start ${
                    index % 2 === 0 ? 'justify-end pr-[300px]' : 'pl-[300px]'
                  } ${
                    index < 2 ? 'self-start pt-20' : 'self-end pb-20'
                  }`}
                >
                  <div className="max-w-xs">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const features = [
  {
    title: 'Extensive Fleet Options',
    description: 'Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euismod Eu. Phasellus Hendrerit, Massa',
    icon: <Car className="w-6 h-6 text-orange-500" />
  },
  {
    title: 'Convenient Locations',
    description: 'Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euismod Eu. Phasellus Hendrerit, Massa',
    icon: <MapPin className="w-6 h-6 text-orange-500" />
  },
  {
    title: 'Exceptional Customer Service',
    description: 'Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euismod Eu. Phasellus Hendrerit, Massa',
    icon: <UserCheck className="w-6 h-6 text-orange-500" />
  },
  {
    title: 'Reliability And Safety',
    description: 'Quisque Sollicitudin Feugiat Risus, Eu Posuere Ex Euismod Eu. Phasellus Hendrerit, Massa',
    icon: <Shield className="w-6 h-6 text-orange-500" />
  }
]