import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="lms-header">
      <div className="lms-wrapper">
        
        {/* Logo */}
        <div className="lms-logo">
          <span className="brand">Next Planner</span>
          <small>Academy</small>
        </div>

        {/* Navigation */}
        <nav className={`lms-nav ${menuOpen ? "open" : ""}`}>
          <a href="#home">Home</a>
          <a href="#courses">Courses</a>
          <a href="#instructors">Instructors</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#login" className="primary-btn">Login</a>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </header>
  );
};

export default Header;
