import { useContext, useMemo, useState } from "react";
import PageHero from "../components/PageHero";
import BlogGrid from "../components/BlogGrid";
import BlogControls from "../components/BlogControls";
import { Helmet } from "react-helmet";
import { BlogContext } from "../context/BlogContext";

export default function Blog() {
  const { blogs, loading } = useContext(BlogContext);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("latest");
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const POSTS_PER_PAGE = 12;

  const categories = useMemo(
    () => [...new Set(blogs.map((b) => b.tags?.[0]).filter(Boolean))],
    [blogs]
  );

  const filteredBlogs = useMemo(() => {
    let data = [...blogs];
    if (search)
      data = data.filter((b) =>
        b.title.toLowerCase().includes(search.toLowerCase())
      );
    if (category) data = data.filter((b) => b.tags?.includes(category));
    if (sort === "latest") data.reverse();
    if (sort === "oldest") data.sort((a, b) => a.id - b.id);
    if (sort === "az") data.sort((a, b) => a.title.localeCompare(b.title));
    if (sort === "za") data.sort((a, b) => b.title.localeCompare(a.title));
    return data;
  }, [blogs, search, sort, category]);

  const totalPages = Math.ceil(filteredBlogs.length / POSTS_PER_PAGE);
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="mt-20  bg-gray-50 min-h-screen">
      <Helmet>
        <title>Blog | Modern Platform</title>
        <meta name="description" content="Read latest blogs." />
      </Helmet>

      <PageHero
        title="Our Blog"
        subtitle="Browse latest posts"
        breadcrumb={["Home", "Blog"]}
      />

      <main className="max-w-7xl mx-auto px-4 py-20">
        <BlogControls
          search={search}
          setSearch={setSearch}
          sort={sort}
          setSort={setSort}
          category={category}
          setCategory={setCategory}
          categories={categories}
        />

        <BlogGrid blogs={paginatedBlogs} loading={loading} />

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 gap-2 flex-wrap">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
