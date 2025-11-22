import React, { useState } from "react";

const offers = [
  {
    id: 1,
    category: "Hotels",
    image: "/images/beach.jpg",
    title: "Beach Escape",
  },
  {
    id: 2,
    category: "Flights",
    image: "/images/cliff.jpg",
    title: "Cliffside Retreat",
  },
  {
    id: 3,
    category: "Hotels",
    image: "/images/van.jpg",
    title: "Van by the Ocean",
  },
  {
    id: 4,
    category: "Multi",
    image: "/images/speedboat.jpg",
    title: "Lake Adventure",
  },
  {
    id: 5,
    category: "Flights",
    image: "/images/eiffel.jpg",
    title: "Paris Nights",
  },
  {
    id: 6,
    category: "Multi",
    image: "/images/desert.jpg",
    title: "Desert Journey",
  },
];

const categories = ["All", "Hotels", "Flights", "Multi"];

const destinations = [
  "Berlin",
  "Paris",
  "Madrid",
  "Barcelona",
  "Rom",
  "Milan",
  "Istanbul",
  "Dubai",
  "Amsterdam",
  "New York",
  "Majorca",
  "Teneriffe",
];

const categoriesOffers = [
  { name: "Flight", image: "/images/flight.jpg", icon: "✈️", count: 123 },
  { name: "Location", image: "/images/location.jpg", icon: "🗺️", count: 123 },
  { name: "Hotel", image: "/images/hotel.jpg", icon: "🏨", count: 123 },
  { name: "Package", image: "/images/package.jpg", icon: "📦", count: 123 },
  { name: "Seasonal", image: "/images/seasonal.jpg", icon: "🍂", count: 123 },
  { name: "Camps", image: "/images/camps.jpg", icon: "🏕️", count: 123 },
  {
    name: "Backpacking",
    image: "/images/backpacking.jpg",
    icon: "🎒",
    count: 123,
  },
  { name: "Hostels", image: "/images/hostels.jpg", icon: "🛌", count: 123 },
];

export const SpecialOffersSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredOffers =
    selectedCategory === "All"
      ? offers
      : offers.filter((offer) => offer.category === selectedCategory);

  return (
    <>
      <section className="px-6 py-10 bg-[#F5F0E6]">
        <h2 className="text-2xl font-bold text-[#1E2A38] mb-6">
          Special Offers
        </h2>

        {/* Filters */}
        <div className="flex gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === cat
                  ? "bg-[#F4C430] text-white"
                  : "bg-white text-[#1E2A38] border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOffers.map((offer) => (
            <div
              key={offer.id}
              className="relative rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                <h3 className="text-white text-lg font-semibold">
                  {offer.title}
                </h3>
                <button className="mt-2 text-[#F4C430] font-medium hover:underline">
                  Deals Discover ➜
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-10 bg-white">
        <h2 className="text-2xl font-bold text-[#1E2A38] mb-2">
          Explore Stays In Trending Destinations
        </h2>
        <p className="text-[#F4C430] mb-6 text-lg font-medium">
          Find Hot Stays!!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {destinations.map((city, index) => (
            <div
              key={index}
              className="border rounded-lg shadow hover:shadow-lg overflow-hidden"
            >
              <img
                src={`/images/${city.toLowerCase()}.jpg`}
                alt={city}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#1E2A38]">{city}</h3>
                <span className="text-sm text-gray-500">SIDE</span>
                <p className="text-sm text-gray-600 mt-2">
                  Wed 25 Jan – Fri 27 Jan
                  <br />
                  2 guests · Entire home · 2 beds
                  <br />
                  Surroundings: city & art
                </p>
                <div className="mt-3 flex gap-2 text-[#F4C430] text-sm">
                  <span>🛏️</span>
                  <span>🏙️</span>
                  <span>🎨</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-10 bg-[#F5F0E6]">
        <h2 className="text-2xl font-bold text-[#1E2A38] mb-2">
          Compare The Highest Reviewed Past Offers
        </h2>
        <p className="text-[#F4C430] mb-6 text-lg font-medium">
          Browse By Type
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {categoriesOffers.map((cat, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow hover:shadow-lg bg-white"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-[#1E2A38]">
                  {cat.name}
                </h3>
                <div className="text-2xl mt-2">{cat.icon}</div>
                <p className="text-sm text-gray-600 mt-1">{cat.count} offers</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
