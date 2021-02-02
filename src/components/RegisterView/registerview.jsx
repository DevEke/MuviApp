import React,  { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './registerview.scss';

function RegisterView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');

    const attemptRegister = (e) => {
        e.preventDefault();
        console.log(username, password, email);
        axios.post('https://muvi-app.herokuapp.com/users', {
            Username: username,
            Password: password,
            Email: email
        }).then((response) => {
            const data = response.data;
            console.log(data);
            window.open('/', '_self');
        }).catch((error) => {
            console.log('Error with Registration')
        })
    }

    return (
        <div className="register-container">
            <p>Register</p>
            <form className="register-form">
                <label className="label" htmlFor="username">Username</label>
                <input id="username" placeholder="Username" type="text" value={username} onChange={e => setUsername(e.target.value)}/>
                <label className="label" htmlFor="password">Password</label>
                <input id="password" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <label className="label" htmlFor="email">Email</label>
                <input id="email" placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                <button className="register-register-btn" type="button" onClick={attemptRegister}>Create Account</button>
                <Link to="/"><button className="register-login-btn" type="button">Already Have an Account?</button></Link>
            </form>
        </div>
    )
}

RegisterView.propTypes = {
    onChange: PropTypes.func,
    onClick: PropTypes.func
}

export default RegisterView;