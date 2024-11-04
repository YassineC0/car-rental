import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import Header from '../components/Header'
import Footer from '../components/Footer'
import React from 'react'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Header />
      
      <div className="container mx-auto px-4 py-16"> {/* Added pt-32 for top padding */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-black text-white rounded-3xl p-8 relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-4xl font-bold mb-4">Contact information</h1>
              <p className="text-gray-400 mb-8">Say something to start a live chat!</p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="text-orange-500" />
                  <span>(+212) 789 854 856</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-orange-500" />
                  <span>contact@novaride.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-orange-500" />
                  <span>Casablanca Nouaceur, Morocco</span>
                </div>
              </div>

              <div className="flex gap-4 mt-12">
                <a href="#" className="p-2 rounded-full border border-gray-700 hover:border-orange-500">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 rounded-full border border-gray-700 hover:border-orange-500">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 rounded-full border border-gray-700 hover:border-orange-500">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 rounded-full border border-gray-700 hover:border-orange-500">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Background circles */}
            <div className="absolute bottom-0 right-0 opacity-10">
              <div className="w-40 h-40 rounded-full bg-gray-500 -mb-20 -mr-20" />
              <div className="w-40 h-40 rounded-full bg-gray-600 absolute -top-20 -right-20" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">First Name</label>
                <Input placeholder="Enter Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name</label>
                <Input placeholder="Enter Your Name" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="Enter Your Email" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <Input type="tel" placeholder="Enter Your Number" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <Textarea placeholder="Write Your Message" className="min-h-[150px]" />
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8">
              Send Message
            </Button>
          </div>
        </div>

        {/* Location Section */}
        <section className="mt-24">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-semibold">✱ Location</span>
            <h2 className="text-4xl font-bold mt-2">How to reach our location</h2>
          </div>
          <div className="h-[500px] w-full rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13299.072142994497!2d-7.589!3d33.367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda6255af2f0f4d1%3A0x76374c6b26d5b32c!2sNouaceur%2C%20Morocco!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}