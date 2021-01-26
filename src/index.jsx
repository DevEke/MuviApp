import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

class MooviesApp extends React.Component {
    render() {
        return (
            <div className="moovies-app">
                <div>Good Morning</div>
            </div>
        )
    }
}

const container = document.getElementsByClassName('app-container')[0];

ReactDOM.render(React.createElement(MooviesApp), container);