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
  Pencil,
  Mail,
  ChevronDown,
  Plane,
  Clock,
  Building,
  Calendar,
  CarTaxiFront,
} from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "764378888888",
    assistance: "Not Provided",
    country: "",
  });

  //
  const [selectedFlight, setSelectedFlight] = useState(false);
  const [selectedTaxi, setSelectedTaxi] = useState(false);
  const [closeRooms, setCloseRooms] = useState(false);
  const [arrivalTime, setArrivalTime] = useState(new Date());

  const formatedTime = (date) => {
    if (!date) return;

    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

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
      <input
        {...props}
        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-indigo-50"
      />
    );
  };

  const [mobileProvider, setMobileProvider] = useState("orange");
  const [mobileNumber, setMobileNumber] = useState("");
  const [saveCard, setSaveCard] = useState(false);

  // Formatters
  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  };

  const formatExpDate = (value) => {
    const v = value.replace(/[^0-9]/g, "");
    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    return v;
  };

  // Conversion USD/GNF
  const usdToGnf = (usd) => {
    const rate = 8600; // Taux approximatif 1 USD = 8600 GNF
    return Math.round(usd * rate).toLocaleString();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:px-10">
        {/* Left Column - Hotel Info */}
        <div className="col-span-1">
          <div className="flex  bg-white shadow-sm  border border-gray-300 rounded-md">
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
          <div className="bg-white rounded-md shadow-sm p-4 mt-4 border border-gray-200">
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

          <div className="w-full mx-auto bg-white rounded-md border shadow-sm border-gray-300 p-6">
            <div className="bg-white rounded-lg p-6 mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-8">
                Payment Information
              </h1>

              {/* Devise et pays */}
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-blue-900">
                      🌍 Payment Location
                    </p>
                    <p className="text-sm text-gray-700">
                      Guinea • Conakry Time (GMT)
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-blue-900">💱 Currency</p>
                    <p className="text-sm text-gray-700">
                      USD <span className="text-gray-500">→</span> GNF (Franc
                      Guinéen)
                    </p>
                  </div>
                </div>
              </div>

              {/* Your Price Summary */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Your Price Summary
                </h2>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Original Price</span>
                    <div className="text-right">
                      <span className="font-semibold text-gray-900">
                        $960{" "}
                        <span className="text-gray-600 font-normal">
                          4 Nights
                        </span>
                      </span>
                      <p className="text-xs text-gray-500">
                        {usdToGnf(960)} GNF
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">
                      EasySet24 Loyalty Discount 4 %
                    </span>
                    <div className="text-right">
                      <span className="text-red-500 font-semibold">
                        $100 Discount
                      </span>
                      <p className="text-xs text-gray-500">
                        {usdToGnf(100)} GNF
                      </p>
                    </div>
                  </div>

                  <div className="border-t-2 border-gray-300 pt-3 mt-3 flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">
                      Total Amount For Payment
                    </span>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-green-600">
                        $860
                      </span>
                      <p className="text-sm font-semibold text-gray-700">
                        ≈ {usdToGnf(860)} GNF
                      </p>
                    </div>
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
                    <p className="text-xs text-gray-500 mt-2">
                      🇬🇳 Applies to payments made via Flutterwave in Guinea
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
                  Pay $200 Now, And The Rest ($660) Will Be Automatically
                  Charged To The Same Payment Method On August 27, 2023. No
                  Extra Fees.
                </p>
                <div className="mt-2 p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-600">
                    💰{" "}
                    <span className="font-semibold">
                      Flutterwave Split Payment:
                    </span>
                    First payment processed immediately, remaining balance
                    scheduled automatically.
                  </p>
                </div>
              </div>

              {/* Payment Methods - Adapté pour Flutterwave Guinée */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Payment Methods (Flutterwave)
                </h2>

                {/* Sélection du mode de paiement */}
                <div className="mb-6 grid grid-cols-3 gap-3">
                  <button
                    onClick={() => setPaymentMethod("card")}
                    className={`p-4 border rounded-lg flex flex-col items-center justify-center transition-all ${
                      paymentMethod === "card"
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold mb-2">
                      P
                    </div>
                    <span className="font-medium text-sm">Card</span>
                    <span className="text-xs text-gray-500">
                      Visa/Mastercard
                    </span>
                  </button>

                  <button
                    onClick={() => setPaymentMethod("mobile")}
                    className={`p-4 border rounded-lg flex flex-col items-center justify-center transition-all ${
                      paymentMethod === "mobile"
                        ? "border-green-600 bg-green-50"
                        : "border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white mb-2">
                      📱
                    </div>
                    <span className="font-medium text-sm">Mobile Money</span>
                    <span className="text-xs text-gray-500">Orange/MTN</span>
                  </button>

                  <button
                    onClick={() => setPaymentMethod("bank")}
                    className={`p-4 border rounded-lg flex flex-col items-center justify-center transition-all ${
                      paymentMethod === "bank"
                        ? "border-purple-600 bg-purple-50"
                        : "border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white mb-2">
                      🏦
                    </div>
                    <span className="font-medium text-sm">Bank Transfer</span>
                    <span className="text-xs text-gray-500">Local Banks</span>
                  </button>
                </div>

                {/* Informations Mobile Money (conditionnel) */}
                {paymentMethod === "mobile" && (
                  <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Mobile Provider
                        </label>
                        <select
                          value={mobileProvider}
                          onChange={(e) => setMobileProvider(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                          <option value="orange">Orange Money Guinea</option>
                          <option value="mtn">MTN Mobile Money Guinea</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 text-gray-500">
                            +224
                          </span>
                          <input
                            type="tel"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                            placeholder="6XX XXX XXX"
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-gray-900">
                      Payment Method Selected
                    </span>
                    <div className="flex gap-2 border border-gray-300 rounded px-3 py-2">
                      {paymentMethod === "card" && (
                        <>
                          <div className="w-8 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
                            P
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          </div>
                        </>
                      )}
                      {paymentMethod === "mobile" && (
                        <div className="flex items-center gap-2">
                          <span className="text-green-600">📱</span>
                          <span className="text-sm">
                            {mobileProvider === "orange"
                              ? "Orange Money"
                              : "MTN Money"}
                          </span>
                        </div>
                      )}
                      {paymentMethod === "bank" && (
                        <div className="flex items-center gap-2">
                          <span className="text-purple-600">🏦</span>
                          <span className="text-sm">Bank Transfer</span>
                        </div>
                      )}
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

              {/* Sécurité Flutterwave */}
              <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600">🔒</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Secure by Flutterwave
                    </p>
                    <p className="text-xs text-gray-600">
                      PCI DSS Compliant • Bank-level encryption • Supports
                      Guinean payment methods
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column - Form */}
        <div className="col-span-1">
          {/* Host Info */}
          <div className="bg-white rounded-md shadow-sm border border-gray-300 p-4 mb-4 pb-5 md:pb-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
                  alt="Host"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">Anne Cortose</p>
                  <p className="text-xs text-gray-500">annecortose@gmail.com</p>
                </div>
              </div>
              <button className="border border-blue-600 text-blue-600 px-4 py-1 rounded text-sm hover:bg-blue-50">
                Check Your Booking/Status
              </button>
            </div>
            <div className="mt-4 flex items-center justify-between px-10">
              <p className="text-sm font-semibold">Who Are You Booking For?</p>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 mt-2">
                  <input type="radio" name="bookingFor" className="w-4 h-4" />
                  <span className="text-sm">Myself</span>
                </label>
                <label className="flex items-center gap-2 mt-2">
                  <input type="radio" name="bookingFor" className="w-4 h-4" />
                  <span className="text-sm">Someone Else</span>
                </label>
              </div>
            </div>
            <div>
              <h2 className="font-bold text-lg mt-4 mb-2">
                Enter Your Information
              </h2>
              <p className="text-xs text-gray-500">
                Make Sure the Information that you Have already written in your
                Profile is Correct.
              </p>
              <div className="flex justify-end">
                <button className="  flex items-center gap-2 mt-4   text-blue-500 px-4 py-1 rounded text-sm hover:bg-blue-50">
                  <Pencil /> Edit Your Profile
                </button>
              </div>
            </div>
          </div>

          {/* Enter Your Information */}
          <div className="bg-white rounded-md shadow-sm border border-gray-300 p-4 mb-4">
            <div className="w-full mx-auto bg-white p-8">
              {/* Full Name Section */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Full Name
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <input
                      type="text"
                      placeholder="First name *"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="col-span-1">
                    <input
                      type="text"
                      placeholder="Middle name"
                      value={formData.middleName}
                      onChange={(e) =>
                        setFormData({ ...formData, middleName: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="col-span-1">
                    <input
                      type="text"
                      placeholder="Last name *"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* Email and Phone Section */}
                  <div className="col-span-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Email Address
                    </h3>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="email"
                        placeholder="........................"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full border border-gray-300 rounded-md pl-11 pr-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="col-span-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Phone Number
                    </h3>
                    <div className="relative">
                      <PhoneInput
                        placeholder="Enter phone number"
                        value={phoneNumber}
                        onChange={setPhoneNumber}
                        defaultCountry="gn"
                        international
                        initialValueFormat="national"
                        inputComponent={custumeInput}
                      />
                    </div>
                  </div>
                </div>

                {/* Assistance Section */}
                <div className="my-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    If You Need Assistance
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Choose An Option Based On Physical Disability Accordingly.
                  </p>
                  <div className="flex items-center justify-between gap-2">
                    <div className="col-span-2">
                      <div className="">
                        <label className="block text-base font-bold text-gray-900 mb-3">
                          Chose An Option
                        </label>
                        <div className="relative">
                          <select
                            value={formData.assistance}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                assistance: e.target.value,
                              })
                            }
                            className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-600 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white cursor-pointer"
                          >
                            <option>Not Provided</option>
                            <option>Wheelchair Access</option>
                            <option>Visual Impairment</option>
                            <option>Hearing Impairment</option>
                            <option>Mobility Assistance</option>
                            <option>Other</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    <div className="col-span-2">
                      <label className="block text-base font-bold text-gray-900 mb-3">
                        Region /Country
                      </label>
                      <input
                        type="text"
                        placeholder="Country *"
                        value={formData.country}
                        onChange={(e) =>
                          setFormData({ ...formData, country: e.target.value })
                        }
                        className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Add To Your Stay */}

          {/* Right Column - Payment */}

          <div className="bg-white rounded-md shadow-sm border border-gray-300 max-w-4xl mx-auto p-4 md:p-6 lg:p-8">
            {/* Titre principal */}
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                Add To Your Stay
              </h2>
              <p className="text-gray-600">Enhance your travel experience</p>
            </div>

            {/* Section Vol */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-6 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Plane className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="flightNeeded"
                        checked={selectedFlight}
                        onChange={(e) => setSelectedFlight(e.target.checked)}
                        className="w-5 h-5 text-blue-600 rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer transition-all"
                      />
                      <label
                        htmlFor="flightNeeded"
                        className="text-lg font-semibold text-gray-800 cursor-pointer hover:text-blue-600 transition-colors"
                      >
                        I Will Need A Flight For My Trip
                      </label>
                    </div>

                    {selectedFlight && (
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform transition-transform hover:scale-105">
                        ✈️ 20% Special Offer On Flights
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {selectedFlight && (
                <div className="animate-fadeIn mt-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                  <p className="text-gray-800 font-medium mb-2">
                    ✈️ Flexible Flight Options From Stockholm To Turkey
                  </p>
                  <p className="text-gray-600 text-sm">
                    Starting from{" "}
                    <span className="font-bold text-blue-600">
                      SLK 766/Round Trip
                    </span>
                  </p>
                  <p className="text-gray-500 text-sm italic mt-2">
                    Get flight recommendations that perfectly match your
                    selected dates.
                  </p>
                </div>
              )}
            </div>

            {/* Section Taxi */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-6 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-green-100 rounded-xl">
                  <CarTaxiFront className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="taxiNeeded"
                        checked={selectedTaxi}
                        onChange={(e) => setSelectedTaxi(e.target.checked)}
                        className="w-5 h-5 text-green-600 rounded-lg border-gray-300 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 cursor-pointer transition-all"
                      />
                      <label
                        htmlFor="taxiNeeded"
                        className="text-lg font-semibold text-gray-800 cursor-pointer hover:text-green-600 transition-colors"
                      >
                        Want To Book A Taxi Or Shuttle Ride In Advance?
                      </label>
                    </div>

                    {selectedTaxi && (
                      <div className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform transition-transform hover:scale-105">
                        <CarTaxiFront /> 10% Special Offer On Taxi
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {selectedTaxi && (
                <div className="animate-fadeIn mt-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                  <p className="text-gray-800 font-medium mb-2">
                    🚗 Avoid Surprises - Seamless Airport Transfer
                  </p>
                  <p className="text-gray-600 text-sm">
                    Get from the airport to your accommodation without a hitch
                  </p>
                  <p className="text-gray-500 text-sm italic mt-2">
                    We will add taxi options directly to your booking
                    confirmation.
                  </p>
                </div>
              )}
            </div>

            {/* Section Demandes spéciales */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-purple-100 rounded-xl">
                  <Building className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Special Requests
                  </h3>
                  <div className="space-y-3">
                    <p className="text-red-500 text-sm font-medium bg-red-50 p-3 rounded-lg border border-red-100">
                      ⚠️ Special requests cannot be guaranteed, but we'll do our
                      best to meet your needs
                    </p>
                    <p className="text-gray-500 text-sm italic">
                      You can always make special requests after your booking is
                      complete!
                    </p>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      Optional
                    </span>

                    <div className="relative group ">
                      <textarea
                        id="specialRequests"
                        rows={5}
                        className="w-full px-4 py-3 pr-10 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 resize-y min-h-[120px] bg-white shadow-sm font-sans"
                      />

                      {/* Icône d'édition */}
                      <div className="absolute left-5 top-16 text-gray-400 group-focus-within:hidden">
                        <Pencil />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 shadow-sm p-4 bg-white rounded-md border border-gray-300">
                <input
                  type="checkbox"
                  id="closeRooms"
                  checked={closeRooms}
                  onChange={(e) => setCloseRooms(e.target.checked)}
                  className="w-5 h-5 text-purple-600 rounded-lg border-gray-300 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 cursor-pointer"
                />
                <label
                  htmlFor="closeRooms"
                  className="text-gray-800 font-medium cursor-pointer flex items-center gap-2"
                >
                  <span className="text-purple-600">📍</span>I Would Like Rooms
                  Close To Each Other
                </label>
              </div>
            </div>

            {/* Section Heure d'arrivée avec React Datepicker */}
            <div className="bg-white rounded-md shadow-sm border border-gray-300 p-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-orange-100 rounded-xl">
                  <Calendar className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Your Arrival Time
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div className="p-4 bg-orange-50 rounded-md border border-orange-100">
                      <p className="text-gray-800 font-medium flex items-center gap-2">
                        <Clock className="w-4 h-4 text-orange-500" />
                        Check-in available between 15:00 - 23:00
                      </p>
                      <p className="text-gray-600 text-sm mt-1">
                        Your rooms will be ready for check-in during these hours
                      </p>
                    </div>

                    <div className="p-4 bg-blue-50 shadow-sm rounded-md border border-blue-100">
                      <p className="text-gray-800 font-medium">
                        🕒 24-Hour Front Desk - Assistance whenever you need it!
                      </p>
                    </div>
                  </div>

                  {/* Sélecteur d'heure avec React Datepicker */}
                  <div className="pt-4 border-t border-gray-300">
                    <label className=" text-gray-700 font-semibold mb-4 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-gray-500" />
                      Add Your Estimated Arrival Time (Optional)
                    </label>

                    <div className="max-w-md space-y-4">
                      <div className="relative">
                        <DatePicker
                          selected={arrivalTime}
                          onChange={(date) => setArrivalTime(date)}
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          timeCaption="Time"
                          dateFormat="HH:mm"
                          placeholderText="Select your arrival time"
                          className="w-full px-4 py-3 pl-12 text-lg border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-200 cursor-pointer"
                          wrapperClassName="w-full"
                          calendarClassName="shadow-xl border border-gray-200 rounded-xl"
                          timeClassName={(time) =>
                            time.getHours() >= 15 && time.getHours() <= 23
                              ? "bg-orange-50 text-gray-800"
                              : "text-gray-400"
                          }
                        />
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                          <Clock className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>

                      {/* Indicateurs visuels */}
                      <div className="flex flex-wrap gap-3 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-gray-600">
                            Recommended hours (15:00-23:00)
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                          <span className="text-gray-500">
                            Outside check-in hours
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-500 text-sm italic mt-2">
                        ⏰ All times shown in CET time zone
                      </p>

                      {arrivalTime && (
                        <div className="animate-fadeIn mt-4 p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl border border-orange-200">
                          <p className="font-medium text-gray-800">
                            ✅ Arrival time set for:{" "}
                            <span className="text-orange-600">
                              {/* {arrivalTime[formatedTime]} */}
                              {formatedTime}
                            </span>
                          </p>
                          <p className="text-gray-600 text-sm mt-1">
                            We'll note your estimated arrival time for better
                            service
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
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
