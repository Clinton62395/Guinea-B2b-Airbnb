import React, { useState } from "react";
import {
  MapPin,
  Wifi,
  Coffee,
  Utensils,
  Car,
  Info,
  Calendar,
  Users,
  ChevronDown,
} from "lucide-react";

const HotelBookingForm = () => {
  const [checkIn, setCheckIn] = useState("14 August 2024");
  const [checkOut, setCheckOut] = useState("18 August 2024");
  const [guests, setGuests] = useState(2);
  const [city, setCity] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-6">
        {/* Left Column - Hotel Info */}
        <div className="col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80"
              alt="Hotel"
              className="w-full h-32 object-cover rounded-lg mb-3"
            />
            <img
              src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&q=80"
              alt="Hotel"
              className="w-full h-32 object-cover rounded-lg mb-3"
            />
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&q=80"
              alt="Hotel"
              className="w-full h-32 object-cover rounded-lg"
            />
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4">
            <h2 className="font-bold text-xl mb-4">First Hotel G</h2>
            <p className="text-sm text-gray-600 mb-4">
              Superior Twin Room - With Two Double Beds
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="w-4 h-4" />
                <span>Location Information</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Wifi className="w-4 h-4" />
                <span>Free Wifi</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Coffee className="w-4 h-4" />
                <span>Workout Solution</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Utensils className="w-4 h-4" />
                <span>Breakfast</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Car className="w-4 h-4" />
                <span>Transferring</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Info className="w-4 h-4" />
                <span>First Hotel Green</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Users className="w-4 h-4" />
                <span>Free Laundry Service</span>
              </div>
            </div>
          </div>

          {/* Booking Details */}
          <div className="bg-white rounded-lg shadow-sm p-4 mt-4">
            <h3 className="font-bold text-lg mb-4">Your Booking Details</h3>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm font-semibold text-gray-700">Check-In</p>
                <p className="text-sm text-gray-600">{checkIn}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700">Check-Out</p>
                <p className="text-sm text-gray-600">{checkOut}</p>
              </div>
            </div>

            <div className="text-sm text-gray-600 space-y-1 mb-4">
              <p>Total Length Of Stay:</p>
              <p>• You Selected 1 Room(s)</p>
              <p>• 2 Adults</p>
              <p>• Non-Refundable</p>
            </div>

            <div className="border-t pt-4">
              <p className="font-bold mb-3">The Room: Superior Twin Room</p>

              <div className="flex items-center gap-2 mb-3">
                <Users className="w-4 h-4" />
                <span className="text-sm">Guest Number: 2 Adult</span>
              </div>

              <div className="flex gap-2 mb-3">
                <input type="checkbox" className="mt-1" />
                <span className="text-sm text-gray-700">
                  I Would Like A Twin Room
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-3">
                <button className="border border-gray-300 rounded px-3 py-2 text-xs hover:bg-gray-50">
                  😊 All
                </button>
                <button className="border border-gray-300 rounded px-3 py-2 text-xs hover:bg-gray-50">
                  🏙️ City centre
                </button>
                <button className="border border-gray-300 rounded px-3 py-2 text-xs hover:bg-gray-50">
                  🏨 Next to center
                </button>
              </div>

              <div className="flex gap-2">
                <label className="flex items-center text-xs">
                  <input type="checkbox" className="mr-2" />
                  On the beach
                </label>
                <label className="flex items-center text-xs">
                  <input type="checkbox" className="mr-2" />
                  Near Garden
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column - Form */}
        <div className="col-span-1">
          {/* Host Info */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
                  alt="Host"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">Anne Cortose</p>
                  <p className="text-xs text-gray-500">Host</p>
                </div>
              </div>
              <button className="border border-blue-600 text-blue-600 px-4 py-1 rounded text-sm hover:bg-blue-50">
                Check Your Booking/Status
              </button>
            </div>
            <p className="text-sm font-semibold">Who Are You Booking For?</p>
          </div>

          {/* Enter Your Information */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
            <h3 className="font-bold text-lg mb-2">Enter Your Information</h3>
            <p className="text-xs text-gray-500 mb-4">
              We'll Use This Information To Share Your Book With A Kyoto &
              Contact You About Your Trip
            </p>

            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-3">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-gray-300 rounded px-3 py-2 text-sm"
                />
                <input
                  type="text"
                  placeholder="Middle name"
                  className="border border-gray-300 rounded px-3 py-2 text-sm"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="border border-gray-300 rounded px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Phone Number
                </label>
                <div className="flex gap-2">
                  <select className="border border-gray-300 rounded px-3 py-2 text-sm w-24">
                    <option>+91</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
                  />
                  <label className="flex items-center text-xs whitespace-nowrap">
                    <input type="checkbox" className="mr-1" />
                    Confirmed
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Address (Optional)"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm mb-2"
                />
                <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm mb-2">
                  <option>Choose a Country</option>
                </select>
                <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm">
                  <option>Region /Country</option>
                </select>
              </div>
            </div>
          </div>

          {/* Add To Your Stay */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h3 className="font-bold text-lg mb-3">Add To Your Stay</h3>

            <div className="space-y-3">
              <label className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <div className="text-sm">
                  <p className="font-semibold mb-1">
                    I Want A Taxi Or Shuttle Ride To Arlanda(+)
                  </p>
                  <p className="text-gray-600">
                    Request Flight Upto/From The Airport, To Maybe From Our
                    Taxi/Shuttle Taxi
                  </p>
                </div>
              </label>

              <label className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <div className="text-sm">
                  <p className="font-semibold mb-1">
                    Avoid Surprises...Get From The Room To Your Accommodation
                    Without A Hitch
                  </p>
                  <p className="text-gray-600">
                    We'll Show You Our Competitive Fares Upfront
                  </p>
                </div>
              </label>

              <div>
                <p className="font-semibold text-sm mb-2">Special Requests</p>
                <p className="text-xs text-gray-600 mb-2">
                  Special Requests Can't Be Guaranteed—But The Property Will Do
                  Its Best To Meet Your Needs...
                </p>
                <textarea
                  placeholder="Please write your special request here. (Ex: booking-3 complete)"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm h-20"
                />
              </div>

              <div className="space-y-2 text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span>I Would Like More Info About Other Offers</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span>Send A Copy Of My Booking Confirmation To Add</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span>
                    Yes! Send Me Free Discounts For Email, Call+22020 3239 2221
                    2235
                  </span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span>
                    I'd Like FREE Help With Transportation Car Rental Or Flight
                  </span>
                </label>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Add Your Estimated Arrival Time (Optional)
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Please select"
                    className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
                  />
                  <input
                    type="number"
                    value="1"
                    className="w-16 border border-gray-300 rounded px-3 py-2 text-sm text-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Payment */}
        <div className="col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
            <h3 className="font-bold text-lg mb-4">Payment Information</h3>

            <div className="mb-6">
              <h4 className="font-semibold mb-3">Your Price Summary</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Original Price</span>
                  <span className="font-semibold">$345 × 4 Nights</span>
                </div>
                <div className="flex justify-between">
                  <span>First(Fast Hotel G) Guest U.S</span>
                </div>
                <div className="flex justify-between text-green-600 font-bold">
                  <span>Total Amount For Payment</span>
                  <span>$860</span>
                </div>
              </div>
            </div>

            <div className="mb-6 pb-6 border-b">
              <h4 className="font-semibold mb-2">Cancellation Policy</h4>
              <p className="text-xs text-gray-600">
                Free Cancellation Before 14 August. Cancel Mission Can...
              </p>
            </div>

            <div className="mb-6 pb-6 border-b">
              <h4 className="font-semibold mb-2">Pay Part Now, Part Later</h4>
              <p className="text-xs text-gray-600">
                Pay $ 430.00 now And The Rest ($430.00) by the property...
              </p>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-3">Payment Methods</h4>
              <div className="space-y-2">
                <label className="flex items-center justify-between p-3 border border-gray-300 rounded cursor-pointer hover:bg-gray-50">
                  <div className="flex items-center gap-2">
                    <input type="radio" name="payment" />
                    <span className="text-sm">
                      Payment Using Debit/Credit Card
                    </span>
                  </div>
                </label>
                <label className="flex items-center justify-between p-3 border border-gray-300 rounded cursor-pointer hover:bg-gray-50">
                  <div className="flex items-center gap-2">
                    <input type="radio" name="payment" />
                    <span className="text-sm">Booking For Work</span>
                  </div>
                  <Info className="w-4 h-4 text-blue-600" />
                </label>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Bank Card Information</h4>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Full Name On The Card"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                />
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="EXP date"
                    className="border border-gray-300 rounded px-3 py-2 text-sm"
                  />
                  <input
                    type="text"
                    placeholder="CVG"
                    className="border border-gray-300 rounded px-3 py-2 text-sm"
                  />
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 border-2 border-gray-300 text-gray-700 font-semibold py-3 rounded hover:bg-gray-50">
                    Save as Checkout
                  </button>
                  <button className="flex-1 bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700">
                    Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelBookingForm;
