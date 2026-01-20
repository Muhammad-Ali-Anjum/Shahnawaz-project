import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const createSlug = (title) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function BlogCard({ blog }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link to={`/blog/${blog.id}/${createSlug(blog.title)}`}>
      <motion.article
        whileHover={{ scale: 1.03, boxShadow: "0px 15px 30px rgba(0,0,0,0.15)" }}
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0, y: 50 }}
        animate={imageLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer border border-transparent w-full relative"
      >
        {/* Skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 flex flex-col animate-pulse p-4 md:p-6 gap-2 bg-gray-100 z-10">
            <div className="h-48 md:h-56 bg-gray-300 rounded mb-2"></div>
            <div className="h-5 bg-gray-300 rounded w-3/4 mb-1"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          </div>
        )}

        {/* Image */}
        <img
          src={`https://picsum.photos/600/400?random=${blog.id}`}
          alt={blog.title}
          className={`h-48 md:h-56 w-full object-cover transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Content */}
        {imageLoaded && (
          <div className="p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-semibold mb-2 line-clamp-2">{blog.title}</h3>
            <p className="text-gray-600 text-sm line-clamp-3 mb-4">{blog.body}</p>
            <span className="text-blue-600 font-medium text-sm hover:underline">
              Read More →
            </span>
          </div>
        )}
      </motion.article>
    </Link>
  );
}
