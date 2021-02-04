import React from 'react';
import { connect } from 'react-redux';
import MovieCard from '../MovieCard/moviecard';

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

    return filteredMovies.map((movie) => <MovieCard key={movie._id} movie={movie}/>);
}

export default connect(mapStateToProps)(MoviesList);