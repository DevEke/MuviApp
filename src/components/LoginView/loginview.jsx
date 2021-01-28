import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './loginview.scss';

function LoginView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const attemptLogin = (e) => {
        e.preventDefault();
        console.log(username, password);
        axios.post('https://moovies-app-0088.herokuapp.com/login', {
            Username: username,
            Password: password
        }).then((response) => {
            const data = response.data;
            props.onLoggedIn(data)
        }).catch((error) => {
            alert('Username or Password is incorrect.')
        })
    };

    return (
        <div className="ctn">
            <h1 className="logo-text">MUVI</h1>
            <p>Sign In</p>
            <form>
                <label className="label sr-only" htmlFor="username">Username</label>
                <input id="username" placeholder="Username" type="text" value={username} onChange={e => setUsername(e.target.value)}/>
                <label className="label sr-only" htmlFor="password">Password</label>
                <input id="password" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <button className="form-btn btn-filled" type="button" onClick={attemptLogin}>Sign In</button>
                <button className="form-btn btn-open" type="button" onClick={props.toRegister}>New User?</button>
            </form>
        </div>
        
    )
}

LoginView.propTypes = {
    onChange: PropTypes.func,
    onClick: PropTypes.func
}

export default LoginView;