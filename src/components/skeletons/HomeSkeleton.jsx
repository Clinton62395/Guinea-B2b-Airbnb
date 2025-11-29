import React from "react";

export const HomeSkeleton = () => {
  return (
    <div className="space-y-8 p-6">
      {/* Hero skeleton */}
      <div className="relative">
        <div className="w-full h-56 md:h-96 bg-gray-200 rounded-xl overflow-hidden animate-pulse" />
        {/* floating date peaker skeleton */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-28px] w-[92%] md:w-3/4">
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="h-10 bg-gray-200 rounded-lg animate-pulse" />
              <div className="h-10 bg-gray-200 rounded-lg animate-pulse" />
              <div className="h-10 bg-gray-200 rounded-lg animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Category chips skeleton */}
      <div className="mt-12 flex flex-wrap gap-4 justify-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="w-28 h-10 bg-gray-200 rounded-full animate-pulse"
          />
        ))}
      </div>

      {/* Special offers header skeleton */}
      <div className="mt-8 px-2 md:px-6">
        <div className="w-48 h-6 bg-gray-200 rounded animate-pulse mb-4" />
        <div className="flex gap-3 flex-wrap">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-24 h-8 bg-gray-200 rounded-full animate-pulse"
            />
          ))}
        </div>
      </div>

      {/* Offers grid skeleton */}
      <div className="px-2 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-lg overflow-hidden shadow bg-white">
              <div className="w-full h-48 bg-gray-200 animate-pulse" />
              <div className="p-4">
                <div className="w-3/4 h-4 bg-gray-200 rounded mb-2 animate-pulse" />
                <div className="w-1/2 h-3 bg-gray-200 rounded mb-4 animate-pulse" />
                <div className="w-full h-10 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending section skeleton */}
      <div className="px-2 md:px-6">
        <div className="w-64 h-6 bg-gray-200 rounded animate-pulse mb-3" />
        <div className="w-40 h-4 bg-gray-200 rounded animate-pulse mb-6" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="rounded overflow-hidden">
              <div className="w-full h-28 bg-gray-200 animate-pulse" />
              <div className="mt-2 w-3/4 h-3 bg-gray-200 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>

      {/* CTA banner skeleton */}
      <div className="px-2 md:px-6">
        <div className="relative bg-gray-200 rounded-xl h-48 md:h-72 overflow-hidden animate-pulse">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1/3 h-6 bg-gray-300 rounded animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};
