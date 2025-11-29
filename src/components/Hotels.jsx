import React from "react";
import { Link } from "react-router-dom";

export const Hotels = () => {
  return (
    <div style={{ minHeight: "100vh" }} className="bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">

      <div className="max-w-4xl mx-auto">
        {/* Titre principal */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose Us?
          </h1>
          <h2 className="text-2xl font-semibold text-blue-600">
            Exclusive Hotel Search!
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Colonne de gauche - Special Offers */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Special Offers
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                  <span className="font-semibold text-gray-700">Sporting</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                  <span className="font-semibold text-gray-700">Touring</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></span>
                  <span className="font-semibold text-gray-700">Pending</span>
                </div>
              </div>
            </div>

            {/* Section Made */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Made</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
                  <span className="font-semibold text-gray-700">
                    A Compression
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                  <span className="font-semibold text-gray-700">Built</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-indigo-500 rounded-full mr-3"></span>
                  <span className="font-semibold text-gray-700">Cooling</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                  <span className="font-semibold text-gray-700">Fresh</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                  <span className="font-semibold text-gray-700">Water</span>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne de droite - Ligne de séparation et Model */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            {/* Ligne de séparation */}
            <div className="border-t-2 border-gray-300 mb-6 pt-6">
              <div className="w-8 h-1 bg-gray-400 rounded mx-auto"></div>
            </div>

            {/* Section Model */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Model
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-bold text-gray-700">Model A:</span>
                  <span className="font-semibold text-blue-600">
                    Compression
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-bold text-gray-700">Model B:</span>
                  <span className="font-semibold text-blue-600">
                    Compression
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-bold text-gray-700">Model C:</span>
                  <span className="font-semibold text-blue-600">
                    Compression
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-bold text-gray-700">Model D:</span>
                  <span className="font-semibold text-blue-600">
                    Compression
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bouton d'action supplémentaire */}
        <div className="text-center mt-8">
          <Link
            to="/hotel-filter"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Discover More
          </Link>
        </div>
      </div>
    </div>
  );
};
