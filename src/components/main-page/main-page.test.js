import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as reactRedux from 'react-redux';
import configureStore from 'redux-mock-store';
import MainPage from './main-page';


jest.mock(`../../store/api-actions`, () => {
  return {
    getPokemonsList: jest.fn().mockImplementation(() => {
      return {
        type: `test`
      };
    })
  };
});

describe(`Test MainPage`, () => {
  const state = {
    DATA: {
      pokemons: [],
      isDataLoaded: false,
    },
    DATA_ERROR: {
      hasDataError: false
    },
    CATCH_POKEMON_ERROR: {
      hasCacthPokemonError: false
    }
  };
  const mockStore = configureStore();
  let history;
  let store;
  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore(state);
  });
  it(`should render LoadingScreen before data is fetched`, () => {
    render(
        <reactRedux.Provider store={store}>
          <Router history={history}>
            <MainPage />
          </Router>
        </reactRedux.Provider>
    );

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });
});
