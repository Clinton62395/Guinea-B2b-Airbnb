import React from "react";
import { DaterPeaker } from "../DaterPeaker";
import { ChevronRight } from "lucide-react";
import colors from "../colorsPalette";
import { properties } from "../../pages/ImagesSlider";
import OffersTestimonials from "../FavoriteHotel";

// filtrage hotels by type

const orderSpecial = properties
  .slice()
  .filter((p) => p.discount >= 20)
  .map((item) => {
    const randomImage =
      item.images && item.images.length > 0
        ? item.images[Math.floor(Math.random() * item.images.length)]
        : [];

    return {
      title: item.title,
      description: item.description,
      image: randomImage,
    };
  })
  .slice(0, 6);

//    Highest trending  destination Hotels

const trendingDestination = properties
  .slice()
  .filter((p) => p.reviews >= 150 && p.discount >= 15 && p.rating >= 4.5)
  .map((item) => {
    const randomImage =
      item.images && item.images.length > 0
        ? item.images[Math.floor(Math.random() * item.images.length)]
        : [];

    return {
      title: item.title,
      description: item.description,
      image: randomImage,
    };
  })
  .slice(0, 6);

console.log("discount hotel trending destionation", trendingDestination);

const highestReview = properties
  .slice()
  .filter((p) => p.reviews >= 150)
  .map((item) => {
    const randomImage =
      item.images && item.images.length > 0
        ? item.images[Math.floor(Math.random() * item.images.length)]
        : [];

    return {
      title: item.title,
      description: item.description,
      image: randomImage,
    };
  })
  .slice(0, 6);

console.log("discount hotel highestReview", highestReview);

