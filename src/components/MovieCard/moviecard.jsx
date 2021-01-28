import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './moviecard.scss';

class MovieCard extends Component {
    render() {
        const {movie, onClick } = this.props;
        return (
            <div className="movie-card" onClick={() => onClick(movie)}>
                <img className="img-sizer" src={movie.ImageURL} />
                <div className="movie-overlay">
                    <h1>{movie.Title}</h1>
                    <small>{movie.Genre.Name}</small>
                    <p>{movie.Description}</p>
                </div>
            </div>
        )
    }
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        ImageURL: PropTypes.string.isRequired,
        Director: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Bio: PropTypes.string,
        }).isRequired,
        Genre: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Description: PropTypes.string
        }).isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired
};

export default MovieCard;