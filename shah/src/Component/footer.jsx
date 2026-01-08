import "./Footer.css";

const Footer = () => {
  return (
    <footer className="lms-footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h3>Next Planner Academy</h3>
          <p>
            Empowering students with quality education, modern skills,
            and career-focused learning.
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#courses">Courses</a>
          <a href="#instructors">Instructors</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Support */}
        <div className="footer-links">
          <h4>Support</h4>
          <a href="#faq">FAQ</a>
          <a href="#help">Help Center</a>
          <a href="#terms">Terms & Conditions</a>
          <a href="#privacy">Privacy Policy</a>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>📍 Gilgit Baltistan, Pakistan</p>
          <p>📧 nextplanneracademy@gmail.com</p>
          <p>📞 +92 355 5165163</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 Next Planner Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
