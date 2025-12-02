import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ReviewsCarouselSwiper = () => {
  const scrollContainerRef = useRef(null);

  const reviews = [
    {
      id: 1,
      name: "Sofia",
      flag: "🇩🇪",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
      text: "Our time at this hotel was marked by contemporary elegance and thoughtful amenities.",
      readMore: "Read More...",
    },
    {
      id: 2,
      name: "Sebastian",
      flag: "🇸🇪",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      text: "The rooms were good, and the services were awesome. Everything made me stay super enjoyable.",
      readMore: "Read More...",
    },
    {
      id: 3,
      name: "Maria",
      flag: "🇨🇦",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
      text: "The hotel exceeded expectations with comfortable rooms, excellent amenities, making our stay truly enjoyable.",
      readMore: "Read More...",
    },
    {
      id: 4,
      name: "Lena",
      flag: "🇺🇸",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
      text: "The hotel was really nice, especially because of the fancy breakfast and they made our stay feel special.",
      readMore: "Read More...",
    },
    {
      id: 5,
      name: "Martin",
      flag: "🇳🇱",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
      text: "I'm most seeking a blend of luxury and technology, this property offered came true.",
      readMore: "Read More...",
    },
  ];

  const ratings = [
    { label: "Staff Politeness", score: 8.6 },
    { label: "VIP Options", score: 8 },
    { label: "Free Wi-Fi Speed", score: 7.5 },
    { label: "Cleanliness", score: 8 },
    { label: "Access To City Center", score: 9 },
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 250;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-8">
        {/* Reviews Carousel */}
        <div className="relative mb-8">
          {/* Navigation Button Left */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-10 z-10 bg-white rounded-full p-1.5 shadow-md hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto  scrollbar-hide px-10 py-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((review) => (
              <div key={review.id} className="flex-shrink-0 w-48">
                <div className="flex flex-col items-center justify-center">
                  {/* Image */}
                  <div className="mb-3">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
                    />
                  </div>

                  {/* Name with Flag */}
                  <div className="bg-white rounded-md shadow-sm py-4 px-5 h-52">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{review.flag}</span>
                      <h4 className="font-bold text-sm text-gray-900">
                        {review.name}
                      </h4>
                    </div>

                    {/* Review Text */}
                    <p className="text-xs text-gray-700 leading-relaxed mb-1">
                      {review.text}
                    </p>

                    {/* Read More Link */}
                    <button className="text-blue-600 text-xs font-semibold hover:underline text-left">
                      {review.readMore}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Button Right */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-10 z-10 bg-white rounded-full p-1.5 shadow-md hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Review Rates */}
        <div className="bg-white rounded-lg px-6 py-4 shadow-sm">
          <h3 className="text-base font-bold text-gray-900 mb-4">
            Review Rates:
          </h3>

          <div className="flex items-start gap-6">
            {ratings.map((rating, index) => (
              <div key={index} className="flex-1">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs text-gray-700">{rating.label}</span>
                  <span className="text-xs font-bold text-gray-900">
                    {rating.score}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className="bg-blue-600 h-1.5 rounded-full transition-all duration-1000"
                    style={{ width: `${(rating.score / 10) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </div>
  );
};

export default ReviewsCarouselSwiper;
