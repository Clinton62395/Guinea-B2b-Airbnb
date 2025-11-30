import React, { useState } from "react";
import {
  Users,
  Award,
  Square,
  MapPin,
  Trees,
  Bath,
  Tv,
  Wifi,
  Coffee,
  Utensils,
  Car,
  Info,
  Check,
  Heart,
  CreditCard,
} from "lucide-react";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css"; // Import default styles

const HotelBookingForm = () => {
  const [guests, setGuests] = useState(2);
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [paymentOption, setPaymentOption] = useState("full");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [bookingForWork, setBookingForWork] = useState(false);
  const [cardName, setCardName] = useState("Anna Carlina");
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvc, setCvc] = useState("");

  const bookingHotelDetails = {
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&q=80",
    ],
    title: " La Kalsa, Palermo",
    roomType: "Superior Twin Room - With Two Double Beds",
    founitures: [
      "Location Information",
      "Free Wifi",
      "Workout Solution",
      "Breakfast",
      "Transferring",
      "First Hotel Green",
      "Free Laundry Service",
    ],

    locationInfo: "Location Information",
    locationInformation: [
      "0 m to City Centre",
      "0 m to Nordstan Shopping Center",
      "0.24 km to Landvetter Airport",
      "2,5 km to Liseberg Amusment Park",
      "0 m to Gothenburg Central Station",
    ],

    bookingDetails: {
      checkIn: "14 August 2024",
      checkOut: "18 August 2024",
    },

    othersInfo: [
      "You Will Stay 4 Nights",
      "You Selected 2 Rooms For :",
      "2 Adults",
      "3 Children (12 ,7 and 5 Years Old)",
      "0 Infant",
    ],
  };

  const custumeInput = (props) => {
    return (
      <input className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-indigo-50" />
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:px-10">
        {/* Left Column - Hotel Info */}
        <div className="col-span-1">
          <div className="flex  bg-white shadow-sm ">
            <div className=" rounded-lg shadow-sm p-4 mb-4">
              {bookingHotelDetails.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Hotel ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
              ))}
            </div>

            <div className=" space-y-3 h-full rounded-lg w-full p-4">
              <h2 className="font-bold text-xl mb-4">
                {bookingHotelDetails.title}
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                {bookingHotelDetails.roomType}
              </p>
              <div>
                <h3 className="font-semibold mb-2">
                  {bookingHotelDetails.locationInfo}
                </h3>
                <ul className="text-sm text-gray-600 list-disc list-inside">
                  {bookingHotelDetails.locationInformation.map(
                    (info, index) => (
                      <li key={index}>{info}</li>
                    )
                  )}
                </ul>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  {bookingHotelDetails.founitures.includes(
                    "Location Information"
                  ) && (
                    <>
                      <MapPin className="w-4 h-4" />
                      <span>Location Information</span>
                    </>
                  )}
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  {bookingHotelDetails.founitures.includes("Free Wifi") && (
                    <>
                      <Wifi className="w-4 h-4" />
                      <span>Free Wifi</span>
                    </>
                  )}
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  {bookingHotelDetails.founitures.includes(
                    "Workout Solution"
                  ) && (
                    <>
                      <Coffee className="w-4 h-4" />
                      <span>Workout Solution</span>
                    </>
                  )}
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  {bookingHotelDetails.founitures.includes("Breakfast") && (
                    <>
                      <Utensils className="w-4 h-4" />
                      <span>Breakfast</span>
                    </>
                  )}
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  {bookingHotelDetails.founitures.includes("Transferring") && (
                    <>
                      <Car className="w-4 h-4" />
                      <span>Transferring</span>
                    </>
                  )}
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  {bookingHotelDetails.founitures.includes(
                    "First Hotel Green"
                  ) && (
                    <>
                      <Info className="w-4 h-4" />
                      <span>First Hotel Green</span>
                    </>
                  )}
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  {bookingHotelDetails.founitures.includes(
                    "Free Laundry Service"
                  ) && (
                    <>
                      <Users className="w-4 h-4" />
                      <span>Free Laundry Service</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Booking Details */}
          <div className="bg-white rounded-lg shadow-sm p-4 mt-4 border border-gray-200">
            <h3 className="font-bold text-lg mb-4">Your Booking Details</h3>

            <div className=" gap-4 mb-4">
              <div>
                {/* Check-In Details */}
                <div className="text-sm text-gray-600 flex items-center justify-between px-5 py-2 ">
                  <p className="flex px-4  flex-col gap-2 border-l-4 border-blue-300   rounded-md">
                    <span className="text-center font-bold">Check-In:</span>
                    {bookingHotelDetails.bookingDetails.checkIn}
                  </p>
                  <p className=" flex px-4  flex-col gap-2 border-l-4 border-blue-300  rounded-md">
                    <span className="text-center font-bold">Check-Out:</span>
                    {bookingHotelDetails.bookingDetails.checkOut}
                  </p>
                </div>
                {/* others info */}
                {bookingHotelDetails.othersInfo.map((info, index) => (
                  <ul className="mt-3 text-gray-600 list-disc list-inside">
                    <li key={index} className="text-sm text-gray-600">
                      {info}
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>

          {/*  */}

          <div className="w-full bg-white shadow-sm border border-gray-200 my-3 rounded-md p-6">
            {/* Room Title */}
            <div className="mb-6">
              <h2 className="text-xl">
                <span className="font-bold">The Room :</span>{" "}
                <span className="font-normal">Superior Twin Room</span>
              </h2>
            </div>

            {/* Guest Number */}
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-5 h-5 text-gray-700" />
              <span className="font-bold text-gray-900">Guest Number</span>
              <span className="text-gray-700">2 Adult</span>
            </div>

            {/* Cleanliness Rating */}
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-5 h-5 text-gray-700" />
              <span className="text-gray-700">Cleanliness Rooms Rate</span>
              <div className="bg-blue-100 border border-blue-600 rounded px-2 py-0.5">
                <span className="text-blue-600 font-bold text-sm">8.8</span>
              </div>
            </div>

            {/* Amenities Grid */}
            <div className="grid grid-cols-2 gap-3">
              {/* Size */}
              <button className="flex items-center gap-2 border-2 border-green-600 bg-green-50 rounded-lg px-4 py-3 hover:bg-green-100 transition-colors">
                <Square className="w-5 h-5 text-gray-700" />
                <span className="text-sm font-medium text-gray-900">18 M²</span>
              </button>

              {/* Location */}
              <button className="flex items-center gap-2 border-2 border-green-600 bg-green-50 rounded-lg px-4 py-3 hover:bg-green-100 transition-colors">
                <MapPin className="w-5 h-5 text-gray-700" />
                <span className="text-sm font-medium text-gray-900">
                  City Center
                </span>
              </button>

              {/* Forest */}
              <button className="flex items-center gap-2 border-2 border-green-600 bg-green-50 rounded-lg px-4 py-3 hover:bg-green-100 transition-colors col-span-2">
                <Trees className="w-5 h-5 text-gray-700" />
                <span className="text-sm font-medium text-gray-900">
                  Next To Forest
                </span>
              </button>

              {/* Bathroom */}
              <button className="flex items-center gap-2 border-2 border-green-600 bg-green-50 rounded-lg px-4 py-3 hover:bg-green-100 transition-colors">
                <Bath className="w-5 h-5 text-gray-700" />
                <span className="text-sm font-medium text-gray-900">
                  En-Suite Bath Room
                </span>
              </button>

              {/* TV */}
              <button className="flex items-center gap-2 border-2 border-green-600 bg-green-50 rounded-lg px-4 py-3 hover:bg-green-100 transition-colors">
                <Tv className="w-5 h-5 text-gray-700" />
                <span className="text-sm font-medium text-gray-900">
                  Flat-Screen TV
                </span>
              </button>
            </div>
          </div>

          {/*  */}

          <div className="w-full mx-auto bg-white rounded-md  border shadow-sm border-gray-300 p-6">
            <div className="bg-white rounded-lg p-6 mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-8">
                Payment Information
              </h1>

              {/* Your Price Summary */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Your Price Summary
                </h2>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Original Price</span>
                    <span className="font-semibold text-gray-900">
                      $960{" "}
                      <span className="text-gray-600 font-normal">
                        4 Nights
                      </span>
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">
                      EasySet24 Loyalty Discount 4 %
                    </span>
                    <span className="text-red-500 font-semibold">
                      $100 Discount
                    </span>
                  </div>

                  <div className="border-t-2 border-gray-300 pt-3 mt-3 flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">
                      Total Amount For Payment
                    </span>
                    <span className="text-2xl font-bold text-green-600">
                      $860
                    </span>
                  </div>
                </div>
              </div>

              {/* Cancellation Policy */}
              <div className="mb-8 pb-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Cancellation Policy
                </h2>

                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      Free Cancellation
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Cancel /Rebook No Later Than 24 Hours Before, Otherwise
                      You Pay 80% Of The Cost.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pay Part Now, Part Later */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-xl font-bold text-gray-900">
                    Pay Part Now, Part Later
                  </h2>
                  <div className="w-6 h-6 rounded-full border-4 border-blue-600 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                  </div>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed">
                  Pay $ 200 Now, And The Rest ($6,60) Will Be Automatically
                  Charged To The Same Payment Method On August 27, 2023. No
                  Extra Fees.
                </p>
              </div>

              {/* Payment Methods */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Payment Methods
                </h2>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-gray-900">
                      Payment Method
                    </span>

                    <div className="flex gap-2 border border-gray-300 rounded px-3 py-2">
                      <div className="w-8 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
                        P
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-gray-900">
                      Booking For Work
                    </span>
                    <button
                      onClick={() => setBookingForWork(!bookingForWork)}
                      className="w-6 h-6 rounded-full border-4 border-blue-600 flex items-center justify-center"
                    >
                      {bookingForWork && (
                        <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                      )}
                    </button>
                  </div>
                </div>
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
          <div className="bg-white rounded-md shadow-sm border-gray-300 p-4 mb-4">
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
                  <PhoneInput
                    placeholder="Enter phone number"
                    value={phoneNumber}
                    onChange={setPhoneNumber}
                    defaultCountry="gn"
                    international
                    initialValueFormat="national"
                    inputComponent={custumeInput}
                  />
                  <label className="flex items-center text-xs whitespace-nowrap">
                    <input type="checkbox" className="mr-1 w-5 h-5" />
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

          {/* Right Column - Payment */}
          <div className="">
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
            </div>
          </div>

          <div className="w-full bg-gray-50 flex items-center justify-center p-6">
            <div className="bg-white rounded-lg shadow-sm p-8 w-full max-w-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Bank Card Information
              </h2>

              <div className="grid grid-cols-4 gap-4 mb-8 w-full md:grid-cols-4">
                {/* Full Name */}
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name On The Card
                  </label>
                  <input
                    type="text"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    placeholder="Anna Carlina"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Card Number */}
                <div className=" flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Card Number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => {
                        const formatted = formatCardNumber(e.target.value);
                        if (formatted.length <= 19) {
                          setCardNumber(formatted);
                        }
                      }}
                      placeholder="•••• •••• •••• ••••"
                      className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <CreditCard className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  </div>
                </div>

                {/* EXP Date */}
                <div className="w-32">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    EXP Date
                  </label>
                  <input
                    type="text"
                    value={expDate}
                    onChange={(e) => {
                      const formatted = formatExpDate(e.target.value);
                      if (formatted.length <= 5) {
                        setExpDate(formatted);
                      }
                    }}
                    placeholder="**/**"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* CVC */}
                <div className="w-32">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CVC
                  </label>
                  <input
                    type="text"
                    value={cvc}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "");
                      if (value.length <= 3) {
                        setCvc(value);
                      }
                    }}
                    placeholder="***"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <button className="flex-1 border-2 border-blue-600 text-blue-600 font-semibold py-3 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                  <Heart className="w-5 h-5" />
                  Save In Shortcut
                </button>
                <button className="flex-1 bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelBookingForm;
