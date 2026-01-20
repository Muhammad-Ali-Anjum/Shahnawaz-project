// export default function CourseFilters() {
//   return (
//     <aside className="hidden lg:block w-64 sticky top-24 h-fit">
//       <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
//         ☰ Filters
//       </h3>

//       {/* Level */}
//       <div className="mb-6">
//         <h4 className="font-semibold mb-2">Level</h4>
//         {["Beginner", "Intermediate", "Advanced"].map((l) => (
//           <label key={l} className="flex items-center gap-2 mb-2">
//             <input type="checkbox" />
//             {l}
//           </label>
//         ))}
//       </div>

//       {/* Price */}
//       <div className="mb-6">
//         <h4 className="font-semibold mb-2">Price</h4>
//         <label className="flex items-center gap-2 mb-2">
//           <input type="checkbox" /> Free
//         </label>
//         <label className="flex items-center gap-2">
//           <input type="checkbox" /> Paid
//         </label>
//       </div>

//       {/* Type */}
//       <div>
//         <h4 className="font-semibold mb-2">Type</h4>
//         <label className="flex items-center gap-2 mb-2">
//           <input type="checkbox" /> Career path
//         </label>
//         <label className="flex items-center gap-2 mb-2">
//           <input type="checkbox" /> Skill path
//         </label>
//         <label className="flex items-center gap-2">
//           <input type="checkbox" /> Certification
//         </label>
//       </div>
//     </aside>
//   );
// }
// import { categoriesData } from "../api/dummyData";

// export default function CourseFilters({
//   categories,
//   setCategories,
//   prices,
//   setPrices,
// }) {
//   const toggle = (value, list, setList) => {
//     setList(
//       list.includes(value)
//         ? list.filter(v => v !== value)
//         : [...list, value]
//     );
//   };

//   return (
//     <aside className="w-64 sticky top-24">
//       <h3 className="text-xl font-semibold mb-4">☰ Filters</h3>

//       {/* Category */}
//       <div className="mb-6">
//         <h4 className="font-semibold mb-2">Category</h4>
//         {categoriesData.map(cat => (
//           <label key={cat._id} className="flex gap-2 mb-2">
//             <input
//               type="checkbox"
//               checked={categories.includes(cat.name)}
//               onChange={() =>
//                 toggle(cat.name, categories, setCategories)
//               }
//             />
//             {cat.name}
//           </label>
//         ))}
//       </div>

//       {/* Price */}
//       <div>
//         <h4 className="font-semibold mb-2">Price</h4>
//         {["Free", "Paid"].map(p => (
//           <label key={p} className="flex gap-2 mb-2">
//             <input
//               type="checkbox"
//               checked={prices.includes(p)}
//               onChange={() => toggle(p, prices, setPrices)}
//             />
//             {p}
//           </label>
//         ))}
//       </div>
//     </aside>
//   );
// }

// export default function CategoryFilter({
//   categories,
//   activeCategory,
//   setActiveCategory,
// }) {
//   return (
//     <div className="space-y-2">
//       <button
//         onClick={() => setActiveCategory("all")}
//         className={`block w-full text-left px-4 py-2 rounded ${
//           activeCategory === "all"
//             ? "bg-blue-600 text-white"
//             : "hover:bg-gray-100"
//         }`}
//       >
//         All Courses
//       </button>

//       {categories.map((cat) => (
//         <button
//           key={cat._id}
//           onClick={() => setActiveCategory(cat.name)}
//           className={`block w-full text-left px-4 py-2 rounded ${
//             activeCategory === cat.name
//               ? "bg-blue-600 text-white"
//               : "hover:bg-gray-100"
//           }`}
//         >
//           {cat.name}
//         </button>
//       ))}
//     </div>
//   );
// }
// export default function CourseFilters({ categories, activeCategory, setActiveCategory, filters, setFilters }) {
//   const handleCheckbox = (key, value) => {
//     setFilters((prev) => {
//       const exists = prev[key].includes(value);
//       return {
//         ...prev,
//         [key]: exists ? prev[key].filter((v) => v !== value) : [...prev[key], value],
//       };
//     });
//   };

//   return (
//     <div className="space-y-6 p-4 bg-white rounded shadow">
//       <h2 className="font-bold text-lg mb-2 flex items-center gap-2">
//         <span>Filters</span>
//       </h2>

