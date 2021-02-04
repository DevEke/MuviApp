import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import './index.scss';
import MainView from './components/MainView/mainview';
import muviApp from './reducers/reducers';

const store = createStore(muviApp, devToolsEnhancer());

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