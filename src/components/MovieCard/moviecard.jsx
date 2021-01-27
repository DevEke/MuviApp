import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
    render() {
        const {movie, onClick } = this.props;
        return (
            <div className="movie-card" onClick={() => onClick(movie)}>{movie.Title}</div>
        )
    }
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        ImageURL: PropTypes.string.isRequired
    }).isRequired,
    onClick: PropTypes.func.isRequired
};

export default MovieCard;