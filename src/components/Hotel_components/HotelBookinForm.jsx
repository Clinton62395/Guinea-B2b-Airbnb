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
  Pencil,
  Mail,
  ChevronDown,
  Plane,
  Clock,
  Building,
  Calendar,
  CarTaxiFront,
  Smartphone,
  CreditCard,
  Phone,
  Palette,
  Globe,
} from "lucide-react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css"; // Import default styles
import { Link } from "react-router-dom";

const HotelBookingForm = () => {
  const [guests, setGuests] = useState(2);
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
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
  // const [selectedFlight, setSelectedFlight] = useState(false);
  // const [selectedTaxi, setSelectedTaxi] = useState(false);
  // const [closeRooms, setCloseRooms] = useState(false);
  const [needFlight, setNeedFlight] = useState(false);
  const [needTaxi, setNeedTaxi] = useState(false);
  const [roomsClose, setRoomsClose] = useState(false);
  const [specialRequest, setSpecialRequest] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");

  // const [arrivalTime, setArrivalTime] = useState(new Date());

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

  const paymentOptions = [
    {
      value: "card",
      label: (
        <div className="flex items-center gap-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg"
            alt="Card Payment"
            className="h-6 w-auto"
          />
          <span className="text-sm font-medium text-gray-700">
            Card Payment (Visa / Mastercard)
          </span>
        </div>
      ),
    },
    {
      value: "orange_money",
      label: (
        <div className="flex items-center gap-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMJp_FzxYLHHFQVbNcO38mNyppZL8MruSmwA&s"
            alt="Orange Money"
            className="h-6 w-auto"
          />
          <span className="text-sm font-medium text-gray-700">
            Orange Money
          </span>
        </div>
      ),
    },
    {
      value: "mtn_momo",
      label: (
        <div className="flex items-center gap-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvjprybczXjAGqMKIQCWB17enuKvo4OvyRfg&s"
            alt="MTN MoMo"
            className="h-6 w-auto"
          />
          <span className="text-sm font-medium text-gray-700">
            Mobile Money
          </span>
        </div>
      ),
    },
    {
      value: "bank",
      label: (
        <div className="flex items-center gap-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2hroyuWkHt0xZ__kzXZniwyasepQ71EF4JA&s"
            alt="Bank Transfer"
            className="h-6 w-auto"
          />
          <span className="text-sm font-medium text-gray-700">
            Bank Transfer
          </span>
        </div>
      ),
    },
    {
      value: "ussd",
      label: (
        <div className="flex items-center gap-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFklfuc7uwntoaP_-quis6PgJX4-cAGE7bSQ&s"
            alt="USSD"
            className="h-6 w-auto"
          />
          <span className="text-sm font-medium text-gray-700">
            USSD Payment
          </span>
        </div>
      ),
    },
    {
      value: "barter",
      label: (
        <div className="flex items-center gap-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB0dj3WlxCCYIiM7jFw_x0juekDVRF1rM_eQ&s"
            alt="Barter"
            className="h-6 w-auto"
          />
          <span className="text-sm font-medium text-gray-700">
            Barter by Flutterwave
          </span>
        </div>
      ),
    },
    {
      value: "paypal",
      label: (
        <div className="flex items-center gap-3">
          <img
            src="https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_640.png"
            alt="PayPal"
            className="h-6 w-auto"
          />
          <span className="text-sm font-medium text-gray-700">PayPal</span>
        </div>
      ),
    },
  ];
  // Composant personnalisé pour chaque option

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:px-10">
        {/* Left Column - Hotel Info */}
        <div className="col-span-1">
          <div className="flex p bg-white shadow-sm  border border-gray-300 rounded-md">
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
            <div className=" px-5 py-8">
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
              <div className="grid grid-cols-3 gap-3">
                {" "}
                {/* Supprime place-items-center */}
                {/* Size */}
                <div className="col-span-1">
                  <button className="flex items-center justify-center gap-2 border-2 border-green-600 bg-green-50 rounded-lg px-4 py-3 hover:bg-green-100 transition-colors w-full">
                    {" "}
                    {/* w-full ici */}
                    <Square className="w-5 h-5 text-gray-700" />
                    <span className="text-sm font-medium text-gray-900">
                      18 M²
                    </span>
                  </button>
                </div>
                {/* Location */}
                <div className="col-span-1">
                  <button className="flex items-center justify-center gap-2 border-2 border-green-600 bg-green-50 rounded-lg px-4 py-3 hover:bg-green-100 transition-colors w-full">
                    <MapPin className="w-5 h-5 text-gray-700" />
                    <span className="text-sm font-medium text-gray-900">
                      City Center
                    </span>
                  </button>
                </div>
                {/* Forest */}
                <div className="col-span-1">
                  <button className="flex items-center justify-center gap-2 border-2 border-green-600 bg-green-50 rounded-lg px-4 py-3 hover:bg-green-100 transition-colors w-full">
                    <Trees className="w-5 h-5 text-gray-700" />
                    <span className="text-sm font-medium text-gray-900">
                      Next To Forest
                    </span>
                  </button>
                </div>
              </div>

              {/* Bathroom */}
              <div className="grid grid-cols-2  items-center gap-4 w-full my-4">
                <div className="col-span-1">
                  <button className="flex items-center justify-center gap-2 border-2 border-green-600 bg-green-50 rounded-lg px-4 py-3 hover:bg-green-100 transition-colors w-full">
                    <Bath className="w-5 h-5 text-gray-700" />
                    <span className="text-sm font-medium text-gray-900">
                      En-Suite Bath Room
                    </span>
                  </button>
                </div>
                {/* TV */}
                <div className="col-span-1">
                  <button className="flex items-center justify-center gap-2 border-2 border-green-600 bg-green-50 rounded-lg px-4 py-3 hover:bg-green-100 transition-colors w-full">
                    <Tv className="w-5 h-5 text-gray-700" />
                    <span className="text-sm font-medium text-gray-900">
                      Flat-Screen TV
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* payment info */}

          <div className="w-full  mx-auto bg-white border border-gray-300 shadow-sm rounded-md p-6">
            {/* Payment Information Header */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Payment Information
            </h2>

            {/* Your Price Summary */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Your Price Summary
              </h3>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-gray-900">
                    Original Price
                  </span>
                  <span className="text-sm font-bold text-gray-900">
                    $860{" "}
                    <span className="font-normal text-gray-600">4 Nights</span>
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">
                    EasySet24 Loyalty Discount 4 %
                  </span>
                  <span className="text-sm text-red-500">$100 Discount</span>
                </div>

                <div className="pt-3 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-base font-bold text-gray-900">
                      Total Amount For Payment
                    </span>
                    <span className="text-xl font-bold text-green-600">
                      $860
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cancellation Policy */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Cancellation Policy
              </h3>

              <div className="flex items-start gap-2 mb-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-gray-900">
                  Free Cancellation
                </span>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed">
                Cancel /Rebook No Later Than 24 Hours Before, Otherwise You Pay
                The Full Amount. No Cost.
              </p>
            </div>

            {/* Pay Part Now, Part Later */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-900">
                  Pay Part Now, Part Later
                </h3>
                <div className="relative">
                  <input
                    type="radio"
                    name="paymentPlan"
                    className="w-5 h-5 accent-blue-600 cursor-pointer"
                    defaultChecked
                  />
                </div>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed">
                Pay $ 430.00 Now, And The Rest ($430.00) Will Be Automatically
                Charged To The Same Payment Method On August 27, 2023. No Extra
                Fees.
              </p>
            </div>

            {/* Payment Methods */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Payment Methods
              </h3>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-gray-900">
                    Payment Method
                  </span>
                  <div className="flex items-center gap-2 border border-gray-300 rounded px-3 py-2">
                    <span className="text-blue-600 text-lg md:text-4xl font-extrabold">
                      P
                    </span>

                    <Select
                      options={paymentOptions}
                      placeholder="Payment Method..."
                      isSearchable={false}
                      classNamePrefix=" outline-none"
                      defaultValue={paymentOptions[1]}
                      classNames={{
                        control: () =>
                          "bg-transparent shadow-none !border-0 !outline-none focus:!ring-0  !appearance-none",
                        menu: () => "  rounded-lg shadow-lg bg-white",
                        option: ({ isFocused, isSelected }) =>
                          `
        cursor-pointer flex items-center gap-2 px-3 py-2 
        ${isSelected ? "bg-blue-500 text-white" : ""}
        ${isFocused && !isSelected ? "bg-gray-100" : ""}
      `,
                        placeholder: () => "text-gray-400",
                        singleValue: () => "text-gray-700",
                      }}
                      styles={{
                        control: (base) => ({
                          ...base,
                          border: "none",
                          boxShadow: "none",
                          background: "transparent",
                        }),

                        indicatorSeparator: () => ({ display: "none" }),
                      }}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 ">
                  <span className="text-sm font-semibold text-gray-900">
                    Booking For Work
                  </span>
                  <div className="relative">
                    <input
                      type="radio"
                      name="bookingWork"
                      checked={bookingForWork}
                      onChange={() => setBookingForWork(!bookingForWork)}
                      className="w-5 h-5 accent-blue-600 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column - Form */}
        <div className="col-span-1">
          {/* card payment */}
          <div className="w-full mx-auto bg-white p-6 rounded-md border border-gray-200 mb-2">
            <h2 className="text-xl font-semibold mb-5">
              Bank Card Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">
                  Full Name On The Card
                </label>
                <input
                  type="text"
                  placeholder="Anna Carina"
                  className="border-2 rounded-md px-3 py-2 outline-none  focus:border-blue-500 right-1 focus:ring-blue-600 transition-all duration-300"
                />
              </div>

              {/* Card Number */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Card Number</label>
                <div className="flex items-center border-2  rounded-md px-3 py-2 gap-2 focus-within:border-blue-500   focus-within:ring-blue-600 transition-all duration-300">
                  <span className="text-gray-400">💳</span>
                  <input
                    type="text"
                    placeholder="•••• •••• •••• ••••"
                    className="w-full outline-none  "
                  />
                </div>
              </div>

              {/* EXP Date */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">EXP Date</label>
                <input
                  type="text"
                  placeholder="••/••"
                  className="border-2 rounded-md px-3 py-2 outline-none  focus:border-blue-500 right-1 focus:ring-blue-600 transition-all duration-300"
                />
              </div>

              {/* CVC */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">CVC</label>
                <input
                  type="text"
                  placeholder="•••"
                  className="border-2 rounded-md px-3 py-2 outline-none  focus:border-blue-500 right-1 focus:ring-blue-600 transition-all duration-300"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4 mt-6">
              <button className="border-2 rounded-md w-1/2 py-2 font-medium hover:bg-gray-100">
                Save In Shortcut 🤍
              </button>

              <Link
                to="/booking-confirmation"
                className="bg-blue-600 text-white rounded-md w-1/2 py-2 px-5 font-medium hover:bg-blue-700"
              >
                Payment
              </Link>
            </div>
          </div>
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

          <div className="w-full  mx-auto bg-white p-6 rounded-md shadow-sm border border-gray-300">
            {/* Add To Your Stay Header */}
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Add To Your Stay
            </h2>

            {/* Flight Option */}
            <div className="mb-6 pb-6 border-b border-gray-200">
              <label className="flex items-start gap-3 cursor-pointer mb-2">
                <input
                  type="checkbox"
                  checked={needFlight}
                  onChange={(e) => setNeedFlight(e.target.checked)}
                  className="mt-1 w-4 h-4 accent-blue-600 cursor-pointer"
                />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">
                    I Will Need A Flight For My Trip
                  </p>
                </div>
              </label>

              <div className="flex items-center gap-2 ml-7 mb-3">
                <Plane className="w-4 h-4 text-gray-600" />
                <span className="text-xs text-red-500 font-semibold">
                  20% Special Offer If You Book A Flight
                </span>
              </div>

              <p className="text-xs text-gray-700 ml-7 mb-2 leading-relaxed">
                Flexible Flight Options From Stockholm To Turkiye From SLK
                766/Round Trip. Finnish Booking
              </p>

              <p className="text-xs text-gray-700 ml-7 leading-relaxed">
                This Stay To Get Flight Recommendations That Match Your Selected
                Dates.
              </p>
            </div>

            {/* Taxi/Shuttle Option */}
            <div className="mb-8 pb-6 border-b border-gray-200">
              <label className="flex items-start gap-3 cursor-pointer mb-2">
                <input
                  type="checkbox"
                  checked={needTaxi}
                  onChange={(e) => setNeedTaxi(e.target.checked)}
                  className="mt-1 w-4 h-4 accent-blue-600 cursor-pointer"
                />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">
                    Want To Book A Taxi Or Shuttle Ride In Advance?
                  </p>
                </div>
              </label>

              <div className="flex items-center gap-2 ml-7 mb-3">
                <Car className="w-4 h-4 text-gray-600" />
                <span className="text-xs text-red-500 font-semibold">
                  10% Special Offer If You Rent A Taxi
                </span>
              </div>

              <p className="text-xs text-gray-700 ml-7 leading-relaxed">
                Avoid Surprises... Get From The Airport To Your Accommodation
                Without A Hitch. We Will Add Taxi Options To Your Booking
                Confirmation.
              </p>
            </div>

            {/* Special Requests */}
            <div className="mb-8">
              <h3 className="text-base font-bold text-gray-900 mb-3">
                Special Requests
              </h3>

              <p className="text-xs text-gray-700 mb-2 leading-relaxed">
                Special Requests Can Not Be Guaranteed ... But The Property Will
                Do Its Best To Meet Your Needs.
              </p>

              <p className="text-xs text-gray-700 mb-3 leading-relaxed">
                You Can Always Make A Special Request After Your Booking Is
                Complete!
              </p>

              <p className="text-xs text-gray-500 mb-2">(Optional)</p>

              <textarea
                value={specialRequest}
                onChange={(e) => setSpecialRequest(e.target.value)}
                placeholder="✏️"
                className="w-full border border-gray-300 rounded px-3 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-24"
              />

              <label className="flex items-center gap-3 cursor-pointer mt-4">
                <input
                  type="checkbox"
                  checked={roomsClose}
                  onChange={(e) => setRoomsClose(e.target.checked)}
                  className="w-4 h-4 accent-blue-600 cursor-pointer"
                />
                <span className="text-sm text-gray-900">
                  I Would Like Rooms Close To Each Other
                </span>
              </label>
            </div>

            {/* Your Arrival Time */}
            <div className="mb-6">
              <h3 className="text-base font-bold text-gray-900 mb-4">
                Your Arrival Time
              </h3>

              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-2">
                  <Clock className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    Your Rooms Will Be Ready For Check_in Between 15:00 And
                    23:00
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <Info className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    24-Hour Front Desk_Help Wherever You Need It!
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">
                  Add Your Estimated Arrival Time
                  <span className="text-gray-500 font-normal">(Optional)</span>
                </label>

                <div className="relative max-w-md">
                  <DatePicker
                    selected={arrivalTime}
                    onChange={(date) => setArrivalTime(date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="HH:mm"
                    placeholderText="Select your arrival time"
                    className="w-80 px-4 py-3 pl-12 text-lg border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-200 cursor-pointer"
                    wrapperClassName="w-96"
                    calendarClassName="shadow-md border border-gray-200 rounded-xl"
                    timeClassName={(time) =>
                      time.getHours() >= 15 && time.getHours() <= 23
                        ? "bg-orange-50 text-gray-800"
                        : "text-gray-400"
                    }
                  />
                  <div className="absolute right-36 top-7 transform -translate-y-1/2">
                    <Clock className="w-5 h-5 text-gray-400" />
                  </div>

                  <p className="text-xs text-gray-500 mt-2">
                    Time for CET time zone
                  </p>
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
