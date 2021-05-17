import React from 'react';
import ReactDOM from 'react-dom';
import {api} from './api';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import browserHistory from './browser-history';
import {Router} from 'react-router-dom';
import App from './components/app/app';
import rootReducer from './store/root-reducer/root-reducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    })
});


ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <App />
      </Router>
    </Provider>,
    document.getElementById(`root`)
);
