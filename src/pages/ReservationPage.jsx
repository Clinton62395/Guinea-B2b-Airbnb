import React, { useState } from "react";
import {
  Heart,
  MapPin,
  Users,
  Calendar,
  ChevronDown,
  ChevronRight,
  X,
} from "lucide-react";
import { DaterPeaker } from "../components/DaterPeaker";
import { Link } from "react-router-dom";
import colors from "../components/colorsPalette";

const HotelCard = ({
  image,
  name,
  location,
  rating,
  reviews,
  adults,
  children,
  nights,
  breakfast,
  price,
  oldPrice,
  discount,
  availability,
  badge,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow flex gap-4 p-4 mb-4 relative">
      {badge && (
        <div
          className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-4 py-8 rounded-bl-3xl"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 20% 100%)" }}
        >
          <span className="transform -rotate-45 block whitespace-nowrap">
            {badge}
          </span>
        </div>
      )}

      {/* Image Section */}
      <div className="relative w-64 flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-lg"
        />
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 left-3 bg-white rounded-full p-2 hover:bg-gray-100"
        >
          <Heart
            className={`w-5 h-5 ${
              isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
            }`}
          />
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
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-xl text-gray-900 mb-2">{name}</h3>

          <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <div className="bg-blue-600 text-white px-2 py-1 rounded font-bold text-sm">
              {rating}
            </div>
            <span className="text-sm font-semibold text-gray-700">
              {reviews}
            </span>
          </div>

          <div className="flex gap-4 text-sm text-gray-600 mb-3">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>
                {adults} Adult · {children} Children
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{nights} Nights</span>
            </div>
          </div>

          {breakfast && (
            <div className="text-sm text-gray-700 mb-2">{breakfast}</div>
          )}

          <div className="text-sm mb-2">
            <span className="font-semibold">Very Good</span>
            <button className="ml-2 text-blue-600 hover:underline text-xs">
              {reviews} reviews
            </button>
          </div>
        </div>
      </div>

      {/* Price Section */}
      <div className="w-48 flex-shrink-0 flex flex-col justify-between items-end text-right">
        <div>
          {discount && (
            <div className="text-red-500 text-sm font-semibold mb-1">
              {discount}
            </div>
          )}
          {oldPrice && (
            <div className="text-gray-400 line-through text-sm">{oldPrice}</div>
          )}
          <div className="text-3xl font-bold text-green-600 mb-1">{price}</div>
          <div className="text-xs text-gray-600 mb-2">
            Includes taxes and charges
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-600 mb-1">
            <svg
              className="w-3 h-3 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-green-600">We reccomend you to book now</span>
          </div>
          {availability && (
            <div className="text-xs text-red-500 mb-3">{availability}</div>
          )}
        </div>

        <button className="w-full bg-white border-2 border-blue-600 text-blue-600 font-semibold py-2 px-4 rounded hover:bg-blue-50 transition-colors flex items-center justify-center gap-1">
          See Availability
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const FilterSection = ({ title, children, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-6 pb-6 border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full mb-3"
      >
        <h3 className="font-bold text-gray-900">{title}</h3>
        <ChevronDown
          className={`w-5 h-5 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

const HotelSearchPage = ({ onClose }) => {
  const [showDaterPeaker, setShowDaterPeaker] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const handleDismiss = () => setShowDaterPeaker((prev) => !prev);
  const hotels = [
    {
      image:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
      name: "Radisson Blu",
      location: "Located In Centro Storico-Kalsa-Ballaro In Bonn",
      rating: "8.7",
      reviews: "Excellent",
      adults: 1,
      children: 2,
      nights: 4,
      breakfast: "Breakfast Included",
      price: "$125",
      oldPrice: null,
      discount: null,
      availability: null,
      badge: null,
    },
    {
      image:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
      name: "Radisson Blu",
      location: "Located In Centro Storico Historical In One",
      rating: "8.7",
      reviews: "Excellent",
      adults: 1,
      children: 2,
      nights: 4,
      breakfast: "Breakfast Included",
      price: "$130",
      oldPrice: null,
      discount: "10% OFF",
      availability: "We recommend you to book now",
      badge: "POPULAR",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
      name: "Radisson Blu",
      location: "Located In Centro Storico Historical In Bonn",
      rating: "8.7",
      reviews: "Excellent",
      adults: 1,
      children: 2,
      nights: 4,
      breakfast: "Breakfast Included",
      price: "$145",
      oldPrice: "$160",
      discount: "9% OFF",
      availability: "We have 5 left at 9% off",
      badge: null,
    },
    {
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
      name: "Radisson Blu",
      location: "Located In Centro Storico Historical In Bonn",
      rating: "8.7",
      reviews: "Excellent",
      adults: 1,
      children: 2,
      nights: 4,
      breakfast: null,
      price: "$150",
      oldPrice: "$165",
      discount: "4% OFF",
      availability: "We have 3 left at 4% off",
      badge: null,
    },
    {
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      name: "Radisson Blu",
      location: "Located In Centro Storico-Kalsa-Ballaro In Bonn",
      rating: "8.7",
      reviews: "Excellent",
      adults: 1,
      children: 2,
      nights: 4,
      breakfast: "Breakfast Included",
      price: "$128",
      oldPrice: "$140",
      discount: "10% OFF",
      availability: null,
      badge: null,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Data peaker component */}

      <section className="text-blue-500 shadow-sm p-6 mb-6">
        <div className="mb-4 md:mb-10  text-start">
          <h2 className=" text-4xl text-primary font-bold mb-2">
            Where is your Next Dream Place?
          </h2>
          <p className="text-sm text-gray-600">
            Find exclusive Genius rewards in every corner of the world!
          </p>
        </div>
        <DaterPeaker
          showText={true}
          isDismiss={showDaterPeaker}
          handleDismiss={handleDismiss}
        />
      </section>

      <div className="flex">
        {/* Sidebar Filters */}
        <div className="w-80 bg-white p-6 border-r border-gray-200 min-h-screen h- full overflow-y-auto">
          {/* Map Placeholder */}
          <div className="mb-6">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&q=80"
              alt="Map"
              className="w-full h-32 object-cover rounded-lg"
            />
          </div>

          {/* Sort By */}
          <div className="mb-6">
            <label className="text-sm font-semibold text-gray-700 block mb-2">
              Sort By
            </label>
            <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm">
              <option>Our Top Picks For families</option>
            </select>
          </div>

          {/* Location Info */}
          <div className="mb-6">
            <h2 className="font-bold text-xl mb-2">Gothenburg</h2>
            <p className="text-sm text-gray-600 mb-2">Västra Götalands län</p>
            <p className="text-sm text-gray-700">
              Totally Professional Dedicated To Simplifying Your Travel
              Experience By Curating Flight And Accommodation Services On A
              User-Friendly Platform, Committed To Quality And Assurance. Read
              more...
            </p>
          </div>

          <h2 className="font-bold text-lg mb-4">Filter By</h2>

          {/* Price Range */}
          <FilterSection title="Search by Property Name">
            <input
              type="text"
              placeholder="e.g. Radisson Hotel"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            />
          </FilterSection>

          {/* Popular Filters */}
          <FilterSection title="Popular Filters">
            <div className="space-y-2">
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" />
                <span>Breakfast Included</span>
              </label>
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" />
                <span>Air Condition</span>
              </label>
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" />
                <span>Free WiFi Included</span>
              </label>
            </div>
          </FilterSection>

          {/* Room Facilities */}
          <FilterSection title="Room Facilities">
            <div className="space-y-2">
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" />
                <span>Own Bathroom</span>
              </label>
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" />
                <span>Balcony</span>
              </label>
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" />
                <span>Private kitchen</span>
              </label>
            </div>
          </FilterSection>

          {/* Guest Rating */}
          <FilterSection title="Guest Rating">
            <div className="space-y-2">
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" />
                <span>Any</span>
              </label>
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" />
                <span>Wonderful: 9+</span>
              </label>
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" />
                <span>Very Good: 8+</span>
              </label>
            </div>
          </FilterSection>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="mb-6">
            <p className="text-sm text-gray-600">
              Gothenburg: 250 properties found
            </p>
          </div>

          {/* Hotel Cards */}
          <div>
            {hotels.map((hotel, index) => (
              <HotelCard key={index} {...hotel} />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex  items-center justify-between gap-4 mt-8">
            <Link className="border-blue-600  border-2 hover:bg-slate-100  text-gray-700 font-semibold py-3 px-6 rounded  transition-colors">
              Just Your Favourite Places
            </Link>
            <button className=" bg-blue-600 text-white font-semibold py-3 px-6 rounded hover:bg-blue-700 transition-colors">
              See More Search Results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelSearchPage;

// ************************************************************************************


