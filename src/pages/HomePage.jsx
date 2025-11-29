import React, { useState } from "react";

const categoriesOffers = [
  {
    name: "Flight",
    image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92",
    icon: "✈️",
    count: 123,
  },
  {
    name: "Location",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    icon: "🗺️",
    count: 123,
  },
  {
    name: "Hotel",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    icon: "🏨",
    count: 123,
  },
  {
    name: "Package",
    image: "https://images.unsplash.com/photo-1600180758890-6e8b2b46d9d1",
    icon: "📦",
    count: 123,
  },
  {
    name: "Seasonal",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    icon: "🍂",
    count: 123,
  },
  {
    name: "Camps",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    icon: "🏕️",
    count: 123,
  },
  {
    name: "Backpacking",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    icon: "🎒",
    count: 123,
  },
];

export const offers = [
  {
    id: 1,
    category: "Hotels",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500",
    title: "Appartement Vue Océan",
  },
  {
    id: 2,
    category: "Flights",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=500",
    title: "Villa Moderne Jardin",
  },
  {
    id: 3,
    category: "Hotels",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500",
    title: "Villa Bord de Mer",
  },
  {
    id: 4,
    category: "Multi",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500",
    title: "Studio Confort",
  },
  {
    id: 5,
    category: "Flights",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500",
    title: "Penthouse Panoramique",
  },
  {
    id: 6,
    category: "Multi",
    image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=500",
    title: "Maison de Jardin",
  },
];

import colors from "../components/colorsPalette";
import { ImagesSlider } from "./ImagesSlider";
import { DaterPeaker } from "../components/DaterPeaker";
import { ChevronRight } from "lucide-react";
import { Hotels } from "../components/hotelsTypes/Hotels";
import { MixedHotels } from "../components/hotelsTypes/Mixed";
import { FamilialHotels } from "../components/hotelsTypes/FamilialHotels";

