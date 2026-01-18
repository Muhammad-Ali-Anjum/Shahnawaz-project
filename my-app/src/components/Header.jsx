import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { footerData } from "../api/dummyData";

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
import { categoriesData } from "../api/dummyData";

// ProfileMenu Component
function ProfileMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
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
        <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded-xl border dark:border-gray-700 z-50">
          <Link
            to="/dashboard"
            className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Dashboard
          </Link>
          <Link
            to="/my-courses"
            className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            My Courses
          </Link>
          <Link
            to="/logout"
            className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Logout
          </Link>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [categories, setCategories] = useState([]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => setCategories(categoriesData), 300);
  }, []);

  // Close courses dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setCourseOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const user = { isLoggedIn: true, name: "Ali" };

  return (
    <header
      className={`fixed top-0 w-full z-50 border-b ${
        darkMode ? "bg-gray-900 text-white border-gray-700" : "bg-white text-gray-800 border-gray-200"
      }`}
    >
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
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setCourseOpen(!courseOpen)}
                className="flex items-center gap-1 font-medium hover:text-blue-600 transition"
              >
                Courses <ChevronDown size={16} />
              </button>

              {courseOpen && (
                <div className="absolute top-full mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-xl w-64 overflow-hidden border dark:border-gray-700 z-50">
                  {categories.length === 0 ? (
                    <p className="px-4 py-3 text-gray-500 text-sm dark:text-gray-400">Loading courses...</p>
                  ) : (
                    categories.map((cat) => (
                      <Link
                        key={cat._id}
                        to={`/courses/${cat.slug}`}
                        className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium"
                      >
                        {cat.name}
                      </Link>
                    ))
                  )}
                </div>
              )}
            </div>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-2.5 text-gray-400 dark:text-gray-300" size={18} />
              <input
                type="text"
                placeholder="Search courses, categories..."
                className="pl-9 pr-4 py-2 rounded-full border text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            {/* Navigation Links */}
            {footerData.links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
           
          </nav>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">
            <ShoppingCart className="cursor-pointer hover:text-blue-600 transition" />
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="hover:text-yellow-500 transition"
            >
              {darkMode ? <Sun /> : <Moon />}
            </button>

            {/* Profile Dropdown */}
            {user.isLoggedIn ? <ProfileMenu /> : (
              <Link
                to="/login"
                className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700 px-4 py-4 space-y-2 shadow-lg">
          {categories.map((cat) => (
            <Link
              key={cat._id}
              to={`/courses/${cat.slug}`}
              className="block px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {cat.name}
            </Link>
          ))}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          {user.isLoggedIn ? (
            <Link
              to="/dashboard"
              className="block bg-blue-600 text-white text-center py-2 rounded-full hover:bg-blue-700 transition"
            >
              Dashboard
            </Link>
          ) : (
            <Link
              to="/login"
              className="block bg-blue-600 text-white text-center py-2 rounded-full hover:bg-blue-700 transition"
            >
              Login / Sign Up
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
