import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './movieview.scss';
import back from '../../img/back.svg';
import heart from '../../img/heart.svg';
import plus from '../../img/plus.svg';


class MovieView extends Component {
    constructor() {
        super();
        this.state = {
            favorite: false
        }
    }

    addtoFavorites() {
        this.setState({
            favorite: true
        })
    }

    render() {
        const { movie } = this.props;
        if (!movie) return null;

        return (
            <div className="movie-view">
                <Link to="/" className="flex-start-btn">
                    <button className="btn back">
                        <img src={back} alt="back icon"/>
                    </button>
                </Link>
                <img className="movie-poster" src={movie.ImageURL}/>
                <div className="movie-info">
                    <h1>{movie.Title}</h1>
                    <Link to={`/directors/${movie.Director.Name}`} className="text-link"><h2>{movie.Director.Name}</h2></Link>
                    <Link to={`/genres/${movie.Genre.Name}`} className="text-link"><small>{movie.Genre.Name}</small></Link>
                    <p>{movie.Description}</p>
                    <button className="btn fav">
                        <img src={heart} alt="add icon"/>
                    </button>
                </div>
            </div>
        )
    }
}

MovieView.propTypes = {
    movie: PropTypes.shape({
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
        }),
    }).isRequired
};

export default MovieView;