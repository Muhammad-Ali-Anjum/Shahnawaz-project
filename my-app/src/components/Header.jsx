

// import { useState, useEffect, useRef } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { footerData, categoriesData } from "../api/dummyData";
// import {
//   Menu,
//   X,
//   GraduationCap,
//   ChevronDown,
//   Search,
//   ShoppingCart,
//   User,
//   Moon,
//   Sun,
// } from "lucide-react";

// // Profile Menu
// function ProfileMenu() {
//   const [open, setOpen] = useState(false);
//   const ref = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (ref.current && !ref.current.contains(e.target)) setOpen(false);
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <div className="relative" ref={ref}>
//       <button
//         onClick={() => setOpen(!open)}
//         className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
//       >
//         <User size={24} />
//       </button>
//       {open && (
//         <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 shadow-lg rounded-xl border dark:border-gray-700 z-50">
//           <Link
//             to="/dashboard"
//             className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
//           >
//             Dashboard
//           </Link>
//           <Link
//             to="/my-courses"
//             className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
//           >
//             My Courses
//           </Link>
//           <Link
//             to="/logout"
//             className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
//           >
//             Logout
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// }

// // Main Header
// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [courseOpen, setCourseOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);
//   const [categories, setCategories] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredCourses, setFilteredCourses] = useState([]);
//   const dropdownRef = useRef(null);
//   const searchRef = useRef(null);

//   const user = { isLoggedIn: true, name: "Ali" };

//   useEffect(() => {
//     // Simulate API fetch
//     setTimeout(() => setCategories(categoriesData), 300);
//   }, []);

//   // Close course dropdown if clicked outside
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setCourseOpen(false);
//       if (searchRef.current && !searchRef.current.contains(e.target)) setFilteredCourses([]);
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Filter courses on search
//   useEffect(() => {
//     if (searchQuery.trim() === "") {
//       setFilteredCourses([]);
//     } else {
//       const filtered = categories.filter((cat) =>
//         cat.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//       setFilteredCourses(filtered);
//     }
//   }, [searchQuery, categories]);

//   return (
//     <header
//       className={`fixed top-0 w-full z-50 border-b ${
//         darkMode
//           ? "bg-gray-900 text-white border-gray-700"
//           : "bg-white text-gray-800 border-gray-200"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex items-center justify-between h-16">

//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-2">
//             <div className="bg-blue-600 p-2 rounded-lg">
//               <GraduationCap className="text-white" />
//             </div>
//             <span className="font-bold text-lg tracking-wide">LMS Platform</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center gap-6">

//             {/* Courses */}
//             <div className="relative" ref={dropdownRef}>
//               <button
//                 onClick={() => setCourseOpen(!courseOpen)}
//                 className="flex items-center gap-1 font-medium hover:text-blue-600 transition"
//               >
//                 Courses <ChevronDown size={18} />
//               </button>
//               {courseOpen && (
//                 <div className="absolute top-full mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-xl w-64 overflow-hidden border dark:border-gray-700 z-50">
//                   {categories.length === 0 ? (
//                     <p className="px-4 py-3 text-gray-500 text-sm dark:text-gray-400">
//                       Loading courses...
//                     </p>
//                   ) : (
//                     categories.map((cat) => (
//                       <Link
//                         key={cat._id}
//                         to={`/courses/${cat.slug}`}
//                         className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white text-sm font-medium"
//                       >
//                         {cat.name}
//                       </Link>
//                     ))
//                   )}
//                 </div>
//               )}
//             </div>

//             {/* Search */}
//             <div className="relative" ref={searchRef}>
//               <Search className="absolute left-3 top-2.5 text-gray-400 dark:text-gray-300" size={18} />
//               <input
//                 type="text"
//                 placeholder="Search courses..."
//                 className="pl-9 pr-4 py-2 rounded-full border text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />

//               {/* Search Results Dropdown */}
//               {filteredCourses.length > 0 && (
//                 <div className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-gray-800 shadow-lg rounded-xl border dark:border-gray-700 z-50 max-h-60 overflow-y-auto">
//                   {filteredCourses.map((cat) => (
//                     <Link
//                       key={cat._id}
//                       to={`/courses/${cat.slug}`}
//                       className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm text-gray-700 dark:text-gray-200 transition rounded-lg"
//                       onClick={() => setSearchQuery("")} // Clear search after click
//                     >
//                       <GraduationCap size={16} className="mr-2 text-blue-600" />
//                       {cat.name}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Nav Links */}
//             {footerData.links.map((link) => (
//               <NavLink
//                 key={link.name}
//                 to={link.path}
//                 className={({ isActive }) =>
//                   `text-sm font-medium transition ${
//                     isActive
//                       ? "text-blue-600 border-b-2 border-blue-600 pb-1"
//                       : "hover:text-blue-600"
//                   }`
//                 }
//               >
//                 {link.name}
//               </NavLink>
//             ))}
//           </nav>

