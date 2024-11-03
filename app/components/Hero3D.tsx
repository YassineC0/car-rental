'use client'

import { motion } from 'framer-motion'

export default function Hero3D() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* TODO: Replace with actual video URL */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/fastcar.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-50" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Looking to save more on your rental car?
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-center max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Whether you're planning a weekend getaway, a business trip, or just need a reliable ride
          for the day, we offer a wide range of vehicles to suit your needs.
        </motion.p>
      </div>
    </div>
  )
}