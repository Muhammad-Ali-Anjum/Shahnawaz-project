import React, { createContext, useEffect, useState } from "react";

export const BlogContext = createContext();

export default function BlogProvider({ children }) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/posts?limit=100")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.posts);
        setLoading(false);
      });
  }, []);

  return (
    <BlogContext.Provider value={{ blogs, loading }}>
      {children}
    </BlogContext.Provider>
  );
}
