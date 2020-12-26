import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./redux/store";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
//basename={process.env.PUBLIC_URL}
ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>,
    document.getElementById('root')
);
