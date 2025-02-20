import React from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='nav1'>
                <img src={logo} />
                <p>Adeline<br></br>University</p>
            </div>
            <div className='nav2'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/academics">Academics</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/admission">Admission</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className='nav3'><i className="fa-solid fa-magnifying-glass"></i></div>
        </div>
    )
}


export default Navbar
