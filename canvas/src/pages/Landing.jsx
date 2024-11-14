import Carousel from "../components/Carousel"
import Footer from "../components/Footer"
import Nav from "../components/nav"
import './Landing.css'
export default function Landing(){

    return(
        <>
            <div className="app-container">
        <Nav />
        <main className="main-content">
            <Carousel/>
            <div className="about-section">
    <h2>About HealthHub</h2>
    <p>
        Welcome to <strong>HealthHub</strong>, your streamlined solution for managing healthcare appointments and finding specialized doctors. HealthHub simplifies the process of connecting with medical professionals by offering a platform where you can browse doctor profiles, view their specialties, and book appointments seamlessly.
        <br/><br/>
        Our focus is to make healthcare accessible and convenient, ensuring you have all the information needed to choose the right healthcare provider. With HealthHub, finding expert care and booking appointments has never been easier. Take control of your health journey with HealthHub—<span>your partner in well-being</span>.
    </p>
</div>
        </main>
        <Footer />
        </div>
            </>
    )
}