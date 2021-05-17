import {loadData} from './load-pokemons';
import {ActionType} from '../action';

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(loadData(undefined, {}))
      .toEqual({pokemons: [],
        isDataLoaded: false});
  });

  it(`Reducer should add pokemon to caught`, () => {
    const state = {pokemons: [],
      isDataLoaded: false};
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
    const loadPokemons = {
      type: ActionType.LOAD_POKEMONS,
      payload: pokemonsList
    };

    expect(loadData(state, loadPokemons))
      .toEqual({pokemons: pokemonsList,
        isDataLoaded: true});
  });

});
