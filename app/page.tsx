'use client'

import { Mail, Phone, MapPin, Users, Home as HomeIcon, Bath, Wifi, Car } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          <h1 className="font-serif text-2xl tracking-tight">Liv's Hus</h1>
          <a 
            href="#contact" 
            className="px-6 py-2.5 bg-ocean-500 text-white text-sm font-medium tracking-wide hover:bg-ocean-600 transition-colors"
          >
            Inquire
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 z-10" />
        <img
          src="/images/white-mountain-views.webp"
          alt="Liv's Hus - Pool with White Mountains view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <p className="text-sand-100 text-sm tracking-[0.3em] uppercase mb-6 font-light">
              Apokoronas, Crete
            </p>
            <h2 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight">
              Where olive groves<br />meet the Aegean
            </h2>
            <p className="text-sand-100 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              A serene retreat in the heart of Crete's countryside, where authentic island living awaits
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-ocean-500 text-sm tracking-[0.2em] uppercase mb-6 font-medium">
            The Experience
          </p>
          <h3 className="font-serif text-4xl md:text-5xl mb-8 leading-tight text-balance">
            Your private sanctuary in Apokoronas
          </h3>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Discover the essence of Cretan hospitality in Liv's Hus, a thoughtfully designed 2-bedroom villa 
              that captures the soul of the Mediterranean. Surrounded by ancient olive groves and within reach 
              of pristine beaches, this retreat offers the perfect balance of tranquility and adventure.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Wake to the gentle rustling of olive trees, spend your days exploring charming villages and 
              secluded coves, and return to your private haven where every detail has been considered for 
              your comfort.
            </p>
          </div>
        </div>
      </section>

      {/* Property Features */}
      <section className="py-24 px-6 lg:px-12 bg-sand-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <img
                src="/images/open-plan.webp"
                alt="Open plan living space"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <p className="text-ocean-500 text-sm tracking-[0.2em] uppercase mb-4 font-medium">
                The Villa
              </p>
              <h4 className="font-serif text-3xl md:text-4xl mb-6">
                Designed for authentic living
              </h4>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our villa seamlessly blends traditional Cretan architecture with contemporary comfort. 
                Whitewashed walls, terracotta tiles, and expansive windows frame views of olive groves 
                and distant mountains.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-ocean-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Sleeps 4</p>
                    <p className="text-sm text-gray-500">2 Bedrooms</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Bath className="w-5 h-5 text-ocean-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">2 Bathrooms</p>
                    <p className="text-sm text-gray-500">Modern amenities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <HomeIcon className="w-5 h-5 text-ocean-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">120 m²</p>
                    <p className="text-sm text-gray-500">Living space</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-ocean-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Parking</p>
                    <p className="text-sm text-gray-500">Private drive</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div className="border-t border-sand-200 pt-16">
            <h5 className="font-serif text-2xl mb-8">Amenities</h5>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <Wifi className="w-6 h-6 text-ocean-500 mb-3" />
                <h6 className="font-medium mb-2">High-speed WiFi</h6>
                <p className="text-sm text-gray-600">Stay connected throughout the villa</p>
              </div>
              <div>
                <svg className="w-6 h-6 text-ocean-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <h6 className="font-medium mb-2">Fully equipped kitchen</h6>
                <p className="text-sm text-gray-600">Everything for home-cooked meals</p>
              </div>
              <div>
                <svg className="w-6 h-6 text-ocean-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <h6 className="font-medium mb-2">Outdoor terrace</h6>
                <p className="text-sm text-gray-600">Perfect for al fresco dining</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <p className="text-ocean-500 text-sm tracking-[0.2em] uppercase mb-4 font-medium">
                Location
              </p>
              <h4 className="font-serif text-3xl md:text-4xl mb-6">
                The heart of authentic Crete
              </h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                Apokoronas is a region of rare beauty, where traditional villages cling to hillsides and 
                olive groves stretch to the horizon. Our villa sits at the crossroads of culture and nature.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-ocean-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">5 minutes to traditional tavernas</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-ocean-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">15 minutes to pristine beaches</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-ocean-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">30 minutes to Chania's Venetian harbor</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="/images/Basseng_med_sjø.webp"
                alt="Pool with sea and olive groves view"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 px-6 lg:px-12 bg-sand-50">
        <div className="max-w-7xl mx-auto">
          <h4 className="font-serif text-3xl md:text-4xl mb-12 text-center">Gallery</h4>
          <div className="grid md:grid-cols-3 gap-6">
            <img
              src="/images/main-bedroom.webp"
              alt="Main bedroom"
              className="w-full h-80 object-cover"
            />
            <img
              src="/images/new-kitchen.webp"
              alt="Modern kitchen"
              className="w-full h-80 object-cover"
            />
            <img
              src="/images/always-shade.webp"
              alt="Shaded outdoor terrace"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-ocean-500 text-sm tracking-[0.2em] uppercase mb-4 font-medium">
            Inquire
          </p>
          <h4 className="font-serif text-3xl md:text-4xl mb-6">
            Begin your Cretan escape
          </h4>
          <p className="text-gray-600 leading-relaxed mb-12">
            We'd love to hear about your plans. Reach out to check availability or ask any questions.
          </p>
          
          <div className="space-y-6 mb-12">
            <a 
              href="mailto:hello@harikacreative.com" 
              className="flex items-center justify-center gap-3 text-gray-700 hover:text-ocean-500 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>hello@harikacreative.com</span>
            </a>
            <a 
              href="tel:+306912345678" 
              className="flex items-center justify-center gap-3 text-gray-700 hover:text-ocean-500 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+30 691 234 5678</span>
            </a>
          </div>

          {/* Simple Contact Form */}
          <form className="space-y-6 max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-6 py-4 border border-sand-300 focus:outline-none focus:border-ocean-500 transition-colors"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-6 py-4 border border-sand-300 focus:outline-none focus:border-ocean-500 transition-colors"
            />
            <textarea
              placeholder="Tell us about your travel plans"
              rows={5}
              className="w-full px-6 py-4 border border-sand-300 focus:outline-none focus:border-ocean-500 transition-colors resize-none"
            />
            <button 
              type="submit"
              className="w-full px-8 py-4 bg-ocean-500 text-white font-medium tracking-wide hover:bg-ocean-600 transition-colors"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-12 border-t border-sand-200">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p className="font-serif text-xl mb-4">Liv's Hus</p>
          <p>© 2025 Hárika Creative. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
