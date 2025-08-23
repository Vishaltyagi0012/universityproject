import React, { useState } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import "../Contact/Contact.css";
import Footer from "../Footer/Footer.jsx"
import image11 from "../../assets/image11.jpg"
import { Link, useNavigate } from 'react-router-dom';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [subject, setSubject] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();

    const collectData = async (e) => {
         e.preventDefault();
        console.warn(name, email, city, subject, address);
        let result = await fetch('http://localhost:5000/contact', {
            method: 'POST',
            body: JSON.stringify({ name, email, city, subject, address }),
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            },
        })
        result = await result.json()
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result));
        navigate('/send');

    }
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
                    <form onSubmit={collectData}>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name"
                        />
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />
                        <input
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="City"
                        />
                        <input
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            placeholder="Subject"
                        />
                        <textarea
                            rows={5}
                            cols={35}
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Address"
                        />
                        <Link to="/send"> <button type="submit">Send Message</button></Link>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}


export default Contact 