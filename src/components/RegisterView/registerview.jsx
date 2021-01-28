import React,  { useState } from 'react';

function RegisterView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');

    const attemptRegister = (e) => {
        e.preventDefault();
        console.log(username, password, email);
        props.onRegistered(username);
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
                <button className="form-btn btn-open" type="button" onClick={props.toLogin}>Already Have an Account?</button>
            </form>
        </div>
    )
}



export default RegisterView;