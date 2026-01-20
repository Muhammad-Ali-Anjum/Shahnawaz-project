import React from "react";
import BlogCard from "./BlogCard";

export default function BlogGrid({ blogs, loading }) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md p-4 animate-pulse">
            <div className="h-48 md:h-56 bg-gray-300 rounded mb-2"></div>
            <div className="h-5 bg-gray-300 rounded w-3/4 mb-1"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          </div>
        ))}
      </div>
    );
  }

  if (!blogs.length)
    return <p className="text-center text-gray-500">No blogs found.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
