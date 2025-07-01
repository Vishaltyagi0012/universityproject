import React from 'react'
import "../loginsignup/login.css";
import { Link, useNavigate } from 'react-router-dom';

const login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();
    // useEffect(() => {
    //     const auth = localStorage.getItem('user');
    //     if (auth) {
    //         navigate('/')
    //     }
    // })

    const handleLogin = async () => {
        console.log(email, password)
        let result = await fetch('http://localhost:5000/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'content-type': 'application/json'
            },
        });
        result = await result.json();
        console.warn(result);
        if (result.name) {
            localStorage.setItem("user", JSON.stringify(result));
            navigate("/")
        } else {
            alert("please  enter correct details. You are not signup ,please sign up")

        }
    }
    return (
        <div className="form1">
            <div className="contactright1">
                <div className='boader'>
                    <div className='log'>Login</div>
                    <form>
                        <input type='text' placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                        <input type='password' placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />

                        <Link to="/login2"><button onClick={handleLogin} type='button'>Login</button></Link>
                    </form>
                    <div className='forgot'>Forgot <Link to="/password"><span>Password</span></Link> ?</div>
                    <div className='sign'>Don't have an account ? <Link to="/signup"><span>Signup</span></Link></div>
                </div>
            </div>
        </div>
    )
}

export default login