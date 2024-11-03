import Image from 'next/image'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

export default function About() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square relative">
              <div className="absolute w-4/5 h-4/5 rounded-full overflow-hidden top-0 left-0">
                <Image
                  src="/sedan.jpg"
                  alt="Car rental customer"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute w-4/5 h-4/5 rounded-full overflow-hidden bottom-0 right-0">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Car rental service"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute text-primary text-6xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                ✱
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <span className="text-primary font-semibold">About Us</span>
              <h2 className="text-4xl font-bold mt-2 mb-4 text-black">Your trusted partner in reliable car rental</h2>
              <p className="text-gray-600">
                Aqestic Optio Amet A Ququam Saepe Aliquid Voluate Dicta Fuga Dolor Saerror Sed
                Earum A Magni Soluta Quam Minus Dolor Dolor
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-lg bg-primary/10">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black">Easy Booking Process</h3>
                  <p className="text-gray-600 mt-1">
                    We Have Optimized The Booking Process So That Our Clients Can
                    Experience The Easiest And The Safest Service
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-lg bg-primary/10">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black">Convenient Pick-Up & Return Process</h3>
                  <p className="text-gray-600 mt-1">
                    We Have Optimized The Booking Process So That Our Clients Can
                    Experience The Easiest And The Safest Service
                  </p>
                </div>
              </div>
            </div>

            <Button className="bg-primary text-white hover:bg-primary/90">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}