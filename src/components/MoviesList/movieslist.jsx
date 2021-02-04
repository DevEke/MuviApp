import React from 'react';
import { connect } from 'react-redux';
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

export default connect(mapStateToProps)(MoviesList);