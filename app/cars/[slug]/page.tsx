'use client'

import { useParams } from 'next/navigation'
import { cars } from '../../components/CarListing'
import CarDetails from '../../components/CarDetails'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function CarPage() {
  const params = useParams()
  const car = cars.find(c => c.slug === params.slug)

  if (!car) {
    return <div>Car not found</div>
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-40"> {/* Added padding-top here */}
        <CarDetails car={car} />
      </main>
      <Footer />
    </div>
  )
}