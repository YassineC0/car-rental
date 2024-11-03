'use client'

import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

interface Car {
  id: number;
  name: string;
  type: string;
  doors: number;
  passengers: number;
  price: number;
  image: string;
  slug: string;
}

interface CarCardProps {
  car: Car;
  startIndex: number;
}

export default function CarCard({car, startIndex}: CarCardProps) {
  return (
    <div
      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex-shrink-0 px-2 transition-transform duration-300 ease-in-out"
      style={{ transform: `translateX(-${startIndex * 100}%)` }}
    >
      <Link href={`/cars/${car.slug}`} className="block">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image src={car.image} alt={car.name} width={300} height={200} className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">{car.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{car.type}</p>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Doors: {car.doors}</span>
              <span>Passengers: {car.passengers}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold">${car.price}<span className="text-sm font-normal">/Per Day</span></span>
              <Button size="sm" variant="outline">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}