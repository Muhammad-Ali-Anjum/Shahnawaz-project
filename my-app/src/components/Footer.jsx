import { Link } from "react-router-dom";

export default function Footer() {
  const links = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">&copy; 2026 LMS Platform. All rights reserved.</p>
        <div className="flex space-x-4">
          {links.map((link) => (
            <Link key={link.name} to={link.path} className="hover:text-blue-400 transition">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
