import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import MovieCard from '../MovieCard/moviecard';
import MovieView from '../MovieView/movieview';
import LoginView from '../LoginView/loginview';
import RegisterView from '../RegisterView/registerview';
import DirectorView from '../DirectorView/directorview';
import GenreView from '../GenreView/genreview';
import ProfileView from '../ProfileView/profileview';
import UpdateView from '../UpdateView/updateview';
import profile from '../../img/user.svg';
import './mainview.scss';



class MainView extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            user: null,
            newUser: false
        }
    }

    componentDidMount() {
        let accessToken = localStorage.getItem('token');
        if (accessToken !== null) {
            this.setState({
                user: localStorage.getItem('user')
            });
            this.getMovies(accessToken);
        }
    }

    onLoggedIn(authData) {
        console.log(authData);
        this.setState({
            user: authData.user.Username,
        });
        localStorage.setItem('token', authData.token);
        localStorage.setItem('user', authData.user.Username);
        this.getMovies(authData.token);
    }

    getMovies(token) {
        axios.get('https://muvi-app.herokuapp.com/movies', {
            headers: {Authorization: `Bearer ${token}`}
        })
        .then((response) => {
            this.setState({
                movies: response.data
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }

    onSignOut() {
        localStorage.clear();
        this.setState({
            user: null
        })
    }

    render() {
        const { user, movies } = this.state;


        return (
            <Router>
                <div className="main-view">
                    <div className="nav">
                        <h1>MUVI</h1>
                        <div>
                            <Link to="/users/:userId">
                                <button className="account btn">
                                    <img src={profile} alt="profile icon"/>
                                </button>
                            </Link>
                            <Link to="/"><button onClick={() => this.onSignOut()} className="signout btn">Sign Out</button></Link>
                        </div>
                    </div>
                    <div className="movie-grid">
                        <Route exact path="/" render={() => 
                            { if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)}/>;
                            return movies.map(movie => <MovieCard className="moviecard" key={movie._id}  movie={movie}/>)
                            }
                        }/>
                        <Route path="/movies/:movieId" render={({match}) => <MovieView movie={movies.find(movie => movie._id === match.params.movieId)}/>}/>
                        <Route path="/register" render={() => <RegisterView />}/>
                        <Route path="/directors/:name" render={({match}) => { 
                            if (!movies) return <div className="main-view"/>;
                            return <DirectorView director={movies.find(movie => movie.Director.Name === match.params.name)} movies={movies}/>}}
                        />
                        <Route path="/genres/:name" render={({match}) => {
                            if (!movies) return <div className="main-view"/>;
                            return <GenreView genre={movies.find(movie => movie.Genre.Name === match.params.name)} movies={movies}/>}}
                        />
                        <Route exact path="/users/:userId" render={() => {
                            <ProfileView movies={movies}/>}}
                        />
                        <Route path="/users/:userId" render={() => {
                            return <UpdateView/>}}
                        />
                    </div>         
                </div>
            </Router>
        );
    }
}


export default MainView;