import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './profileview.scss';
import back from '../../img/back.svg';
import update from '../../img/update-account.svg';
import remove from '../../img/delete-account.svg';
import close from '../../img/close.svg';
import '../MovieCard/moviecard.scss';

class ProfileView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            email: "",
            favoriteMovies: []
        }
    }

    componentDidMount() {
        let accessToken = localStorage.getItem('token');
        this.getUser(accessToken);
    }

    getUser(token) {
        let user = localStorage.getItem("user")
        let url = "https://muvi-app.herokuapp.com/users/" + user;
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
            alert("Account successfully unregistered. Returning to Login Screen.");
        }).catch((error) => {
            console.log("Account could not be deleted")
        });
    }


    removeFavorite(movie) {
        let token = localStorage.getItem('token');
        let user = localStorage.getItem('user');
        let url = "https://muvi-app.herokuapp.com/users/" + user + "/favorites/" + movie._id;
        axios.delete(url, {
            headers: { Authorization: `Bearer ${token}`},
        }).then((response) => {
            let data = response.data;
            this.setState({
                favoriteMovies: data.FavoriteMovies
            });
            console.log(this.state.favoriteMovies);
            alert("Movie successfully removed from favorites list.");
            this.componentDidMount();
        }).catch((error) => {
            console.log('Error removing movie from favorites');
        });
    }
    
    

    render() {
        const { username, favoriteMovies } = this.state;
        const { movies } = this.props;
        const favMovies = movies.filter((movie) => {
            return favoriteMovies.includes(movie._id);
        })
        return (
            <div className="profile-container">
                <div className="profile-info">
                    <Link className="flex-start-btn" to="/">
                        <button className="profile-view-back-btn">
                            <img src={back} alt="back icon"/>
                            <p>Back</p>
                        </button>
                    </Link>
                    <div className="profile-btns">
                        <Link style={{textDecoration: "none"}}to={`/update/${username}`}>
                            <button className="profile-update-account-btn" type="button">
                                <img src={update}/>
                                <p>Edit Account</p>
                            </button>
                        </Link>
                        <button className="delete-account-btn" onClick={() => this.unRegister()}>
                            <img src={remove}/>
                            <p>Delete Account</p>
                        </button>
                    </div>
                </div>
                <div className="favorite-movie-container">
                    <h2 className="favorite-movie-title">{username}'s Favorite Movies</h2>
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
                                    <p className="movie-card-genre">{new Date(movie.ReleaseDate).getFullYear()} - {movie.Genre.Name}</p>
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

ProfileView.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            Title: PropTypes.string.isRequired,
            Description: PropTypes.string.isRequired,
            ImageURL: PropTypes.string.isRequired,
            BackdropImage: PropTypes.string.isRequired,
            Director: PropTypes.shape({
                Name: PropTypes.string.isRequired,
                Bio: PropTypes.string,
            }),
            Genre: PropTypes.shape({
                Name: PropTypes.string.isRequired,
                Description: PropTypes.string
            })
        })
    ).isRequired
};

export default ProfileView;