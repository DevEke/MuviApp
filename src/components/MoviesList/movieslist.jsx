import React  from 'react';
import { connect } from 'redux';
import MovieCard from './components/MovieCard/moviecard';


const mapStateToProps = (state) => {
    const { moviesFilter } = state;
    return { moviesFilter };
}

function MoviesList(props) {
    const { movies, moviesFilter } = props;
    let filteredMovies = movies;

    if (moviesFilter !== '') {
        filteredMovies = movies.filter((movies) => movie.Title.includes(moviesFilter));
    }

    return (
        <div>
            <MovieSearch movieFilter={movieFilter}/>
            {filteredMovies.map((movie) => <MovieCard key={movie._id} movie={movie}/> )}
        </div>
        ) 
}

export default connect(mapStateToProps, null)(MoviesList);