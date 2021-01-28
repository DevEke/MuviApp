import React, {Component} from 'react';
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
        const { movie, onClick } = this.props;
        if (!movie) return null;

        return (
            <div className="movie-view">
                <button className="btn back" onClick={() => onClick()}>
                        <img src={back} alt="back icon"/>
                    </button>
                <img className="movie-poster" src={movie.ImageURL}/>
                <div className="movie-info">
                    <h1 className="value">{movie.Title}</h1>
                    <h2>{movie.Director.Name}</h2>
                    <small className="value">{movie.Genre.Name}</small>
                    <p className="value">{movie.Description}</p>
                    <button className="btn fav">
                        <img src={heart} alt="add icon"/>
                    </button>
                </div>
            </div>
        )
    }
}

export default MovieView;