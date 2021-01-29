import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import MainView from './components/MainView/mainview';

class MuviApp extends Component {
    render() {
        return (
            <MainView/>
        )
    }
}

const container = document.getElementsByClassName('app-container')[0];

ReactDOM.render(React.createElement(MuviApp), container);