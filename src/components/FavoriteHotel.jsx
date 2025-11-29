import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const OffersTestimonials = () => {
  const specialOffers = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
      title: "Loyalty Discounts",
      colSpan: "col-span-1",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      title: "Early Booking Discounts",
      colSpan: "col-span-1 md:col-span-2",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
      title: "Last-Minute Deals",
      colSpan: "col-span-1",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80",
      title: "Family Packages",
      colSpan: "col-span-1",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
      title: "Birthday Or Anniversary Specials",
      colSpan: "col-span-1 md:col-span-2",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80",
      title: "Seasonal Escapades",
      colSpan: "col-span-1",
    },
  ];

  const comparisons = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=800&q=80",
      text: "The First Orders With The Highest Reviews Qualities Offers, Standing As A Testament To Their Exceptional Quality.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1502085671122-2d218cd434e6?w=800&q=80",
      text: "Ring In The New Year With Beache Memorate And Unforgettable Memories In New York City",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Teacher Olivia",
      flag: "🇫🇷",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
      text: "Impressed by the range of options and the convenience of searching through multiple listings in one go. Simplified my hotel-hunting process significantly.",
    },
    {
      id: 2,
      name: "Mr Victor",
      flag: "🇬🇧",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
      text: "Booking a stay was a breeze! The options tailored to my Frozen wonderland journey were exactly what I was looking for.",
    },
    {
      id: 3,
      name: "Ellen Joy",
      flag: "🇳🇱",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
      text: "Great resource for travelers! The interface was user-friendly, and the packages, and the pricepoint was reasonable.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Special Offers Section */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Special Offers
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {specialOffers.slice(0, 3).map((offer) => (
            <div
              key={offer.id}
              className={`${offer.colSpan} relative h-52 rounded-lg overflow-hidden group`}
            >
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              <div className="absolute inset-0 bg-black/20"></div>
              <button className="absolute bottom-4 left-4 bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-700 flex items-center gap-2">
                {offer.title} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {specialOffers.slice(3, 6).map((offer) => (
            <div
              key={offer.id}
              className={`${offer.colSpan} relative h-52 rounded-lg overflow-hidden group`}
            >
              <Link to={"/hotel-filter"}>
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </Link>
              <div className="absolute inset-0 bg-black/20"></div>
              <button className="absolute bottom-4 left-4 bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-700 flex items-center gap-2">
                {offer.title} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Make A Comparison Section */}
      <div className="max-w-7xl mx-auto px-8 pb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Make A Comprasion
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {comparisons.map((comparison) => (
            <div
              key={comparison.id}
              className="relative h-56 md:h-72 rounded-lg overflow-hidden group"
            >
              <Link to={"/hotel-filter"}>
                <img
                  src={comparison.image}
                  alt={`Comparison ${comparison.id}`}
                  className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-sm leading-relaxed">
                  {comparison.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div
        className="relative bg-center bg-no-repeat bg-cover py-16 px-4 md:px-8 mb-0 md:h-[500px] h-[900px]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-400/60 to-gray-300/80"></div>

        <div className="relative max-w-md mx-auto md:max-w-full flex items-center justify-center h-full">
          <div className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="relative text-center mt-10 mb-6 md:mb-0"
              >
                <div className="mb-4 flex justify-center absolute z-10 top-[-60px] left-1/2 transform -translate-x-1/2">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <div className="bg-gray-700/80 backdrop-blur-sm rounded-lg p-6 text-white mt-4">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="text-2xl">{testimonial.flag}</span>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  </div>
                  <p className="text-sm leading-relaxed">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative shells at bottom */}
        <div className="absolute bottom-8 right-1/2 transform translate-x-1/2 flex gap-8 opacity-70">
          <div className="w-16 h-16 rounded-full bg-white/30"></div>
          <div className="w-16 h-16 rounded-full bg-white/30"></div>
        </div>
      </div>
    </div>
  );
};

export default OffersTestimonials;
