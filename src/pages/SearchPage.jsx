import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const HotelOffersPage = () => {
  const specialOffers = [
    {
      title: "Holiday Discounts",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80"
    },
    {
      title: "Early Booking Discounts",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
    },
    {
      title: "Last Minute Deals",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80"
    },
    {
      title: "Family Packages",
      image: "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?w=800&q=80"
    },
    {
      title: "Birthday Or Anniversary Specials",
      image: "https://images.unsplash.com/photo-1464983308776-8f2b12d3a0bc?w=800&q=80"
    },
    {
      title: "Summer Escapades",
      image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80"
    }
  ];

  const comparisons = [
    {
      text: "We Make Great Wine That Highest Achieve Outstanding Offers, Ensuring That Every Bottle Embodies Our Pursuit Of Excellence",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80"
    },
    {
      text: "Begin The New Year With Sunny Intervals And Unforgettable Memories Down The Bay",
      image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80"
    }
  ];

  const testimonials = [
    {
      name: "Olivia",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      rating: 5,
      text: "Had a wonderful book trip. Kyoto made the whole process smooth. Everything went exactly as promised."
    },
    {
      name: "Martin",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
      rating: 5,
      text: "Booking a trip with Kyoto was easy and straight forward. I'd never booked a hotel online before."
    },
    {
      name: "Isabelle",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
      rating: 5,
      text: "I discovered Kyoto and was really impressed with how easy it was. I think I'll be using them from now."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Special Offers Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Special Offers</h2>
          
          <div className="grid grid-cols-3 gap-4">
            {specialOffers.map((offer, index) => (
              <div key={index} className="relative h-48 rounded-lg overflow-hidden group cursor-pointer">
                <img 
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <button className="absolute bottom-4 left-4 bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-700 flex items-center gap-2">
                  {offer.title} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Make A Comparison Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Make A Comparison</h2>
          
          <div className="grid grid-cols-2 gap-6">
            {comparisons.map((item, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
                <img 
                  src={item.image}
                  alt="Comparison"
                  className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-lg leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="relative h-96 rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1600&q=80"
            alt="Beach background"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-6 px-12 w-full max-w-6xl">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-white"
                    />
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed">{testimonial.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelOffersPage;