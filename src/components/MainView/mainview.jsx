import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { getMovies, setUser } from '../../actions/actions';;
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
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let accessToken = localStorage.getItem('token');
        let user = localStorage.getItem('user');
        if (accessToken !== null) {
            setUser(user);
            this.retrieveMovies(accessToken);
        }
    }

    onLoggedIn(authData) {
        console.log(authData);
        setUser(authData.user.Username);
        localStorage.setItem('token', authData.token);
        localStorage.setItem('user', authData.user.Username);
        this.retrieveMovies(authData.token);
    }

    retrieveMovies(token) {
        axios.get('https://muvi-app.herokuapp.com/movies', {
            headers: {Authorization: `Bearer ${token}`}
        })
        .then((response) => {
            this.props.getMovies(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    onSignOut() {
        localStorage.clear();
        this.props.setUser(null)
    }

    render() {
        const { user, movie, movies } = this.props;


        return (
            <Router>
                <div className="main-view">
                    <div className="nav">
                        <h1>MUVI</h1>
                        <div className="nav-button-flex">
                            <Link to="/users/:userId">
                                <button className="account-btn">
                                    <img src={profile} alt="profile icon"/>
                                </button>
                            </Link>
                            <Link to="/"><button onClick={() => this.onSignOut()} className="signout-btn">Sign Out</button></Link>
                        </div>
                    </div>
                    <div className="movie-grid">
                        <Route exact path="/" render={() => 
                            { if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)}/>;
                            return <MoviesList movies={movies}/>;
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
                        <Route path="/users/:userId" render={() => {
                            return <ProfileView movies={movies} movie={movie}/>}}
                        />
                        <Route path="/update/:userId" render={() => {
                            return <UpdateView/>}}
                        />
                    </div>         
                </div>
            </Router>
        );
    }
}

let mapStateToProps = state => {
    return { 
        user: state.user,
        movies: state.movies 
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getMovies: () => dispatch(getMovies()),
        setUser: () => dispatch(setUser())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainView);