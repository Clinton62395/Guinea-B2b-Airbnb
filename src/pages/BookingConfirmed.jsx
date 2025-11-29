import React from 'react';
import { Calendar } from 'lucide-react';

const BookingConfirmation = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl mb-2">
            <span className="font-bold text-black">Your Hotel Reservation </span>
            <span className="font-bold text-blue-600">Confirmed</span>
          </h1>
          <p className="text-gray-700 text-sm">
            Contact EasySet24 If You Need To Change In Basic Information With{' '}
            <span className="font-bold">1385</span> Booking Number.
          </p>
        </div>

        {/* Booking Details Card */}
        <div className="bg-gray-100 rounded-lg overflow-hidden mb-8">
          {/* Hero Image Section */}
          <div className="relative h-56">
            <img 
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80"
              alt="Beach Resort"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/70"></div>
            
            {/* Top Left Text */}
            <div className="absolute top-4 left-6">
              <h2 className="text-2xl font-bold text-black mb-1">
                Booking No. 1385 Details
              </h2>
              <p className="text-black text-sm">Check Your Information Here !</p>
            </div>

            {/* Bottom Section */}
            <div className="absolute bottom-4 left-6 right-6">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Hotel Roles</h3>
                  <p className="text-white text-xs">
                    Check-In At 14 : 00 Every Day&nbsp;&nbsp;&nbsp;&nbsp;Check-Out At 12 : 00 , Every Day
                  </p>
                </div>
                <div className="text-white text-xs">
                  Secure By EasySet24 Policy-2024
                </div>
              </div>
            </div>
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-6 bg-gray-400">
            <div className="p-3 text-center text-white font-semibold text-sm border-r border-white">
              Stays
            </div>
            <div className="p-3 text-center text-white font-semibold text-sm border-r border-white">
              <div className="flex items-center justify-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>Check-In</span>
              </div>
            </div>
            <div className="p-3 text-center text-white font-semibold text-sm border-r border-white">
              <div className="flex items-center justify-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>Check-Out</span>
              </div>
            </div>
            <div className="p-3 text-center text-white font-semibold text-sm border-r border-white">
              Quantity
            </div>
            <div className="p-3 text-center text-white font-semibold text-sm border-r border-white">
              Room Type
            </div>
            <div className="p-3 text-center text-white font-semibold text-sm">
              Bed Type
            </div>
          </div>

          {/* Table Data */}
          <div className="grid grid-cols-6 bg-white border-t-2 border-gray-300">
            <div className="p-4 text-center border-r border-gray-200">
              <p className="font-bold text-sm">5 Nights</p>
            </div>
            <div className="p-4 text-center border-r border-gray-200">
              <p className="font-bold text-sm">25 Jan 2024</p>
            </div>
            <div className="p-4 text-center border-r border-gray-200">
              <p className="font-bold text-sm">30 Jan 2024</p>
            </div>
            <div className="p-4 text-center border-r border-gray-200">
              <p className="font-bold text-sm">2 Rooms</p>
            </div>
            <div className="p-4 text-center border-r border-gray-200">
              <p className="font-bold text-sm">Double</p>
            </div>
            <div className="p-4 text-center">
              <p className="font-bold text-sm">Two Twin</p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-white p-4 border-t border-gray-200">
            <div className="flex justify-between text-sm">
              <div className="flex gap-12">
                <span className="text-gray-900">
                  <span className="font-bold">Adults 2</span>, Children 3, Infant 0
                </span>
                <span className="text-gray-900">
                  <span className="font-bold">Additional Services Quantity</span> None
                </span>
              </div>
              <span className="text-gray-900">
                <span className="font-bold">Meal Plan</span> Allergic
              </span>
            </div>
          </div>
        </div>

        {/* Cancellation Policy */}
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cancelation Policy</h2>
          
          <p className="font-bold text-gray-900 mb-3">Pay Attention</p>

          <p className="text-gray-700 text-sm leading-relaxed">
            This Booking Represents The Conclusive Step In The Hotel Reservation Process. 
            It Is Considered Final And May Only Be Canceled By The Hotel In The Event Of 
            Unforeseen Circumstances Or Natural Disasters.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;