//           {/* Right */}
//           <div className="hidden md:flex items-center gap-4">
//             <ShoppingCart className="cursor-pointer hover:text-blue-600 transition" />
//             <button
//               onClick={() => setDarkMode(!darkMode)}
//               className="hover:text-yellow-500 transition"
//             >
//               {darkMode ? <Sun /> : <Moon />}
//             </button>
//             {user.isLoggedIn ? <ProfileMenu /> : (
//               <Link
//                 to="/login"
//                 className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
//               >
//                 Login
//               </Link>
//             )}
//           </div>

//           {/* Mobile Button */}
//           <button
//             className="md:hidden p-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 transition"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? <X size={26} /> : <Menu size={26} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-white dark:bg-gray-900 shadow-xl border-t dark:border-gray-700 px-4 py-5 space-y-4">

//           {/* Mobile Search */}
//           <div className="relative" ref={searchRef}>
//             <Search className="absolute left-3 top-2.5 text-gray-400 dark:text-gray-300" size={18} />
//             <input
//               type="text"
//               placeholder="Search courses..."
//               className="pl-9 pr-4 py-2 rounded-full border text-sm w-full focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             {filteredCourses.length > 0 && (
//               <div className="absolute top-full left-0 mt-2 w-full bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg border dark:border-gray-700 z-50 max-h-60 overflow-y-auto">
//                 {filteredCourses.map((cat) => (
//                   <Link
//                     key={cat._id}
//                     to={`/courses/${cat.slug}`}
//                     className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition rounded-lg"
//                     onClick={() => setMenuOpen(false)}
//                   >
//                     <GraduationCap size={16} className="mr-2 text-blue-600" />
//                     {cat.name}
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>

//           <hr className="border-gray-200 dark:border-gray-700" />

//           {/* Courses Section */}
//           <div className="space-y-1">
//             <button
//               onClick={() => setCourseOpen(!courseOpen)}
//               className="flex items-center justify-between w-full font-semibold text-lg text-gray-800 dark:text-gray-100 hover:text-blue-600 transition"
//             >
//               Courses <ChevronDown size={18} />
//             </button>
//             {courseOpen && (
//               <div className="mt-2 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-inner border dark:border-gray-700">
//                 {categories.map((cat) => (
//                   <Link
//                     key={cat._id}
//                     to={`/courses/${cat.slug}`}
//                     className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition rounded-lg"
//                     onClick={() => setMenuOpen(false)}
//                   >
//                     <GraduationCap size={16} className="mr-2 text-blue-600" />
//                     {cat.name}
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>

//           <hr className="border-gray-200 dark:border-gray-700" />

//           {/* Navigation */}
//           <div className="space-y-1">
//             {footerData.links.map((link) => (
//               <NavLink
//                 key={link.name}
//                 to={link.path}
//                 className={({ isActive }) =>
//                   `block px-3 py-3 rounded-lg text-gray-800 dark:text-gray-100 font-medium text-base transition hover:bg-gray-100 dark:hover:bg-gray-700 ${
//                     isActive ? "bg-blue-50 dark:bg-gray-700 text-blue-600" : ""
//                   }`
//                 }
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {link.name}
//               </NavLink>
//             ))}
//           </div>

//           <hr className="border-gray-200 dark:border-gray-700" />

//           {/* User */}
//           <div className="space-y-2">
//             {user.isLoggedIn ? (
//               <Link
//                 to="/dashboard"
//                 className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition font-medium"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 <User size={18} /> Dashboard
//               </Link>
//             ) : (
//               <Link
//                 to="/login"
//                 className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition font-medium"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 <User size={18} /> Login / Sign Up
//               </Link>
//             )}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }


import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { footerData, categoriesData } from "../api/dummyData"; // fixed path
import {
  Menu,
  X,
  GraduationCap,
  ChevronDown,
  Search,
  ShoppingCart,
  User,
  Moon,
  Sun,
} from "lucide-react";

