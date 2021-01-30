import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import './profileview';
import MovieCard from '../MovieCard/moviecard';

class ProfileView extends Component {
    constructor() {
        super();

        this.state = {
            username: "",
            password: "",
            email: "",
            favoriteMovies: [],
            movies: ""
        }
    }

    componentDidMount() {
        let accessToken = localStorage.getItem('token');
        this.getUser(accessToken);
    }

    getUser(token) {
        let url = "https://muvi-app.herokuapp.com/users/" + localStorage.getItem("user");
        axios.get(url, {
            headers: {Authorization: `Bearer ${token}`},
        }).then((response) => {
            this.setState({
                username: response.data.Username,
                password: response.data.Password,
                email: response.data.Email,
                favoriteMovies: response.data.FavoriteMovies
            });
        });
    }

    unRegister() {
        let token = localStorage.getItem("token");
        let user = localStorage.getItem("user");
        let url = "https://muvi-app.herokuapp.com/users/" + user;
        axios.delete(url, {
            headers: {Authorization: `Bearer ${token}`}
        }).then((response) => {
            localStorage.clear();
            window.location.pathname = "/";
        }).catch((error) => {
            console.log("Account could not be deleted")
        });
    }
    
    

    render() {
        return (
            <div className="ctn">
                <h1>MUVI</h1>
                <p>{this.state.Username}'s Account</p>
                <form>
                    <img></img>
                    <label className="label sr-only" htmlFor="username">Update Username</label>
                    <input id="username" placeholder={this.state.Username} type="text" value={username} disabled/>
                    <label className="label sr-only" htmlFor="password">Update Password</label>
                    <input id="username" plalceholder={this.state.Password} type="password" value={password} disabled/>
                    <label className="label sr-only" htmlFor="email">Update Email</label>
                    <input id="email" placeholder={this.state.Email} type="email" value={email} disabled/>
                    <Link to={`/update/${this.state.Username}`}><button className="form-btn btn-filled" type="button" onClick={updateInfo}>Update Account</button></Link>
                    <button className="delete-btn" onClick={() => this.unRegister()}>Delete Account</button>
                </form>
            </div>
        )

    }  
}


export default ProfileView;