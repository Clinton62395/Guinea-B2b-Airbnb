import React, { useState } from "react";
import {
  Wifi,
  Utensils,
  Bath,
  Wind,
  Car,
  Dumbbell,
  Coffee,
  MapPin,
  Users,
  ChevronRight,
  ChevronDown,
  Heart,
  Star,
  CheckCircle,
  Shield,
  Calendar,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";
import ReviewsCarouselSwiper from "../HotelComponent/ReviewHotel";

const PropertyDetailsPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [isLiked, setIsLiked] = useState(false);

  const faqs = [
    { id: 1, question: "How And When Do I Pay?" },
    { id: 2, question: "Is There Anti-Allergic Meal?" },
    { id: 3, question: "Does The Hotel Have A Pool?" },
    { id: 4, question: "Any Identification Documents Is Necessary" },
    { id: 5, question: "What Are The Check-In And Check-Out Times?" },
    { id: 6, question: "Why Was I Charged?" },
    { id: 7, question: "Is There A Spa?" },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        {/* Image Gallery - Amélioré */}
        <div className="bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="grid grid-cols-4 gap-3 h-96 rounded-2xl overflow-hidden shadow-2xl">
              {/* Large Image */}
              <div className="col-span-2 row-span-2 relative group">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                  alt="Property main"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    ⭐ 4.8 Luxury
                  </span>
                </div>
              </div>

              {/* Top Right Images */}
              <div className="col-span-2 relative group">
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80"
                  alt="Kitchen"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Bottom Right Images */}
              <div className="col-span-1 relative group">
                <img
                  src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=400&q=80"
                  alt="Room"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              <div className="col-span-1 relative group">
                <img
                  src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=400&q=80"
                  alt="Bedroom"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <button className="absolute bottom-4 right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2.5 rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all flex items-center gap-2 text-sm font-semibold group">
                  <span className="text-lg">📷</span>
                  See More Photos
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-3 gap-8">
            {/* Left Column - Details */}
            <div className="col-span-2">
              {/* Navigation Tabs - Amélioré */}
              <div className="bg-white rounded-2xl mb-6 border border-gray-200 shadow-sm overflow-hidden">
                <div className="flex bg-gradient-to-r from-gray-50 to-white px-6 py-1">
                  <button className="relative py-4 px-6 text-sm font-semibold transition-colors group">
                    <span className="text-blue-600">Place Details</span>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-t-full"></div>
                    <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg -m-2"></div>
                  </button>
                  <button className="py-4 px-6 text-gray-600 text-sm font-semibold hover:text-blue-600 transition-colors">
                    Info & Prices
                  </button>
                  <button className="py-4 px-6 text-gray-600 text-sm font-semibold hover:text-blue-600 transition-colors">
                    Rooms & Beds
                  </button>
                  <button className="py-4 px-6 text-gray-600 text-sm font-semibold hover:text-blue-600 transition-colors">
                    Place Rules
                  </button>
                </div>
              </div>

              {/* Description - Amélioré */}
              <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center">
                    <span className="text-blue-600 text-xl">🏨</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Modern Luxury Villa
                    </h2>
                    <p className="text-sm text-gray-600">
                      Stockholm's Premium District
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed mb-4 bg-gradient-to-r from-blue-50/30 to-transparent p-4 rounded-lg">
                  This Stylish And Roomy Family Home Is Nestled In Stockholm's
                  Kalan District, Just A 15 Km Away From The Royal Swedish
                  Opera, Museum Of Medival Stockholm, And Stringberg Museum.
                  This Accommodation Features Two-Private Parking, It's Also A
                  Short 5 Km From Friends Arena And 3.5 Km From Skansen, Torp
                  Square.
                </p>

                <p className="text-sm text-gray-700 leading-relaxed mb-6">
                  Your Stay At Our Hotel Includes A Complimentary Breakfast To
                  Kickstart Your Day, And Our Rooms Offer A Cozy And Comfortable
                  Retreat. Select Rooms Feature A Relaxing Bath Tub For Added
                  Luxury.
                </p>

                <button className="text-blue-600 text-sm font-semibold hover:text-blue-800 transition-colors flex items-center gap-1 group">
                  Read more
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="mt-8 pt-8 border-t border-gray-100 bg-gradient-to-r from-gray-50 to-white p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <h3 className="font-bold text-gray-900">
                      Nearby Attractions
                    </h3>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Explore Nearby Attractions Like The Army Museum, Just 9.5 Km
                    Away, And The Royal Palace, Situated 10 Km Away. From The
                    Charming Gamla Stan (Old Town) To The Bustling
                    Accommodation, You'll Find Vibrant Delights For Every
                    Traveler.
                  </p>
                </div>
              </div>

              {/* Amenities - Amélioré */}
              <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-green-50 rounded-xl flex items-center justify-center">
                      <span className="text-green-600 text-xl">✨</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Amenities
                    </h3>
                  </div>
                  <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full">
                    {8} amenities
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      icon: <Wifi className="w-5 h-5" />,
                      label: "Free Wifi",
                      color: "text-blue-600",
                      bg: "bg-blue-50",
                    },
                    {
                      icon: <Car className="w-5 h-5" />,
                      label: "Parking Available",
                      color: "text-green-600",
                      bg: "bg-green-50",
                    },
                    {
                      icon: <Utensils className="w-5 h-5" />,
                      label: "Restaurant",
                      color: "text-red-600",
                      bg: "bg-red-50",
                    },
                    {
                      icon: <Dumbbell className="w-5 h-5" />,
                      label: "Fitness Center",
                      color: "text-purple-600",
                      bg: "bg-purple-50",
                    },
                    {
                      icon: <Bath className="w-5 h-5" />,
                      label: "Bathroom",
                      color: "text-indigo-600",
                      bg: "bg-indigo-50",
                    },
                    {
                      icon: <Utensils className="w-5 h-5" />,
                      label: "Room Service",
                      color: "text-orange-600",
                      bg: "bg-orange-50",
                    },
                    {
                      icon: <Wind className="w-5 h-5" />,
                      label: "Air Conditioning",
                      color: "text-cyan-600",
                      bg: "bg-cyan-50",
                    },
                    {
                      icon: <Coffee className="w-5 h-5" />,
                      label: "Tea/Coffee Machine",
                      color: "text-amber-600",
                      bg: "bg-amber-50",
                    },
                  ].map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-xl hover:shadow-sm transition-all duration-200 hover:-translate-y-0.5"
                    >
                      <div className={`${amenity.bg} p-2.5 rounded-lg`}>
                        <div className={amenity.color}>{amenity.icon}</div>
                      </div>
                      <span className="text-sm font-medium text-gray-800">
                        {amenity.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Section - Amélioré */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl flex items-center justify-center">
                    <span className="text-purple-600 text-xl">❓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Frequently Asked Questions
                    </h3>
                    <p className="text-sm text-gray-600">
                      Answers to common traveler questions
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  {faqs.map((faq) => (
                    <div
                      key={faq.id}
                      className="border border-gray-200 rounded-xl overflow-hidden hover:border-blue-200 transition-colors"
                    >
                      <button
                        onClick={() =>
                          setOpenFAQ(openFAQ === faq.id ? null : faq.id)
                        }
                        className="w-full p-4 flex items-center justify-between text-left bg-white hover:bg-blue-50/30 transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                              openFAQ === faq.id
                                ? "bg-blue-100 text-blue-600"
                                : "bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600"
                            }`}
                          >
                            <span className="text-sm">?</span>
                          </div>
                          <span className="text-sm font-medium text-gray-900 group-hover:text-blue-700">
                            {faq.question}
                          </span>
                        </div>
                        <ChevronRight
                          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                            openFAQ === faq.id
                              ? "rotate-90 text-blue-600"
                              : "group-hover:text-blue-600"
                          }`}
                        />
                      </button>
                      {openFAQ === faq.id && (
                        <div className="p-4 pt-0">
                          <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                            <p className="text-sm text-gray-700 leading-relaxed">
                              Since This Option Is A Non-Refundable Reservation
                              And There Is No Cancellation Opportunity, Payment
                              Is Usually Processed At The Time Of Booking Or
                              Shortly Thereafter.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Booking Card - Amélioré */}
            <div className="col-span-1">
              <div className="bg-gradient-to-b from-white to-gray-50 rounded-2xl p-6 shadow-xl border border-gray-200 sticky top-6">
                {/* Guest Info - Amélioré */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">
                        Booking Details
                      </p>
                      <p className="text-xs text-gray-600">
                        Your selected stay
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 bg-blue-50 rounded-lg p-3">
                      <Users className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-gray-900">
                        2 Adults, 3 Children, 4 Nights
                      </span>
                    </div>

                    <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-3">
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-gray-700">🛏️</span>
                      </div>
                      <span className="text-sm text-gray-700">
                        Two Rooms (Double Bed)
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-700 bg-gradient-to-r from-gray-50 to-white p-3 rounded-lg">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span className="flex-1">Arlandagen 32, Stockholm</span>
                    </div>
                  </div>
                </div>

                {/* Price - Amélioré */}
                <div className="mb-6">
                  <div className="text-center mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                    <p className="text-sm text-gray-600 mb-1">Total Price</p>
                    <div className="text-4xl font-bold text-green-700 mb-1">
                      $960
                    </div>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">$240</span> per night × 4
                      nights
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setIsLiked(!isLiked)}
                      className={`flex-shrink-0 border-2 rounded-xl p-3 transition-all duration-300 hover:scale-105 ${
                        isLiked
                          ? "border-red-300 bg-gradient-to-br from-red-50 to-pink-50"
                          : "border-gray-300 bg-white hover:border-red-300"
                      }`}
                    >
                      <Heart
                        className={`w-5 h-5 transition-colors ${
                          isLiked
                            ? "fill-red-500 text-red-500"
                            : "text-gray-600"
                        }`}
                      />
                    </button>
                    <Link
                      to="/hotel-booking"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3.5 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-5 h-5" />
                      Book Now
                    </Link>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="pt-6 border-t border-gray-200">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Free Cancellation
                        </p>
                        <p className="text-xs text-gray-600">
                          Until 24 hours before
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Shield className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Secure Booking
                        </p>
                        <p className="text-xs text-gray-600">SSL encrypted</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Clock className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Check-in/out
                        </p>
                        <p className="text-xs text-gray-600">14:00 / 12:00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReviewsCarouselSwiper />
    </>
  );
};

export default PropertyDetailsPage;
