import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './directorview.scss';
import back from '../../img/back.svg';
import MovieCard from '../MovieCard/moviecard';

class DirectorView extends Component {
    constructor() {
        super();
    }

    render() {
        const { movies, director } = this.props;
        return (
            <div>
                <div className="director-view">
                <Link to="/" className="flex-start-btn">
                    <button className="btn back">
                        <img src={back} alt="back icon"/>
                    </button>
                </Link>
                <img className="director-image" src={director.Director.ImageURL}/>
                <div className="director-container">
                    <div className="director-info">
                        <h1>{director.Director.Name}</h1>
                        <small>Born {director.Director.Birthday}</small>
                        <p>{director.Director.Bio}</p>
                    </div>
                </div>
                </div>
                <h2 className="director-title">Movies by {director.Director.Name}</h2>
                <div className="movies-flex">
                {movies.map((movie) => {
                        if (movie.Director.Name === director.Director.Name) {
                            return (
                                    <MovieCard className="moviecard" key={movie._id}  movie={movie}/>
                            )
                        }
                    })}
                </div>
            </div>
            
        )
    }
}

DirectorView.propTypes = {
    movie: PropTypes.shape({
        Director: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Birthday: PropTypes.string.isRequired,
            Bio: PropTypes.string.isRequired
        })
    }).isRequired
}

export default DirectorView;

