import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from '../MovieCard/moviecard';
import MovieView from '../MovieView/movieview';
import LoginView from '../LoginView/loginview';
import RegisterView from '../RegisterView/registerview';



class MainView extends Component {
    constructor() {
        super();
        this.state = {
            movies: null,
            selectedMovie: null,
            user: null,
            newUser: false
        }
    }

    componentDidMount() {
        axios.get('https://moovies-app-0088.herokuapp.com/movies')
        .then((response) => {
            this.setState({
                movies: response.data
            })
            .catch((error) => {
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

    onLoggedIn(user) {
        this.setState({
            user: user
        })
    }

    onRegistered(user) {
        this.setState({
            user: user,
            newUser: false
        })
    }

    toRegister() {
        this.setState({
            newUser: true
        })
    }

    toLogin() {
        this.setState({
            newUser: false
        })
    }

    render() {
        const { movies, selectedMovie, newUser, user } = this.state;
        if (!movies) return <div className="mainview"/>;
        
        if (newUser) return <RegisterView onRegistered={user => this.onRegistered(user)} toLogin={() => this.toLogin()}/>;

        if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} toRegister={() => this.toRegister()}/>;

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