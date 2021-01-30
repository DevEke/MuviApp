import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './updateview.scss';

function UpdateView(props) {
    const [username, changeUsername] = useState('');
    const [password, changePassword] = useState('');
    const [email, changeEmail] = useState('');
    const [usernameValidation, checkUsernameValidation] = useState({});
    const [passwordValidation, checkPasswordValidation] = useState({});
    const [emailValidation, checkEmailValidation] = useState({});



    const updateAccount = (e) => {
        e.preventDefault();
        const isValid = formValidation();
        const url = 'https://muvi-app.herokuapp.com/users/' + localStorage.getItem("users");
        if (isValid) {
            axios.put(url, {
                Username: username,
                Password: password,
                Email: email
            }, { headers: {Authorization: "Bearer " + localStorage.getItem("token")}
        }).then((response) => {
            const data = response.data;
            localStorage.setItem("user", data.Username);
            window.open("/", "_self");
        }).catch((error) => {
            console.log(error);
        })
        }
    }

    const formValidation = () => {
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
            emailValidation.emailInvalid = "A valid email address must be entered.";
            isValid = false;
        }

        checkUsernameValidation(usernameValidation);
        checkPasswordValidation(passwordValidation);
        checkEmailValidation(emailValidation);
        return isValid;
    };

    return (
        <div className="ctn">
                <h1>MUVI</h1>
                <p>Update Your Account</p>
                <form>
                    <img></img>
                    <label className="label sr-only" htmlFor="username">Update Username</label>
                    <input id="username" placeholder={this.state.Username} type="text" value={username} onChange={e => changeUsername(e.target.value)}/>
                    {Object.keys(usernameValidation).map((key) => {
                        return (
                            <div className="validation-error" key={key}>
                                {usernameValidation[key]}
                            </div>
                        );
                    })}
                    <label className="label sr-only" htmlFor="password">Update Password</label>
                    <input id="username" plalceholder={this.state.Password} type="password" value={password} onChange={e => changePassword(e.target.value)}/>
                    {Object.keys(passwordValidation).map((key) => {
                        return (
                            <div className="validation-error" key={key}>
                                {passwordValidation[key]}
                            </div>
                        );
                    })}
                    <label className="label sr-only" htmlFor="email">Update Email</label>
                    <input id="email" placeholder={this.state.Email} type="email" value={email} onChange={e => changeEmail(e.target.value)}/>
                    {Object.keys(emailValidation).map((key) => {
                        return (
                            <div className="validation-error" key={key}>
                                {emailValidation[key]}
                            </div>
                        );
                    })}
                    <button className="form-btn btn-filled" type="button" onClick={updateInfo}>Update Account</button>
                </form>
            </div>
    )
}


export default UpdateView;