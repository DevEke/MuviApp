import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './moviecard.scss';
import { Link } from 'react-router-dom';

class MovieCard extends Component {
    render() {
        const { movie } = this.props;
        return (
            <Link to={`/movies/${movie._id}`}>
                <div className="movie-card">
                    <img className="img-sizer" src={movie.ImageURL} />
                    <div className="movie-overlay">
                        <h1>{movie.Title}</h1>
                        <small>{movie.Genre.Name}</small>
                        <p>{movie.Description}</p>
                    </div>
                </div>
            </Link>
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
    }).isRequired
};

export default MovieCard;