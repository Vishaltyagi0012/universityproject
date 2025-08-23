import { useState, useEffect } from "react";
import React from 'react'
import "../loginsignup/sign.css";
import { Link, useNavigate } from 'react-router-dom';

const sign = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/')
        }
    }, []);

    const collectData = async () => {
        console.warn(name, email, password);
        let result = await fetch('http://localhost:5000/register', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'content-type': 'application/json'
                 
            },
        })
        result = await result.json();
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result.result));
        localStorage.setItem("token", JSON.stringify(result.auth));
    }
    return (
        <div className="form2">

            <div className="contactright2">
                <div className='boader2'>
                    <div className='log'>Sign up</div>
                    <form>
                        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" />
                        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />

                        <Link to="/register"><button onClick={collectData}>Register</button></Link>
                        <Link to="/login3"><button>Login</button></Link>
                    </form>
                    <div className='or'>__________OR__________</div>
                    <div className='con'>
                        <i className="fa-brands fa-google"></i>
                        <button>Continue with Google</button>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default sign
