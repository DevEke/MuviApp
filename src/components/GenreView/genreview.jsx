import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './genreview.scss';
import back from '../../img/back.svg';
import MovieCard from '../MovieCard/moviecard';

class GenreView extends Component {
    constructor() {
        super();
    }

    render() {
        const { movies, genre } = this.props;
        return (
            <div className="genre-container">
                <div className="genre-view">
                    <Link className="genre-flex-start-btn" to="/">
                        <button className="genre-view-back-btn">
                            <img src={back} alt="back icon"/>
                        </button>
                    </Link>
                    <div className="genre-info-container">
                        <div className="genre-info">
                            <h1 className="genre-view-name">{genre.Genre.Name}</h1>
                            <p className="genre-view-description">{genre.Genre.Description}</p>
                        </div>
                    </div>
                </div>
                <h2 className="genre-title">{genre.Genre.Name} Movies</h2>
                <div className="genre-movies-flex">
                {movies.map((movie) => {
                    if (movie.Genre.Name === genre.Genre.Name) {
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

GenreView.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
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
            })
        })
    )
}

export default GenreView;