import React,  { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
        <div className="ctn">
            <h1 className="logo-text">MUVI</h1>
            <p>Register</p>
            <form>
                <label className="label sr-only" htmlFor="username">Username</label>
                <input id="username" placeholder="Username" type="text" value={username} onChange={e => setUsername(e.target.value)}/>
                <label className="label sr-only" htmlFor="password">Password</label>
                <input id="password" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <label className="label sr-only" htmlFor="email">Email</label>
                <input id="email" placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                <button className="form-btn btn-filled" type="button" onClick={attemptRegister}>Create Account</button>
                <Link to="/"><button className="form-btn btn-open" type="button">Already Have an Account?</button></Link>
            </form>
        </div>
    )
}

RegisterView.propTypes = {
    onChange: PropTypes.func,
    onClick: PropTypes.func
}

export default RegisterView;