import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import * as reactRedux from 'react-redux';
import PokemonList from './pokemon-list';

const mockStore = configureStore({});
let history;
let store;

const pokemonsList = [
  {
    "name": `bulbasaur`,
    "id": 1
  },
  {
    "name": `ivysaur`,
    "id": 2
  },
  {
    "name": `venusaur`,
    "id": 3
  },
  {
    "name": `charmander`,
    "id": 4
  },
  {
    "name": `charmeleon`,
    "id": 5
  }];

describe(`Test PokemonList`, () => {
  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore({});
  });
  it(`Should PokemonList render correctly`, () => {
    const pokemons = pokemonsList;
    const {container} = render(
        <reactRedux.Provider store={store}>
          <Router history={history}>
            <PokemonList pokemons={pokemons} />
          </Router>
        </reactRedux.Provider>
    );
    expect(container).toMatchSnapshot();
  });
});

