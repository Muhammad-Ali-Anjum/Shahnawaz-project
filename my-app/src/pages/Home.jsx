import React, { useContext } from "react";
import PageHero from "../components/PageHero.jsx";
import BlogSkeleton from "../components/BlogSkeleton.jsx";
import BlogCard from "../components/BlogCard.jsx";
import { BlogContext } from "../context/BlogContext";

function Home() {
  const { blogs, loading } = useContext(BlogContext);

  // Latest 8 blogs
  const latestBlogs = blogs.slice(-8).reverse();

  return (
    <>
      <div className="mt-20">
        <PageHero
        title="Learn Without Limits"
        subtitle="Build skills for the future with expert-led courses."
        breadcrumb={["Home"]}
      />

      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          From Our Blog
        </h2>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <BlogSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}
      </section>
      </div>
    </>
  );
}

export default Home;
