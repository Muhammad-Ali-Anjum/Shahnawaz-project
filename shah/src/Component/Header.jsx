import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <span>Next Planner</span>
          <small>Academy</small>
        </NavLink>

        {/* Navigation */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
          <NavLink to="/courses" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Courses</NavLink>
          <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
          <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
          <NavLink to="/login" onClick={closeMenu} className="btn">Login</NavLink>
        </nav>

        {/* Hamburger */}
        <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
