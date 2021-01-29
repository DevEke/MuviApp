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
            <div className="genre-view">
                <Link className="flex-start-btn" to="/">
                    <button className="btn back">
                        <img src={back} alt="back icon"/>
                    </button>
                </Link>
                <div className="genre-container">
                    <div className="genre-info">
                        <h1>{genre.Genre.Name}</h1>
                        <p>{genre.Genre.Description}</p>
                    </div>
                    <div className="movies-flex">
                        {movies.map((movie) => {
                            if (movie.Genre.Name === genre.Genre.Name) {
                                return (
                                        <MovieCard className="moviecard" key={movie._id}  movie={movie}/>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>           
        )
    }
}

GenreView.propTypes = {
    movie: PropTypes.shape({
        Genre: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Description: PropTypes.string.isRequired
        })
    }).isRequired
}

export default GenreView;