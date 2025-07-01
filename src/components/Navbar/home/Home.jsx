import React from "react"
import Navbar from "../Navbar";
import HeroSection from '../HeroSection/HeroSection'
import About from "../About/About";
import Course from "../../Courses/Course";
import Footer from "../../Footer/Footer";


const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <About />
            <Course />
            <Footer />
        </div>
    )
}

export default Home

