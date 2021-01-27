import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from '../MovieCard/moviecard';
import MovieView from '../MovieView/movieview';



class MainView extends Component {
    constructor() {
        super();
        this.state = {
            movies: null,
            selectedMovie: null
        }
    }

    componentDidMount() {
        axios.get('https://moovies-app-0088.herokuapp.com/movies')
        .then(response => {
            this.setState({
                movies: response.data
            })
            .catch(function(error) {
                console.log(error);
            });
        })
    }

    onMovieClick(movie) {
        this.setState({
            selectedMovie: movie
        });
    }

    goBack() {
        this.setState({
            selectedMovie: null
        });
    }

    render() {
        const { movies, selectedMovie } = this.state;
        if (!movies) return <div className="mainview"/>
        return (
            <div className="main-view">
                {selectedMovie 
                    ? <MovieView movie={selectedMovie} onClick={() => this.goBack()}/> 
                    : movies.map(movie => (
                        <MovieCard className="moviecard" key={movie._id} movie={movie} onClick={movie => this.onMovieClick(movie)}/>
                    ))
                }
            </div>
        );
    }
}

export default MainView;