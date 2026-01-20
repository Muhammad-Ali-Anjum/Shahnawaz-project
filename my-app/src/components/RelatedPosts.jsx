import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const createSlug = (title) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function RelatedPosts({ currentId }) {
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/posts?limit=30")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.posts.filter((b) => b.id !== parseInt(currentId));
        const randomPosts = filtered.sort(() => 0.5 - Math.random()).slice(0, 6);
        setRelated(randomPosts);
        setLoading(false);
      });
  }, [currentId]);

  if (loading) return <p className="text-gray-500">Loading related posts...</p>;
  if (!related.length) return null;

  return (
    <section className="mt-20">
      <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
      <div className="flex gap-6 overflow-x-auto py-4 scrollbar-hide">
        {related.map((blog) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="min-w-[250px] bg-white rounded-2xl shadow-md cursor-pointer hover:shadow-xl overflow-hidden flex-shrink-0"
          >
            <Link to={`/blog/${blog.id}/${createSlug(blog.title)}`}>
              <img
                src={`https://picsum.photos/400/300?random=${blog.id}`}
                alt={blog.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg line-clamp-2">{blog.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-2 mt-2">{blog.body}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
