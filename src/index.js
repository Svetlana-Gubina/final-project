import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {api} from './api';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import browserHistory from './browser-history';
import {Router} from 'react-router-dom';
import App from './components/app/app';
import {reducer} from './store/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk.withExtraArgument(api)),
));


ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <App />
      </Router>
    </Provider>,
    document.getElementById(`root`)
);
