export default function CourseHeader({ search, setSearch, sort, setSort }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <div className="flex-1 relative">
        <input
          type="text"
          placeholder="Search JavaScript courses"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-black outline-none"
        />
        <span className="absolute right-4 top-3 text-gray-500">🔍</span>
      </div>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="border rounded-lg px-4 py-3 bg-white"
      >
        <option value="relevant">Most relevant</option>
        <option value="latest">Latest</option>
        <option value="az">A–Z</option>
        <option value="za">Z–A</option>
      </select>
    </div>
  );
}
