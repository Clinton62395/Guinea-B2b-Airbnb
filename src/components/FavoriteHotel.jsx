import React from "react";
import { ArrowRight } from "lucide-react";

const OffersTestimonials = () => {
  return (
    <div className="bg-white">
      {/* Special Offers Section */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Special Offers
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mb-4">
          <div className=" col-span-1 relative h-52 rounded-lg overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80"
              alt="Holiday Discounts"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <button className="absolute bottom-4 left-4 bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-700 flex items-center gap-2">
              Loyalty Discounts <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className=" col-span-2 relative h-52 rounded-lg overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
              alt="Early Booking Discounts"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <button className="absolute bottom-4 left-4 bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-700 flex items-center gap-2">
              Early Booking Discounts <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className=" col-span-1 relative h-52 rounded-lg overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80"
              alt="Last Minute Deals"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <button className="absolute bottom-4 left-4 bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-700 flex items-center gap-2">
              Last-Minute Deals <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
          <div className=" col-span-1 relative h-52 rounded-lg overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80"
              alt="Family Packages"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <button className="absolute bottom-4 left-4 bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-700 flex items-center gap-2">
              Family Packages <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className=" col-span-2 relative h-52 rounded-lg overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80"
              alt="Birthday Or Anniversary Specials"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <button className="absolute bottom-4 left-4 bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-700 flex items-center gap-2">
              Birthday Or Anniversary Specials{" "}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className=" col-span-1 relative h-52 rounded-lg overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80"
              alt="Summer Escapades"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <button className="absolute bottom-4 left-4 bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-700 flex items-center gap-2">
              Seasonal Escapades <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Make A Comparison Section */}
      <div className="max-w-7xl mx-auto px-8 pb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Make A Comprasion
        </h2>

        <div className="grid grid-cols-2 gap-6">
          <div className="relative h-56 rounded-lg overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=800&q=80"
              alt="Hotel comparison"
              className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white text-sm leading-relaxed">
                The First Orders With The Highest Reviews Qualities Offers,
                Standing As A Testament To Their Exceptional Quality.
              </p>
            </div>
          </div>

          <div className="relative h-56 rounded-lg overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1502085671122-2d218cd434e6?w=800&q=80"
              alt="Beach memories"
              className="w-full h-full object-cover brightness-90 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white text-sm leading-relaxed">
                Ring In The New Year With Beache Memorate And Unforgettable
                Memories In New York City
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1600&q=80"
          alt="Beach background"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-400/60 to-gray-300/80"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-8 grid grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80"
                  alt="Teacher Olivia"
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
              <div className="bg-gray-700/80 backdrop-blur-sm rounded-lg p-6 text-white">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="text-2xl">🇫🇷</span>
                  <h3 className="font-bold text-lg">Teacher Olivia</h3>
                </div>
                <p className="text-sm leading-relaxed">
                  Impressed by the range of options and the convenience of
                  searching through multiple listings in one go. Simplified my
                  hotel-hunting process significantly.
                </p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80"
                  alt="Mr Victor"
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
              <div className="bg-gray-700/80 backdrop-blur-sm rounded-lg p-6 text-white">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="text-2xl">🇬🇧</span>
                  <h3 className="font-bold text-lg">Mr Victor</h3>
                </div>
                <p className="text-sm leading-relaxed">
                  Booking a stay was a breeze! The options tailored to my Frozen
                  wonderland journey were exactly what I was looking for.
                </p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80"
                  alt="Ellen Joy"
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
              <div className="bg-gray-700/80 backdrop-blur-sm rounded-lg p-6 text-white">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="text-2xl">🇳🇱</span>
                  <h3 className="font-bold text-lg">Ellen Joy</h3>
                </div>
                <p className="text-sm leading-relaxed">
                  Great resource for travelers! The interface was user-friendly,
                  and the packages, and the pricepoint was reasonable.
                </p>
              </div>
            </div>
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
