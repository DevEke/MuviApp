import React,  { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './registerview.scss';
import notice from '../../img/alert.svg';

function RegisterView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');
    const [usernameValidation, checkUsernameValidation] = useState('');
    const [passwordValidation, checkPasswordValidation] = useState('');
    const [emailValidation, checkEmailValidation] = useState('');

    const attemptRegister = (e) => {
        e.preventDefault();
        const isValid = registerValidation();
        console.log(username, password, email);
        axios.post('https://muvi-app.herokuapp.com/users', {
            Username: username,
            Password: password,
            Email: email
        }).then((response) => {
            const data = response.data;
            // loginUser(data);
            console.log(data);
            window.open('/', '_self');
        }).catch((error) => {
            console.log(error);
            // console.log('Error with Registration')
        })
    }

    // const loginUser = (data) => {
    //     axios.post('https://muvi-app.herokuapp.com/login', {
    //         Username: data.Username,
    //         Password: data.Password,
    //     }).then((response) => {
    //         const data = response.data;
    //         props.onLoggedIn(data);
    //         window.open('/', '_self');
    //     }).catch((error) => {
    //         console.log(error);
    //     });
    // };

    const registerValidation = () => {
        const usernameValidation = {};
        const passwordValidation = {};
        const emailValidation = {};
        let isValid = true;
        if (username.trim().length < 5) {
            usernameValidation.usernameShort = "Username must be at least 5 characters long.";
            isValid = false;
        }
        if (password.trim().length < 1) {
            passwordValidation.passwordMissing = "You must enter a password.";
            isValid = false;
        }
        if (!email.includes(".") && !email.includes("@")) {
            emailValidation.emailInvalid = "Enter a valid email address.";
            isValid = false;
        }

        checkUsernameValidation(usernameValidation);
        checkPasswordValidation(passwordValidation);
        checkEmailValidation(emailValidation);
        return isValid;
    }

    return (
        <div className="register-container">
            <p>Register</p>
            <form className="register-form">
                <label className="label" htmlFor="username">Username</label>
                <input id="username" placeholder="Username" type="text" value={username} onChange={e => setUsername(e.target.value)}/>
                {Object.keys(usernameValidation).map((key) => {
                    return (
                        <div className="validation-error" key={key}>
                            <img src={notice}/>
                            {usernameValidation[key]}
                        </div>
                    );
                })}
                <label className="label" htmlFor="password">Password</label>
                <input id="password" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                {Object.keys(passwordValidation).map((key) => {
                    return (
                        <div className="validation-error" key={key}>
                            <img src={notice}/>
                            {passwordValidation[key]}
                        </div>
                    );
                })}
                <label className="label" htmlFor="email">Email</label>
                <input id="email" placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                {Object.keys(emailValidation).map((key) => {
                    return (
                        <div className="validation-error" key={key}>
                            <img src={notice}/>
                            {emailValidation[key]}
                        </div>
                    );
                })}
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