export const Hotels = () => {
  // hotels filtered by type
  const [isActive, setIsActive] = React.useState("Special offers");
  const hotelTypes = [
    "Special offers",
    "Last Search",
    "trending destinations",
    "Highest Reviewed",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="">
        {/* Titre principal */}
        <div className="text-start mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Where is your Next Dream Place?
          </h1>
          <p className="text-2xl font-semibold text-blue-600">
            Find exclusive Genius rewards in every corner of the world!
          </p>
        </div>

        {/* date peaker */}
        <div>
          <DaterPeaker showText={true} />
        </div>
        <div>
          <div className="">
            <div
              style={{ backgroundImage: "url('/next dream bg.png')" }}
              className=" relative  bg-cover h-80  md:h-[500px]  bg-no-repeat bg-center w-full  "
            >
              <div className=" absolute inset-0 bg-black/40"></div>
              <div className=" absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center  top-10  z-10 ">
                <h1 className="  text-4xl font-bold  text-black ">
                  Why Choose Us?{" "}
                </h1>
                <button className="flex items-center gap-2 w-fit   bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 ms-3 rounded-full transition duration-300 transform hover:scale-105 shadow-lg">
                  Explore More <ChevronRight />
                </button>
              </div>

              <p className=" font-serif absolute left-1/2 transform -translate-x-1/2 text-xl bottom-12 z-10 text-white ms-3 px-4">
                Exclusive Hotel Search!
              </p>
            </div>

            <div
              className="relative mx-10 bg-center bg-no-repeat bg-cover h-80 md:h-[500px] shadow-lg overflow-hidden"
              style={{ backgroundImage: "url('/htel bg.png')" }}
            >
              {/* input for checking and checkout using datapeaker */}
              <div className=" flex items-center justify-center ">
                <div className="grid grid-cols-3 md:grid-cols-5  gap-4 shadow-lg">
                  {hotelTypes.map((type) => (
                    <button
                      key={type}
                      style={{
                        color:
                          isActive === type
                            ? "white"
                            : colors.neutral.textPrimary,
                        backgroundColor:
                          isActive === type
                            ? colors.primary.main
                            : colors.neutral.bgCard,
                      }}
                      onClick={() => setIsActive(type)}
                      className="bg-white/90 hover:bg-white text-xs md:text-lg text-gray-800 font-semibold py-2 md:py-3 px-2 md:px-5 rounded-md shadow-md transition duration-300 transform hover:scale-105"
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
              {/* Conteneur pour les images avec position absolute */}

              {isActive === "Special offers" && (
                <div className="relative w-full h-full">
                  {orderSpecial.map((item, index) => {
                    // Positions prédéfinies pour bien répartir les images
                    const positions = [
                      { top: "24%", left: "20%" }, // Haut gauche
                      { top: "24%", left: "80%" }, // Haut droite
                      { top: "50%", left: "40%" }, // Centre
                      { top: "70%", left: "20%" }, // Bas gauche
                      { top: "70%", left: "60%" }, // Bas droite
                    ];

                    const position = positions[index] || positions[0];

                    return (
                      <div
                        key={item.title}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2"
                        style={{
                          top: position.top,
                          left: position.left,
                          zIndex: 10,
                        }}
                      >
                        {/* Carte avec image et texte bien alignés */}
                        <div className="grid grid-cols-2 gap-1 items-center bg-white rounded-xl shadow-lg border border-gray-200 p-3 w-48 hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                          {/* Image */}
                          <div className="mb-3">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-12 md:h-24 object-cover rounded-lg"
                            />
                          </div>

                          {/* Texte - bien positionné sous l'image */}
                          <div className="text-center">
                            <h3 className="font-semibold text-gray-800 text-sm mb-1">
                              {item.title}
                            </h3>
                            <p className="hidden md:flex text-xs text-gray-600 leading-tight">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/*  highest review */}
              {isActive === "Highest Reviewed" && (
                <div className="relative w-full h-full">
                  {highestReview.map((item, index) => {
                    // Positions prédéfinies pour bien répartir les images
                    const positions = [
                      { top: "24%", left: "20%" }, // Haut gauche
                      { top: "24%", left: "80%" }, // Haut droite
                      { top: "50%", left: "40%" }, // Centre
                      { top: "70%", left: "20%" }, // Bas gauche
                      { top: "70%", left: "60%" }, // Bas droite
                    ];

                    const position = positions[index] || positions[0];

                    return (
                      <div
                        key={item.title}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2"
                        style={{
                          top: position.top,
                          left: position.left,
                          zIndex: 10,
                        }}
                      >
                        {/* Carte avec image et texte bien alignés */}
                        <div className="grid grid-cols-2 gap-1 items-center bg-white rounded-xl shadow-lg border border-gray-200 p-3 w-48 hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                          {/* Image */}
                          <div className="mb-3">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-12 md:h-24 object-cover rounded-lg"
                            />
                          </div>

                          {/* Texte - bien positionné sous l'image */}
                          <div className="text-center">
                            <h3 className="font-semibold text-gray-800 text-sm mb-1">
                              {item.title}
                            </h3>
                            <p className="hidden md:flex text-xs text-gray-600 leading-tight">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* trendingDestination */}
              {isActive === "trending destinations" && (
                <div className="relative w-full h-full">
                  {trendingDestination.map((item, index) => {
                    // Positions prédéfinies pour bien répartir les images
                    const positions = [
                      { top: "24%", left: "20%" }, // Haut gauche
                      { top: "24%", left: "80%" }, // Haut droite
                      { top: "50%", left: "40%" }, // Centre
                      { top: "70%", left: "20%" }, // Bas gauche
                      { top: "70%", left: "60%" }, // Bas droite
                    ];

                    const position = positions[index] || positions[0];

                    return (
                      <div
                        key={item.title}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2"
                        style={{
                          top: position.top,
                          left: position.left,
                          zIndex: 10,
                        }}
                      >
                        {/* Carte avec image et texte bien alignés */}
                        <div className="grid grid-cols-2 gap-1 items-center bg-white rounded-xl shadow-lg border border-gray-200 p-3 w-48 hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                          {/* Image */}
                          <div className="mb-3">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-12 md:h-24 object-cover rounded-lg"
                            />
                          </div>

                          {/* Texte - bien positionné sous l'image */}
                          <div className="text-center">
                            <h3 className="font-semibold text-gray-800 text-sm mb-1">
                              {item.title}
                            </h3>
                            <p className="hidden md:flex text-xs text-gray-600 leading-tight">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bouton d'action supplémentaire */}
        <div className="text-center mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg">
            Discover More
          </button>
        </div>
      </div>


      <OffersTestimonials />
    </div>
  );
};
