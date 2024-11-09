'use client'

import { motion } from 'framer-motion'
import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { cn } from '../lib/utils'

export default function Hero3D() {
  const [rentalType, setRentalType] = React.useState<'distance' | 'hourly' | 'flat'>('distance')

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/mclaren.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-60" />

      <div className="relative z-10 h-full flex flex-col items-start justify-center text-white px-4 max-w-7xl mx-auto">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Premium Car Rental Services
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl max-w-2xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Affordable and flexible car rentals for every journey. Choose from a wide range
          of vehicles for hassle-free travel experiences.
        </motion.p>

        <motion.div
          className="w-full max-w-xl bg-black/80 backdrop-blur-sm p-6 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <div className="flex gap-2 mb-6">
            {(['distance', 'hourly', 'flat'] as const).map((type) => (
              <Button
                key={type}
                onClick={() => setRentalType(type)}
                variant="ghost"
                className={cn(
                  "border border-emerald-500/20 hover:bg-emerald-500/20 text-white",
                  rentalType === type && "bg-emerald-500/20"
                )}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </Button>
            ))}
          </div>

          <div className="space-y-4">
            <Input
              placeholder="Pickup address"
              className="bg-transparent border-white/20 text-white placeholder:text-white/50"
            />
            <Input
              placeholder="Drop off address"
              className="bg-transparent border-white/20 text-white placeholder:text-white/50"
            />
            <div className="grid grid-cols-2 gap-4">
              <Input
                type="date"
                placeholder="Pickup date"
                className="bg-transparent border-white/20 text-white placeholder:text-white/50"
              />
              <Input
                type="time"
                placeholder="Pickup time"
                className="bg-transparent border-white/20 text-white placeholder:text-white/50"
              />
            </div>
            <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">
              Search now
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="flex items-center gap-4 mt-8 text-sm text-white/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <span>EASILY</span>
          <span>•</span>
          <span>SEARCH</span>
          <span>•</span>
          <span>BOOK</span>
          <span>•</span>
          <span>ENJOY</span>
        </motion.div>
      </div>
    </div>
  )
}