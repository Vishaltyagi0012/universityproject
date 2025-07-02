import React from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png";
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/sign')
    }
    return (
        <div className='navbar'>
            <div className='nav1'>
                <img src={logo} />
                &nbsp;
                <p>Adeline<br></br>University</p>
            </div>
            <div className='nav2'>
                <ul>&nbsp;&nbsp;&nbsp;&nbsp;
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/academics">Academics</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/admission">Admission</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    {/* <li><Link to="/login">Login</Link></li>
                    <li>{auth ? <Link onClick={logout} to="/sign">Logout</Link> : <Link to="/sign ">Sign up</Link>}</li> */}
                    {
                        auth ? <li><Link onClick={logout} to="/">Logout {JSON.parse(auth).name}</Link></li>
                            : <><li><Link to="/sign ">Sign up</Link></li>
                                <li><Link to="/login">Login</Link></li></>
                    }
                </ul>
            </div>
            <div className='nav3'>
                &nbsp;&nbsp;
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}


export default Navbar
