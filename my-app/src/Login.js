

// import axios from 'axios';
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import validation from './LoginValidation';
// import { UserContext } from './UserContext';
// import './login.css';

import axios from 'axios';
import React, { useContext, useState } from 'react'; 
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import validation from './LoginValidation';
import { UserContext } from './UserContext'; 


function Login() {
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const { loginUser } = useContext(UserContext);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = validation(values);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            try {
                const response = await axios.post('http://localhost:3000/user/signIN', values);
                
                if (response.data.user) {
                    alert("Login successful");
                    loginUser(response.data.user);
                } else {
                    alert("No record existed");
                }
            } catch (err) {
                if (err.response) {
                    if (err.response.status === 401) {
                        alert("Unauthorized: Invalid email or password.");
                    } else {
                        alert(`Error: ${err.response.status} - ${err.response.statusText}`);
                    }
                } else if (err.request) {
                    alert("No response from the server. Please try again later.");
                } else {
                    alert("An error occurred while setting up the request.");
                }
            }
        } else {
            console.log("Validation errors:", validationErrors);
        }
    };

    return (
        <div className='login-page'>
            <div className='login-container'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            id='email'
                            placeholder='Enter your email'
                            name='email'
                            value={values.email}
                            onChange={handleChange}
                            className='form-control'
                        />
                        {errors.email && <span className='error-text'>{errors.email}</span>}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            id='password'
                            placeholder='Enter your password'
                            name='password'
                            value={values.password}
                            onChange={handleChange}
                            className='form-control'
                        />
                        {errors.password && <span className='error-text'>{errors.password}</span>}
                    </div>
                    <button type='submit' className='submit-btn'>Login</button>
                    <p className='terms-text'>You agree to our terms and policies</p>
                    <Link to="/signup" className='create-account-link'>Create Account</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
