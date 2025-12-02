import React from "react";
import { Calendar } from "lucide-react";

const BookingConfirmation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header avec fond amélioré */}
        <div className="mb-8 bg-gradient-to-r from-white to-blue-50 rounded-2xl p-6 md:p-8 shadow-sm border border-blue-100">
          <h1 className="text-3xl md:text-4xl mb-3">
            <span className="font-bold text-gray-900">
              Your Hotel Reservation{" "}
            </span>
            <span className="font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Confirmed
            </span>
          </h1>
          <p className="text-gray-700 text-sm md:text-base">
            Contact EasySet24 If You Need To Change In Basic Information With{" "}
            <span className="font-bold text-blue-700 px-2 py-1 bg-blue-50 rounded-md">
              1385
            </span>{" "}
            Booking Number.
          </p>

          {/* Badge de confirmation */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-700">
              ✓ Reservation Confirmed
            </span>
          </div>
        </div>

        {/* Booking Details Card avec design amélioré */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden mb-8 shadow-lg border border-gray-200">
          {/* Hero Image Section avec overlay amélioré */}
          <div className="relative h-48 md:h-56">
            <img
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80"
              alt="Beach Resort"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

            {/* Top Left Text */}
            <div className="absolute top-6 left-6">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  Booking No. <span className="text-blue-300">1385</span>{" "}
                  Details
                </h2>
              </div>
              <p className="text-white/90 text-sm">
                Check Your Information Here !
              </p>
            </div>

            {/* Bottom Section */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">
                    Hotel Roles
                  </h3>
                  <p className="text-white/90 text-xs md:text-sm">
                    Check-In At 14:00 Every Day • Check-Out At 12:00 Every Day
                  </p>
                </div>
                <div className="text-white/80 text-xs bg-black/30 backdrop-blur-sm px-3 py-2 rounded-lg">
                  Secure By EasySet24 Policy-2024
                </div>
              </div>
            </div>
          </div>

          {/* Table Header avec gradient */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 bg-gradient-to-r from-gray-600 to-gray-700">
            <div className="p-3 text-center text-white font-semibold text-sm border-r border-white/20">
              Stays
            </div>
            <div className="p-3 text-center text-white font-semibold text-sm border-r border-white/20">
              <div className="flex items-center justify-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>Check-In</span>
              </div>
            </div>
            <div className="p-3 text-center text-white font-semibold text-sm border-r border-white/20">
              <div className="flex items-center justify-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>Check-Out</span>
              </div>
            </div>
            <div className="p-3 text-center text-white font-semibold text-sm border-r border-white/20">
              Quantity
            </div>
            <div className="p-3 text-center text-white font-semibold text-sm border-r border-white/20">
              Room Type
            </div>
            <div className="p-3 text-center text-white font-semibold text-sm">
              Bed Type
            </div>
          </div>

          {/* Table Data avec design amélioré */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 bg-white">
            <div className="p-4 text-center border-r border-gray-100 bg-gradient-to-b from-white to-blue-50/30">
              <p className="font-bold text-gray-900 text-sm md:text-base">
                5 Nights
              </p>
            </div>
            <div className="p-4 text-center border-r border-gray-100 bg-gradient-to-b from-white to-blue-50/30">
              <p className="font-bold text-gray-900 text-sm md:text-base">
                25 Jan 2024
              </p>
              <p className="text-xs text-gray-500">14:00</p>
            </div>
            <div className="p-4 text-center border-r border-gray-100 bg-gradient-to-b from-white to-blue-50/30">
              <p className="font-bold text-gray-900 text-sm md:text-base">
                30 Jan 2024
              </p>
              <p className="text-xs text-gray-500">12:00</p>
            </div>
            <div className="p-4 text-center border-r border-gray-100 bg-gradient-to-b from-white to-blue-50/30">
              <p className="font-bold text-gray-900 text-sm md:text-base">
                2 Rooms
              </p>
              <p className="text-xs text-gray-500">Double</p>
            </div>
            <div className="p-4 text-center border-r border-gray-100 bg-gradient-to-b from-white to-blue-50/30">
              <p className="font-bold text-gray-900 text-sm md:text-base">
                Double
              </p>
              <p className="text-xs text-gray-500">Standard</p>
            </div>
            <div className="p-4 text-center bg-gradient-to-b from-white to-blue-50/30">
              <p className="font-bold text-gray-900 text-sm md:text-base">
                Two Twin
              </p>
              <p className="text-xs text-gray-500">Beds</p>
            </div>
          </div>

          {/* Additional Info avec fond amélioré */}
          <div className="bg-gradient-to-r from-gray-50 to-white p-4 md:p-6 border-t border-gray-200">
            <div className="flex flex-col md:flex-row md:justify-between gap-4 text-sm">
              <div className="flex flex-col sm:flex-row gap-4 md:gap-12">
                <span className="text-gray-900 bg-white px-3 py-2 rounded-lg border border-gray-200">
                  <span className="font-bold text-blue-700">Adults 2</span>,
                  Children 3, Infant 0
                </span>
                <span className="text-gray-900 bg-white px-3 py-2 rounded-lg border border-gray-200">
                  <span className="font-bold text-blue-700">
                    Additional Services
                  </span>{" "}
                  None
                </span>
              </div>
              <span className="text-gray-900 bg-white px-3 py-2 rounded-lg border border-gray-200">
                <span className="font-bold text-blue-700">Meal Plan</span>{" "}
                Allergic
              </span>
            </div>
          </div>
        </div>

        {/* Cancellation Policy avec fond amélioré */}
        <div className="bg-gradient-to-br from-white to-red-50 rounded-2xl p-6 md:p-8 shadow-lg border border-red-100">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Cancellation <span className="text-red-600">Policy</span>
          </h2>

          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
            <p className="font-bold text-red-700 mb-2 flex items-center gap-2">
              <span className="text-lg">⚠️</span>
              Pay Attention
            </p>
          </div>

          <div className="bg-white p-5 md:p-6 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              This Booking Represents The Conclusive Step In The Hotel
              Reservation Process. It Is Considered Final And May Only Be
              Canceled By The Hotel In The Event Of Unforeseen Circumstances Or
              Natural Disasters.
            </p>

            {/* Timeline de cancellation */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-900">
                    Free Cancellation
                  </p>
                  <p className="text-xs text-gray-600">Until Jan 24, 14:00</p>
                </div>

                <div className="flex-1 h-1 bg-gray-200 mx-4">
                  <div className="h-full bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 rounded-full"></div>
                </div>

                <div className="text-center">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-red-600 font-bold">80%</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-900">
                    After Deadline
                  </p>
                  <p className="text-xs text-gray-600">80% Charged</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer avec info de contact */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <p className="font-bold text-gray-900 mb-1">Need Assistance?</p>
                <p className="text-sm text-gray-600">
                  Contact EasySet24 Support for any questions about your booking
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">24/7 Support</p>
                <p className="font-bold text-blue-700 text-lg">
                  +224 611 222 333
                </p>
              </div>
            </div>
          </div>

          {/* <p className="text-center text-gray-400 text-xs mt-6">
            © 2024 EasySet24 • Secure Booking System • Protected by Flutterwave
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
