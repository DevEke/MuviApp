import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieSearch from '../MovieSearch/moviesearch';
import MovieCard from '../MovieCard/moviecard';
import './movieslist.scss';

const mapStateToProps = (state) => {
    const { movieFilter } = state;
    return { movieFilter };
}

function MoviesList(props) {
    const { movies, movieFilter } = props;
    let filteredMovies = movies;

    if (movieFilter !== '') {
        filteredMovies = movies.filter((movie) => movie.Title.includes(movieFilter));
    }

    if (!movies) return null;

    return (
            <div className="movies-list">
                <MovieSearch movieFilter={movieFilter}/>
                <div className="movie-layout">
                    {filteredMovies.map((movie) => <MovieCard key={movie._id} movie={movie}/>)}
                </div>
            </div>
        );
}

MoviesList.propTypes = {
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
    ),
    movieFilter: PropTypes.string
}

export default connect(mapStateToProps)(MoviesList);