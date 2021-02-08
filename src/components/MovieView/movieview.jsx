import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './movieview.scss';
import back from '../../img/back.svg';
import heart from '../../img/heart.svg';
import axios from 'axios';


class MovieView extends Component {
    constructor() {
        super();
    }

    addtoFavorites(movie) {
        let token = localStorage.getItem('token');
        let url = "https://muvi-app.herokuapp.com/users/" + localStorage.getItem('user') + "/favorites/" + movie._id;
        axios.post(url, "", {
            headers: {Authorization: `Bearer ${token}`},
        }).then((response) => {
            console.log(response);
            alert("Movie added to favorites. Check your profile.")
        }).catch((error) => {
            console.log('Error Adding movie to favorites.')
        });
    }

    

    render() {
        const { movie } = this.props;
        if (!movie) return null;

        return (
            <div className="movie-view">
                <Link to="/" className="movie-view-flex-start-btn">
                    <button className="movie-view-back-btn">
                        <img src={back} alt="back icon"/>
                    </button>
                </Link>
                <img className="movie-poster" src={movie.ImageURL}/>
                <div className="movie-info">
                    <h1 className="movie-view-title">{movie.Title}</h1>
                    <Link to={`/directors/${movie.Director.Name}`} className="text-link"><h2 className="movie-view-director">Directed By {movie.Director.Name}</h2></Link>
                    <Link to={`/genres/${movie.Genre.Name}`} className="text-link"><small className="movie-view-genre">{movie.Genre.Name}</small></Link>
                    <p className="movie-view-description">{movie.Description}</p>
                    <button onClick={() => this.addtoFavorites(movie)} className="favorite-btn">
                        <img src={heart} alt="fav icon"/>
                    </button>
                </div>
            </div>
        )
    }
}

MovieView.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        ImageURL: PropTypes.string.isRequired,
        Director: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Bio: PropTypes.string,
        }),
        Genre: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Description: PropTypes.string
        }),
    }).isRequired
};

export default MovieView;