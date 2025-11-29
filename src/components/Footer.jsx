import React from "react";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="bg-[#1E2A38] text-white px-6 py-10">
      {/* Promo Section */}
      <div className=" flex items-center justify-between mb-10">
        <div>
          <h2 className="text-xl font-bold mb-2">
            Go Further With The EasySet24 App
          </h2>
          <p className="text-sm text-gray-300 mb-2">
            Enjoy savings on chosen hotels and flights when you book through the
            EasySet24 website. <br /> Additionally, earn One Key Cash for every
            booking made through the app.
          </p>
          <p className="text-xs text-gray-400">Secured By Europe GTP</p>
        </div>

        <div className="flex flex-col gap-4 mt-4">
          <motion.button
            className="bg-white rounded-md px-2"
            whileHover={{ scale: 1.05 }} // grossit légèrement au hover
            whileTap={{ scale: 0.95 }} // effet "clic"
            initial={{ opacity: 0, y: 20 }} // état initial
            animate={{ opacity: 1, y: 0 }} // état final
            transition={{ duration: 0.4 }}
          >
            <motion.img
              src="/google store.jpeg"
              alt="google Store"
              className="h-12 w-full"
              whileHover={{ rotate: 2 }} // petite rotation au hover
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }} // apparition décalée
          >
            <motion.img
              src="/ios.png"
              alt="ios Play"
              className="h-10 w-full"
              whileHover={{ rotate: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.button>
        </div>
      </div>

      {/* Footer Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-10 text-sm">
        <div>
          <h3 className="font-semibold mb-2">About Us</h3>
          <ul className="space-y-1 text-gray-300">
            <li>Our Story</li>
            <li>Work With Us</li>
            <li>Press & Media</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">We Offer</h3>
          <ul className="space-y-1 text-gray-300">
            <li>Trip Sponsorship</li>
            <li>Last Minutes Flights</li>
            <li>Best Deals</li>
            <li>Hotels & Homes</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Headquarters</h3>
          <ul className="space-y-1 text-gray-300">
            <li>England</li>
            <li>France</li>
            <li>Canada</li>
            <li>Iceland</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Travel Blogs</h3>
          <ul className="space-y-1 text-gray-300">
            <li>Bali Travel Guide</li>
            <li>Sri Travel Guide</li>
            <li>Europe Travel Guide</li>
            <li>Swiss Travel Guide</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Customer Service</h3>
          <ul className="space-y-1 text-gray-300">
            <li>Tour Leading</li>
            <li>Cruising & Sailing</li>
            <li>Campine</li>
            <li>Kayaking</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Support</h3>
          <ul className="space-y-1 text-gray-300">
            <li>Report Error</li>
            <li>Ask Online</li>
            <li>Service Issue</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
        <div className="mb-4 sm:mb-0">
          <p>EasySet24: Seamless Journeys. Unrivaled Travel Wisdom</p>
          <p>52 Street, London</p>
          <p>Email: EasySet24@Gmail.Com</p>
        </div>
        <div className="flex gap-4 items-center">
          <img src="/icons/visa.png" alt="Visa" className="h-6" />
          <img src="/icons/mastercard.png" alt="MasterCard" className="h-6" />
          <img src="/icons/amex.png" alt="AmEx" className="h-6" />
          <img src="/icons/paypal.png" alt="PayPal" className="h-6" />
          <div className="flex gap-2 ml-4">
            <span>📘</span>
            <span>🐦</span>
            <span>📸</span>
            <span>💼</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
