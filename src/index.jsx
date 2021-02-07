import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import './index.scss';
import MainView from './components/MainView/mainview';
import muviApp from './reducers/reducers';

const store = createStore(muviApp, applyMiddleware(thunk));

class MuviApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <MainView />
            </Provider>
        )
    }
}

const container = document.getElementsByClassName('app-container')[0];

ReactDOM.render(React.createElement(MuviApp), container);