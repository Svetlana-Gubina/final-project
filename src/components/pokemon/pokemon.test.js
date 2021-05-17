import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import * as reactRedux from 'react-redux';
import Pokemon from './pokemon';

const mockStore = configureStore({});
let history;
let store;


describe(`Test Pokemon`, () => {
  const useSelectorMock = jest.spyOn(reactRedux, `useSelector`);
  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore({});
    useSelectorMock.mockClear();
  });


  it(`should render LoadingScreen before data is fetched`, () => {
    useSelectorMock.mockReturnValue({
      pokemons: [],
    });

    render(
        <reactRedux.Provider store={store}>
          <Router history={history}>
            <Pokemon />
          </Router>
        </reactRedux.Provider>
    );

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });
});
