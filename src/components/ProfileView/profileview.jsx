import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/actions';
import { setFavorites } from '../../actions/actions';
import { Link } from 'react-router-dom';
import './profileview.scss';
import back from '../../img/back.svg';
import user from '../../img/user100.svg';
import close from '../../img/close.svg';
import '../MovieCard/moviecard.scss';

class ProfileView extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let accessToken = localStorage.getItem('token');
        this.getUser(accessToken);
    }

    getUser(token) {
        let { updateUsername, updatePassword, updateEmail } = this.props.updateUser;
        let { setFavorites } = this.props;
        let user = localStorage.getItem("user")
        let url = "https://muvi-app.herokuapp.com/users/" + user;
        axios.get(url, {
            headers: {Authorization: `Bearer ${token}`},
        }).then((response) => {
            updateUsername(response.data.Username);
            updatePassword(response.data.Password);
            updateEmail(response.data.Email);
            setFavorites(response.data.FavoriteMovies);
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


    removeFavorite(movie) {
        let { setFavorites } = this.props;
        let token = localStorage.getItem('token');
        let user = localStorage.getItem('user');
        let url = "https://muvi-app.herokuapp.com/users/" + user + "/favorites/" + movie._id;
        axios.delete(url, {
            headers: { Authorization: `Bearer ${token}`},
        }).then((response) => {
            let data = response.data;
            setFavorites(data.FavoriteMovies);
            this.componentDidMount();
        }).catch((error) => {
            console.log('Error removing movie from favorites');
        });
    }
    
    

    render() {
        const { movies, username, favoriteMovies } = this.props;
        const favMovies = movies.filter((movie) => {
            return favoriteMovies.includes(movie._id);
        })
        return (
            <div className="profile-container">
                <div className="profile-info">
                    <Link className="flex-start-btn" to="/">
                        <button className="profile-view-back-btn">
                            <img src={back} alt="back icon"/>
                        </button>
                    </Link>
                    <img className="profile-image" src={user}/>
                    <h1>{username}</h1>
                    <Link to={`/update/${username}`}><button className="profile-update-account-btn" type="button">Update Account</button></Link>
                    <button className="delete-account-btn" onClick={() => this.unRegister()}>Delete Account</button>
                </div>
                <div className="favorite-movie-container">
                    <h2 className="favorite-movie-title">Favorite Movies</h2>
                    <div className="movie-grid">
                    {favMovies.map((movie) => {
                        return (
                            <div key={movie._id} className="movie-card">
                                <button onClick={() => this.removeFavorite(movie)} className="remove-favorite-btn">
                                    <img src={close}/>
                                </button>
                                <img className="img-sizer" src={movie.ImageURL} />
                                <div className="movie-overlay">
                                    <h2 className="movie-card-title">{movie.Title}</h2>
                                    <small className="movie-card-genre">{movie.Genre.Name}</small>
                                    <p className="movie-card-description">{movie.Description}</p>
                                </div>
                            </div> 
                        )
                    })}
                    </div>
                </div>
            </div>
        )

    }  
}

let mapStateToProps = (state) => {
    return { 
        username: state.username,
        password: state.password,
        email: state.email,
        favoriteMovies: state.favoriteMovies
    }
}

export default connect(mapStateToProps, { updateUser, setFavorites })(ProfileView);