//       {/* Level */}
//       <div>
//         <h3 className="font-semibold mb-2">Level</h3>
//         {["Beginner", "Intermediate", "Advanced"].map((level) => (
//           <label key={level} className="flex items-center gap-2 mb-1 cursor-pointer">
//             <input
//               type="checkbox"
//               checked={filters.level.includes(level)}
//               onChange={() => handleCheckbox("level", level)}
//               className="w-4 h-4 border-gray-300 rounded"
//             />
//             {level}
//           </label>
//         ))}
//       </div>

//       {/* Price */}
//       <div>
//         <h3 className="font-semibold mb-2">Price</h3>
//         {["Free", "Paid"].map((price) => (
//           <label key={price} className="flex items-center gap-2 mb-1 cursor-pointer">
//             <input
//               type="checkbox"
//               checked={filters.price.includes(price)}
//               onChange={() => handleCheckbox("price", price)}
//               className="w-4 h-4 border-gray-300 rounded"
//             />
//             {price}
//           </label>
//         ))}
//       </div>

//       {/* Type */}
//       <div>
//         <h3 className="font-semibold mb-2">Type</h3>
//         {["Career path", "Skill path", "Certification path"].map((type) => (
//           <label key={type} className="flex items-center gap-2 mb-1 cursor-pointer">
//             <input
//               type="checkbox"
//               checked={filters.type.includes(type)}
//               onChange={() => handleCheckbox("type", type)}
//               className="w-4 h-4 border-gray-300 rounded"
//             />
//             {type}
//           </label>
//         ))}
//       </div>
//     </div>
//   );
// }

// const filteredCourses = useMemo(() => {
//   let data = courses.filter((course) => {
//     const matchesSearch =
//       course.title.toLowerCase().includes(search.toLowerCase());

//     const matchCategory =
//       activeCategory === "all" || course.category === activeCategory;

//     const matchLevel =
//       filters.level.length === 0 ||
//       filters.level.includes(course.level);

//     const matchPrice =
//       filters.price.length === 0 ||
//       (filters.price.includes("Free") && course.price === 0) ||
//       (filters.price.includes("Paid") && course.price > 0);

//     const matchType =
//       filters.type.length === 0 ||
//       filters.type.includes(course.type);

//     return (
//       matchesSearch &&
//       matchCategory &&
//       matchLevel &&
//       matchPrice &&
//       matchType
//     );
//   });

//   if (sortBy === "duration") {
//     data.sort((a, b) => a.duration - b.duration);
//   } else if (sortBy === "popular") {
//     data.sort((a, b) => b.popularity - a.popularity);
//   }

//   return data;
// }, [courses, activeCategory, filters, search, sortBy]);

// export default function CourseFilters({ filters, setFilters }) {
//   const toggle = (key, value) => {
//     setFilters((prev) => ({
//       ...prev,
//       [key]: prev[key].includes(value)
//         ? prev[key].filter((v) => v !== value)
//         : [...prev[key], value],
//     }));
//   };

//   return (
//     <div className="space-y-6">
//       {/* Level */}
//       <div>
//         <h4 className="font-semibold mb-3">Level</h4>
//         {["Beginner", "Intermediate", "Advanced"].map((l) => (
//           <label key={l} className="flex items-center gap-3 mb-2">
//             <input
//               type="checkbox"
//               onChange={() => toggle("level", l)}
//               className="w-4 h-4"
//             />
//             {l}
//           </label>
//         ))}
//       </div>

//       {/* Price */}
//       <div>
//         <h4 className="font-semibold mb-3">Price</h4>
//         {["Free", "Paid"].map((p) => (
//           <label key={p} className="flex items-center gap-3 mb-2">
//             <input
//               type="checkbox"
//               onChange={() => toggle("price", p)}
//               className="w-4 h-4"
//             />
//             {p}
//           </label>
//         ))}
//       </div>
//     </div>
//   );
// }


// import { categoriesData } from "../api/dummyData";


// export default function CourseFilters({ filters, setFilters }) {
//   const toggle = (key, value) => {
//     setFilters((prev) => ({
//       ...prev,
//       [key]: prev[key].includes(value)
//         ? prev[key].filter((v) => v !== value)
//         : [...prev[key], value],
//     }));
//   };

//   return (
//     <div className="space-y-6">
//       {/* Level */}
//       <div>
//         <h4 className="font-semibold mb-3">Level</h4>
//         {["Beginner", "Intermediate", "Advanced"].map((l) => (
//           <label key={l} className="flex items-center gap-3 mb-2">
//             <input
//               type="checkbox"
//               checked={filters.level.includes(l)}
//               onChange={() => toggle("level", l)}
//               className="w-4 h-4"
//             />
//             {l}
//           </label>
//         ))}
//       </div>

