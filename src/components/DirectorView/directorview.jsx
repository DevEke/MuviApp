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
            <div className="director-view-container">
                <div className="director-view">
                    <Link to="/" className="director-view-flex-start-btn">
                        <button className="director-view-back-btn">
                            <img src={back} alt="back icon"/>
                            <p>Back</p>
                        </button>
                    </Link>
                    <img className="director-image" src={director.Director.ImageURL}/>
                    <div className="director-container">
                        <div className="director-info">
                            <h1 className="director-view-director">{director.Director.Name}</h1>
                            <small className="director-view-birthday">{new Date(director.Director.Birthday).toLocaleDateString(
                                'en-gb', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'utc'})}</small>
                            <p className="director-view-bio">{director.Director.Bio}</p>
                        </div>
                    </div>
                </div>
                <h2 className="director-title">Movies by {director.Director.Name}</h2>
                <div className="director-view-movies-flex">
                    {movies.map((movie) => {
                            if (movie.Director.Name === director.Director.Name) {
                                return (
                                        <MovieCard key={movie._id}  movie={movie}/>
                                )
                            }
                        })}
                </div>
            </div>
            
        )
    }
}

DirectorView.propTypes = {
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
    )
}

export default DirectorView;

