import React from "react";
import {
  Calendar,
  CheckCircle,
  Shield,
  MapPin,
  User,
  Phone,
  Mail,
} from "lucide-react";

const BookingConfirmation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header avec badge de confirmation */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-7 h-7 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Booking <span className="text-blue-600">Confirmed!</span>
              </h1>
              <p className="text-gray-600 text-sm md:text-base mt-1">
                Your reservation is secured and confirmed
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
            <p className="text-gray-700 text-sm md:text-base">
              Booking Reference:{" "}
              <span className="font-bold text-blue-700">#1385</span> • Contact
              EasySet24 for changes at{" "}
              <span className="font-bold">+224 123 456 789</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Colonne principale */}
          <div className="lg:col-span-2">
            {/* Carte principale */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 mb-6">
              {/* Hero Image avec overlay */}
              <div className="relative h-64 md:h-72">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80"
                  alt="Luxury Resort"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                {/* Contenu overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                          <span className="text-xs font-bold text-gray-900">
                            ⭐ 4.8 • Luxury Resort
                          </span>
                        </div>
                        <div className="bg-blue-600/90 backdrop-blur-sm px-3 py-1 rounded-full">
                          <span className="text-xs font-bold text-white">
                            🔥 Popular
                          </span>
                        </div>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
                        Sunset Beach Resort
                      </h2>
                      <div className="flex items-center gap-2 text-white/90">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">Conakry, Guinea</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg">
                        <p className="text-xs text-white/80">Booking ID</p>
                        <p className="text-lg font-bold text-white">#1385</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline horizontale */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mb-2">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-sm font-semibold text-gray-900">
                      Check-In
                    </p>
                    <p className="text-sm text-gray-600">Jan 25, 2024</p>
                    <p className="text-xs text-gray-500">14:00</p>
                  </div>

                  <div className="flex-1 h-1 bg-gray-200 mx-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white border-2 border-blue-500 rounded-full"></div>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mb-2">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-sm font-semibold text-gray-900">
                      Check-Out
                    </p>
                    <p className="text-sm text-gray-600">Jan 30, 2024</p>
                    <p className="text-xs text-gray-500">12:00</p>
                  </div>

                  <div className="flex-1 h-1 bg-gray-200 mx-4">
                    <div className="h-full bg-gradient-to-r from-green-500 to-purple-500 rounded-full"></div>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mb-2">
                      <div className="text-white text-sm font-bold">5</div>
                    </div>
                    <p className="text-sm font-semibold text-gray-900">
                      Duration
                    </p>
                    <p className="text-sm text-gray-600">5 Nights</p>
                  </div>
                </div>
              </div>

              {/* Détails de réservation */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Reservation Details
                </h3>

                {/* Grille de détails */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <p className="text-sm text-gray-600 mb-1">Rooms</p>
                    <p className="text-2xl font-bold text-blue-700">2</p>
                    <p className="text-xs text-gray-500">Double Room</p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-xl">
                    <p className="text-sm text-gray-600 mb-1">Guests</p>
                    <p className="text-2xl font-bold text-green-700">5</p>
                    <div className="text-xs text-gray-500">
                      2 Adults • 3 Children
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-xl">
                    <p className="text-sm text-gray-600 mb-1">Meal Plan</p>
                    <p className="text-2xl font-bold text-purple-700">
                      All Inclusive
                    </p>
                    <p className="text-xs text-gray-500">Special dietary</p>
                  </div>
                </div>

                {/* Informations supplémentaires */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600">🛏️</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Bed Type</p>
                        <p className="text-sm text-gray-600">Two Twin Beds</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <span className="text-green-600">🍽️</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          Additional Services
                        </p>
                        <p className="text-sm text-gray-600">
                          Airport Transfer • Spa Access
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Politique d'annulation */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-red-600" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  Cancellation Policy
                </h2>
              </div>

              <div className="bg-red-50 border border-red-100 rounded-xl p-4 mb-4">
                <p className="font-bold text-red-700 mb-2">
                  ⚠️ Important Notice
                </p>
                <p className="text-sm text-red-600 leading-relaxed">
                  This booking represents the conclusive step in the hotel
                  reservation process. It is considered final and may only be
                  canceled by the hotel in the event of unforeseen circumstances
                  or natural disasters.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      Free Cancellation Until Jan 24
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      You can cancel free of charge until 24 hours before
                      check-in. After this period, 80% of the total amount will
                      be charged.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Informations client et actions */}
          <div className="space-y-6">
            {/* Carte client */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Guest Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Primary Guest</p>
                    <p className="font-semibold text-gray-900">Anna Carlina</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Contact Number</p>
                    <p className="font-semibold text-gray-900">
                      +224 612 345 678
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email Address</p>
                    <p className="font-semibold text-gray-900">
                      anna@example.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-2">Special Requests</p>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700">
                    • Early check-in requested
                  </p>
                  <p className="text-sm text-gray-700">
                    • Non-smoking room preferred
                  </p>
                </div>
              </div>
            </div>

            {/* Actions rapides */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 shadow-lg border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Quick Actions
              </h3>

              <div className="space-y-3">
                <button className="w-full bg-white border border-blue-200 text-blue-700 font-semibold py-3 px-4 rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                  Download Receipt
                </button>

                <button className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Add to Calendar
                </button>

                <button className="w-full bg-white border border-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                  Modify Booking
                </button>
              </div>
            </div>

            {/* Assistance */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-lg border border-green-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    24/7 Support
                  </h3>
                  <p className="text-sm text-gray-600">We're here to help</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-green-200">
                    <span className="text-green-600">📞</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Emergency Contact</p>
                    <p className="font-semibold text-gray-900">
                      +224 611 222 333
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-green-200">
                    <span className="text-green-600">💬</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Live Chat</p>
                    <p className="font-semibold text-gray-900">
                      Available 24/7
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-green-200">
                <p className="text-xs text-gray-500 text-center">
                  Secured by EasySet24 Policy • Protected by Flutterwave
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 md:mt-12 pt-8 border-t border-gray-200">
          <div className="text-center">
            <p className="text-gray-600 text-sm mb-2">
              Need help? Contact our customer support team
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Help Center
              </a>
              <span className="text-gray-300">•</span>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Terms & Conditions
              </a>
              <span className="text-gray-300">•</span>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Privacy Policy
              </a>
              <span className="text-gray-300">•</span>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Contact Us
              </a>
            </div>
            <p className="text-gray-400 text-xs mt-4">
              © 2024 EasySet24. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
