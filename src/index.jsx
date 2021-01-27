import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import MainView from './components/MainView/mainview';

class MooviesApp extends Component {
    render() {
        return (
            <Container>
                <MainView/>
            </Container> 
        )
    }
}

const container = document.getElementsByClassName('app-container')[0];

ReactDOM.render(React.createElement(MooviesApp), container);