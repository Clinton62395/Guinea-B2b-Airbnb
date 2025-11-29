import React, { useState } from "react";
import {
  Wifi,
  UtensilsCrossed,
  Bath,
  Wind,
  Car,
  Dumbbell,
  Coffee,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

const TabButton = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 font-semibold border-b-4 transition-colors ${
      active
        ? "border-blue-600 text-blue-600"
        : "border-transparent text-gray-600 hover:text-gray-900"
    }`}
  >
    {children}
  </button>
);

const AmenityItem = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-3 text-gray-700">
    <Icon className="w-5 h-5 text-gray-500" />
    <span className="text-sm">{label}</span>
  </div>
);

const FAQItem = ({ question, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left"
      >
        <span className="font-medium text-gray-900">{question}</span>
        <ChevronRight
          className={`w-5 h-5 text-gray-400 transition-transform ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="mt-3 text-sm text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      )}
    </div>
  );
};

const ReviewCard = ({ name, country, flag, image, rating, text }) => (
  <div className="flex-shrink-0 w-72 bg-white rounded-lg shadow-sm p-4 border border-gray-200">
    <div className="flex items-start gap-3 mb-3">
      <img
        src={image}
        alt={name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-lg">{flag}</span>
          <h4 className="font-bold text-gray-900">{name}</h4>
        </div>
        <p className="text-sm text-gray-600">{country}</p>
      </div>
    </div>
    <p className="text-sm text-gray-700 leading-relaxed line-clamp-4">{text}</p>
    <button className="text-blue-600 text-sm font-semibold mt-2 hover:underline">
      Read more
    </button>
  </div>
);

const HotelDetailsPage = () => {
  const [activeTab, setActiveTab] = useState("details");

  const reviews = [
    {
      name: "Sofia",
      country: "Spain",
      flag: "🇪🇸",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      text: "The hotel staff goes was marked by consistently delightful stay marked by exceptional service and attention to detail.",
    },
    {
      name: "Sebastian",
      country: "Sweden",
      flag: "🇸🇪",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      text: "The hotel staff goes and the services were awesome Everything made for stay was a delight.",
    },
    {
      name: "Maria",
      country: "Italy",
      flag: "🇮🇹",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
      text: "The hotel services and maintainace with comfortable and smooth amenties were exceptional and enjoyable.",
    },
    {
      name: "Lena",
      country: "United States",
      flag: "🇺🇸",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
      text: "The hotel was truly nice, especially because of the tasty breakfeast served. Great location.",
    },
    {
      name: "Martin",
      country: "Netherlands",
      flag: "🇳🇱",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
      text: "The hotel was a blend of luxry and technology, the room came with great amenities.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Tabs Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 flex gap-8">
          <TabButton
            active={activeTab === "details"}
            onClick={() => setActiveTab("details")}
          >
            Place Details
          </TabButton>
          <TabButton
            active={activeTab === "info"}
            onClick={() => setActiveTab("info")}
          >
            Info & Prices
          </TabButton>
          <TabButton
            active={activeTab === "rooms"}
            onClick={() => setActiveTab("rooms")}
          >
            Rooms & Beds
          </TabButton>
          <TabButton
            active={activeTab === "rules"}
            onClick={() => setActiveTab("rules")}
          >
            Place Rules
          </TabButton>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="col-span-2">
            {/* Description */}
            <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed mb-4">
                This Stylish And Roomy Family Home Is Nestled In Stockholm's
                Artan District, Just A 15-Minute Drive From The Tolles Flygplats
                (Airport), Museum Of Performing Arts Kungliga Operan, Offering
                The Convenience Of Free Private Parking. It's Also A Short 5 Km
                Drive From Friends Arena And 3.5 Km From Torgels Torg Square.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Your Stay At Our Hotel Includes A Complimentary Breakfast To
                Kickstart Your Day. You Can Conveniently Reach A Train Station,
                Enhancing Easy Transportation. Families Will Relax From Tub For
                Added Luxury.
              </p>
              <button className="text-blue-600 font-semibold mt-2 hover:underline">
                Read more
              </button>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Amenities
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <AmenityItem icon={Wifi} label="Free Wifi" />
                <AmenityItem icon={Car} label="Parking Available" />
                <AmenityItem icon={UtensilsCrossed} label="Restaurant" />
                <AmenityItem icon={Dumbbell} label="Fitness Center" />
                <AmenityItem icon={Bath} label="Bathroom" />
                <AmenityItem icon={Wind} label="Room Service" />
                <AmenityItem icon={Wind} label="Air Conditioning" />
                <AmenityItem icon={Coffee} label="Tea/Coffee Machine" />
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                The Most Frequented Questions Asked By Travellers
              </h2>
              <div>
                <FAQItem question="How And When Do I Pay?" defaultOpen={true} />
                <FAQItem question="Is There Anti-Allergic Meal?" />
                <FAQItem question="Does The Hotel Have A Pool?" />
                <FAQItem question="Any Identification Documents Is Necessary" />
                <FAQItem question="What Are The Check-In And Check-Out Times?" />
                <FAQItem question="Why Was I Charged?" />
                <FAQItem question="Is There A Spa?" />
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm sticky top-24">
              {/* Property Info */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">👥</span>
                  <span className="text-sm text-gray-700">
                    <strong>2 Adults, 3 Children, 4 Nights</strong> | Two Rooms
                    (Double Bed)
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Arlandagen 32, Stockholm, Sweden</span>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="text-right mb-4">
                  <div className="text-3xl font-bold text-green-600">$240</div>
                  <div className="text-sm text-gray-600">Per night</div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-shrink-0 border-2 border-gray-300 rounded p-3 hover:bg-gray-50">
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                  <button className="flex-1 bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Guest Reviews</h2>
            <button className="text-blue-600 font-semibold hover:underline flex items-center gap-1">
              View All
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetailsPage;
