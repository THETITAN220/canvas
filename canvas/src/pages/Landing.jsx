import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import './Landing.css';

export default function Landing() {
  return (
    <>
      <div className="app-container">
        <Nav />
        <main className="main-content">
          <Carousel />
          <div className="about-section">
            <h1 style={{ color: '#0077b6' }}>About HealthHub</h1>
            <p style={{ color: '#ff6700' }}>
              <strong>Welcome to HealthHub, your personalized healthcare companion.</strong>
              <br />
              <br />
                We are here to simplify your healthcare journey, making it easier to find top-notch medical professionals and schedule appointments.
              <br />
              <br />
              <strong>With HealthHub, you can:</strong>
              <ul>
                <li>Browse doctor profiles and specialties</li>
                <li>Book appointments with ease</li>
                <li>Access your health records in one place</li>
              </ul>
              <br />
              <strong>Why choose HealthHub?</strong>
              <ul>
                <li><strong>Expert care:</strong> Connect with highly qualified doctors.</li>
                <li><strong>Time-saving:</strong> Book appointments in just a few clicks.</li>
                <li><strong>Peace of mind:</strong> Manage your health with confidence.</li>
              </ul>
              <br />
              Join the HealthHub community today and experience the future of healthcare.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}