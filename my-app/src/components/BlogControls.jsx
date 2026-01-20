export default function BlogControls({
  search,
  setSearch,
  sort,
  setSort,
  category,
  setCategory,
  categories,
}) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-12">
      <input
        type="text"
        placeholder="Search blogs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-4 py-3 border rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="latest">Latest</option>
        <option value="oldest">Oldest</option>
        <option value="az">Title A–Z</option>
        <option value="za">Title Z–A</option>
      </select>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}
