import MockAdapter from 'axios-mock-adapter';
import {api} from '../api';
import {getPokemonsList} from './api-actions';
import {AppRoute} from '../constants';

const pokemons = [
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

describe(`Test API call`, () => {

  it(`Should make a correct API call to /pokemons`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const getPokemonsListLoader = getPokemonsList();

    apiMock
      .onGet(AppRoute.POKEMON)
      .reply(200, pokemons);

    return getPokemonsListLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
      });
  });
});
