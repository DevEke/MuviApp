import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './loginview.scss';
import {Link} from 'react-router-dom';
import notice from '../../img/alert.svg';

function LoginView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ usernameValidation, checkUsernameValidation] = useState('');
    const [ passwordValidation, checkPasswordValidation] = useState('');

    const attemptLogin = (e) => {
        e.preventDefault();
        const isValid = loginValidation();
        console.log(username, password);
        axios.post('https://muvi-app.herokuapp.com/login', {
            Username: username,
            Password: password
        }).then((response) => {
            const data = response.data;
            props.onLoggedIn(data)
        }).catch((error) => {
            console.log(error.response.data)
            // console.log('Username or Password is incorrect.')
        })
    };

    const loginValidation = () => {
        const usernameValidation = {};
        const passwordValidation = {};
        let isValid = true;
        if (username.trim().length < 1) {
            usernameValidation.usernameMissing = "Please enter a username.";
            isValid = false;
        }
        if (password.trim().length < 1) {
            passwordValidation.passwordMissing = "Please enter a password.";
            isValid = false;
        }

        checkUsernameValidation(usernameValidation);
        checkPasswordValidation(passwordValidation);
        return isValid;
    }

    return (
        <div className="login-container">
            <p>Sign In</p>
            <form className="login-form">
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
                <button className="login-login-btn" type="button" onClick={attemptLogin}>Sign In</button>
                <Link to="/register"><button className="login-register-btn" type="button">New User?</button></Link>
            </form>
        </div>
        
    )
}

LoginView.propTypes = {
    onChange: PropTypes.func,
    onClick: PropTypes.func
}

export default LoginView;