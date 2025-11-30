import React from "react";
import { Heart, Info } from "lucide-react";

const HotelCard = ({ image, price, discount, location, rating, images }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Image Section */}
      <div className="relative">
        <img
          src={image}
          alt="Radisson Blu Hotel"
          className="w-full h-48 object-cover"
        />
        <button className="absolute top-3 left-3 bg-white rounded-full p-2 hover:bg-gray-100">
          <Heart className="w-5 h-5 text-gray-600" />
        </button>
        <div className="absolute bottom-3 left-3 flex gap-1">
          {[1, 2, 3, 4].map((dot) => (
            <div
              key={dot}
              className={`w-2 h-2 rounded-full ${
                dot === 1 ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
        <div className="absolute bottom-3 right-3 flex gap-2">
          <div className="bg-black/60 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
            <span className="text-sm">📷</span>
            <span>{images}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-semibold text-lg text-gray-900">
              Radisson Blu
            </h3>
            <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{location}</span>
            </div>
          </div>
        </div>

        {/* Price Section */}
        <div className="mb-3">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">₹ {price}</span>
            <span className="text-sm text-red-500 font-semibold">
              {discount}
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Includes Taxes And Charges
          </p>
        </div>

        {/* Features */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
              <svg
                className="w-3 h-3 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="text-green-600">Trip Sustainable Level: 3</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Info className="w-4 h-4 text-red-500" />
            <span className="text-red-500">We Have 5 Left At 12% Off</span>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full text-blue-600 font-semibold text-sm hover:text-blue-700 flex items-center justify-center gap-1">
          See Availability
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const HotelFavourites = () => {
  const hotels = [
    {
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      price: 140,
      discount: "11% Off",
      location: "La Kalsa, Palermo",
      rating: 4,
      images: 15,
    },
    {
      image:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
      price: 135,
      discount: "15% Off",
      location: "La Kalsa, Palermo",
      rating: 4,
      images: 12,
    },
    {
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
      price: 110,
      discount: "12% Off",
      location: "La Kalsa, Palermo",
      rating: 4,
      images: 18,
    },
    {
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
      price: 145,
      discount: "9% Off",
      location: "La Kalsa, Palermo",
      rating: 4,
      images: 20,
    },
    {
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
      price: 160,
      discount: "18% Off",
      location: "La Kalsa, Palermo",
      rating: 4,
      images: 16,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Hotel Favourites
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel, index) => (
            <HotelCard key={index} {...hotel} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelFavourites;
