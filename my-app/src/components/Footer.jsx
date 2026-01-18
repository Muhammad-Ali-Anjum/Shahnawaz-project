import { footerData } from "../api/dummyData";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">About LMS</h3>
          <p className="text-sm">{footerData.about}</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {footerData.links.map(link => (
              <li key={link.name}>
                <Link to={link.path} className="hover:text-blue-400 transition">{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-sm">Email: {footerData.contact.email}</p>
          <p className="text-sm">Phone: {footerData.contact.phone}</p>
          <p className="text-sm">Address: {footerData.contact.address}</p>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-8 text-sm">&copy; {new Date().getFullYear()} LMS Platform. All rights reserved.</div>
    </footer>
  );
}
