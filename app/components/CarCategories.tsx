import Image from 'next/image'
import { Button } from './ui/button'

export default function CarCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-orange-500 font-semibold">Categories</span>
          <h2 className="text-4xl font-bold mt-2">Browse By Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
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
                <h3 className="text-2xl font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-black w-full">
                  View Cars
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
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