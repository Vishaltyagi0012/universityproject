import React from 'react';
import "../loginsignup/login.css";
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      const { email, password } = values;
      let result = await fetch('http://localhost:5000/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'content-type': 'application/json'
        },
      });
      result = await result.json();
      if (result.auth) {
        localStorage.setItem("user", JSON.stringify(result.user));
        localStorage.setItem("token", JSON.stringify(result.auth));
        navigate("/");
      } else {
        alert("please enter correct details.");
      }
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Required';
      }
      if (!values.password) {
        errors.password = 'Required';
      }
      return errors;
    }
  });

  return (
    <div className="form1">
      <div className="contactright1">
        <div className='boader'>
          <div className='log'>Login</div>
          <form onSubmit={formik.handleSubmit}>
            <input
              type='text'
              name='email'
              placeholder="Enter Email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
            <input
              type='password'
              name='password'
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}

            <button  type='submit'>Login</button>
          </form>
          <div className='forgot'>
            Forgot <Link to="/password"><span>Password</span></Link> ?
          </div>
          <div className='sign'>
            Don't have an account ? <Link to="/signup"><span>Signup</span></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