//       {/* Price */}
//       <div>
//         <h4 className="font-semibold mb-3">Price</h4>
//         {["Free", "Paid"].map((p) => (
//           <label key={p} className="flex items-center gap-3 mb-2">
//             <input
//               type="checkbox"
//               checked={filters.price.includes(p)}
//               onChange={() => toggle("price", p)}
//               className="w-4 h-4"
//             />
//             {p}
//           </label>
//         ))}
//       </div>

//       {/* Category */}
//       <div>
//         <h4 className="font-semibold mb-3">Category</h4>
//         {categoriesData.map((c) => (
//           <label key={c._id} className="flex items-center gap-3 mb-2">
//             <input
//               type="checkbox"
//               checked={filters.category.includes(c.slug)}
//               onChange={() => toggle("category", c.slug)}
//               className="w-4 h-4"
//             />
//             {c.name}
//           </label>
//         ))}
//       </div>
//     </div>
//   );
// }


// import { categoriesData } from "../api/dummyData"; // Correct relative path

// export default function CourseFilters({ filters, setFilters }) {
//   const toggle = (key, value) => {
//     setFilters((prev) => ({
//       ...prev,
//       [key]: prev[key].includes(value)
//         ? prev[key].filter((v) => v !== value)
//         : [...prev[key], value],
//     }));
//   };

//   return (
//     <div className="space-y-6">
//       {/* Level */}
//       <div>
//         <h4 className="font-semibold mb-3">Level</h4>
//         {["Beginner", "Intermediate", "Advanced"].map((level) => (
//           <label key={level} className="flex items-center gap-3 mb-2">
//             <input
//               type="checkbox"
//               checked={filters.level.includes(level)}
//               onChange={() => toggle("level", level)}
//               className="w-4 h-4"
//             />
//             {level}
//           </label>
//         ))}
//       </div>

//       {/* Price */}
//       <div>
//         <h4 className="font-semibold mb-3">Price</h4>
//         {["Free", "Paid"].map((price) => (
//           <label key={price} className="flex items-center gap-3 mb-2">
//             <input
//               type="checkbox"
//               checked={filters.price.includes(price)}
//               onChange={() => toggle("price", price)}
//               className="w-4 h-4"
//             />
//             {price}
//           </label>
//         ))}
//       </div>

//       {/* Category */}
//       <div>
//         <h4 className="font-semibold mb-3">Category</h4>
//         {categoriesData.map((category) => (
//           <label key={category._id} className="flex items-center gap-3 mb-2">
//             <input
//               type="checkbox"
//               checked={filters.category.includes(category.slug)}
//               onChange={() => toggle("category", category.slug)}
//               className="w-4 h-4"
//             />
//             {category.name}
//           </label>
//         ))}
//       </div>
//     </div>
//   );
// }
import { categoriesData } from "../api/dummyData";

export default function CourseFilters({ filters, setFilters }) {
  const toggle = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((v) => v !== value)
        : [...prev[key], value],
    }));
  };

  return (
    <div className="space-y-6">
      {/* Level */}
      <div>
        <h4 className="font-semibold mb-3">Level</h4>
        {["Beginner", "Intermediate", "Advanced"].map((level) => (
          <label key={level} className="flex items-center gap-3 mb-2">
            <input
              type="checkbox"
              checked={filters.level.includes(level)}
              onChange={() => toggle("level", level)}
              className="w-4 h-4"
            />
            {level}
          </label>
        ))}
      </div>

      {/* Price */}
      <div>
        <h4 className="font-semibold mb-3">Price</h4>
        {["Free", "Paid"].map((price) => (
          <label key={price} className="flex items-center gap-3 mb-2">
            <input
              type="checkbox"
              checked={filters.price.includes(price)}
              onChange={() => toggle("price", price)}
              className="w-4 h-4"
            />
            {price}
          </label>
        ))}
      </div>

      {/* Category */}
      <div>
        <h4 className="font-semibold mb-3">Category</h4>
        {categoriesData.map((cat) => (
          <label key={cat._id} className="flex items-center gap-3 mb-2">
            <input
              type="checkbox"
              checked={filters.category.includes(cat.slug)}
              onChange={() => toggle("category", cat.slug)}
              className="w-4 h-4"
            />
            {cat.name}
          </label>
        ))}
      </div>
    </div>
  );
}
