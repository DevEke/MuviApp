import React, {Component} from 'react';

class MovieCard extends Component {
    render() {
        const {movie, onClick } = this.props;
        return (
            <div className="movie-card" onClick={() => onClick(movie)}>{movie.Title}</div>
        )
    }
}

export default MovieCard;