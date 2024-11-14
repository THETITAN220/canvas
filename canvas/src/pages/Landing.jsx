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
        </main>
        <Footer />
        </div>
            </>
    )
}