import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import * as reactRedux from 'react-redux';
import Caught from './caught';

const data = [
  {
    "name": `bulbasaur`,
    "id": 1
  },
  {
    "name": `ivysaur`,
    "id": 2,
    "isCaught": true,
    "captureDate": `2021-05-17T14:44:37.084Z`
  },
  {
    "name": `venusaur`,
    "id": 3
  },
  {
    "name": `charmander`,
    "id": 4,
    "isCaught": true,
    "captureDate": `2021-05-17T14:45:14.301Z`
  },
  {
    "name": `charmeleon`,
    "id": 5
  },
  {
    "name": `charizard`,
    "id": 6
  },
];

jest.mock(`../../store/api-actions`, () => {
  return {
    getPokemonsList: jest.fn().mockImplementation(() => {
      return {
        type: `test`
      };
    })
  };
});

describe(`Test Caught`, () => {

  const state = {
    DATA: {
      pokemons: data,
      isDataLoaded: true,
    },
    DATA_ERROR: {
      hasDataError: false
    },
    CATCH_POKEMON_ERROR: {
      hasCacthPokemonError: false
    }
  };
  const mockStore = configureStore();
  let store;
  beforeEach(() => {
    store = mockStore(state);
  });
  it(`Render 'Caught' correctly`, () => {
    const history = createMemoryHistory();

    render(
        <reactRedux.Provider store={store}>
          <Router history={history}>
            <Caught />
          </Router>
        </reactRedux.Provider>
    );

    expect(screen.getByText(/ivysaur/i)).toBeInTheDocument();
  });
});
