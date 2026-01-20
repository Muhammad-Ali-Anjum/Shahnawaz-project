import React from "react";

export default function BlogSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 animate-pulse">
      <div className="h-48 md:h-56 bg-gray-300 rounded mb-2"></div>
      <div className="h-5 bg-gray-300 rounded w-3/4 mb-1"></div>
      <div className="h-4 bg-gray-300 rounded w-full"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
    </div>
  );
}
