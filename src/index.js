import React from 'react';
import ReactDOM from 'react-dom';
import App from './myBook/App.jsx';
import * as serviceWorker from './serviceWorker';
import store from './myBook/Redux/redux-store.js';
import { Provider } from 'react-redux';
import './index.css';

let renderTreeDOM = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, document.getElementById('root')
    );
};

renderTreeDOM();

serviceWorker.unregister();
