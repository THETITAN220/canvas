// Footer.jsx
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Info Section */}
        <div className="footer-section">
          <h3>HealthHub</h3>
          <p>Making healthcare accessible for everyone</p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Appointments</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li>Email: info@healthhub.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Address: 123 Health Street</li>
          </ul>
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="footer-bottom">
        <p>&copy; 2024 HealthHub. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer