import React from 'react'
import { Settings, BadgeDollarSign, HeadphonesIcon, Award, Users, Car } from 'lucide-react'

export default function About() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Video background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        {/* TODO: Replace with your video path */}
        <source src="/bentley.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/70" />
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center text-white mb-16">About Us</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative w-full aspect-[4/3] max-w-[600px] mx-auto">
            {/* You can add an image here if needed */}
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                Feel The Best Experience With Our Rental Deals
              </h2>
            </div>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-lg bg-white/10">
                  <BadgeDollarSign className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Deals for every budget</h3>
                  <p className="text-gray-300">
                    Looking for a car rental for your next trip? Here are some tips to help you find
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-lg bg-white/10">
                  <Settings className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Best price guaranteed</h3>
                  <p className="text-gray-300">
                    Looking for a car rental for your next trip? Here are some tips to help you find
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-lg bg-white/10">
                  <HeadphonesIcon className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
                  <p className="text-gray-300">
                    Looking for a car rental for your next trip? Here are some tips to help you find
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            At our core, we strive to provide unparalleled car rental experiences that combine luxury, convenience, and affordability. 
            Our mission is to empower our customers with the freedom of mobility, ensuring every journey is as exciting as the destination itself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Award className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-white mb-2">Excellence in Service</h4>
            <p className="text-gray-300">Recognized for our commitment to customer satisfaction and service quality.</p>
          </div>
          <div className="text-center">
            <Users className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-white mb-2">Growing Community</h4>
            <p className="text-gray-300">Over 100,000 satisfied customers and counting, building lasting relationships.</p>
          </div>
          <div className="text-center">
            <Car className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-white mb-2">Diverse Fleet</h4>
            <p className="text-gray-300">A wide range of vehicles to suit every need, from economy to luxury.</p>
          </div>
        </div>
      </div>
    </section>
  )
}