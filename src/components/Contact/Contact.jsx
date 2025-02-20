import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import "../Contact/Contact.css";
import Footer from "../Footer/Footer.jsx"
import image11 from "../../assets/image11.jpg"

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="contact">
                <h1>OUR CONTACT</h1>
            </div>
            <div className="contactbox">
                <div className="contactbox1">
                    <div className="icon">
                        <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <h3>Office Address</h3>
                    <p>25/B Milford, New York, USA</p>
                </div>
                <div className="contactbox1">
                    <div className="icon">
                        <i className="fa-solid fa-phone"></i>
                    </div>
                    <h3>Office Address</h3>
                    <p>25/B Milford, New York, USA</p>
                </div>
                <div className="contactbox1">
                    <div className="icon">
                        <i className="fa-solid fa-envelope"></i>
                    </div>
                    <h3>Office Address</h3>
                    <p>25/B Milford, New York, USA</p>
                </div>
                <div className="contactbox1">
                    <div className="icon">
                        <i className="fa-solid fa-lock"></i>
                    </div>
                    <h3>Office Address</h3>
                    <p>25/B Milford, New York, USA</p>
                </div>
            </div>
            <div className="form">
                <div className="contactleft">
                    <img src={image11} />
                </div>
                <div className="contactright">
                    <h1>Get in Touch</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                    <form>
                        <input placeholder="Enter name" />
                        <input placeholder="Enter Email" />
                        <input placeholder="subject" />
                        <textarea rows={5} cols={35} placeholder="Message"></textarea>
                        <button>Send Message</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}


export default Contact 