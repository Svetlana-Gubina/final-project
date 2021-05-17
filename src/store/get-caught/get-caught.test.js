import {getCaught} from './get-caught';
import {ActionType} from '../action';

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(getCaught(undefined, {}))
      .toEqual({caughtPokemons: []});
  });

  it(`Reducer should add pokemon to caught`, () => {
    const state = {caughtPokemons: []};
    const pokemons = [{
      "name": `charmeleon`,
      "id": 5,
      "isCaught": true,
      "captureDate": `2021-05-16T13:19:55.934Z`
    },
    {
      "name": `charizard`,
      "id": 6,
      "isCaught": true,
      "captureDate": `2021-05-16T13:18:55.671Z`
    },
    {
      "name": `squirtle`,
      "id": 7
    },
    {
      "name": `wartortle`,
      "id": 8
    }];
    const getCaughtPokemons = {
      type: ActionType.GET_CAUGHT_POKEMONS,
      payload: pokemons
    };

    expect(getCaught(state, getCaughtPokemons))
      .toEqual({caughtPokemons: [pokemons[0], pokemons[1]]});
  });

});
