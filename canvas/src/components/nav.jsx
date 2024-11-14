// Nav.jsx
import Btn from "./Btn"
import './Nav.css'

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <a href="#" className="brand-name">HealthHub</a>
      </div>
      
      <div className="nav-links">
        {/* Left side links */}
        <div className="left-links">
          <a href="#" className="nav-link active">Home</a>
          <a href="#" className="nav-link">Appointments</a>
        </div>
        
        {/* Right side buttons */}
        <div className="right-buttons">
          <Btn text="Sign In" />
          <Btn text="Sign Up" />
        </div>
      </div>
    </nav>
  )
}

export default Nav