// Profile Menu Component
function ProfileMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      >
        <User size={24} />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 shadow-lg rounded-xl border dark:border-gray-700 z-50">
          <Link to="/dashboard" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
            Dashboard
          </Link>
          <Link to="/my-courses" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
            My Courses
          </Link>
          <Link to="/logout" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
            Logout
          </Link>
        </div>
      )}
    </div>
  );
}

// Main Header
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCategories, setFilteredCategories] = useState([]);
  const courseRef = useRef(null);
  const searchRef = useRef(null);

  const user = { isLoggedIn: true };

  // Close dropdowns when clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (courseRef.current && !courseRef.current.contains(e.target)) setCourseOpen(false);
      if (searchRef.current && !searchRef.current.contains(e.target)) setFilteredCategories([]);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter categories for search
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredCategories([]);
    } else {
      const filtered = categoriesData.filter((cat) =>
        cat.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCategories(filtered);
    }
  }, [searchQuery]);

  return (
    <header className={`fixed top-0 w-full z-50 border-b ${darkMode ? "bg-gray-900 text-white border-gray-700" : "bg-white text-gray-800 border-gray-200"}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <GraduationCap className="text-white" />
            </div>
            <span className="font-bold text-lg tracking-wide">LMS Platform</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">

            {/* Courses Dropdown */}
            <div className="relative" ref={courseRef}>
              <button onClick={() => setCourseOpen(!courseOpen)} className="flex items-center gap-1 font-medium hover:text-blue-600 transition">
                Courses <ChevronDown size={18} />
              </button>
              {courseOpen && (
                <div className="absolute top-full mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-xl w-64 overflow-hidden border dark:border-gray-700 z-50">
                  {categoriesData.map((cat) => (
                    <Link
                      key={cat._id}
                      to={`/courses/${cat.slug}`}
                      className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white text-sm font-medium"
                      onClick={() => setCourseOpen(false)}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Search */}
            <div className="relative" ref={searchRef}>
              <Search className="absolute left-3 top-2.5 text-gray-400 dark:text-gray-300" size={18} />
              <input
                type="text"
                placeholder="Search categories..."
                className="pl-9 pr-4 py-2 rounded-full border text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {filteredCategories.length > 0 && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-gray-800 shadow-lg rounded-xl border dark:border-gray-700 z-50 max-h-60 overflow-y-auto">
                  {filteredCategories.map((cat) => (
                    <Link
                      key={cat._id}
                      to={`/courses/${cat.slug}`}
                      className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm text-gray-700 dark:text-gray-200 rounded-lg"
                      onClick={() => setSearchQuery("")}
                    >
                      <GraduationCap size={16} className="mr-2 text-blue-600" />
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other Nav Links */}
            {footerData.links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `text-sm font-medium transition ${isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}`}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            <ShoppingCart className="cursor-pointer hover:text-blue-600 transition" />
            <button onClick={() => setDarkMode(!darkMode)} className="hover:text-yellow-500 transition">
              {darkMode ? <Sun /> : <Moon />}
            </button>
            {user.isLoggedIn ? <ProfileMenu /> : (
              <Link to="/login" className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 transition" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-xl border-t dark:border-gray-700 px-4 py-5 space-y-4">
          {/* Courses */}
          <div className="space-y-1">
            <button onClick={() => setCourseOpen(!courseOpen)} className="flex items-center justify-between w-full font-semibold text-lg text-gray-800 dark:text-gray-100 hover:text-blue-600 transition">
              Courses <ChevronDown size={18} />
            </button>
            {courseOpen && (
              <div className="mt-2 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-inner border dark:border-gray-700">
                {categoriesData.map((cat) => (
                  <Link
                    key={cat._id}
                    to={`/courses/${cat.slug}`}
                    className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition rounded-lg"
                    onClick={() => setMenuOpen(false)}
                  >
                    <GraduationCap size={16} className="mr-2 text-blue-600" />
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <hr className="border-gray-200 dark:border-gray-700" />

          {/* Other Nav Links */}
          <div className="space-y-1">
            {footerData.links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `block px-3 py-3 rounded-lg text-gray-800 dark:text-gray-100 font-medium text-base transition hover:bg-gray-100 dark:hover:bg-gray-700 ${isActive ? "bg-blue-50 dark:bg-gray-700 text-blue-600" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
