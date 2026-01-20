import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

import PageHero from "../components/PageHero";
import BlogSkeleton from "../components/BlogSkeleton";
import RelatedPosts from "../components/RelatedPosts";

export default function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.tags || data.tags.length === 0) data.tags = ["General"];
        setBlog(data);
        setLoading(false);
      });
  }, [id]);

  if (loading || !blog) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20">
        <BlogSkeleton />
      </div>
    );
  }

  const publishDate = new Date(
    Date.now() - blog.id * 86400000
  ).toLocaleDateString();

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>{blog.title} | Blog Details</title>
        <meta name="description" content={blog.body.slice(0, 150)} />
      </Helmet>

      <PageHero
        title={blog.title}
        subtitle="Read the full article"
        breadcrumb={["Home", "Blog", blog.title]}
      />

      <main className="max-w-5xl mx-auto px-4 py-16">
        <motion.img
          src={`https://picsum.photos/900/500?random=${blog.id}`}
          alt={blog.title}
          className="w-full rounded-3xl shadow-lg mb-8 object-cover"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />

        <div className="flex flex-wrap gap-3 mb-6">
          {blog.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
          <span className="ml-auto text-gray-500 text-sm">{publishDate}</span>
        </div>

        <motion.article
          className="prose prose-lg prose-blue mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p>{blog.body}</p>
        </motion.article>

        <RelatedPosts currentId={blog.id} />

        <div className="flex justify-end mt-12">
          <Link
            to="/blog"
            className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
          >
            Back to Blog
          </Link>
        </div>
      </main>
    </div>
  );
}