export const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hotelType, setHotelType] = useState("");

  const categories = ["All", "Hotels", "Familial"];

  const filteredOffers =
    selectedCategory === "All"
      ? offers
      : offers.filter((offer) => offer.category === selectedCategory);

  return (
    <>
      <div className="">
        <div className="flex items-center justify-center gap-4 my-10 flex-wrap">
          {["Mixed", "Hotel", "Familial"].map((item) => (
            <button
              key={item}
              onClick={() => {
                if (hotelType === item) {
                  setHotelType("");
                } else {
                  setHotelType(item);
                }
              }}
              className={`
              } py-2 px-5 w-32 text-center rounded-full hover:shadow-md `}
              style={{
                backgroundColor:
                  hotelType === item
                    ? colors.primary.main
                    : colors.neutral.bgCard,
                borderColor:
                  hotelType === item
                    ? colors.primary.main
                    : colors.neutral.borderLight,
                color:
                  hotelType === item
                    ? colors.neutral.bgCard
                    : colors.neutral.textPrimary,
              }}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Affichage du composant Hotels en dehors de la boucle */}
        {/* Affichage dynamique basé sur hotelType */}

        {hotelType && hotelType !== "" && (
          <div>
            {hotelType === "Hotel" && <Hotels />}
            {hotelType === "Familial" && <FamilialHotels />}
            {hotelType === "Mixed" && <MixedHotels />}
          </div>
        )}

        {!hotelType && (
          <div>
            <div
              style={{ backgroundImage: "url('/back.png')" }}
              className=" relative  bg-cover h-80  md:h-[500px]  bg-no-repeat bg-center w-full my-10"
            >
              <div className=" absolute inset-0 bg-black/40"></div>
              <h1 className=" absolute bottom-20  z-10  text-4xl font-bold text-start text-white ms-3 px-4">
                Discover Your Trip <br /> Worldwide !
              </h1>

              {/* input for checking and checkout using datapeaker */}
              <div className=" absolute bottom-[-40px]  z-10  w-full px-4 md:px-20 ">
                <DaterPeaker />
              </div>
            </div>
            {/* Special Offers Section */}
            <section
              className="px-6 mt-36 "
              style={{ backgroundColor: colors.neutral.bgSection }}
            >
              <div className="text-center">
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ color: colors.neutral.textPrimary }}
                >
                  Special Offers
                </h2>

                {/* Filters */}
                <div className="flex gap-4 mb-8 flex-wrap items-center justify-center">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-full transition-colors ${
                        selectedCategory === cat ? "text-white" : "border"
                      }`}
                      style={{
                        backgroundColor:
                          selectedCategory === cat
                            ? colors.primary.main
                            : colors.neutral.bgCard,
                        borderColor:
                          selectedCategory === cat
                            ? colors.primary.main
                            : colors.neutral.borderLight,
                        color:
                          selectedCategory === cat
                            ? colors.neutral.bgCard
                            : colors.neutral.textPrimary,
                      }}
                      onMouseEnter={(e) => {
                        if (selectedCategory !== cat) {
                          e.target.style.backgroundColor =
                            colors.neutral.bgHover;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (selectedCategory !== cat) {
                          e.target.style.backgroundColor =
                            colors.neutral.bgCard;
                        }
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Offers Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredOffers.map((offer) => (
                  <div
                    key={offer.id}
                    className=" group relative rounded-lg overflow-hidden shadow-md transition-shadow hover:shadow-lg"
                    style={{ backgroundColor: colors.neutral.bgCard }}
                  >
                    <div className=" relative">
                      <img
                        src={offer.image}
                        alt={offer.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="group-hover:bg-black/50 transform hover:scale-110 group-hover:opacity-50 absolute inset-0 transition-all duration-300 "></div>
                    </div>
                    <div
                      className="absolute bottom-0 left-0 right-0 p-4"
                      style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                    >
                      <h3
                        className="text-lg font-semibold"
                        style={{ color: colors.neutral.bgCard }}
                      >
                        {offer.title}
                      </h3>
                      <button
                        className="mt-2 font-medium hover:underline transition-colors"
                        style={{ color: colors.primary.main }}
                      >
                        Deals Discover ➜
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Explore Stays In Trending Destinations */}
            <section
              className="px-6 py-10"
              style={{ backgroundColor: colors.neutral.bgCard }}
            >
              <h2
                className="text-2xl font-bold mb-2"
                style={{ color: colors.neutral.textPrimary }}
              >
                Explore Stays In Trending Destinations
              </h2>
              <p
                className="mb-6 text-lg font-medium"
                style={{ color: colors.primary.main }}
              >
                Find Hot Stays!!
              </p>
            </section>
            <section>
              <ImagesSlider />
            </section>

            <div
              style={{
                backgroundImage: "url('Screenshot 2025-11-26 204036.png')",
              }}
              className=" relative  bg-cover h-80  md:h-[500px]  bg-no-repeat bg-center w-full my-10"
            >
              <div className=" absolute inset-0 bg-black/40"></div>
              <h1 className="flex flex-col gap-2 absolute top-14  z-10  text-4xl font-bold text-start text-white ms-3 px-4">
                Get Inspirations For Your Next Trip
                <span className="text-lg text-center">
                  Read About Wonderful Adventure We Love Most
                </span>
              </h1>
              <h1 className="  absolute bottom-20 right-4  z-10  text-4xl font-extrabold text-start text-white ms-3 px-4">
                Difficult Roads Lead To <br /> Beautiful Destination .
              </h1>
              <button
                className=" flex items-center gap-2 absolute bottom-8 right-6 z-10 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
                style={{
                  color: colors.neutral.bgCard,
                }}
              >
                Read More <ChevronRight />
              </button>

              {/* input for checking and checkout using datapeaker */}
            </div>
          </div>
        )}
      </div>

    </>
  );
};
