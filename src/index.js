import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {api} from './api';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import browserHistory from './browser-history';
import {Router} from 'react-router-dom';
import App from './components/app/app';
import {reducer} from './store/reducer';

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
    )
);

ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <App />
      </Router>
    </Provider>,
    document.getElementById(`root`)
);
