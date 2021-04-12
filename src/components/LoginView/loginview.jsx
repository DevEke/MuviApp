import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './loginview.scss';
import { Link } from 'react-router-dom';
import notice from '../../img/alert.svg';
import logo from '../../img/logo.svg';
import arrow from '../../img/arrow.svg';

function LoginView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ usernameValidation, checkUsernameValidation] = useState({});
    const [ passwordValidation, checkPasswordValidation] = useState({});
    const [ errorUsername, addErrorClassUsername] = useState("false");
    const [ errorPassword, addErrorClassPassword] = useState("false");

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
            // console.log('Username or Password is incorrect.')
        })
    };


    const loginValidation = () => {
        const usernameValidation = {};
        const passwordValidation = {};
        let isValid = true;
        if (username.trim().length < 1) {
            usernameValidation.usernameMissing = "Please enter a username.";
            addErrorClassUsername('true');
            isValid = false;
        }
        if (password.trim().length < 1) {
            passwordValidation.passwordMissing = "Please enter a password.";
            addErrorClassPassword('true');
            isValid = false;
        }

        checkUsernameValidation(usernameValidation);
        checkPasswordValidation(passwordValidation);
        return isValid;
    }

    return (
            <div className="login-container">
                <form className="login-form">
                    <p>Log in to your account</p>
                    <div className="input__container">
                    <label className="label" htmlFor="username">Username</label>
                    <input 
                        className={errorUsername ? "input-alert" : null}
                        id="username" 
                        placeholder="Username" 
                        type="text" 
                        value={username} 
                        onChange={e => setUsername(e.target.value)}
                    />
                    {Object.keys(usernameValidation).map((key) => {
                        return (
                            <div className="validation-error" key={key}>
                                <img src={notice}/>
                                <p>{usernameValidation[key]}</p>
                            </div>
                        );
                    })}
                    </div>
                    <div className="input__container">
                    <label className="label" htmlFor="password">Password</label>
                    <input
                        className={errorPassword ? "input-alert" : null}
                        id="password" 
                        placeholder="Password" 
                        type="password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)}
                    />
                    {Object.keys(passwordValidation).map((key) => {
                        return (
                            <div className="validation-error" key={key}>
                                <img src={notice}/>
                                <p>{passwordValidation[key]}</p>
                            </div>
                        );
                    })}
                    </div>
                    <div className="aligner">
                        <button className="login-login-btn" type="button" onClick={attemptLogin}>Sign In</button>
                        <img src={arrow}/>
                    </div>
                    <Link className="aligner" to="/register"><button className="login-register-btn" type="button">Dont have an account?</button></Link>
                </form>
            </div>
        
    )
}

LoginView.propTypes = {
    onChange: PropTypes.func,
    onClick: PropTypes.func
}

export default LoginView;